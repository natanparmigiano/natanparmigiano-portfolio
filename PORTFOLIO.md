# Natan Parmigiano - Portfolio

## About Me

I'm a Principal Level Engineer and Software Architect with experience spanning distributed systems, cloud-native platforms, enterprise software, real-time applications, and technical leadership.

Over the years I've worked across the entire software lifecycle, from hands-on implementation and infrastructure design to architecture, technical leadership, hiring, product strategy, and operational scaling. My work has included internal products, client-facing platforms, enterprise systems, outsourced development, and startup environments.

This portfolio serves as a curated collection of projects and initiatives I've participated in throughout my career.

Obviously not exaustive, but the intent is to give an idea of the challenges i faced and handled throughout my experience.

---

## About This Portfolio

Many of the projects listed here were developed for clients, private organizations, or internal business operations. As a result, some project names, business details, architectural specifics, and metrics have been partially redacted or generalized.

Where disclosure is permitted, project names and public information are provided.

Where disclosure is restricted, projects are presented using high-level descriptions that preserve the technical and organizational challenges while respecting confidentiality obligations.

The goal of this portfolio is not to showcase source code, but to provide insight into the types of systems I have worked on, the responsibilities I assumed, and the engineering challenges encountered along the way.

### Disclosure Levels

🟢 Public — Project name and details can be shared.

🟡 Partially Redacted — Some business details have been generalized.

🔴 Confidential — Project presented using a high-level description only.

---
---

# Regulatory Inspection & Administrative Enforcement Platform | 2026

CTO | Paganini Tech
🟡 Partially Redacted
🌟 Proudest Projects Showcase
Ranking: 2

Team size: 4

## Description

Led the architecture and delivery of a large-scale regulatory operations platform responsible for managing the complete lifecycle of vehicle inspection, administrative enforcement, legal proceedings, financial processing, and compliance workflows for a Brazilian public-sector regulatory entity responsible for overseeing Liquefied Petroleum Gas (GLP) transportation.

The platform digitized and unified interactions between vehicle owners, accredited inspection stations, field inspectors, legal professionals, attorneys, administrators, and financial operators through a single operational ecosystem.

The system manages the full inspection lifecycle, including vehicle registration, scheduling, inspection execution, certificate issuance, compliance verification, and accredited inspection station operations. Beyond inspections, the platform also supports a complete administrative enforcement process spanning infraction issuance, notifications, legal defenses, legal opinions, appeals, financial penalties, payment processing, and case archival.

A dedicated mobile experience enables field inspectors to perform on-site inspections, capture photographic evidence, collect signatures, validate certificates, generate infraction reports, and initiate enforcement proceedings directly from the field. Administrative users manage operational workflows through dedicated portals covering legal review, financial processing, reporting, inspection station management, compliance oversight, and platform administration.

The platform also incorporates sophisticated financial workflows, including GRSP fine generation, boleto issuance, multi-provider payment processing, revenue sharing, reconciliation, and automated financial controls. Automated communication workflows provide escalation-based notifications through email, WhatsApp, and SMS, ensuring stakeholders remain informed throughout every stage of regulatory proceedings.

Despite the scale and complexity of the solution, the platform was delivered over approximately six months by a core engineering team of only two developers. The resulting system contains dozens of operational modules, supports multiple independent user personas, and manages the complete regulatory lifecycle from inspection scheduling through legal case resolution and financial settlement.

I maintained ownership of platform architecture, technical direction, stakeholder alignment, domain modeling, and overall solution design throughout the project lifecycle.

## Roles I Played

* Chief Architect
* Technical Lead
* Solution Architect
* Backend Engineer
* Platform Engineer
* Systems Designer
* Product Strategist
* Infrastructure Engineer
* Stakeholder Liaison

## Tech Stack

* Bun
* TypeScript
* Vue 3
* Quasar
* Hono
* PostgreSQL
* Drizzle ORM
* Redis
* BullMQ
* AWS S3
* AWS SES
* Capacitor
* Better Auth
* WebSockets
* Multi-Channel Messaging
* WhatsApp Cloud API
* SMS Integrations
* Stripe API
* Mercado Pago
* Banco do Brasil API
* Asaas API
* Docker Swarm
* Nginx

## Challenges & Lessons

### Challenge

Designing and delivering a platform capable of supporting multiple independent regulatory domains—including inspections, enforcement, legal proceedings, financial operations, notifications, scheduling, and public-facing services—while maintaining consistency, auditability, and operational simplicity.

The project also required translating highly bureaucratic, partially undocumented regulatory workflows into deterministic software processes while accommodating the realities of public-sector operations and legal compliance requirements.

Perhaps the most significant challenge was the scale of delivery itself: producing a production-ready enterprise platform spanning dozens of operational modules, multiple user personas, mobile and web applications, financial systems, and legal workflows with a core team of only two engineers.

### Solution

Designed a modular monorepo architecture composed of shared packages, domain-driven modules, asynchronous workers, notification services, and reusable infrastructure components. Established clear domain boundaries across inspection, enforcement, legal, financial, and administrative areas while leveraging queues, automation workflows, and integration services to minimize operational overhead.

Developed reusable platform foundations that accelerated delivery while preserving long-term maintainability, allowing a small engineering team to implement a system that would traditionally require significantly larger staffing levels.

### Lessons Learned

* Enterprise software complexity is primarily driven by business processes rather than technology choices.
* Regulatory and legal workflows frequently contain edge cases and exceptions that only emerge through deep collaboration with operational stakeholders.
* Strong architectural boundaries are essential when multiple domains—legal, financial, operational, and administrative—must coexist within a single platform.
* Auditability, traceability, and workflow transparency become first-class architectural concerns in public-sector systems.
* Well-designed platform foundations can dramatically amplify the effectiveness of small engineering teams.
* Delivery speed is often constrained more by requirements discovery and domain understanding than by implementation effort.
* Some of the most challenging engineering projects involve translating complex human processes into deterministic software systems without losing operational flexibility.
* Team size alone is not the primary predictor of delivery capability when architecture, tooling, and execution discipline are properly aligned.

---

# Enterprise Notary Services Platform | 2025

CTO | Paganini Tech
🟡 Partially Redacted

Team size: 4

## Description

Led the development of a B2B platform for one of Brazil's largest notary services providers, extending an existing consumer-focused ecosystem to support the operational needs of law firms, corporate customers, and high-volume enterprise users.

While the organization already operated a successful B2C marketplace, enterprise customers required fundamentally different workflows, including bulk request submission, API integrations, automated processing pipelines, consolidated reporting, account-level billing, credit management, wallet systems, and financial reconciliation capabilities.

The platform was designed to provide organizations with streamlined access to notary services at scale while integrating seamlessly with the company's existing infrastructure, operational processes, and service fulfillment systems. Rather than replacing existing workflows, the solution extended the ecosystem to support enterprise-grade operational requirements while preserving compatibility with established business processes.

Development was carried out by a team of three professionals, with responsibility for architecture, technical direction, integration strategy, and overall platform design under my leadership.

## Roles I Played

* Solution Architect
* Technical Lead
* Backend Engineer
* Platform Engineer
* Systems Integrator
* Product Strategist
* Stakeholder Liaison

## Tech Stack

* TypeScript
* Vue.js
* LibSQL
* Redis
* tRPC
* Queue Systems
* Financial Reconciliation Systems
* API Integrations
* Wallet Systems
* Multi-Tenant Architectures
* JavaScript
* HTML
* CSS

## Challenges & Lessons

### Challenge

Designing an enterprise-focused platform on top of an ecosystem originally built around consumer workflows.

The project required translating B2C interaction patterns into enterprise operational processes while integrating with existing systems, preserving business continuity, and supporting customer-specific requirements such as bulk operations, automated workflows, financial controls, and API-driven integrations.

### Solution

Designed a dedicated B2B operational layer that leveraged existing infrastructure while introducing workflows tailored to enterprise customers. Implemented bulk processing capabilities, customer-level reporting, billing automation, wallet management, credit controls, reconciliation mechanisms, and integration endpoints that enabled organizations to interact programmatically with the platform.

### Lessons Learned

* B2B and B2C products often solve similar business problems while requiring fundamentally different operational workflows.
* Enterprise customers prioritize automation, integration, reporting, and operational efficiency over user experience features typically associated with consumer products.
* Extending existing ecosystems is frequently more valuable than replacing them entirely.
* Integration strategy becomes a critical architectural concern when multiple operational systems must coexist.
* Financial controls and reconciliation requirements often emerge naturally as platforms evolve toward enterprise use cases.
* Understanding how customers actually operate is essential when adapting products from consumer-oriented to enterprise-oriented workflows.

