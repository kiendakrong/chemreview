import { Chapter, Question } from '../types';

export const INITIAL_CHAPTERS: Chapter[] = [
  // ==========================================
  // LỚP 10 (CHƯƠNG TRÌNH GDPT 2018)
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
      'Viết được cấu hình electron nguyên tử theo ô orbital của 20 nguyên tố đầu tiên.',
      'Xác định được số electron lớp ngoài cùng và dự đoán tính chất hóa học cơ bản (kim loại, phi kim, khí hiếm).',
    ],
    keyKnowledge: [
      'Điện tích: proton (+1), electron (-1), neutron (0).',
      'Số khối A = Z + N (với Z là số proton = số đơn vị điện tích hạt nhân, N là số neutron).',
      'Nguyên tố hóa học là tập hợp các nguyên tử có cùng số đơn vị điện tích hạt nhân (cùng Z).',
      'Đồng vị: Cùng số proton Z, khác số neutron N nên số khối A khác nhau.',
      'Cấu hình electron phân lớp: 1s 2s 2p 3s 3p 4s 3d...',
      'Lớp ngoài cùng có tối đa 8 electron (bão hòa ns² np⁶).',
    ],
    theorySummary: `Nguyên tử có cấu tạo rỗng, gồm hạt nhân mang điện tích dương ở tâm và các electron mang điện tích âm chuyển động xung quanh rất nhanh trong không gian rỗng.

1. Hạt nhân nguyên tử:
- Tập trung hầu hết khối lượng của nguyên tử (m_p ≈ m_n ≈ 1 amu; m_e ≈ 0,00055 amu rất nhỏ bé).
- Số đơn vị điện tích hạt nhân Z = Số proton = Số electron.
- Số khối A = Z + N. Nguyên tử khối xấp xỉ bằng số khối.
- Nguyên tử khối trung bình của nguyên tố X có các đồng vị: A_tb = (A1.x1 + A2.x2 + ...)/100.

2. Vỏ nguyên tử và Orbital nguyên tử (AO):
- Orbital nguyên tử (AO) là khu vực không gian xung quanh hạt nhân mà tại đó xác suất tìm thấy electron là lớn nhất (khoảng 90%).
- AO s có dạng hình cầu; AO p có dạng hình số 8 nổi gồm 3 orbital (px, py, pz) định hướng theo 3 trục không gian.
- Số AO trong một lớp n là n²; số electron tối đa trong lớp n là 2n² (với n ≤ 4).
- Thứ tự mức năng lượng: 1s < 2s < 2p < 3s < 3p < 4s < 3d < 4p...
- Nguyên lý vững bền, nguyên lý Pauli (mỗi AO chứa tối đa 2e có spin ngược chiều), quy tắc Hund.`,
    formulas: [
      { name: 'Số khối', formula: 'A = Z + N', condition: 'Z là số proton, N là số neutron' },
      { name: 'Nguyên tử khối trung bình', formula: 'A_tb = (A1*x1 + A2*x2 + ... + An*xn) / 100', condition: 'x1, x2 là phần trăm số nguyên tử các đồng vị' },
      { name: 'Số electron tối đa trong lớp n', formula: 'N_max = 2n²', condition: 'Áp dụng cho n = 1, 2, 3, 4' },
    ],
    reactions: [],
    comparisonTable: {
      title: 'So sánh đặc tính của các hạt cơ bản cấu tạo nên nguyên tử',
      headers: ['Hạt', 'Ký hiệu', 'Khối lượng (amu)', 'Điện tích (e)', 'Vị trí trong nguyên tử'],
      rows: [
        ['Proton', 'p', '≈ 1,0073 (≈ 1)', '+1', 'Hạt nhân'],
        ['Neutron', 'n', '≈ 1,0087 (≈ 1)', '0', 'Hạt nhân'],
        ['Electron', 'e', '≈ 0,00055 (rất nhỏ)', '-1', 'Lớp vỏ nguyên tử'],
      ],
    },
    sampleExamples: [
      {
        title: 'Tính nguyên tử khối trung bình của Chlorine',
        question: 'Trong tự nhiên, chlorine có 2 đồng vị bền là ³⁵Cl (chiếm 75,77%) và ³⁷Cl (chiếm 24,23%). Hãy tính nguyên tử khối trung bình của chlorine.',
        solution: 'Áp dụng công thức nguyên tử khối trung bình:\nA_tb(Cl) = (35 * 75,77 + 37 * 24,23) / 100 = (2651,95 + 896,51) / 100 = 35,4846 ≈ 35,5 (amu).\nĐáp số: 35,5 amu.',
      },
      {
        title: 'Xác định cấu hình electron và tính chất nguyên tố',
        question: 'Nguyên tử nguyên tố X có Z = 16. Viết cấu hình electron và cho biết X là kim loại, phi kim hay khí hiếm?',
        solution: '- Z = 16 => có 16 electron.\n- Cấu hình electron: 1s² 2s² 2p⁶ 3s² 3p⁴ (viết gọn là [Ne] 3s² 3p⁴).\n- Lớp ngoài cùng là lớp 3 có 2 + 4 = 6 electron (từ 5 đến 7 electron) => X là một phi kim (nguyên tố Sulfur - S).',
      },
    ],
    commonMistakes: [
      'Nhầm lẫn giữa số khối A và nguyên tử khối trung bình (số khối luôn là số nguyên, nguyên tử khối trung bình thường là số thập phân).',
      'Viết sai thứ tự phân lớp khi phân bố electron có phân lớp 3d: năng lượng 4s thấp hơn 3d khi điền e, nhưng khi viết cấu hình e phải sắp theo thứ tự lớp: 3d trước 4s (ví dụ: Fe (Z=26) là [Ar] 3d⁶ 4s² chứ không phải 4s² 3d⁶).',
      'Xác định sai số e lớp ngoài cùng của các nguyên tố chuyển tiếp họ d.',
    ],
  },
  {
    id: 'g10-c4',
    grade: 10,
    order: 4,
    code: 'HOA10-CH4',
    title: 'Chương 4: Phản ứng oxi hóa - khử',
    description: 'Số oxi hóa, chất oxi hóa, chất khử, quá trình oxi hóa, quá trình khử và cân bằng phương pháp thăng bằng electron.',
    lessons: [
      'Bài 12: Phản ứng oxi hóa - khử và ứng dụng',
      'Bài 13: Luyện tập cân bằng phản ứng oxi hóa - khử',
    ],
    objectives: [
      'Xác định được số oxi hóa của các nguyên tố trong đơn chất và hợp chất.',
      'Phân biệt được chất khử, chất oxi hóa, quá trình oxi hóa, quá trình khử.',
      'Cân bằng thành thạo phản ứng oxi hóa - khử bằng phương pháp thăng bằng electron.',
      'Nêu được ý nghĩa thực tiễn của phản ứng oxi hóa - khử trong đời sống và sản xuất.',
    ],
    keyKnowledge: [
      'Số oxi hóa của đơn chất luôn bằng 0.',
      'Trong hợp chất: H thường là +1 (trừ hydride kim loại), O thường là -2 (trừ peroxide, OF₂), kim loại kiềm luôn +1, kiềm thổ +2, Al +3.',
      'Chất khử (chất bị oxi hóa): nhường electron -> số oxi hóa tăng.',
      'Chất oxi hóa (chất bị khử): nhận electron -> số oxi hóa giảm.',
      'Khẩu hiệu ghi nhớ: "Khử cho - O nhận", "Khử tăng - O giảm".',
      'Tổng số electron chất khử nhường = Tổng số electron chất oxi hóa nhận.',
    ],
    theorySummary: `Phản ứng oxi hóa - khử là phản ứng hóa học trong đó có sự chuyển dịch electron giữa các chất phản ứng, dẫn đến sự thay đổi số oxi hóa của một hay nhiều nguyên tố.

1. Các quy tắc xác định số oxi hóa:
- Quy tắc 1: Số oxi hóa của nguyên tố trong đơn chất bằng 0.
- Quy tắc 2: Trong hợp chất, tổng số oxi hóa của các nguyên tử bằng 0.
- Quy tắc 3: Trong ion đơn nguyên tử, số oxi hóa bằng điện tích ion. Trong ion đa nguyên tử, tổng số oxi hóa bằng điện tích ion.
- Quy tắc 4: Trong hợp chất, kim loại kiềm luôn có số oxi hóa +1; kiềm thổ +2; Al +3; F luôn có số oxi hóa -1; H thường là +1; O thường là -2.

2. Phương pháp thăng bằng electron gồm 4 bước:
- Bước 1: Xác định số oxi hóa của các nguyên tố có sự thay đổi trước và sau phản ứng.
- Bước 2: Viết các quá trình oxi hóa (nhường e) và quá trình khử (nhận e).
- Bước 3: Tìm hệ số thích hợp sao cho tổng e nhường = tổng e nhận (bội chung nhỏ nhất).
- Bước 4: Đặt hệ số vào phương trình và kiểm tra số nguyên tử hai vế (thường theo thứ tự: Kim loại -> Phi kim -> Hydro -> Oxy).`,
    formulas: [
      { name: 'Định luật bảo toàn electron', formula: 'Tổng n_e nhường = Tổng n_e nhận', condition: 'n_e = số mol * số electron trao đổi' },
      { name: 'Tổng số oxi hóa trong ion đa nguyên tử', formula: 'Σ (Số oxh * chỉ số) = Điện tích ion', condition: 'Ví dụ SO4(2-): x + 4*(-2) = -2 => x = +6' },
    ],
    reactions: [
      {
        name: 'Phản ứng kim loại tác dụng với HNO3 loãng',
        equation: '3Cu + 8HNO3 → 3Cu(NO3)2 + 2NO↑ + 4H2O',
        conditions: 'Nhiệt độ phòng',
        note: 'Cu: 0 -> +2 (nhường 2e); N: +5 -> +2 (nhận 3e). Hệ số: 3 Cu, 2 NO',
      },
      {
        name: 'Phản ứng nhiệt nhôm',
        equation: '2Al + Fe2O3 → Al2O3 + 2Fe',
        conditions: 'to cao',
        note: 'Al là chất khử, Fe2O3 là chất oxi hóa',
      },
      {
        name: 'Oxi hóa SO2 bằng dung dịch KMnO4',
        equation: '5SO2 + 2KMnO4 + 2H2O → K2SO4 + 2MnSO4 + 2H2SO4',
        conditions: '',
        note: 'Làm mất màu tím dung dịch thuốc tím KMnO4',
      },
    ],
    sampleExamples: [
      {
        title: 'Cân bằng phản ứng Cu tác dụng HNO3 tạo khí NO',
        question: 'Cân bằng phương trình sau theo phương pháp thăng bằng electron: Cu + HNO3 → Cu(NO3)2 + NO + H2O. Xác định tỉ lệ số phân tử HNO3 đóng vai trò chất oxi hóa so với số phân tử HNO3 làm môi trường.',
        solution: '1. Xác định số oxh: Cu(0) -> Cu(+2); N(+5) trong HNO3 -> N(+2) trong NO.\n2. Quá trình:\n  Cu(0) -> Cu(+2) + 2e (x 3)\n  N(+5) + 3e -> N(+2) (x 2)\n3. Thăng bằng e: 3Cu + 2NO\n4. Đặt vào PT: 3Cu + 8HNO3 → 3Cu(NO3)2 + 2NO + 4H2O.\n- Tổng số phân tử HNO3 tham gia = 8. Trong đó:\n  + 2 phân tử bị khử thành NO (đóng vai trò chất oxi hóa).\n  + 6 phân tử tạo gốc NO3- trong Cu(NO3)2 (đóng vai trò môi trường tạo muối).\n=> Tỉ lệ chất oxi hóa : chất môi trường = 2 : 6 = 1 : 3.',
      },
    ],
    commonMistakes: [
      'Quên nhân đôi chỉ số khi viết quá trình cho đơn chất halogen hoặc khí có chỉ số như Cl2, O2, N2 (ví dụ: Cl2 + 2e -> 2Cl-).',
      'Đếm thiếu số phân tử acid đóng vai trò môi trường tạo muối (HNO3, H2SO4).',
      'Nhầm lẫn giữa "chất bị oxi hóa" (chính là chất khử) và "chất bị khử" (chính là chất oxi hóa).',
    ],
  },
  {
    id: 'g10-c5',
    grade: 10,
    order: 5,
    code: 'HOA10-CH5',
    title: 'Chương 5: Năng lượng hóa học',
    description: 'Biến thiên enthalpy chuẩn của phản ứng, phản ứng tỏa nhiệt, phản ứng thu nhiệt và tính toán năng lượng phản ứng.',
    lessons: [
      'Bài 14: Phản ứng tỏa nhiệt và phản ứng thu nhiệt',
      'Bài 15: Ý nghĩa và cách tính biến thiên enthalpy của phản ứng hóa học',
    ],
    objectives: [
      'Nêu được khái niệm phản ứng tỏa nhiệt, phản ứng thu nhiệt và biến thiên enthalpy chuẩn Δr H°298.',
      'Phân biệt được phản ứng tỏa nhiệt (Δr H°298 < 0) và phản ứng thu nhiệt (Δr H°298 > 0).',
      'Tính được biến thiên enthalpy của phản ứng dựa vào nhiệt tạo thành chuẩn Δf H°298 hoặc năng lượng liên kết Eb.',
      'Giải thích được ứng dụng giải phóng hoặc hấp thu năng lượng trong đời sống (đốt nhiên liệu, túi chườm nóng/lạnh).',
    ],
    keyKnowledge: [
      'Phản ứng tỏa nhiệt: giải phóng năng lượng dạng nhiệt ra môi trường, nhiệt độ môi trường tăng, Δr H°298 < 0.',
      'Phản ứng thu nhiệt: hấp thu năng lượng dạng nhiệt từ môi trường, nhiệt độ môi trường giảm, Δr H°298 > 0.',
      'Nhiệt tạo thành chuẩn của đơn chất bền nhất ở 298 K bằng 0 (ví dụ: O2(g), N2(g), H2(g), C(graphite)... có Δf H°298 = 0).',
      'Công thức theo nhiệt tạo thành: Δr H°298 = Σ Δf H°298 (sản phẩm) - Σ Δf H°298 (chất đầu).',
      'Công thức theo năng lượng liên kết: Δr H°298 = Σ Eb (chất đầu) - Σ Eb (sản phẩm) (chỉ áp dụng cho các chất ở thể khí).',
    ],
    theorySummary: `Năng lượng hóa học gắn liền với sự hình thành và phá vỡ các liên kết hóa học trong phản ứng.

1. Biến thiên Enthalpy chuẩn (Δr H°298):
- Là nhiệt tỏa ra hoặc thu vào của một phản ứng hóa học được đo ở điều kiện chuẩn (áp suất 1 bar, nhiệt độ 298 K hay 25 °C).
- Phản ứng tỏa nhiệt: Δr H°298 < 0 (năng lượng chất phản ứng lớn hơn năng lượng sản phẩm, liên kết trong sản phẩm bền hơn).
- Phản ứng thu nhiệt: Δr H°298 > 0 (cần cung cấp nhiệt liên tục, liên kết trong chất phản ứng bền hơn).

2. Cách tính toán biến thiên enthalpy chuẩn:
- Phương pháp 1: Dựa vào nhiệt tạo thành chuẩn (Δf H°298):
  Δr H°298 = [Tổng nhiệt tạo thành của sản phẩm * hệ số] - [Tổng nhiệt tạo thành của chất đầu * hệ số].
- Phương pháp 2: Dựa vào năng lượng liên kết (Eb):
  Để phản ứng xảy ra, trước hết cần phá vỡ liên kết của các chất đầu (tiêu tốn năng lượng), sau đó hình thành các liên kết mới trong sản phẩm (giải phóng năng lượng).
  Δr H°298 = [Tổng năng lượng liên kết của chất đầu] - [Tổng năng lượng liên kết của sản phẩm].`,
    formulas: [
      { name: 'Tính theo nhiệt tạo thành chuẩn', formula: 'Δr H°298 = Σ ν_sp * Δf H°298(sp) - Σ ν_cd * Δf H°298(cđ)', condition: 'ν là hệ số tỉ lượng trong phương trình đã cân bằng' },
      { name: 'Tính theo năng lượng liên kết', formula: 'Δr H°298 = Σ ν_cd * Eb(cđ) - Σ ν_sp * Eb(sp)', condition: 'Áp dụng cho các chất đều ở thể khí' },
    ],
    reactions: [
      {
        name: 'Đốt cháy methane (Phản ứng tỏa nhiệt mạnh)',
        equation: 'CH4(g) + 2O2(g) → CO2(g) + 2H2O(l)   Δr H°298 = -890,3 kJ',
        conditions: '',
        note: 'Δr H° < 0 => Phản ứng tỏa nhiệt, dùng làm nhiên liệu khí đốt',
      },
      {
        name: 'Nhiệt phân đá vôi CaCO3 (Phản ứng thu nhiệt)',
        equation: 'CaCO3(s) → CaO(s) + CO2(g)   Δr H°298 = +178,5 kJ',
        conditions: 'to > 900 oC',
        note: 'Δr H° > 0 => Phản ứng thu nhiệt, cần cấp nhiệt liên tục',
      },
    ],
    sampleExamples: [
      {
        title: 'Tính biến thiên enthalpy phản ứng đốt cháy ethanol',
        question: 'Cho phản ứng: C2H5OH(l) + 3O2(g) → 2CO2(g) + 3H2O(l). Biết Δf H°298 của C2H5OH(l) = -277,7 kJ/mol; CO2(g) = -393,5 kJ/mol; H2O(l) = -285,8 kJ/mol; O2(g) = 0. Tính Δr H°298 của phản ứng.',
        solution: 'Áp dụng công thức theo nhiệt tạo thành:\nΔr H°298 = [2 * Δf H°298(CO2) + 3 * Δf H°298(H2O)] - [1 * Δf H°298(C2H5OH) + 3 * Δf H°298(O2)]\n= [2 * (-393,5) + 3 * (-285,8)] - [1 * (-277,7) + 3 * 0]\n= [-787,0 - 857,4] - [-277,7]\n= -1644,4 + 277,7 = -1366,7 kJ.\nKết luận: Δr H°298 = -1366,7 kJ. Phản ứng tỏa ra 1366,7 kJ nhiệt.',
      },
    ],
    commonMistakes: [
      'Nhầm lẫn dấu công thức: Tính theo nhiệt tạo thành là [Sản phẩm - Chất đầu], nhưng tính theo năng lượng liên kết là [Chất đầu - Sản phẩm].',
      'Quên nhân hệ số tỉ lượng của từng chất trong phương trình phản ứng.',
      'Quên rằng nhiệt tạo thành chuẩn của đơn chất bền ở 298 K (như O2(g), N2(g)) bằng 0.',
    ],
  },

  // ==========================================
  // LỚP 11 (CHƯƠNG TRÌNH GDPT 2018)
  // ==========================================
  {
    id: 'g11-c1',
    grade: 11,
    order: 1,
    code: 'HOA11-CH1',
    title: 'Chương 1: Cân bằng hóa học',
    description: 'Phản ứng thuận nghịch, trạng thái cân bằng hóa học, hằng số cân bằng Kc, nguyên lý Le Chatelier và thuyết Brønsted - Lowry về acid - base, pH.',
    lessons: [
      'Bài 1: Khái niệm về cân bằng hóa học',
      'Bài 2: Cân bằng trong dung dịch nước - Thuyết acid - base và pH',
    ],
    objectives: [
      'Trình bày được khái niệm phản ứng thuận nghịch và trạng thái cân bằng hóa học.',
      'Viết được biểu thức và tính hằng số cân bằng Kc của phản ứng thuận nghịch.',
      'Vận dụng nguyên lý chuyển dịch cân bằng Le Chatelier để giải thích sự chuyển dịch khi thay đổi nhiệt độ, nồng độ, áp suất.',
      'Tính pH của dung dịch acid mạnh, base mạnh và xác định môi trường.',
    ],
    keyKnowledge: [
      'Cân bằng hóa học là cân bằng động: tại trạng thái cân bằng, phản ứng vẫn diễn ra với tốc độ thuận bằng tốc độ nghịch (v_t = v_n).',
      'Chất rắn không xuất hiện trong biểu thức hằng số cân bằng Kc.',
      'Nguyên lý Le Chatelier: Khi thay đổi một trong các yếu tố (nồng độ, nhiệt độ, áp suất), cân bằng sẽ chuyển dịch theo chiều làm giảm tác động đó.',
      'Tăng nhiệt độ -> cân bằng chuyển dịch theo chiều thu nhiệt (ΔH > 0).',
      'Tăng áp suất -> cân bằng chuyển dịch theo chiều giảm số mol khí (chỉ ảnh hưởng khi có chất khí và số mol khí 2 vế khác nhau).',
      'Chất xúc tác làm tăng tốc độ đạt tới cân bằng nhưng không làm chuyển dịch cân bằng và không làm thay đổi giá trị Kc.',
      'Thuyết Brønsted - Lowry: Acid là chất cho proton (H+), Base là chất nhận proton (H+).',
      'pH = -log[H+]; [H+] * [OH-] = 10^(-14) ở 25 °C.',
    ],
    theorySummary: `Cân bằng hóa học là một trong những nội dung cốt lõi của Hóa học 11 GDPT 2018.

1. Trạng thái cân bằng hóa học:
- Với phản ứng thuận nghịch: aA + bB ⇌ cC + dD.
- Hằng số cân bằng nồng độ: Kc = ([C]^c * [D]^d) / ([A]^a * [B]^b). (Nồng độ các chất đo ở trạng thái cân bằng; không ghi nồng độ chất rắn).
- Kc chỉ phụ thuộc vào bản chất phản ứng và nhiệt độ, không phụ thuộc vào nồng độ ban đầu hay chất xúc tác.

2. Chuyển dịch cân bằng Le Chatelier:
- Nồng độ: Thêm chất nào -> cân bằng chuyển dịch theo chiều tiêu thụ chất đó.
- Áp suất: Tăng áp suất -> chuyển dịch theo chiều làm giảm số mol khí (hệ số khí nhỏ hơn).
- Nhiệt độ:
  + Tăng nhiệt độ -> chuyển dịch theo chiều thu nhiệt (ΔH > 0).
  + Giảm nhiệt độ -> chuyển dịch theo chiều tỏa nhiệt (ΔH < 0).

3. Thuyết Acid - Base Brønsted - Lowry & Thang pH:
- Acid: Cho H+ (ví dụ: HCl, CH3COOH, NH4+).
- Base: Nhận H+ (ví dụ: NH3, CO3(2-), CH3COO-).
- Lưỡng tính: Vừa có thể cho, vừa có thể nhận H+ (ví dụ: H2O, HCO3-, HSO3-).
- Tích số ion của nước: Kw = [H+] * [OH-] = 1,0 * 10^(-14) (ở 25 °C).
- pH < 7: Môi trường acid; pH = 7: Môi trường trung tính; pH > 7: Môi trường base.`,
    formulas: [
      { name: 'Hằng số cân bằng nồng độ', formula: 'Kc = ([C]^c * [D]^d) / ([A]^a * [B]^b)', condition: 'Bỏ qua nồng độ chất rắn nguyên chất' },
      { name: 'Công thức tính pH', formula: 'pH = -log[H+]  hoặc  [H+] = 10^(-pH)', condition: 'Đơn vị nồng độ mol/L (M)' },
      { name: 'Mối liên hệ pH và pOH', formula: 'pH + pOH = 14', condition: 'Ở nhiệt độ chuẩn 25 °C' },
    ],
    reactions: [
      {
        name: 'Sản xuất Ammonia (Quá trình Haber - Bosch)',
        equation: 'N2(g) + 3H2(g) ⇌ 2NH3(g)   Δr H°298 = -92 kJ',
        conditions: '450 oC, 200 bar, bột Fe',
        note: 'Để tăng hiệu suất: tăng áp suất (4 mol khí -> 2 mol khí) và hạ nhiệt độ hợp lý',
      },
      {
        name: 'Cân bằng ion NO2 và N2O4',
        equation: '2NO2(g) (màu nâu đỏ) ⇌ N2O4(g) (không màu)   Δr H°298 = -57,2 kJ',
        conditions: '',
        note: 'Ngâm vào nước đá (hạ to) chuyển dịch theo chiều tỏa nhiệt => mất màu',
      },
    ],
    sampleExamples: [
      {
        title: 'Tính pH dung dịch Ba(OH)2 0,005 M',
        question: 'Tính pH của dung dịch Ba(OH)2 có nồng độ 0,005 M ở 25 °C, giả thiết Ba(OH)2 phân li hoàn toàn.',
        solution: 'Phương trình phân li: Ba(OH)2 → Ba²⁺ + 2OH⁻\n=> [OH⁻] = 2 * C_M(Ba(OH)2) = 2 * 0,005 = 0,01 M = 10⁻² M.\n=> pOH = -log[OH⁻] = -log(10⁻²) = 2.\n=> pH = 14 - pOH = 14 - 2 = 12.\nĐáp số: pH = 12 (môi trường base mạnh).',
      },
    ],
    commonMistakes: [
      'Đưa nồng độ chất rắn (như C, CaCO3, CuO) vào biểu thức tính Kc.',
      'Quên rằng chất xúc tác KHÔNG làm chuyển dịch cân bằng hóa học.',
      'Nhầm chiều thu nhiệt và tỏa nhiệt khi tăng/giảm nhiệt độ theo Le Chatelier.',
    ],
  },
  {
    id: 'g11-c4',
    grade: 11,
    order: 4,
    code: 'HOA11-CH4',
    title: 'Chương 4: Hydrocarbon',
    description: 'Alkane, Alkene, Alkyne và Arene (Benzene và đồng đẳng); cấu tạo, đồng phân, danh pháp IUPAC và phản ứng đặc trưng.',
    lessons: [
      'Bài 12: Alkane',
      'Bài 13: Hydrocarbon không no (Alkene - Alkyne)',
      'Bài 14: Arene (Hydrocarbon thơm)',
    ],
    objectives: [
      'Nêu được công thức chung, đặc điểm liên kết và gọi tên IUPAC của alkane, alkene, alkyne, arene.',
      'Viết được phương trình hóa học phản ứng thế halogen của alkane và benzene.',
      'Vận dụng quy tắc cộng Markovnikov để xác định sản phẩm chính của alkene bất đối xứng.',
      'Nêu được phản ứng phân biệt alk-1-yne bằng dung dịch AgNO3/NH3.',
    ],
    keyKnowledge: [
      'Alkane CnH2n+2 (n ≥ 1): Chỉ chứa liên kết đơn C-C và C-H bền vững. Phản ứng đặc trưng là phản ứng thế halogen (SR), cracking, đốt cháy.',
      'Alkene CnH2n (n ≥ 2): Có 1 liên kết đôi C=C (gồm 1 liên kết σ bền và 1 liên kết π kém bền). Phản ứng đặc trưng là phản ứng cộng (cộng H2, X2, HX, H2O), trùng hợp, làm mất màu nước bromine và KMnO4.',
      'Quy tắc Markovnikov: Trong phản ứng cộng HX vào alkene bất đối xứng, H ưu tiên cộng vào carbon mang nhiều H hơn, X cộng vào carbon mang ít H hơn.',
      'Alkyne CnH2n-2 (n ≥ 2): Có 1 liên kết ba C≡C. Alk-1-yne (có nối ba đầu mạch như ethyne, propyne) tác dụng với AgNO3/NH3 tạo kết tủa màu vàng nhạt.',
      'Arene (Benzene C6H6): Cấu trúc vòng thơm bền vững, "dễ thế, khó cộng, bền với tác nhân oxi hóa".',
    ],
    theorySummary: `Hydrocarbon là nền tảng của hóa học hữu cơ.

1. Alkane (Paraffin):
- CTPT chung: CnH2n+2 (n ≥ 1).
- Phản ứng thế halogen (Cl2, Br2 chiếu sáng): Thế ưu tiên vào nguyên tử C bậc cao hơn tạo sản phẩm chính.
- Phản ứng cracking và reforming trong công nghiệp dầu mỏ để tăng chỉ số octane của xăng.

2. Alkene (Olefin):
- CTPT chung: CnH2n (n ≥ 2).
- Có đồng phân hình học (cis - trans) khi mỗi carbon của liên kết đôi liên kết với 2 nhóm nguyên tử khác nhau.
- Phản ứng làm mất màu nước bromine: Dùng để nhận biết hydrocarbon không no.
- Quy tắc cộng Markovnikov: "Giàu càng giàu thêm" (H cộng vào C nhiều H hơn).

3. Alkyne:
- CTPT chung: CnH2n-2 (n ≥ 2).
- Phản ứng thế ion kim loại: RC≡CH + AgNO3 + NH3 → RC≡CAg↓ (vàng) + NH4NO3 (phản ứng đặc trưng của alkyne có liên kết ba đầu mạch).

4. Arene (Hydrocarbon thơm):
- Quy tắc thế vào vòng benzene: Nhóm thế loại I (-CH3, -OH, -NH2...) định hướng thế vào vị trí ortho (o-) và para (p-). Nhóm thế loại II (-NO2, -COOH...) định hướng vào vị trí meta (m-).`,
    formulas: [
      { name: 'Công thức chung Alkane', formula: 'CnH2n+2 (n ≥ 1)', condition: 'Mạch hở, no' },
      { name: 'Công thức chung Alkene', formula: 'CnH2n (n ≥ 2)', condition: 'Mạch hở, 1 nối đôi C=C' },
      { name: 'Công thức chung Alkyne', formula: 'CnH2n-2 (n ≥ 2)', condition: 'Mạch hở, 1 nối ba C≡C' },
    ],
    reactions: [
      {
        name: 'Phản ứng thế của methane với chlorine',
        equation: 'CH4 + Cl2 → CH3Cl + HCl',
        conditions: 'ánh sáng khuếch tán',
        note: 'Cơ chế thế gốc tự do (SR)',
      },
      {
        name: 'Phản ứng cộng HBr vào propene (Quy tắc Markovnikov)',
        equation: 'CH3-CH=CH2 + HBr → CH3-CH(Br)-CH3 (sản phẩm chính: 2-bromopropane)',
        conditions: 'Nhiệt độ phòng',
        note: 'H cộng vào C-1 (nhiều H hơn), Br cộng vào C-2 (ít H hơn)',
      },
      {
        name: 'Phản ứng thế ion Ag của acetylene',
        equation: 'CH≡CH + 2AgNO3 + 2NH3 → AgC≡CAg↓ + 2NH4NO3',
        conditions: '',
        note: 'Tạo kết tủa màu vàng nhạt bạc acetylide',
      },
    ],
    sampleExamples: [
      {
        title: 'Xác định sản phẩm chính của phản ứng cộng alkene',
        question: 'Cho but-1-ene tác dụng với dung dịch HCl. Viết phương trình phản ứng và gọi tên sản phẩm chính theo danh pháp IUPAC.',
        solution: 'Công thức cấu tạo but-1-ene: CH2=CH-CH2-CH3.\nTheo quy tắc cộng Markovnikov:\n- H⁺ cộng vào nguyên tử carbon C-1 (nhiều H hơn).\n- Cl⁻ cộng vào nguyên tử carbon C-2 (ít H hơn).\n=> Sản phẩm chính: CH3-CH(Cl)-CH2-CH3 có tên IUPAC là: 2-chlorobutane.',
      },
    ],
    commonMistakes: [
      'Xác định sai sản phẩm chính khi cộng HX vào alkene do áp dụng ngược quy tắc Markovnikov.',
      'Nghĩ rằng tất cả alkyne đều tạo kết tủa với AgNO3/NH3 (chỉ alkyne có liên kết ba đầu mạch như ethyne, propyne mới phản ứng; but-2-yne CH3-C≡C-CH3 KHÔNG phản ứng).',
    ],
  },

  // ==========================================
  // LỚP 12 (CHƯƠNG TRÌNH GDPT 2018)
  // ==========================================
  {
    id: 'g12-c1',
    grade: 12,
    order: 1,
    code: 'HOA12-CH1',
    title: 'Chương 1: Ester - Lipid',
    description: 'Ester, chất béo (Triglyceride), xà phòng và chất giặt rửa; danh pháp, phản ứng thủy phân trong môi trường acid và base.',
    lessons: [
      'Bài 1: Ester',
      'Bài 2: Lipid và chất béo',
      'Bài 3: Xà phòng và chất giặt rửa tổng hợp',
    ],
    objectives: [
      'Nêu được khái niệm, công thức cấu tạo và gọi tên IUPAC của ester và triglyceride.',
      'Viết được phương trình phản ứng ester hóa và phản ứng thủy phân ester (thuận nghịch trong acid, một chiều xà phòng hóa trong kiềm).',
      'Giải thích được tính chất vật lý của ester (mùi thơm đặc trưng, nhẹ hơn nước, ít tan, nhiệt độ sôi thấp hơn alcohol và acid tương ứng).',
      'Giải được bài toán thủy phân ester đơn chức, đa chức và tính toán xà phòng hóa chất béo.',
    ],
    keyKnowledge: [
      'Ester đơn chức no, mạch hở: CnH2nO2 (n ≥ 2). Ví dụ: HCOOCH3 (methyl formate), CH3COOC2H5 (ethyl acetate).',
      'Nhiệt độ sôi: Acid carboxylic > Alcohol > Ester (do ester không tạo được liên kết hydrogen liên phân tử).',
      'Phản ứng thủy phân trong môi trường acid (H+, to): Thuận nghịch hai chiều, tạo acid và alcohol.',
      'Phản ứng xà phòng hóa trong môi trường kiềm (NaOH/KOH, to): Một chiều, tạo muối carboxylate và alcohol.',
      'Chất béo là triester của glycerol với các acid béo (triglyceride hoặc triacylglycerol).',
      'Các acid béo no tiêu biểu: Stearic acid (C17H35COOH), Palmitic acid (C15H31COOH). Tristearin và tripalmitin ở thể rắn (mỡ động vật).',
      'Các acid béo không no tiêu biểu: Oleic acid (C17H33COOH, có 1 liên kết đôi cis), Linoleic acid (C17H31COOH, 2 liên kết đôi). Triolein ở thể lỏng (dầu thực vật).',
      'Chất béo lỏng + H2 (Ni, to) → Chất béo rắn (bơ nhân tạo / shortening).',
    ],
    theorySummary: `Chương Ester - Lipid là nội dung trọng tâm thi tốt nghiệp THPT theo GDPT 2018.

1. Khái niệm và Danh pháp Ester:
- Khi thay thế nhóm -OH ở nhóm carboxyl (-COOH) của carboxylic acid bằng nhóm -OR' thì thu được ester: R-COO-R'.
- Tên gọi: Tên gốc R' + Tên gốc acid (đuôi "ate").
  Ví dụ: CH3COOC2H5: ethyl acetate (hoặc ethyl ethanoate); HCOOCH3: methyl formate; CH2=CH-COOCH3: methyl acrylate; CH3COOCH2C6H5: benzyl acetate (mùi hoa nhài); CH3COOCH2CH2CH(CH3)2: isoamyl acetate (mùi chuối chín).

2. Phản ứng hóa học đặc trưng của Ester:
a) Thủy phân trong môi trường acid:
  RCOOR' + H2O ⇌ RCOOH + R'OH (H2SO4 đặc, to)
b) Thủy phân trong môi trường kiềm (phản ứng xà phòng hóa):
  RCOOR' + NaOH → RCOONa + R'OH (to)
* Trường hợp đặc biệt:
- Ester của phenol: RCOOC6H5 + 2NaOH → RCOONa + C6H5ONa + H2O (tỉ lệ mol 1:2).
- Ester có liên kết đôi đính trực tiếp với nguyên tử O:
  RCOOCH=CH2 + NaOH → RCOONa + CH3CHO (tạo aldehyde).

3. Chất béo (Triglyceride):
- Công thức tổng quát: (RCOO)3C3H5.
- Phản ứng xà phòng hóa:
  (RCOO)3C3H5 + 3NaOH → 3RCOONa + C3H5(OH)3 (glycerol).
- Định luật bảo toàn khối lượng trong phản ứng xà phòng hóa:
  m_chất béo + m_NaOH = m_xà phòng + m_glycerol. Trong đó n_NaOH = 3 * n_chất béo = 3 * n_glycerol.`,
    formulas: [
      { name: 'Công thức ester no đơn chức mạch hở', formula: 'CnH2nO2 (n ≥ 2)', condition: 'Số C tối thiểu bằng 2' },
      { name: 'Bảo toàn khối lượng xà phòng hóa chất béo', formula: 'm_cb + m_NaOH = m_muối (xà phòng) + m_glycerol', condition: 'n_NaOH = 3 * n_cb = 3 * n_glycerol' },
      { name: 'Chỉ số xà phòng hóa', formula: 'Số mg KOH dùng để xà phòng hóa hoàn toàn 1 g chất béo', condition: 'Bao gồm xà phòng hóa triglyceride và trung hòa acid béo tự do' },
    ],
    reactions: [
      {
        name: 'Phản ứng ester hóa điều chế ethyl acetate',
        equation: 'CH3COOH + C2H5OH ⇌ CH3COOC2H5 + H2O',
        conditions: 'H2SO4 đặc, to',
        note: 'Phản ứng thuận nghịch, H2SO4 đặc vừa làm xúc tác vừa hút nước để tăng hiệu suất',
      },
      {
        name: 'Xà phòng hóa chất béo Triolein',
        equation: '(C17H33COO)3C3H5 + 3NaOH → 3C17H33COONa + C3H5(OH)3',
        conditions: 'to',
        note: 'Tạo muối sodium oleate (thành phần chính của xà phòng) và glycerol',
      },
      {
        name: 'Hydro hóa chất béo lỏng thành chất béo rắn',
        equation: '(C17H33COO)3C3H5 (lỏng) + 3H2 → (C17H35COO)3C3H5 (rắn)',
        conditions: 'Ni, to, p',
        note: 'Biến dầu thực vật thành bơ thực vật (margarine)',
      },
    ],
    sampleExamples: [
      {
        title: 'Tính khối lượng xà phòng thu được từ xà phòng hóa chất béo',
        question: 'Xà phòng hóa hoàn toàn 8,9 gam tristearin (C17H35COO)3C3H5 bằng dung dịch NaOH vừa đủ, đun nóng. Sau phản ứng hoàn toàn, cô cạn dung dịch thu được bao nhiêu gam xà phòng (sodium stearate)?',
        solution: '1. Khối lượng mol của tristearin M = (17*12 + 35 + 44)*3 + 41 = 890 g/mol.\n=> Số mol tristearin: n = 8,9 / 890 = 0,01 mol.\n2. Phương trình phản ứng:\n  (C17H35COO)3C3H5 + 3NaOH → 3C17H35COONa + C3H5(OH)3\n=> n(C17H35COONa) = 3 * 0,01 = 0,03 mol.\n3. Khối lượng muối xà phòng thu được:\n  M(C17H35COONa) = 17*12 + 35 + 12 + 32 + 23 = 306 g/mol.\n  m = 0,03 * 306 = 9,18 gam.\nĐáp số: 9,18 gam.',
      },
    ],
    commonMistakes: [
      'Quên rằng phản ứng ester hóa là phản ứng THUẬN NGHỊCH, không bao giờ đạt hiệu suất 100% nếu không tách sản phẩm.',
      'Nhầm lẫn tỉ lệ phản ứng của ester của phenol: tác dụng với NaOH theo tỉ lệ mol 1:2 và sinh ra H2O thay vì alcohol.',
      'Tính sai phân tử khối của chất béo (Tristearin: 890; Triolein: 884; Tripalmitin: 806).',
    ],
  },
  {
    id: 'g12-c2',
    grade: 12,
    order: 2,
    code: 'HOA12-CH2',
    title: 'Chương 2: Carbohydrate',
    description: 'Monosaccharide (Glucose, Fructose), Disaccharide (Saccharose, Maltose), Polysaccharide (Tinh bột, Cellulose); cấu trúc và phản ứng hóa học.',
    lessons: [
      'Bài 4: Giới thiệu về Carbohydrate - Glucose và Fructose',
      'Bài 5: Saccharose và Maltose',
      'Bài 6: Tinh bột và Cellulose',
    ],
    objectives: [
      'Phân loại được carbohydrate thành monosaccharide, disaccharide và polysaccharide.',
      'Mô tả được dạng mạch hở và mạch vòng của glucose và fructose.',
      'Viết được phương trình phản ứng tráng bạc của glucose, phản ứng với Cu(OH)2 và phản ứng lên men rượu.',
      'Phân biệt được cấu trúc của tinh bột (amylose liên kết α-1,4; amylopectin phân nhánh liên kết α-1,6) và cellulose (mạch không phân nhánh liên kết β-1,4).',
    ],
    keyKnowledge: [
      'Công thức chung của Carbohydrate: Cn(H2O)m.',
      'Glucose và Fructose là đồng phân cấu tạo của nhau (C6H12O6).',
      'Glucose có 5 nhóm -OH kề nhau (tính chất polyalcohol: hòa tan Cu(OH)2 tạo dung dịch xanh lam đậm) và 1 nhóm -CHO (tính chất aldehyde: tráng bạc 1 glucose -> 2 Ag, làm mất màu nước bromine).',
      'Fructose chuyển hóa thuận nghịch thành glucose trong môi trường kiềm (OH-), do đó fructose cũng tham gia phản ứng tráng bạc và khử Cu(OH)2/OH-. Tuy nhiên Fructose KHÔNG làm mất màu nước bromine (dùng nước Br2 để phân biệt glucose và fructose).',
      'Saccharose (C12H22O11): Gồm 1 gốc α-glucose và 1 gốc β-fructose liên kết qua nguyên tử O (liên kết α-1,2-glycosidic). Không có nhóm -CHO tự do nên KHÔNG tráng bạc, KHÔNG làm mất màu nước Br2.',
      'Tinh bột (C6H10O5)n: Gồm amylose (mạch không nhánh, xoắn lò xo) và amylopectin (mạch phân nhánh). Tác dụng với iodine tạo hợp chất màu xanh tím đặc trưng.',
      'Cellulose [C6H7O2(OH)3]n: Mạch kéo dài không phân nhánh, có 3 nhóm -OH tự do trong mỗi mắt xích. Tan trong nước Svayze, tác dụng với HNO3 đặc/H2SO4 đặc tạo cellulose trinitrate (thuốc súng không khói).',
    ],
    theorySummary: `Carbohydrate (Hợp chất hữu cơ tạp chức) đóng vai trò thiết yếu trong dinh dưỡng và công nghiệp.

1. Phản ứng đặc trưng của Glucose:
- Tính chất polyalcohol: Tác dụng với Cu(OH)2 ở nhiệt độ thường tạo phức màu xanh lam đậm:
  2C6H12O6 + Cu(OH)2 → (C6H11O6)2Cu + 2H2O
- Tính chất aldehyde:
  + Tráng bạc: C5H11O5-CHO + 2[Ag(NH3)2]OH → C5H11O5-COONH4 + 2Ag↓ + 3NH3 + H2O (tỉ lệ mol: 1 mol glucose tạo 2 mol Ag).
  + Làm mất màu nước bromine: CH2OH[CHOH]4CHO + Br2 + H2O → CH2OH[CHOH]4COOH (gluconic acid) + 2HBr.
  + Khử bởi H2 (xúc tác Ni, to) tạo sorbitol (polyalcohol 6 chức).
- Phản ứng lên men rượu: C6H12O6 → 2C2H5OH + 2CO2↑ (men rượu, 30-35 °C).

2. Phản ứng thủy phân Disaccharide và Polysaccharide:
- Saccharose + H2O → Glucose + Fructose (H+, to).
- Tinh bột / Cellulose + n H2O → n C6H12O6 (glucose).
Lưu ý: Hỗn hợp sau khi thủy phân hoàn toàn saccharose cho phản ứng tráng bạc với tỉ lệ: 1 mol saccharose tạo 4 mol Ag (vì sinh ra 1 mol glucose và 1 mol fructose, mỗi chất tráng ra 2 Ag).`,
    formulas: [
      { name: 'Tỉ lệ mol tráng bạc của Glucose', formula: 'n_Ag = 2 * n_glucose', condition: 'Hiệu suất 100%' },
      { name: 'Tỉ lệ tráng bạc sau thủy phân Saccharose', formula: 'n_Ag = 4 * n_saccharose', condition: 'Thủy phân hoàn toàn 1 mol saccarozo -> 1 mol glu + 1 mol fruc' },
      { name: 'Phân tử khối mắt xích tinh bột / cellulose', formula: 'M(C6H10O5) = 162 g/mol', condition: 'C6H10O5 mắt xích' },
    ],
    reactions: [
      {
        name: 'Tráng bạc Glucose',
        equation: 'C6H12O6 + 2[Ag(NH3)2]OH → C6H11O7NH4 + 2Ag↓ + 3NH3 + H2O',
        conditions: 'to',
        note: '1 mol glucose sinh ra 2 mol Ag',
      },
      {
        name: 'Phản ứng lên men rượu từ glucose',
        equation: 'C6H12O6 → 2C2H5OH + 2CO2↑',
        conditions: 'men rượu, 30-35 oC',
        note: 'Hiệu suất quá trình sản xuất cồn sinh học',
      },
      {
        name: 'Điều chế cellulose trinitrate',
        equation: '[C6H7O2(OH)3]n + 3n HNO3 → [C6H7O2(ONO2)3]n + 3n H2O',
        conditions: 'H2SO4 đặc, to',
        note: 'Cellulose trinitrate dùng làm thuốc súng không khói',
      },
    ],
    sampleExamples: [
      {
        title: 'Tính khối lượng Ag sinh ra khi tráng bạc hoàn toàn glucose',
        question: 'Đun nóng dung dịch chứa 18,0 gam glucose với lượng dư dung dịch AgNO3 trong NH3. Tính khối lượng bạc (Ag) kết tủa thu được, biết hiệu suất phản ứng đạt 100%.',
        solution: '1. Khối lượng mol của glucose C6H12O6: M = 180 g/mol.\n=> n(glucose) = 18,0 / 180 = 0,10 mol.\n2. Phản ứng tráng bạc: 1 mol glucose → 2 mol Ag.\n=> n(Ag) = 2 * 0,10 = 0,20 mol.\n3. Khối lượng Ag thu được:\n  m(Ag) = 0,20 * 108 = 21,6 gam.\nĐáp số: 21,6 gam.',
      },
    ],
    commonMistakes: [
      'Cho rằng Fructose có nhóm aldehyde (-CHO). Thực chất Fructose có nhóm ketone (-CO-), nhưng trong môi trường kiềm bazơ của thuốc thử tráng bạc Fructose chuyển thành Glucose nên vẫn tráng bạc.',
      'Dùng phản ứng tráng bạc để phân biệt Glucose và Fructose (sai lầm, phải dùng dung dịch nước Bromine).',
      'Quên nhân hệ số 4 khi tính lượng Ag thu được từ sản phẩm thủy phân của Saccharose.',
    ],
  },
  {
    id: 'g12-c5',
    grade: 12,
    order: 5,
    code: 'HOA12-CH5',
    title: 'Chương 5: Pin điện và Điện phân',
    description: 'Cặp oxi hóa - khử, thế điện cực chuẩn E°(Ox/Red), Pin Galvani, sự điện phân nóng chảy và điện phân dung dịch.',
    lessons: [
      'Bài 12: Thế điện cực chuẩn và pin điện hóa',
      'Bài 13: Điện phân và ứng dụng',
    ],
    objectives: [
      'Nêu được ý nghĩa của thế điện cực chuẩn E°(Ox/Red) và quy tắc alpha để dự đoán chiều phản ứng.',
      'Mô tả cấu tạo và cơ chế hoạt động của pin Galvani (cực âm anode xảy ra quá trình oxi hóa, cực dương cathode xảy ra quá trình khử).',
      'Tính được sức điện động chuẩn của pin: E°_pin = E°_cathode - E°_anode.',
      'Viết được các quá trình xảy ra tại các điện cực trong quá trình điện phân dung dịch (thứ tự phóng điện của cation và anion).',
    ],
    keyKnowledge: [
      'Thế điện cực chuẩn E°(Ox/Red) càng lớn thì dạng oxi hóa càng mạnh, dạng khử càng yếu.',
      'Quy tắc alpha (α): Chất oxi hóa mạnh hơn phản ứng với chất khử mạnh hơn tạo ra chất oxi hóa yếu hơn và chất khử yếu hơn.',
      'Pin điện (Galvani): Chuyển hóa hóa năng thành điện năng.\n  - Anode (cực âm): Xảy ra quá trình OXI HÓA kim loại (M → M(n+) + ne).\n  - Cathode (cực dương): Xảy ra quá trình KHỬ cation kim loại (M\'(m+) + me → M\').\n  - Sức điện động chuẩn: E°_pin = E°(cathode) - E°(anode) > 0.',
      'Bình điện phân: Chuyển hóa điện năng thành hóa năng.\n  - Anode (cực dương nối với cực dương nguồn điện): Xảy ra quá trình OXI HÓA (anion phóng điện trước hoặc điện cực tan).\n  - Cathode (cực âm nối với cực âm nguồn điện): Xảy ra quá trình KHỬ (cation phóng điện: Cation sau Al3+ trong dãy điện hóa phóng điện trước, nếu là kim loại từ Al trở về trước thì H2O bị khử sinh ra H2 + OH-).',
    ],
    theorySummary: `Pin điện và Điện phân là kiến thức thực nghiệm hiện đại trong chương trình GDPT 2018.

1. Pin điện hóa Galvani (ví dụ Pin Daniell Cu - Zn):
- Cấu tạo: Thanh Zn nhúng trong ZnSO4 (cực âm Anode); thanh Cu nhúng trong CuSO4 (cực dương Cathode); nối với nhau bằng cầu muối (chứa KCl hoặc KNO3) và dây dẫn có vôn kế.
- Ở Anode (-): Zn(s) → Zn²⁺(aq) + 2e (quá trình oxi hóa Zn).
- Ở Cathode (+): Cu²⁺(aq) + 2e → Cu(s) (quá trình khử Cu²⁺).
- Phương trình phản ứng tổng quát trong pin: Zn + Cu²⁺ → Zn²⁺ + Cu.
- Sức điện động chuẩn của pin Cu - Zn:
  E°_pin = E°(Cu²⁺/Cu) - E°(Zn²⁺/Zn) = +0,34 - (-0,76) = 1,10 V.

2. Quá trình Điện phân dung dịch:
- Thứ tự cation bị khử tại Cathode (-):
  Ag⁺ > Fe³⁺ > Cu²⁺ > H⁺ (acid) > Pb²⁺ > Sn²⁺ > Fe²⁺ > Zn²⁺ > H2O.
  (Lưu ý: Các ion Al³⁺, Mg²⁺, Na⁺, Ca²⁺, K⁺ không bị khử trong dung dịch nước; H2O bị khử: 2H2O + 2e → H2↑ + 2OH⁻).
- Thứ tự anion bị oxi hóa tại Anode (+) với điện cực trơ:
  S²⁻ > I⁻ > Br⁻ > Cl⁻ > H2O.
  (Lưu ý: Các gốc chứa oxy như SO4²⁻, NO3⁻, CO3²⁻ không bị oxi hóa; H2O bị oxi hóa: 2H2O → O2↑ + 4H⁺ + 4e).`,
    formulas: [
      { name: 'Sức điện động chuẩn của pin', formula: 'E°_pin = E°_cathode - E°_anode', condition: 'E°_pin luôn mang giá trị dương' },
      { name: 'Định luật Faraday tính khối lượng chất thoát ra', formula: 'm = (A * I * t) / (n * F)', condition: 'F = 96500 C/mol, I đo bằng Ampere (A), t đo bằng giây (s)' },
      { name: 'Số mol electron trao đổi', formula: 'n_e = (I * t) / F', condition: 'Áp dụng cho bảo toàn electron trong điện phân' },
    ],
    reactions: [
      {
        name: 'Điện phân dung dịch CuCl2 với điện cực trơ',
        equation: 'CuCl2 → Cu (ở cathode) + Cl2↑ (ở anode)',
        conditions: 'điện phân dung dịch',
        note: 'Cu2+ nhận 2e ở cathode, 2Cl- nhường 2e ở anode',
      },
      {
        name: 'Điện phân dung dịch NaCl có màng ngăn xốp',
        equation: '2NaCl + 2H2O → 2NaOH + H2↑ + Cl2↑',
        conditions: 'đpdd có màng ngăn',
        note: 'Phương pháp công nghiệp sản xuất xút (NaOH) và khí chlorine',
      },
    ],
    sampleExamples: [
      {
        title: 'Tính sức điện động chuẩn của pin điện hóa Al - Cu',
        question: 'Cho biết thế điện cực chuẩn: E°(Al³⁺/Al) = -1,66 V và E°(Cu²⁺/Cu) = +0,34 V. Tính sức điện động chuẩn của pin điện hóa được tạo bởi hai cặp oxi hóa - khử trên.',
        solution: '1. So sánh thế điện cực chuẩn: E°(Al³⁺/Al) < E°(Cu²⁺/Cu).\n- Cực âm (Anode): Cặp Al³⁺/Al (thế điện cực âm hơn).\n- Cực dương (Cathode): Cặp Cu²⁺/Cu (thế điện cực dương hơn).\n2. Sức điện động chuẩn của pin:\n  E°_pin = E°_cathode - E°_anode\n  = E°(Cu²⁺/Cu) - E°(Al³⁺/Al)\n  = +0,34 - (-1,66) = +2,00 V.\nĐáp số: 2,00 V.',
      },
    ],
    commonMistakes: [
      'Nhầm lẫn quy ước điện cực giữa Pin điện hóa và Bình điện phân:\n  + Trong Pin điện hóa: Anode là cực ÂM (-), Cathode là cực DƯƠNG (+).\n  + Trong Bình điện phân: Anode là cực DƯƠNG (+), Cathode là cực ÂM (-).\n  (Điểm chung: Tại Anode LUÔN xảy ra quá trình oxi hóa, tại Cathode LUÔN xảy ra quá trình khử).',
      'Tính sai dấu khi tính sức điện động chuẩn của pin (E°_pin luôn phải > 0).',
    ],
  },
];

