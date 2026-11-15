/**
 * About page ("Về chúng tôi").
 * Sections: who we are · our story · our differences · how we work · what we do · leadership.
 * Multilingual content: every user-facing string is { en, vi, fr, zh }.
 */
window.VFFC = window.VFFC || {};
VFFC.about = {
  hero: {
    eyebrow: {
      en: 'About us',
      vi: 'Về chúng tôi',
      fr: 'À propos de nous',
      zh: '关于我们'
    },
    title: {
      en: 'Finance, engineering and technology in one advisory team',
      vi: 'Tài chính, kỹ thuật và công nghệ trong cùng một đội ngũ tư vấn',
      fr: 'Finance, ingénierie et technologie réunies au sein d’une même équipe de conseil',
      zh: '集金融、工程与技术于一体的专业顾问团队'
    },
    lead: {
      en: 'Boutique advisory firm · Hanoi · Founded 2019',
      vi: 'Công ty tư vấn chuyên biệt · Hà Nội · Thành lập năm 2019',
      fr: 'Cabinet de conseil spécialisé · Hanoï · Fondé en 2019',
      zh: '精品咨询机构 · 越南河内 · 创立于 2019 年'
    },
    sectionsLabel: {
      en: 'On this page',
      vi: 'Nội dung trang',
      fr: 'Sur cette page',
      zh: '本页内容'
    },
    origins: [
      {
        place: { en: 'France', vi: 'Pháp', fr: 'France', zh: '法国' },
        field: { en: 'Finance & engineering', vi: 'Tài chính & kỹ thuật', fr: 'Finance & ingénierie', zh: '金融与工程' },
        detail: { en: 'Doctorates from IGR-IAE Rennes and INSA Rennes', vi: 'Tiến sĩ đào tạo tại IGR-IAE Rennes và INSA Rennes', fr: 'Doctorats de l’IGR-IAE Rennes et de l’INSA Rennes', zh: '雷恩高等商学院（IGR-IAE Rennes）及雷恩国立应用科学学院（INSA Rennes）博士' }
      },
      {
        place: { en: 'United States', vi: 'Hoa Kỳ', fr: 'États-Unis', zh: '美国' },
        field: { en: 'Technology & software', vi: 'Công nghệ & phần mềm', fr: 'Technologie & logiciels', zh: '技术与软件工程' },
        detail: { en: 'Florida Institute of Technology', vi: 'Viện Công nghệ Florida', fr: 'Florida Institute of Technology', zh: '佛罗里达理工大学（Florida Institute of Technology）' }
      },
      {
        place: { en: 'Vietnam', vi: 'Việt Nam', fr: 'Vietnam', zh: '越南' },
        field: { en: 'Implementation', vi: 'Triển khai', fr: 'Mise en œuvre', zh: '落地执行' },
        detail: { en: 'Hanoi, since 2019', vi: 'Hà Nội, từ năm 2019', fr: 'Hanoï, depuis 2019', zh: '河内，始于 2019 年' }
      }
    ]
  },
  sections: [
    { id: 'who-we-are', label: { en: 'Who we are', vi: 'Chúng tôi là ai', fr: 'Qui sommes-nous', zh: '我们是谁' } },
    { id: 'our-story', label: { en: 'Our story', vi: 'Câu chuyện hình thành', fr: 'Notre histoire', zh: '创立历程' } },
    { id: 'our-differences', label: { en: 'Our differences', vi: 'Điểm khác biệt', fr: 'Nos atouts', zh: '核心优势' } },
    { id: 'how-we-work', label: { en: 'How we work', vi: 'Cách chúng tôi làm việc', fr: 'Notre méthode', zh: '工作方式' } },
    { id: 'what-we-do', label: { en: 'What we do', vi: 'Lĩnh vực hoạt động', fr: 'Nos métiers', zh: '业务领域' } },
    { id: 'leadership', label: { en: 'Leadership', vi: 'Đội ngũ lãnh đạo', fr: 'Direction', zh: '管理团队' } }
  ],
  who: {
    title: { en: 'Who we are', vi: 'Chúng tôi là ai', fr: 'Qui sommes-nous', zh: '我们是谁' },
    paragraphs: [
      {
        en: 'VFFC — Vietnam France Financial & Construction Consulting Co., Ltd. — is a boutique advisory firm based in Hanoi and focused on Vietnam. Founded in 2019, we help investors, developers and enterprises turn sound ideas into projects that are financially robust, technically feasible and able to operate well.',
        vi: 'VFFC – Công ty TNHH Tư vấn Tài chính & Xây dựng Việt Pháp – là công ty tư vấn chuyên biệt có trụ sở tại Hà Nội, tập trung vào thị trường Việt Nam. Thành lập năm 2019, chúng tôi đồng hành cùng nhà đầu tư, chủ đầu tư và doanh nghiệp để biến những ý tưởng đúng đắn thành dự án vững về tài chính, khả thi về kỹ thuật và vận hành được trên thực tế.',
        fr: 'VFFC — Vietnam France Financial & Construction Consulting Co., Ltd. — est un cabinet de conseil spécialisé basé à Hanoï et dédié au marché vietnamien. Fondé en 2019, nous accompagnons les investisseurs, les promoteurs et les entreprises pour transformer des projets prometteurs en réalisations financièrement solides, techniquement viables et opérationnellement performantes.',
        zh: 'VFFC（越法金融与建设咨询有限公司）是一家总部位于河内、专注于越南市场的精品咨询公司。自 2019 年成立以来，我们协助投资者、开发商及企业将优质构想转化为财务稳健、技术可行且高效运营的落地项目。'
      },
      {
        en: 'Acting as a steady, hands-on partner, we put finance, engineering and technology on the same table, so that every recommendation holds up on all three fronts — and we stay with our clients from the first question to the final signature.',
        vi: 'Với vai trò một đối tác bền bỉ và sát sao, chúng tôi đặt tài chính, kỹ thuật và công nghệ trên cùng một bàn, để mỗi khuyến nghị đều đứng vững trên cả ba phương diện – và đồng hành cùng khách hàng từ câu hỏi đầu tiên đến chữ ký cuối cùng.',
        fr: 'En tant que partenaire fiable et impliqué sur le terrain, nous réunissons finance, ingénierie et technologie autour d’une même table afin que chaque recommandation soit solide sur ces trois plans — et nous restons aux côtés de nos clients de la première question jusqu’à la signature finale.',
        zh: '作为稳健务实的合作伙伴，我们将金融、工程与技术融会贯通，确保每一项建议在三个维度上都经得起检验——并从最初的可行性探讨一路陪伴客户直至最终签约交付。'
      },
      {
        en: 'We focus where we can add the most value: corporate restructuring and M&A, digital transformation, construction and transport infrastructure, investment brokerage for mixed-use residential and commercial projects, and connecting Vietnamese processed and frozen foods with buyers in Europe, Asia and the United States.',
        vi: 'Chúng tôi tập trung vào những lĩnh vực có thể tạo ra giá trị lớn nhất: tái cấu trúc doanh nghiệp và M&A, chuyển đổi số, kỹ thuật xây dựng và hạ tầng giao thông, môi giới đầu tư dự án hỗn hợp nhà ở và thương mại dịch vụ, cùng kết nối nông sản chế biến và hàng đông lạnh Việt Nam với đối tác tại châu Âu, châu Á và Hoa Kỳ.',
        fr: 'Nous nous concentrons là où nous apportons le plus de valeur : restructuration d’entreprises et fusions-acquisitions (M&A), transformation numérique, ingénierie de la construction et des infrastructures de transport, courtage en investissement pour les projets immobiliers mixtes résidentiels et commerciaux, ainsi que la mise en relation des producteurs vietnamiens de produits alimentaires transformés et surgelés avec les acheteurs en Europe, en Asie et aux États-Unis.',
        zh: '我们专注于最能创造价值的领域：企业重组与并购（M&A）尽职调查、数字化转型、建筑工程与交通基础设施、住宅及商业综合体项目投资居间，以及为欧洲、亚洲和美国的采购商对接优质越南加工食品与冷冻食品。'
      }
    ]
  },
  story: {
    title: { en: 'Our story', vi: 'Câu chuyện hình thành', fr: 'Notre histoire', zh: '创立历程' },
    paragraphs: [
      {
        en: 'VFFC began with a meeting of complementary expertise built in France and the United States, and a shared ambition: to put that knowledge to work on Vietnam’s development challenges.',
        vi: 'VFFC khởi nguồn từ sự gặp gỡ giữa những nền tảng tri thức bổ trợ cho nhau tại Pháp và Hoa Kỳ, cùng mong muốn đưa những kiến thức ấy vào giải quyết các thách thức phát triển tại Việt Nam.',
        fr: 'VFFC est né de la rencontre de compétences complémentaires acquises en France et aux États-Unis, autour d’une ambition commune : mettre ces savoir-faire au service des défis de développement du Vietnam.',
        zh: 'VFFC 源于法美两国互补专业背景的汇聚，以及一个共同的愿景：将国际前沿知识与经验应用于解决越南发展过程中的实际挑战。'
      },
      {
        en: 'Our board brings together PhDs trained at IGR-IAE Rennes and INSA Rennes in France and a technology and software engineering expert from the Florida Institute of Technology in the United States. The French grounding in finance and engineering brings systematic analysis, rigorous due diligence and disciplined risk assessment. The American training in technology adds modelling, digital solution design and the ability to turn complex problems into practical tools.',
        vi: 'Hội đồng quản trị quy tụ các tiến sĩ được đào tạo tại IGR-IAE Rennes và INSA Rennes, Pháp, cùng chuyên gia công nghệ và kỹ thuật phần mềm từ Viện Công nghệ Florida, Hoa Kỳ. Nền tảng tài chính và kỹ thuật tại Pháp mang đến tư duy phân tích có hệ thống, sự chặt chẽ trong thẩm định và kỷ luật trong đánh giá rủi ro. Năng lực công nghệ từ môi trường đào tạo tại Mỹ bổ sung khả năng mô hình hóa, thiết kế giải pháp số và chuyển hóa những bài toán phức tạp thành công cụ ứng dụng được trong thực tế.',
        fr: 'Notre direction réunit des docteurs formés à l’IGR-IAE Rennes et à l’INSA Rennes en France ainsi qu’un expert en technologie et génie logiciel diplômé du Florida Institute of Technology aux États-Unis. L’ancrage français en finance et en ingénierie apporte une analyse systématique, une due diligence rigoureuse et une maîtrise disciplinée des risques. La formation américaine en technologie y ajoute la modélisation, la conception de solutions numériques et la capacité à transformer des problèmes complexes en outils concrets.',
        zh: '我们的董事会汇聚了毕业于法国雷恩高等商学院（IGR-IAE Rennes）和雷恩国立应用科学学院（INSA Rennes）的博士，以及毕业于美国佛罗里达理工大学（Florida Institute of Technology）的技术与软件工程专家。法国的金融与工程底蕴带来了系统化的分析思维、严谨的尽职调查与规范的风险评估；美国的技术训练则注入了建模能力、数字化方案设计以及将复杂问题转化为实用工具的执行力。'
      },
      {
        en: 'Bringing these disciplines together shaped our founding idea: an advisory firm that sees each project as a whole, where investment returns, technical feasibility and operating capability are weighed within a single framework — connecting international standards with the realities of delivery in Vietnam.',
        vi: 'Sự giao thoa giữa tài chính, kỹ thuật và công nghệ đã định hình ý tưởng thành lập VFFC: một công ty tư vấn nhìn nhận dự án như một chỉnh thể, nơi hiệu quả đầu tư, tính khả thi kỹ thuật và năng lực vận hành được cân nhắc trong cùng một khuôn khổ – kết nối chuẩn mực quốc tế với điều kiện triển khai cụ thể tại Việt Nam.',
        fr: 'La convergence de ces disciplines a façonné notre idée fondatrice : un cabinet de conseil qui appréhende chaque projet dans sa globalité, où rentabilité d’investissement, faisabilité technique et capacité opérationnelle sont évaluées dans un cadre unique — reliant les standards internationaux aux réalités du terrain au Vietnam.',
        zh: '多学科的融合塑造了 VFFC 的创立理念：将每个项目视为有机整体，在同一框架下统筹权衡投资回报、技术可行性与运营能力——将国际标准与越南本土落地实情紧密结合。'
      }
    ]
  },
  differences: {
    title: { en: 'Our differences', vi: 'Điểm khác biệt', fr: 'Nos atouts', zh: '核心优势' },
    items: [
      {
        title: { en: 'One project, three lenses', vi: 'Một dự án, ba góc nhìn', fr: 'Un projet, trois regards', zh: '单一项目，三重维度' },
        text: {
          en: 'Financial, technical and operational questions are answered together — not in separate reports that pull in different directions.',
          vi: 'Các câu hỏi về tài chính, kỹ thuật và vận hành được giải quyết cùng lúc – thay vì trong những báo cáo rời rạc, mỗi bên một hướng.',
          fr: 'Les questions financières, techniques et opérationnelles sont traitées ensemble — et non dans des rapports séparés qui tirent dans des directions opposées.',
          zh: '财务、技术与运营问题同步解答，避免各领域的孤立报告相互掣肘。'
        }
      },
      {
        title: { en: 'Partner-led engagements', vi: 'Đối tác lãnh đạo trực tiếp', fr: 'Missions dirigées par les associés', zh: '合伙人亲自领衔' },
        text: {
          en: 'Our leading partners direct key assignments themselves, bringing depth of expertise and practical experience to every decision.',
          vi: 'Các đối tác lãnh đạo trực tiếp chỉ đạo những nhiệm vụ tư vấn trọng yếu, đưa chiều sâu chuyên môn và kinh nghiệm thực tiễn vào từng quyết định.',
          fr: 'Nos associés dirigeants pilotent eux-mêmes les missions clés, apportant une expertise approfondie et une expérience concrète à chaque décision.',
          zh: '核心合伙人亲自督导重点委托项目，将深厚的专业积淀与实战经验融入每一项决策。'
        }
      },
      {
        title: { en: 'International standards, local delivery', vi: 'Chuẩn mực quốc tế, triển khai tại Việt Nam', fr: 'Standards internationaux, exécution locale', zh: '国际标准，本土落地' },
        text: {
          en: 'Methods built in France and the United States, applied with a working knowledge of Vietnamese approvals, practices and markets.',
          vi: 'Phương pháp được hình thành tại Pháp và Hoa Kỳ, áp dụng trên nền hiểu biết thực tế về thủ tục, tập quán và thị trường Việt Nam.',
          fr: 'Des méthodes éprouvées en France et aux États-Unis, appliquées avec une maîtrise concrète des procédures, usages et marchés vietnamiens.',
          zh: '源自法国与美国的专业方法论，结合对越南审批流程、商业惯例及市场环境的深刻把握。'
        }
      },
      {
        title: { en: 'Partners matched to each mandate', vi: 'Đối tác phù hợp từng giao dịch', fr: 'Partenaires sélectionnés sur mesure', zh: '按需精准匹配合作伙伴' },
        text: {
          en: 'We select developers, contractors and processing plants to fit the size and requirements of each mandate, and check them before any introduction.',
          vi: 'Chúng tôi lựa chọn chủ đầu tư, nhà thầu và nhà máy phù hợp với quy mô, yêu cầu của từng giao dịch, và kiểm tra trước khi giới thiệu.',
          fr: 'Nous sélectionnons les promoteurs, entreprises de construction et usines de transformation adaptés à la taille et aux exigences de chaque mandat, et les vérifions avant toute mise en relation.',
          zh: '根据每项委托的规模与要求甄选开发商、承包商及加工厂，并在引荐前完成严格核查。'
        }
      }
    ]
  },
  process: {
    title: { en: 'How we work', vi: 'Cách chúng tôi làm việc', fr: 'Notre méthode de travail', zh: '工作方式' },
    lead: {
      en: 'Every engagement follows the same disciplined path, scaled to its size.',
      vi: 'Mỗi nhiệm vụ tư vấn đều đi theo cùng một lộ trình chặt chẽ, điều chỉnh theo quy mô.',
      fr: 'Chaque mission suit le même parcours rigoureux, adapté à son envergure.',
      zh: '每一项委托均遵循严谨规范的流程，并根据项目规模灵活调整。'
    },
    steps: [
      {
        title: { en: 'Listen', vi: 'Lắng nghe', fr: 'Écouter', zh: '倾听需求' },
        text: { en: 'Understand objectives, constraints and timeline', vi: 'Hiểu rõ mục tiêu, giới hạn và tiến độ', fr: 'Comprendre les objectifs, contraintes et délais', zh: '明确目标、限制条件与时间表' }
      },
      {
        title: { en: 'Assess', vi: 'Đánh giá', fr: 'Évaluer', zh: '全面评估' },
        text: { en: 'Financial, technical and operational review', vi: 'Rà soát tài chính, kỹ thuật và vận hành', fr: 'Diagnostic financier, technique et opérationnel', zh: '开展财务、技术与运营核查' }
      },
      {
        title: { en: 'Design', vi: 'Thiết kế giải pháp', fr: 'Concevoir', zh: '方案设计' },
        text: { en: 'Structure, partners and roadmap', vi: 'Cấu trúc, đối tác và lộ trình', fr: 'Structuration, partenaires et feuille de route', zh: '制定交易架构、甄选伙伴与路线图' }
      },
      {
        title: { en: 'Execute', vi: 'Triển khai', fr: 'Exécuter', zh: '落地执行' },
        text: { en: 'Negotiation, documentation and oversight', vi: 'Đàm phán, hồ sơ và giám sát thực hiện', fr: 'Négociation, documentation et supervision', zh: '推进谈判、文件编制与过程监管' }
      },
      {
        title: { en: 'Follow through', vi: 'Đồng hành', fr: 'Accompagner', zh: '持续跟进' },
        text: { en: 'Support after closing or delivery', vi: 'Hỗ trợ sau giao dịch, sau bàn giao', fr: 'Suivi après le closing ou la livraison', zh: '交割或交付后的持续支持' }
      }
    ]
  },
  whatWeDo: {
    title: { en: 'What we do', vi: 'Lĩnh vực hoạt động', fr: 'Nos métiers', zh: '业务领域' },
    label: { en: 'What we do', vi: 'Lĩnh vực hoạt động', fr: 'Nos métiers', zh: '业务领域' },
    areas: [
      {
        title: { en: 'Consulting', vi: 'Tư vấn', fr: 'Conseil', zh: '咨询服务' },
        href: 'index.html#consulting',
        services: [
          { code: 'A1', label: { en: 'Corporate restructuring & M&A due diligence', vi: 'Tái cấu trúc doanh nghiệp & thẩm định M&A', fr: 'Restructuration d’entreprises & due diligence M&A', zh: '企业重组与并购尽职调查' } },
          { code: 'A2', label: { en: 'Digital transformation & process optimization', vi: 'Chuyển đổi số & tối ưu hóa quy trình doanh nghiệp', fr: 'Transformation numérique & optimisation des processus', zh: '数字化转型与业务流程优化' } },
          { code: 'A3', label: { en: 'Construction engineering & transport infrastructure', vi: 'Kỹ thuật xây dựng & hạ tầng giao thông', fr: 'Ingénierie de la construction & infrastructures de transport', zh: '建筑工程与交通基础设施咨询' } },
          { code: 'A4', label: { en: 'Investment brokerage for mixed-use residential & commercial projects', vi: 'Môi giới đầu tư dự án hỗn hợp nhà ở và thương mại dịch vụ', fr: 'Courtage en investissement pour projets mixtes résidentiels & commerciaux', zh: '住宅与商业综合体项目投资居间' } }
        ]
      },
      {
        title: { en: 'Investment projects', vi: 'Dự án đầu tư', fr: 'Projets d’investissement', zh: '投资项目' },
        href: 'projects.html',
        text: {
          en: 'Connecting mixed-use residential and commercial projects with potential domestic and international investors',
          vi: 'Kết nối dự án hỗn hợp nhà ở và thương mại dịch vụ với nhà đầu tư tiềm năng trong và ngoài nước',
          fr: 'Mise en relation de projets immobiliers mixtes résidentiels et commerciaux avec des investisseurs vietnamiens et internationaux',
          zh: '为越南住宅及商业综合体项目对接国内外潜在投资者'
        }
      },
      {
        title: { en: 'Processed foods', vi: 'Nông sản chế biến', fr: 'Produits alimentaires transformés', zh: '加工食品与香料' },
        href: 'processed-foods.html',
        text: {
          en: 'Finding importers and potential markets in Europe, Asia and the US for fish sauce, dried noodles, spices and roasted ground coffee',
          vi: 'Tìm kiếm đối tác nhập khẩu và thị trường tiềm năng tại châu Âu, châu Á và Mỹ cho nước mắm, miến, bún, phở khô, gia vị và cà phê rang xay',
          fr: 'Recherche d’importateurs et de débouchés en Europe, en Asie et aux États-Unis pour la sauce de poisson, les nouilles sèches, les épices et le café torréfié moulu',
          zh: '为鱼露、粉丝、干米粉、干河粉、香料及烘焙研磨咖啡开拓欧洲、亚洲和美国的进口商与市场'
        }
      },
      {
        title: { en: 'Frozen foods', vi: 'Hàng đông lạnh', fr: 'Produits surgelés', zh: '冷冻食品' },
        href: 'frozen-foods.html',
        text: {
          en: 'Finding importers and potential markets in Europe, Asia and the US for seafood, traditional fish & meat cakes and tropical fruit',
          vi: 'Tìm kiếm đối tác nhập khẩu và thị trường tiềm năng tại châu Âu, châu Á và Mỹ cho thủy sản, chả truyền thống và trái cây đông lạnh',
          fr: 'Recherche d’importateurs et de débouchés en Europe, en Asie et aux États-Unis pour les produits de la mer, les spécialités traditionnelles et les fruits tropicaux surgelés',
          zh: '为冷冻海鲜、越南传统鱼饼肉饼及热带水果对接欧洲、亚洲和美国的进口商与市场'
        }
      }
    ]
  },
  team: {
    title: { en: 'Leadership team', vi: 'Đội ngũ lãnh đạo', fr: 'Équipe dirigeante', zh: '管理团队' },
    lead: {
      en: 'Each member of our leadership brings more than 20 years of experience in finance, engineering or technology, built in France, the United States, Europe and Southeast Asia.',
      vi: 'Mỗi thành viên ban lãnh đạo có hơn 20 năm kinh nghiệm trong tài chính, kỹ thuật hoặc công nghệ, tích lũy tại Pháp, Hoa Kỳ, châu Âu và Đông Nam Á.',
      fr: 'Chaque membre de notre direction apporte plus de 20 ans d’expérience en finance, ingénierie ou technologie, acquise en France, aux États-Unis, en Europe et en Asie du Sud-Est.',
      zh: '管理团队每位成员均拥有超过 20 年的金融、工程或技术经验，深耕法国、美国、欧洲及东南亚市场。'
    },
    members: [
      {
        name: { en: 'Dr. Rosalie Hoang', vi: 'TS. Rosalie Hoang', fr: 'Dr Rosalie Hoang', zh: 'Rosalie Hoang 博士' },
        initials: 'RH',
        role: {
          en: 'Chief Executive Officer · Financial advisory & investment structuring',
          vi: 'Tổng Giám đốc · Tư vấn tài chính & cấu trúc đầu tư',
          fr: 'Directrice Générale · Conseil financier & structuration d’investissements',
          zh: '首席执行官 · 财务顾问与投资架构'
        },
        photo: '',
        bio: [
          {
            en: 'Dr. Rosalie Hoang is a finance executive with more than 20 years of leadership experience in corporate finance, investment management, capital structuring, mergers and acquisitions, and strategic business transformation across Europe and Southeast Asia.',
            vi: 'TS. Rosalie Hoang là chuyên gia tài chính với hơn 20 năm kinh nghiệm lãnh đạo trong các lĩnh vực tài chính doanh nghiệp, quản lý đầu tư, cấu trúc vốn, mua bán – sáp nhập (M&A) và chuyển đổi chiến lược doanh nghiệp tại châu Âu và Đông Nam Á.',
            fr: 'Le Dr Rosalie Hoang est une dirigeante financière forte de plus de 20 ans d’expérience en finance d’entreprise, gestion d’investissements, structuration du capital, fusions-acquisitions (M&A) et transformation stratégique en Europe et en Asie du Sud-Est.',
            zh: 'Rosalie Hoang 博士是一位资深金融高管，在欧洲和东南亚拥有超过 20 年的企业金融、投资管理、资本架构、并购（M&A）及企业战略转型领导经验。'
          },
          {
            en: 'She holds a doctorate from IGR-IAE Rennes (France) and built her international expertise in leadership roles within multinational organisations, including Carrefour SA. She specialises in financial strategy, investment appraisal, capital optimisation and complex cross-border transactions.',
            vi: 'Bà có bằng Tiến sĩ của IGR-IAE Rennes (Pháp) và tích lũy kinh nghiệm quốc tế qua các vị trí lãnh đạo tại những tập đoàn đa quốc gia, trong đó có Carrefour SA. Chuyên môn của bà tập trung vào chiến lược tài chính, thẩm định đầu tư, tối ưu hóa vốn và các giao dịch xuyên biên giới phức tạp.',
            fr: 'Titulaire d’un doctorat de l’IGR-IAE Rennes (France), elle a forgé son expertise internationale à des postes de direction au sein de groupes multinationaux, dont Carrefour SA. Elle est spécialisée dans la stratégie financière, l’évaluation d’investissements, l’optimisation du capital et les transactions transfrontalières complexes.',
            zh: '她拥有法国雷恩高等商学院（IGR-IAE Rennes）博士学位，曾在家乐福集团（Carrefour SA）等跨国企业担任管理要职，专精于财务战略、投资评估、资本优化及复杂的跨境交易。'
          },
          {
            en: 'At VFFC she leads the financial advisory and investment structuring practice, overseeing project financing, corporate restructuring and the execution of investment transactions. Her work spans financial modelling, risk management, value creation and stakeholder engagement, helping clients grow sustainably and maximise enterprise value.',
            vi: 'Tại VFFC, bà dẫn dắt mảng tư vấn tài chính và cấu trúc đầu tư, phụ trách tài trợ dự án, tái cấu trúc doanh nghiệp và triển khai các giao dịch đầu tư. Năng lực của bà bao quát mô hình tài chính, quản trị rủi ro, chiến lược tạo giá trị và quan hệ với các bên liên quan, giúp khách hàng tăng trưởng bền vững và tối đa hóa giá trị doanh nghiệp.',
            fr: 'Chez VFFC, elle dirige le pôle de conseil financier et de structuration d’investissements, supervisant le financement de projets, la restructuration d’entreprises et l’exécution des opérations d’investissement. Son intervention couvre la modélisation financière, la gestion des risques, la création de valeur et les relations avec les parties prenantes, aidant les clients à croître durablement et à maximiser la valeur de leur entreprise.',
            zh: '在 VFFC，她全面负责财务咨询与投资架构业务，统筹项目融资、企业重组及投资交易执行。她的工作涵盖财务建模、风险管理、价值创造及利益相关方沟通，助力客户实现可持续增长与企业价值最大化。'
          }
        ]
      },
      {
        name: { en: 'Dr. Viet Hai Hoang', vi: 'TS. Hoàng Việt Hải', fr: 'Dr Viet Hai Hoang', zh: '黄越海博士 (Dr. Viet Hai Hoang)' },
        initials: 'HH',
        role: {
          en: 'Construction engineering & transport infrastructure',
          vi: 'Kỹ thuật xây dựng & hạ tầng giao thông',
          fr: 'Ingénierie de la construction & infrastructures de transport',
          zh: '建筑工程与交通基础设施总监'
        },
        photo: '',
        bio: [
          {
            en: 'Dr. Viet Hai Hoang has more than 20 years of specialised experience in technical design, tunnel and bridge structural engineering, advanced construction materials and turnkey project delivery.',
            vi: 'TS. Hoàng Việt Hải có hơn 20 năm kinh nghiệm chuyên sâu về thiết kế kỹ thuật, kết cấu cầu và hầm, tư vấn vật liệu xây dựng tiên tiến và triển khai dự án trọn gói.',
            fr: 'Le Dr Viet Hai Hoang possède plus de 20 ans d’expérience spécialisée dans les études techniques, le génie civil des ponts et tunnels, les matériaux de construction avancés et la livraison de projets clés en main.',
            zh: '黄越海博士在工程技术设计、桥梁与隧道结构工程、新型建筑材料咨询及交钥匙工程交付方面拥有超过 20 年的专业经验。'
          },
          {
            en: 'He earned his doctorate at INSA Rennes (Institut National des Sciences Appliquées, France) and has advised national highway corporations and leading contractors, including Bouygues, VEC and UDIC, on construction quality, safety compliance and schedule control.',
            vi: 'Ông nhận bằng Tiến sĩ tại INSA Rennes (Institut National des Sciences Appliquées, Pháp) và đã tư vấn cho các tổng công ty đường cao tốc quốc gia cùng những nhà thầu hàng đầu như Bouygues, VEC và UDIC, bảo đảm chất lượng thi công, tuân thủ an toàn và kiểm soát tiến độ.',
            fr: 'Docteur de l’INSA Rennes (Institut National des Sciences Appliquées, France), il a conseillé des sociétés nationales d’autoroutes et des constructeurs de premier plan tels que Bouygues, VEC et UDIC en matière de qualité d’exécution, de conformité sécurité et de maîtrise des délais.',
            zh: '他毕业于法国雷恩国立应用科学学院（INSA Rennes）并获博士学位，曾为国家高速公路总公司及法国布依格（Bouygues）、VEC、UDIC 等大型承包商提供工程顾问服务，确保施工质量、安全合规与工期控制。'
          }
        ]
      },
      {
        name: { en: 'Mr. Dinh Quang Le', vi: 'Ông Lê Đình Quang', fr: 'M. Dinh Quang Le', zh: '黎廷光先生 (Mr. Dinh Quang Le)' },
        initials: 'LQ',
        role: {
          en: 'Digital transformation & process optimisation',
          vi: 'Chuyển đổi số & tối ưu hóa quy trình',
          fr: 'Transformation numérique & optimisation des processus',
          zh: '数字化转型与流程优化总监'
        },
        photo: '',
        bio: [
          {
            en: 'Mr. Dinh Quang Le has more than 20 years of leadership experience in software development, digital transformation and the optimisation of complex business processes in multinational engineering and enterprise environments.',
            vi: 'Ông Lê Đình Quang có hơn 20 năm kinh nghiệm lãnh đạo trong phát triển phần mềm, chuyển đổi số và tối ưu hóa các quy trình doanh nghiệp phức tạp tại môi trường kỹ thuật và doanh nghiệp đa quốc gia.',
            fr: 'M. Dinh Quang Le compte plus de 20 ans d’expérience dirigeante dans le développement logiciel, la transformation numérique et l’optimisation de processus métiers complexes au sein d’environnements internationaux d’ingénierie et d’entreprise.',
            zh: '黎廷光先生在跨国工程与企业环境中拥有超过 20 年的软件开发、数字化转型及复杂业务流程优化管理经验。'
          },
          {
            en: 'A graduate of the Florida Institute of Technology (USA), he directs VFFC’s digital architecture: integrated project dashboards, automated BIM workflows, enterprise cloud infrastructure and process optimisation systems that remove bottlenecks and support better decisions.',
            vi: 'Tốt nghiệp Viện Công nghệ Florida (Hoa Kỳ), ông phụ trách kiến trúc số của VFFC: hệ thống dashboard quản lý dự án tích hợp, quy trình BIM tự động, hạ tầng đám mây doanh nghiệp và các hệ thống tối ưu hóa vận hành giúp loại bỏ điểm nghẽn, hỗ trợ ra quyết định.',
            fr: 'Diplômé du Florida Institute of Technology (États-Unis), il pilote l’architecture numérique de VFFC : tableaux de bord de gestion de projets intégrés, flux BIM automatisés, infrastructures cloud d’entreprise et systèmes d’optimisation éliminant les goulets d’étranglement pour éclairer la prise de décision.',
            zh: '他毕业于美国佛罗里达理工大学（Florida Institute of Technology），负责主导 VFFC 的数字化架构：集成化项目管理看板、自动化 BIM 工作流、企业云基础设施以及消除运营瓶颈、赋能管理决策的流程优化系统。'
          }
        ]
      }
    ]
  },
  cta: {
    title: { en: 'Talk to our partners', vi: 'Trao đổi với các đối tác của chúng tôi', fr: 'Échangez avec nos associés', zh: '与我们的合伙人交流' },
    text: {
      en: 'Tell us about your project or order — a partner will reply personally.',
      vi: 'Hãy cho chúng tôi biết về dự án hoặc đơn hàng của quý vị — một đối tác sẽ trực tiếp phản hồi.',
      fr: 'Parlez-nous de votre projet ou de votre commande — un associé vous répondra personnellement.',
      zh: '请告知您的项目需求或采购意向——我们的合伙人将亲自回复您。'
    },
    button: { en: 'Contact us', vi: 'Liên hệ', fr: 'Nous contacter', zh: '联系我们' }
  }
};