---

# Multi-Tenant Financial Operations & Bank Reconciliation Platform | 2024

CTO | Paganini Tech
🟡 Partially Redacted

Team size: 3

## Description

Led the development of a multi-tenant financial operations platform designed to centralize and automate accounts payable, accounts receivable, bank reconciliation, recurring payments, payment scheduling, supplier management, customer management, and financial control workflows.

The platform was designed to support organizations operating across multiple business units and financial structures, providing hierarchical tenant isolation while allowing consolidated visibility into financial operations. Users could manage payment lifecycles, monitor upcoming obligations, reconcile banking activity, track receivables, and oversee supplier and customer relationships through a unified operational interface.

A significant focus of the project was ensuring financial accuracy and operational visibility while reducing manual reconciliation efforts. The platform incorporated automated reconciliation workflows, recurring payment management, payment splitting capabilities, and financial monitoring tools designed to improve day-to-day financial operations.

Development was carried out by a team of three professionals, with responsibility for architecture, technical direction, platform design, and implementation leadership under my supervision.

## Roles I Played

* Solution Architect
* Technical Lead
* Backend Engineer
* Platform Engineer
* Data Modeler
* Product Contributor
* Stakeholder Liaison

## Tech Stack

* TypeScript
* Vue.js
* LibSQL
* Redis
* Queue Systems
* Caching Systems
* Financial Reporting Systems
* Multi-Tenant Architectures
* JavaScript
* HTML
* CSS

## Challenges & Lessons

### Challenge

Designing a financial platform capable of supporting multiple organizations, financial structures, and operational workflows while maintaining correctness, traceability, and consistency across financial records.

The system needed to accommodate recurring transactions, reconciliation workflows, payment scheduling, and multi-level tenant structures without compromising financial integrity or operational usability.

### Solution

Developed a multi-tenant architecture supporting isolated financial operations while enabling centralized management and reporting. Implemented reconciliation workflows, recurring payment engines, financial tracking capabilities, and operational dashboards designed to reduce manual effort and improve financial visibility.

Leveraged Redis-based caching and queueing mechanisms to support asynchronous financial processing workflows while maintaining responsiveness across the platform.

### Lessons Learned

* Financial systems place a greater emphasis on correctness, traceability, and auditability than on raw technical complexity.
* Multi-tenant architectures require careful consideration of data isolation, permissions, and reporting requirements from the outset.
* Bank reconciliation workflows often reveal inconsistencies and edge cases that are not apparent during requirements gathering.
* Financial software succeeds when it reduces operational effort while increasing confidence in financial data.
* Well-designed asynchronous workflows can significantly improve user experience without compromising transactional integrity.
* Simplicity and reliability are often more valuable than sophistication in financial applications.

---

# FastFlow - Multi-Channel Agent & Customer Operations Platform | 2024

CTO | Paganini Tech
🟢 Public
🌟 Proudest Projects Showcase
Ranking: 1

Team size: 8

## Description

Led the architecture and long-term evolution of FastFlow, a full-featured multi-channel customer operations and AI agent platform designed to unify customer communication, automation, operational workflows, and contact center operations within a single ecosystem.

The platform combines customer relationship management, contact management, call center operations, queue management, department routing, conversation transfers, KPI tracking, operational analytics, and agent orchestration capabilities. Administrative users can manage customer interactions through a real-time operational console while monitoring performance indicators and workflow execution across multiple channels.

FastFlow supports communication through WhatsApp, web chat, and additional messaging channels, providing a unified operational experience regardless of customer entry point.

A core objective of the platform was enabling organizations to create, deploy, and manage conversational agents without requiring software development. Through the platform's user interface, users can build deterministic NLP/NLU-based agents, sentiment-aware workflows, hybrid human-assisted automation, or fully autonomous LLM-powered agents complete with memory, tool calling, workflow orchestration, custom integrations, and human-in-the-loop escalation mechanisms.

Unlike many AI initiatives focused exclusively on question-answering or triage workflows, FastFlow was designed to support complex operational processes, allowing agents to execute business actions, interact with external systems, coordinate workflows, and participate directly in customer operations.

The platform includes proprietary NLP and NLU capabilities developed in-house, including named entity recognition, dynamic entity extraction, sentiment analysis, intent classification, workflow orchestration, and conversational state management. The LLM agent framework was also designed internally, including context optimization strategies, execution harnesses, tool orchestration, conversational memory management, operational safeguards, and agent governance mechanisms.

The platform is currently deployed in production environments supporting multiple organizations and operational scenarios. Development involved a rotating team of more than eight professionals over multiple years, while overall architecture ownership, technical direction, platform vision, and AI strategy remained under my leadership.

## Roles I Played

* Chief Architect
* Technical Lead
* AI Systems Architect
* Platform Architect
* Product Strategist
* Backend Engineer
* Distributed Systems Engineer
* AI Agent Framework Designer
* Stakeholder Liaison

## Tech Stack

* TypeScript
* PostgreSQL
* Vue.js
* Oracle Database
* Redis
* WebSockets
* Pub/Sub Messaging
* Processing Queues
* Distributed Services
* NLP Systems
* NLU Systems
* Sentiment Analysis
* Named Entity Recognition
* LLM Agents
* Agent Orchestration Frameworks
* Human-in-the-Loop Systems
* WhatsApp Business API
* Web Chat Platforms

## Challenges & Lessons

### Challenge

Designing a platform capable of supporting fundamentally different automation paradigms while maintaining a unified operational model.

The system needed to support deterministic workflows, NLP/NLU-driven interactions, sentiment-aware automation, human-assisted operations, and autonomous LLM agents without forcing organizations into a single architectural approach. Additionally, the platform had to operate as a mission-critical customer communication system while maintaining observability, auditability, scalability, and operational control.

### Solution

Designed a service-oriented architecture leveraging distributed processing, Pub/Sub messaging, queues, real-time communication channels, and modular execution engines. Built a flexible agent runtime capable of supporting multiple automation models while exposing a unified configuration and operational experience through the platform interface.

Developed in-house NLP, NLU, sentiment analysis, orchestration, and agent execution components, allowing organizations to compose complex customer-facing workflows while maintaining governance and operational oversight.

### Lessons Learned

* Production AI systems are primarily workflow orchestration problems rather than language model problems.
* Deterministic automation and LLM-based automation are complementary technologies rather than competing approaches.
* Human-in-the-loop workflows remain essential for many operational domains where accountability and risk management matter.
* Agent platforms require strong governance, observability, and operational controls to remain trustworthy at scale.
* Context management, tool orchestration, and workflow design may have a greater impact on outcomes than model selection.
* Building reusable platforms creates significantly more long-term value than delivering isolated automation solutions.
* Successful AI products are ultimately judged by operational outcomes rather than model sophistication.
* The hardest engineering challenges emerge from balancing flexibility, reliability, scalability, and operational simplicity within a single platform.

---

# Primary Care Operations & Electronic Medical Records Platform | 2023

CTO | Paganini Tech
🟡 Partially Redacted
🌟 Proudest Projects Showcase
Ranking: 5

Team size: 6

## Description

Led the development of a comprehensive healthcare operations platform designed to manage the complete patient journey across multiple primary care facilities.

Rather than focusing solely on electronic medical records, the platform encompassed the full operational lifecycle of patient care, including reception and registration, queue management, ticket issuance and calling, medical consultations, electronic health records, prescriptions, internal medication control, inventory management, pharmacy workflows, medication dispensation, analytical dashboards, and operational reporting.

The platform ultimately became the operational backbone for four distinct healthcare centers, supporting thousands of patients and enabling healthcare professionals to manage clinical, administrative, and pharmaceutical processes through a unified system.

A multidisciplinary team of five professionals participated in the development effort. In addition to architectural leadership and technical direction, a significant portion of the project involved direct collaboration with healthcare professionals, operational staff, and administrators to ensure the platform accurately reflected real-world healthcare workflows.

This project provided extensive exposure to the challenges of deploying mission-critical software in active healthcare environments, where operational continuity, workflow accuracy, and user adoption are often as important as the software itself.

## Roles I Played

* Solution Architect
* Technical Lead
* Healthcare Systems Designer
* Backend Engineer
* Platform Engineer
* Product Strategist
* Stakeholder Liaison

## Tech Stack