export const INITIAL_QUESTIONS: Question[] = [
  // ==========================================
  // CÂU HỎI LỚP 10
  // ==========================================
  {
    id: 'Q10-01',
    grade: 10,
    chapterId: 'g10-c1',
    chapterTitle: 'Chương 1: Cấu tạo nguyên tử',
    lessonTitle: 'Bài 1: Thành phần của nguyên tử',
    format: 'multiple_choice',
    cognitiveLevel: 'know',
    content: 'Hạt nào sau đây mang điện tích âm trong cấu tạo của nguyên tử?',
    options: [
      { id: 'A', text: 'Proton' },
      { id: 'B', text: 'Neutron' },
      { id: 'C', text: 'Electron' },
      { id: 'D', text: 'Positron' },
    ],
    correctAnswer: 'C',
    explanation: 'Trong cấu tạo nguyên tử, electron (e) chuyển động ở lớp vỏ mang điện tích âm (-1 e), proton (p) mang điện tích dương (+1 e), còn neutron (n) không mang điện tích.',
    mistakesAnalysis: [
      { option: 'A', reason: 'Proton mang điện tích dương (+1).' },
      { option: 'B', reason: 'Neutron là hạt trung hòa về điện (điện tích bằng 0).' },
      { option: 'D', reason: 'Positron là phản hạt của electron, không có trong nguyên tử bền thông thường.' },
    ],
    reviewedByTeacher: true,
    status: 'approved',
  },
  {
    id: 'Q10-02',
    grade: 10,
    chapterId: 'g10-c1',
    chapterTitle: 'Chương 1: Cấu tạo nguyên tử',
    lessonTitle: 'Bài 3: Cấu trúc lớp vỏ electron của nguyên tử',
    format: 'multiple_choice',
    cognitiveLevel: 'understand',
    content: 'Cấu hình electron của nguyên tử nguyên tố Sulfur (Z = 16) ở trạng thái cơ bản là',
    options: [
      { id: 'A', text: '1s² 2s² 2p⁶ 3s² 3p⁴' },
      { id: 'B', text: '1s² 2s² 2p⁶ 3s² 3p⁶' },
      { id: 'C', text: '1s² 2s² 2p⁶ 3s¹ 3p⁵' },
      { id: 'D', text: '1s² 2s² 2p⁴ 3s² 3p⁶' },
    ],
    correctAnswer: 'A',
    explanation: 'Sulfur có Z = 16 electron. Điền electron theo mức năng lượng từ thấp đến cao: 1s² 2s² 2p⁶ 3s² 3p⁴ (viết gọn là [Ne] 3s² 3p⁴). Lớp ngoài cùng (lớp 3) có 6 electron.',
    reviewedByTeacher: true,
    status: 'approved',
  },
  {
    id: 'Q10-03',
    grade: 10,
    chapterId: 'g10-c4',
    chapterTitle: 'Chương 4: Phản ứng oxi hóa - khử',
    lessonTitle: 'Bài 12: Phản ứng oxi hóa - khử và ứng dụng',
    format: 'true_false',
    cognitiveLevel: 'understand',
    stimulus: 'Cho phản ứng hóa học sau trong công nghiệp luyện gang: Fe2O3(s) + 3CO(g) → 2Fe(s) + 3CO2(g) (đun nóng).',
    content: 'Xét tính đúng hoặc sai của các phát biểu sau đây liên quan đến phản ứng trên:',
    subItems: [
      {
        id: 'a',
        text: 'Trong phản ứng trên, Fe2O3 đóng vai trò là chất khử vì cung cấp oxygen.',
        isCorrect: false,
        explanation: 'Sai. Fe2O3 có số oxi hóa của Fe giảm từ +3 xuống 0 => Fe2O3 là chất oxi hóa (bị khử), không phải chất khử.',
      },
      {
        id: 'b',
        text: 'Khí CO đóng vai trò là chất khử và bị oxi hóa thành khí CO2.',
        isCorrect: true,
        explanation: 'Đúng. C trong CO có số oxi hóa +2 tăng lên +4 trong CO2 => CO nhường electron nên là chất khử, tham gia quá trình oxi hóa.',
      },
      {
        id: 'c',
        text: 'Mỗi phân tử Fe2O3 đã nhận tổng cộng 6 electron trong quá trình phản ứng.',
        isCorrect: true,
        explanation: 'Đúng. 2 Fe(+3) + 6e → 2 Fe(0), do đó 1 phân tử Fe2O3 nhận 6 electron.',
      },
      {
        id: 'd',
        text: 'Phản ứng trên không phải là phản ứng oxi hóa - khử vì không có sự tham gia của đơn chất halogen.',
        isCorrect: false,
        explanation: 'Sai. Phản ứng có sự thay đổi số oxi hóa của Fe (+3 -> 0) và C (+2 -> +4) nên là phản ứng oxi hóa - khử điển hình.',
      },
    ],
    explanation: 'Phản ứng Fe2O3 + 3CO → 2Fe + 3CO2 là phản ứng oxi hóa - khử kinh điển trong lò cao. Fe(+3) bị khử thành Fe(0), C(+2) bị oxi hóa thành C(+4).',
    reviewedByTeacher: true,
    status: 'approved',
  },
  {
    id: 'Q10-04',
    grade: 10,
    chapterId: 'g10-c1',
    chapterTitle: 'Chương 1: Cấu tạo nguyên tử',
    lessonTitle: 'Bài 2: Hạt nhân nguyên tử - Nguyên tố hóa học - Đồng vị',
    format: 'short_answer',
    cognitiveLevel: 'apply',
    content: 'Trong tự nhiên, nguyên tố Copper (Cu) có hai đồng vị bền là ⁶³Cu (chiếm 73% số nguyên tử) và ⁶⁵Cu (chiếm 27% số nguyên tử). Hãy tính nguyên tử khối trung bình của copper (làm tròn đến một chữ số sau dấu phẩy thập phân).',
    acceptableAnswers: ['63.54', '63,54', '63.5', '63,5'],
    numericValue: 63.54,
    tolerance: 0.1,
    unit: 'amu',
    explanation: 'Áp dụng công thức nguyên tử khối trung bình:\nA_tb = (63 * 73 + 65 * 27) / 100 = (4599 + 1755) / 100 = 6354 / 100 = 63,54 amu.',
    calculationSteps: [
      'Bước 1: Liệt kê dữ kiện: Đồng vị ⁶³Cu chiếm 73%, đồng vị ⁶⁵Cu chiếm 27%.',
      'Bước 2: Áp dụng công thức: A_tb = (A1 * x1 + A2 * x2) / 100.',
      'Bước 3: Thay số: A_tb = (63 * 73 + 65 * 27) / 100 = 63,54 amu.',
    ],
    reviewedByTeacher: true,
    status: 'approved',
  },
  {
    id: 'Q10-05',
    grade: 10,
    chapterId: 'g10-c5',
    chapterTitle: 'Chương 5: Năng lượng hóa học',
    lessonTitle: 'Bài 15: Ý nghĩa và cách tính biến thiên enthalpy của phản ứng hóa học',
    format: 'multiple_choice',
    cognitiveLevel: 'understand',
    content: 'Một phản ứng hóa học có biến thiên enthalpy chuẩn Δr H°298 = -393,5 kJ. Phát biểu nào sau đây đúng?',
    options: [
      { id: 'A', text: 'Phản ứng là phản ứng thu nhiệt, làm nhiệt độ môi trường xung quanh giảm xuống.' },
      { id: 'B', text: 'Phản ứng là phản ứng tỏa nhiệt, giải phóng năng lượng nhiệt ra môi trường.' },
      { id: 'C', text: 'Năng lượng của sản phẩm lớn hơn năng lượng của các chất phản ứng ban đầu.' },
      { id: 'D', text: 'Phản ứng chỉ có thể tự xảy ra khi được đun nóng liên tục.' },
    ],
    correctAnswer: 'B',
    explanation: 'Khi Δr H°298 < 0, phản ứng tỏa nhiệt ra môi trường xung quanh, làm nhiệt độ của hệ môi trường tăng lên và năng lượng của các chất đầu cao hơn năng lượng của sản phẩm.',
    reviewedByTeacher: true,
    status: 'approved',
  },

  // ==========================================
  // CÂU HỎI LỚP 11
  // ==========================================
  {
    id: 'Q11-01',
    grade: 11,
    chapterId: 'g11-c1',
    chapterTitle: 'Chương 1: Cân bằng hóa học',
    lessonTitle: 'Bài 1: Khái niệm về cân bằng hóa học',
    format: 'multiple_choice',
    cognitiveLevel: 'know',
    content: 'Khi một phản ứng thuận nghịch ở trạng thái cân bằng hóa học thì',
    options: [
      { id: 'A', text: 'phản ứng đã dừng lại hoàn toàn, không còn phân tử nào phản ứng nữa.' },
      { id: 'B', text: 'nồng độ của chất phản ứng bằng đúng nồng độ của chất sản phẩm.' },
      { id: 'C', text: 'tốc độ của phản ứng thuận bằng tốc độ của phản ứng nghịch.' },
      { id: 'D', text: 'hệ số tỉ lượng của các chất trong phương trình bằng nhau.' },
    ],
    correctAnswer: 'C',
    explanation: 'Cân bằng hóa học là một cân bằng động. Tại trạng thái cân bằng, phản ứng vẫn tiếp tục diễn ra theo cả hai chiều với tốc độ phản ứng thuận bằng tốc độ phản ứng nghịch (v_thuận = v_nghịch).',
    reviewedByTeacher: true,
    status: 'approved',
  },
  {
    id: 'Q11-02',
    grade: 11,
    chapterId: 'g11-c1',
    chapterTitle: 'Chương 1: Cân bằng hóa học',
    lessonTitle: 'Bài 1: Khái niệm về cân bằng hóa học',
    format: 'true_false',
    cognitiveLevel: 'understand',
    stimulus: 'Xét phản ứng tổng hợp ammonia trong công nghiệp: N2(g) + 3H2(g) ⇌ 2NH3(g)   Δr H°298 = -92 kJ.',
    content: 'Đánh giá tính đúng (Đ) hoặc sai (S) của các biện pháp sau nhằm làm chuyển dịch cân bằng theo chiều thuận để tăng hiệu suất tạo NH3:',
    subItems: [
      {
        id: 'a',
        text: 'Tăng áp suất chung của toàn bộ hệ phản ứng.',
        isCorrect: true,
        explanation: 'Đúng. Vế trái có 1+3=4 mol khí, vế phải có 2 mol khí. Tăng áp suất cân bằng chuyển dịch theo chiều giảm số mol khí (chiều thuận).',
      },
      {
        id: 'b',
        text: 'Tăng nhiệt độ của bình phản ứng lên rất cao (trên 1000 °C).',
        isCorrect: false,
        explanation: 'Sai. Phản ứng có ΔH = -92 kJ < 0 (tỏa nhiệt). Khi tăng nhiệt độ, cân bằng chuyển dịch theo chiều thu nhiệt (chiều nghịch làm giảm hiệu suất NH3).',
      },
      {
        id: 'c',
        text: 'Liên tục ngưng tụ và tách khí NH3 lỏng ra khỏi hỗn hợp phản ứng.',
        isCorrect: true,
        explanation: 'Đúng. Giảm nồng độ sản phẩm NH3 sẽ làm cân bằng chuyển dịch theo chiều thuận để tạo thêm NH3 bù lại.',
      },
      {
        id: 'd',
        text: 'Thêm bột sắt (Fe) làm xúc tác để làm chuyển dịch cân bằng sang chiều thuận.',
        isCorrect: false,
        explanation: 'Sai. Chất xúc tác chỉ làm tăng tốc độ đạt đến trạng thái cân bằng, hoàn toàn KHÔNG làm chuyển dịch cân bằng hóa học.',
      },
    ],
    explanation: 'Theo nguyên lý Le Chatelier, để tăng hiệu suất phản ứng tỏa nhiệt có giảm số mol khí: cần tăng áp suất, hạ nhiệt độ hợp lý và giảm nồng độ sản phẩm.',
    reviewedByTeacher: true,
    status: 'approved',
  },
  {
    id: 'Q11-03',
    grade: 11,
    chapterId: 'g11-c1',
    chapterTitle: 'Chương 1: Cân bằng hóa học',
    lessonTitle: 'Bài 2: Cân bằng trong dung dịch nước - Thuyết acid - base và pH',
    format: 'short_answer',
    cognitiveLevel: 'apply',
    content: 'Hòa tan hoàn toàn 0,04 gam NaOH rắn vào nước cất để thu được đúng 100 mL dung dịch X ở 25 °C. Tính giá trị pH của dung dịch X thu được.',
    acceptableAnswers: ['12', '12.0', '12,0'],
    numericValue: 12,
    tolerance: 0.1,
    unit: '',
    explanation: '1. n(NaOH) = 0,04 / 40 = 0,001 mol.\n2. V = 100 mL = 0,1 L => [OH-] = 0,001 / 0,1 = 0,01 M = 10^(-2) M.\n3. pOH = -log[OH-] = 2 => pH = 14 - pOH = 14 - 2 = 12.',
    calculationSteps: [
      'Bước 1: Tính số mol NaOH: n = 0,04 / 40 = 0,001 mol.',
      'Bước 2: Nồng độ ion OH-: [OH-] = 0,001 mol / 0,1 L = 0,01 M = 10^(-2) M.',
      'Bước 3: pOH = -log(10^(-2)) = 2.',
      'Bước 4: pH = 14 - 2 = 12.',
    ],
    reviewedByTeacher: true,
    status: 'approved',
  },
  {
    id: 'Q11-04',
    grade: 11,
    chapterId: 'g11-c4',
    chapterTitle: 'Chương 4: Hydrocarbon',
    lessonTitle: 'Bài 13: Hydrocarbon không no (Alkene - Alkyne)',
    format: 'multiple_choice',
    cognitiveLevel: 'understand',
    content: 'Khi cho propene (CH3-CH=CH2) tác dụng với khí hydrogen chloride (HCl), theo quy tắc Markovnikov, sản phẩm chính thu được là',
    options: [
      { id: 'A', text: '1-chloropropane' },
      { id: 'B', text: '2-chloropropane' },
      { id: 'C', text: '1,2-dichloropropane' },
      { id: 'D', text: 'propyl chloride' },
    ],
    correctAnswer: 'B',
    explanation: 'Theo quy tắc cộng Markovnikov: nguyên tử H ưu tiên cộng vào nguyên tử carbon bậc thấp hơn (nhiều H hơn, C-1), còn halogen Cl cộng vào nguyên tử carbon bậc cao hơn (ít H hơn, C-2). Sản phẩm chính là CH3-CH(Cl)-CH3 (2-chloropropane).',
    reviewedByTeacher: true,
    status: 'approved',
  },

  // ==========================================
  // CÂU HỎI LỚP 12
  // ==========================================
  {
    id: 'Q12-01',
    grade: 12,
    chapterId: 'g12-c1',
    chapterTitle: 'Chương 1: Ester - Lipid',
    lessonTitle: 'Bài 1: Ester',
    format: 'multiple_choice',
    cognitiveLevel: 'know',
    content: 'Ester có công thức cấu tạo thu gọn CH3COOC2H5 có tên gọi theo danh pháp quốc tế là',
    options: [
      { id: 'A', text: 'methyl acetate' },
      { id: 'B', text: 'ethyl formate' },
      { id: 'C', text: 'ethyl acetate' },
      { id: 'D', text: 'propyl acetate' },
    ],
    correctAnswer: 'C',
    explanation: 'CH3COOC2H5 cấu tạo từ gốc acid CH3COO- (acetate) và gốc hydrocarbon -C2H5 (ethyl). Tên ester = tên gốc hydrocarbon + tên gốc acid đuôi "ate" => ethyl acetate (hoặc ethyl ethanoate).',
    reviewedByTeacher: true,
    status: 'approved',
  },
  {
    id: 'Q12-02',
    grade: 12,
    chapterId: 'g12-c1',
    chapterTitle: 'Chương 1: Ester - Lipid',
    lessonTitle: 'Bài 2: Lipid và chất béo',
    format: 'true_false',
    cognitiveLevel: 'understand',
    stimulus: 'Chất béo (triglyceride) là nguồn cung cấp và dự trữ năng lượng quan trọng của cơ thể sinh vật, đồng thời là nguyên liệu chủ yếu trong công nghiệp sản xuất xà phòng và glycerol.',
    content: 'Cho các phát biểu sau về lipid và chất béo, xác định đúng hoặc sai cho từng phát biểu:',
    subItems: [
      {
        id: 'a',
        text: 'Chất béo là triester của glycerol với các acid béo mạch dài, không phân nhánh.',
        isCorrect: true,
        explanation: 'Đúng. Theo định nghĩa SGK GDPT 2018, chất béo là triester của glycerol với acid béo (RCOO)3C3H5.',
      },
      {
        id: 'b',
        text: 'Triolein có công thức (C17H33COO)3C3H5 là chất béo không no, ở điều kiện thường tồn tại ở trạng thái lỏng.',
        isCorrect: true,
        explanation: 'Đúng. C17H33COOH là oleic acid có 1 liên kết đôi C=C không no, nhiệt độ nóng chảy thấp nên triolein ở trạng thái lỏng (thành phần chính của dầu thực vật).',
      },
      {
        id: 'c',
        text: 'Phản ứng xà phòng hóa chất béo bằng dung dịch kiềm NaOH là phản ứng thuận nghịch hai chiều.',
        isCorrect: false,
        explanation: 'Sai. Phản ứng xà phòng hóa trong môi trường kiềm đun nóng là phản ứng MỘT CHIỀU không thuận nghịch.',
      },
      {
        id: 'd',
        text: 'Có thể chuyển hóa chất béo lỏng thành chất béo rắn bằng phản ứng hydro hóa có xúc tác niken (Ni, to).',
        isCorrect: true,
        explanation: 'Đúng. Cộng H2 vào các gốc acid không no biến chất béo lỏng thành chất béo no thể rắn (quy trình sản xuất bơ nhân tạo margarine).',
      },
    ],
    explanation: 'Chất béo gồm chất béo no (thể rắn, mỡ động vật) và chất béo không no (thể lỏng, dầu thực vật). Phản ứng thủy phân trong kiềm là phản ứng một chiều tạo muối carboxylate và glycerol.',
    reviewedByTeacher: true,
    status: 'approved',
  },
  {
    id: 'Q12-03',
    grade: 12,
    chapterId: 'g12-c1',
    chapterTitle: 'Chương 1: Ester - Lipid',
    lessonTitle: 'Bài 3: Xà phòng và chất giặt rửa tổng hợp',
    format: 'short_answer',
    cognitiveLevel: 'apply',
    content: 'Xà phòng hóa hoàn toàn 17,8 gam tristearin (C17H35COO)3C3H5 bằng một lượng vừa đủ dung dịch NaOH, đun nóng. Khối lượng glycerol (C3H5(OH)3) thu được sau phản ứng là bao nhiêu gam? (Nhập kết quả bằng số thập phân).',
    acceptableAnswers: ['1.84', '1,84'],
    numericValue: 1.84,
    tolerance: 0.05,
    unit: 'gam',
    explanation: '1. Khối lượng mol tristearin = 890 g/mol => n(tristearin) = 17,8 / 890 = 0,02 mol.\n2. Phương trình: (C17H35COO)3C3H5 + 3NaOH → 3C17H35COONa + C3H5(OH)3.\n=> n(glycerol) = n(tristearin) = 0,02 mol.\n3. Khối lượng glycerol: m = 0,02 * 92 = 1,84 gam.',
    calculationSteps: [
      'Bước 1: Tính phân tử khối tristearin: M = 890 g/mol.',
      'Bước 2: n(tristearin) = 17,8 / 890 = 0,02 mol.',
      'Bước 3: Từ phương trình phản ứng: n(glycerol) = n(tristearin) = 0,02 mol.',
      'Bước 4: m(glycerol) = 0,02 * 92 = 1,84 gam.',
    ],
    reviewedByTeacher: true,
    status: 'approved',
  },
  {
    id: 'Q12-04',
    grade: 12,
    chapterId: 'g12-c2',
    chapterTitle: 'Chương 2: Carbohydrate',
    lessonTitle: 'Bài 4: Giới thiệu về Carbohydrate - Glucose và Fructose',
    format: 'multiple_choice',
    cognitiveLevel: 'know',
    content: 'Chất nào sau đây phản ứng với dung dịch AgNO3 trong NH3 đun nóng tạo kết tủa kim loại bạc (phản ứng tráng bạc)?',
    options: [
      { id: 'A', text: 'Saccharose' },
      { id: 'B', text: 'Glucose' },
      { id: 'C', text: 'Cellulose' },
      { id: 'D', text: 'Tinh bột' },
    ],
    correctAnswer: 'B',
    explanation: 'Glucose có nhóm aldehyde (-CHO) ở dạng mạch hở nên tham gia phản ứng tráng bạc tạo 2 mol Ag. Saccharose, cellulose và tinh bột không có nhóm -CHO tự do nên không tráng bạc.',
    reviewedByTeacher: true,
    status: 'approved',
  },
  {
    id: 'Q12-05',
    grade: 12,
    chapterId: 'g12-c2',
    chapterTitle: 'Chương 2: Carbohydrate',
    lessonTitle: 'Bài 4: Giới thiệu về Carbohydrate - Glucose và Fructose',
    format: 'short_answer',
    cognitiveLevel: 'apply',
    content: 'Cho 27 gam glucose (C6H12O6) tham gia phản ứng tráng bạc hoàn toàn với lượng dư dung dịch AgNO3 trong NH3. Tính khối lượng bạc (Ag) kết tủa thu được theo đơn vị gam.',
    acceptableAnswers: ['32.4', '32,4'],
    numericValue: 32.4,
    tolerance: 0.1,
    unit: 'gam',
    explanation: '1. n(glucose) = 27 / 180 = 0,15 mol.\n2. Tỉ lệ phản ứng: 1 glucose → 2 Ag => n(Ag) = 2 * 0,15 = 0,30 mol.\n3. Khối lượng Ag: m(Ag) = 0,30 * 108 = 32,4 gam.',
    calculationSteps: [
      'Bước 1: n(glucose) = 27 / 180 = 0,15 mol.',
      'Bước 2: n(Ag) = 2 * n(glucose) = 2 * 0,15 = 0,30 mol.',
      'Bước 3: m(Ag) = 0,30 * 108 = 32,4 gam.',
    ],
    reviewedByTeacher: true,
    status: 'approved',
  },
  {
    id: 'Q12-06',
    grade: 12,
    chapterId: 'g12-c5',
    chapterTitle: 'Chương 5: Pin điện và Điện phân',
    lessonTitle: 'Bài 12: Thế điện cực chuẩn và pin điện hóa',
    format: 'true_false',
    cognitiveLevel: 'understand',
    stimulus: 'Xét pin điện hóa Daniell (Zn - Cu) hoạt động dựa trên phản ứng oxi hóa - khử: Zn(s) + Cu²⁺(aq) → Zn²⁺(aq) + Cu(s). Cho biết thế điện cực chuẩn: E°(Zn²⁺/Zn) = -0,76 V; E°(Cu²⁺/Cu) = +0,34 V.',
    content: 'Đánh giá tính đúng (Đ) hoặc sai (S) của các nhận định sau về pin Daniell:',
    subItems: [
      {
        id: 'a',
        text: 'Thanh kẽm (Zn) đóng vai trò là cực âm (anode) và xảy ra quá trình oxi hóa kẽm.',
        isCorrect: true,
        explanation: 'Đúng. E°(Zn²⁺/Zn) âm hơn E°(Cu²⁺/Cu) nên Zn là cực âm (anode), bị oxi hóa: Zn → Zn²⁺ + 2e.',
      },
      {
        id: 'b',
        text: 'Ở cathode (cực dương), ion Cu²⁺ bị khử thành kim loại Cu bám vào điện cực.',
        isCorrect: true,
        explanation: 'Đúng. Quá trình xảy ra ở cathode: Cu²⁺ + 2e → Cu.',
      },
      {
        id: 'c',
        text: 'Sức điện động chuẩn của pin Daniell có giá trị là 0,42 V.',
        isCorrect: false,
        explanation: 'Sai. E°_pin = E°_cathode - E°_anode = +0,34 - (-0,76) = 1,10 V.',
      },
      {
        id: 'd',
        text: 'Cầu muối có tác dụng duy trì sự trung hòa điện tích giữa hai dung dịch trong hai cốc điện cực.',
        isCorrect: true,
        explanation: 'Đúng. Cầu muối cho phép các ion khuếch tán để trung hòa điện tích, khép kín mạch điện.',
      },
    ],
    explanation: 'Pin Daniell Cu - Zn có sức điện động chuẩn E° = 1,10 V. Cực âm Zn xảy ra sự oxi hóa, cực dương Cu xảy ra sự khử.',
    reviewedByTeacher: true,
    status: 'approved',
  },
];
