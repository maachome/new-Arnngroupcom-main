import { ServiceData } from "../types/service";
const lussocollezioni = "https://arnn-group.s3.ap-south-1.amazonaws.com/New+Website+ARNN/lussocollezioni-logo.png";
const wisebellLogo = "https://arnn-group.s3.ap-south-1.amazonaws.com/New+Website+ARNN/wisebell-logo.webp";
const mednero = "https://arnn-group.s3.ap-south-1.amazonaws.com/New+Website+ARNN/mednero-logo.png";
const maachome = "https://arnn-group.s3.ap-south-1.amazonaws.com/New+Website+ARNN/MAAC_Home_Logo_pemjq7.webp";
const agrifuturesglobal = "https://arnn-group.s3.ap-south-1.amazonaws.com/New+Website+ARNN/agri-logo.webp";
const economicEmpowermentVideo ="https://arnn-group.s3.ap-south-1.amazonaws.com/New+Website+ARNN/Economic+Empowerment.mp4";
const mednerovidro ="https://arnn-group.s3.ap-south-1.amazonaws.com/New+Website+ARNN/mednero-vid.mp4";
const lussocollezionivid = "https://arnn-group.s3.ap-south-1.amazonaws.com/New+Website+ARNN/lussocollezioni-vid.webm"
const agrifutureglobalvid ="https://arnn-group.s3.ap-south-1.amazonaws.com/New+Website+ARNN/Agro-Aqua.mp4";
const maachomevid ="https://arnn-group.s3.ap-south-1.amazonaws.com/New+Website+ARNN/maachome-vid.webm";
export const servicesData: ServiceData[] = [
  {
    id: "1",
    slug: "economic-empowerment",
    title: "Economic Empowerment",
    tagline: "Strategic Partnerships and Citizenship Investment Programs",
    description: "Empowering economic growth through strategic government partnerships, citizenship investment programs, and billion-euro direct investments across real estate, agriculture, and key industries.",
    color: "#3b82f6", // Blue

    hero: {
      headline: "Economic Empowerment",
      subheadline: "Strategic Partnerships & Citizenship Investment",
      description: "Empowering economic growth through strategic partnerships with governments, leveraging substantial billion-euro direct investments in real estate, agriculture, and industries.",
      mediaType: "video",
      mediaUrl: "https://arnn-group.s3.ap-south-1.amazonaws.com/New+Website+ARNN/Economic+Empowerment.mp4",
      badge: "Billion-Euro Investments",
      websitelink: "#",
      mobileMediaUrl: false
    },

    overview: {
      title: "Strategic Partnerships Driving Economic Growth",
      subtitle: "Our Mission",
      paragraphs: [
        "ARNN Group, through strategic partnerships with governments, has significantly expanded its engagement in citizenship investment programs. These initiatives primarily target key sectors such as real estate, agriculture, and industries, leveraging substantial billion-euro direct investments.",
        "The symbiotic relationships established through these collaborations serve as pivotal drivers for fostering economic growth. By actively engaging affluent investors, ARNN Group aids in attracting substantial capital inflows, thereby injecting vitality into local economies.",
        "This infusion of capital not only spurs economic activity but also plays a crucial role in creating employment opportunities within the region. Furthermore, these partnerships yield substantial revenue streams, contributing to the fiscal health of the respective governments.",
        "Beyond mere financial gains, the collaborations fostered by ARNN Group hold broader implications for global competitiveness. By leveraging its expertise and resources, ARNN Group assists in diversifying revenue streams, thus fortifying the economic resilience of the involved nations."
      ],
      highlights: [
        "Billion-euro direct investments in strategic sectors",
        "Citizenship investment programs with government partnerships",
        "Real estate, agriculture, and industrial development",
        "Attracting affluent investors and capital inflows",
        "Job creation and revenue generation for governments",
        "Talent attraction and brain gain initiatives"
      ],
      image: "https://arnn-group.s3.ap-south-1.amazonaws.com/New+Website+ARNN/Economic.png"
    },

    features: {
      title: "Comprehensive Investment Solutions",
      subtitle: "Key Focus Areas",
      layout: "bento",
      items: [
        {
          icon: "globe",
          title: "Citizenship Investment Programs",
          description: "Strategic partnerships with governments to facilitate citizenship investment programs that drive economic growth and attract global investors.",
          details: "Proven track record with European governments and ongoing initiatives worldwide."
        },
        {
          icon: "target",
          title: "Real Estate Development",
          description: "Substantial billion-euro investments in premium real estate projects that create jobs and stimulate local economies.",
          details: "From luxury residential to commercial developments across strategic locations."
        },
        {
          icon: "trending",
          title: "Agriculture & Industries",
          description: "Direct investments in agriculture and key industrial sectors, diversifying revenue streams and enhancing economic resilience.",
        },
        {
          icon: "users",
          title: "Talent Attraction",
          description: "Brain gain initiatives that attract skilled professionals from diverse backgrounds, enriching cultural fabric and global competitiveness.",
        },
        {
          icon: "award",
          title: "Government Partnerships",
          description: "Mutually beneficial collaborations with governments, navigating complex regulatory landscapes to deliver impactful economic development.",
        },
        {
          icon: "zap",
          title: "Capital Inflows",
          description: "Engaging affluent investors to inject substantial capital into local economies, spurring economic activity and fiscal health.",
        }
      ]
    },

    partnership: {
      title: "Partnership Model",
      subtitle: "How We Engage",
      intro: "Economic empowerment initiatives are typically structured through government alignment, investment pathways, and long-term sector activation across real estate, agriculture, and industry.",
      items: [
        {
          title: "Government alignment",
          description: "Engagements begin with policy, regulatory, and economic-development alignment to ensure the initiative supports national priorities and sector objectives.",
        },
        {
          title: "Investor structuring",
          description: "Capital participation models are assessed against project readiness, citizenship program parameters, and long-term economic impact expectations.",
        },
        {
          title: "Sector execution",
          description: "Once structured, projects move into sector-specific execution across real estate, agriculture, and industry with coordinated delivery oversight.",
        },
        {
          title: "Ongoing stewardship",
          description: "Partnerships remain focused on capital deployment discipline, stakeholder coordination, and sustainable value creation over time.",
        }
      ]
    },

    success: {
      title: "Representative Engagements",
      subtitle: "Selected Outcomes",
      stories: [
        {
          title: "Government-linked investment framework",
          description: "A structured engagement supporting policy alignment, investment review, and sector prioritization in a European market context.",
          achievement: "Established an execution framework linking investment participation with real estate and sector-development priorities",
          region: "Europe",
          icon: "award"
        },
        {
          title: "Cross-border economic coordination",
          description: "An ongoing multi-country engagement focused on investor alignment, talent attraction, and practical sector activation discussions.",
          achievement: "Supported stakeholder coordination around capital inflows, talent pathways, and longer-term economic participation",
          region: "Global",
          icon: "globe"
        }
      ]
    },

    cta: {
      headline: "Partner with ARNN Group for Sustainable Economic Growth",
      description: "Join our network of strategic partnerships that transcend financial transactions, fostering sustainable economic development, job creation, and global competitiveness.",
      buttonText: "Explore Partnership Opportunities",
      backgroundType: "gradient"
    },

    nextService: "real-estate-development",
    prevService: "food-beverage"
  },

  {
    id: "2",
    slug: "real-estate-development",
    title: "Real Estate Development",
    tagline: "Crafting Transformative Experiences",
    description: "Creating destinations that redefine urban landscapes through visionary design, cutting-edge technology, and meticulous planning, with a focus on hospitality excellence.",
    color: "#8b5cf6", // Purple

    hero: {
      headline: "Real Estate Development",
      subheadline: "Creators of Experiences, Champions of Sustainability",
      description: "Our commitment to excellence transcends construction—we craft transformative experiences that redefine urban landscapes and invigorate communities through hospitality-focused developments.",
      mediaType: "video",
      mediaUrl: "https://arnn-group.s3.ap-south-1.amazonaws.com/New+Website+ARNN/Real+estate.mp4",
      badge: "Hospitality Excellence",
      websitelink: "#",
      mobileMediaUrl: false
    },

    overview: {
      title: "Redefining Urban Landscapes Through Hospitality",
      subtitle: "Our Commitment",
      paragraphs: [
        "ARNN Group's commitment to excellence in real estate development transcends mere construction; it's a dedication to crafting transformative experiences that redefine urban landscapes and invigorate communities.",
        "Our focus on the hospitality sector underscores our belief in the power of spaces to shape human interactions and enhance quality of life. Through a blend of visionary design, cutting-edge technology, and meticulous planning, we aim to create destinations that not only meet the needs of today but also anticipate the desires of tomorrow.",
        "With a portfolio spanning luxury branded hotels, idyllic resorts, dynamic urban hubs, and sprawling commercial complexes, we showcase a versatility that is matched only by our unwavering commitment to quality. Each project is approached with an artist's eye for detail and a developer's pragmatism, ensuring that every aspect, from aesthetics to functionality, is meticulously considered.",
        "Central to our success is the cultivation of strategic partnerships and the leveraging of expertise from across the industry. By collaborating with top architects, designers, and consultants, we ensure that our projects benefit from the latest innovations and best practices, delivering unparalleled value to our clients and stakeholders."
      ],
      highlights: [
        "Luxury branded hotels and idyllic resorts",
        "Dynamic urban hubs and commercial complexes",
        "Strategic partnerships with top architects and designers",
        "Visionary design with cutting-edge technology",
        "Sustainability and community engagement focus",
        "Energy-efficient and environmentally responsible design"
      ],
      image: "https://arnn-group.s3.ap-south-1.amazonaws.com/New+Website+ARNN/Real+estate.png"
    },

    features: {
      title: "Excellence in Hospitality Development",
      subtitle: "Our Portfolio",
      layout: "bento",
      items: [
        {
          icon: "hotel",
          title: "Luxury Branded Hotels",
          description: "World-class hospitality properties featuring premium amenities, cutting-edge technology, and exceptional guest experiences that set new industry standards.",
          details: "Collaborating with international hotel brands to deliver iconic destinations."
        },
        {
          icon: "palmtree",
          title: "Idyllic Resorts",
          description: "Breathtaking resort destinations that harmonize with natural surroundings, offering guests unforgettable experiences in stunning locations.",
        },
        {
          icon: "building-2",
          title: "Dynamic Urban Hubs",
          description: "Mixed-use developments that blend hospitality, retail, and commercial spaces to create vibrant, self-sustaining urban communities.",
        },
        {
          icon: "briefcase",
          title: "Commercial Complexes",
          description: "Sprawling commercial developments featuring state-of-the-art infrastructure, sustainable design, and strategic locations for maximum business impact.",
        },
        {
          icon: "users",
          title: "Strategic Partnerships",
          description: "Collaborations with top architects, designers, and consultants to leverage industry expertise, latest innovations, and best practices.",
          details: "Ensuring unparalleled value for clients and stakeholders through expert collaboration."
        },
        {
          icon: "leaf",
          title: "Sustainable Development",
          description: "Energy-efficient design, eco-friendly practices, and community engagement initiatives that minimize environmental footprint and maximize positive regional impact.",
        }
      ]
    },

    stats: {
      title: "Development Snapshot",
      items: [
        { value: 12, label: "Projects Delivered", suffix: "+", icon: "building-2" },
        { value: 6, label: "Hospitality Assets", suffix: "+", icon: "hotel" },
        { value: 4, label: "Regional Markets", icon: "globe" },
        { value: 15, label: "Years in Sector", suffix: "+", icon: "award" }
      ]
    },

    partnership: {
      title: "Partnership Model",
      subtitle: "How We Engage",
      intro: "Real estate engagements are typically delivered through a coordinated model that combines concept planning, specialist collaboration, and phased execution discipline.",
      items: [
        {
          title: "Project qualification",
          description: "Opportunities are reviewed against location, hospitality relevance, development feasibility, and long-term commercial positioning.",
        },
        {
          title: "Design collaboration",
          description: "Architects, designers, and technical specialists are aligned early so that design intent and delivery realities remain connected throughout planning.",
        },
        {
          title: "Delivery structure",
          description: "Development is organized through clear scope, milestone oversight, and disciplined coordination across construction, operations, and stakeholder groups.",
        },
        {
          title: "Asset continuity",
          description: "The engagement model remains focused on operating value, asset quality, and sustained market relevance after launch.",
        }
      ]
    },

    faq: {
      title: "Business Q&A",
      items: [
        {
          question: "What type of developments are usually considered?",
          answer: "The focus is generally on hospitality-led assets, mixed-use environments, commercial complexes, and destination-driven developments with long-term operating relevance.",
        },
        {
          question: "How are design and delivery partners selected?",
          answer: "Partners are typically aligned according to project scale, technical capability, hospitality fit, and their ability to deliver consistently through each development phase.",
        },
        {
          question: "Does ARNN Group participate only in concept design?",
          answer: "No. Engagement is usually broader, spanning planning, structuring, specialist coordination, execution oversight, and continuity of asset value after delivery.",
        },
        {
          question: "How is sustainability addressed in the development model?",
          answer: "Sustainability is generally considered through planning decisions, energy efficiency, material choices, operational relevance, and the broader community impact of the asset.",
        }
      ]
    },

    process: {
      title: "Our Development Approach",
      subtitle: "From Vision to Reality",
      steps: [
        {
          title: "Visionary Design",
          description: "Artist's eye for detail combined with developer's pragmatism to create spaces that inspire and transform.",
          icon: "lightbulb",
          number: ""
        },
        {
          title: "Strategic Partnerships",
          description: "Collaborating with industry-leading architects, designers, and consultants to bring cutting-edge innovation to every project.",
          icon: "handshake",
          number: ""
        },
        {
          title: "Sustainable Planning",
          description: "Integrating energy-efficient design and community engagement to create environmentally responsible developments.",
          icon: "leaf",
          number: ""
        },
        {
          title: "Meticulous Execution",
          description: "Ensuring every aspect from aesthetics to functionality is carefully considered and flawlessly delivered.",
          icon: "target",
          number: ""
        }
      ]
    },

    success: {
      title: "Representative Engagements",
      subtitle: "Selected Outcomes",
      stories: [
        {
          title: "Hospitality-led development planning",
          description: "A development engagement centered on hospitality positioning, design coordination, and long-term asset relevance within a destination-led brief.",
          achievement: "Aligned concept planning, design input, and commercial direction for a hospitality-oriented asset pipeline",
          region: "Regional Markets",
          icon: "hotel"
        },
        {
          title: "Mixed-use urban delivery model",
          description: "A representative project involving commercial and urban-use coordination through specialist collaboration and phased development control.",
          achievement: "Structured a delivery model combining design input, development oversight, and sustainability considerations",
          region: "International",
          icon: "building-2"
        }
      ]
    },

    cta: {
      headline: "Join Us in Shaping Tomorrow's Cities",
      description: "ARNN Group is more than a developer; we are creators of experiences, stewards of progress, and champions of sustainability. Join us on our journey to shape the cities of tomorrow, today.",
      buttonText: "Explore Development Opportunities",
      backgroundType: "image",
      backgroundUrl: "https://images.unsplash.com/photo-1681216868987-b7268753b81c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBidWlsZGluZyUyMGRlc2lnbnxlbnwxfHx8fDE3NjMxOTU3NTd8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },

    nextService: "ict",
    prevService: "economic-empowerment"
  },

  // ICT Service
  {
    id: "3",
    slug: "ict",
    title: "Fintech, Crypto & Blockchain Innovation",
    tagline: "Pioneering Innovation in Digital Finance & Technology",
    description: "Building innovation across digital financial services, cryptocurrency solutions, server infrastructure, and B2C software development through a focused fintech and blockchain strategy.",
    color: "#10b981", // Green for tech/innovation

    hero: {
      headline: "Fintech, Crypto & Blockchain Innovation",
      subheadline: "Pioneering Innovation in Digital Finance & Technology",
      description: "ARNN Group is actively charting a course towards innovation within the Fintech, Crypto & Blockchain Innovation sector, with a strategic focus on digital financial services, cryptocurrency solutions, server infrastructure, and B2C software development.",
      mediaType: "video",
      mediaUrl: "https://arnn-group.s3.ap-south-1.amazonaws.com/New+Website+ARNN/ICT+Development+Strategy.mp4",
      badge: "Digital Innovation",
      websitelink: "#",
      mobileMediaUrl: false
    },

    overview: {
      title: "Driving Innovation in the Digital Era",
      subtitle: "Our Vision",
      paragraphs: [
        "ARNN Group is actively charting a course towards innovation within the Fintech, Crypto & Blockchain Innovation sector, with a strategic focus on digital financial services, cryptocurrency solutions, server infrastructure, and B2C software development.",
        "As we pave the way for future growth, our commitment to leveraging cutting-edge technologies remains unwavering. Through fintech and blockchain-driven initiatives, we aim to enhance accessibility, efficiency, security, and digital connectivity for users worldwide.",
        "Simultaneously, our foray into cryptocurrencies positions us at the forefront of digital finance, where we seek to pioneer groundbreaking solutions and investments. Complementing these endeavours, our initiatives in server solutions and software development underscore our dedication to providing robust infrastructure and intuitive platforms.",
        "With ongoing development and a steadfast commitment to innovation, ARNN Group is poised to make significant strides in the ICT sector, driving sustainable growth and shaping the future of technology."
      ],
      highlights: [
        "Strategic focus on fintech and digital financial services",
        "Pioneering cryptocurrency solutions and investments",
        "Advanced server infrastructure and cloud solutions",
        "B2C software development and intuitive platforms",
        "Cutting-edge technology integration",
        "Enhanced accessibility, efficiency, and security"
      ],
      image: "https://arnn-group.s3.ap-south-1.amazonaws.com/New+Website+ARNN/ICT+Development.png"
    },

    features: {
      title: "Comprehensive ICT Solutions",
      subtitle: "Our Technology Portfolio",
      layout: "bento",
      items: [
        {
          icon: "trending-up",
          title: "Fintech Innovation",
          description: "Redefining financial services through cutting-edge technology, enhancing accessibility, efficiency, and security for users worldwide.",
          details: "Digital payment systems, banking solutions, and financial platforms"
        },
        {
          icon: "bitcoin",
          title: "Cryptocurrency Solutions",
          description: "Pioneering groundbreaking solutions in digital finance, positioning at the forefront of blockchain technology and crypto investments.",
          details: "Blockchain integration, crypto trading platforms, and digital asset management"
        },
        {
          icon: "server",
          title: "Server Solutions",
          description: "Providing robust infrastructure and scalable server solutions to meet the evolving needs of modern businesses.",
          details: "Cloud infrastructure, data centers, and enterprise server management"
        },
        {
          icon: "code",
          title: "Software Development",
          description: "Creating intuitive B2C platforms and custom software solutions that enhance user experience and drive business growth.",
          details: "Web applications, mobile apps, and enterprise software solutions"
        },
        {
          icon: "shield-check",
          title: "Cybersecurity",
          description: "Ensuring the highest standards of security and data protection across all digital platforms and services.",
          details: "Advanced security protocols, data encryption, and threat prevention"
        },
        {
          icon: "zap",
          title: "Digital Transformation",
          description: "Helping businesses navigate the digital landscape with comprehensive technology solutions and strategic consulting.",
          details: "Technology consulting, system integration, and digital strategy"
        }
      ]
    },

    process: {
      title: "Our Development Approach",
      subtitle: "Innovation Pipeline",
      steps: [
        {
          number: "1",
          title: "Research & Analysis",
          description: "Identifying emerging technologies and market opportunities in the ICT sector through comprehensive research and analysis."
        },
        {
          number: "2",
          title: "Solution Design",
          description: "Architecting scalable and secure technology solutions tailored to meet specific business needs and user requirements."
        },
        {
          number: "3",
          title: "Development & Testing",
          description: "Building robust platforms with rigorous testing protocols to ensure reliability, security, and optimal performance."
        },
        {
          number: "4",
          title: "Deployment & Support",
          description: "Seamless implementation with ongoing support, maintenance, and continuous innovation to drive long-term success."
        }
      ]
    },

    stats: {
      title: "Operational Snapshot",
      items: [
        {
          value: 5,
          suffix: "+",
          label: "Technology Domains",
          description: "Fintech, Crypto, Servers, Software, and more"
        },
        {
          value: 24,
          suffix: "/7",
          label: "Infrastructure Support",
          description: "Round-the-clock infrastructure monitoring"
        },
        {
          value: 3,
          suffix: "+",
          label: "Delivery Markets",
          description: "Regional and cross-border digital deployments"
        },
        {
          value: 12,
          suffix: "+",
          label: "Implementation Partners",
          description: "Technology, hosting, and integration collaborators"
        }
      ]
    },

    partnership: {
      title: "Partnership Model",
      subtitle: "How We Engage",
      intro: "ICT engagements are generally shaped through solution design, implementation partnerships, and structured delivery oversight across digital products and infrastructure.",
      items: [
        {
          title: "Use-case definition",
          description: "Each engagement starts with a practical review of business requirements, technical scope, and target users or operating environments.",
        },
        {
          title: "Technology structuring",
          description: "The delivery model may combine internal development, infrastructure partners, and specialized integrations depending on the solution domain.",
        },
        {
          title: "Implementation control",
          description: "Execution is managed through staged development, security review, testing discipline, and deployment planning before go-live.",
        },
        {
          title: "Support continuity",
          description: "Post-launch engagement remains focused on maintenance, optimization, and long-term system reliability across the operating footprint.",
        }
      ]
    },

    faq: {
      title: "Business Q&A",
      items: [
        {
          question: "Which ICT areas are currently emphasized?",
          answer: "The business is generally oriented around fintech, digital finance, software platforms, server infrastructure, and selected emerging technology opportunities.",
        },
        {
          question: "Are solutions built internally or through partners?",
          answer: "The delivery model may combine internal execution with implementation, hosting, security, and integration partners depending on the project scope.",
        },
        {
          question: "How is security handled in digital engagements?",
          answer: "Security is typically embedded through technical review, infrastructure controls, testing discipline, and structured deployment processes rather than added as a final-stage measure.",
        },
        {
          question: "What makes an ICT engagement commercially viable?",
          answer: "Commercial viability is generally assessed through use-case clarity, operational practicality, implementation readiness, and long-term maintainability of the solution.",
        }
      ]
    },

    success: {
      title: "Representative Engagements",
      subtitle: "Selected Outcomes",
      stories: [
        {
          title: "Fintech platform implementation",
          description: "A digital-finance engagement focused on product structuring, user flow clarity, and secure service delivery in a fintech environment.",
          metrics: "Platform build and delivery support",
          achievement: "Supported solution design and implementation for a user-oriented financial platform",
          region: "Global",
          icon: "trending-up"
        },
        {
          title: "Digital-asset solution scoping",
          description: "A representative engagement in the cryptocurrency domain involving technical planning, operating review, and security-aware platform thinking.",
          metrics: "Structured digital-finance planning",
          achievement: "Advanced a delivery framework for blockchain and digital-asset related implementation",
          region: "International",
          icon: "bitcoin"
        },
        {
          title: "Infrastructure support environment",
          description: "An infrastructure engagement centered on server reliability, hosting coordination, and scalable backend support for business operations.",
          metrics: "Operational infrastructure support",
          achievement: "Established a more structured approach to server and hosting continuity across deployments",
          region: "Global",
          icon: "server"
        }
      ]
    },

    cta: {
      headline: "Partner with Us in Digital Innovation",
      description: "ARNN Group is shaping the future of technology through innovative ICT solutions. Join us on our journey to redefine digital finance, infrastructure, and software development.",
      buttonText: "Explore Technology Solutions",
      backgroundType: "image",
      backgroundUrl: "https://images.unsplash.com/photo-1760246964044-1384f71665b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB0ZWNoJTIwb2ZmaWNlJTIwaW5ub3ZhdGlvbnxlbnwxfHx8fDE3NjMxOTY2NDl8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },

    nextService: "agro-aquaculture",
    prevService: "real-estate-development"
  },

  {
    id: "4",
    slug: "agro-aquaculture",
    title: "Agro-Aquaculture",
    tagline: "Pioneering Sustainable Food Production with Advanced Technology",
    description: "Revolutionizing agriculture through cutting-edge technology, hydroponics, vertical farming, and state-of-the-art aquaculture systems for sustainable food production.",
    color: "#10b981", // Emerald Green

    hero: {
      headline: "Agro-Aquaculture",
      subheadline: "Technology-Driven Sustainable Food Production",
      description: "Pioneering agricultural innovation that seamlessly blends cutting-edge technology with traditional farming practices to revolutionize productivity, sustainability, and global food security.",
      mediaType: "video",
  
      mobileVideoUrl: "https://arnn-group.s3.ap-south-1.amazonaws.com/New+Website+ARNN/Agro-Aqua.mp4",
      badge: "Sustainable Innovation",
      mediaUrl: "https://arnn-group.s3.ap-south-1.amazonaws.com/New+Website+ARNN/Agro-Aqua.mp4",
      websitelink: "#",
      mobileMediaUrl: false
    },

    overview: {
      title: "Revolutionizing Agriculture Through Innovation",
      subtitle: "Our Vision",
      paragraphs: [
        "ARNN Group is at the forefront of pioneering agricultural endeavors that seamlessly blend cutting-edge technology with traditional farming practices to revolutionize productivity and sustainability. Our multifaceted initiatives encompass a wide spectrum of activities, from the cultivation of fruits and vegetables to the production and processing of fish.",
        "In our fruits and vegetables projects, we embrace a dynamic approach, integrating advanced agricultural techniques such as hydroponics, vertical farming, and precision agriculture. Through these methods, we cultivate premium-quality produce with unparalleled efficiency and consistency, ensuring a year-round supply to meet the demands of consumers.",
        "By harnessing the transformative potential of technology, we optimize resource utilization, minimize ecological footprint, and bolster yields, thereby addressing the escalating need for fresh, nutritious produce while upholding environmental stewardship.",
        "Moreover, our commitment to innovation extends to fish production and processing, where we employ state-of-the-art aquaculture systems and cutting-edge processing technologies. This meticulous approach guarantees the delivery of top-tier seafood products that not only meet but exceed consumer expectations in terms of quality, flavor, and safety."
      ],
      highlights: [
        "Hydroponics and vertical farming systems",
        "Precision agriculture with AI optimization",
        "State-of-the-art aquaculture facilities",
        "Year-round premium produce cultivation",
        "Sustainable resource utilization",
        "Advanced fish processing technologies"
      ],
      image: "https://arnn-group.s3.ap-south-1.amazonaws.com/New+Website+ARNN/Agro.png"
    },

    features: {
      title: "Advanced Agricultural Solutions",
      subtitle: "Innovation-Driven Farming",
      layout: "bento",
      items: [
        {
          icon: "sprout",
          title: "Hydroponics & Vertical Farming",
          description: "Revolutionary soil-free cultivation systems that maximize space efficiency and resource utilization with year-round premium produce.",
          details: "Advanced nutrient delivery systems with automated climate control"
        },
        {
          icon: "target",
          title: "Precision Agriculture",
          description: "AI-powered farming techniques leveraging data analytics, IoT sensors, and drone technology to optimize crop yields and minimize waste.",
          details: "Real-time monitoring and predictive analytics for maximum efficiency"
        },
        {
          icon: "waves",
          title: "Advanced Aquaculture Systems",
          description: "State-of-the-art fish production facilities utilizing recirculating aquaculture systems (RAS) for sustainable and efficient seafood production.",
          details: "Closed-loop systems with water recycling and optimal fish health management"
        },
        {
          icon: "leaf",
          title: "Sustainable Practices",
          description: "Environmentally responsible farming methods that minimize ecological footprint while maximizing productivity and quality.",
          details: "Reduced water usage, zero pesticides, and renewable energy integration"
        },
        {
          icon: "package",
          title: "Fish Processing Excellence",
          description: "Cutting-edge processing technologies ensuring premium seafood quality, safety, and extended shelf life with full traceability.",
          details: "HACCP-certified facilities with advanced cold chain management"
        },
        {
          icon: "line-chart",
          title: "Year-Round Production",
          description: "Climate-controlled environments enabling consistent, high-quality produce supply regardless of seasonal variations.",
          details: "Guaranteed supply chains with predictable yields and quality"
        }
      ]
    },

    process: {
      title: "Our Agricultural Innovation Process",
      subtitle: "From Concept to Harvest",
      steps: [
        {
          number: "1",
          title: "Research & Development",
          description: "Conducting comprehensive research on cutting-edge agricultural technologies, crop selection, and sustainable farming methodologies tailored to regional needs."
        },
        {
          number: "2",
          title: "Infrastructure Development",
          description: "Building state-of-the-art facilities including hydroponic systems, vertical farms, aquaculture tanks, and processing units with advanced automation."
        },
        {
          number: "3",
          title: "Cultivation & Production",
          description: "Implementing precision farming techniques with continuous monitoring, optimization, and quality control to ensure premium produce and seafood."
        },
        {
          number: "4",
          title: "Processing & Distribution",
          description: "Utilizing advanced processing technologies and efficient supply chain management to deliver fresh, high-quality products to markets worldwide."
        }
      ]
    },

    stats: {
      title: "Production Snapshot",
      items: [
        {
          value: 70,
          suffix: "%",
          label: "Water Use Reduction",
          icon: "droplet"
        },
        {
          value: 12,
          label: "Operating Months",
          icon: "calendar"
        },
        {
          value: 8,
          suffix: "+",
          label: "Production Lines",
          icon: "sprout"
        },
        {
          value: 3,
          suffix: "+",
          label: "Cultivation Models",
          icon: "leaf"
        }
      ]
    },

    partnership: {
      title: "Partnership Model",
      subtitle: "How We Engage",
      intro: "Agro-aquaculture initiatives are usually structured through production planning, technology integration, and operating coordination across cultivation and processing environments.",
      items: [
        {
          title: "Site and model review",
          description: "Engagement begins with assessment of cultivation conditions, infrastructure requirements, water systems, and appropriate production models.",
        },
        {
          title: "Technical integration",
          description: "The operating model may combine hydroponics, aquaculture systems, precision tools, and controlled-environment methods based on project suitability.",
        },
        {
          title: "Production management",
          description: "Execution is guided through phased cultivation, quality oversight, and processing alignment to maintain dependable output standards.",
        },
        {
          title: "Supply continuity",
          description: "Partnerships remain focused on operational efficiency, product consistency, and long-term supply-chain resilience.",
        }
      ]
    },

    faq: {
      title: "Business Q&A",
      items: [
        {
          question: "What production models are typically used?",
          answer: "The model may combine hydroponics, controlled-environment farming, aquaculture systems, and conventional techniques depending on site conditions and output goals.",
        },
        {
          question: "How is sustainability built into the operating approach?",
          answer: "Sustainability is usually addressed through water efficiency, controlled inputs, production consistency, and practical resource optimization across the cultivation model.",
        },
        {
          question: "Can this sector support year-round production?",
          answer: "Yes, where infrastructure and environmental controls are suitable, the model is designed to support more stable output across seasons and supply cycles.",
        },
        {
          question: "What kind of partnerships are most relevant here?",
          answer: "Typical partnerships may involve landholders, infrastructure providers, technology partners, cultivation specialists, and processing or distribution stakeholders.",
        }
      ]
    },

    success: {
      title: "Representative Engagements",
      subtitle: "Selected Outcomes",
      stories: [
        {
          title: "Controlled-environment produce model",
          description: "A representative cultivation setup focused on controlled growing conditions, water efficiency, and stable premium produce output.",
          achievement: "Demonstrated a repeatable production model for year-round produce planning in a controlled environment",
          region: "Regional Operations",
          icon: "sprout"
        },
        {
          title: "Aquaculture operations framework",
          description: "A production engagement built around aquaculture system planning, output quality, and resource-conscious operating controls.",
          achievement: "Established an operating approach linking aquaculture efficiency with quality and environmental discipline",
          region: "Coastal Facilities",
          icon: "waves"
        },
        {
          title: "Urban cultivation pilot",
          description: "A representative vertical-farming model oriented around space-efficient production and stable urban supply conditions.",
          achievement: "Validated a compact cultivation format suited to controlled-output urban production",
          region: "Urban Centers",
          icon: "building"
        }
      ]
    },

    cta: {
      headline: "Join the Agricultural Revolution",
      description: "ARNN Group is transforming food production through innovative agro-aquaculture solutions. Partner with us to build a sustainable future where technology and nature work in harmony.",
      buttonText: "Explore Agro-Aquaculture Solutions",
      backgroundType: "image",
      backgroundUrl: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmVlbmhvdXNlJTIwZmFybWluZ3xlbnwxfHx8fDE3NjMxOTg3MDZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },

    nextService: "fashion-industries",
    prevService: "ict"
  },

  {
    id: "5",
    slug: "fashion-industries",
    title: "Fashion Industries",
    tagline: "Redefining Elegance Through LussoCollezioni",
    description: "A distinguished leader in the fashion world, offering meticulously curated collections of jewelry, clothing, shoes, and accessories that blend timeless elegance with contemporary style.",
    color: "#ec4899", // Rose/Pink for fashion

    hero: {
      headline: "Fashion Industries",
      subheadline: "LussoCollezioni - Where Elegance Meets Innovation",
      description: "ARNN Group stands as a distinguished leader in the vibrant world of fashion, renowned for our unwavering commitment to redefine elegance and inspire through meticulously curated collections.",
      mediaType: "video",
      mediaUrl: lussocollezionivid,
      mobileVideoUrl: "https://cdn.shopify.com/videos/c/o/v/426bc9896abe4affbc20360f0a8a0796.mp4",
      badge: "Timeless Elegance",
      businessLogoUrl: lussocollezioni,
      websitelink: "https://lussocollezioni.com",
      mobileMediaUrl: false
    },

    overview: {
      title: "Crafting Timeless Elegance with Impeccable Detail",
      subtitle: "Our Heritage",
      paragraphs: [
        "ARNN Group stands as a distinguished leader in the vibrant world of fashion, renowned for our unwavering commitment to redefine elegance and inspire through our meticulously curated collections of jewelry, clothing, shoes, and accessories. With a rich heritage in quality craftsmanship and innovative design, we cater to discerning individuals worldwide who seek timeless pieces that exude sophistication and attention to detail.",
        "At ARNN Group, we are dedicated to pushing the boundaries of style and setting new trends. Our designs harmoniously blend classic elegance with contemporary influences, ensuring each creation resonates uniquely with our customers' personal tastes. Whether you're in search of a statement-making necklace, a versatile dress for any occasion, or the perfect pair of shoes to complete your ensemble, our diverse range promises to elevate your wardrobe with grace and allure.",
        "Driven by a passion for creativity and a steadfast commitment to sustainability, we uphold ethical practices across our production processes. From responsibly sourced materials to initiatives that positively impact our communities, our values are woven into every aspect of our business.",
        "With a steadfast focus on exceeding expectations, we strive to deliver exceptional service and personalized experiences that consistently delight our clientele. Discover why ARNN Group is trusted by fashion enthusiasts worldwide for our dedication to quality, style, and impeccable craftsmanship. Join us on a journey where each piece tells a story of elegance, innovation, and enduring beauty."
      ],
      highlights: [
        "Meticulously curated jewelry collections",
        "Versatile clothing for every occasion",
        "Premium shoes and accessories",
        "Sustainable and ethical production practices",
        "Classic elegance with contemporary influences",
        "Personalized customer experiences"
      ],
      image: "https://arnn-group.s3.ap-south-1.amazonaws.com/New+Website+ARNN/Fashion.png"
    },

    features: {
      title: "Our Fashion Collections",
      subtitle: "LussoCollezioni Portfolio",
      layout: "bento",
      items: [
        {
          icon: "gem",
          title: "Exquisite Jewelry",
          description: "Statement-making necklaces, bracelets, earrings, and rings that blend timeless elegance with modern design, crafted with precision and attention to detail.",
          details: "Ethically sourced materials, handcrafted excellence, and unique designs"
        },
        {
          icon: "shirt",
          title: "Designer Clothing",
          description: "Versatile clothing collections for every occasion, harmoniously blending classic elegance with contemporary influences to suit individual tastes.",
          details: "Premium fabrics, perfect fit, and sustainable production"
        },
        {
          icon: "footprints",
          title: "Premium Footwear",
          description: "The perfect pairs of shoes to complete any ensemble, combining comfort with sophisticated style and impeccable craftsmanship.",
          details: "Italian craftsmanship, comfort-focused design, and lasting quality"
        },
        {
          icon: "briefcase",
          title: "Elegant Accessories",
          description: "Carefully curated accessories including bags, belts, scarves, and more that add the finishing touch to any outfit with grace and allure.",
          details: "Attention to detail, functional elegance, and timeless appeal"
        },
        {
          icon: "leaf",
          title: "Sustainable Fashion",
          description: "Ethical production practices with responsibly sourced materials and community-positive initiatives woven into every aspect of our business.",
          details: "Eco-friendly materials, fair trade practices, and carbon-neutral shipping"
        },
        {
          icon: "sparkles",
          title: "Trend Innovation",
          description: "Setting new trends and pushing the boundaries of style while maintaining our commitment to quality craftsmanship and customer satisfaction.",
          details: "Fashion-forward designs, seasonal collections, and exclusive pieces"
        }
      ]
    },

    process: {
      title: "Our Design Philosophy",
      subtitle: "From Concept to Creation",
      steps: [
        {
          number: "1",
          title: "Inspiration & Research",
          description: "Drawing inspiration from global fashion trends, cultural heritage, and customer insights to create designs that resonate with individual tastes and contemporary aesthetics."
        },
        {
          number: "2",
          title: "Ethical Sourcing",
          description: "Carefully selecting responsibly sourced materials and partnering with ethical suppliers who share our commitment to sustainability and quality craftsmanship."
        },
        {
          number: "3",
          title: "Artisan Craftsmanship",
          description: "Employing skilled artisans who bring each design to life with meticulous attention to detail, ensuring every piece meets our exacting standards of excellence."
        },
        {
          number: "4",
          title: "Quality Assurance",
          description: "Rigorous quality control processes and personalized customer service to ensure exceptional products and experiences that exceed expectations."
        }
      ]
    },

    partnership: {
      title: "Partnership Model",
      subtitle: "How We Engage",
      intro: "Fashion engagements are typically shaped around brand curation, production coordination, and controlled market positioning across product categories and channels.",
      items: [
        {
          title: "Brand and range review",
          description: "Initial engagement focuses on product identity, category scope, customer profile, and brand positioning across target markets.",
        },
        {
          title: "Sourcing and production",
          description: "Materials, manufacturing partners, and quality expectations are aligned to preserve consistency across design, craftsmanship, and delivery.",
        },
        {
          title: "Channel execution",
          description: "The operating model may support retail, brand partnerships, or digital channels depending on the commercial structure of the collection.",
        },
        {
          title: "Brand continuity",
          description: "Ongoing engagement remains centered on product integrity, controlled expansion, and long-term brand trust.",
        }
      ]
    },

    success: {
      title: "Representative Engagements",
      subtitle: "Selected Outcomes",
      stories: [
        {
          title: "Brand-led collection rollout",
          description: "A representative fashion engagement focused on product curation, brand consistency, and controlled presentation across multiple categories.",
          achievement: "Supported brand positioning through a disciplined collection and channel structure",
          region: "Global",
          icon: "gem"
        },
        {
          title: "Responsible sourcing approach",
          description: "An operating model emphasizing sourcing discipline, production partner review, and consistency in quality and material standards.",
          achievement: "Strengthened the link between product identity, sourcing quality, and controlled production continuity",
          region: "International",
          icon: "leaf"
        },
        {
          title: "Customer experience refinement",
          description: "A retail-facing engagement focused on presentation quality, service consistency, and stronger alignment between product offering and client expectations.",
          achievement: "Improved customer-facing consistency across product, service, and brand experience touchpoints",
          region: "Worldwide",
          icon: "heart"
        }
      ]
    },

    cta: {
      headline: "Discover Timeless Elegance with LussoCollezioni",
      description: "Join us on a journey where each piece tells a story of elegance, innovation, and enduring beauty. Experience fashion that exceeds expectations.",
      buttonText: "Visit LussoCollezioni",
      buttonLink: "https://www.lussocollezioni.com",
      backgroundType: "image",
      backgroundUrl: "https://images.unsplash.com/photo-1652701666551-9df39e7cdb04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwY2xvdGhpbmclMjBjb2xsZWN0aW9ufGVufDF8fHx8MTc2MzIwNzEyNXww&ixlib=rb-4.1.0&q=80&w=1080"
    },

    nextService: "empowering-global-talent",
    prevService: "agro-aquaculture"
  },

  {
    id: "6",
    slug: "empowering-global-talent",
    title: "Empowering Global Talent",
    tagline: "Redefining Global Workforce Through WiseBell Global",
    description: "An innovative platform connecting skilled and unskilled talent with verified international employment opportunities through secure, transparent, and technology-driven solutions.",
    color: "#06b6d4", // Cyan for global connectivity

    hero: {
      headline: "Empowering Global Talent",
      subheadline: "WiseBell Global - Redefining Global Workforce & Recruitment",
      description: "Conceived and led by ARNN Group, WiseBell Global is an innovative platform redefining the global workforce and recruitment landscape through secure, transparent, and technology-driven solutions.",
      mediaType: "video",
      mediaUrl: economicEmpowermentVideo,
      mobileVideoUrl: "https://cdn.shopify.com/videos/c/o/v/90f4f6ec75d341e0903daf1d9e5cba91.mp4",
      badge: "Ethical Recruitment",
      businessLogoUrl: wisebellLogo,
      websitelink: "https://www.wisebellglobal.com",
      mobileMediaUrl: false
    },

    overview: {
      title: "Building the Future of Ethical Global Recruitment",
      subtitle: "Our Mission",
      paragraphs: [
        "At its core, WiseBell Global is committed to eliminating barriers for skilled and unskilled talent, connecting them with verified international employment opportunities while upholding the highest standards of ethical recruitment and worker protection. The platform leverages advanced digital tools and AI-powered verification systems to ensure seamless matchmaking between employers and job seekers, while also combating fraud and malpractice in cross-border recruitment.",
        "A central mission of WiseBell Global is to empower job seekers not just as employees, but as future micro-entrepreneurs and stakeholders in the global economy. Through worker-to-owner pathways and accessible upskilling initiatives, individuals are given the opportunity to grow beyond traditional employment—fostering financial inclusion and upward social mobility.",
        "WiseBell Global's model further extends benefits to local economies by facilitating remittance flows, knowledge transfer, and community development, particularly in regions with high migration and labor export potential. The platform's transparent, end-to-end process safeguards both employer interests and worker rights, supporting safe, legitimate migration while minimizing risks for all stakeholders.",
        "ARNN Group's strategic advisory, combined with robust partnerships with governments, employers, and compliance bodies, ensures that WiseBell Global operates in full alignment with international labor standards. Governments, employers, training institutes, and technology partners are invited to join us in building a new standard for responsible global recruitment—creating opportunities for inclusive growth, ethical employment, and shared prosperity in the modern workforce."
      ],
      highlights: [
        "AI-powered verification and matchmaking systems",
        "Ethical recruitment and worker protection standards",
        "Worker-to-owner pathways and upskilling initiatives",
        "Cross-border fraud prevention and compliance",
        "International labor standards alignment",
        "Community development and knowledge transfer"
      ],
      image: "https://arnn-group.s3.ap-south-1.amazonaws.com/New+Website+ARNN/WiseBell.png"
    },

    features: {
      title: "Comprehensive Recruitment Ecosystem",
      subtitle: "Platform Features",
      layout: "bento",
      items: [
        {
          icon: "shield-check",
          title: "AI-Powered Verification",
          description: "Advanced digital tools and AI systems ensuring secure, transparent verification of both employers and job seekers, combating fraud and malpractice in cross-border recruitment.",
          details: "Real-time credential verification, employer validation, and fraud detection"
        },
        {
          icon: "users",
          title: "Ethical Recruitment Standards",
          description: "Upholding the highest standards of ethical recruitment and worker protection, ensuring all opportunities meet international labor standards and compliance requirements.",
          details: "International labor law compliance, worker rights protection, transparent processes"
        },
        {
          icon: "trending-up",
          title: "Worker-to-Owner Pathways",
          description: "Empowering job seekers as future micro-entrepreneurs and stakeholders through accessible pathways that foster financial inclusion and upward social mobility.",
          details: "Entrepreneurship programs, equity opportunities, financial literacy training"
        },
        {
          icon: "graduation-cap",
          title: "Upskilling Initiatives",
          description: "Comprehensive training and development programs that enable workers to grow beyond traditional employment and access higher-value opportunities.",
          details: "Skills training, certification programs, continuous learning platforms"
        },
        {
          icon: "globe",
          title: "Global Matchmaking",
          description: "Seamless connection between verified international employers and qualified talent across skilled and unskilled labor markets worldwide.",
          details: "Smart matching algorithms, multi-language support, cultural integration assistance"
        },
        {
          icon: "handshake",
          title: "Government Partnerships",
          description: "Strategic collaborations with governments, compliance bodies, and international organizations to ensure legitimate, safe migration and worker protection.",
          details: "Policy alignment, regulatory compliance, bilateral agreements support"
        }
      ]
    },

    process: {
      title: "Our Recruitment Journey",
      subtitle: "End-to-End Process",
      steps: [
        {
          number: "1",
          title: "Registration & Verification",
          description: "Job seekers and employers undergo comprehensive AI-powered verification ensuring authenticity, credentials validation, and compliance with international standards."
        },
        {
          number: "2",
          title: "Smart Matching & Placement",
          description: "Advanced algorithms match qualified talent with verified opportunities based on skills, experience, location preferences, and career aspirations."
        },
        {
          number: "3",
          title: "Onboarding & Training",
          description: "Selected candidates receive comprehensive pre-departure orientation, skills training, cultural preparation, and legal compliance support."
        },
        {
          number: "4",
          title: "Ongoing Support & Growth",
          description: "Continuous support throughout employment including upskilling opportunities, worker-to-owner pathways, remittance facilitation, and career advancement."
        }
      ]
    },

    stats: {
      title: "Platform Snapshot",
      items: [
        {
          value: 350,
          suffix: "+",
          label: "Worker Placements",
          icon: "users"
        },
        {
          value: 8,
          suffix: "+",
          label: "Hiring Corridors",
          icon: "globe"
        },
        {
          value: 25,
          suffix: "+",
          label: "Employer Partners",
          icon: "shield-check"
        },
        {
          value: 6,
          suffix: "+",
          label: "Training Tracks",
          icon: "briefcase"
        }
      ]
    },

    partnership: {
      title: "Partnership Model",
      subtitle: "How We Engage",
      intro: "Global talent engagements are generally structured through platform governance, employer verification, worker protection standards, and cross-border coordination.",
      items: [
        {
          title: "Stakeholder qualification",
          description: "Employers, workers, and institutional participants are reviewed against platform standards, compliance needs, and operational fit before activation.",
        },
        {
          title: "Placement framework",
          description: "The engagement model aligns verification, job matching, training pathways, and documentation requirements into one coordinated structure.",
        },
        {
          title: "Compliance oversight",
          description: "Delivery is supported by ethical recruitment controls, partner coordination, and procedural safeguards throughout the placement cycle.",
        },
        {
          title: "Worker continuity",
          description: "The model remains focused on long-term worker support, upskilling pathways, and sustainable employer-worker outcomes after placement.",
        }
      ]
    },

    faq: {
      title: "Business Q&A",
      items: [
        {
          question: "How does the platform protect both workers and employers?",
          answer: "The model typically relies on verification controls, structured onboarding, employer screening, and process transparency to reduce risk across both sides of the placement cycle.",
        },
        {
          question: "What kinds of employers are usually suitable partners?",
          answer: "Suitable partners are generally those able to meet verification, compliance, and worker-protection expectations within the platform’s operating framework.",
        },
        {
          question: "Does the model stop at placement?",
          answer: "No. The structure is intended to extend into onboarding, training, support continuity, and longer-term worker development where appropriate.",
        },
        {
          question: "How does WiseBell Global fit within ARNN Group’s wider model?",
          answer: "It functions as a structured talent and workforce platform that connects commercial opportunity with ethical process, worker mobility, and long-term stakeholder value.",
        }
      ]
    },

    success: {
      title: "Representative Engagements",
      subtitle: "Selected Outcomes",
      stories: [
        {
          title: "Verified recruitment workflow",
          description: "A platform engagement centered on verification controls, employer review, and more transparent worker-employer matching workflows.",
          achievement: "Established a structured recruitment process with stronger screening and verification discipline",
          region: "Global Platform",
          icon: "shield-check"
        },
        {
          title: "Worker development pathways",
          description: "A representative engagement combining placement support, training tracks, and longer-term worker development planning.",
          achievement: "Connected placement activity with more durable worker-support and upskilling pathways",
          region: "International",
          icon: "trending-up"
        },
        {
          title: "Compliance-linked partner network",
          description: "An institutional engagement focused on employer quality, compliance alignment, and safer cross-border recruitment coordination.",
          achievement: "Strengthened coordination between platform operations, employer standards, and compliance expectations",
          region: "Worldwide",
          icon: "handshake"
        }
      ]
    },

    cta: {
      headline: "Join the Future of Ethical Global Recruitment",
      description: "Governments, employers, training institutes, and technology partners are invited to join ARNN Group and WiseBell Global in building a new standard for responsible global recruitment—creating opportunities for inclusive growth, ethical employment, and shared prosperity.",
      buttonText: "Visit WiseBell Global",
      buttonLink: "https://www.wisebellglobal.com",
      backgroundType: "image",
      backgroundUrl: "https://images.unsplash.com/photo-1758873268631-fa944fc5cad2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwcHJvZmVzc2lvbmFscyUyMHRlYW18ZW58MXx8fHwxNzYzMjA3NTQ5fDA&ixlib=rb-4.1.0&q=80&w=1080"
    },

    nextService: "healthcare-access",
    prevService: "fashion-industries"
  },

  {
    id: "7",
    slug: "healthcare-access",
    title: "Global Healthcare",
    tagline: "MedNero - Your Gateway to World-Class Healthcare",
    description: "A pioneering hybrid telehealth and medical travel platform connecting patients with world-class medical expertise through secure, reliable, and personalized healthcare solutions.",
    color: "#f43f5e", // Rose/Red for healthcare

    hero: {
      headline: "Global Healthcare",
      subheadline: "MedNero - Secure, Reliable Healthcare Anytime, Anywhere",
      description: "Your gateway to secure, reliable, and world-class healthcare—anytime, anywhere. A pioneering hybrid telehealth and medical travel platform transforming global healthcare access.",
      mediaType: "video",
      mediaUrl: mednerovidro,
      mobileVideoUrl: "https://cdn.shopify.com/videos/c/o/v/e98a538a81b845f0bf24622a37167816.mp4",
      badge: "World-Class Care",
      businessLogoUrl: mednero,
      websitelink: "https://mednero.com",
      mobileMediaUrl: false
    },

    overview: {
      title: "Connecting Patients with World-Class Medical Excellence",
      subtitle: "Our Mission",
      paragraphs: [
        "Mednero Medical Treatment Facilitation Services LLC, based in Dubai, UAE, proudly presents MedNero—a pioneering hybrid telehealth and medical travel platform dedicated to transforming global healthcare access. Our mission is simple yet powerful: to connect patients with world-class medical expertise and facilities through a seamless blend of digital innovation and personalized support.",
        "With an established presence across the Middle East, Africa, and South Asia, MedNero responds to the rising demand for reliable cross-border healthcare solutions. By integrating virtual consultations, second opinions, and in-person treatment coordination, we ensure that every patient receives care tailored to their specific needs—whether remotely or through carefully arranged medical travel.",
        "MedNero partners with leading international hospitals and certified specialists to provide comprehensive services, including teleconsultations, expert advice, and end-to-end medical travel arrangements. This patient-focused model empowers individuals to make informed decisions, gain timely access to treatment, and experience the highest standards of privacy, safety, and transparency.",
        "A major advantage of MedNero is its foreign currency savings. Many cases are effectively managed via teleconsultations, reducing the need for costly overseas travel and helping nations preserve vital currency reserves. For patients requiring treatment abroad, MedNero provides transparent pricing and full concierge support—including visas, interpreters, travel, and hospital bookings—removing unnecessary costs and protecting patients from fraudulent intermediaries."
      ],
      highlights: [
        "Hybrid telehealth and medical travel platform",
        "Presence across Middle East, Africa, and South Asia",
        "Virtual consultations and second opinions",
        "End-to-end medical travel arrangements",
        "Foreign currency savings through teleconsultations",
        "Transparent pricing and full concierge support"
      ],
      image: "https://arnn-group.s3.ap-south-1.amazonaws.com/New+Website+ARNN/HealthCare.png"
    },

    features: {
      title: "Comprehensive Healthcare Solutions",
      subtitle: "Platform Services",
      layout: "bento",
      items: [
        {
          icon: "video",
          title: "Virtual Teleconsultations",
          description: "Connect with world-class specialists through secure video consultations, receiving expert medical advice remotely without costly international travel.",
          details: "HIPAA-compliant platform, multilingual support, 24/7 availability"
        },
        {
          icon: "stethoscope",
          title: "Expert Second Opinions",
          description: "Access second opinions from leading international specialists to ensure confident, informed healthcare decisions and optimal treatment plans.",
          details: "Board-certified specialists, comprehensive reviews, detailed reports"
        },
        {
          icon: "plane",
          title: "Medical Travel Coordination",
          description: "End-to-end support for international treatment including visas, interpreters, travel arrangements, and hospital bookings with transparent pricing.",
          details: "Full concierge service, cost transparency, fraud protection"
        },
        {
          icon: "hospital",
          title: "Partner Hospital Network",
          description: "Partnerships with leading international hospitals and certified specialists ensuring access to world-class facilities and cutting-edge treatments.",
          details: "JCI-accredited facilities, top-tier specialists, advanced technology"
        },
        {
          icon: "shield",
          title: "Privacy & Security",
          description: "Highest standards of privacy, safety, and data protection through secure multilingual technology and HIPAA-compliant systems.",
          details: "End-to-end encryption, GDPR compliance, secure data storage"
        },
        {
          icon: "dollar-sign",
          title: "Currency Savings",
          description: "Significant foreign currency savings by managing cases via teleconsultations, reducing unnecessary overseas travel and preserving national reserves.",
          details: "Cost-effective solutions, transparent pricing, no hidden fees"
        }
      ]
    },

    process: {
      title: "Your Healthcare Journey",
      subtitle: "Seamless Care Experience",
      steps: [
        {
          number: "1",
          title: "Initial Consultation",
          description: "Connect with our healthcare coordinators to discuss your medical needs, review history, and determine the best care pathway—virtual or in-person."
        },
        {
          number: "2",
          title: "Specialist Matching",
          description: "Get matched with leading international specialists and facilities based on your condition, preferences, and treatment requirements."
        },
        {
          number: "3",
          title: "Care Delivery",
          description: "Receive teleconsultations, second opinions, or coordinated medical travel with full concierge support including visas, travel, and hospital arrangements."
        },
        {
          number: "4",
          title: "Follow-up Support",
          description: "Ongoing care coordination, follow-up consultations, and continuous support ensuring optimal recovery and long-term health outcomes."
        }
      ]
    },

    stats: {
      title: "Care Network Snapshot",
      items: [
        {
          value: 1200,
          suffix: "+",
          label: "Patients Guided",
          icon: "users"
        },
        {
          value: 3,
          label: "Care Regions",
          icon: "globe"
        },
        {
          value: 18,
          suffix: "+",
          label: "Partner Hospitals",
          icon: "hospital"
        },
        {
          value: 4,
          suffix: "+",
          label: "Care Pathways",
          icon: "trending-down"
        }
      ]
    },

    partnership: {
      title: "Partnership Model",
      subtitle: "How We Engage",
      intro: "Healthcare engagements are usually coordinated through patient intake, provider-network alignment, and structured care pathways across telehealth and medical travel.",
      items: [
        {
          title: "Care assessment",
          description: "Every engagement starts with clinical need review, patient context, and determination of the most appropriate remote or in-person care pathway.",
        },
        {
          title: "Provider coordination",
          description: "Hospitals, specialists, and support teams are matched to the case based on treatment requirements, geography, and continuity of care.",
        },
        {
          title: "Journey management",
          description: "Execution combines consultation scheduling, documentation, travel planning where required, and clear patient support throughout the process.",
        },
        {
          title: "Post-care follow-through",
          description: "Ongoing coordination remains focused on follow-up, communication continuity, and secure handling of the broader patient journey.",
        }
      ]
    },

    faq: {
      title: "Business Q&A",
      items: [
        {
          question: "When is telehealth typically sufficient and when is travel needed?",
          answer: "Telehealth is generally suitable for initial consultation, review, and second opinion, while travel is considered when in-person diagnostics or treatment are operationally necessary.",
        },
        {
          question: "How are hospitals and specialists selected?",
          answer: "Selection is usually based on treatment relevance, network suitability, care continuity, and the practical needs of the patient journey.",
        },
        {
          question: "What kind of support is provided during medical travel?",
          answer: "Support may include documentation coordination, bookings, travel planning, interpretation needs, and structured communication across the treatment pathway.",
        },
        {
          question: "How is trust maintained in cross-border care coordination?",
          answer: "Trust is typically maintained through verified provider networks, clear patient communication, secure information handling, and transparent coordination processes.",
        }
      ]
    },

    success: {
      title: "Representative Engagements",
      subtitle: "Selected Outcomes",
      stories: [
        {
          title: "Teleconsultation-led care pathway",
          description: "A representative healthcare engagement built around remote review, patient coordination, and specialist access before travel is considered.",
          achievement: "Demonstrated a care model where teleconsultation can reduce unnecessary travel and improve case triage",
          region: "Middle East, Africa, South Asia",
          icon: "video"
        },
        {
          title: "International treatment coordination",
          description: "A medical-travel support model focused on hospital matching, documentation handling, and more transparent travel-linked care planning.",
          achievement: "Established a more structured pathway for cross-border treatment coordination and patient support",
          region: "International",
          icon: "plane"
        },
        {
          title: "Patient communication framework",
          description: "A representative patient-support engagement centered on clear communication, privacy, and multilingual coordination through the care journey.",
          achievement: "Improved the quality of patient guidance, decision support, and continuity across care interactions",
          region: "Global",
          icon: "heart"
        }
      ]
    },

    cta: {
      headline: "Experience World-Class Healthcare Access",
      description: "MedNero envisions a world where exceptional healthcare is accessible, affordable, and dependable for all—regardless of geography, language, or financial means. Join us in making quality medical care a universal right.",
      buttonText: "Visit MedNero",
      buttonLink: "https://www.mednero.com",
      backgroundType: "image",
      backgroundUrl: "https://images.unsplash.com/photo-1710074213379-2a9c2653046a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3NwaXRhbCUyMGhlYWx0aGNhcmUlMjBmYWNpbGl0eXxlbnwxfHx8fDE3NjMyMDgzOTd8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },

    nextService: "food-safety",
    prevService: "empowering-global-talent"
  },

  {
    id: "8",
    slug: "food-safety",
    title: "AgriFuture Global",
    tagline: "AgriFuture Global - Transforming Land for Food Security",
    description: "A visionary program transforming idle and underutilized land across GCC, Africa, and Europe into thriving agricultural zones that directly contribute to global food security.",
    color: "#16a34a", // Green for agriculture

    hero: {
      headline: "A Global Initiative for World Food Safety",
      subheadline: "AgriFuture Global - Sustainable Agriculture for Global Food Security",
      description: "Initiated and led by ARNN Group, AgriFuture Global transforms idle and underutilized land into thriving agricultural zones through modern innovation and traditional farming methods.",
     businessLogoUrl: agrifuturesglobal,
      mediaType: "video",
      mediaUrl: "https://www.youtube.com/watch?v=0-Sx9Br46g8",
      websitelink: "https://www.agrifutureglobal.com/",
      mobileMediaUrl: false
    },

    overview: {
      title: "Transforming Idle Land into Food Security Solutions",
      subtitle: "Our Vision",
      paragraphs: [
        "Initiated and led by ARNN Group, AgriFuture Global is a visionary program dedicated to transforming idle and underutilized land across the GCC, Africa, and Europe into thriving agricultural zones that directly contribute to global food security. Central to this initiative is the identification and activation of vast stretches of dormant land, converting them—through both modern innovation and traditional farming methods—into productive assets that increase food supply and create significant employment opportunities.",
        "AgriFuture Global pioneers inclusive business models that empower workers to become owners and micro-entrepreneurs, driving upward mobility and local economic growth. The program delivers scalable solutions by integrating advanced agri-tech with cost-effective, proven traditional farming practices—reducing barriers to entry, minimizing initial investment, and establishing a sustainable pathway toward organic cultivation.",
        "By supporting both technological advancement and the revival of low-input agricultural techniques, AgriFuture Global accelerates the adoption of organic and climate-smart agriculture. Through strategic advisory partnerships with governments and robust public-private collaboration, ARNN Group ensures that communities benefit from new jobs, skills development, profit-sharing, and long-term ownership—all while enhancing global food safety and rural livelihoods.",
        "This holistic approach positions AgriFuture Global as a benchmark for responsible land use, sustainable development, and inclusive prosperity. Governments, investors, entrepreneurs, and technology partners are invited to join ARNN Group in this movement—turning urgent food security challenges into powerful opportunities for inclusive growth, rural revitalization, and global leadership in sustainable agriculture."
      ],
      highlights: [
        "Activation of idle land across GCC, Africa, and Europe",
        "Integration of modern agri-tech and traditional farming",
        "Worker-to-owner and micro-entrepreneur models",
        "Organic and climate-smart agriculture pathways",
        "Government partnerships and public-private collaboration",
        "Job creation, skills development, and profit-sharing"
      ],
      image: "https://arnn-group.s3.ap-south-1.amazonaws.com/New+Website+ARNN/Agro.png"
    },

    features: {
      title: "Comprehensive Agricultural Solutions",
      subtitle: "Program Features",
      layout: "bento",
      items: [
        {
          icon: "map",
          title: "Land Activation & Identification",
          description: "Systematic identification and activation of idle and underutilized land across GCC, Africa, and Europe, converting dormant assets into productive agricultural zones.",
          details: "Advanced mapping, soil analysis, feasibility studies, land optimization"
        },
        {
          icon: "cpu",
          title: "Agri-Tech Integration",
          description: "Integration of advanced agricultural technology including precision farming, smart irrigation, IoT sensors, and data analytics for optimized crop yields and resource efficiency.",
          details: "Precision agriculture, IoT monitoring, data-driven farming, automation"
        },
        {
          icon: "wheat",
          title: "Traditional Farming Revival",
          description: "Revival of proven, cost-effective traditional farming methods that reduce barriers to entry, minimize initial investment, and establish sustainable pathways to organic cultivation.",
          details: "Low-input techniques, indigenous knowledge, organic transitions, cost reduction"
        },
        {
          icon: "users",
          title: "Worker-to-Owner Models",
          description: "Inclusive business models empowering workers to become owners and micro-entrepreneurs, driving upward mobility, local economic growth, and long-term community prosperity.",
          details: "Ownership pathways, profit-sharing, entrepreneurship training, equity programs"
        },
        {
          icon: "leaf",
          title: "Organic & Climate-Smart Agriculture",
          description: "Acceleration of organic farming adoption and climate-smart agricultural practices that enhance sustainability, soil health, biodiversity, and environmental resilience.",
          details: "Organic certification support, climate adaptation, carbon sequestration, regenerative practices"
        },
        {
          icon: "handshake",
          title: "Government & PPP Partnerships",
          description: "Strategic advisory partnerships with governments and robust public-private collaborations ensuring policy alignment, investment mobilization, and sustainable rural development.",
          details: "Policy advocacy, investment facilitation, regulatory support, capacity building"
        }
      ]
    },

    process: {
      title: "From Idle Land to Thriving Farms",
      subtitle: "Implementation Journey",
      steps: [
        {
          number: "1",
          title: "Land Identification & Assessment",
          description: "Comprehensive identification of idle and underutilized land through advanced mapping, soil analysis, water availability studies, and feasibility assessments across target regions."
        },
        {
          number: "2",
          title: "Technology & Training Deployment",
          description: "Integration of appropriate agri-tech solutions and traditional farming methods, combined with comprehensive training programs for workers and aspiring micro-entrepreneurs."
        },
        {
          number: "3",
          title: "Cultivation & Operations Launch",
          description: "Launch of agricultural operations with worker-to-owner models, sustainable farming practices, and continuous technical support for optimal productivity and organic transitions."
        },
        {
          number: "4",
          title: "Growth & Community Impact",
          description: "Scaling operations, profit-sharing, skills development, and long-term ownership transfer—creating jobs, enhancing food security, and revitalizing rural communities."
        }
      ]
    },

    stats: {
      title: "Program Snapshot",
      items: [
        {
          value: 2400,
          suffix: "+",
          label: "Hectares Activated",
          icon: "sprout"
        },
        {
          value: 3,
          label: "Pilot Regions",
          icon: "globe"
        },
        {
          value: 180,
          suffix: "+",
          label: "Jobs Supported",
          icon: "users"
        },
        {
          value: 6,
          suffix: "+",
          label: "Partnership Programs",
          icon: "leaf"
        }
      ]
    },

    partnership: {
      title: "Partnership Model",
      subtitle: "How We Engage",
      intro: "AgriFuture Global partnerships are generally structured through land activation planning, public-private coordination, and phased agricultural implementation.",
      items: [
        {
          title: "Land and policy review",
          description: "Engagement begins with site qualification, land-use assessment, and policy alignment to ensure long-term agricultural viability.",
        },
        {
          title: "Program structuring",
          description: "The implementation model balances agri-tech, traditional methods, community participation, and partnership requirements across the selected region.",
        },
        {
          title: "Operational rollout",
          description: "Execution is managed through staged deployment, training, cultivation setup, and coordinated support for workers and local stakeholders.",
        },
        {
          title: "Community continuity",
          description: "The model remains focused on food-security outcomes, rural value creation, and durable ownership pathways over time.",
        }
      ]
    },

    faq: {
      title: "Business Q&A",
      items: [
        {
          question: "What type of land is usually considered for activation?",
          answer: "The program typically evaluates idle or underutilized land that can support practical agricultural development under the right infrastructure, policy, and operating conditions.",
        },
        {
          question: "Is the model dependent only on advanced technology?",
          answer: "No. The model is intended to combine appropriate agri-tech with proven traditional methods so that implementation remains practical and scalable.",
        },
        {
          question: "Who typically benefits from participation?",
          answer: "Benefits are usually intended for governments, communities, workers, land stakeholders, and operating partners through productivity, employment, and ownership pathways.",
        },
        {
          question: "How is long-term continuity supported after launch?",
          answer: "Continuity is generally supported through training, staged rollout, community alignment, operating oversight, and structured development of local participation over time.",
        }
      ]
    },

    success: {
      title: "Representative Engagements",
      subtitle: "Selected Outcomes",
      stories: [
        {
          title: "Land activation program model",
          description: "A representative engagement focused on identifying underutilized land and structuring it for productive agricultural use under practical operating conditions.",
          achievement: "Established a framework for converting dormant land into phased agricultural programs with local participation",
          region: "GCC, Africa, Europe",
          icon: "sprout"
        },
        {
          title: "Integrated farming approach",
          description: "A deployment model combining selected agri-tech tools with practical traditional methods to support more scalable agricultural rollout.",
          achievement: "Demonstrated a more balanced implementation path between technical innovation and lower-barrier field operations",
          region: "Global",
          icon: "cpu"
        },
        {
          title: "Community participation framework",
          description: "A representative program model connecting agricultural operations with skills transfer, ownership pathways, and local stakeholder participation.",
          achievement: "Strengthened the link between agricultural rollout, worker participation, and longer-term rural value creation",
          region: "International",
          icon: "users"
        }
      ]
    },

    cta: {
      headline: "Join the Global Food Security Movement",
      description: "Governments, investors, entrepreneurs, and technology partners are invited to join ARNN Group and AgriFuture Global—turning urgent food security challenges into powerful opportunities for inclusive growth, rural revitalization, and global leadership in sustainable agriculture.",
      buttonText: "Visit AgriFuture Global",
      buttonLink: "https://www.agrifutureglobal.com",
      backgroundType: "image",
      backgroundUrl: agrifutureglobalvid
    },

    nextService: "luxury-furniture",
    prevService: "healthcare-access"
  },

  {
    id: "9",
    slug: "luxury-furniture",
    title: "Furniture and Furnishing Sectors",
    tagline: "Luxury Living Redefined Through Exquisite Craftsmanship",
    description: "ARNN Group delivers luxury and high-end quality furniture, accessories, and home decor finishings that reflect sophistication, elegance, and impeccable craftsmanship.",
    color: "#92400e", // Brown for furniture/wood

    hero: {
      headline: "Furniture and Furnishing Sectors",
      subheadline: "Luxury Living Redefined Through Exquisite Craftsmanship",
      description: "ARNN Group is deeply entrenched in the realm of luxury and high-end quality furniture, accessories, and home decor finishings, catering to discerning customers who seek to elevate their living and working spaces.",
      mediaType: "video",
      mediaUrl: maachomevid,
      mobileVideoUrl: "https://cdn.shopify.com/videos/c/o/v/842c0f948a19437b897c501cc90a9194.mp4",
      badge: "Luxury Furnishings",
      businessLogoUrl: maachome,
      websitelink: "https://maachome.com",
      mobileMediaUrl: false
    },

    overview: {
      title: "Elevating Spaces with Sophistication and Elegance",
      subtitle: "Our Commitment",
      paragraphs: [
        "ARNN Group is deeply entrenched in the realm of luxury and high-end quality furniture, accessories, and home decor finishings. Our curated collection reflects sophistication, elegance, and impeccable craftsmanship, catering to discerning customers who seek to elevate their living and working spaces with exquisite design elements.",
        "Discover luxury furnishings meticulously crafted from premium materials, including fine woods, sumptuous fabrics, and luxurious metals, within our expansive product range. From opulent sofas and chairs to bespoke dining sets and statement pieces, each item exudes refinement, elevating any interior setting.",
        "Complementing our furniture offerings are a curated array of accessories and home decor finishings designed to add the perfect finishing touch to any space. Explore luxury lighting fixtures, designer rugs, artisanal wall art, and exclusive decorative accents, meticulously selected to create a cohesive and visually stunning environment.",
        "Beyond retail and e-commerce, we extend our commitment to luxury and quality through B2B partnerships, catering to high-profile commercial projects and luxury hospitality establishments. Our dedicated team collaborates closely with clients to deliver customized solutions reflecting their unique style and brand identity, seamlessly integrating luxury furnishings and decor into their spaces."
      ],
      highlights: [
        "Premium materials: fine woods, sumptuous fabrics, luxurious metals",
        "Expansive product range: sofas, chairs, dining sets, statement pieces",
        "Curated accessories: lighting, rugs, wall art, decorative accents",
        "B2B partnerships for commercial and hospitality projects",
        "Customized solutions reflecting unique style and brand identity",
        "Vertical integration with production facilities"
      ],
      image: "https://arnn-group.s3.ap-south-1.amazonaws.com/New+Website+ARNN/Furniture.png"
    },

    features: {
      title: "Comprehensive Luxury Furnishing Solutions",
      subtitle: "Our Offerings",
      layout: "bento",
      items: [
        {
          icon: "sofa",
          title: "Premium Furniture Collections",
          description: "Opulent sofas, chairs, bespoke dining sets, and statement pieces crafted from fine woods, sumptuous fabrics, and luxurious metals—each item exuding refinement and elevating any interior setting.",
          details: "Custom upholstery, artisan craftsmanship, timeless designs, quality assurance"
        },
        {
          icon: "lamp",
          title: "Luxury Accessories & Decor",
          description: "Curated array of luxury lighting fixtures, designer rugs, artisanal wall art, and exclusive decorative accents designed to add the perfect finishing touch and create visually stunning environments.",
          details: "Designer collaborations, exclusive collections, bespoke pieces, finishing touches"
        },
        {
          icon: "palette",
          title: "Custom Design Solutions",
          description: "Personalized interior design services working closely with clients to deliver customized solutions that reflect their unique style, brand identity, and vision for exceptional living and working spaces.",
          details: "Interior design consultation, space planning, style curation, brand integration"
        },
        {
          icon: "building-2",
          title: "B2B & Hospitality Projects",
          description: "Strategic partnerships with high-profile commercial projects and luxury hospitality establishments, delivering turnkey furnishing solutions that seamlessly integrate luxury into prestigious environments.",
          details: "Project management, bulk procurement, installation services, after-sales support"
        },
        {
          icon: "factory",
          title: "Production & Manufacturing",
          description: "State-of-the-art production facilities with vertical integration and quality control, ensuring superior craftsmanship, innovation, sustainability, and the highest standards of excellence in every piece.",
          details: "Vertical integration, quality assurance, sustainable practices, innovation labs"
        },
        {
          icon: "globe",
          title: "Global Expansion & Distribution",
          description: "Strategic diversification and international expansion leveraging market position and global scale to pursue profitable sectors and selectively explore markets worldwide, expanding our global footprint.",
          details: "E-commerce platforms, international shipping, retail partnerships, market expansion"
        }
      ]
    },

    process: {
      title: "From Concept to Exceptional Spaces",
      subtitle: "Our Process",
      steps: [
        {
          number: "1",
          title: "Consultation & Design",
          description: "Comprehensive consultation to understand your vision, style preferences, and functional requirements. Our design team creates customized concepts that reflect your unique aesthetic and brand identity."
        },
        {
          number: "2",
          title: "Curation & Selection",
          description: "Expert curation of furniture, accessories, and decor from our extensive luxury collections or custom manufacturing to meet your specific needs, ensuring every piece meets our exacting quality standards."
        },
        {
          number: "3",
          title: "Production & Quality Control",
          description: "Meticulous craftsmanship in our state-of-the-art facilities with rigorous quality control at every stage, ensuring superior materials, construction excellence, and flawless finishing."
        },
        {
          number: "4",
          title: "Delivery & Installation",
          description: "Professional delivery, installation, and setup services ensuring seamless integration of luxury furnishings into your space, followed by comprehensive after-sales support and care guidance."
        }
      ]
    },

    stats: {
      title: "Portfolio Snapshot",
      items: [
        {
          value: 280,
          suffix: "+",
          label: "Premium Products",
          icon: "package"
        },
        {
          value: 6,
          suffix: "+",
          label: "Export Markets",
          icon: "globe"
        },
        {
          value: 35,
          suffix: "+",
          label: "B2B Projects Delivered",
          icon: "building-2"
        },
        {
          value: 4,
          suffix: "+",
          label: "Production Lines",
          icon: "award"
        }
      ]
    },

    partnership: {
      title: "Partnership Model",
      subtitle: "How We Engage",
      intro: "Luxury furnishing engagements are typically delivered through design consultation, product curation, and installation-oriented execution across residential and commercial settings.",
      items: [
        {
          title: "Project brief review",
          description: "Every engagement begins with a clear understanding of space requirements, aesthetic direction, client expectations, and project scale.",
        },
        {
          title: "Selection and sourcing",
          description: "The model may combine curated collections, custom production, and project-specific sourcing depending on the design brief and timeline.",
        },
        {
          title: "Execution coordination",
          description: "Delivery is structured through production oversight, logistics management, installation planning, and project-level quality review.",
        },
        {
          title: "Long-term client support",
          description: "Engagement continues through after-sales coordination, refinement support, and relationship continuity across future furnishing requirements.",
        }
      ]
    },

    faq: {
      title: "Business Q&A",
      items: [
        {
          question: "Does the business focus more on retail or project-based furnishing?",
          answer: "The model is designed to support both, with curated collections for customers and structured project execution for hospitality, commercial, and design-led environments.",
        },
        {
          question: "Can clients request customized furnishing solutions?",
          answer: "Yes. Engagements may be structured around curated collections, custom selection, or project-specific furnishing requirements depending on the brief.",
        },
        {
          question: "How is quality maintained across production and delivery?",
          answer: "Quality is typically maintained through controlled sourcing, production oversight, logistics coordination, and final project-level review before completion.",
        },
        {
          question: "What makes a project suitable for partnership?",
          answer: "Suitable projects generally have clear design direction, defined scope, realistic timelines, and alignment with the business’s furnishing and execution capabilities.",
        }
      ]
    },

    success: {
      title: "Representative Engagements",
      subtitle: "Selected Outcomes",
      stories: [
        {
          title: "Hospitality furnishing execution",
          description: "A representative furnishing engagement for a hospitality setting involving curation, project coordination, and installation-led delivery.",
          achievement: "Delivered a structured furnishing model suited to hospitality environments and design-led project requirements",
          region: "Middle East, Europe, Asia",
          icon: "hotel"
        },
        {
          title: "Production and quality coordination",
          description: "A manufacturing-side engagement focused on production visibility, quality discipline, and better alignment between design intent and finished product.",
          achievement: "Strengthened internal coordination across sourcing, production, and final quality review",
          region: "Global Manufacturing",
          icon: "factory"
        },
        {
          title: "Market-facing channel expansion",
          description: "A representative commercial engagement linking product expansion with selected retail, project, and export-oriented channels.",
          achievement: "Advanced a controlled channel strategy for broader market reach without compromising product positioning",
          region: "Worldwide",
          icon: "globe"
        }
      ]
    },

    cta: {
      headline: "Experience Luxury Living Redefined",
      description: "As we expand our presence and offerings, ARNN Group upholds the highest standards of excellence in luxury furniture and home decor. Through unwavering commitment to quality, craftsmanship, and innovation, we redefine luxury living and set new industry benchmarks.",
      buttonText: "Visit MaacHome",
      buttonLink: "https://www.maachome.com",
      backgroundType: "image",
      backgroundUrl: "https://images.unsplash.com/photo-1696774566203-b5883558badd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ25lciUyMGZ1cm5pdHVyZSUyMHNob3dyb29tfGVufDF8fHx8MTc2MzIwODk1NXww&ixlib=rb-4.1.0&q=80&w=1080"
    },

    nextService: "fb-segments",
    prevService: "food-safety"
  },

  {
    id: "10",
    slug: "fb-segments",
    title: "F&B Segments",
    tagline: "Driving Growth and Innovation in GCC's Dynamic F&B Landscape",
    description: "ARNN Group is strategically expanding its presence in the thriving F&B market across GCC countries, capitalizing on a $36 billion market opportunity.",
    color: "#dc2626", // Red for F&B

    hero: {
      headline: "F&B Segments",
      subheadline: "Driving Growth and Innovation in GCC's Dynamic F&B Landscape",
      description: "ARNN Group is strategically focusing on expanding its presence in the thriving F&B market across GCC countries, with a particular emphasis on the United Arab Emirates, Saudi Arabia, Oman, and Qatar.",
      mediaType: "video",
      mediaUrl: "https://arnn-group.s3.ap-south-1.amazonaws.com/New+Website+ARNN/F%26B+Segments.mp4",
      badge: "Food & Beverage Excellence",
      mobileMediaUrl: false
    },

    overview: {
      title: "Transforming the GCC F&B Landscape",
      subtitle: "Market Leadership",
      paragraphs: [
        "ARNN Group is strategically focusing on expanding its presence in the thriving F&B market across GCC countries, with a particular emphasis on the United Arab Emirates, Saudi Arabia, Oman, and Qatar. Within the GCC region, the food and beverage sector is undergoing a dynamic transformation, blending technological advancements, global trends, and innovative approaches to invigorate essential services and bolster economic growth.",
        "Projections indicate significant growth potential for F&B enterprises in the UAE, Saudi Arabia, and Qatar, with expectations of reaching a combined market value of $36 billion by 2022. Notably, the UAE anticipates a 4% growth rate by 2021, as per recent insights from the Dubai Statistics Center. Against the backdrop of the UAE's milestone 50th anniversary and the resurgence of its tourism sector, Dubai, in particular, is poised for a resurgence in the hospitality industry.",
        "The GCC region stands out as one of the most luxurious and vibrant markets in the global F&B landscape. Its distinct brand identity in the F&B domain has fostered robust growth in the food service market, strengthening its position in the industry.",
        "Moreover, the F&B sector stands as a prime beneficiary of the GCC governments' concerted efforts toward economic diversification. Substantial investments in the tourism sector have propelled the growth of the food service market, further enhancing its attractiveness to investors. ARNN Group is proactively engaged in diversifying its portfolio within the F&B sector across GCC countries, aligning with the region's evolving economic landscape and burgeoning opportunities."
      ],
      highlights: [
        "Strategic focus on UAE, Saudi Arabia, Oman, and Qatar",
        "$36 billion combined market value projection",
        "4% growth rate anticipated in UAE market",
        "Distinct brand identity in GCC F&B landscape",
        "Prime beneficiary of economic diversification initiatives",
        "Portfolio diversification across multiple F&B segments"
      ],
      image: "https://arnn-group.s3.ap-south-1.amazonaws.com/New+Website+ARNN/FNB.png"
    },

    features: {
      title: "Comprehensive F&B Solutions Across GCC",
      subtitle: "Our Portfolio",
      layout: "bento",
      items: [
        {
          icon: "utensils",
          title: "Fine Dining & Casual Restaurants",
          description: "Premium restaurant concepts spanning fine dining, casual dining, fast-casual, and quick-service formats—delivering exceptional culinary experiences that blend global trends with local tastes across GCC markets.",
          details: "Multi-concept brands, chef partnerships, menu innovation, quality ingredients"
        },
        {
          icon: "coffee",
          title: "Cafés & Specialty Beverages",
          description: "Contemporary café concepts and specialty beverage outlets offering artisanal coffee, premium teas, fresh juices, and gourmet snacks in stylish, welcoming environments that foster community and connection.",
          details: "Specialty coffee, artisan beverages, grab-and-go options, loyalty programs"
        },
        {
          icon: "store",
          title: "Cloud Kitchens & Delivery",
          description: "Technology-enabled cloud kitchen operations and delivery-first brands optimized for the digital dining economy—leveraging data analytics, efficient operations, and strategic partnerships to maximize reach and profitability.",
          details: "Multiple virtual brands, delivery optimization, data-driven menus, tech integration"
        },
        {
          icon: "shopping-bag",
          title: "Catering & Events",
          description: "Full-service catering solutions for corporate events, weddings, social gatherings, and large-scale functions—combining culinary excellence, professional service, and seamless execution for memorable experiences.",
          details: "Custom menus, event management, corporate catering, scalable operations"
        },
        {
          icon: "briefcase",
          title: "Franchise & Partnership Opportunities",
          description: "Strategic franchise development and partnership programs enabling entrepreneurs and investors to join ARNN Group's F&B success—providing proven concepts, operational support, and growth pathways.",
          details: "Franchise packages, master franchises, joint ventures, operational training"
        },
        {
          icon: "trending-up",
          title: "Market Expansion & Innovation",
          description: "Continuous market research, concept innovation, and strategic expansion initiatives capitalizing on emerging trends, consumer preferences, and growth opportunities across GCC's dynamic F&B landscape.",
          details: "Trend analysis, concept development, location strategy, brand evolution"
        }
      ]
    },

    process: {
      title: "From Concept to Culinary Success",
      subtitle: "Our Development Process",
      steps: [
        {
          number: "1",
          title: "Market Research & Concept Development",
          description: "Comprehensive market analysis, consumer insights, trend identification, and concept development ensuring alignment with market demand, competitive positioning, and growth potential across target GCC markets."
        },
        {
          number: "2",
          title: "Location & Design Excellence",
          description: "Strategic site selection, architectural design, interior styling, and operational layout optimization creating distinctive, functional, and inviting spaces that enhance the dining experience and operational efficiency."
        },
        {
          number: "3",
          title: "Operations & Team Development",
          description: "Systematic recruitment, comprehensive training programs, operational systems implementation, and quality standards establishment ensuring consistent excellence in food quality, service delivery, and guest satisfaction."
        },
        {
          number: "4",
          title: "Launch & Continuous Growth",
          description: "Strategic marketing campaigns, grand opening events, ongoing performance monitoring, continuous improvement initiatives, and expansion planning driving sustained growth and market leadership."
        }
      ]
    },

    partnership: {
      title: "Partnership Model",
      subtitle: "How We Engage",
      intro: "F&B engagements are generally structured through concept planning, market validation, and operating partnerships across dine-in, retail, and delivery formats.",
      items: [
        {
          title: "Concept qualification",
          description: "Each opportunity is reviewed against consumer demand, market positioning, site logic, and operational viability in the target GCC market.",
        },
        {
          title: "Launch structuring",
          description: "The engagement model may combine direct operation, franchise participation, or partnership-based rollout depending on the concept and market.",
        },
        {
          title: "Operational execution",
          description: "Delivery is managed through menu planning, site readiness, staffing systems, vendor coordination, and controlled launch sequencing.",
        },
        {
          title: "Growth continuity",
          description: "Post-launch engagement remains centered on performance review, format refinement, and disciplined expansion across additional channels or markets.",
        }
      ]
    },

    success: {
      title: "Representative Engagements",
      subtitle: "Selected Outcomes",
      stories: [
        {
          title: "Multi-format concept rollout",
          description: "A representative F&B engagement spanning dine-in, café, and delivery-oriented formats within selected GCC markets.",
          achievement: "Established a structured rollout model across multiple concept types and operating formats",
          region: "GCC Markets",
          icon: "store"
        },
        {
          title: "Hospitality-linked F&B positioning",
          description: "A sector engagement aligning F&B concepts with hospitality demand, destination traffic, and broader tourism-oriented operating environments.",
          achievement: "Improved alignment between concept placement, hospitality demand, and commercial partnership opportunities",
          region: "UAE, Saudi Arabia, Qatar",
          icon: "plane"
        },
        {
          title: "Delivery-led operating model",
          description: "A representative operational structure for cloud kitchens and digitally enabled dining formats with emphasis on efficiency and channel discipline.",
          achievement: "Built a more scalable framework for delivery-first operations and multi-format F&B execution",
          region: "Digital-First Markets",
          icon: "trending-up"
        }
      ]
    },

    cta: {
      headline: "Join GCC's F&B Revolution",
      description: "ARNN Group is proactively engaged in diversifying its portfolio within the F&B sector across GCC countries, aligning with the region's evolving economic landscape and burgeoning opportunities. Partner with us to capitalize on one of the world's most dynamic and luxurious F&B markets.",
      buttonText: "Explore F&B Opportunities",
      buttonLink: "#contact",
      backgroundType: "image",
      backgroundUrl: "https://images.unsplash.com/photo-1625251641031-6e1f6b895d4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwYmV2ZXJhZ2UlMjBzZXJ2aWNlfGVufDF8fHx8MTc2MzIwOTEzMXww&ixlib=rb-4.1.0&q=80&w=1080"
    },

    nextService: "economic-empowerment",
    prevService: "luxury-furniture"
  }
];

// Helper function to get service by slug
export function getServiceBySlug(slug: string): ServiceData | undefined {
  return servicesData.find(service => service.slug === slug);
}

// Helper function to get all service slugs (for routing)
export function getAllServiceSlugs(): string[] {
  return servicesData.map(service => service.slug);
}