* TypeScript
* Node.js
* Oracle Database
* Oracle APEX
* Redis
* Healthcare Information Systems
* Inventory Management Systems
* Reporting & Analytics Platforms
* JavaScript
* HTML
* CSS

## Challenges & Lessons

### Challenge

Building a platform capable of supporting the complete operational workflow of multiple healthcare facilities while accommodating the realities of day-to-day clinical operations.

The greatest challenge emerged during deployment and adoption rather than software development itself. As the platform was introduced into active healthcare environments, numerous undocumented processes, operational exceptions, edge cases, and facility-specific workflows surfaced that had never been formally documented or considered during requirements gathering.

Additionally, successful adoption required training medical professionals, administrative personnel, pharmacy staff, and operational teams while maintaining continuity of care for thousands of patients.

### Solution

Designed a modular architecture capable of evolving alongside operational discoveries while maintaining system stability. Worked closely with healthcare professionals throughout deployment, continuously refining workflows, expanding functionality, and adapting the platform to real-world operational requirements as they emerged.

Established iterative feedback loops with clinical and administrative teams, enabling rapid identification and resolution of workflow gaps while ensuring the platform remained aligned with healthcare operations.

### Lessons Learned

* The most complex workflows in healthcare are often the undocumented ones that emerge only during real-world operation.
* Successful healthcare software deployment depends as much on organizational adoption and training as on technical implementation.
* Requirements gathering rarely captures the full complexity of operational environments; meaningful discoveries frequently occur during deployment.
* Healthcare organizations contain a large number of role-specific workflows that must coexist within a single operational ecosystem.
* Operational flexibility is critical when building systems that support real-world clinical environments.
* Software implementation projects should be viewed as organizational transformation initiatives rather than purely technical endeavors.
* The true measure of success for operational software is its ability to become invisible within the daily workflow of its users.

---

# Healthcare NPS Analytics & Reporting Platform | 2022

CTO | Paganini Tech
🟡 Partially Redacted

Team size: 5

## Description

Developed a patient experience measurement and analytics platform for a public-sector healthcare initiative operating across multiple hospitals and primary care units in São Paulo.

The platform allowed patients to quickly access and complete satisfaction and Net Promoter Score (NPS) surveys through QR codes placed throughout participating healthcare facilities. While the data collection experience was intentionally simple, the primary value of the system was generated through the analytical and reporting capabilities built on top of the collected information.

Working closely with healthcare administrators and operational stakeholders, we designed custom dashboards, reports, and analytical workflows specifically aligned with the reporting requirements imposed by public-sector healthcare oversight processes. The platform transformed raw patient feedback into actionable operational insights, enabling healthcare units to monitor service quality, identify areas for improvement, and produce the reports required by government entities.

The solution was successfully adopted across more than six healthcare facilities and became an important tool for measuring patient experience and supporting operational decision-making.

Certain organizational details have been generalized due to confidentiality requirements.

## Roles I Played

* Solution Architect
* Technical Lead
* Full Stack Developer
* Data Modeler
* Analytics Platform Developer
* Reporting Systems Designer
* Stakeholder Liaison

## Tech Stack

* Vue.js
* TypeScript
* Oracle Database
* Redis
* Analytics Dashboards
* Reporting Systems
* Data Visualization
* QR Code Systems
* JavaScript
* HTML
* CSS

## Challenges & Lessons

### Challenge

Transforming simple survey responses into meaningful operational intelligence capable of supporting healthcare administrators while simultaneously satisfying public-sector reporting and compliance requirements.

The project required balancing ease of participation for patients with the need to generate structured, trustworthy, and actionable information for healthcare managers and government stakeholders.

### Solution

Designed custom analytical models, dashboards, and reporting workflows tailored to the operational realities of healthcare facilities. Developed reporting structures aligned with public-sector oversight requirements, enabling healthcare organizations to derive value from patient feedback while streamlining compliance and reporting activities.

### Lessons Learned

* Data collection is often the simplest part of an analytics platform; extracting meaningful insights is where most of the value is created.
* Effective reporting systems must be designed around stakeholder decisions rather than available data.
* Public-sector analytics initiatives require careful alignment with regulatory and operational reporting requirements.
* Healthcare quality metrics become significantly more valuable when presented in the context of operational improvement opportunities.
* Tailored dashboards frequently outperform generic reporting solutions because they reflect the specific workflows and objectives of the organizations using them.
* The success of analytical systems depends heavily on stakeholder trust in both the data and the methodologies used to interpret it.

---

# Conversational Customer Support & Ticketing Platform | 2021

CTO | Paganini Tech
🟡 Partially Redacted

Team size: 2

## Description

Building upon the technologies, workflows, and infrastructure originally developed for our healthcare conversational platform, we created a second-generation conversational agent focused on customer support, triage, and communication management for a large automotive components manufacturer.

The platform centralized all customer communication through a single WhatsApp channel, serving as the primary entry point for support requests, inquiries, order-related communications, and customer interactions. Using NLP, NLU, sentiment analysis, and workflow automation technologies, the system was capable of understanding customer intent, classifying requests, routing conversations, and escalating interactions to human operators when necessary.

In addition to the conversational experience itself, the platform included a complete operational environment for customer support teams, allowing agents to manage conversations, monitor customer interactions, intervene when required, and coordinate support activities through a unified interface.

This project represented a significant evolution of the conversational platform architecture originally developed for healthcare applications, expanding the focus from clinical workflows to large-scale customer communication management. Many of the architectural decisions, interaction patterns, and operational capabilities developed during this initiative later became the foundation for future conversational and automation projects within the organization.

## Roles I Played

* Solution Architect
* Technical Lead
* AI & NLP Engineer
* Backend Engineer
* Platform Engineer
* Product Designer
* Systems Integrator

## Tech Stack

* TypeScript
* Node.js
* Redis
* DynamoDB
* WhatsApp Business API
* NLP Systems
* NLU Systems
* Sentiment Analysis
* Conversational Workflows
* Queue Systems
* Real-Time Messaging
* Customer Support Platforms

## Challenges & Lessons

### Challenge

Transforming a healthcare-focused conversational platform into a reusable communication framework capable of supporting customer service, ticket triage, and operational support workflows across an entirely different industry.

The platform needed to balance automation efficiency with human intervention, ensuring customers could interact naturally while maintaining visibility, traceability, and operational control for support teams.

### Solution

Generalized the conversational architecture into a configurable platform capable of supporting multiple business domains and workflows. Expanded NLP and sentiment analysis capabilities, implemented support-specific routing and escalation mechanisms, and developed operational tooling allowing human agents to seamlessly collaborate with automated workflows.

### Lessons Learned

* The most valuable platforms emerge when solutions are designed for reuse rather than single-project implementation.
* Conversational systems require careful balance between automation and human intervention to maintain customer trust.
* Sentiment analysis and intent classification become significantly more valuable when integrated directly into operational workflows.
* Communication platforms are fundamentally workflow orchestration systems rather than messaging systems.
* Building reusable foundations early can dramatically accelerate future product development efforts.
* Successful automation initiatives focus on augmenting human operators rather than eliminating them from the process.

---

# Chatbot Based Clinical Decision Support & Patient Monitoring Platform | 2021

CTO | Paganini Tech
🟡 Partially Redacted
🌟 Proudest Projects Showcase
Ranking: 4

Team size: 2

## Description

Led the design and development of a conversational clinical decision support platform for a large public healthcare organization in Brazil, focused on the monitoring and management of patients undergoing anticoagulation treatment and Deep Vein Thrombosis (DVT) follow-up.

Years before the widespread adoption of LLMs and AI agents, the platform leveraged NLP, NLU, and deterministic decision-making workflows to provide patients with a natural conversational experience through WhatsApp. Rather than relying on traditional menu-based interactions, the system was capable of understanding patient responses, collecting clinical information, interpreting examination results, and guiding users through treatment monitoring protocols.

Working directly alongside medical specialists, we developed a clinical analysis engine capable of evaluating patient history, laboratory results, and treatment progression to generate recommended dosage adjustments and proposed medical conduct. Medical professionals retained full oversight of the process, reviewing and approving recommendations before prescription issuance.

The platform also included a complete operational portal for healthcare professionals, providing patient history dashboards, treatment tracking, intervention workflows, clinical oversight tools, and live conversation management capabilities. Healthcare professionals could monitor patient progression, intervene directly when necessary, and assume control of conversations at any stage.

The system remains in active operation years after its initial deployment and continues to support more than 800 active patients.

