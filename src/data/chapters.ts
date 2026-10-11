import { Chapter } from '../types';

export const ALL_CHAPTERS: Chapter[] = [
  // ==========================================
  // LỚP 10 (7 CHƯƠNG THEO GDPT 2018)
  // ==========================================
  {
    id: 'g10-c1',
    grade: 10,
    order: 1,
    code: 'HOA10-CH1',
    title: 'Chương 1: Cấu tạo nguyên tử',
    description: 'Thành phần nguyên tử, hạt nhân, vỏ electron, orbital nguyên tử (AO) và cấu hình electron.',
    lessons: [
      'Bài 1: Thành phần của nguyên tử',
      'Bài 2: Hạt nhân nguyên tử - Nguyên tố hóa học - Đồng vị',
      'Bài 3: Cấu trúc lớp vỏ electron của nguyên tử',
    ],
    objectives: [
      'Trình bày được thành phần nguyên tử gồm hạt nhân (proton, neutron) và vỏ electron.',
      'Nêu được kích thước và khối lượng tương đối của các hạt p, n, e.',
      'Viết được cấu hình electron nguyên tử của 20 nguyên tố đầu tiên.',
      'Xác định được số electron lớp ngoài cùng và dự đoán tính chất hóa học cơ bản.',
    ],
    keyKnowledge: [
      'Điện tích: proton (+1), electron (-1), neutron (0).',
      'Số khối A = Z + N (với Z là số proton, N là số neutron).',
      'Đồng vị: Cùng số proton Z, khác số neutron N nên số khối A khác nhau.',
      'Cấu hình electron: 1s 2s 2p 3s 3p 4s 3d...',
    ],
    theorySummary: `Nguyên tử gồm hạt nhân mang điện tích dương ở tâm và các electron mang điện tích âm chuyển động trong không gian xung quanh.
- Khối lượng nguyên tử tập trung chủ yếu ở hạt nhân (m_p ≈ m_n ≈ 1 amu; m_e ≈ 0,00055 amu).
- Số electron tối đa trong lớp n là 2n² (với n ≤ 4).
- AO s có dạng hình cầu; AO p có dạng hình số 8 nổi.
- Nguyên tố s, p: electron ngoài cùng điền vào phân lớp s hoặc p. Nguyên tố d, f: electron điền vào phân lớp d hoặc f.`,
    formulas: [
      { name: 'Số khối', formula: 'A = Z + N', condition: 'Z là số proton, N là số neutron' },
      { name: 'Nguyên tử khối trung bình', formula: 'A_tb = (A1*x1 + A2*x2 + ...)/100', condition: 'x1, x2 là phần trăm đồng vị' },
    ],
    reactions: [],
    sampleExamples: [
      {
        title: 'Tính nguyên tử khối trung bình',
        question: 'Nguyên tố Cu có 2 đồng vị bền: ⁶³Cu (73%) và ⁶⁵Cu (27%). Tính nguyên tử khối trung bình của Cu.',
        solution: 'A_tb(Cu) = (63 * 73 + 65 * 27) / 100 = 63,54 amu.',
      },
    ],
    commonMistakes: [
      'Nhầm số khối A với nguyên tử khối trung bình.',
      'Viết sai thứ tự phân lớp 3d và 4s trong cấu hình e.',
    ],
  },
  {
    id: 'g10-c2',
    grade: 10,
    order: 2,
    code: 'HOA10-CH2',
    title: 'Chương 2: Bảng tuần hoàn các nguyên tố hóa học và định luật tuần hoàn',
    description: 'Cấu tạo BTH, ô nguyên tố, chu kì, nhóm; quy luật biến đổi tuần hoàn bán kính, độ âm điện, tính kim loại - phi kim.',
    lessons: [
      'Bài 4: Cấu tạo bảng tuần hoàn các nguyên tố hóa học',
      'Bài 5: Xu hướng biến đổi tính chất của các nguyên tố trong bảng tuần hoàn',
      'Bài 6: Định luật tuần hoàn và ý nghĩa của bảng tuần hoàn',
    ],
    objectives: [
      'Mô tả được cấu tạo bảng tuần hoàn: ô, chu kì (1-7), nhóm (IA-VIIIA, IB-VIIIB).',
      'Giải thích được xu hướng biến đổi bán kính nguyên tử, độ âm điện, tính kim loại/phi kim trong chu kì và trong nhóm.',
      'Dự đoán tính chất acid - base của các oxide và hydroxide tương ứng.',
    ],
    keyKnowledge: [
      'Số thứ tự ô = số hiệu nguyên tử Z = số proton = số electron.',
      'Số thứ tự chu kì = số lớp electron.',
      'Số thứ tự nhóm A = số electron hóa trị = số e lớp ngoài cùng.',
      'Trong 1 chu kì (trái -> phải): Bán kính giảm, độ âm điện tăng, tính kim loại giảm, tính phi kim tăng.',
      'Trong 1 nhóm A (trên -> dưới): Bán kính tăng, độ âm điện giảm, tính kim loại tăng, tính phi kim giảm.',
    ],
    theorySummary: `Bảng tuần hoàn sắp xếp các nguyên tố theo chiều tăng dần của điện tích hạt nhân nguyên tử.
- Các nguyên tố có cùng số lớp electron được xếp vào cùng một chu kì.
- Các nguyên tố có cấu hình electron tương tự nhau được xếp vào cùng một nhóm.
- Tính chất của các đơn chất cũng như thành phần và tính chất của các hợp chất biến đổi tuần hoàn theo chiều tăng của điện tích hạt nhân.`,
    formulas: [
      { name: 'Hóa trị cao nhất với oxygen', formula: 'Nhóm nA => Hóa trị cao nhất với O là n (trừ F, O)', condition: 'n từ 1 đến 7' },
      { name: 'Hóa trị trong hợp chất khí với hydrogen', formula: 'Hóa trị với H = 8 - n', condition: 'Áp dụng cho phi kim nhóm IVA đến VIIA' },
    ],
    reactions: [],
    sampleExamples: [
      {
        title: 'Xác định vị trí nguyên tố trong BTH',
        question: 'Nguyên tử X có Z = 17. Xác định vị trí của X (ô, chu kì, nhóm) trong bảng tuần hoàn.',
        solution: 'Cấu hình e của X: 1s² 2s² 2p⁶ 3s² 3p⁵.\n- Ô số 17 (Z = 17).\n- Chu kì 3 (có 3 lớp electron).\n- Nhóm VIIA (có 7 electron hóa trị, e cuối cùng điền vào phân lớp p).',
      },
    ],
    commonMistakes: [
      'Nhầm lẫn số thứ tự chu kì với số electron lớp ngoài cùng.',
      'Quên rằng nhóm B có electron hóa trị nằm ở phân lớp (n-1)d và ns.',
    ],
  },
  {
    id: 'g10-c3',
    grade: 10,
    order: 3,
    code: 'HOA10-CH3',
    title: 'Chương 3: Liên kết hóa học',
    description: 'Quy tắc octet, liên kết ion, liên kết cộng hóa trị, liên kết hydrogen và tương tác van der Waals.',
    lessons: [
      'Bài 7: Quy tắc octet',
      'Bài 8: Liên kết ion',
      'Bài 9: Liên kết cộng hóa trị',
      'Bài 10: Liên kết hydrogen và tương tác van der Waals',
    ],
    objectives: [
      'Vận dụng quy tắc octet để giải thích sự hình thành liên kết.',
      'Phân biệt được liên kết ion và liên kết cộng hóa trị (có cực, không cực) dựa vào hiệu độ âm điện.',
      'Viết được công thức Lewis, công thức electron của một số phân tử đơn giản.',
      'Nêu được vai trò của liên kết hydrogen đối với nhiệt độ sôi và tính tan của nước và alcohol.',
    ],
    keyKnowledge: [
      'Quy tắc octet: Các nguyên tử có xu hướng đạt cấu hình 8 electron bền vững như khí hiếm (hoặc 2e như He).',
      'Liên kết ion: Lực hút tĩnh điện giữa cation kim loại và anion phi kim. Hiệu độ âm điện Δχ ≥ 1,7.',
      'Liên kết cộng hóa trị: Đôi electron dùng chung. Không cực (0 ≤ Δχ < 0,4), có cực (0,4 ≤ Δχ < 1,7).',
      'Liên kết hydrogen: Lực hút tĩnh điện giữa H mang điện tích dương với nguyên tử có độ âm điện lớn mang cặp e tự do (F, O, N).',
    ],
    theorySummary: `Liên kết hóa học là sự kết hợp giữa các nguyên tử để tạo thành phân tử hoặc tinh thể bền vững hơn.
- Hợp chất ion có nhiệt độ nóng chảy và nhiệt độ sôi cao, dẫn điện khi nóng chảy hoặc hòa tan trong nước.
- Hợp chất cộng hóa trị có nhiệt độ sôi thấp hơn, nhiều chất ở thể khí hoặc lỏng ở nhiệt độ phòng.
- Liên kết hydrogen làm tăng nhiệt độ sôi và nhiệt độ nóng chảy của các chất (như H2O, HF, NH3, alcohol).`,
    formulas: [
      { name: 'Độ âm điện phân loại liên kết', formula: '0 <= Δχ < 0,4 (CHT không cực); 0,4 <= Δχ < 1,7 (CHT có cực); Δχ >= 1,7 (Ion)', condition: 'Hiệu độ âm điện giữa 2 nguyên tử' },
    ],
    reactions: [],
    sampleExamples: [
      {
        title: 'Giải thích nhiệt độ sôi bất thường của nước',
        question: 'Tại sao H2O (M=18) có nhiệt độ sôi (100 °C) cao hơn nhiều so với H2S (M=34, t_sôi = -60 °C)?',
        solution: 'Do nguyên tử O có độ âm điện lớn và kích thước nhỏ, giữa các phân tử H2O hình thành mạng lưới liên kết hydrogen liên phân tử bền vững, cần nhiều năng lượng để phá vỡ. Trong khi H2S không tạo được liên kết hydrogen.',
      },
    ],
    commonMistakes: [
      'Đồng nhất liên kết cộng hóa trị phân cực với liên kết ion.',
      'Nghĩ rằng liên kết hydrogen là liên kết hóa học nội phân tử (thực chất là tương tác liên phân tử).',
    ],
  },
  {
    id: 'g10-c4',
    grade: 10,
    order: 4,
    code: 'HOA10-CH4',
    title: 'Chương 4: Phản ứng oxi hóa - khử',
    description: 'Số oxi hóa, chất oxi hóa, chất khử, quá trình oxi hóa, quá trình khử và cân bằng thăng bằng electron.',
    lessons: [
      'Bài 12: Phản ứng oxi hóa - khử và ứng dụng',
      'Bài 13: Luyện tập cân bằng phản ứng oxi hóa - khử',
    ],
    objectives: [
      'Xác định được số oxi hóa của nguyên tố trong hợp chất và ion.',
      'Phân biệt chất khử, chất oxi hóa, quá trình oxi hóa, quá trình khử.',
      'Cân bằng thành thạo phản ứng bằng phương pháp thăng bằng electron.',
    ],
    keyKnowledge: [
      'Khử cho - O nhận; Khử tăng - O giảm.',
      'Chất khử: nhường e -> số oxh tăng -> bị oxi hóa.',
      'Chất oxi hóa: nhận e -> số oxh giảm -> bị khử.',
      'Tổng số mol e nhường = Tổng số mol e nhận.',
    ],
    theorySummary: `Phản ứng oxi hóa - khử là phản ứng trong đó có sự chuyển electron giữa các chất phản ứng, làm thay đổi số oxi hóa của nguyên tố.
4 bước cân bằng thăng bằng electron:
1. Xác định số oxi hóa của các nguyên tố thay đổi.
2. Viết quá trình oxi hóa và quá trình khử.
3. Tìm hệ số thích hợp để tổng e nhường = tổng e nhận.
4. Đặt hệ số vào phương trình và kiểm tra bảo toàn nguyên tố.`,
    formulas: [
      { name: 'Định luật bảo toàn electron', formula: 'Σ n_e nhường = Σ n_e nhận', condition: 'n_e = n * số e trao đổi' },
    ],
    reactions: [
      { name: 'Oxi hóa Cu bằng HNO3 loãng', equation: '3Cu + 8HNO3 → 3Cu(NO3)2 + 2NO↑ + 4H2O' },
      { name: 'Nhiệt nhôm', equation: '2Al + Fe2O3 → Al2O3 + 2Fe' },
    ],
    sampleExamples: [
      {
        title: 'Cân bằng phản ứng Cu + HNO3',
        question: 'Cân bằng phương trình: Cu + HNO3 → Cu(NO3)2 + NO + H2O.',
        solution: 'Cu nhường 2e (x 3); N(+5) nhận 3e (x 2).\n3Cu + 8HNO3 → 3Cu(NO3)2 + 2NO + 4H2O.',
      },
    ],
    commonMistakes: [
      'Quên nhân đôi số e cho các phân tử Cl2, O2, N2.',
      'Đếm thiếu lượng acid đóng vai trò môi trường.',
    ],
  },
  {
    id: 'g10-c5',
    grade: 10,
    order: 5,
    code: 'HOA10-CH5',
    title: 'Chương 5: Năng lượng hóa học',
    description: 'Biến thiên enthalpy chuẩn Δr H°298, phản ứng tỏa nhiệt, phản ứng thu nhiệt và tính toán năng lượng phản ứng.',
    lessons: [
      'Bài 14: Phản ứng tỏa nhiệt và phản ứng thu nhiệt',
      'Bài 15: Ý nghĩa và cách tính biến thiên enthalpy của phản ứng hóa học',
    ],
    objectives: [
      'Nêu được khái niệm phản ứng tỏa nhiệt (Δr H° < 0) và thu nhiệt (Δr H° > 0).',
      'Tính biến thiên enthalpy dựa vào nhiệt tạo thành chuẩn hoặc năng lượng liên kết.',
    ],
    keyKnowledge: [
      'Tỏa nhiệt: Δr H°298 < 0, giải phóng nhiệt ra môi trường.',
      'Thu nhiệt: Δr H°298 > 0, hấp thu nhiệt từ môi trường.',
      'Nhiệt tạo thành chuẩn của đơn chất bền nhất ở 298 K bằng 0.',
      'Δr H°298 = Σ Δf H°298(sản phẩm) - Σ Δf H°298(chất đầu).',
      'Δr H°298 = Σ Eb(chất đầu) - Σ Eb(sản phẩm) (ở thể khí).',
    ],
    theorySummary: `Năng lượng hóa học quyết định chiều hướng và mức độ tỏa hay thu nhiệt của phản ứng.
- Đốt nhiên liệu (than, gas, xăng) là phản ứng tỏa nhiệt mạnh.
- Nung vôi, quang hợp là phản ứng thu nhiệt.`,
    formulas: [
      { name: 'Tính theo nhiệt tạo thành', formula: 'Δr H°298 = Σ ν_sp * Δf H°(sp) - Σ ν_cd * Δf H°(cđ)' },
      { name: 'Tính theo năng lượng liên kết', formula: 'Δr H°298 = Σ ν_cd * Eb(cđ) - Σ ν_sp * Eb(sp)' },
    ],
    reactions: [
      { name: 'Đốt cháy methane', equation: 'CH4(g) + 2O2(g) → CO2(g) + 2H2O(l)   Δr H°298 = -890,3 kJ' },
    ],
    sampleExamples: [
      {
        title: 'Tính enthalpy phản ứng đốt cháy',
        question: 'Tính Δr H°298 phản ứng: CH4(g) + 2O2(g) → CO2(g) + 2H2O(l). Biết Δf H°(CH4) = -74,8; CO2 = -393,5; H2O = -285,8 kJ/mol.',
        solution: 'Δr H°298 = [-393,5 + 2*(-285,8)] - [-74,8 + 2*0] = -890,3 kJ.',
      },
    ],
    commonMistakes: [
      'Nhầm dấu công thức giữa nhiệt tạo thành (sp - cđ) và năng lượng liên kết (cđ - sp).',
    ],
  },
  {
    id: 'g10-c6',
    grade: 10,
    order: 6,
    code: 'HOA10-CH6',
    title: 'Chương 6: Tốc độ phản ứng',
    description: 'Tốc độ phản ứng hóa học, tốc độ trung bình, biểu thức định luật tác dụng khối lượng và các yếu tố ảnh hưởng.',
    lessons: [
      'Bài 16: Tốc độ phản ứng hóa học và các yếu tố ảnh hưởng',
      'Bài 17: Hệ số nhiệt độ Van\'t Hoff',
    ],
    objectives: [
      'Nêu được khái niệm tốc độ phản ứng và biểu thức tốc độ trung bình.',
      'Giải thích ảnh hưởng của nồng độ, áp suất, nhiệt độ, diện tích tiếp xúc và chất xúc tác đến tốc độ phản ứng.',
      'Vận dụng định luật Van\'t Hoff để tính toán tốc độ phản ứng khi thay đổi nhiệt độ.',
    ],
    keyKnowledge: [
      'Tốc độ phản ứng là độ biến thiên nồng độ của một chất phản ứng hoặc sản phẩm trong một đơn vị thời gian.',
      'Các yếu tố làm tăng tốc độ phản ứng: Tăng nồng độ, tăng áp suất (chất khí), tăng nhiệt độ, tăng diện tích tiếp xúc (chất rắn), thêm chất xúc tác thích hợp.',
      'Quy tắc Van\'t Hoff: Khi tăng nhiệt độ lên 10 °C, tốc độ phản ứng tăng từ 2 đến 4 lần (hệ số γ). v2 / v1 = γ^((T2 - T1)/10).',
    ],
    theorySummary: `Tốc độ phản ứng nghiên cứu tốc độ chuyển biến của các chất phản ứng thành sản phẩm.
- Thuyết va chạm hoạt động: Chỉ những va chạm có năng lượng đủ lớn (năng lượng hoạt hóa) và định hướng thuận lợi mới dẫn đến phản ứng.
- Chất xúc tác làm giảm năng lượng hoạt hóa của phản ứng, do đó làm tăng tốc độ phản ứng mà không bị tiêu hao sau phản ứng.`,
    formulas: [
      { name: 'Định luật tác dụng khối lượng', formula: 'v = k * [A]^a * [B]^b', condition: 'Cho phản ứng đơn giản aA + bB -> sản phẩm' },
      { name: 'Quy tắc Van\'t Hoff', formula: 'v2 / v1 = γ^((T2 - T1) / 10)', condition: 'γ là hệ số nhiệt độ Van\'t Hoff' },
    ],
    reactions: [],
    sampleExamples: [
      {
        title: 'Tính thời gian phản ứng theo quy tắc Van\'t Hoff',
        question: 'Ở 20 °C phản ứng diễn ra trong 16 phút. Biết hệ số nhiệt độ γ = 2. Hỏi ở 50 °C phản ứng diễn ra trong bao lâu?',
        solution: 'ΔT = 50 - 20 = 30 °C. Tốc độ tăng: v2 / v1 = 2^(30/10) = 2³ = 8 lần.\nThời gian tỉ lệ nghịch với tốc độ: t2 = t1 / 8 = 16 / 8 = 2 phút.',
      },
    ],
    commonMistakes: [
      'Nhầm lẫn giữa tốc độ phản ứng và sự chuyển dịch cân bằng.',
      'Quên rằng thời gian phản ứng tỉ lệ nghịch với tốc độ phản ứng.',
    ],
  },
  {
    id: 'g10-c7',
    grade: 10,
    order: 7,
    code: 'HOA10-CH7',
    title: 'Chương 7: Nguyên tố nhóm Halogen',
    description: 'Các nguyên tố nhóm VIIA (F, Cl, Br, I); tính chất vật lí, tính chất hóa học, hydrogen halide và hydrohalic acid.',
    lessons: [
      'Bài 18: Đơn chất halogen',
      'Bài 19: Hydrogen halide và một số hợp chất halide',
    ],
    objectives: [
      'Nêu được xu hướng biến đổi tính chất vật lí và tính oxi hóa của các halogen (F2 > Cl2 > Br2 > I2).',
      'Viết phương trình phản ứng của halogen với kim loại, hydrogen, nước và dung dịch kiềm.',
      'Trình bày tính acid và tính khử của các hydrohalic acid (HF < HCl < HBr < HI).',
      'Nhận biết các ion halide (Cl-, Br-, I-) bằng dung dịch AgNO3.',
    ],
    keyKnowledge: [
      'Các đơn chất halogen tồn tại ở dạng phân tử hai nguyên tử X2.',
      'Tính oxi hóa giảm dần từ F2 đến I2: F2 oxi hóa được nước mãnh liệt; Cl2 đẩy được Br- và I- ra khỏi dung dịch muối; Br2 đẩy được I-.',
      'Nước Javel: NaCl + NaClO + H2O (tác dụng tẩy màu, sát trùng). Clorua vôi: CaOCl2.',
      'Thuốc thử nhận biết ion halide: AgNO3 tạo AgCl↓ (trắng), AgBr↓ (vàng nhạt), AgI↓ (vàng đậm); AgF tan tốt trong nước.',
    ],
    theorySummary: `Nhóm VIIA (Halogen) là các phi kim điển hình, có 7 electron lớp ngoài cùng (ns² np⁵), có ái lực electron lớn và tính oxi hóa mạnh.
- Phản ứng với kim loại tạo muối halide.
- Phản ứng tự oxi hóa - khử của Cl2 trong kiềm:
  Cl2 + 2NaOH → NaCl + NaClO + H2O (ở nhiệt độ phòng)
  3Cl2 + 6KOH → 5KCl + KClO3 + 3H2O (ở 100 °C)`,
    formulas: [
      { name: 'Quy luật đẩy halogen', formula: 'X2 + 2NaY -> 2NaX + Y2', condition: 'X có tính oxi hóa mạnh hơn Y (Cl2 đẩy Br-, I-; Br2 đẩy I-)' },
    ],
    reactions: [
      { name: 'Sản xuất nước Javel', equation: 'Cl2 + 2NaOH → NaCl + NaClO + H2O' },
      { name: 'Khắc chữ lên thủy tinh bằng HF', equation: 'SiO2 + 4HF → SiF4↑ + 2H2O' },
    ],
    sampleExamples: [
      {
        title: 'Nhận biết các dung dịch halide mất nhãn',
        question: 'Dùng thuốc thử nào để nhận biết 3 dung dịch mất nhãn: NaCl, NaBr, NaI?',
        solution: 'Dùng dung dịch AgNO3:\n- NaCl tạo kết tủa trắng AgCl.\n- NaBr tạo kết tủa vàng nhạt AgBr.\n- NaI tạo kết tủa vàng đậm AgI.',
      },
    ],
    commonMistakes: [
      'Nghĩ rằng AgF tạo kết tủa (AgF tan tốt trong nước, không kết tủa).',
      'Nhầm tính acid của HF: HF là acid yếu nhưng ăn mòn được thủy tinh (SiO2).',
    ],
  },

  // ==========================================
  // LỚP 11 (6 CHƯƠNG THEO GDPT 2018)
  // ==========================================
  {
    id: 'g11-c1',
    grade: 11,
    order: 1,
    code: 'HOA11-CH1',
    title: 'Chương 1: Cân bằng hóa học',
    description: 'Phản ứng thuận nghịch, trạng thái cân bằng hóa học, hằng số Kc, nguyên lý Le Chatelier và thuyết acid - base Brønsted - Lowry, pH.',
    lessons: [
      'Bài 1: Khái niệm về cân bằng hóa học',
      'Bài 2: Cân bằng trong dung dịch nước - Thuyết acid - base và pH',
    ],
    objectives: [
      'Trình bày khái niệm phản ứng thuận nghịch và trạng thái cân bằng động (v_t = v_n).',
      'Vận dụng nguyên lý Le Chatelier giải thích chiều chuyển dịch cân bằng.',
      'Tính pH của dung dịch acid mạnh, base mạnh.',
    ],
    keyKnowledge: [
      'Kc chỉ phụ thuộc nhiệt độ, không phụ thuộc nồng độ ban đầu hay chất xúc tác.',
      'Tăng nhiệt độ -> chuyển dịch theo chiều thu nhiệt (ΔH > 0).',
      'Tăng áp suất -> chuyển dịch theo chiều giảm số mol khí.',
      'pH = -log[H+]; pH + pOH = 14 (ở 25 °C).',
    ],
    theorySummary: `Cân bằng hóa học là trạng thái của phản ứng thuận nghịch khi tốc độ phản ứng thuận bằng tốc độ phản ứng nghịch.
Nguyên lý Le Chatelier: Khi thay đổi một yếu tố (nồng độ, nhiệt độ, áp suất), cân bằng sẽ chuyển dịch theo chiều chống lại sự thay đổi đó.`,
    formulas: [
      { name: 'Hằng số cân bằng Kc', formula: 'Kc = ([C]^c * [D]^d) / ([A]^a * [B]^b)', condition: 'Chỉ tính các chất tan hoặc chất khí' },
      { name: 'Tính pH', formula: 'pH = -log[H+]' },
    ],
    reactions: [
      { name: 'Tổng hợp ammonia', equation: 'N2(g) + 3H2(g) ⇌ 2NH3(g)   Δr H°298 = -92 kJ' },
    ],
    sampleExamples: [
      {
        title: 'Tính pH dung dịch KOH 0,01 M',
        question: 'Tính pH của dung dịch KOH 0,01 M ở 25 °C.',
        solution: '[OH-] = 0,01 M = 10⁻² M => pOH = 2 => pH = 14 - 2 = 12.',
      },
    ],
    commonMistakes: [
      'Đưa nồng độ chất rắn vào biểu thức Kc.',
      'Nghĩ rằng chất xúc tác làm chuyển dịch cân bằng.',
    ],
  },
  {
    id: 'g11-c2',
    grade: 11,
    order: 2,
    code: 'HOA11-CH2',
    title: 'Chương 2: Nitrogen và Sulfur',
    description: 'Đơn chất nitrogen, ammonia, muối ammonium, nitric acid; đơn chất sulfur, sulfur dioxide, sulfuric acid và muối sulfate.',
    lessons: [
      'Bài 3: Đơn chất nitrogen và hợp chất của nitrogen',
      'Bài 4: Nitric acid và muối nitrate',
      'Bài 5: Sulfur và hợp chất của sulfur',
      'Bài 6: Sulfuric acid và muối sulfate',
    ],
    objectives: [
      'Giải thích độ trơ hóa học của N2 ở nhiệt độ thường do có liên kết ba N≡N rất bền.',
      'Trình bày tính chất hóa học của NH3 (tính base yếu và tính khử) và HNO3 (tính acid mạnh và tính oxi hóa mạnh).',
      'Nêu tính chất hóa học của SO2 (vừa có tính oxi hóa, vừa có tính khử) và H2SO4 đặc (tính oxi hóa mạnh, tính háo nước).',
      'Nhận biết ion SO4²⁻ bằng ion Ba²⁺ tạo kết tủa trắng BaSO4 không tan trong acid.',
    ],
    keyKnowledge: [
      'N2 có liên kết ba N≡N bền vững nên khá trơ ở nhiệt độ thường.',
      'NH3 có tính base yếu (làm xanh quỳ tím ẩm) và tính khử (cháy trong O2, tác dụng Cl2).',
      'HNO3 oxi hóa hầu hết kim loại (trừ Au, Pt) lên số oxi hóa cao nhất, không giải phóng H2.',
      'H2SO4 đặc có tính háo nước mạnh (làm than hóa đường, vải) và tính oxi hóa mạnh.',
      'SO2 làm mất màu nước bromine và dung dịch thuốc tím KMnO4.',
    ],
    theorySummary: `Nitrogen và Sulfur là hai phi kim nhóm VA và VIA có nhiều ứng dụng lớn trong phân bón và hóa chất công nghiệp.
- Quy trình Ostwald sản xuất HNO3: NH3 -> NO -> NO2 -> HNO3.
- Quy trình tiếp xúc sản xuất H2SO4: FeS2/S -> SO2 -> SO3 -> H2SO4 (qua oleum H2SO4.nSO3).`,
    formulas: [
      { name: 'Công thức Oleum', formula: 'H2SO4.nSO3', condition: 'Hòa tan SO3 vào H2SO4 đặc 98%' },
    ],
    reactions: [
      { name: 'H2SO4 đặc tác dụng với Cu', equation: 'Cu + 2H2SO4 (đặc) → CuSO4 + SO2↑ + 2H2O' },
      { name: 'Than hóa đường bởi H2SO4 đặc', equation: 'C12H22O11 → 12C + 11H2O' },
    ],
    sampleExamples: [
      {
        title: 'Nhận biết SO2 và CO2',
        question: 'Dùng hóa chất nào để phân biệt hai khí không màu SO2 và CO2?',
        solution: 'Dùng dung dịch nước bromine (hoặc thuốc tím KMnO4): SO2 làm mất màu nâu đỏ của nước bromine do SO2 có tính khử, còn CO2 không làm mất màu.',
      },
    ],
    commonMistakes: [
      'Cho rằng HNO3 tác dụng với kim loại giải phóng khí H2.',
      'Pha loãng H2SO4 đặc bằng cách đổ nước vào acid (vô cùng nguy hiểm, phải đổ từ từ acid vào nước).',
    ],
  },
  {
    id: 'g11-c3',
    grade: 11,
    order: 3,
    code: 'HOA11-CH3',
    title: 'Chương 3: Đại cương về hóa học hữu cơ',
    description: 'Hợp chất hữu cơ, nhóm chức, phân tích nguyên tố, công thức phân tử, đồng phân, danh pháp và các phương pháp tách biệt, tinh chế.',
    lessons: [
      'Bài 7: Hợp chất hữu cơ và hóa học hữu cơ',
      'Bài 8: Phương pháp tách biệt và tinh chế hợp chất hữu cơ',
      'Bài 9: Công thức phân tử hợp chất hữu cơ',
      'Bài 10: Cấu trúc phân tử hợp chất hữu cơ - Đồng đẳng và đồng phân',
    ],
    objectives: [
      'Nêu được khái niệm hợp chất hữu cơ, nhóm chức và phổ hồng ngoại (IR) cơ bản.',
      'Trình bày các phương pháp tách biệt: chưng cất, chiết, kết tinh, sắc kí cột.',
      'Xác định công thức đơn giản nhất và công thức phân tử dựa vào thành phần % nguyên tố và phổ khối lượng (MS).',
      'Phân biệt đồng phân cấu tạo: đồng phân mạch carbon, vị trí nhóm chức, loại nhóm chức.',
    ],
    keyKnowledge: [
      'Công thức đơn giản nhất: Tỉ lệ số nguyên tử các nguyên tố nguyên tối giản C : H : O : N = (mC/12) : (mH/1) : (mO/16) : (mN/14).',
      'Phổ MS: Peak ion phân tử [M+] cho biết phân tử khối chính xác của chất.',
      'Phổ IR: Nhận biết sự có mặt của các nhóm chức đặc trưng (ví dụ: -OH, C=O, -COOH).',
      'Đồng phân: Các chất có cùng CTPT nhưng cấu tạo khác nhau nên tính chất khác nhau.',
    ],
    theorySummary: `Đại cương hữu cơ trang bị các khái niệm nền tảng về liên kết carbon, đồng phân và phương pháp phổ nghiệm hiện đại theo chuẩn GDPT 2018.`,
    formulas: [
      { name: 'Thiết lập CTPT từ % khối lượng', formula: 'nC : nH : nO = (%C / 12) : (%H / 1) : (%O / 16)' },
    ],
    reactions: [],
    sampleExamples: [
      {
        title: 'Tìm CTPT hợp chất hữu cơ qua phổ MS',
        question: 'Chất X có công thức đơn giản nhất là CH2O và peak ion phân tử trên phổ MS có m/z = 60. Tìm CTPT của X.',
        solution: 'CTPT có dạng (CH2O)n. Ta có: M = 30n = 60 => n = 2. CTPT của X là C2H4O2.',
      },
    ],
    commonMistakes: [
      'Nhầm lẫn giữa công thức đơn giản nhất và công thức phân tử.',
    ],
  },
  {
    id: 'g11-c4',
    grade: 11,
    order: 4,
    code: 'HOA11-CH4',
    title: 'Chương 4: Hydrocarbon',
    description: 'Alkane, Alkene, Alkyne và Arene (Benzene và đồng đẳng); cấu tạo, đồng phân, danh pháp và phản ứng đặc trưng.',
    lessons: [
      'Bài 11: Alkane',
      'Bài 12: Alkene',
      'Bài 13: Alkyne',
      'Bài 14: Arene (Hydrocarbon thơm)',
    ],
    objectives: [
      'Nêu công thức chung và danh pháp IUPAC của alkane, alkene, alkyne, arene.',
      'Viết phương trình thế halogen của alkane và benzene.',
      'Vận dụng quy tắc cộng Markovnikov cho alkene bất đối xứng.',
      'Nêu phản ứng tạo kết tủa màu vàng của alk-1-yne với dung dịch AgNO3/NH3.',
    ],
    keyKnowledge: [
      'Alkane CnH2n+2: Phản ứng thế halogen (ưu tiên C bậc cao), cracking.',
      'Alkene CnH2n: Phản ứng cộng Br2 (mất màu), cộng HX theo Markovnikov, trùng hợp.',
      'Alkyne CnH2n-2: Alk-1-yne (nối ba đầu mạch) tác dụng AgNO3/NH3 tạo kết tủa vàng nhạt.',
      'Arene: Vòng thơm bền vững, dễ thế khó cộng.',
    ],
    theorySummary: `Hydrocarbon là các hợp chất hữu cơ chỉ chứa carbon và hydrogen, là nguồn nhiên liệu và nguyên liệu then chốt của công nghiệp hóa dầu.`,
    formulas: [
      { name: 'Alkane', formula: 'CnH2n+2 (n >= 1)' },
      { name: 'Alkene', formula: 'CnH2n (n >= 2)' },
      { name: 'Alkyne', formula: 'CnH2n-2 (n >= 2)' },
    ],
    reactions: [
      { name: 'Cộng HBr vào propene', equation: 'CH3-CH=CH2 + HBr → CH3-CH(Br)-CH3 (sản phẩm chính 2-bromopropane)' },
      { name: 'Thế Ag của acetylene', equation: 'CH≡CH + 2AgNO3 + 2NH3 → AgC≡CAg↓ + 2NH4NO3' },
    ],
    sampleExamples: [
      {
        title: 'Áp dụng quy tắc Markovnikov',
        question: 'Xác định sản phẩm chính của phản ứng giữa but-1-ene với HCl.',
        solution: 'CH2=CH-CH2-CH3 + HCl → CH3-CH(Cl)-CH2-CH3 (2-chlorobutane là sản phẩm chính).',
      },
    ],
    commonMistakes: [
      'Nghĩ rằng but-2-yne tác dụng được với AgNO3/NH3 (chỉ nối ba đầu mạch alk-1-yne mới phản ứng).',
    ],
  },
  {
    id: 'g11-c5',
    grade: 11,
    order: 5,
    code: 'HOA11-CH5',
    title: 'Chương 5: Dẫn xuất halogen - Alcohol - Phenol',
    description: 'Dẫn xuất halogen, alcohol (đơn chức, đa chức) và phenol; liên kết hydrogen, tính chất hóa học và phản ứng phân biệt.',
    lessons: [
      'Bài 15: Dẫn xuất halogen',
      'Bài 16: Alcohol',
      'Bài 17: Phenol',
    ],
    objectives: [
      'Trình bày phản ứng thế nhóm -OH của dẫn xuất halogen trong dung dịch kiềm.',
      'Nêu tính chất của alcohol: tác dụng Na, oxi hóa không hoàn toàn bởi CuO, tách nước tạo alkene hoặc ether.',
      'Phân biệt polyalcohol có nhóm -OH kề nhau (như glycerol) bằng Cu(OH)2 tạo dung dịch xanh lam đậm.',
      'Giải thích tính acid yếu của phenol (tác dụng NaOH nhưng không tác dụng NaHCO3) và phản ứng thế tạo kết tủa trắng 2,4,6-tribromophenol.',
    ],
    keyKnowledge: [
      'Alcohol tạo liên kết hydrogen liên phân tử nên có nhiệt độ sôi cao hơn dẫn xuất halogen và ether cùng khối lượng.',
      'Alcohol bậc 1 bị oxi hóa bởi CuO đun nóng tạo aldehyde; bậc 2 tạo ketone; bậc 3 không bị oxi hóa.',
      'Glycerol C3H5(OH)3 hòa tan Cu(OH)2 tạo dung dịch phức màu xanh lam đậm.',
      'Phenol C6H5OH có tính acid yếu hơn H2CO3, tác dụng với nước bromine tạo kết tủa trắng 2,4,6-tribromophenol.',
    ],
    theorySummary: `Chương nghiên cứu các hợp chất chứa liên kết C-X và nhóm -OH gắn trực tiếp vào gốc alkyl hoặc vòng thơm benzene.
- Ảnh hưởng qua lại giữa nhóm -OH và vòng benzene trong phenol: Vòng benzene làm tăng độ phân cực liên kết O-H khiến phenol có tính acid yếu; ngược lại nhóm -OH làm tăng hoạt tính thế ở vị trí ortho và para.`,
    formulas: [
      { name: 'Tách nước alcohol', formula: 'CnH2n+1OH -> CnH2n + H2O (H2SO4 đặc, 170 oC); 2ROH -> ROR + H2O (140 oC)' },
    ],
    reactions: [
      { name: 'Oxi hóa ethanol bằng CuO', equation: 'C2H5OH + CuO → CH3CHO + Cu + H2O (to)' },
      { name: 'Phenol tác dụng nước bromine', equation: 'C6H5OH + 3Br2 → C6H2Br3OH↓ (trắng) + 3HBr' },
    ],
    sampleExamples: [
      {
        title: 'Nhận biết glycerol và ethanol',
        question: 'Dùng thuốc thử nào để phân biệt ethanol và glycerol?',
        solution: 'Dùng Cu(OH)2 ở nhiệt độ thường. Glycerol hòa tan Cu(OH)2 tạo dung dịch phức màu xanh lam đậm, ethanol không phản ứng.',
      },
    ],
    commonMistakes: [
      'Cho rằng phenol làm đổi màu quỳ tím (tính acid của phenol quá yếu nên không làm đổi màu quỳ tím).',
    ],
  },
  {
    id: 'g11-c6',
    grade: 11,
    order: 6,
    code: 'HOA11-CH6',
    title: 'Chương 6: Hợp chất carbonyl và carboxylic acid',
    description: 'Aldehyde, ketone và carboxylic acid; danh pháp, phản ứng tráng bạc, phản ứng tạo iodoform, tính acid và phản ứng ester hóa.',
    lessons: [
      'Bài 18: Hợp chất carbonyl (Aldehyde - Ketone)',
      'Bài 19: Carboxylic acid',
    ],
    objectives: [
      'Phân biệt aldehyde (chứa -CHO) và ketone (chứa >C=O).',
      'Viết phương trình phản ứng tráng bạc của aldehyde và phản ứng tạo kết tủa vàng CHI3 (iodoform).',
      'Nêu tính acid của carboxylic acid (làm đỏ quỳ tím, tác dụng kim loại trước H, oxide base, base, muối carbonate).',
      'Viết phương trình phản ứng ester hóa thuận nghịch giữa acid và alcohol.',
    ],
    keyKnowledge: [
      'Aldehyde tham gia phản ứng tráng bạc (1 mol -CHO tạo 2 mol Ag; riêng HCHO tạo 4 mol Ag).',
      'Các hợp chất có nhóm CH3-C=O (như acetaldehyde, acetone) tham gia phản ứng tạo iodoform CHI3 kết tủa màu vàng.',
      'Carboxylic acid có nhiệt độ sôi cao nhất trong các hợp chất hữu cơ tương đương do tạo liên kết hydrogen liên phân tử dạng dimer bền.',
      'Phản ứng ester hóa: RCOOH + R\'OH ⇌ RCOOR\' + H2O (H2SO4 đặc, to) là phản ứng thuận nghịch.',
    ],
    theorySummary: `Hợp chất carbonyl và carboxylic acid là các nhóm chức chứa nguyên tử oxygen có ứng dụng rộng rãi trong dược phẩm, hương liệu và công nghiệp tổng hợp hữu cơ.`,
    formulas: [
      { name: 'Tráng bạc Aldehyde', formula: '1 mol RCHO -> 2 mol Ag (riêng 1 mol HCHO -> 4 mol Ag)' },
    ],
    reactions: [
      { name: 'Tráng bạc acetaldehyde', equation: 'CH3CHO + 2[Ag(NH3)2]OH → CH3COONH4 + 2Ag↓ + 3NH3 + H2O' },
      { name: 'Ester hóa acetic acid', equation: 'CH3COOH + C2H5OH ⇌ CH3COOC2H5 + H2O (H2SO4 đặc, to)' },
    ],
    sampleExamples: [
      {
        title: 'Tính lượng Ag khi tráng bạc acetaldehyde',
        question: 'Cho 4,4 gam CH3CHO tráng bạc hoàn toàn. Tính khối lượng Ag thu được.',
        solution: 'n(CH3CHO) = 4,4 / 44 = 0,1 mol => n(Ag) = 2 * 0,1 = 0,2 mol => m(Ag) = 0,2 * 108 = 21,6 gam.',
      },
    ],
    commonMistakes: [
      'Quên rằng HCHO tráng bạc tạo ra 4 Ag thay vì 2 Ag.',
      'Nghĩ rằng phản ứng ester hóa xảy ra hoàn toàn 100% (đây là phản ứng thuận nghịch).',
    ],
  },

  // ==========================================
  // LỚP 12 (8 CHƯƠNG THEO GDPT 2018)
  // ==========================================
  {
    id: 'g12-c1',
    grade: 12,
    order: 1,
    code: 'HOA12-CH1',
    title: 'Chương 1: Ester - Lipid',
    description: 'Ester, chất béo (Triglyceride), xà phòng và chất giặt rửa; phản ứng thủy phân acid và xà phòng hóa.',
    lessons: [
      'Bài 1: Ester',
      'Bài 2: Lipid và chất béo',
      'Bài 3: Xà phòng và chất giặt rửa tổng hợp',
    ],
    objectives: [
      'Gọi tên danh pháp IUPAC và viết công thức cấu tạo của ester, chất béo.',
      'Phân biệt thủy phân ester trong môi trường acid (thuận nghịch) và môi trường kiềm (một chiều).',
      'Giải bài toán xà phòng hóa chất béo và bảo toàn khối lượng.',
    ],
    keyKnowledge: [
      'Ester no đơn chức mạch hở: CnH2nO2 (n >= 2).',
      'Chất béo là triester của glycerol với các acid béo (RCOO)3C3H5.',
      'Acid béo no: Stearic (C17H35COOH), Palmitic (C15H31COOH). Chất béo rắn (mỡ động vật).',
      'Acid béo không no: Oleic (C17H33COOH), Linoleic (C17H31COOH). Chất béo lỏng (dầu thực vật).',
      'Hydro hóa chất béo lỏng (Ni, to) tạo chất béo rắn (bơ nhân tạo).',
    ],
    theorySummary: `Ester có mùi thơm đặc trưng của hoa quả, ít tan trong nước, nhiệt độ sôi thấp hơn alcohol và acid tương ứng.
Xà phòng hóa chất béo:
(RCOO)3C3H5 + 3NaOH → 3RCOONa (xà phòng) + C3H5(OH)3 (glycerol).`,
    formulas: [
      { name: 'Bảo toàn khối lượng xà phòng hóa', formula: 'm_cb + m_NaOH = m_muối + m_glycerol', condition: 'n_NaOH = 3 * n_cb = 3 * n_glycerol' },
    ],
    reactions: [
      { name: 'Xà phòng hóa Triolein', equation: '(C17H33COO)3C3H5 + 3NaOH → 3C17H33COONa + C3H5(OH)3' },
    ],
    sampleExamples: [
      {
        title: 'Tính khối lượng xà phòng',
        question: 'Xà phòng hóa hoàn toàn 8,9 gam tristearin bằng dung dịch NaOH. Tính khối lượng muối thu được.',
        solution: 'n(tristearin) = 8,9 / 890 = 0,01 mol => n(C17H35COONa) = 0,03 mol => m = 0,03 * 306 = 9,18 gam.',
      },
    ],
    commonMistakes: [
      'Nhầm tỉ lệ phản ứng với ester của phenol (tỉ lệ mol 1:2 tạo 2 muối và H2O).',
    ],
  },
  {
    id: 'g12-c2',
    grade: 12,
    order: 2,
    code: 'HOA12-CH2',
    title: 'Chương 2: Carbohydrate',
    description: 'Glucose, Fructose, Saccharose, Maltose, Tinh bột và Cellulose; cấu trúc dạng mạch hở, mạch vòng và phản ứng đặc trưng.',
    lessons: [
      'Bài 4: Giới thiệu Carbohydrate - Glucose và Fructose',
      'Bài 5: Saccharose và Maltose',
      'Bài 6: Tinh bột và Cellulose',
    ],
    objectives: [
      'Phân loại: monosaccharide (glucose, fructose), disaccharide (saccharose), polysaccharide (tinh bột, cellulose).',
      'Trình bày phản ứng tráng bạc của glucose, phản ứng màu của tinh bột với iodine.',
      'Viết phương trình phản ứng thủy phân của saccharose, tinh bột và cellulose.',
    ],
    keyKnowledge: [
      'Glucose và Fructose là đồng phân cấu tạo C6H12O6.',
      'Glucose có nhóm -CHO nên tráng bạc và làm mất màu nước bromine. Fructose tráng bạc được trong môi trường kiềm nhưng KHÔNG làm mất màu nước bromine.',
      'Saccharose C12H22O11 không có nhóm -CHO tự do nên KHÔNG tráng bạc; sau khi thủy phân tạo 1 glucose + 1 fructose nên tráng được 4 Ag.',
      'Tinh bột tạo màu xanh tím với dung dịch iodine (I2).',
      'Cellulose [C6H7O2(OH)3]n phản ứng với HNO3 đặc tạo thuốc súng không khói cellulose trinitrate.',
    ],
    theorySummary: `Carbohydrate là hợp chất hữu cơ tạp chức, công thức chung Cn(H2O)m, là thành phần thiết yếu của lương thực và thực vật.`,
    formulas: [
      { name: 'Tráng bạc Glucose', formula: '1 mol glucose -> 2 mol Ag' },
      { name: 'Tráng bạc sau thủy phân Saccharose', formula: '1 mol saccharose -> 4 mol Ag' },
    ],
    reactions: [
      { name: 'Lên men rượu glucose', equation: 'C6H12O6 → 2C2H5OH + 2CO2↑ (men rượu, 30-35 oC)' },
    ],
    sampleExamples: [
      {
        title: 'Tính Ag tráng bạc từ glucose',
        question: 'Tráng bạc 18 gam glucose hoàn toàn. Tính m Ag.',
        solution: 'n(glucose) = 18/180 = 0,1 mol => n(Ag) = 0,2 mol => m(Ag) = 0,2 * 108 = 21,6 gam.',
      },
    ],
    commonMistakes: [
      'Dùng phản ứng tráng bạc để phân biệt glucose và fructose (phải dùng nước bromine).',
    ],
  },
  {
    id: 'g12-c3',
    grade: 12,
    order: 3,
    code: 'HOA12-CH3',
    title: 'Chương 3: Hợp chất chứa nitrogen',
    description: 'Amine, Amino acid, Peptide và Protein; bậc amine, tính lưỡng tính của amino acid, liên kết peptide và phản ứng màu biuret.',
    lessons: [
      'Bài 7: Amine',
      'Bài 8: Amino acid',
      'Bài 9: Peptide và Protein',
    ],
    objectives: [
      'Phân biệt bậc amine (bậc 1, 2, 3) và gọi tên theo danh pháp IUPAC.',
      'Giải thích tính chất lưỡng tính của amino acid (chứa nhóm -NH2 và nhóm -COOH).',
      'Nêu đặc điểm liên kết peptide (-CO-NH-) và phản ứng màu biuret (tạo màu tím đặc trưng với Cu(OH)2).',
    ],
    keyKnowledge: [
      'Bậc amine = số nguyên tử H trong NH3 bị thay thế bởi gốc hydrocarbon.',
      'Lực base: Alkyl amine > NH3 > Aniline (C6H5NH2). Aniline không làm đổi màu quỳ tím, tạo kết tủa trắng với nước Br2.',
      'Amino acid thiên nhiên hầu hết là α-amino acid, ở thể rắn kết tinh, dễ tan trong nước, tồn tại ở dạng ion lưỡng cực.',
      'Peptide từ tripeptide trở lên (có từ 2 liên kết peptide trở lên) và protein cho phản ứng màu biuret màu tím với Cu(OH)2/OH-.',
    ],
    theorySummary: `Amine, amino acid và protein là cơ sở của sự sống, mang các tính chất acid - base và hoạt tính sinh học đặc sắc.`,
    formulas: [
      { name: 'Số liên kết peptide', formula: 'Số liên kết peptide = Số mắt xích amino acid - 1', condition: 'Mạch hở' },
    ],
    reactions: [
      { name: 'Aniline tác dụng nước bromine', equation: 'C6H5NH2 + 3Br2 → C6H2Br3NH2↓ (trắng) + 3HBr' },
    ],
    sampleExamples: [
      {
        title: 'Tính số liên kết peptide của tetrapeptide',
        question: 'Tetrapeptide Gly-Ala-Val-Gly có bao nhiêu liên kết peptide?',
        solution: 'Tetrapeptide gồm 4 gốc amino acid => Có 4 - 1 = 3 liên kết peptide.',
      },
    ],
    commonMistakes: [
      'Nghĩ rằng dipeptide tham gia phản ứng màu biuret (dipeptide KHÔNG có phản ứng biuret, cần từ 2 liên kết peptide trở lên).',
    ],
  },
  {
    id: 'g12-c4',
    grade: 12,
    order: 4,
    code: 'HOA12-CH4',
    title: 'Chương 4: Polymer',
    description: 'Khái niệm polymer, phản ứng trùng hợp, trùng ngưng; chất dẻo, tơ tổng hợp, cao su và vật liệu composite.',
    lessons: [
      'Bài 10: Đại cương về polymer',
      'Bài 11: Vật liệu polymer (Chất dẻo, tơ, cao su và keo dán)',
    ],
    objectives: [
      'Nêu định nghĩa polymer, mắt xích, hệ số polime hóa n.',
      'Phân biệt phản ứng trùng hợp (có liên kết đôi hoặc vòng kém bền) và trùng ngưng (có ít nhất 2 nhóm chức phản ứng giải phóng phân tử nhỏ như H2O).',
      'Phân loại chất dẻo (PE, PVC, PS, PP, PMMA), tơ (tơ tằm, tơ nilon-6,6, tơ lapsan, tơ nitron), cao su (cao su buna, cao su thiên nhiên).',
    ],
    keyKnowledge: [
      'Trùng hợp PE từ ethylene, PVC từ vinyl chloride, plexiglas (thủy tinh hữu cơ) từ methyl methacrylate.',
      'Trùng ngưng nilon-6,6 từ hexamethylenediamine và adipic acid.',
      'Tơ nilon-6,6 kém bền trong môi trường acid và kiềm do có liên kết peptide -CO-NH- dễ bị thủy phân.',
      'Lưu hóa cao su bằng lưu huỳnh (S) tạo cầu nối diso-fua (-S-S-) làm tăng độ đàn hồi và độ bền cơ học.',
    ],
    theorySummary: `Polymer là hợp chất có phân tử khối rất lớn do nhiều đơn vị nhỏ (mắt xích) liên kết với nhau tạo nên.`,
    formulas: [
      { name: 'Hệ số trùng hợp', formula: 'n = M_polymer / M_mắt_xích' },
    ],
    reactions: [
      { name: 'Trùng hợp vinyl chloride', equation: 'n CH2=CH-Cl → (-CH2-CH(Cl)-)n' },
    ],
    sampleExamples: [
      {
        title: 'Tính hệ số trùng hợp của PVC',
        question: 'Một đoạn mạch PVC có phân tử khối là 250000 amu. Tính số mắt xích trong đoạn mạch đó.',
        solution: 'M(CH2-CHCl) = 62,5 amu. Hệ số n = 250000 / 62,5 = 4000 mắt xích.',
      },
    ],
    commonMistakes: [
      'Nhầm tơ nilon-6,6 là tơ thiên nhiên (nilon-6,6 là tơ tổng hợp).',
    ],
  },
  {
    id: 'g12-c5',
    grade: 12,
    order: 5,
    code: 'HOA12-CH5',
    title: 'Chương 5: Pin điện và điện phân',
    description: 'Thế điện cực chuẩn E°(Ox/Red), Pin Galvani, sự điện phân nóng chảy và điện phân dung dịch.',
    lessons: [
      'Bài 12: Thế điện cực chuẩn và pin điện hóa',
      'Bài 13: Điện phân và ứng dụng',
    ],
    objectives: [
      'Dự đoán chiều phản ứng oxi hóa - khử theo quy tắc alpha dựa vào thế điện cực chuẩn.',
      'Mô tả cấu tạo và tính sức điện động chuẩn của pin: E°_pin = E°_cathode - E°_anode > 0.',
      'Viết các quá trình khử tại cathode và oxi hóa tại anode trong điện phân dung dịch.',
    ],
    keyKnowledge: [
      'Pin điện: hóa năng -> điện năng. Anode (-) xảy ra oxi hóa; Cathode (+) xảy ra khử.',
      'Bình điện phân: điện năng -> hóa năng. Anode (+) xảy ra oxi hóa; Cathode (-) xảy ra khử.',
      'Thứ tự cation bị khử ở cathode: Ag+ > Fe3+ > Cu2+ > H+ > Pb2+ > Fe2+ > Zn2+ > H2O. (Ion từ Al3+ trở về trước không bị khử trong dung dịch nước).',
      'Thứ tự anion bị oxi hóa ở anode: I- > Br- > Cl- > H2O. (Gốc chứa oxygen như SO4²⁻, NO3⁻ không bị oxi hóa).',
    ],
    theorySummary: `Pin điện hóa và điện phân là những ứng dụng thực nghiệm quan trọng của phản ứng oxi hóa - khử trong đời sống và kỹ thuật.`,
    formulas: [
      { name: 'Sức điện động chuẩn của pin', formula: 'E°_pin = E°_cathode - E°_anode' },
      { name: 'Định luật Faraday', formula: 'm = (A * I * t) / (n * F)', condition: 'F = 96500 C/mol, t tính bằng giây' },
    ],
    reactions: [
      { name: 'Điện phân dung dịch NaCl có màng ngăn', equation: '2NaCl + 2H2O → 2NaOH + H2↑ + Cl2↑' },
    ],
    sampleExamples: [
      {
        title: 'Tính sức điện động pin Zn - Cu',
        question: 'Cho E°(Zn²⁺/Zn) = -0,76 V và E°(Cu²⁺/Cu) = +0,34 V. Tính E°_pin.',
        solution: 'E°_pin = E°(Cu²⁺/Cu) - E°(Zn²⁺/Zn) = 0,34 - (-0,76) = 1,10 V.',
      },
    ],
    commonMistakes: [
      'Nhầm dấu điện cực giữa Pin điện hóa (Anode là cực âm) và Bình điện phân (Anode là cực dương).',
    ],
  },
  {
    id: 'g12-c6',
    grade: 12,
    order: 6,
    code: 'HOA12-CH6',
    title: 'Chương 6: Đại cương về kim loại',
    description: 'Cấu tạo tinh thể kim loại, tính chất vật lí, tính chất hóa học, dãy điện hóa, ăn mòn kim loại và chống ăn mòn.',
    lessons: [
      'Bài 14: Tính chất vật lí và tính chất hóa học của kim loại',
      'Bài 15: Ăn mòn kim loại và chống ăn mòn kim loại',
      'Bài 16: Điều chế kim loại',
    ],
    objectives: [
      'Giải thích tính dẻo, tính dẫn điện, dẫn nhiệt, ánh kim của kim loại do các electron tự do gây ra.',
      'Nêu tính chất hóa học chung của kim loại là tính khử: M → M(n+) + ne.',
      'Phân biệt ăn mòn hóa học và ăn mòn điện hóa (điều kiện xảy ra ăn mòn điện hóa).',
      'Trình bày các phương pháp chống ăn mòn: bảo vệ bề mặt và phương pháp điện hóa (dùng kim loại hy sinh).',
    ],
    keyKnowledge: [
      'Kim loại dẫn điện tốt nhất: Ag > Cu > Au > Al > Fe.',
      'Kim loại dẻo nhất: Au. Kim loại cứng nhất: Cr. Kim loại nhẹ nhất: Li. Nhiệt độ nóng chảy cao nhất: W.',
      'Điều kiện ăn mòn điện hóa: Có 2 điện cực khác nhau về bản chất; cùng tiếp xúc với dung dịch chất điện li; tiếp xúc trực tiếp hoặc gián tiếp qua dây dẫn.',
      'Kim loại có tính khử mạnh hơn sẽ đóng vai trò cực âm (anode) và bị ăn mòn trước.',
    ],
    theorySummary: `Đại cương kim loại là nền tảng của luyện kim và cơ khí chế tạo máy.`,
    formulas: [
      { name: 'Ăn mòn điện hóa', formula: 'Kim loại mạnh hơn = Cực âm Anode (bị ăn mòn trước)' },
    ],
    reactions: [
      { name: 'Ăn mòn vỏ tàu biển bảo vệ bằng Zn', equation: 'Zn → Zn²⁺ + 2e (Zn bị ăn mòn, bảo vệ vỏ thép Fe)' },
    ],
    sampleExamples: [
      {
        title: 'Bảo vệ vỏ tàu biển bằng phương pháp điện hóa',
        question: 'Tại sao người ta gắn các tấm kẽm (Zn) vào vỏ tàu biển bằng thép?',
        solution: 'Vì Zn có tính khử mạnh hơn Fe, khi tiếp xúc với nước biển (dung dịch điện li) sẽ hình thành pin điện hóa, Zn đóng vai trò anode bị ăn mòn hy sinh, còn vỏ thép Fe được bảo vệ.',
      },
    ],
    commonMistakes: [
      'Nghĩ rằng ăn mòn hóa học phát sinh dòng điện (chỉ ăn mòn điện hóa mới phát sinh dòng điện).',
    ],
  },
  {
    id: 'g12-c7',
    grade: 12,
    order: 7,
    code: 'HOA12-CH7',
    title: 'Chương 7: Nguyên tố nhóm IA và nhóm IIA',
    description: 'Kim loại kiềm (nhóm IA), kim loại kiềm thổ (nhóm IIA) và các hợp chất quan trọng; nước cứng và phương pháp làm mềm nước cứng.',
    lessons: [
      'Bài 17: Kim loại nhóm IA (Kim loại kiềm)',
      'Bài 18: Kim loại nhóm IIA (Kim loại kiềm thổ)',
      'Bài 19: Nước cứng và phương pháp làm mềm nước cứng',
    ],
    objectives: [
      'Nêu tính chất vật lí và hóa học của kim loại kiềm (tính khử rất mạnh, phản ứng mãnh liệt với nước ở nhiệt độ thường).',
      'Trình bày tính chất của kim loại kiềm thổ và các hợp chất CaCO3, Ca(OH)2, CaSO4 (thạch cao).',
      'Phân loại nước cứng (tạm thời, vĩnh cửu, toàn phần) và phương pháp làm mềm nước cứng bằng hóa chất (Na2CO3, Na3PO4) hoặc nhiệt độ.',
    ],
    keyKnowledge: [
      'Kim loại kiềm: Li, Na, K, Rb, Cs có tính khử mạnh nhất trong các kim loại, bảo quản bằng cách ngâm trong dầu hỏa.',
      'Kim loại kiềm thổ: Be, Mg, Ca, Sr, Ba; trong đó Ca, Sr, Ba phản ứng với nước ở nhiệt độ thường tạo dung dịch base kiềm mạnh.',
      'Nước cứng chứa nhiều ion Ca²⁺ và Mg²⁺. Nước cứng tạm thời chứa anion HCO3⁻ (đun sôi làm mềm được). Nước cứng vĩnh cửu chứa Cl⁻, SO4²⁻.',
      'Hóa chất làm mềm được mọi loại nước cứng: Na2CO3 và Na3PO4.',
    ],
    theorySummary: `Các nguyên tố nhóm IA và IIA là những kim loại nhẹ, có hoạt tính hóa học cao nhất trong bảng tuần hoàn.`,
    formulas: [
      { name: 'Nhiệt phân nước cứng tạm thời', formula: 'Ca(HCO3)2 -> CaCO3↓ + CO2↑ + H2O (khi đun nóng)' },
    ],
    reactions: [
      { name: 'Natri tác dụng với nước', equation: '2Na + 2H2O → 2NaOH + H2↑' },
      { name: 'Làm mềm nước cứng bằng Na2CO3', equation: 'Ca²⁺ + CO3²⁻ → CaCO3↓' },
    ],
    sampleExamples: [
      {
        title: 'Làm mềm nước cứng tạm thời',
        question: 'Có thể làm mềm nước cứng tạm thời bằng phương pháp đơn giản nào?',
        solution: 'Đun sôi nước: Khi đun nóng, ion Ca(HCO3)2 và Mg(HCO3)2 bị nhiệt phân tạo kết tủa CaCO3 và MgCO3 lắng xuống, lọc bỏ kết tủa thu được nước mềm.',
      },
    ],
    commonMistakes: [
      'Bảo quản kim loại Na bằng cách ngâm vào nước (phải ngâm trong dầu hỏa).',
    ],
  },
  {
    id: 'g12-c8',
    grade: 12,
    order: 8,
    code: 'HOA12-CH8',
    title: 'Chương 8: Đại cương về kim loại chuyển tiếp và phức chất',
    description: 'Kim loại chuyển tiếp dãy thứ nhất (Sc đến Cu), đại cương về phức chất: nguyên tử trung tâm, phối tử, số phối trí và ứng dụng.',
    lessons: [
      'Bài 20: Đại cương về kim loại chuyển tiếp dãy thứ nhất',
      'Bài 21: Sơ lược về phức chất',
      'Bài 22: Ứng dụng của phức chất trong y học và đời sống',
    ],
    objectives: [
      'Nêu đặc điểm cấu hình electron của kim loại chuyển tiếp (điền electron vào phân lớp 3d) và nhiều số oxi hóa khác nhau.',
      'Trình bày khái niệm phức chất, nguyên tử trung tâm (cation kim loại chuyển tiếp), phối tử (ligand) và số phối trí.',
      'Nêu ý nghĩa và ứng dụng của phức chất (như hemoglobin chứa phức chất của Fe(II), diệp lục chứa phức chất của Mg(II), thuốc chống ung thư cisplatin).',
    ],
    keyKnowledge: [
      'Kim loại chuyển tiếp dãy thứ nhất gồm các nguyên tố từ Sc (Z=21) đến Cu (Z=29), có nhiều số oxi hóa biến đổi (Fe²⁺, Fe³⁺, Cr²⁺, Cr³⁺, Cr⁶⁺, Mn²⁺, Mn⁴⁺, Mn⁷⁺...).',
      'Phức chất gồm nguyên tử trung tâm liên kết với các phối tử qua liên kết cho - nhận (phối trí).',
      'Ví dụ phức chất: [Cu(NH3)4](OH)2 màu xanh lam thẫm, [Ag(NH3)2]⁺, [Fe(CN)6]⁴⁻.',
      'Phối tử phổ biến: H2O, NH3, Cl⁻, CN⁻, OH⁻ mang cặp electron tự do.',
    ],
    theorySummary: `Phức chất là nội dung hiện đại và nổi bật trong chương trình Hóa học 12 GDPT 2018, giúp học sinh tiếp cận với hóa học phối trí và ứng dụng sinh học hiện đại.`,
    formulas: [
      { name: 'Cấu tạo phức chất', formula: '[M(L)n]^(q+)', condition: 'M là nguyên tử trung tâm, L là phối tử, n là số phối trí' },
    ],
    reactions: [
      { name: 'Tạo phức xanh thẫm của Cu²⁺ với NH3', equation: 'Cu(OH)2 + 4NH3 → [Cu(NH3)4](OH)2 (dung dịch màu xanh lam thẫm)' },
    ],
    sampleExamples: [
      {
        title: 'Xác định nguyên tử trung tâm và phối tử',
        question: 'Trong phức chất [Cu(H2O)6]²⁺, hãy chỉ ra nguyên tử trung tâm, phối tử và số phối trí.',
        solution: '- Nguyên tử trung tâm: Cation Cu²⁺.\n- Phối tử: Phân tử H2O.\n- Số phối trí: 6 (có 6 phân tử H2O phối trí xung quanh Cu²⁺).',
      },
    ],
    commonMistakes: [
      'Nhầm lẫn điện tích của phức chất với số oxi hóa của nguyên tử trung tâm.',
    ],
  },
];
