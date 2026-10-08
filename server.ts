import express from 'express';
import { createServer as createViteServer } from 'vite';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import { GoogleGenAI, Type } from '@google/genai';

dotenv.config();

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function startServer() {
  const app = express();
  const PORT = process.env.PORT || 3000;

  app.use(express.json({ limit: '10mb' }));

  // Initialize Gemini AI on server side
  const apiKey = process.env.GEMINI_API_KEY;
  let ai: GoogleGenAI | null = null;
  if (apiKey) {
    ai = new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        },
      },
    });
  }

  // Health check endpoint
  app.get('/api/health', (req, res) => {
    res.json({
      status: 'ok',
      hasGeminiApiKey: Boolean(process.env.GEMINI_API_KEY),
      app: 'Ôn tập Hóa học - THPT Đakrông',
      timestamp: new Date().toISOString(),
    });
  });

  // AI Question Generation Endpoint for Teachers
  app.post('/api/gemini/generate-questions', async (req, res) => {
    try {
      const {
        grade = 12,
        chapter = 'Ester - Lipid',
        format = 'multiple_choice', // 'multiple_choice' | 'true_false' | 'short_answer'
        cognitiveLevel = 'understand', // 'know' | 'understand' | 'apply'
        count = 2,
        topicDescription = '',
      } = req.body;

      if (!ai) {
        return res.status(503).json({
          error: 'Chưa cấu hình GEMINI_API_KEY trên máy chủ. Vui lòng kiểm tra biến môi trường.',
        });
      }

      const formatInstruction =
        format === 'multiple_choice'
          ? 'Dạng 1: Trắc nghiệm 4 lựa chọn (A, B, C, D), đúng 1 phương án. Cung cấp mảng options 4 phần tử có id A, B, C, D và text, correctAnswer là "A", "B", "C" hoặc "D".'
          : format === 'true_false'
          ? 'Dạng 2: Trắc nghiệm đúng - sai theo định dạng mới GDPT 2018. Có ngữ liệu / tình huống thí nghiệm hoặc thực tế (stimulus) và 4 phát biểu/mệnh đề a, b, c, d (subItems). Mỗi mệnh đề có id ("a","b","c","d"), text, isCorrect (boolean), và explanation riêng.'
          : 'Dạng 3: Trắc nghiệm trả lời ngắn. Học sinh tính toán hoặc xác định công thức/giá trị số. Có acceptableAnswers (mảng các chuỗi đáp án hợp lệ, ví dụ ["12.5", "12,5"]), numericValue (số nếu có), unit (đơn vị nếu có, ví dụ "gam", "lít", "M"), tolerance (sai số, ví dụ 0.1), steps (các bước giải chi tiết).';

      const cognitiveName =
        cognitiveLevel === 'know'
          ? 'Biết (Nhận biết - 40%)'
          : cognitiveLevel === 'understand'
          ? 'Hiểu (Thông hiểu - 30%)'
          : 'Vận dụng (Vận dụng / Vận dụng cao - 30%)';

      const prompt = `Bạn là chuyên gia khảo thí Hóa học theo Chương trình GDPT 2018 của Bộ Giáo dục và Đào tạo Việt Nam.
Hãy tạo ${count} câu hỏi ôn tập Hóa học chất lượng cao cho học sinh Trường THPT Đakrông.

Thông tin yêu cầu:
- Lớp: ${grade}
- Chương / Chủ đề: ${chapter}
${topicDescription ? `- Yêu cầu bổ sung từ giáo viên: ${topicDescription}` : ''}
- Dạng câu hỏi: ${formatInstruction}
- Mức độ nhận thức: ${cognitiveName}

Yêu cầu nghiêm ngặt:
1. Kiến thức chuẩn xác 100% theo Chương trình GDPT 2018. Sử dụng đúng danh pháp IUPAC hiện hành (ví dụ: methyl ethanoate, propene, ethanol, glucose, sulfur dioxide...).
2. Công thức hóa học chuẩn xác, chỉ số và phương trình phản ứng cân bằng đúng (ví dụ: CH3COOC2H5 + NaOH -> CH3COONa + C2H5OH).
3. Lời giải thích chi tiết, sư phạm, chỉ rõ vì sao đáp án đúng và vì sao các phương án khác sai.
4. Đối với bài toán tính toán: có tóm tắt dữ kiện đề bài, yêu cầu cần tìm, công thức / phương trình áp dụng, từng bước biến đổi và đơn vị rõ ràng.
5. Luôn trả về kết quả dạng JSON hợp lệ theo schema sau.`;

      const response = await ai.models.generateContent({
        model: 'gemini-3.8-flash',
        contents: prompt,
        config: {
          systemInstruction:
            'Bạn là chuyên gia ra đề Hóa học THPT Việt Nam GDPT 2018. Trả về JSON mảng các câu hỏi tuân thủ đúng định dạng yêu cầu.',
          responseMimeType: 'application/json',
          responseSchema: {
            type: Type.ARRAY,
            description: 'Danh sách các câu hỏi hóa học',
            items: {
              type: Type.OBJECT,
              properties: {
                id: { type: Type.STRING, description: 'Mã câu hỏi ngẫu nhiên, ví dụ: Q-AI-1234' },
                grade: { type: Type.INTEGER },
                chapter: { type: Type.STRING },
                format: {
                  type: Type.STRING,
                  description: 'multiple_choice | true_false | short_answer',
                },
                cognitiveLevel: {
                  type: Type.STRING,
                  description: 'know | understand | apply',
                },
                content: { type: Type.STRING, description: 'Nội dung câu hỏi' },
                stimulus: {
                  type: Type.STRING,
                  description: 'Ngữ liệu/tình huống thí nghiệm nếu là dạng đúng sai hoặc câu hỏi có bối cảnh',
                },
                options: {
                  type: Type.ARRAY,
                  items: {
                    type: Type.OBJECT,
                    properties: {
                      id: { type: Type.STRING, description: 'A, B, C, hoặc D' },
                      text: { type: Type.STRING },
                    },
                    required: ['id', 'text'],
                  },
                },
                correctAnswer: {
                  type: Type.STRING,
                  description: 'Đáp án đúng cho dạng multiple_choice (A, B, C hoặc D)',
                },
                subItems: {
                  type: Type.ARRAY,
                  description: '4 mệnh đề a, b, c, d cho dạng đúng sai',
                  items: {
                    type: Type.OBJECT,
                    properties: {
                      id: { type: Type.STRING, description: 'a, b, c hoặc d' },
                      text: { type: Type.STRING },
                      isCorrect: { type: Type.BOOLEAN },
                      explanation: { type: Type.STRING },
                    },
                    required: ['id', 'text', 'isCorrect'],
                  },
                },
                acceptableAnswers: {
                  type: Type.ARRAY,
                  items: { type: Type.STRING },
                  description: 'Mảng các đáp án hợp lệ cho dạng trả lời ngắn',
                },
                numericValue: { type: Type.NUMBER },
                unit: { type: Type.STRING },
                tolerance: { type: Type.NUMBER },
                explanation: { type: Type.STRING, description: 'Lời giải thích chi tiết tổng quát' },
                calculationSteps: {
                  type: Type.ARRAY,
                  items: { type: Type.STRING },
                  description: 'Các bước giải chi tiết nếu là câu hỏi tính toán',
                },
                status: {
                  type: Type.STRING,
                  description: 'Trạng thái: "pending_approval" (chờ giáo viên duyệt)',
                },
              },
              required: ['grade', 'chapter', 'format', 'cognitiveLevel', 'content', 'explanation'],
            },
          },
        },
      });

      const responseText = response.text?.trim() || '[]';
      const parsedQuestions = JSON.parse(responseText);

      // Ensure each question has a clean id and pending status
      const questionsWithMeta = parsedQuestions.map((q: any, idx: number) => ({
        ...q,
        id: q.id || `Q-AI-${Date.now()}-${idx + 1}`,
        grade: Number(q.grade) || grade,
        chapter: q.chapter || chapter,
        format: q.format || format,
        cognitiveLevel: q.cognitiveLevel || cognitiveLevel,
        status: 'pending_approval',
        createdDate: new Date().toISOString(),
        createdBy: 'Gemini AI Assistant (Chờ duyệt)',
      }));

      return res.json({
        success: true,
        count: questionsWithMeta.length,
        questions: questionsWithMeta,
      });
    } catch (err: any) {
      console.error('Error generating questions with Gemini:', err);
      return res.status(500).json({
        error: 'Lỗi khi tạo câu hỏi từ Gemini API: ' + (err.message || 'Lỗi không xác định'),
      });
    }
  });

  // Serve static files in production or Vite middleware in development
  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  } else {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  }

  app.listen(Number(PORT), '0.0.0.0', () => {
    console.log(`Server is running at http://0.0.0.0:${PORT}`);
  });
}

startServer();