Development was carried out by a two-person team, with responsibility for overall architecture, AI workflows, clinical decision logic implementation, and platform design concentrated under my leadership.

The platform ultimately gained sufficient adoption to require registration with ANVISA (Brazil's National Health Surveillance Agency) as a Software as a Medical Device (SaMD). I participated directly in the regulatory submission process, contributing to the preparation of technical documentation and registration materials.

## Roles I Played

* Solution Architect
* Technical Lead
* AI & NLP Engineer
* Backend Engineer
* Clinical Workflow Designer
* Systems Integrator
* Infrastructure Engineer
* Stakeholder Liaison

## Tech Stack

* TypeScript
* Oracle Database
* Oracle APEX
* Redis
* DynamoDB
* WhatsApp Business API
* NLP Systems (perceptron based)
* NLU Systems (perceptron based, with entity extraction)
* Conversational Workflows
* Clinical Decision Engines
* Healthcare Analytics Dashboards

## Challenges & Lessons

### Challenge

Building a conversational healthcare platform capable of supporting clinical decision-making while maintaining safety, traceability, and regulatory accountability.

The platform needed to interpret patient-provided information, evaluate examination results, recommend treatment adjustments, and support healthcare professionals without introducing unnecessary operational burden or compromising patient safety.

Additionally, the project required delivering humanized conversational experiences through WhatsApp at a time when most automated healthcare systems relied heavily on rigid menu-driven interactions.

### Solution

Designed a hybrid architecture combining NLP and NLU capabilities with deterministic clinical workflows developed alongside medical professionals. Implemented a recommendation engine capable of evaluating patient information and proposing treatment adjustments while preserving physician oversight through mandatory approval workflows.

Integrated patient communication, clinical monitoring, and healthcare professional tooling into a unified platform capable of managing treatment lifecycles from data collection through clinical intervention and prescription approval.

### Lessons Learned

* Healthcare systems require significantly higher standards of explainability and auditability than most business applications.
* AI-assisted decision-making is most effective when designed to augment professional judgment rather than replace it.
* Deterministic workflows remain extremely valuable in domains where consistency, predictability, and safety are critical requirements.
* Successful conversational systems depend as much on workflow design and domain expertise as they do on language understanding technologies.
* Building trust with medical professionals requires transparency into how recommendations are generated and why decisions are made.
* Human-in-the-loop architectures provide a powerful balance between automation, operational efficiency, and risk management.
* Some of the most impactful AI systems are narrowly focused solutions designed around specific operational problems rather than general-purpose intelligence.


---

# Real-Time Auction Management & Bidding Platform | 2021

Senior Engineer | Paganini Tech
🟢 Public
🌟 Proudest Projects Showcase
Ranking: 3

Team size: 5

## Description

Led the architecture and development of a full-featured real-time auction platform supporting both physical and online auction operations.

The platform encompassed the entire auction lifecycle, from asset onboarding, lot preparation, auditing, and operational management through live auction execution and post-auction processing. Multiple auction modalities were supported, including real estate, vehicle, and general goods auctions, each with distinct workflows and operational requirements.

The system consisted of a public-facing website, administrative portal, live auction interface, moderator console, auctioneer console, physical auction projector interface, livestream management screens, and supporting operational tooling. Every stage of the process was fully auditable, providing complete traceability throughout the lifecycle of an asset and auction event.

A team of seven professionals participated in the six-month development effort. I was responsible for overall technical leadership, solution architecture, stakeholder requirements gathering, technical design workshops, and the implementation of several core platform components.

The platform successfully powered some of the largest vehicle auctions in São Paulo and was engineered to support highly competitive bidding environments where participants competed for lots in real time with near-instantaneous updates and strict consistency requirements.

## Roles I Played

* Solution Architect
* Technical Lead
* Backend Engineer
* Distributed Systems Engineer
* Platform Engineer
* Infrastructure Engineer
* Stakeholder Liaison
* Systems Designer

## Tech Stack

* Node.js
* PostgreSQL
* Redis
* WebSockets
* Pub/Sub Messaging
* Queue Systems
* Advisory Locking
* Distributed Caching
* Real-Time Event Processing
* Docker
* Linux
* Reverse Proxies
* WAF Technologies

## Challenges & Lessons

### Challenge

Building a highly concurrent real-time bidding platform capable of maintaining fairness, consistency, and responsiveness during competitive auction events where multiple users could simultaneously compete for the same asset.

The system also needed to support a broad range of operational workflows, provide full auditability, maintain low-latency updates across multiple interfaces, and remain resilient under hostile traffic conditions, including large-scale denial-of-service attacks that exceeded one terabyte of aggregate traffic.

### Solution

Designed a distributed event-driven architecture leveraging Redis, PostgreSQL, WebSockets, queueing systems, caching layers, and advisory locking mechanisms to coordinate bidding operations while preserving transactional integrity.

Implemented specialized concurrency controls, caching strategies, and infrastructure protections capable of maintaining platform availability and responsiveness during periods of intense bidding activity and large-scale external traffic events. Infrastructure tuning, WAF configuration, and aggressive caching strategies enabled the platform to remain operational throughout sustained attack scenarios.

### Lessons Learned

* Real-time systems are fundamentally distributed systems problems rather than user interface problems.
* Concurrency control and transactional correctness become critical when financial outcomes depend on system behavior.
* Advisory locking and carefully designed synchronization mechanisms can significantly simplify complex race-condition scenarios.
* Operational resilience must be considered from the earliest architectural stages rather than added later.
* Large-scale denial-of-service events expose weaknesses across the entire stack, from infrastructure and networking to application design and caching strategy.
* Full auditability is often as important as raw performance in systems involving financial transactions and regulatory requirements.
* The most difficult engineering challenges often emerge from the interaction between scale, concurrency, operational complexity, and business rules rather than any individual technical component.

---

# Specialized Healthcare Appointment & Care Platform | 2020

Senior Engineer | Paganini Tech
🟡 Partially Redacted

Team size: 4

## Description

Developed a specialized healthcare platform focused on connecting patients with medical professionals dedicated to wound care and chronic injury treatment.

The platform operated as a verticalized healthcare marketplace, allowing patients to discover nearby specialists, schedule appointments, manage consultations, and complete payments through a unified digital experience. Medical professionals were provided with dedicated workflows for managing appointments, patient interactions, and availability.

The solution consisted of a responsive web application and a mobile experience distributed as an app through Capacitor, supporting both patient-facing and practitioner-facing workflows. The platform also integrated payment processing, geolocation services, appointment scheduling, and healthcare-specific operational requirements.

A significant portion of the project involved implementing a strict visual identity and design system, ensuring consistency across all user experiences while delivering a complete production-ready application spanning multiple user roles and operational workflows.

Certain business details have been generalized due to confidentiality requirements.

## Roles I Played

* Solution Architect
* Technical Lead
* Full Stack Developer
* Backend Developer
* Frontend Developer
* Systems Integrator
* Product Contributor

## Tech Stack

* Vue.js
* Node.js
* GraphQL
* MySQL
* Capacitor
* Payment Integrations
* Geolocation Services
* JavaScript
* HTML
* CSS

## Challenges & Lessons

### Challenge

Building a healthcare-focused marketplace platform that balanced appointment scheduling, practitioner discovery, payments, and location-aware services while maintaining a consistent experience across web and mobile environments.

The platform required coordinating multiple user journeys, ensuring accurate scheduling workflows, integrating payment processing, and supporting location-based search capabilities for specialized healthcare providers.

### Solution

Designed and implemented a unified architecture leveraging Vue.js, Node.js, GraphQL, and MySQL to support patient and practitioner workflows. Developed appointment scheduling, payment processing, geolocation, and profile management capabilities while maintaining adherence to a strict design system across all interfaces.

### Lessons Learned

* Marketplace platforms introduce complexity through workflow orchestration rather than purely technical implementation challenges.
* Healthcare applications require particular attention to usability, trust, and information clarity.
* GraphQL can significantly simplify interactions between complex frontends and feature-rich backend services.
* Consistent design systems dramatically improve maintainability and user experience when multiple applications and user roles are involved.
* Scheduling systems become increasingly complex as business rules, availability constraints, and user expectations evolve.
* Multi-role platforms require careful consideration of permissions, workflows, and user experience boundaries from the earliest stages of development.


---

# Car Remove - Tow Truck Dispatch & Fleet Management Platform | 2020

Senior Engineer | Paganini Tech
🟢 Public

Team Size: 3

## Description

Designed and developed a complete digital dispatch platform connecting customers in need of towing services with registered tow truck operators through a mobile-first experience.

The platform functioned similarly to modern ride-sharing applications, allowing customers to request assistance through a mobile application while enabling drivers to register, manage availability, receive service requests, and execute towing operations.

Administrative users were provided with a management portal capable of manually creating requests, scheduling future services, assigning drivers, monitoring active operations, and intervening in dispatch workflows when necessary.

A significant portion of the project centered around geospatial functionality, including route estimation, location tracking, dynamic pricing calculations, travel distance estimation, and service area management. The platform also incorporated real-time communication features, enabling live updates of vehicle positions, request statuses, dispatch events, and route changes.

I was responsible for the overall architecture and technical direction of the project, defining the system design, technical requirements, integration patterns, and implementation approach. Development was executed with support from a frontend engineer responsible for portions of the mobile applications and a backend engineer assisting with administrative interfaces.

I also helped develop both sides in a hands on manner as lead engineer.

This project represented one of my earliest opportunities to design and deliver a real-time, location-aware platform operating across multiple applications and user roles.

## Roles I Played

* Solution Architect
* Technical Lead
* Backend Developer
* Platform Engineer
* Systems Designer
* Infrastructure Engineer
* GIS Systems Contributor

## Tech Stack

* Node.js
* React Native
* Oracle Database
* Oracle APEX
* Redis
* WebSockets
* Pub/Sub Messaging
* Queue Systems
* GIS Services
* Route Planning Systems
* Real-Time Event Processing
* JavaScript

## Challenges & Lessons

### Challenge

Building a real-time dispatch platform capable of coordinating customers, operators, and administrators while managing geospatial calculations, dynamic pricing logic, location tracking, and live operational updates.

The system required maintaining accurate state across multiple clients while continuously processing location updates, dispatch events, and service lifecycle transitions.

### Solution

Designed a hybrid architecture leveraging Node.js for application services and real-time communication, Redis for queueing and Pub/Sub workflows, React Native for mobile applications, and Oracle technologies for transactional and administrative workloads.

Implemented WebSocket-based communication channels to synchronize application state across operators, customers, and administrators while supporting geospatial calculations and dispatch decision-making.

### Lessons Learned

* Real-time systems introduce operational and architectural challenges that are fundamentally different from traditional request-response applications.
* Geospatial problems often appear simple at first but quickly become complex when accuracy, routing, pricing, and operational constraints are introduced.
* State synchronization across multiple clients becomes one of the primary engineering challenges in dispatch-oriented systems.
* Queueing and event-driven patterns significantly simplify the implementation of complex operational workflows.
* Platform architecture decisions become increasingly important as the number of interacting user roles and workflows grows.
* Building logistics-oriented software requires balancing technical correctness with operational practicality and user experience.

---

# Auction Lot Management & Tracking Platform | 2020

Senior Engineer | Paganini Tech
🟢 Partially Redacted

Team Size: 1

## Description

Developed an end-to-end warehouse and auction preparation management platform responsible for registering, tracking, and preparing asset lots prior to auction events.

The system enabled operators to create and manage auction lots, collect audit information, capture photographic evidence, and organize items through a structured preparation workflow. Once prepared, lots could be submitted to auction queues and labeled using QR codes generated by the platform and printed through integrated thermal printers.

The generated QR code served as the unique identity of each lot throughout its lifecycle, enabling traceability from initial registration through warehouse operations and ultimately into third-party auction systems through custom integrations.

This project represented my first experience working within an Oracle ecosystem. Despite having no prior experience with Oracle PL/SQL or Oracle-based application development, I was able to design, develop, deploy, and support the complete solution independently, including infrastructure setup and production deployment.

## Roles I Played

* Solution Architect
* Full Stack Developer
* Backend Developer
* Database Developer
* Infrastructure Engineer
* Deployment Engineer
* Systems Integrator

## Tech Stack

* Oracle Database
* Oracle PL/SQL
* Oracle APEX
* JavaScript
* HTML
* CSS
* QR Code Systems
* Thermal Printer Integrations
* Linux
* Enterprise Integrations

## Challenges & Lessons

### Challenge

Delivering a production-ready business-critical application using an unfamiliar technology stack while simultaneously learning Oracle development practices, Oracle PL/SQL, and the operational characteristics of the Oracle ecosystem.

The platform also required reliable traceability mechanisms capable of tracking physical assets across multiple operational stages and external system integrations.

### Solution

Rapidly acquired proficiency in Oracle development technologies while designing and implementing the complete solution, including database structures, business workflows, QR code tracking mechanisms, printing integrations, deployment processes, and external auction system integrations.

### Lessons Learned

* Strong engineering fundamentals transfer effectively across technology stacks and programming languages.
* Learning a new platform becomes significantly easier when the focus remains on solving business problems rather than mastering framework-specific details.
* Physical-world workflows introduce operational constraints that differ substantially from traditional software-only systems.
* Traceability and auditability become critical requirements when software systems interact with physical assets.
* Adaptability is one of the most valuable engineering skills, particularly when operating in environments with diverse technologies and customer requirements.
* Technology familiarity is often less important than the ability to quickly understand systems, constraints, and business objectives.

---

# Public Sector Legal Process Intelligence & Monitoring Platform | 2020

Senior Engineer | Paganini Tech
🟡 Partially Redacted

Team Size: 3

## Description

Developed a process intelligence and operational monitoring platform for a public-sector organization, designed to operate as an analytical and workflow management layer on top of SEI (Sistema Eletrônico de Informações).

The platform provided operational visibility into legal and administrative processes, enabling users to monitor deadlines, track process status, identify pending actions, receive notifications for upcoming obligations, and analyze trends across large volumes of ongoing activities.

One of the primary objectives of the system was transforming information stored within SEI into actionable operational intelligence. The platform continuously monitored process metadata, tracked relevant subjects and areas of interest, surfaced risks, and provided users with tools to proactively manage workload and compliance requirements.

The project required extensive integration with SEI, whose APIs were primarily designed for operational usage rather than analytical workloads. Significant effort was invested in designing efficient extraction and synchronization mechanisms capable of generating meaningful insights while minimizing API consumption and reducing impact on upstream systems.

This project provided valuable exposure to public-sector software delivery, regulatory requirements, formal validation processes, and the unique operational realities of government technology environments.

## Roles I Played

* Solution Architect
* Senior Software Engineer
* Backend Developer
* Systems Integrator
* Data Modeler
* Analytics Platform Developer
* Technical Advisor

## Tech Stack

* Node.js
* Microsoft SQL Server
* REST APIs
* Data Processing Pipelines
* Analytics Dashboards
* Workflow Management Systems
* Notification Systems
* JavaScript
* HTML
* CSS

## Challenges & Lessons

### Challenge

Building a meaningful analytical and operational intelligence layer on top of SEI, a platform whose APIs were not designed for large-scale reporting, monitoring, or data extraction workloads.

The system needed to extract valuable information from large numbers of legal and administrative processes while operating under strict limitations around API usage, synchronization frequency, and available query capabilities.

### Solution

Designed optimized synchronization, indexing, and data collection strategies that maximized information retrieval while minimizing interaction with the SEI APIs. Implemented workflow monitoring and notification mechanisms capable of transforming limited source data into actionable operational insights for end users.

### Lessons Learned

* Valuable analytical systems often emerge from constrained data sources rather than ideal ones.
* Public-sector software projects require a strong understanding of governance, validation processes, and stakeholder alignment.
* API efficiency can become a critical architectural concern when upstream systems impose operational constraints.
* Notification and workflow systems create significantly more value when they focus on actionable information rather than raw data.
* Understanding user workflows is often more important than understanding the underlying technology when building operational platforms.
* The most impactful systems frequently act as intelligence layers on top of existing platforms rather than replacing them entirely.


---

# Programmatic Advertising Analytics Dashboard | 2019

Co-founder & IT Director | Marketing Labs
🟡 Partially Redacted

Team Size: 1

## Description

Through a strategic partner, we developed a business intelligence and analytics platform supporting a large-scale programmatic advertising initiative for a multinational agriculture organization.

The project focused on transforming raw advertising and marketing data into actionable business intelligence through automated data pipelines, centralized data modeling, and interactive reporting dashboards. The platform consolidated information from multiple advertising and media sources, processing and organizing the data within a centralized analytical environment before exposing it through executive and operational dashboards.

I was responsible for the end-to-end analytical workflow, including data ingestion, transformation, modeling, validation, and visualization. The resulting solution enabled stakeholders to monitor campaign performance, analyze media effectiveness, and make data-driven decisions through a unified reporting experience.

This project represented one of my earliest opportunities to work extensively with modern data platforms and analytical workflows at enterprise scale.

## Roles I Played

* Data Engineer
* BI Developer
* Data Modeler
* Analytics Platform Developer
* Technical Lead
* Solution Architect

## Tech Stack

* Python
* Google BigQuery
* Google Data Studio
* SQL
* ETL Pipelines
* Data Modeling
* Data Visualization
* Business Intelligence Systems

## Challenges & Lessons

### Challenge

Transforming large volumes of marketing and advertising data into reliable analytical datasets while ensuring consistency, correctness, and usability for business stakeholders.

The project required bridging the gap between raw operational data and business-oriented reporting, while maintaining data quality throughout the ingestion and transformation process.

### Solution

Designed and implemented automated data processing workflows using Python and BigQuery, creating a structured analytical model that served as the foundation for executive dashboards and operational reporting within Data Studio.

### Lessons Learned

* Data engineering is fundamentally about creating trust in data, not simply moving information between systems.
* Effective analytical platforms depend heavily on well-designed data models rather than visualization tooling alone.
* Data quality issues become exponentially more expensive to address later in the pipeline.
* Business intelligence initiatives succeed when technical implementation is closely aligned with business questions and decision-making processes.
* Separating ingestion, transformation, and presentation concerns greatly improves maintainability and scalability of analytical systems.

---

# Insurance Proposal Processing & Customer Portal Platform | 2019

Co-founder & IT Director | Marketing Labs
🟡 Partially Redacted

## Description

Designed and developed a customer-facing insurance sales portal and proposal management platform for an insurance provider operating on top of a legacy backend ecosystem.

The platform allowed customers to submit insurance proposals, manage their information, track proposal status, and complete payment workflows through a modern web interface. Behind the scenes, the solution bridged modern web technologies with a legacy insurer infrastructure that relied heavily on file-based communication and SFTP-based data exchange.

Customer information collected through the platform was transformed into insurer-specific proposal files and transmitted through secure SFTP channels. Proposal responses were later retrieved through the same integration pipeline, processed, and presented back to users through a modern dashboard experience. The platform also integrated with the insurer's payment systems to automate proposal payment workflows.

The project served as a practical example of modernizing user experiences while preserving compatibility with legacy enterprise systems that could not be directly modified.

## Roles I Played

* Solution Architect
* Technical Lead
* Full Stack Developer
* Backend Developer
* Frontend Developer
* Systems Integrator
* Infrastructure Contributor

## Tech Stack

* Vue.js
* Node.js
* PostgreSQL
* SFTP
* File Processing Pipelines
* REST APIs
* Payment Gateway Integrations
* JavaScript
* HTML
* CSS
* Linux

## Challenges & Lessons

### Challenge

Building a modern customer experience on top of legacy insurer systems that communicated exclusively through asynchronous file exchanges and SFTP-based workflows rather than modern APIs.

The integration required transforming customer data into insurer-specific formats, transmitting files through secure channels, tracking proposal lifecycles across disconnected systems, and presenting status updates to users despite the inherently asynchronous nature of the underlying infrastructure.

### Solution

Developed an integration layer responsible for generating, transmitting, receiving, validating, and processing proposal files exchanged with the insurer's systems. The platform abstracted the complexity of the legacy workflow and exposed a modern customer-facing experience capable of tracking proposals from submission through approval and payment.

### Lessons Learned

* Enterprise integration challenges often stem from organizational and historical constraints rather than technical limitations.
* Legacy systems frequently require asynchronous processing patterns that differ significantly from modern API-driven architectures.
* File-based integrations can remain highly reliable and effective when properly designed and monitored.
* Building integration layers that isolate legacy complexity allows modern applications to evolve independently of underlying systems.
* Understanding data contracts, validation rules, and operational workflows is often more important than the communication protocol itself.
* Modernization efforts are frequently most successful when they enhance user experience without forcing disruptive changes to existing business-critical systems.

---

# Insurance Proposal Processing & Customer Portal Platform | 2019

Co-founder & IT Director | Marketing Labs
🟡 Partially Redacted

Team Size: 1

## Description

Designed and developed a customer-facing insurance sales portal and proposal management platform for an insurance provider operating on top of a legacy backend ecosystem.

The platform allowed customers to submit insurance proposals, manage their information, track proposal status, and complete payment workflows through a modern web interface. Behind the scenes, the solution bridged modern web technologies with a legacy insurer infrastructure that relied heavily on file-based communication and SFTP-based data exchange.

Customer information collected through the platform was transformed into insurer-specific proposal files and transmitted through secure SFTP channels. Proposal responses were later retrieved through the same integration pipeline, processed, and presented back to users through a modern dashboard experience. The platform also integrated with the insurer's payment systems to automate proposal payment workflows.

The project served as a practical example of modernizing user experiences while preserving compatibility with legacy enterprise systems that could not be directly modified.

## Roles I Played

* Solution Architect
* Technical Lead
* Full Stack Developer
* Backend Developer
* Frontend Developer
* Systems Integrator
* Infrastructure Contributor

## Tech Stack

* Vue.js
* Node.js
* PostgreSQL
* SFTP
* File Processing Pipelines
* REST APIs
* Payment Gateway Integrations
* JavaScript
* HTML
* CSS
* Linux

## Challenges & Lessons

### Challenge

Building a modern customer experience on top of legacy insurer systems that communicated exclusively through asynchronous file exchanges and SFTP-based workflows rather than modern APIs.

The integration required transforming customer data into insurer-specific formats, transmitting files through secure channels, tracking proposal lifecycles across disconnected systems, and presenting status updates to users despite the inherently asynchronous nature of the underlying infrastructure.

### Solution

Developed an integration layer responsible for generating, transmitting, receiving, validating, and processing proposal files exchanged with the insurer's systems. The platform abstracted the complexity of the legacy workflow and exposed a modern customer-facing experience capable of tracking proposals from submission through approval and payment.

### Lessons Learned

* Enterprise integration challenges often stem from organizational and historical constraints rather than technical limitations.
* Legacy systems frequently require asynchronous processing patterns that differ significantly from modern API-driven architectures.
* File-based integrations can remain highly reliable and effective when properly designed and monitored.
* Building integration layers that isolate legacy complexity allows modern applications to evolve independently of underlying systems.
* Understanding data contracts, validation rules, and operational workflows is often more important than the communication protocol itself.
* Modernization efforts are frequently most successful when they enhance user experience without forcing disruptive changes to existing business-critical systems.

---

# Enterprise Employee Communications & Engagement Platform | 2019

Co-founder & IT Director | Marketing Labs
🟡 Partially Redacted
🌟 Proudest Projects Showcase
Ranking: 6

Team Size: 4

## Description

Through a strategic partnership, we designed and developed a new generation employee communications and engagement platform for a large multinational organization.

The platform served as a centralized hub for company news, internal communications, policies, diversity initiatives, benefits information, employee rankings, internal contests, newsletters, and organizational announcements. It also included media integration capabilities, allowing employees to access live internal radio broadcasts directly through the platform.

The project originated as a complete modernization effort. The previous solution was a heavily customized legacy PHP application built on Symfony and MySQL that had accumulated significant technical debt, operational issues, and maintenance challenges over the years.

To address these limitations, we redesigned and rebuilt the platform using a modern architecture centered around Vue.js, Directus, and custom backend services developed in Node.js and PHP. The resulting platform successfully supported thousands of employees on a daily basis and remained operational for years after delivery, ultimately being retired only when a newer enterprise-wide platform with overlapping functionality was introduced.

Certain organizational and customer-specific details have been generalized due to confidentiality requirements.

## Roles I Played

* Solution Architect
* Technical Lead
* Full Stack Developer
* Frontend Developer
* Backend Developer
* Systems Integrator
* Infrastructure Contributor
* Client Stakeholder Liaison

## Tech Stack

* Vue.js
* Directus
* Node.js
* PHP
* MySQL
* REST APIs
* JavaScript
* HTML
* CSS
* Content Management Systems
* Newsletter Systems
* Media Streaming Integrations

## Challenges & Lessons

### Challenge

Replacing a large legacy employee platform with a modern solution while preserving business functionality, maintaining user adoption, and supporting thousands of daily users across a broad range of organizational communication workflows.

As adoption increased, the platform evolved into a high-traffic content distribution system serving hundreds of gigabytes of content daily, requiring careful consideration of caching strategies, infrastructure sizing, asset delivery, and operational scalability.

### Solution

Designed and implemented a modern architecture leveraging Vue.js, Directus, and custom backend services, recreating and improving existing functionality while eliminating long-standing operational and maintenance issues present in the legacy platform.

Implemented infrastructure and content delivery optimizations to efficiently serve large volumes of media, documents, newsletters, and employee communications while maintaining a responsive user experience.

### Lessons Learned

* Large-scale modernization projects require a deep understanding of existing business processes before replacement efforts begin.
* Applications that appear simple from a business perspective can become significant infrastructure and scalability challenges at sufficient user volume.
* Bandwidth, content delivery, and asset distribution can become primary scaling concerns long before application logic becomes a bottleneck.
* Internal platforms often become mission-critical despite being less visible than customer-facing products.
* Technical debt compounds over time and eventually becomes a business problem rather than simply an engineering problem.
* Long-term platform success depends as much on maintainability and operational simplicity as it does on feature delivery.

---

# Health Insurance Sales Performance Platform | 2019

Co-founder & IT Director | Marketing Labs
🟡 Partially Redacted

Team Size: 2

## Description

Assumed development maintenance responsibilities for a sales performance platform used by sales teams within a large health insurance organization. The platform provided sales representatives and managers with visibility into sales performance, targets, rankings, bonuses, incentive programs, and leaderboard standings through both web and mobile applications.

The solution consisted of an administrative portal, backend services, automated data processing workflows, and a React-based mobile application consumed by the sales team. In addition to delivering new features and incentive mechanics, I was responsible for the entire data pipeline, including ingesting sales reports provided by the insurance company, processing performance metrics, calculating rankings, and determining eligibility for rewards and incentive programs.

The platform became a critical operational tool for tracking sales performance and motivating sales teams through transparent performance measurement and gamification mechanisms.

Certain organizational details have been generalized due to confidentiality considerations.

## Roles I Played

* Solution Architect
* Technical Lead
* Full Stack Developer
* Mobile Developer
* Backend Developer
* Data Pipeline Engineer
* Systems Integrator
* Product Contributor

## Tech Stack

* React Native
* React
* PHP
* MySQL
* REST APIs
* JavaScript
* HTML
* CSS
* Data Processing Pipelines
* Reporting Systems
* Mobile Applications

## Challenges & Lessons

### Challenge

Transforming large volumes of sales data from external reports into accurate, trustworthy performance metrics while maintaining transparency around rankings, targets, bonuses, and incentive programs for a distributed sales organization.

### Solution

Developed and maintained automated ingestion and processing workflows that transformed raw sales reports into normalized business metrics, feeding both the administrative platform and mobile application with near real-time performance information.

### Lessons Learned

* Trust in business metrics is critical when compensation, bonuses, and performance evaluations depend on the system.
* Data processing pipelines must prioritize correctness and auditability over implementation simplicity.
* Gamification mechanics can significantly improve engagement when paired with transparent and reliable data.
* Mobile applications serving operational users require a strong focus on usability and information clarity.
* Business reporting platforms often become mission-critical systems despite appearing simple on the surface.

---

# Wedding Rings E-Commerce Platform | 2019

Co-founder & IT Director | Marketing Labs
🟡 Partially Redacted

Team Size: 1

## Description

Designed and delivered an e-commerce platform for a wedding rings retailer operating under strict budget constraints and requiring a solution with minimal ongoing operational costs.

Rather than pursuing a fully custom implementation, we selected WooCommerce and WordPress as the foundation of the platform, allowing development resources to focus on the business-specific requirements while leveraging an established and cost-effective ecosystem.

The project included the development of a fully customized storefront, bespoke plugins, and integrations connecting the e-commerce operation with the client's existing software ecosystem. The final solution was deployed into the customer's existing infrastructure, avoiding additional hosting and operational expenses while enabling a seamless transition into online sales.

This project highlighted the importance of selecting technology based on business constraints rather than technical preference, delivering a sustainable solution that balanced functionality, maintainability, and cost efficiency.

## Roles I Played

* Solution Architect
* Technical Lead
* Full Stack Developer
* Systems Integrator
* Infrastructure Consultant
* Client Advisor

## Tech Stack

* WordPress
* WooCommerce
* PHP
* MySQL
* JavaScript
* HTML
* CSS
* Linux
* Apache
* Custom WordPress Plugins
* E-Commerce Integrations

## Challenges & Lessons

### Challenge

Delivering a production-ready e-commerce platform while operating under significant budget constraints and minimizing ongoing infrastructure and operational costs.

### Solution

Leveraged WooCommerce and WordPress as a proven foundation, developing only the custom functionality required by the business and deploying the solution within the customer's existing infrastructure to avoid unnecessary operational expenses.

### Lessons Learned

* Good engineering is often about selecting the right solution rather than building the most sophisticated one.
* Business constraints should influence architectural decisions as much as technical requirements.
* Existing infrastructure can often be leveraged effectively when operational simplicity is prioritized.
* Open-source ecosystems can dramatically accelerate delivery when aligned with project goals.
* The most successful projects balance technical quality, maintainability, and business viability.

---

# Rara Imóveis & Coworking - Real Estate CRM Modernization & Business Systems Consulting | 2019

Co-founder & IT Director | Marketing Labs
🟢 Public

Team Size: 2

## Description

Provided technology consulting services for a real estate business undergoing operational modernization through the adoption of Bitrix24 as its primary CRM and business process management platform.

The engagement included CRM implementation, custom workflow design, system integrations, user training, and general IT consulting. In addition to configuring the platform, I developed custom integrations connecting Bitrix24 with the company's website, internal ERP systems, spreadsheets, and communication channels, helping streamline lead management and sales operations.

Beyond the application layer, I also supported the organization's infrastructure needs, including file server deployment, directory services configuration, remote access solutions, workstation support, and general IT operations. This role required balancing software engineering, systems integration, infrastructure administration, and end-user enablement within a small business environment.

## Roles I Played

* CRM Consultant
* Systems Integrator
* Full Stack Developer
* Workflow Designer
* Infrastructure Consultant
* Technical Trainer
* IT Generalist

## Tech Stack

* Bitrix24
* JavaScript
* PHP
* MySQL
* REST APIs
* WhatsApp Integrations
* Windows Server
* Directory Services
* Remote Access Solutions
* File Servers
* ERP Integrations

## Challenges & Lessons

### Challenge

Integrating multiple disconnected business systems into a unified operational workflow while ensuring adoption by non-technical users across the organization.

### Solution

Designed and implemented custom CRM workflows, developed integrations between Bitrix24, the company website, and internal ERP systems, and conducted hands-on training sessions to ensure successful adoption of the new processes and tooling.

### Lessons Learned

* Technology adoption depends as much on people and processes as it does on technical implementation.
* Successful business systems require careful alignment between operational workflows and software capabilities.
* Systems integration often delivers greater business value than introducing entirely new software.
* Exposure to infrastructure, identity management, and operational support reinforced the importance of understanding the broader technology ecosystem surrounding business applications.

---

# Enterprise Collaboration & Digital Asset Platform | 2019

Fullstack Developer | Make Acelerador de Vendas
🟡 Partially Redacted

Team Size: 1

## Description

Implemented, customized, and operated a NextCloud-based collaboration platform that served as the company's central intranet, document management system, file synchronization service, meeting platform, and digital asset repository.

In addition to managing the underlying infrastructure, I developed custom plugins extending the platform with task management, task attribution, support request workflows, and internal integrations tailored to the company's operational needs.

The platform became a central component of day-to-day operations, supporting collaboration between employees while managing large volumes of design assets, marketing materials, videos, and internal documentation.

This project represented my first significant exposure to enterprise identity management, large-scale file storage, synchronization systems, and infrastructure challenges associated with serving storage-intensive workloads.

## Roles I Played

* Infrastructure Engineer
* Systems Administrator
* Full Stack Developer
* Platform Engineer
* Identity & Access Management Contributor
* Storage Systems Administrator
* Technical Consultant

## Tech Stack

* NextCloud
* PHP
* MySQL
* Linux
* Apache
* WebDAV
* LDAP / Directory Services
* JavaScript
* HTML
* CSS
* Permission Management Systems

## Challenges & Lessons

### Challenge

Operating a business-critical collaboration platform responsible for large-scale file storage, synchronization, permission management, and employee collaboration while supporting storage-intensive creative workflows.

### Solution

Configured and optimized the infrastructure supporting the platform, implemented custom functionality through plugin development, integrated authentication and permissions with company directory systems, and continuously refined storage, caching, and synchronization mechanisms to support operational growth.

### Lessons Learned

* File storage systems introduce operational challenges that differ significantly from traditional web applications.
* Identity, authentication, and permission management become increasingly complex as organizations grow.
* Synchronization systems require careful consideration of consistency, user experience, and operational reliability.
* Infrastructure scalability often emerges from storage, bandwidth, and operational constraints rather than application performance alone.
* Internal platforms can have business-critical importance despite serving only a limited number of users.

---

# Marketing Analytics & Attribution Dashboard | 2019

Fullstack Developer | Make Acelerador de Vendas
🟢 Public

Team Size: 2

## Description

Designed and developed an internal analytics platform that combined advertising performance data from Facebook's Graph API with the company's internal billing and customer management systems.

The platform collected large volumes of advertising, lead generation, and campaign performance data, correlating it with internal customer configurations to generate business-critical marketing metrics such as Cost Per Click (CPC), Cost Per Lead (CPL), Cost Per Acquisition (CPA), campaign performance indicators, and client-facing operational reports.

Built as a Laravel application integrated with the Make Vendas API ecosystem, this project represented my first significant exposure to data engineering workflows, large-scale data ingestion, and analytical system design.

## Roles I Played

* Full Stack Developer
* Data Integration Engineer
* Backend Developer
* API Integrator
* Database Designer
* Analytics Platform Developer

## Tech Stack

* Laravel
* PHP
* MySQL
* Facebook Graph API
* REST APIs
* JavaScript
* HTML
* CSS
* Data Processing Pipelines
* Analytics Reporting

## Challenges & Lessons

### Challenge

Collecting, normalizing, and correlating large volumes of external advertising data with internal business information while ensuring metric accuracy and report consistency across multiple customers and advertising accounts.

### Solution

Developed data ingestion workflows leveraging Facebook's Graph API, implemented data transformation and correlation logic, and created reporting mechanisms capable of generating actionable business metrics from disparate data sources.

### Lessons Learned

* Data rarely arrives in a format suitable for direct business consumption.
* The most difficult part of analytics systems is often data normalization and reconciliation rather than visualization.
* Derived business metrics require careful validation to maintain stakeholder trust.
* Data engineering and systems integration share many of the same architectural challenges around consistency, reliability, and scalability.
* Understanding the business meaning of data is just as important as understanding its technical structure.

---

# Pé Com Pé E-Commerce Platform Migration (Magento 1 → Magento 2) | 2019

Fullstack Developer | Make Acelerador de Vendas
🟢 Public

Team Size: 2

## Description

Participated in the redevelopment and migration of the Pé Com Pé e-commerce platform from Magento 1 to Magento 2, modernizing the company's primary online sales channel while preserving critical business workflows and operational processes.

The project involved reimplementing existing platform functionality, rebuilding integrations, and adapting business processes to the new platform architecture. In addition to core e-commerce functionality, I developed and maintained integrations with payment providers, notification services, email systems, and external business platforms required for day-to-day operations.

This was my first large-scale platform migration project and provided valuable experience working within an established e-commerce ecosystem while balancing modernization efforts with business continuity requirements.

## Roles I Played

* Full Stack Developer
* Systems Integrator
* E-Commerce Platform Engineer
* Business Workflow Analyst
* Migration Engineer
* Production Support Engineer

## Tech Stack

* Magento 2
* PHP
* MySQL
* JavaScript
* jQuery
* HTML
* CSS
* Payment Gateway Integrations
* Email Services
* Notification Systems
* Linux

## Challenges & Lessons

### Challenge

Migrating a business-critical e-commerce operation from a legacy platform while preserving existing workflows, integrations, and customer-facing functionality.

### Solution

Reimplemented business workflows within Magento 2, rebuilt integrations with external providers, and adapted platform functionality to align with the capabilities and architecture of the newer platform.

### Lessons Learned

* Platform migrations are as much about understanding business processes as they are about technical implementation.
* Legacy systems often contain undocumented operational knowledge that must be carefully identified before migration.
* External integrations frequently represent the most complex aspect of modernization initiatives.
* E-commerce platforms operate at the intersection of technology, operations, customer experience, and revenue generation.

---

# Pé Com Pé E-Commerce Platform Maintenance & Evolution | 2018

Fullstack Developer | Freelancer
🟢 Public

Team Size: 2

## Description

Contributed to the ongoing maintenance, improvement, and operational support of the Pé Com Pé e-commerce platform while working as an independent contractor for Make Acelerador de Vendas.

Responsibilities included implementing new functionality, correcting production issues, improving checkout flows, integrating third-party authentication providers, and supporting day-to-day operational requirements of a live customer-facing platform.

This engagement provided early exposure to the realities of maintaining production software, balancing feature development, operational stability, user experience improvements, and business priorities.

## Roles I Played

* Full Stack Developer
* Maintenance Engineer
* Production Support Engineer
* Systems Integrator
* Technical Consultant

## Tech Stack

* PHP
* Magento
* MySQL
* JavaScript
* jQuery
* HTML
* CSS
* Facebook Login
* OAuth
* Linux

## Challenges & Lessons

### Challenge

Maintaining and evolving a production e-commerce platform while minimizing disruption to active business operations and customer transactions.

### Solution

Implemented targeted improvements to checkout flows, payment processing, authentication mechanisms, and operational workflows while continuously addressing production issues and user-facing defects.

### Lessons Learned

* Production software requires balancing technical quality with business continuity.
* Small improvements in checkout and authentication flows can have outsized business impact.
* Supporting live systems develops a different mindset than building greenfield projects.
* Understanding existing systems is often more difficult than building new ones.

---

# Make Vendas Integration API | 2018

Fullstack Developer | Freelancer
🟢 Public

Team Size: 1

## Description

Designed and developed the initial version of an internal integration API intended to support communication between business systems, external platforms, and customer-facing applications within the Make Acelerador de Vendas ecosystem.

The project involved database modeling, API design, authentication implementation, workflow mapping, and the development of foundational integration capabilities used to connect multiple systems and business processes.

As one of my first greenfield backend projects, this initiative provided hands-on experience with API design, system integration patterns, and the architectural decisions required when building software from the ground up.

## Roles I Played

* Full Stack Developer
* API Designer
* Database Designer
* Systems Integrator
* Technical Consultant

## Tech Stack

* PHP (Laravel)
* MySQL
* REST APIs
* OAuth
* JavaScript
* Linux

## Challenges & Lessons

### Challenge

Designing a flexible integration layer capable of supporting multiple business workflows while maintaining simplicity and ease of future expansion.

### Solution

Created the initial database structures, API endpoints, authentication mechanisms, and workflow definitions required to establish a reusable integration foundation.

### Lessons Learned

* Early architectural decisions have long-term consequences for maintainability and extensibility.
* APIs should be designed around business workflows rather than technical implementation details.
* Authentication and integration concerns emerge much earlier than expected in interconnected systems.
* Building systems from scratch provides valuable perspective on data modeling, abstraction, and system boundaries.


---

# Online English Learning Platform | 2017

Fullstack Developer | Freelancer
🟡 Partially Redacted 

Team Size: 1

## Description

Designed and developed a web-based learning platform for a private English language school. The platform allowed students to access course materials and educational content through a browser-based interface, while administrators could manage content and platform operations through a dedicated administrative portal.

This was my first independently delivered software project, covering the entire lifecycle from requirements gathering and solution design to deployment and production support.

## Roles I Played

* Full Stack Developer
* Solution Designer
* Database Designer
* Infrastructure Administrator
* Deployment
* Technical Consultant

## Tech Stack

* PHP
* MySQL
* Bootstrap
* jQuery
* HTML
* CSS
* Linux
* Apache HTTP Server

## Challenges & Lessons

### Challenge

Delivering a complete software product independently while balancing technical implementation, infrastructure provisioning, deployment, and direct communication with the client.

### Solution

Designed and implemented both the end-user platform and administrative interface, provisioned the hosting environment, deployed the application, and worked directly with stakeholders to gather requirements and refine the final solution.

### Lessons Learned

* Successfully delivering software requires much more than writing code; requirements gathering, communication, deployment, and maintenance are equally important.
* Owning the full delivery lifecycle provides valuable insight into how technical decisions affect business outcomes.
* Strong technical fundamentals acquired through formal technical education were instrumental in structuring and delivering a complete software product.
* Early exposure to client communication helped develop the ability to translate business needs into technical solutions.
