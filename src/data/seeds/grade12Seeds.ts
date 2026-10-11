export const GRADE12_SEEDS: Record<string, any> = {
  // G12-C1: Ester - Lipid
  'g12-c1': {
    mc: [
      {
        q: 'Ester CH3COOC2H5 có tên gọi theo danh pháp quốc tế là',
        opts: ['Methyl acetate', 'Ethyl formate', 'Ethyl acetate', 'Propyl acetate'],
        ans: 'C',
        level: 'know',
        exp: 'CH3COOC2H5 là ethyl acetate (hoặc ethyl ethanoate).',
      },
      {
        q: 'Chất béo nào sau đây ở thể lỏng ở điều kiện thường (thành phần chính của dầu thực vật)?',
        opts: ['Tristearin', 'Tripalmitin', 'Triolein', 'Bơ động vật'],
        ans: 'C',
        level: 'know',
        exp: 'Triolein (C17H33COO)3C3H5 là chất béo không no có liên kết đôi cis nên ở thể lỏng.',
      },
      {
        q: 'Phản ứng thủy phân ester trong môi trường kiềm (đun nóng) còn được gọi là',
        opts: ['Phản ứng trùng ngưng', 'Phản ứng xà phòng hóa', 'Phản ứng ester hóa', 'Phản ứng lên men'],
        ans: 'B',
        level: 'know',
        exp: 'Thủy phân ester trong kiềm là phản ứng một chiều tạo muối xà phòng và alcohol.',
      },
    ],
    tf: [
      {
        stimulus: 'Xà phòng hóa hoàn toàn tristearin (C17H35COO)3C3H5 bằng dung dịch NaOH đun nóng.',
        content: 'Đánh giá các phát biểu sau:',
        level: 'understand',
        items: [
          { text: 'Sản phẩm thu được gồm sodium stearate và glycerol.', isCorrect: true, exp: '(C17H35COO)3C3H5 + 3NaOH → 3C17H35COONa + C3H5(OH)3.' },
          { text: 'Tỉ lệ mol giữa tristearin và NaOH phản ứng là 1 : 3.', isCorrect: true, exp: 'Chất béo là triester của glycerol nên cần 3 mol NaOH.' },
          { text: 'Phản ứng trên là phản ứng thuận nghịch hai chiều.', isCorrect: false, exp: 'Phản ứng xà phòng hóa là phản ứng một chiều.' },
          { text: 'Có thể chuyển hóa dầu thực vật thành bơ nhân tạo bằng phản ứng hydro hóa (Ni, to).', isCorrect: true, exp: 'Cộng H2 vào gốc không no tạo chất béo no rắn.' },
        ],
        exp: 'Đặc điểm phản ứng xà phòng hóa chất béo.',
      },
    ],
    sa: [
      {
        q: 'Xà phòng hóa hoàn toàn 8,9 gam tristearin bằng lượng dư dung dịch NaOH. Khối lượng glycerol thu được là bao nhiêu gam?',
        ans: '0.92',
        numVal: 0.92,
        unit: 'gam',
        level: 'apply',
        exp: 'M(tristearin) = 890. n = 8,9 / 890 = 0,01 mol => n(glycerol) = 0,01 mol => m = 0,01 * 92 = 0,92 gam.',
      },
    ],
  },

  // G12-C2: Carbohydrate
  'g12-c2': {
    mc: [
      {
        q: 'Carbohydrate nào sau đây thuộc loại monosaccharide?',
        opts: ['Saccharose', 'Maltose', 'Glucose', 'Tinh bột'],
        ans: 'C',
        level: 'know',
        exp: 'Glucose và fructose là monosaccharide; saccharose, maltose là disaccharide; tinh bột, cellulose là polysaccharide.',
      },
      {
        q: 'Để nhận biết tinh bột, người ta dùng thuốc thử nào sau đây?',
        opts: ['Dung dịch AgNO3/NH3', 'Dung dịch iodine (I2)', 'Cu(OH)2', 'Nước bromine'],
        ans: 'B',
        level: 'know',
        exp: 'Iodine tác dụng với tinh bột tạo hợp chất màu xanh tím đặc trưng.',
      },
    ],
    tf: [
      {
        stimulus: 'Glucose và fructose là hai loại đường phổ biến trong tự nhiên.',
        content: 'Đánh giá các nhận định sau:',
        level: 'understand',
        items: [
          { text: 'Glucose và fructose là đồng phân cấu tạo của nhau, cùng có CTPT C6H12O6.', isCorrect: true, exp: 'Glucose là aldohexose, fructose là ketohexose.' },
          { text: 'Cả glucose và fructose đều tham gia phản ứng tráng bạc.', isCorrect: true, exp: 'Trong môi trường kiềm của thuốc thử tráng bạc, fructose chuyển hóa thành glucose.' },
          { text: 'Dùng dung dịch nước bromine có thể phân biệt được glucose và fructose.', isCorrect: true, exp: 'Glucose làm mất màu nước bromine, fructose thì không.' },
          { text: 'Saccharose tham gia phản ứng tráng bạc trực tiếp mà không cần thủy phân.', isCorrect: false, exp: 'Saccharose không có nhóm -CHO tự do nên không tráng bạc.' },
        ],
        exp: 'So sánh tính chất của Glucose, Fructose và Saccharose.',
      },
    ],
    sa: [
      {
        q: 'Tráng bạc hoàn toàn 18,0 gam glucose bằng lượng dư AgNO3/NH3. Khối lượng kim loại Ag thu được là bao nhiêu gam?',
        ans: '21.6',
        numVal: 21.6,
        unit: 'gam',
        level: 'apply',
        exp: 'n(glucose) = 18 / 180 = 0,1 mol => n(Ag) = 2 * 0,1 = 0,2 mol => m(Ag) = 0,2 * 108 = 21,6 gam.',
      },
    ],
  },

  // G12-C3: Hợp chất chứa nitrogen
  'g12-c3': {
    mc: [
      {
        q: 'Chất nào sau đây là amine bậc 1?',
        opts: ['CH3-NH-CH3', '(CH3)3N', 'C2H5-NH2', 'CH3-NH-C2H5'],
        ans: 'C',
        level: 'know',
        exp: 'Amine bậc 1 có nhóm -NH2 gắn vào gốc hydrocarbon (C2H5-NH2 là ethylamine).',
      },
      {
        q: 'Phản ứng màu biuret dùng để nhận biết peptide có từ bao nhiêu liên kết peptide trở lên?',
        opts: ['1 liên kết peptide (dipeptide)', '2 liên kết peptide (tripeptide)', '4 liên kết peptide', 'Không phụ thuộc số liên kết'],
        ans: 'B',
        level: 'know',
        exp: 'Từ tripeptide trở lên (có từ 2 liên kết peptide trở lên) và protein mới cho phản ứng màu biuret màu tím với Cu(OH)2.',
      },
    ],
    tf: [
      {
        stimulus: 'Amino acid là hợp chất hữu cơ tạp chức chứa đồng thời nhóm amino (-NH2) và nhóm carboxyl (-COOH).',
        content: 'Đánh giá các nhận định sau:',
        level: 'understand',
        items: [
          { text: 'Amino acid có tính chất lưỡng tính, vừa tác dụng với acid vừa tác dụng với base.', isCorrect: true, exp: 'Nhóm -NH2 có tính base, nhóm -COOH có tính acid.' },
          { text: 'Ở điều kiện thường, amino acid là chất lỏng dễ bay hơi và có mùi khai.', isCorrect: false, exp: 'Amino acid là chất rắn kết tinh, không màu, nhiệt độ nóng chảy cao và dễ tan trong nước do tồn tại dạng ion lưỡng cực.' },
          { text: 'Aniline (C6H5NH2) tác dụng với nước bromine tạo kết tủa trắng 2,4,6-tribromoaniline.', isCorrect: true, exp: 'Tương tự phenol, nhóm -NH2 định hướng thế vào ortho và para.' },
          { text: 'Dipeptide Gly-Ala cho phản ứng màu biuret màu tím với Cu(OH)2.', isCorrect: false, exp: 'Dipeptide chỉ có 1 liên kết peptide nên KHÔNG có phản ứng màu biuret.' },
        ],
        exp: 'Tính chất của Amino acid, Aniline và phản ứng Biuret.',
      },
    ],
    sa: [
      {
        q: 'Một tripeptide X có công thức Gly-Ala-Val. Phân tử X có bao nhiêu liên kết peptide?',
        ans: '2',
        numVal: 2,
        unit: 'liên kết',
        level: 'understand',
        exp: 'Tripeptide gồm 3 gốc amino acid liên kết với nhau bằng 2 liên kết peptide.',
      },
    ],
  },

  // G12-C4: Polymer
  'g12-c4': {
    mc: [
      {
        q: 'Polymer nào sau đây được điều chế bằng phản ứng trùng ngưng?',
        opts: ['Polyethylene (PE)', 'Poly(vinyl chloride) (PVC)', 'Nilon-6,6', 'Poly(methyl methacrylate)'],
        ans: 'C',
        level: 'know',
        exp: 'Nilon-6,6 được điều chế bằng phản ứng trùng ngưng giữa hexamethylenediamine và adipic acid.',
      },
      {
        q: 'Tơ nào sau đây là tơ thiên nhiên?',
        opts: ['Tơ lapsan', 'Tơ nitron (olon)', 'Tơ tằm', 'Tơ nilon-6'],
        ans: 'C',
        level: 'know',
        exp: 'Tơ tằm, sợi bông, len lông cừu là tơ thiên nhiên.',
      },
    ],
    tf: [
      {
        stimulus: 'Polymer là vật liệu không thể thiếu trong đời sống hiện đại, bao gồm chất dẻo, tơ, cao su và keo dán.',
        content: 'Đánh giá các phát biểu sau:',
        level: 'understand',
        items: [
          { text: 'Polyethylene (PE) được điều chế bằng phản ứng trùng hợp ethylene.', isCorrect: true, exp: 'n CH2=CH2 → (-CH2-CH2-)n.' },
          { text: 'Tơ nilon-6,6 rất bền với nhiệt, acid và kiềm.', isCorrect: false, exp: 'Tơ nilon-6,6 kém bền với acid và kiềm do có liên kết peptide dễ bị thủy phân.' },
          { text: 'Lưu hóa cao su làm tạo các cầu nối disulfide (-S-S-) giúp tăng tính đàn hồi và chịu nhiệt.', isCorrect: true, exp: 'Bản chất của quá trình lưu hóa cao su.' },
          { text: 'Cellulose là polymer bán tổng hợp (nhân tạo).', isCorrect: false, exp: 'Cellulose là polymer thiên nhiên.' },
        ],
        exp: 'Phân loại và tính chất của vật liệu polymer.',
      },
    ],
    sa: [
      {
        q: 'Phân tử khối trung bình của một đoạn mạch poly(vinyl chloride) (PVC) là 125000 amu. Tính hệ số trùng hợp (số mắt xích) của đoạn mạch đó.',
        ans: '2000',
        numVal: 2000,
        unit: 'mắt xích',
        level: 'apply',
        exp: 'M(CH2-CHCl) = 62,5 amu. Hệ số n = 125000 / 62,5 = 2000 mắt xích.',
      },
    ],
  },

  // G12-C5: Pin điện và điện phân
  'g12-c5': {
    mc: [
      {
        q: 'Trong pin điện hóa Galvani Zn - Cu, điện cực kẽm (Zn) đóng vai trò là',
        opts: ['Cực dương (Cathode) xảy ra quá trình khử', 'Cực âm (Anode) xảy ra quá trình oxi hóa', 'Cực dương xảy ra quá trình oxi hóa', 'Cực âm xảy ra quá trình khử'],
        ans: 'B',
        level: 'know',
        exp: 'Trong pin điện: Cực âm là Anode, xảy ra quá trình oxi hóa Zn: Zn → Zn²⁺ + 2e.',
      },
      {
        q: 'Kim loại nào sau đây chỉ có thể điều chế bằng phương pháp điện phân nóng chảy?',
        opts: ['Cu', 'Fe', 'Ag', 'Al'],
        ans: 'D',
        level: 'know',
        exp: 'Các kim loại mạnh (nhóm IA, IIA, Al) có tính khử mạnh nên phải điều chế bằng điện phân nóng chảy.',
      },
    ],
    tf: [
      {
        stimulus: 'Xét pin điện Daniell Zn - Cu: Zn + Cu²⁺ → Zn²⁺ + Cu. Cho E°(Zn²⁺/Zn) = -0,76 V; E°(Cu²⁺/Cu) = +0,34 V.',
        content: 'Đánh giá các phát biểu sau:',
        level: 'understand',
        items: [
          { text: 'Sức điện động chuẩn của pin có giá trị là 1,10 V.', isCorrect: true, exp: 'E°_pin = E°(cathode) - E°(anode) = 0,34 - (-0,76) = 1,10 V.' },
          { text: 'Ở cathode, cation Cu²⁺ bị khử thành kim loại Cu.', isCorrect: true, exp: 'Cu²⁺ + 2e → Cu.' },
          { text: 'Cầu muối chứa dung dịch chất điện li (như KCl) giúp khép kín mạch điện và trung hòa điện tích.', isCorrect: true, exp: 'Chức năng của cầu muối trong pin điện.' },
          { text: 'Dòng electron trong dây dẫn ngoài chạy từ điện cực Cu sang điện cực Zn.', isCorrect: false, exp: 'Electron chạy từ cực âm Anode (Zn) sang cực dương Cathode (Cu).' },
        ],
        exp: 'Cơ chế hoạt động của Pin điện hóa.',
      },
    ],
    sa: [
      {
        q: 'Cho E°(Mg²⁺/Mg) = -2,37 V và E°(Cu²⁺/Cu) = +0,34 V. Tính sức điện động chuẩn của pin điện hóa Mg - Cu theo đơn vị Volt.',
        ans: '2.71',
        numVal: 2.71,
        unit: 'V',
        level: 'apply',
        exp: 'E°_pin = E°(Cu²⁺/Cu) - E°(Mg²⁺/Mg) = 0,34 - (-2,37) = 2,71 V.',
      },
    ],
  },

  // G12-C6: Đại cương về kim loại
  'g12-c6': {
    mc: [
      {
        q: 'Kim loại có tính dẫn điện tốt nhất trong các kim loại là',
        opts: ['Đồng (Cu)', 'Bạc (Ag)', 'Vàng (Au)', 'Nhôm (Al)'],
        ans: 'B',
        level: 'know',
        exp: 'Thứ tự dẫn điện: Ag > Cu > Au > Al > Fe.',
      },
      {
        q: 'Kim loại có độ cứng lớn nhất (có thể cắt được thủy tinh) là',
        opts: ['Fe', 'W', 'Cr', 'Cu'],
        ans: 'C',
        level: 'know',
        exp: 'Chromium (Cr) là kim loại cứng nhất trong tất cả các kim loại.',
      },
    ],
    tf: [
      {
        stimulus: 'Một sợi dây thép (hợp kim Fe - C) bị để ngoài không khí ẩm lâu ngày xuất hiện lớp gỉ màu nâu đỏ.',
        content: 'Đánh giá các phát biểu về hiện tượng ăn mòn trên:',
        level: 'understand',
        items: [
          { text: 'Quá trình gỉ sét của dây thép là hiện tượng ăn mòn điện hóa học.', isCorrect: true, exp: 'Có 2 điện cực Fe và C cùng tiếp xúc với dung dịch điện li (nước không khí).' },
          { text: 'Trong cặp pin vi thể Fe - C, Carbon là cực âm và bị ăn mòn trước.', isCorrect: false, exp: 'Fe có tính khử mạnh hơn C nên Fe là cực âm (anode) và bị ăn mòn.' },
          { text: 'Để bảo vệ các đường ống dẫn dầu bằng thép chôn dưới đất, người ta dùng phương pháp bảo vệ điện hóa bằng cách gắn các khối kẽm (Zn) hoặc magnesium (Mg).', isCorrect: true, exp: 'Phương pháp bảo vệ catot bằng kim loại hy sinh.' },
          { text: 'Sơn bề mặt kim loại là phương pháp bảo vệ điện hóa.', isCorrect: false, exp: 'Sơn là phương pháp bảo vệ bề mặt (cách ly với môi trường).' },
        ],
        exp: 'Ăn mòn điện hóa học và các phương pháp chống ăn mòn kim loại.',
      },
    ],
    sa: [
      {
        q: 'Cho 5,6 gam Fe tác dụng hoàn toàn với dung dịch HCl dư. Thể tích khí H2 sinh ra ở điều kiện chuẩn (đkc, hệ số 24,79 L/mol) là bao nhiêu lít? (Làm tròn 2 chữ số thập phân).',
        ans: '2.48',
        numVal: 2.48,
        unit: 'lít',
        level: 'apply',
        exp: 'n(Fe) = 5,6 / 56 = 0,1 mol. Fe + 2HCl → FeCl2 + H2. n(H2) = 0,1 mol => V = 0,1 * 24,79 = 2,479 ≈ 2,48 lít.',
      },
    ],
  },

  // G12-C7: Nguyên tố nhóm IA và nhóm IIA
  'g12-c7': {
    mc: [
      {
        q: 'Để bảo quản kim loại kiềm (như Na, K), người ta ngâm chúng trong',
        opts: ['Nước cất', 'Dầu hỏa', 'Dung dịch cồn ethanol', 'Dung dịch giấm ăn'],
        ans: 'B',
        level: 'know',
        exp: 'Kim loại kiềm phản ứng mãnh liệt với nước và oxygen, không phản ứng với dầu hỏa nên bảo quản bằng cách ngâm ngập trong dầu hỏa.',
      },
      {
        q: 'Chất nào sau đây có thể làm mềm được cả nước cứng tạm thời và nước cứng vĩnh cửu?',
        opts: ['NaCl', 'Na2CO3', 'Ca(OH)2', 'HCl'],
        ans: 'B',
        level: 'know',
        exp: 'Na2CO3 (hoặc Na3PO4) kết tủa Ca²⁺ và Mg²⁺ dưới dạng CaCO3↓ và MgCO3↓ nên làm mềm được mọi loại nước cứng.',
      },
    ],
    tf: [
      {
        stimulus: 'Nước cứng là nước chứa nhiều ion Ca²⁺ và Mg²⁺, gây nhiều tác hại trong sinh hoạt và sản xuất công nghiệp.',
        content: 'Đánh giá các nhận định sau:',
        level: 'understand',
        items: [
          { text: 'Nước cứng tạm thời chứa các ion Ca²⁺, Mg²⁺ và anion HCO3⁻.', isCorrect: true, exp: 'Định nghĩa nước cứng tạm thời.' },
          { text: 'Đun sôi nước có thể làm mềm được nước cứng tạm thời.', isCorrect: true, exp: 'Ca(HCO3)2 → CaCO3↓ + CO2↑ + H2O khi đun nóng.' },
          { text: 'Nước cứng làm giảm bọt của xà phòng và tốn nhiên liệu khi đun nấu.', isCorrect: true, exp: 'Do tạo kết tủa muối stearate khó tan và tạo lớp cặn đáy nồi.' },
          { text: 'Nước mềm là nước hoàn toàn không chứa bất kì chất tan nào.', isCorrect: false, exp: 'Nước mềm là nước chứa rất ít hoặc không chứa ion Ca²⁺ và Mg²⁺, vẫn có thể chứa các ion khác.' },
        ],
        exp: 'Phân loại và phương pháp làm mềm nước cứng.',
      },
    ],
    sa: [
      {
        q: 'Nhiệt phân hoàn toàn 10,0 gam đá vôi CaCO3 thu được bao nhiêu gam vôi sống CaO?',
        ans: '5.6',
        numVal: 5.6,
        unit: 'gam',
        level: 'apply',
        exp: 'n(CaCO3) = 10 / 100 = 0,1 mol. CaCO3 → CaO + CO2. n(CaO) = 0,1 mol => m(CaO) = 0,1 * 56 = 5,6 gam.',
      },
    ],
  },

  // G12-C8: Đại cương về kim loại chuyển tiếp và phức chất
  'g12-c8': {
    mc: [
      {
        q: 'Trong phức chất [Cu(NH3)4](OH)2, nguyên tử trung tâm là',
        opts: ['Cation Cu²⁺', 'Phân tử NH3', 'Anion OH⁻', 'Cation Cu⁺'],
        ans: 'A',
        level: 'know',
        exp: 'Cation Cu²⁺ là nguyên tử trung tâm nhận cặp electron từ các phối tử NH3.',
      },
      {
        q: 'Trong phức chất [Ag(NH3)2]⁺, số phối trí của nguyên tử trung tâm Ag⁺ là',
        opts: ['1', '2', '3', '4'],
        ans: 'B',
        level: 'know',
        exp: 'Có 2 phối tử NH3 phối trí xung quanh Ag⁺ nên số phối trí là 2.',
      },
      {
        q: 'Kim loại chuyển tiếp dãy thứ nhất có đặc điểm cấu hình electron là',
        opts: ['Chỉ có electron ở phân lớp s', 'Electron đang điền vào phân lớp 3d', 'Chỉ có electron ở phân lớp p', 'Không có electron hóa trị'],
        ans: 'B',
        level: 'know',
        exp: 'Các nguyên tố từ Sc đến Cu có electron đang điền vào phân lớp 3d (cấu hình [Ar] 3d^(1-10) 4s^(1-2)).',
      },
    ],
    tf: [
      {
        stimulus: 'Phức chất đóng vai trò sống còn trong sinh học và y học (hemoglobin, diệp lục, vitamin B12).',
        content: 'Đánh giá các phát biểu sau:',
        level: 'understand',
        items: [
          { text: 'Phối tử (ligand) là các ion hoặc phân tử có cặp electron tự do chưa liên kết.', isCorrect: true, exp: 'Phối tử đóng vai trò là base Lewis cho electron.' },
          { text: 'Hemoglobin trong máu là phức chất chứa nguyên tử trung tâm là ion Fe(II).', isCorrect: true, exp: 'Hemoglobin vận chuyển oxygen nhờ tâm Fe(II).' },
          { text: 'Cu(OH)2 tan trong dung dịch NH3 dư tạo dung dịch phức màu xanh lam thẫm [Cu(NH3)4](OH)2.', isCorrect: true, exp: 'Phản ứng tạo phức tetraamminecopper(II).' },
          { text: 'Tất cả các kim loại chuyển tiếp đều chỉ có duy nhất một số oxi hóa +2.', isCorrect: false, exp: 'Kim loại chuyển tiếp có nhiều số oxi hóa biến đổi (Fe có +2, +3; Cr có +2, +3, +6; Mn có +2, +4, +7...).' },
        ],
        exp: 'Khái niệm, cấu tạo và vai trò sinh học của phức chất.',
      },
    ],
    sa: [
      {
        q: 'Xác định điện tích của ion phức [Fe(CN)6] biết nguyên tử trung tâm Fe có số oxi hóa +3 và phối tử CN mang điện tích -1.',
        ans: '-3',
        numVal: -3,
        unit: '',
        level: 'apply',
        exp: 'Điện tích ion phức = (+3) + 6*(-1) = -3. (Ion phức là [Fe(CN)6]³⁻).',
      },
    ],
  },
};
