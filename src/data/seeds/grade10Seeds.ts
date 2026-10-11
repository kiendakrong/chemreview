export const GRADE10_SEEDS: Record<string, any> = {
  // G10-C1: Cấu tạo nguyên tử
  'g10-c1': {
    mc: [
      {
        q: 'Hạt nào sau đây mang điện tích âm trong cấu tạo của nguyên tử?',
        opts: ['Proton', 'Neutron', 'Electron', 'Hạt nhân'],
        ans: 'C',
        level: 'know',
        exp: 'Electron (e) mang điện tích âm (-1 e), proton (p) mang điện tích dương (+1 e), neutron (n) không mang điện.',
      },
      {
        q: 'Khối lượng nguyên tử tập trung chủ yếu ở phần nào?',
        opts: ['Lớp vỏ electron', 'Hạt nhân nguyên tử', 'Các orbital nguyên tử', 'Phân bố đều trong toàn nguyên tử'],
        ans: 'B',
        level: 'know',
        exp: 'Khối lượng proton và neutron xấp xỉ 1 amu, trong khi electron chỉ có khối lượng xấp xỉ 0,00055 amu, do đó khối lượng tập trung ở hạt nhân.',
      },
      {
        q: 'Nguyên tử nguyên tố Sulfur (Z = 16) có số electron lớp ngoài cùng là',
        opts: ['4', '5', '6', '8'],
        ans: 'C',
        level: 'understand',
        exp: 'Cấu hình electron của S (Z=16): 1s² 2s² 2p⁶ 3s² 3p⁴. Lớp ngoài cùng (lớp n=3) có 2 + 4 = 6 electron.',
      },
      {
        q: 'Cấu hình electron của nguyên tử nguyên tố X là 1s² 2s² 2p⁶ 3s² 3p¹. Nguyên tố X là',
        opts: ['Phi kim', 'Kim loại', 'Khí hiếm', 'Kim loại kiềm thổ'],
        ans: 'B',
        level: 'understand',
        exp: 'X có 3 electron ở lớp ngoài cùng (3s² 3p¹) nên X là một kim loại (nguyên tố Aluminium - Al).',
      },
      {
        q: 'Orbital nguyên tử (AO) loại p có hình dạng nào sau đây?',
        opts: ['Hình cầu', 'Hình số 8 nổi', 'Hình tròn đồng tâm', 'Hình bầu dục'],
        ans: 'B',
        level: 'know',
        exp: 'AO s có dạng hình cầu, AO p có dạng hình số 8 nổi định hướng theo 3 trục không gian px, py, pz.',
      },
      {
        q: 'Số electron tối đa có thể chứa trong lớp electron thứ 3 (lớp M, n = 3) là',
        opts: ['8', '18', '32', '2'],
        ans: 'B',
        level: 'know',
        exp: 'Số electron tối đa trong lớp n là 2n². Với n = 3: 2 * 3² = 18 electron.',
      },
      {
        q: 'Các đồng vị của cùng một nguyên tố hóa học có đặc điểm nào giống nhau?',
        opts: ['Cùng số neutron', 'Cùng số khối A', 'Cùng số proton Z', 'Cùng khối lượng nguyên tử'],
        ans: 'C',
        level: 'know',
        exp: 'Đồng vị là những nguyên tử có cùng số đơn vị điện tích hạt nhân (cùng số proton Z) nhưng khác số neutron N.',
      },
    ],
    tf: [
      {
        stimulus: 'Nguyên tử kim loại M có tổng số hạt cơ bản (p, n, e) là 40. Trong đó số hạt mang điện nhiều hơn số hạt không mang điện là 12.',
        content: 'Xét tính đúng hoặc sai của các nhận định sau về nguyên tử M:',
        level: 'understand',
        items: [
          { text: 'Nguyên tử M có số proton bằng 13.', isCorrect: true, exp: 'Hệ phương trình: 2Z + N = 40 và 2Z - N = 12 => 4Z = 52 => Z = 13 (Al).' },
          { text: 'Số hạt neutron trong hạt nhân nguyên tử M là 14.', isCorrect: true, exp: 'N = 40 - 2*13 = 14.' },
          { text: 'Số khối A của nguyên tử M là 26.', isCorrect: false, exp: 'Số khối A = Z + N = 13 + 14 = 27 (Aluminium).' },
          { text: 'M là một phi kim điển hình vì có 3 electron lớp ngoài cùng.', isCorrect: false, exp: 'M có 3e lớp ngoài cùng (1s² 2s² 2p⁶ 3s² 3p¹) nên M là kim loại.' },
        ],
        exp: 'Giải hệ: 2Z + N = 40 và 2Z - N = 12 => Z = 13 (Al, Al có A = 27, là kim loại).',
      },
    ],
    sa: [
      {
        q: 'Trong tự nhiên, Chlorine có hai đồng vị là ³⁵Cl (chiếm 75,77%) và ³⁷Cl (chiếm 24,23%). Tính nguyên tử khối trung bình của Chlorine (làm tròn đến một chữ số thập phân).',
        ans: '35.5',
        numVal: 35.5,
        unit: 'amu',
        level: 'apply',
        exp: 'A_tb = (35 * 75,77 + 37 * 24,23) / 100 = 35,4846 ≈ 35,5 amu.',
      },
      {
        q: 'Nguyên tử X có Z = 15. Hãy cho biết số electron độc thân trong nguyên tử X ở trạng thái cơ bản.',
        ans: '3',
        numVal: 3,
        unit: 'electron',
        level: 'understand',
        exp: 'Cấu hình e: 1s² 2s² 2p⁶ 3s² 3p³. Phân lớp 3p có 3 electron chiếm 3 AO p riêng biệt theo quy tắc Hund, nên có 3 electron độc thân.',
      },
    ],
  },

  // G10-C2: Bảng tuần hoàn các nguyên tố hóa học
  'g10-c2': {
    mc: [
      {
        q: 'Các nguyên tố trong bảng tuần hoàn được sắp xếp theo thứ tự tăng dần của',
        opts: ['Nguyên tử khối', 'Điện tích hạt nhân', 'Bán kính nguyên tử', 'Số neutron'],
        ans: 'B',
        level: 'know',
        exp: 'Bảng tuần hoàn sắp xếp các nguyên tố theo chiều tăng dần của điện tích hạt nhân nguyên tử (Z).',
      },
      {
        q: 'Trong một chu kì, đi từ trái sang phải theo chiều tăng của Z, tính kim loại và tính phi kim biến đổi như thế nào?',
        opts: ['Tính kim loại tăng, tính phi kim giảm', 'Tính kim loại giảm, tính phi kim tăng', 'Cả hai tính chất đều tăng', 'Cả hai tính chất đều giảm'],
        ans: 'B',
        level: 'know',
        exp: 'Trong chu kì từ trái sang phải: điện tích hạt nhân tăng, bán kính giảm, lực hút e tăng => tính kim loại giảm, tính phi kim tăng.',
      },
      {
        q: 'Nguyên tố có cấu hình electron [Ne] 3s² 3p⁵ nằm ở chu kì và nhóm nào trong bảng tuần hoàn?',
        opts: ['Chu kì 3, nhóm VA', 'Chu kì 3, nhóm VIIA', 'Chu kì 2, nhóm VIIA', 'Chu kì 3, nhóm VIIB'],
        ans: 'B',
        level: 'understand',
        exp: 'Có 3 lớp electron => Chu kì 3. Có 7 electron hóa trị (3s² 3p⁵) và e cuối cùng điền vào p => Nhóm VIIA.',
      },
    ],
    tf: [
      {
        stimulus: 'Cho 3 nguyên tố X (Z=11, Na), Y (Z=12, Mg) và Z (Z=13, Al) đều thuộc chu kì 3 của bảng tuần hoàn.',
        content: 'Xét tính đúng hoặc sai của các mệnh đề sau:',
        level: 'understand',
        items: [
          { text: 'Thứ tự tăng dần bán kính nguyên tử là: Al < Mg < Na.', isCorrect: true, exp: 'Trong 1 chu kì từ trái qua phải bán kính giảm: R(Al) < R(Mg) < R(Na).' },
          { text: 'Tính kim loại của Al mạnh hơn Mg và Na.', isCorrect: false, exp: 'Tính kim loại giảm dần từ trái sang phải: Na > Mg > Al.' },
          { text: 'Hydroxide tương ứng của X là NaOH có tính base mạnh nhất trong 3 chất.', isCorrect: true, exp: 'NaOH là base kiềm mạnh, Mg(OH)2 là base yếu, Al(OH)3 là hydroxide lưỡng tính.' },
          { text: 'Al(OH)3 là một oxide base tan tốt trong nước.', isCorrect: false, exp: 'Al(OH)3 là hydroxide lưỡng tính, không tan trong nước.' },
        ],
        exp: 'Na, Mg, Al cùng chu kì 3. Bán kính giảm, độ âm điện tăng, tính kim loại giảm từ Na đến Al.',
      },
    ],
    sa: [
      {
        q: 'Một nguyên tố R thuộc nhóm VIA. Trong hợp chất oxide cao nhất, R chiếm 40% về khối lượng. Xác định nguyên tử khối của R.',
        ans: '32',
        numVal: 32,
        unit: 'amu',
        level: 'apply',
        exp: 'R nhóm VIA => Oxide cao nhất là RO3. %R = R / (R + 48) = 0,40 => R = 32 (Sulfur - S).',
      },
    ],
  },

  // G10-C3: Liên kết hóa học
  'g10-c3': {
    mc: [
      {
        q: 'Liên kết ion được hình thành bởi lực hút tĩnh điện giữa',
        opts: ['Các nguyên tử phi kim', 'Cation kim loại và anion phi kim', 'Các hạt proton và electron', 'Hai nguyên tử kim loại'],
        ans: 'B',
        level: 'know',
        exp: 'Liên kết ion là lực hút tĩnh điện giữa các ion mang điện tích trái dấu (cation và anion).',
      },
      {
        q: 'Phân tử nào sau đây chỉ chứa liên kết cộng hóa trị không phân cực?',
        opts: ['HCl', 'H2O', 'N2', 'NH3'],
        ans: 'C',
        level: 'understand',
        exp: 'N2 gồm 2 nguyên tử Nitrogen giống nhau nên hiệu độ âm điện Δχ = 0 => liên kết CHT không cực.',
      },
    ],
    tf: [
      {
        stimulus: 'Xét các chất: NaCl, HCl, H2O, CH4.',
        content: 'Đánh giá tính đúng (Đ) hoặc sai (S) của các nhận định sau:',
        level: 'understand',
        items: [
          { text: 'NaCl là hợp chất ion có nhiệt độ nóng chảy rất cao.', isCorrect: true, exp: 'Mạng tinh thể ion của NaCl rất bền vững nên nhiệt độ nóng chảy cao (801 °C).' },
          { text: 'HCl là hợp chất chứa liên kết cộng hóa trị phân cực.', isCorrect: true, exp: 'Độ âm điện Cl (3,16) > H (2,20) nên cặp electron lệch về phía Cl.' },
          { text: 'CH4 có khả năng tạo liên kết hydrogen liên phân tử mạnh với nước.', isCorrect: false, exp: 'CH4 không phân cực và không có nguyên tử F, O, N liên kết với H nên không tạo liên kết hydrogen.' },
          { text: 'Nước lỏng có nhiệt độ sôi cao chủ yếu nhờ mạng lưới liên kết hydrogen liên phân tử.', isCorrect: true, exp: 'Liên kết hydrogen làm tăng nhiệt độ sôi của H2O lên 100 °C.' },
        ],
        exp: 'Liên kết ion bền nhiệt; liên kết hydrogen ảnh hưởng lớn đến nhiệt độ sôi.',
      },
    ],
    sa: [
      {
        q: 'Trong phân tử Nitrogen (N2), giữa hai nguyên tử N có bao nhiêu liên kết cộng hóa trị (số liên kết chung)?',
        ans: '3',
        numVal: 3,
        unit: 'liên kết',
        level: 'know',
        exp: 'Mỗi nguyên tử N có 5e lớp ngoài cùng, góp chung 3 đôi electron để đạt octet => tạo 1 liên kết ba (N≡N) gồm 1 liên kết σ và 2 liên kết π.',
      },
    ],
  },

  // G10-C4: Phản ứng oxi hóa - khử
  'g10-c4': {
    mc: [
      {
        q: 'Trong phản ứng oxi hóa - khử, chất khử là chất',
        opts: ['Nhận electron, số oxi hóa giảm', 'Nhường electron, số oxi hóa tăng', 'Nhận proton H+', 'Nhường proton H+'],
        ans: 'B',
        level: 'know',
        exp: 'Chất khử (chất bị oxi hóa) là chất nhường electron, làm tăng số oxi hóa.',
      },
      {
        q: 'Số oxi hóa của nguyên tố Manganese (Mn) trong hợp chất KMnO4 là',
        opts: ['+2', '+4', '+6', '+7'],
        ans: 'D',
        level: 'know',
        exp: '(+1) + x + 4*(-2) = 0 => x = +7.',
      },
    ],
    tf: [
      {
        stimulus: 'Cho phản ứng: 3Cu + 8HNO3 → 3Cu(NO3)2 + 2NO↑ + 4H2O.',
        content: 'Xét tính đúng hoặc sai của các phát biểu sau:',
        level: 'understand',
        items: [
          { text: 'Cu là chất khử và bị oxi hóa thành Cu²⁺.', isCorrect: true, exp: 'Cu nhường 2e: Cu → Cu²⁺ + 2e.' },
          { text: 'HNO3 vừa là chất oxi hóa vừa là môi trường tạo muối.', isCorrect: true, exp: 'Có 2 mol HNO3 bị khử thành NO, 6 mol HNO3 tạo muối nitrate.' },
          { text: 'Tỉ lệ giữa số phân tử HNO3 bị khử và số phân tử HNO3 tham gia phản ứng là 1 : 4.', isCorrect: true, exp: 'Số phân tử bị khử = 2, tổng tham gia = 8 => tỉ lệ 2/8 = 1/4.' },
          { text: 'NO là chất khử trong phản ứng trên.', isCorrect: false, exp: 'NO là sản phẩm khử của N(+5).' },
        ],
        exp: 'Phản ứng kim loại tác dụng với acid có tính oxi hóa mạnh.',
      },
    ],
    sa: [
      {
        q: 'Cân bằng phản ứng: a Fe + b HNO3 → c Fe(NO3)3 + d NO + e H2O. Hãy tính tổng các hệ số tối giản (a + b + c + d + e).',
        ans: '9',
        numVal: 9,
        unit: '',
        level: 'apply',
        exp: 'Fe + 4HNO3 → Fe(NO3)3 + NO + 2H2O. Tổng hệ số: 1 + 4 + 1 + 1 + 2 = 9.',
      },
    ],
  },

  // G10-C5: Năng lượng hóa học
  'g10-c5': {
    mc: [
      {
        q: 'Phản ứng tỏa nhiệt là phản ứng có biến thiên enthalpy chuẩn',
        opts: ['Δr H°298 > 0', 'Δr H°298 < 0', 'Δr H°298 = 0', 'Δr H°298 không xác định'],
        ans: 'B',
        level: 'know',
        exp: 'Phản ứng tỏa nhiệt giải phóng năng lượng ra môi trường => Δr H°298 < 0.',
      },
    ],
    tf: [
      {
        stimulus: 'Cho phản ứng nhiệt phân đá vôi: CaCO3(s) → CaO(s) + CO2(g) có Δr H°298 = +178,5 kJ.',
        content: 'Đánh giá các phát biểu sau:',
        level: 'understand',
        items: [
          { text: 'Đây là phản ứng thu nhiệt vì Δr H°298 > 0.', isCorrect: true, exp: 'ΔH > 0 là phản ứng thu nhiệt.' },
          { text: 'Phản ứng tự xảy ra ở nhiệt độ phòng mà không cần cung cấp nhiệt.', isCorrect: false, exp: 'Cần nung nóng ở nhiệt độ cao (trên 900 °C) để phản ứng xảy ra.' },
          { text: 'Năng lượng của sản phẩm (CaO + CO2) lớn hơn năng lượng của chất đầu (CaCO3).', isCorrect: true, exp: 'Phản ứng thu nhiệt làm tăng enthalpy của hệ sản phẩm.' },
          { text: 'Nhiệt lượng tỏa ra khi nhiệt phân 1 mol CaCO3 là 178,5 kJ.', isCorrect: false, exp: 'Phản ứng hấp thu 178,5 kJ chứ không phải tỏa ra.' },
        ],
        exp: 'Phản ứng nung vôi là phản ứng thu nhiệt điển hình.',
      },
    ],
    sa: [
      {
        q: 'Cho phản ứng: 2H2(g) + O2(g) → 2H2O(l). Biết Δf H°298 của H2O(l) là -285,8 kJ/mol. Tính Δr H°298 của phản ứng theo đơn vị kJ.',
        ans: '-571.6',
        numVal: -571.6,
        unit: 'kJ',
        level: 'apply',
        exp: 'Δr H°298 = 2 * (-285,8) - (2*0 + 1*0) = -571,6 kJ.',
      },
    ],
  },

  // G10-C6: Tốc độ phản ứng
  'g10-c6': {
    mc: [
      {
        q: 'Yếu tố nào sau đây KHÔNG làm tăng tốc độ phản ứng hóa học?',
        opts: ['Tăng nồng độ chất phản ứng', 'Nghiền nhỏ chất rắn làm tăng diện tích tiếp xúc', 'Hạ nhiệt độ của hệ phản ứng', 'Dùng chất xúc tác thích hợp'],
        ans: 'C',
        level: 'know',
        exp: 'Hạ nhiệt độ làm giảm động năng phân tử, giảm số va chạm hiệu quả => làm giảm tốc độ phản ứng.',
      },
    ],
    tf: [
      {
        stimulus: 'Xét phản ứng: Zn(s) + 2HCl(aq) → ZnCl2(aq) + H2(g).',
        content: 'Xác định đúng hoặc sai của các biện pháp nhằm tăng tốc độ thoát khí H2:',
        level: 'understand',
        items: [
          { text: 'Thay viên kẽm bằng bột kẽm có cùng khối lượng.', isCorrect: true, exp: 'Bột kẽm có diện tích tiếp xúc lớn hơn nhiều so với viên kẽm.' },
          { text: 'Tăng nồng độ dung dịch HCl từ 1M lên 2M.', isCorrect: true, exp: 'Tăng nồng độ chất phản ứng làm tăng số va chạm hiệu quả.' },
          { text: 'Đun nóng nhẹ dung dịch phản ứng.', isCorrect: true, exp: 'Tăng nhiệt độ làm tăng tốc độ phản ứng.' },
          { text: 'Thêm nước cất vào dung dịch phản ứng.', isCorrect: false, exp: 'Thêm nước làm loãng acid, giảm nồng độ HCl => giảm tốc độ phản ứng.' },
        ],
        exp: 'Các yếu tố ảnh hưởng tốc độ: nồng độ, diện tích tiếp xúc, nhiệt độ.',
      },
    ],
    sa: [
      {
        q: 'Một phản ứng có hệ số nhiệt độ Van\'t Hoff γ = 2. Khi tăng nhiệt độ từ 30 °C lên 60 °C, tốc độ phản ứng tăng lên bao nhiêu lần?',
        ans: '8',
        numVal: 8,
        unit: 'lần',
        level: 'apply',
        exp: 'v2 / v1 = γ^((60 - 30)/10) = 2³ = 8 lần.',
      },
    ],
  },

  // G10-C7: Nguyên tố nhóm Halogen
  'g10-c7': {
    mc: [
      {
        q: 'Đơn chất halogen nào sau đây có tính oxi hóa mạnh nhất?',
        opts: ['Iodine (I2)', 'Bromine (Br2)', 'Chlorine (Cl2)', 'Fluorine (F2)'],
        ans: 'D',
        level: 'know',
        exp: 'Tính oxi hóa giảm dần theo thứ tự: F2 > Cl2 > Br2 > I2.',
      },
      {
        q: 'Để nhận biết ion Chloride (Cl-) trong dung dịch muối, người ta dùng thuốc thử',
        opts: ['Dung dịch BaCl2', 'Dung dịch AgNO3', 'Dung dịch NaOH', 'Quỳ tím'],
        ans: 'B',
        level: 'know',
        exp: 'AgNO3 + NaCl → AgCl↓ (kết tủa trắng) + NaNO3.',
      },
    ],
    tf: [
      {
        stimulus: 'Khí chlorine (Cl2) được ứng dụng rộng rãi trong xử lý nước sinh hoạt và sản xuất chất tẩy rửa.',
        content: 'Đánh giá tính đúng (Đ) hoặc sai (S) của các nhận định sau:',
        level: 'understand',
        items: [
          { text: 'Chlorine ẩm có tính tẩy màu do tạo ra hypoclorơ acid (HClO) có tính oxi hóa mạnh.', isCorrect: true, exp: 'Cl2 + H2O ⇌ HCl + HClO. HClO phân hủy sinh ra oxi nguyên tử tẩy màu.' },
          { text: 'Nước Javel là dung dịch hỗn hợp gồm NaCl và NaClO.', isCorrect: true, exp: 'Cl2 + 2NaOH → NaCl + NaClO + H2O.' },
          { text: 'Chlorine đẩy được fluorine ra khỏi dung dịch NaF.', isCorrect: false, exp: 'Tính oxi hóa Cl2 < F2 nên Cl2 không thể đẩy được F-.' },
          { text: 'Acid HF ăn mòn được thủy tinh (SiO2) nên không được đựng trong bình thủy tinh.', isCorrect: true, exp: 'SiO2 + 4HF → SiF4 + 2H2O.' },
        ],
        exp: 'Tính chất của Chlorine và acid HF.',
      },
    ],
    sa: [
      {
        q: 'Cho 0,1 mol khí Cl2 tác dụng hoàn toàn với lượng dư dung dịch NaBr. Khối lượng Br2 giải phóng là bao nhiêu gam? (Br = 80).',
        ans: '16',
        numVal: 16,
        unit: 'gam',
        level: 'apply',
        exp: 'Cl2 + 2NaBr → 2NaCl + Br2. n(Br2) = n(Cl2) = 0,1 mol => m(Br2) = 0,1 * 160 = 16 gam.',
      },
    ],
  },
};
