export const GRADE11_SEEDS: Record<string, any> = {
  // G11-C1: Cân bằng hóa học
  'g11-c1': {
    mc: [
      {
        q: 'Khi phản ứng thuận nghịch đạt trạng thái cân bằng hóa học thì',
        opts: ['Phản ứng dừng lại hoàn toàn', 'Tốc độ phản ứng thuận bằng tốc độ phản ứng nghịch', 'Nồng độ chất đầu bằng nồng độ sản phẩm', 'Khối lượng hai vế bằng nhau'],
        ans: 'B',
        level: 'know',
        exp: 'Cân bằng hóa học là cân bằng động, tại đó v_thuận = v_nghịch > 0.',
      },
      {
        q: 'Theo thuyết Brønsted - Lowry, acid là chất có khả năng',
        opts: ['Cho proton H+', 'Nhận proton H+', 'Nhận electron', 'Tạo ra ion OH- trong nước'],
        ans: 'A',
        level: 'know',
        exp: 'Acid là chất cho proton (H+), base là chất nhận proton (H+).',
      },
      {
        q: 'Dung dịch có pH = 11 ở 25 °C có môi trường gì?',
        opts: ['Môi trường acid', 'Môi trường base', 'Môi trường trung tính', 'Môi trường đệm'],
        ans: 'B',
        level: 'know',
        exp: 'pH > 7 là môi trường base.',
      },
    ],
    tf: [
      {
        stimulus: 'Xét phản ứng tổng hợp ammonia: N2(g) + 3H2(g) ⇌ 2NH3(g)  Δr H°298 = -92 kJ.',
        content: 'Đánh giá các biện pháp làm chuyển dịch cân bằng theo chiều thuận:',
        level: 'understand',
        items: [
          { text: 'Tăng áp suất chung của hệ phản ứng.', isCorrect: true, exp: 'Vế trái 4 mol khí, vế phải 2 mol khí. Tăng p cân bằng chuyển dịch theo chiều giảm số mol khí (chiều thuận).' },
          { text: 'Tăng nhiệt độ của bình phản ứng lên rất cao.', isCorrect: false, exp: 'ΔH < 0 (tỏa nhiệt). Tăng to làm cân bằng chuyển dịch theo chiều nghịch.' },
          { text: 'Liên tục ngưng tụ và tách NH3 ra khỏi hỗn hợp.', isCorrect: true, exp: 'Giảm nồng độ sản phẩm làm cân bằng dịch chuyển sang chiều thuận.' },
          { text: 'Thêm bột sắt làm xúc tác để tăng hiệu suất tạo NH3.', isCorrect: false, exp: 'Chất xúc tác KHÔNG làm chuyển dịch cân bằng.' },
        ],
        exp: 'Nguyên lý Le Chatelier cho phản ứng Haber - Bosch.',
      },
    ],
    sa: [
      {
        q: 'Tính pH của dung dịch Ba(OH)2 có nồng độ 0,005 M ở 25 °C (giả thiết phân li hoàn toàn).',
        ans: '12',
        numVal: 12,
        unit: '',
        level: 'apply',
        exp: '[OH-] = 2 * 0,005 = 0,01 M = 10⁻² M => pOH = 2 => pH = 14 - 2 = 12.',
      },
    ],
  },

  // G11-C2: Nitrogen và Sulfur
  'g11-c2': {
    mc: [
      {
        q: 'Ở nhiệt độ thường, đơn chất nitrogen (N2) khá trơ về mặt hóa học là do',
        opts: ['Phân tử không phân cực', 'Chứa liên kết ba N≡N với năng lượng liên kết rất lớn', 'Nguyên tử N có độ âm điện nhỏ', 'Bán kính nguyên tử N lớn'],
        ans: 'B',
        level: 'know',
        exp: 'Liên kết ba N≡N có năng lượng liên kết rất lớn (945 kJ/mol) nên phân tử N2 rất bền ở nhiệt độ thường.',
      },
      {
        q: 'Kim loại nào sau đây bị thụ động hóa trong dung dịch HNO3 đặc nguội và H2SO4 đặc nguội?',
        opts: ['Cu, Ag', 'Fe, Al, Cr', 'Mg, Zn', 'Na, K'],
        ans: 'B',
        level: 'know',
        exp: 'Fe, Al, Cr bị thụ động hóa trong HNO3 đặc nguội và H2SO4 đặc nguội do tạo màng oxide bảo vệ.',
      },
    ],
    tf: [
      {
        stimulus: 'Sulfur dioxide (SO2) là một khí gây ô nhiễm môi trường, phát thải từ quá trình đốt than và quặng sulfide.',
        content: 'Xét tính đúng hoặc sai của các nhận định sau về SO2:',
        level: 'understand',
        items: [
          { text: 'SO2 là oxide acid, tan trong nước tạo dung dịch sulfurous acid (H2SO3).', isCorrect: true, exp: 'SO2 + H2O ⇌ H2SO3.' },
          { text: 'SO2 làm mất màu nâu đỏ của dung dịch nước bromine.', isCorrect: true, exp: 'SO2 + Br2 + 2H2O → 2HBr + H2SO4.' },
          { text: 'SO2 chỉ có tính khử, không bao giờ thể hiện tính oxi hóa.', isCorrect: false, exp: 'SO2 có số oxh +4 trung gian, có thể giảm xuống 0 (thể hiện tính oxi hóa, ví dụ tác dụng với H2S).' },
          { text: 'SO2 là một trong những tác nhân chính gây ra hiện tượng mưa acid.', isCorrect: true, exp: 'SO2 bị oxi hóa thành SO3 rồi tan trong nước mưa tạo H2SO4 gây mưa acid.' },
        ],
        exp: 'Tính chất và tác động môi trường của SO2.',
      },
    ],
    sa: [
      {
        q: 'Cho 6,4 gam Cu tác dụng hoàn toàn với dung dịch H2SO4 đặc, nóng dư. Thể tích khí SO2 (đkc, 1 bar và 25 °C tính theo hệ số 24,79 L/mol) thoát ra là bao nhiêu lít? (Làm tròn 2 chữ số thập phân).',
        ans: '2.48',
        numVal: 2.48,
        unit: 'lít',
        level: 'apply',
        exp: 'n(Cu) = 6,4 / 64 = 0,1 mol. Cu + 2H2SO4 → CuSO4 + SO2 + 2H2O. n(SO2) = 0,1 mol => V = 0,1 * 24,79 = 2,479 ≈ 2,48 lít.',
      },
    ],
  },

  // G11-C3: Đại cương về hóa học hữu cơ
  'g11-c3': {
    mc: [
      {
        q: 'Phương pháp nào sau đây dùng để tách các chất lỏng có nhiệt độ sôi khác nhau đáng kể?',
        opts: ['Phương pháp chiết', 'Phương pháp kết tinh', 'Phương pháp chưng cất', 'Phương pháp sắc kí cột'],
        ans: 'C',
        level: 'know',
        exp: 'Chưng cất dựa vào sự khác nhau về nhiệt độ sôi của các chất trong hỗn hợp lỏng.',
      },
      {
        q: 'Chất nào sau đây là đồng đẳng của methane (CH4)?',
        opts: ['Ethylene (C2H4)', 'Propane (C3H8)', 'Acetylene (C2H2)', 'Benzene (C6H6)'],
        ans: 'B',
        level: 'understand',
        exp: 'Propane C3H8 cùng dãy đồng đẳng alkane CnH2n+2.',
      },
    ],
    tf: [
      {
        stimulus: 'Phổ hồng ngoại (IR) và phổ khối lượng (MS) là hai công cụ phổ nghiệm hiện đại để xác định cấu trúc chất hữu cơ.',
        content: 'Đánh giá các phát biểu sau:',
        level: 'understand',
        items: [
          { text: 'Tín hiệu peak ion phân tử [M+] trên phổ MS cho biết phân tử khối của hợp chất.', isCorrect: true, exp: 'Giá trị m/z của peak ion phân tử cho biết phân tử khối M.' },
          { text: 'Phổ IR dùng để xác định các nhóm chức có trong phân tử.', isCorrect: true, exp: 'Số sóng hấp thụ đặc trưng của từng liên kết/nhóm chức (như O-H, C=O).' },
          { text: 'Các chất là đồng phân của nhau thì có cùng công thức phân tử.', isCorrect: true, exp: 'Đồng phân là những chất có cùng CTPT nhưng khác nhau về công thức cấu tạo.' },
          { text: 'Đồng đẳng là những chất có công thức phân tử giống hệt nhau.', isCorrect: false, exp: 'Đồng đẳng hơn kém nhau một hay nhiều nhóm CH2, CTPT phải khác nhau.' },
        ],
        exp: 'Ứng dụng phổ MS, IR và khái niệm đồng đẳng, đồng phân.',
      },
    ],
    sa: [
      {
        q: 'Đốt cháy hoàn toàn một hydrocarbon X thu được 0,2 mol CO2 và 0,3 mol H2O. Hãy tính số nguyên tử Carbon trong phân tử X.',
        ans: '2',
        numVal: 2,
        unit: 'nguyên tử',
        level: 'apply',
        exp: 'nH2O > nCO2 => X là alkane CnH2n+2. nX = nH2O - nCO2 = 0,3 - 0,2 = 0,1 mol. Số C = nCO2 / nX = 0,2 / 0,1 = 2 (Ethane C2H6).',
      },
    ],
  },

  // G11-C4: Hydrocarbon
  'g11-c4': {
    mc: [
      {
        q: 'Hydrocarbon nào sau đây làm mất màu dung dịch nước bromine ở nhiệt độ thường?',
        opts: ['Methane (CH4)', 'Ethane (C2H6)', 'Ethylene (C2H4)', 'Propane (C3H8)'],
        ans: 'C',
        level: 'know',
        exp: 'Ethylene có liên kết đôi C=C kém bền nên phản ứng cộng làm mất màu nước bromine.',
      },
      {
        q: 'Chất nào sau đây tác dụng với dung dịch AgNO3 trong NH3 tạo kết tủa màu vàng nhạt?',
        opts: ['Ethane', 'Ethylene', 'Acetylene (Ethyne)', 'But-2-yne'],
        ans: 'C',
        level: 'understand',
        exp: 'Acetylene (CH≡CH) có nguyên tử H linh động gắn vào liên kết ba đầu mạch nên tham gia phản ứng thế ion Ag+.',
      },
    ],
    tf: [
      {
        stimulus: 'Cho phản ứng cộng HCl vào propene: CH3-CH=CH2 + HCl.',
        content: 'Đánh giá tính đúng hoặc sai theo quy tắc Markovnikov:',
        level: 'understand',
        items: [
          { text: 'Sản phẩm chính của phản ứng là 2-chloropropane (CH3-CH(Cl)-CH3).', isCorrect: true, exp: 'H+ cộng vào C-1 (nhiều H hơn), Cl- cộng vào C-2 (ít H hơn).' },
          { text: 'Sản phẩm phụ của phản ứng là 1-chloropropane.', isCorrect: true, exp: 'Sản phẩm phụ là CH3-CH2-CH2Cl.' },
          { text: 'Phản ứng trên thuộc loại phản ứng thế gốc tự do.', isCorrect: false, exp: 'Đây là phản ứng cộng electrophile (AE) vào liên kết đôi.' },
          { text: 'Propene có đồng phân hình học cis - trans.', isCorrect: false, exp: 'Propene có nguyên tử C-1 liên kết với 2 nguyên tử H giống nhau nên không có đồng phân hình học.' },
        ],
        exp: 'Quy tắc cộng Markovnikov và đồng phân hình học.',
      },
    ],
    sa: [
      {
        q: 'Dẫn 2,479 lít khí ethylene (đkc, 0,1 mol) vào dung dịch Br2 dư. Khối lượng bromine đã tham gia phản ứng là bao nhiêu gam? (Br = 80).',
        ans: '16',
        numVal: 16,
        unit: 'gam',
        level: 'apply',
        exp: 'C2H4 + Br2 → C2H4Br2. n(Br2) = n(C2H4) = 0,1 mol => m(Br2) = 0,1 * 160 = 16 gam.',
      },
    ],
  },

  // G11-C5: Dẫn xuất halogen - Alcohol - Phenol
  'g11-c5': {
    mc: [
      {
        q: 'Chất nào sau đây hòa tan được Cu(OH)2 ở nhiệt độ phòng tạo dung dịch màu xanh lam đậm?',
        opts: ['Ethanol (C2H5OH)', 'Glycerol (C3H5(OH)3)', 'Phenol (C6H5OH)', 'Dimethyl ether'],
        ans: 'B',
        level: 'know',
        exp: 'Glycerol có 3 nhóm -OH kề nhau nên hòa tan được Cu(OH)2 tạo phức màu xanh lam thẫm.',
      },
      {
        q: 'Phenol (C6H5OH) phản ứng được với chất nào sau đây?',
        opts: ['Dung dịch HCl', 'Dung dịch NaOH', 'Dung dịch NaHCO3', 'Khí CO2 trong nước'],
        ans: 'B',
        level: 'understand',
        exp: 'Phenol có tính acid yếu, phản ứng được với base mạnh NaOH tạo sodium phenolate: C6H5OH + NaOH → C6H5ONa + H2O.',
      },
    ],
    tf: [
      {
        stimulus: 'Cho các hợp chất hữu cơ: (1) C2H5OH, (2) C6H5OH, (3) C3H5(OH)3.',
        content: 'Đánh giá các phát biểu sau:',
        level: 'understand',
        items: [
          { text: 'Cả 3 chất đều tác dụng được với kim loại Na giải phóng khí H2.', isCorrect: true, exp: 'Đều có nguyên tử H linh động trong nhóm -OH.' },
          { text: 'Dung dịch phenol làm quỳ tím hóa đỏ rõ rệt do tính acid.', isCorrect: false, exp: 'Tính acid của phenol rất yếu, không làm đổi màu quỳ tím.' },
          { text: 'Phenol tác dụng với nước bromine tạo kết tủa trắng 2,4,6-tribromophenol.', isCorrect: true, exp: 'Phản ứng thế nguyên tử H ở các vị trí ortho và para.' },
          { text: 'Ethanol bị oxi hóa bởi CuO nung nóng tạo ra acetic acid.', isCorrect: false, exp: 'Oxi hóa alcohol bậc 1 bởi CuO tạo aldehyde (CH3CHO), không phải acid.' },
        ],
        exp: 'So sánh tính chất của Alcohol và Phenol.',
      },
    ],
    sa: [
      {
        q: 'Cho 4,6 gam ethanol tác dụng với Na dư. Thể tích khí H2 thu được ở điều kiện chuẩn (đkc, hệ số 24,79 L/mol) là bao nhiêu lít? (Làm tròn 2 chữ số thập phân).',
        ans: '1.24',
        numVal: 1.24,
        unit: 'lít',
        level: 'apply',
        exp: 'n(C2H5OH) = 4,6 / 46 = 0,1 mol. C2H5OH + Na → C2H5ONa + 1/2 H2. n(H2) = 0,05 mol => V = 0,05 * 24,79 = 1,2395 ≈ 1,24 lít.',
      },
    ],
  },

  // G11-C6: Hợp chất carbonyl và carboxylic acid
  'g11-c6': {
    mc: [
      {
        q: 'Hợp chất nào sau đây tham gia phản ứng tráng bạc với dung dịch AgNO3 trong NH3?',
        opts: ['Acetone (CH3COCH3)', 'Acetaldehyde (CH3CHO)', 'Acetic acid (CH3COOH)', 'Ethanol (C2H5OH)'],
        ans: 'B',
        level: 'know',
        exp: 'Aldehyde có nhóm -CHO nên tham gia phản ứng tráng bạc.',
      },
      {
        q: 'Dung dịch acetic acid (CH3COOH) làm quỳ tím chuyển sang màu gì?',
        opts: ['Màu xanh', 'Màu đỏ (hồng)', 'Màu tím', 'Mất màu'],
        ans: 'B',
        level: 'know',
        exp: 'Carboxylic acid làm đỏ giấy quỳ tím do phân li sinh ra H+.',
      },
    ],
    tf: [
      {
        stimulus: 'Xét phản ứng ester hóa: CH3COOH + C2H5OH ⇌ CH3COOC2H5 + H2O (xúc tác H2SO4 đặc, đun nóng).',
        content: 'Đánh giá các nhận định sau về phản ứng trên:',
        level: 'understand',
        items: [
          { text: 'Phản ứng ester hóa là phản ứng thuận nghịch hai chiều.', isCorrect: true, exp: 'Phản ứng không xảy ra hoàn toàn.' },
          { text: 'H2SO4 đặc vừa đóng vai trò chất xúc tác, vừa hút nước để chuyển dịch cân bằng sang chiều thuận.', isCorrect: true, exp: 'Tăng hiệu suất tạo ester.' },
          { text: 'Sản phẩm ethyl acetate có mùi thơm hoa quả và nhẹ hơn nước.', isCorrect: true, exp: 'Tính chất vật lí đặc trưng của ester.' },
          { text: 'Để tăng hiệu suất ester hóa, ta nên thêm nước vào hỗn hợp phản ứng.', isCorrect: false, exp: 'Thêm nước làm cân bằng chuyển dịch theo chiều nghịch (thủy phân).' },
        ],
        exp: 'Đặc điểm của phản ứng ester hóa.',
      },
    ],
    sa: [
      {
        q: 'Cho 6,0 gam acetic acid (CH3COOH) tác dụng hoàn toàn với lượng dư dung dịch NaHCO3. Khối lượng CO2 sinh ra là bao nhiêu gam?',
        ans: '4.4',
        numVal: 4.4,
        unit: 'gam',
        level: 'apply',
        exp: 'n(CH3COOH) = 6,0 / 60 = 0,1 mol. CH3COOH + NaHCO3 → CH3COONa + CO2 + H2O. n(CO2) = 0,1 mol => m(CO2) = 0,1 * 44 = 4,4 gam.',
      },
    ],
  },
};
