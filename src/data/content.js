// ============================================
// ERTH Corporate Website - Bilingual Content
// ============================================

const content = {
    en: {
        // Navigation
        nav: {
            logo: "ERTH",
            home: "Home",
            about: "About",
            departments: "Departments",
            projects: "Projects",
            products: "Products",
            leadership: "Our Team",
            join: "Join Us",
            contact: "Contact"
        },

        // Home Page
        home: {
            heroTitle: "Building Egypt's Future Corporate Leaders",
            heroSubtitle: "ERTH is a student-led corporate simulation company transforming university talent into enterprise-ready professionals through real-world projects, structured departments, and measurable performance standards.",
            ctaJoin: "Join ERTH",

            metricsTitle: "Our Impact",
            metrics: [
                { value: "100", label: "Active Members", suffix: "+" },
                { value: "10", label: "Completed Projects", suffix: "+" },
                { value: "6", label: "Departments", suffix: "" },
                { value: "4", label: "Growth Stages", suffix: "" }
            ],

            stagesTitle: "ERTH Evolution Model",
            stagesSubtitle: "Our progressive transformation into a national talent accelerator",
            stages: [
                {
                    stage: "Stage 1",
                    title: "Corporate Simulation Company",
                    description: "Students experience authentic corporate structures, departments, and KPI-driven performance evaluation in a controlled environment."
                },
                {
                    stage: "Stage 2",
                    title: "Student Consulting Firm",
                    description: "Transition to real client projects, delivering professional consulting services while maintaining academic excellence."
                },
                {
                    stage: "Stage 3",
                    title: "Project-Based Learning Incubator",
                    description: "Develop industry partnerships to create real-world learning opportunities aligned with market demands."
                },
                {
                    stage: "Stage 4",
                    title: "Talent Accelerator",
                    description: "Become the premier talent pipeline for corporations seeking pre-trained, corporate-ready graduates."
                }
            ],

            whyErthTitle: "The Problem We Solve",
            whyErthText: "Egyptian universities produce talented graduates, but most lack exposure to real corporate environments, performance pressure, and professional accountability. ERTH bridges this gap by simulating authentic corporate structures where students develop the mindset, skills, and work ethic required by leading organizations.",

            finalCtaTitle: "Ready to Transform Your Future?",
            finalCtaText: "Join Egypt's most ambitious student-led corporate initiative.",
            finalCtaButton: "Apply Now",
            testimonials: {
                title: "Success Stories",
                subtitle: "Join us to document your success story",
                items: []
            }
        },

        // About Page
        about: {
            pageTitle: "About ERTH",

            visionTitle: "Vision",
            visionText: "To become the premier talent development ecosystem across Egyptian universities, producing enterprise-ready graduates who lead Egypt's corporate and entrepreneurial future.",

            missionTitle: "Mission",
            missionText: "To simulate authentic corporate environments where students develop professional competencies, experience real-world performance standards, and build the mindset required for corporate excellence.",

            problemTitle: "The Corporate Readiness Gap",
            problemText: "Most university students graduate with theoretical knowledge but lack practical exposure to corporate structures, performance metrics, cross-functional collaboration, and professional accountability. This gap costs companies time and resources in training, delays individual career progression, and limits Egypt's competitive advantage in developing world-class talent.",

            evolutionTitle: "ERTH Evolution Model",
            evolutionSubtitle: "Our strategic roadmap to national impact",

            expansionTitle: "National Expansion Vision",
            expansionText: "ERTH's model is designed for scalability. We envision establishing ERTH chapters at leading universities across Egypt, creating a national network of pre-corporate talent. This expansion will position ERTH as the premier talent pipeline for organizations seeking graduates who require minimal onboarding and demonstrate immediate productivity."
        },

        // Departments Page
        departments: {
            pageTitle: "Corporate Departments",
            pageSubtitle: "Experience real corporate structure through our six specialized departments",

            depts: [
                {
                    name: "Executive Office",
                    description: "Strategic leadership and organizational governance",
                    responsibilities: [
                        "Strategic planning and vision setting",
                        "Cross-departmental alignment",
                        "Stakeholder management",
                        "Performance oversight and KPI tracking"
                    ],
                    skills: "Leadership, Strategic Thinking, Decision Making, Organizational Management"
                },
                {
                    name: "Human Resources",
                    description: "Talent acquisition, development, and organizational culture",
                    responsibilities: [
                        "Recruitment and onboarding processes",
                        "Performance evaluation systems",
                        "Training and development programs",
                        "Culture building and employee engagement"
                    ],
                    skills: "Talent Management, Communication, Conflict Resolution, Organizational Behavior"
                },
                {
                    name: "Marketing & Communications",
                    description: "Brand strategy, content creation, and market positioning",
                    responsibilities: [
                        "Brand identity and messaging",
                        "Digital marketing campaigns",
                        "Content strategy and creation",
                        "Public relations and partnerships"
                    ],
                    skills: "Marketing Strategy, Content Creation, Social Media, Brand Management"
                },
                {
                    name: "Technical Team",
                    description: "Technology infrastructure, development, and digital innovation",
                    responsibilities: [
                        "Software development and maintenance",
                        "Technical infrastructure management",
                        "Digital solutions and automation",
                        "Technology support and troubleshooting"
                    ],
                    skills: "Programming, System Administration, Problem Solving, Technical Documentation"
                },
                {
                    name: "Business Development",
                    description: "Partnership cultivation, market expansion, and growth strategy",
                    responsibilities: [
                        "Corporate partnership development",
                        "Client acquisition and relationship management",
                        "Market research and opportunity analysis",
                        "Revenue generation strategies"
                    ],
                    skills: "Negotiation, Relationship Building, Strategic Partnerships, Sales"
                },
                {
                    name: "Project Management",
                    description: "End-to-end project delivery using industry-standard methodologies",
                    responsibilities: [
                        "Project planning and scoping",
                        "Timeline and milestone management",
                        "Stakeholder communication",
                        "Risk management and mitigation"
                    ],
                    skills: "Agile/Scrum Methodologies, Time Management, Stakeholder Management, Documentation"
                }
            ]
        },

        // Projects Page
        projects: {
            pageTitle: "Our Projects",
            pageSubtitle: "Real-world experience through simulation and client projects",

            items: [
                {
                    name: "AI-Powered Chest X-Ray Analysis & Clinical Support System",
                    status: "Medical AI",
                    description: "An AI-based imaging analysis system developed to simulate automated chest X-ray classification for identifying potential pneumonia and lung conditions. The system generates structured guidance and includes an AI chatbot interface, along with simulated patient record tracking.",
                    results: "AI classification prototype, conversational medical support interface, simulated patient management system.",
                    timeline: "10 weeks"
                },
                {
                    name: "AI-Powered Social Engineering Awareness Project",
                    status: "Simulation",
                    description: "A cybersecurity awareness simulation demonstrating the risks of AI-enhanced social engineering. A voice-based AI agent was developed to simulate realistic communication scenarios to highlight how sensitive information can be exposed through manipulation tactics.",
                    results: "AI voice simulation prototype, risk assessment framework, cybersecurity awareness documentation.",
                    timeline: "6 weeks"
                },
                {
                    name: "AI-Powered Career Path & Learning Recommendation Platform",
                    status: "Faculty of Computer Science",
                    description: "An AI-enabled platform that analyzes students' technical skills and personality attributes to recommend suitable specialization tracks such as Front-End, Back-End, Full-Stack, AI, and DevOps. The system also provides curated free learning resources aligned with each recommended track.",
                    results: "AI compatibility scoring system, structured skills-personality mapping, curated free learning roadmap engine.",
                    timeline: "8 weeks"
                },
                {
                    name: "Modern Genome Browser – GFF / GFF3-Based Genomic Visualization Platform",
                    status: "Research Tool",
                    description: "A genome browsing platform enabling researchers to explore genomic sequences using GFF and GFF3 annotation files. The system provides structured visualization of genomic features with interactive navigation and optimized annotation display.",
                    results: "GFF/GFF3 parsing engine, interactive genome visualization interface, optimized annotation rendering system.",
                    timeline: "8 weeks"
                },
                {
                    name: "Gym Management System – New Mansoura University",
                    status: "Internal Project",
                    description: "A non-traditional fitness center management system incorporating standard gym management functions with an integrated AI recommendation module. The AI generates personalized workout and nutrition plans based on individual student profiles, functioning as a virtual personal trainer.",
                    results: "Fully developed management system, AI-driven personalized recommendation engine, deployment-ready architecture.",
                    timeline: "10 weeks"
                },
                {
                    name: "AI-Based Text Moderation & Context-Aware Language Refinement System",
                    status: "NLP Module",
                    description: "An AI-powered NLP system designed to detect inappropriate language and generate context-aware alternative phrasing. The project explores AI-driven communication moderation and was requested as a potential integration module within an Egyptian social media application.",
                    results: "Context-aware text analysis engine, tone refinement module, integration-ready moderation framework.",
                    timeline: "6 weeks"
                }
            ]
        },

        // Leadership Page
        leadership: {
            pageTitle: "Our Team",
            pageSubtitle: "Meet the students driving ERTH's vision",

            team: [
                {
                    name: "Zyad Elleathy",
                    title: "Chief Executive Officer",
                    bio: "Guiding ERTH's strategy and overseeing the coordination of all departments to ensure the achievement of the organization's defined goals.",
                    linkedin: "#"
                },
                {
                    name: "Mohamed Abed",
                    title: "Chief Operating Officer",
                    bio: "Organizing daily operations and connecting different teams to ensure projects are executed according to plans and timelines.",
                    linkedin: "#"
                },
                {
                    name: "Adel Ibrahim",
                    title: "Head of Business Development",
                    bio: "Establishing and building partnerships with institutions and companies, and working to create opportunities for organizational growth and expansion.",
                    linkedin: "#"
                },
                {
                    name: "Khaled Youssef",
                    title: "Chief Marketing Officer",
                    bio: "Developing marketing strategies and managing communication with beneficiaries and partners, including brand content and promotional activities.",
                    linkedin: "#"
                },
                {
                    name: "Ahmed Shehata",
                    title: "Technical Team Manager",
                    bio: "Managing the organization's technology systems and infrastructure, and ensuring the highest efficiency and stability in supporting projects and operations.",
                    linkedin: "#"
                }
            ]
        },

        // Join Page
        join: {
            pageTitle: "Join ERTH",
            pageSubtitle: "Transform yourself into a corporate-ready professional",

            whyTitle: "Why Join ERTH?",
            whyPoints: [
                "Experience authentic corporate structures and performance standards",
                "Build professional skills that universities don't teach",
                "Work on real-world projects with measurable outcomes",
                "Network with ambitious peers and corporate mentors",
                "Stand out to employers as a pre-trained, low-risk hire"
            ],

            processTitle: "Recruitment Process",
            processSteps: [
                {
                    step: "01",
                    title: "Application",
                    description: "Submit your application with CV and statement of interest"
                },
                {
                    step: "02",
                    title: "Initial Screening",
                    description: "Review of qualifications, motivation, and departmental fit"
                },
                {
                    step: "03",
                    title: "Assessment",
                    description: "Complete practical assessment relevant to your department of interest"
                },
                {
                    step: "04",
                    title: "Interview",
                    description: "Professional interview with department heads and executive team"
                },
                {
                    step: "05",
                    title: "Onboarding",
                    description: "Welcome to ERTH! Begin your corporate simulation journey"
                }
            ],

            formTitle: "Application Form",

            // Form sections
            form: {
                personalInfo: "Personal Information",
                academicInfo: "Academic Information",
                applicationQuestions: "Application Questions",
                optionalLinks: "Professional Links (Optional)",

                // Personal fields
                fullName: "Full Name *",
                email: "Email Address *",
                phone: "Phone Number *",
                universityId: "University ID *",

                // Academic fields
                academicYear: "Academic Year *",
                selectYear: "Select your year",
                level1: "Level 1",
                level2: "Level 2",
                level3: "Level 3",
                level4: "Level 4",
                level5: "Level 5",

                faculty: "Faculty *",
                selectFaculty: "Select your faculty",
                business: "Business",
                law: "Law",
                engineering: "Engineering",
                cse: "Computer Science & Engineering",
                science: "Science",
                medicine: "Medicine",
                dentistry: "Dentistry",
                pharmacy: "Pharmacy",
                ahst: "Applied Health Sciences Technology",
                nursing: "Nursing",
                textile: "Textile Science Engineering",
                social: "Social & Human Sciences",
                media: "Mass Media & Communication",
                physicalTherapy: "Physical Therapy",

                department: "Department Preference *",
                selectDepartment: "Select preferred department",
                dept: {
                    hr: "Human Resources",
                    marketingComms: "Marketing & Communications",
                    technical: "Technical Team",
                    businessDev: "Business Development",
                    projectMgmt: "Project Management"
                },

                // Application questions
                motivation: "Why do you want to join ERTH? *",
                skills: "What skills can you bring to ERTH? *",
                selectSkills: "Select a department first",
                skillsHint: "Select all skills that apply",
                otherSkills: "Please specify your skills *",

                // Optional links
                linkedin: "LinkedIn Profile",
                portfolio: "Portfolio / GitHub",

                // Submit
                submit: "Submit Application"
            },
            formPlaceholder: "Application Form Loading...",

            expectationsTitle: "What We Expect",
            expectationsText: "ERTH is not a casual student club. We expect professional commitment, accountability, and a growth mindset. Members dedicate 8-12 hours weekly, meet deadlines consistently, and embrace feedback. If you're serious about professional development, you belong here."
        },

        // Contact Page
        contact: {
            pageTitle: "Contact Us",
            pageSubtitle: "Let's start a conversation",

            infoTitle: "Get In Touch",
            email: "Email",
            emailValue: "info@erth.dev",
            phone: "Phone",
            phoneValue: "+20 XXX XXX XXXX",
            location: "Location",
            locationValue: "Egypt",

            formTitle: "Send Us a Message",
            formName: "Your Name",
            formEmail: "Your Email",
            formSubject: "Subject",
            formMessage: "Message",
            formSubmit: "Send Message",
            formPlaceholder: "Contact Form Loading..."
        },

        // Products Page
        products: {
            pageTitle: "Products",
            pageSubtitle: "Digital platforms built by ERTH to connect talent with opportunities and support students with academic resources.",
            keyFeatures: "Key Features:",
            bestFor: "Best For:",
            unifiedTitle: "How They Work Together",
            unifiedText: "ERTH Study Hub equips students with the academic resources they need to succeed, while ERTH Matching maps their skills to the right opportunities. Together, they create a complete system from learning to impact.",
            flow1Title: "1. Study",
            flow1Text: "Access lectures, summaries, test banks, and past exams to master your courses.",
            flow2Title: "2. Evaluation",
            flow2Text: "Evaluate yourself after each test, track your results, and identify areas for improvement.",
            flow3Title: "3. Match",
            flow3Text: "Get matched to projects and teams based on verified capability.",
            finalTitle: "Ready to Experience ERTH Platforms?",
            finalText: "Start learning, get matched, and contribute to high-impact student projects.",
            authTitle: "\ud83d\udd10 One Account, Full Access",
            authText: "Create a single ERTH account and get instant access to both platforms. Your credentials work seamlessly across ERTH Matching and ERTH Study Hub \u2014 no need to register separately.",
            matchingShortCta: "Open Matching",
            lmsShortCta: "Open Study Hub",
            matching: {
                badge: "Talent Matching Platform",
                title: "ERTH Matching",
                description: "A structured matching platform that connects students' skills, projects, and interests with the right opportunities and team roles.",
                f1: "Profile-based matching using skills and interests",
                f2: "Opportunity discovery for projects and internal teams",
                f3: "Fair shortlisting workflow for team leaders",
                f4: "Performance-ready pipeline for student placements",
                bestFor: "Students looking for the right role, and teams seeking verified talent quickly.",
                cta: "Visit ERTH Matching"
            },
            lms: {
                badge: "Academic Support Platform",
                title: "ERTH Study Hub",
                description: "A student-focused academic platform that provides university course materials, lecture notes, summarizations, test banks, and previous exams to help students excel in their studies.",
                f1: "Organized lecture notes and course materials by faculty and subject",
                f2: "Concise summarizations for efficient exam preparation",
                f3: "Comprehensive test banks with practice questions",
                f4: "Access to previous exams for targeted revision",
                bestFor: "University students looking for organized study resources, exam preparation materials, and academic support.",
                cta: "Visit ERTH Study Hub"
            }
        },

        // Footer
        footer: {
            tagline: "Building Egypt's Future Corporate Leaders",
            quickLinks: "Quick Links",
            connect: "Connect",
            copyright: "© 2026 ERTH. All rights reserved.",
            university: "Soon in all Egyptian universities"
        }
    },

    ar: {
        // Navigation
        nav: {
            logo: "إرث",
            home: "الرئيسية",
            about: "من نحن",
            departments: "الأقسام",
            projects: "المشاريع",
            products: "منتجاتنا",
            leadership: "فريقنا",
            join: "انضم إلينا",
            contact: "تواصل معنا"
        },

        // Home Page
        home: {
            heroTitle: "نبني قادة الشركات المصرية في المستقبل",
            heroSubtitle: "إرث منظمة طلابية تحاكي بيئة العمل المؤسسي لتحويل طلاب الجامعات إلى محترفين جاهزين لسوق العمل من خلال مشاريع حقيقية وأقسام متخصصة ومعايير أداء واضحة.",
            ctaJoin: "انضم إلينا",

            metricsTitle: "تأثيرنا",
            metrics: [
                { value: "100", label: "عضو نشط", suffix: "+" },
                { value: "10", label: "مشروع مكتمل", suffix: "+" },
                { value: "6", label: "أقسام", suffix: "" },
                { value: "4", label: "مراحل نمو", suffix: "" }
            ],

            stagesTitle: "نموذج تطور إرث",
            stagesSubtitle: "تحولنا التدريجي إلى مُسرّع مواهب وطني",
            stages: [
                {
                    stage: "المرحلة 1",
                    title: "شركة محاكاة مؤسسية",
                    description: "يختبر الطلاب هياكل مؤسسية حقيقية وأقسام وتقييم أداء قائم على مؤشرات الأداء في بيئة منضبطة."
                },
                {
                    stage: "المرحلة 2",
                    title: "شركة استشارات طلابية",
                    description: "الانتقال إلى مشاريع عملاء حقيقية، وتقديم خدمات استشارية احترافية مع الحفاظ على التميز الأكاديمي."
                },
                {
                    stage: "المرحلة 3",
                    title: "حاضنة التعلم القائم على المشاريع",
                    description: "تطوير شراكات صناعية لخلق فرص تعلم واقعية متوافقة مع متطلبات السوق."
                },
                {
                    stage: "المرحلة 4",
                    title: "مُسرّع المواهب",
                    description: "أن نصبح المصدر الرئيسي للمواهب للشركات التي تبحث عن خريجين مُدربين ومستعدين للشركات."
                }
            ],

            whyErthTitle: "المشكلة التي نعالجها",
            whyErthText: "تخرج الجامعات المصرية طلاباً موهوبين، لكن معظمهم يفتقرون للخبرة العملية في بيئات العمل المؤسسية الحقيقية وضغوط الأداء والمسؤولية المهنية. تسد إرث هذه الفجوة من خلال محاكاة بيئة عمل مؤسسية حقيقية حيث يطور الطلاب العقلية والمهارات وأخلاقيات العمل التي تتطلبها الشركات الرائدة.",

            finalCtaTitle: "مستعد لتغيير مستقبلك؟",
            finalCtaText: "انضم لأكثر المبادرات الطلابية طموحاً في مصر.",
            finalCtaButton: "قدّم الآن",
            testimonials: {
                title: "قصص النجاح",
                subtitle: "انضم إلينا لتوثيق قصة نجاحك",
                items: []
            }
        },

        // About Page
        about: {
            pageTitle: "عن إرث",

            visionTitle: "الرؤية",
            visionText: "أن نصبح النظام الرائد لتطوير المواهب عبر الجامعات المصرية، ننتج خريجين جاهزين للشركات يقودون مستقبل مصر المؤسسي والريادي.",

            missionTitle: "المهمة",
            missionText: "محاكاة بيئات مؤسسية حقيقية حيث يطور الطلاب الكفاءات المهنية، ويختبرون معايير الأداء الواقعية، ويبنون العقلية المطلوبة للتميز المؤسسي.",

            problemTitle: "فجوة الاستعداد المؤسسي",
            problemText: "يتخرج معظم طلاب الجامعات بمعرفة نظرية لكنهم يفتقرون إلى التعرض العملي للهياكل المؤسسية ومقاييس الأداء والتعاون متعدد الوظائف والمساءلة المهنية. تكلف هذه الفجوة الشركات الوقت والموارد في التدريب، وتؤخر التقدم الوظيفي الفردي، وتحد من الميزة التنافسية لمصر في تطوير مواهب عالمية المستوى.",

            evolutionTitle: "نموذج تطور إرث",
            evolutionSubtitle: "خارطة طريقنا الاستراتيجية للتأثير الوطني",

            expansionTitle: "رؤية التوسع الوطني",
            expansionText: "تم تصميم نموذج إرث للتوسع. نتصور إنشاء فروع لإرث في الجامعات الرائدة في جميع أنحاء مصر، وإنشاء شبكة وطنية من المواهب ما قبل المؤسسية. سيضع هذا التوسع إرث كخط المواهب الرئيسي للمنظمات التي تبحث عن خريجين يتطلبون الحد الأدنى من الإعداد ويظهرون إنتاجية فورية."
        },

        // Departments Page
        departments: {
            pageTitle: "الأقسام المؤسسية",
            pageSubtitle: "اختبر الهيكل المؤسسي الحقيقي من خلال أقسامنا الستة المتخصصة",

            depts: [
                {
                    name: "المكتب التنفيذي",
                    description: "القيادة الاستراتيجية والحوكمة التنظيمية",
                    responsibilities: [
                        "التخطيط الاستراتيجي ووضع الرؤية",
                        "التوافق بين الأقسام",
                        "إدارة أصحاب المصلحة",
                        "الإشراف على الأداء وتتبع مؤشرات الأداء"
                    ],
                    skills: "القيادة، التفكير الاستراتيجي، اتخاذ القرار، الإدارة التنظيمية"
                },
                {
                    name: "الموارد البشرية",
                    description: "اكتساب المواهب والتطوير والثقافة التنظيمية",
                    responsibilities: [
                        "عمليات التوظيف والإعداد",
                        "أنظمة تقييم الأداء",
                        "برامج التدريب والتطوير",
                        "بناء الثقافة والمشاركة الموظفين"
                    ],
                    skills: "إدارة المواهب، التواصل، حل النزاعات، السلوك التنظيمي"
                },
                {
                    name: "التسويق والاتصالات",
                    description: "استراتيجية العلامة التجارية وإنشاء المحتوى وتحديد المواقع السوقية",
                    responsibilities: [
                        "هوية العلامة التجارية والرسائل",
                        "حملات التسويق الرقمي",
                        "استراتيجية المحتوى والإنشاء",
                        "العلاقات العامة والشراكات"
                    ],
                    skills: "استراتيجية التسويق، إنشاء المحتوى، وسائل التواصل الاجتماعي، إدارة العلامة التجارية"
                },
                {
                    name: "الفريق التقني",
                    description: "البنية التحتية التكنولوجية والتطوير والابتكار الرقمي",
                    responsibilities: [
                        "تطوير وصيانة البرمجيات",
                        "إدارة البنية التحتية التقنية",
                        "الحلول الرقمية والأتمتة",
                        "الدعم الفني وحل المشكلات"
                    ],
                    skills: "البرمجة، إدارة الأنظمة، حل المشكلات، التوثيق التقني"
                },
                {
                    name: "تطوير الأعمال",
                    description: "تنمية الشراكات والتوسع السوقي واستراتيجية النمو",
                    responsibilities: [
                        "تطوير الشراكات المؤسسية",
                        "اكتساب العملاء وإدارة العلاقات",
                        "أبحاث السوق وتحليل الفرص",
                        "استراتيجيات توليد الإيرادات"
                    ],
                    skills: "التفاوض، بناء العلاقات، الشراكات الاستراتيجية، المبيعات"
                },
                {
                    name: "إدارة المشاريع",
                    description: "تسليم المشاريع الشامل باستخدام منهجيات معتمدة صناعياً",
                    responsibilities: [
                        "تخطيط ونطاق المشاريع",
                        "إدارة الجداول الزمنية والمعالم",
                        "التواصل مع أصحاب المصلحة",
                        "إدارة وتخفيف المخاطر"
                    ],
                    skills: "منهجيات Agile/Scrum، إدارة الوقت، إدارة أصحاب المصلحة، التوثيق"
                }
            ]
        },

        // Projects Page
        projects: {
            pageTitle: "مشاريعنا",
            pageSubtitle: "خبرة واقعية من خلال المحاكاة ومشاريع العملاء",

            items: [
                {
                    name: "نظام تحليل صور الأشعة السينية للصدر والدعم السريري المدعوم بالذكاء الاصطناعي",
                    status: "ذكاء اصطناعي طبي",
                    description: "نظام تحليل صور قائم على الذكاء الاصطناعي تم تطويره لمحاكاة التصنيف الآلي للأشعة السينية للصدر لتحديد الالتهاب الرئوي المحتمل وحالات الرئة. يولد النظام إرشادات منظمة ويتضمن واجهة محادثة آلية بالذكاء الاصطناعي، إلى جانب تتبع محاكى لسجلات المرضى.",
                    results: "نموذج أولي لتصنيف الذكاء الاصطناعي، واجهة دعم طبي للمحادثة، نظام إدارة مرضى محاكى.",
                    timeline: "10 أسابيع"
                },
                {
                    name: "مشروع التوعية بالهندسة الاجتماعية المدعوم بالذكاء الاصطناعي",
                    status: "محاكاة",
                    description: "محاكاة للتوعية بالأمن السيبراني توضح مخاطر الهندسة الاجتماعية المحسنة بالذكاء الاصطناعي. تم تطوير وكيل صوتي بالذكاء الاصطناعي لمحاكاة سيناريوهات تواصل واقعية لتسليط الضوء على كيفية كشف المعلومات الحساسة من خلال تكتيكات التلاعب.",
                    results: "نموذج أولي لمحاكاة الصوت بالذكاء الاصطناعي، إطار تقييم المخاطر، وثائق التوعية بالأمن السيبراني.",
                    timeline: "6 أسابيع"
                },
                {
                    name: "منصة التوصية بالمسار الوظيفي والتعلم المدعومة بالذكاء الاصطناعي",
                    status: "كلية علوم الحاسب",
                    description: "منصة تدعم الذكاء الاصطناعي تحلل المهارات التقنية والسمات الشخصية للطلاب للتوصية بمسارات التخصص المناسبة مثل Front-End و Back-End و Full-Stack و AI و DevOps. يوفر النظام أيضًا موارد تعليمية مجانية منسقة تتماشى مع كل مسار موصى به.",
                    results: "نظام تسجيل التوافق بالذكاء الاصطناعي، رسم خرائط منظم للمهارات والشخصية، محرك خارطة طريق تعليمية مجانية منسقة.",
                    timeline: "8 أسابيع"
                },
                {
                    name: "متصفح الجينوم الحديث - منصة تصور جينومي قائمة على GFF / GFF3",
                    status: "أداة بحثية",
                    description: "منصة لتصفح الجينوم تمكن الباحثين من استكشاف التسلسلات الجينومية باستخدام ملفات التعليق التوضيحي GFF و GFF3. يوفر النظام تصورًا منظمًا للميزات الجينومية مع تنقل تفاعلي وعرض محسن للتعليقات التوضيحية.",
                    results: "محرك تحليل GFF/GFF3، واجهة تصور تفاعلية للجينوم، نظام عرض تعليقات توضيحية محسن.",
                    timeline: "8 أسابيع"
                },
                {
                    name: "نظام إدارة الصالة الرياضية - جامعة المنصورة الجديدة",
                    status: "مشروع داخلي",
                    description: "نظام إدارة غير تقليدي لمركز اللياقة البدنية يدمج وظائف إدارة الصالات الرياضية القياسية مع وحدة توصيات مدعومة بالذكاء الاصطناعي. يقوم الذكاء الاصطناعي بإنشاء خطط تمرين وتغذية مخصصة بناءً على ملفات الطلاب الفردية، ليعمل كمدرب شخصي افتراضي.",
                    results: "نظام إدارة مطور بالكامل، محرك توصيات مخصص مدعوم بالذكاء الاصطناعي، بنية جاهزة للنشر.",
                    timeline: "10 أسابيع"
                },
                {
                    name: "نظام تعديل النصوص المعتمد على الذكاء الاصطناعي وتحسين اللغة حسب السياق",
                    status: "وحدة معالجة لغة طبيعية",
                    description: "نظام NLP مدعوم بالذكاء الاصطناعي مصمم للكشف عن اللغة غير اللائقة وإنشاء صياغة بديلة واعية بالسياق. يستكشف المشروع تعديل التواصل المدفوع بالذكاء الاصطناعي وتم طلبه كوحدة تكامل محتملة داخل تطبيق وسائط اجتماعية مصري.",
                    results: "محرك تحليل نصوص واعي بالسياق، وحدة تحسين النبرة، إطار عمل تعديل جاهز للتكامل.",
                    timeline: "6 أسابيع"
                }
            ]
        },

        // Leadership Page
        leadership: {
            pageTitle: "فريق القيادة",
            pageSubtitle: "تعرف على الطلاب الذين يقودون رؤية إرث",

            team: [
                {
                    name: "زياد الليثي",
                    title: "الرئيس التنفيذي",
                    bio: "توجيه استراتيجية إرث والإشراف على تنسيق جميع الأقسام لضمان تحقيق الأهداف المحددة للمنظمة.",
                    linkedin: "#"
                },
                {
                    name: "محمد عابد",
                    title: "مدير العمليات التنفيذي",
                    bio: "تنظيم العمليات اليومية وربط الفرق المختلفة لضمان تنفيذ المشاريع وفقاً للخطط والجداول الزمنية.",
                    linkedin: "#"
                },
                {
                    name: "عادل إبراهيم",
                    title: "رئيس تطوير الأعمال",
                    bio: "إنشاء وبناء الشراكات مع المؤسسات والشركات، والعمل على خلق فرص للنمو والتوسع التنظيمي.",
                    linkedin: "#"
                },
                {
                    name: "خالد يوسف",
                    title: "مدير التسويق التنفيذي",
                    bio: "تطوير استراتيجيات التسويق وإدارة التواصل مع المستفيدين والشركاء، بما في ذلك محتوى العلامة التجارية والأنشطة الترويجية.",
                    linkedin: "#"
                },
                {
                    name: "أحمد شحاتة",
                    title: "مدير الفريق التقني",
                    bio: "إدارة أنظمة وبنية التكنولوجيا التحتية للمنظمة، وضمان أعلى كفاءة واستقرار في دعم المشاريع والعمليات.",
                    linkedin: "#"
                }
            ]
        },

        // Join Page
        join: {
            pageTitle: "انضم لإرث",
            pageSubtitle: "حول نفسك إلى محترف جاهز للشركات",

            whyTitle: "لماذا تنضم لإرث؟",
            whyPoints: [
                "اختبر هياكل مؤسسية حقيقية ومعايير أداء",
                "بناء مهارات مهنية لا تعلمها الجامعات",
                "العمل على مشاريع واقعية بنتائج قابلة للقياس",
                "التواصل مع أقران طموحين ومرشدين من الشركات",
                "التميز لأصحاب العمل كموظف مُدرب ومنخفض المخاطر"
            ],

            processTitle: "عملية التوظيف",
            processSteps: [
                {
                    step: "01",
                    title: "التقديم",
                    description: "قدم طلبك مع السيرة الذاتية وبيان الاهتمام"
                },
                {
                    step: "02",
                    title: "الفحص الأولي",
                    description: "مراجعة المؤهلات والدافع وملاءمة القسم"
                },
                {
                    step: "03",
                    title: "التقييم",
                    description: "أكمل تقييماً عملياً ذا صلة بالقسم المطلوب"
                },
                {
                    step: "04",
                    title: "المقابلة",
                    description: "مقابلة مهنية مع رؤساء الأقسام والفريق التنفيذي"
                },
                {
                    step: "05",
                    title: "الإعداد",
                    description: "مرحباً بك في إرث! ابدأ رحلة المحاكاة المؤسسية"
                }
            ],

            formTitle: "نموذج التقديم",

            // Form sections
            form: {
                personalInfo: "المعلومات الشخصية",
                academicInfo: "المعلومات الأكاديمية",
                applicationQuestions: "أسئلة التقديم",
                optionalLinks: "روابط مهنية (اختياري)",

                // Personal fields
                fullName: "الاسم الكامل *",
                email: "البريد الإلكتروني *",
                phone: "رقم الهاتف *",
                universityId: "الرقم الجامعي *",

                // Academic fields
                academicYear: "السنة الأكاديمية *",
                selectYear: "اختر سنتك الدراسية",
                level1: "المستوى الأول",
                level2: "المستوى الثاني",
                level3: "المستوى الثالث",
                level4: "المستوى الرابع",
                level5: "المستوى الخامس",

                faculty: "الكلية *",
                selectFaculty: "اختر كليتك",
                business: "الأعمال",
                law: "القانون",
                engineering: "الهندسة",
                cse: "علوم وهندسة الحاسب",
                science: "العلوم",
                medicine: "الطب",
                dentistry: "طب الأسنان",
                pharmacy: "الصيدلة",
                ahst: "العلوم الصحية التطبيقية",
                nursing: "التمريض",
                textile: "علوم وهندسة المنسوجات",
                social: "العلوم الاجتماعية والإنسانية",
                media: "الإعلام والاتصال",
                physicalTherapy: "العلاج الطبيعي",

                department: "القسم المفضل *",
                selectDepartment: "اختر القسم المفضل",
                dept: {
                    hr: "الموارد البشرية",
                    marketingComms: "التسويق والاتصالات",
                    technical: "الفريق التقني",
                    businessDev: "تطوير الأعمال",
                    projectMgmt: "إدارة المشاريع"
                },

                // Application questions
                motivation: "لماذا تريد الانضمام لإرث؟ *",
                skills: "ما المهارات التي يمكنك تقديمها لإرث؟ *",
                selectSkills: "اختر قسماً أولاً",
                skillsHint: "اختر جميع المهارات المناسبة",
                otherSkills: "يرجى تحديد مهاراتك *",

                // Optional links
                linkedin: "حساب LinkedIn",
                portfolio: "معرض الأعمال / GitHub",

                // Submit
                submit: "إرسال الطلب"
            },
            formPlaceholder: "جاري تحميل نموذج التقديم...",

            expectationsTitle: "ما نتوقعه",
            expectationsText: "إرث ليست نادياً طلابياً عادياً. نتوقع التزاماً مهنياً ومساءلة وعقلية النمو. يكرس الأعضاء 8-12 ساعة أسبوعياً، يلتزمون بالمواعيد النهائية باستمرار، ويتقبلون الملاحظات. إذا كنت جاداً بشأن التطوير المهني، فأنت تنتمي لهنا."
        },

        // Contact Page
        contact: {
            pageTitle: "تواصل معنا",
            pageSubtitle: "لنبدأ المحادثة",

            infoTitle: "ابق على تواصل",
            email: "البريد الإلكتروني",
            emailValue: "info@erth.dev",
            phone: "الهاتف",
            phoneValue: "+20 XXX XXX XXXX",
            location: "الموقع",
            locationValue: "مصر",

            formTitle: "أرسل لنا رسالة",
            formName: "اسمك",
            formEmail: "بريدك الإلكتروني",
            formSubject: "الموضوع",
            formMessage: "الرسالة",
            formSubmit: "إرسال",
            formPlaceholder: "جاري تحميل نموذج التواصل..."
        },

        // Products Page
        products: {
            pageTitle: "منتجاتنا",
            pageSubtitle: "منصات رقمية طورتها إرث لربط المواهب وتنظيم التعلّم وتسريع النمو القابل للقياس.",
            keyFeatures: "أهم المزايا:",
            bestFor: "مناسب لـ:",
            unifiedTitle: "كيف تعمل المنصتان معًا",
            unifiedText: "منصة ERTH LMS تطور المهارات من خلال تعلم منظم، بينما ERTH Matching يربط هذه المهارات بالفرص المناسبة. معًا يشكلان نظامًا متكاملًا من التعلم إلى التأثير.",
            flow1Title: "1. تعلّم",
            flow1Text: "اكتسب معرفة ومهارات عملية مخصصة للدور داخل منصة LMS.",
            flow2Title: "2. قيّم",
            flow2Text: "تابع النتائج عبر المهام المرحلية والتقييمات وإشارات الجاهزية.",
            flow3Title: "3. تطابق",
            flow3Text: "احصل على فرص ومشاريع مناسبة بناءً على كفاءتك المثبتة.",
            finalTitle: "جاهز لتجربة منصات إرث؟",
            finalText: "ابدأ التعلّم، واحصل على الفرصة المناسبة، وشارك في مشاريع طلابية عالية التأثير.",
            matchingShortCta: "افتح Matching",
            lmsShortCta: "افتح LMS",
            matching: {
                badge: "منصة مطابقة المواهب",
                title: "matching.erth.dev",
                description: "منصة مطابقة منظمة تربط مهارات الطلاب ومشاريعهم واهتماماتهم بالفرص والأدوار الأنسب داخل الفرق.",
                f1: "مطابقة قائمة على الملف الشخصي والمهارات والاهتمامات",
                f2: "اكتشاف فرص للمشاريع والفرق الداخلية",
                f3: "آلية ترشيح عادلة لقادة الفرق",
                f4: "خط جاهزية أداء لتوزيع الطلاب على الأدوار",
                bestFor: "الطلاب الباحثون عن الدور الأنسب، والفرق التي تحتاج مواهب موثقة بسرعة.",
                cta: "زيارة matching.erth.dev"
            },
            lms: {
                badge: "منصة التعلّم",
                title: "lms.erth.dev",
                description: "تجربة LMS مركزية لتطوير المهارات بشكل موجّه، وتتبع المهام، والتدرج من المبتدئ إلى عضو جاهز للتنفيذ.",
                f1: "مسارات تعلم منظمة حسب القسم والدور",
                f2: "مهام مرحلية مع مخرجات عملية",
                f3: "وضوح التقدم للطلاب والموجهين والمديرين",
                f4: "مؤشرات جاهزية تدعم قرارات توزيع المشاريع",
                bestFor: "الأعضاء الذين يريدون خارطة نمو واضحة، والفرق التي تحتاج معايير ثابتة.",
                cta: "زيارة lms.erth.dev"
            }
        },

        // Footer
        footer: {
            tagline: "بناء قادة الشركات المصرية المستقبليين",
            quickLinks: "روابط سريعة",
            connect: "تواصل",
            copyright: "© 2026 إرث. جميع الحقوق محفوظة.",
            university: "قريباً في جميع الجامعات المصرية"
        }
    }
};

export default content;
