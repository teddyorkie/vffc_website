/**
 * About page ("Về chúng tôi").
 * Sections: who we are · our story · our differences · how we work · what we do · leadership.
 * Bilingual content: every user-facing string is { en, vi }.
 */
window.VFFC = window.VFFC || {};
VFFC.about = {
  hero: {
    eyebrow: { en: 'About us', vi: 'Về chúng tôi' },
    title: { en: 'Finance, engineering and technology in one advisory team', vi: 'Tài chính, kỹ thuật và công nghệ trong cùng một đội ngũ tư vấn' },
    lead: { en: 'Boutique advisory firm · Hanoi · Founded 2019', vi: 'Công ty tư vấn chuyên biệt · Hà Nội · Thành lập năm 2019' },
    sectionsLabel: { en: 'On this page', vi: 'Nội dung trang' },
    origins: [
      { place: { en: 'France', vi: 'Pháp' }, field: { en: 'Finance & engineering', vi: 'Tài chính & kỹ thuật' }, detail: { en: 'Doctorates from IGR-IAE Rennes and INSA Rennes', vi: 'Tiến sĩ đào tạo tại IGR-IAE Rennes và INSA Rennes' } },
      { place: { en: 'United States', vi: 'Hoa Kỳ' }, field: { en: 'Technology & software', vi: 'Công nghệ & phần mềm' }, detail: { en: 'Florida Institute of Technology', vi: 'Viện Công nghệ Florida' } },
      { place: { en: 'Vietnam', vi: 'Việt Nam' }, field: { en: 'Implementation', vi: 'Triển khai' }, detail: { en: 'Hanoi, since 2019', vi: 'Hà Nội, từ năm 2019' } }
    ]
  },
  sections: [
    { id: 'who-we-are', label: { en: 'Who we are', vi: 'Chúng tôi là ai' } },
    { id: 'our-story', label: { en: 'Our story', vi: 'Câu chuyện hình thành' } },
    { id: 'our-differences', label: { en: 'Our differences', vi: 'Điểm khác biệt' } },
    { id: 'how-we-work', label: { en: 'How we work', vi: 'Cách chúng tôi làm việc' } },
    { id: 'what-we-do', label: { en: 'What we do', vi: 'Lĩnh vực hoạt động' } },
    { id: 'leadership', label: { en: 'Leadership', vi: 'Đội ngũ lãnh đạo' } }
  ],
  who: {
    title: { en: 'Who we are', vi: 'Chúng tôi là ai' },
    paragraphs: [
      {
        en: 'VFFC — Vietnam France Financial & Construction Consulting Co., Ltd. — is a boutique advisory firm based in Hanoi and focused on Vietnam. Founded in 2019, we help investors, developers and enterprises turn sound ideas into projects that are financially robust, technically feasible and able to operate well.',
        vi: 'VFFC – Công ty TNHH Tư vấn Tài chính & Xây dựng Việt Pháp – là công ty tư vấn chuyên biệt có trụ sở tại Hà Nội, tập trung vào thị trường Việt Nam. Thành lập năm 2019, chúng tôi đồng hành cùng nhà đầu tư, chủ đầu tư và doanh nghiệp để biến những ý tưởng đúng đắn thành dự án vững về tài chính, khả thi về kỹ thuật và vận hành được trên thực tế.'
      },
      {
        en: 'Acting as a steady, hands-on partner, we put finance, engineering and technology on the same table, so that every recommendation holds up on all three fronts — and we stay with our clients from the first question to the final signature.',
        vi: 'Với vai trò một đối tác bền bỉ và sát sao, chúng tôi đặt tài chính, kỹ thuật và công nghệ trên cùng một bàn, để mỗi khuyến nghị đều đứng vững trên cả ba phương diện – và đồng hành cùng khách hàng từ câu hỏi đầu tiên đến chữ ký cuối cùng.'
      },
      {
        en: 'We focus where we can add the most value: corporate restructuring and M&A, digital transformation, construction and transport infrastructure, investment brokerage for mixed-use residential and commercial projects, and connecting Vietnamese processed and frozen foods with buyers in Europe, Asia and the United States.',
        vi: 'Chúng tôi tập trung vào những lĩnh vực có thể tạo ra giá trị lớn nhất: tái cấu trúc doanh nghiệp và M&A, chuyển đổi số, kỹ thuật xây dựng và hạ tầng giao thông, môi giới đầu tư dự án hỗn hợp nhà ở và thương mại dịch vụ, cùng kết nối nông sản chế biến và hàng đông lạnh Việt Nam với đối tác tại châu Âu, châu Á và Hoa Kỳ.'
      }
    ]
  },
  story: {
    title: { en: 'Our story', vi: 'Câu chuyện hình thành' },
    paragraphs: [
      {
        en: 'VFFC began with a meeting of complementary expertise built in France and the United States, and a shared ambition: to put that knowledge to work on Vietnam’s development challenges.',
        vi: 'VFFC khởi nguồn từ sự gặp gỡ giữa những nền tảng tri thức bổ trợ cho nhau tại Pháp và Hoa Kỳ, cùng mong muốn đưa những kiến thức ấy vào giải quyết các thách thức phát triển tại Việt Nam.'
      },
      {
        en: 'Our board brings together PhDs trained at IGR-IAE Rennes and INSA Rennes in France and a technology and software engineering expert from the Florida Institute of Technology in the United States. The French grounding in finance and engineering brings systematic analysis, rigorous due diligence and disciplined risk assessment. The American training in technology adds modelling, digital solution design and the ability to turn complex problems into practical tools.',
        vi: 'Hội đồng quản trị quy tụ các tiến sĩ được đào tạo tại IGR-IAE Rennes và INSA Rennes, Pháp, cùng chuyên gia công nghệ và kỹ thuật phần mềm từ Viện Công nghệ Florida, Hoa Kỳ. Nền tảng tài chính và kỹ thuật tại Pháp mang đến tư duy phân tích có hệ thống, sự chặt chẽ trong thẩm định và kỷ luật trong đánh giá rủi ro. Năng lực công nghệ từ môi trường đào tạo tại Mỹ bổ sung khả năng mô hình hóa, thiết kế giải pháp số và chuyển hóa những bài toán phức tạp thành công cụ ứng dụng được trong thực tế.'
      },
      {
        en: 'Bringing these disciplines together shaped our founding idea: an advisory firm that sees each project as a whole, where investment returns, technical feasibility and operating capability are weighed within a single framework — connecting international standards with the realities of delivery in Vietnam.',
        vi: 'Sự giao thoa giữa tài chính, kỹ thuật và công nghệ đã định hình ý tưởng thành lập VFFC: một công ty tư vấn nhìn nhận dự án như một chỉnh thể, nơi hiệu quả đầu tư, tính khả thi kỹ thuật và năng lực vận hành được cân nhắc trong cùng một khuôn khổ – kết nối chuẩn mực quốc tế với điều kiện triển khai cụ thể tại Việt Nam.'
      }
    ]
  },
  differences: {
    title: { en: 'Our differences', vi: 'Điểm khác biệt' },
    items: [
      { title: { en: 'One project, three lenses', vi: 'Một dự án, ba góc nhìn' }, text: { en: 'Financial, technical and operational questions are answered together — not in separate reports that pull in different directions.', vi: 'Các câu hỏi về tài chính, kỹ thuật và vận hành được giải quyết cùng lúc – thay vì trong những báo cáo rời rạc, mỗi bên một hướng.' } },
      { title: { en: 'Partner-led engagements', vi: 'Đối tác lãnh đạo trực tiếp' }, text: { en: 'Our leading partners direct key assignments themselves, bringing depth of expertise and practical experience to every decision.', vi: 'Các đối tác lãnh đạo trực tiếp chỉ đạo những nhiệm vụ tư vấn trọng yếu, đưa chiều sâu chuyên môn và kinh nghiệm thực tiễn vào từng quyết định.' } },
      { title: { en: 'International standards, local delivery', vi: 'Chuẩn mực quốc tế, triển khai tại Việt Nam' }, text: { en: 'Methods built in France and the United States, applied with a working knowledge of Vietnamese approvals, practices and markets.', vi: 'Phương pháp được hình thành tại Pháp và Hoa Kỳ, áp dụng trên nền hiểu biết thực tế về thủ tục, tập quán và thị trường Việt Nam.' } },
      { title: { en: 'Partners matched to each mandate', vi: 'Đối tác phù hợp từng giao dịch' }, text: { en: 'We select developers, contractors and processing plants to fit the size and requirements of each mandate, and check them before any introduction.', vi: 'Chúng tôi lựa chọn chủ đầu tư, nhà thầu và nhà máy phù hợp với quy mô, yêu cầu của từng giao dịch, và kiểm tra trước khi giới thiệu.' } }
    ]
  },
  process: {
    title: { en: 'How we work', vi: 'Cách chúng tôi làm việc' },
    lead: { en: 'Every engagement follows the same disciplined path, scaled to its size.', vi: 'Mỗi nhiệm vụ tư vấn đều đi theo cùng một lộ trình chặt chẽ, điều chỉnh theo quy mô.' },
    steps: [
      { title: { en: 'Listen', vi: 'Lắng nghe' }, text: { en: 'Understand objectives, constraints and timeline', vi: 'Hiểu rõ mục tiêu, giới hạn và tiến độ' } },
      { title: { en: 'Assess', vi: 'Đánh giá' }, text: { en: 'Financial, technical and operational review', vi: 'Rà soát tài chính, kỹ thuật và vận hành' } },
      { title: { en: 'Design', vi: 'Thiết kế giải pháp' }, text: { en: 'Structure, partners and roadmap', vi: 'Cấu trúc, đối tác và lộ trình' } },
      { title: { en: 'Execute', vi: 'Triển khai' }, text: { en: 'Negotiation, documentation and oversight', vi: 'Đàm phán, hồ sơ và giám sát thực hiện' } },
      { title: { en: 'Follow through', vi: 'Đồng hành' }, text: { en: 'Support after closing or delivery', vi: 'Hỗ trợ sau giao dịch, sau bàn giao' } }
    ]
  },
  whatWeDo: {
    title: { en: 'What we do', vi: 'Lĩnh vực hoạt động' },
    label: { en: 'What we do', vi: 'Lĩnh vực hoạt động' },
    areas: [
      {
        title: { en: 'Consulting', vi: 'Tư vấn' },
        href: 'index.html#consulting',
        services: [
          { code: 'A1', label: { en: 'Corporate restructuring & M&A due diligence', vi: 'Tái cấu trúc doanh nghiệp & thẩm định M&A' } },
          { code: 'A2', label: { en: 'Digital transformation & process optimization', vi: 'Chuyển đổi số & tối ưu hóa quy trình doanh nghiệp' } },
          { code: 'A3', label: { en: 'Construction engineering & transport infrastructure', vi: 'Kỹ thuật xây dựng & hạ tầng giao thông' } },
          { code: 'A4', label: { en: 'Investment brokerage for mixed-use residential & commercial projects', vi: 'Môi giới đầu tư dự án hỗn hợp nhà ở và thương mại dịch vụ' } }
        ]
      },
      {
        title: { en: 'Investment projects', vi: 'Dự án đầu tư' },
        href: 'projects.html',
        text: { en: 'Connecting mixed-use residential and commercial projects with potential domestic and international investors', vi: 'Kết nối dự án hỗn hợp nhà ở và thương mại dịch vụ với nhà đầu tư tiềm năng trong và ngoài nước' }
      },
      {
        title: { en: 'Processed foods', vi: 'Nông sản chế biến' },
        href: 'processed-foods.html',
        text: { en: 'Finding importers and potential markets in Europe, Asia and the US for fish sauce, dried noodles, spices and roasted ground coffee', vi: 'Tìm kiếm đối tác nhập khẩu và thị trường tiềm năng tại châu Âu, châu Á và Mỹ cho nước mắm, miến, bún, phở khô, gia vị và cà phê rang xay' }
      },
      {
        title: { en: 'Frozen foods', vi: 'Hàng đông lạnh' },
        href: 'frozen-foods.html',
        text: { en: 'Finding importers and potential markets in Europe, Asia and the US for seafood, traditional fish & meat cakes and tropical fruit', vi: 'Tìm kiếm đối tác nhập khẩu và thị trường tiềm năng tại châu Âu, châu Á và Mỹ cho thủy sản, chả truyền thống và trái cây đông lạnh' }
      }
    ]
  },
  team: {
    title: { en: 'Leadership team', vi: 'Đội ngũ lãnh đạo' },
    lead: {
      en: 'Each member of our leadership brings more than 20 years of experience in finance, engineering or technology, built in France, the United States, Europe and Southeast Asia.',
      vi: 'Mỗi thành viên ban lãnh đạo có hơn 20 năm kinh nghiệm trong tài chính, kỹ thuật hoặc công nghệ, tích lũy tại Pháp, Hoa Kỳ, châu Âu và Đông Nam Á.'
    },
    members: [
      {
        name: { en: 'Dr. Rosalie Hoang', vi: 'TS. Rosalie Hoang' },
        initials: 'RH',
        role: { en: 'Chief Executive Officer · Financial advisory & investment structuring', vi: 'Tổng Giám đốc · Tư vấn tài chính & cấu trúc đầu tư' },
        photo: '',
        bio: [
          {
            en: 'Dr. Rosalie Hoang is a finance executive with more than 20 years of leadership experience in corporate finance, investment management, capital structuring, mergers and acquisitions, and strategic business transformation across Europe and Southeast Asia.',
            vi: 'TS. Rosalie Hoang là chuyên gia tài chính với hơn 20 năm kinh nghiệm lãnh đạo trong các lĩnh vực tài chính doanh nghiệp, quản lý đầu tư, cấu trúc vốn, mua bán – sáp nhập (M&A) và chuyển đổi chiến lược doanh nghiệp tại châu Âu và Đông Nam Á.'
          },
          {
            en: 'She holds a doctorate from IGR-IAE Rennes (France) and built her international expertise in leadership roles within multinational organisations, including Carrefour SA. She specialises in financial strategy, investment appraisal, capital optimisation and complex cross-border transactions.',
            vi: 'Bà có bằng Tiến sĩ của IGR-IAE Rennes (Pháp) và tích lũy kinh nghiệm quốc tế qua các vị trí lãnh đạo tại những tập đoàn đa quốc gia, trong đó có Carrefour SA. Chuyên môn của bà tập trung vào chiến lược tài chính, thẩm định đầu tư, tối ưu hóa vốn và các giao dịch xuyên biên giới phức tạp.'
          },
          {
            en: 'At VFFC she leads the financial advisory and investment structuring practice, overseeing project financing, corporate restructuring and the execution of investment transactions. Her work spans financial modelling, risk management, value creation and stakeholder engagement, helping clients grow sustainably and maximise enterprise value.',
            vi: 'Tại VFFC, bà dẫn dắt mảng tư vấn tài chính và cấu trúc đầu tư, phụ trách tài trợ dự án, tái cấu trúc doanh nghiệp và triển khai các giao dịch đầu tư. Năng lực của bà bao quát mô hình tài chính, quản trị rủi ro, chiến lược tạo giá trị và quan hệ với các bên liên quan, giúp khách hàng tăng trưởng bền vững và tối đa hóa giá trị doanh nghiệp.'
          }
        ]
      },
      {
        name: { en: 'Dr. Viet Hai Hoang', vi: 'TS. Hoàng Việt Hải' },
        initials: 'HH',
        role: { en: 'Construction engineering & transport infrastructure', vi: 'Kỹ thuật xây dựng & hạ tầng giao thông' },
        photo: '',
        bio: [
          {
            en: 'Dr. Viet Hai Hoang has more than 20 years of specialised experience in technical design, tunnel and bridge structural engineering, advanced construction materials and turnkey project delivery.',
            vi: 'TS. Hoàng Việt Hải có hơn 20 năm kinh nghiệm chuyên sâu về thiết kế kỹ thuật, kết cấu cầu và hầm, tư vấn vật liệu xây dựng tiên tiến và triển khai dự án trọn gói.'
          },
          {
            en: 'He earned his doctorate at INSA Rennes (Institut National des Sciences Appliquées, France) and has advised national highway corporations and leading contractors, including Bouygues, VEC and UDIC, on construction quality, safety compliance and schedule control.',
            vi: 'Ông nhận bằng Tiến sĩ tại INSA Rennes (Institut National des Sciences Appliquées, Pháp) và đã tư vấn cho các tổng công ty đường cao tốc quốc gia cùng những nhà thầu hàng đầu như Bouygues, VEC và UDIC, bảo đảm chất lượng thi công, tuân thủ an toàn và kiểm soát tiến độ.'
          }
        ]
      },
      {
        name: { en: 'Mr. Dinh Quang Le', vi: 'Ông Lê Đình Quang' },
        initials: 'LQ',
        role: { en: 'Digital transformation & process optimisation', vi: 'Chuyển đổi số & tối ưu hóa quy trình' },
        photo: '',
        bio: [
          {
            en: 'Mr. Dinh Quang Le has more than 20 years of leadership experience in software development, digital transformation and the optimisation of complex business processes in multinational engineering and enterprise environments.',
            vi: 'Ông Lê Đình Quang có hơn 20 năm kinh nghiệm lãnh đạo trong phát triển phần mềm, chuyển đổi số và tối ưu hóa các quy trình doanh nghiệp phức tạp tại môi trường kỹ thuật và doanh nghiệp đa quốc gia.'
          },
          {
            en: 'A graduate of the Florida Institute of Technology (USA), he directs VFFC’s digital architecture: integrated project dashboards, automated BIM workflows, enterprise cloud infrastructure and process optimisation systems that remove bottlenecks and support better decisions.',
            vi: 'Tốt nghiệp Viện Công nghệ Florida (Hoa Kỳ), ông phụ trách kiến trúc số của VFFC: hệ thống dashboard quản lý dự án tích hợp, quy trình BIM tự động, hạ tầng đám mây doanh nghiệp và các hệ thống tối ưu hóa vận hành giúp loại bỏ điểm nghẽn, hỗ trợ ra quyết định.'
          }
        ]
      }
    ]
  },
  cta: {
    title: { en: 'Talk to our partners', vi: 'Trao đổi với các đối tác của chúng tôi' },
    text: { en: 'Tell us about your project or order — a partner will reply personally.', vi: 'Hãy cho chúng tôi biết về dự án hoặc đơn hàng của quý vị — một đối tác sẽ trực tiếp phản hồi.' },
    button: { en: 'Contact us', vi: 'Liên hệ' }
  }
};
