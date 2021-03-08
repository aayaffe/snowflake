// @flow
import * as d3 from 'd3'

export type TrackId = 'DEV_INFRASTRUCTURE' | 'WEB_CLIENT' | 'FOUNDATIONS' | 'SERVERS' | 'LEGACY' | 'TESTING'
  'PROJECT_MANAGEMENT' | 'COMMUNICATION' | 'CRAFT' | 'INITIATIVE' |
  'CAREER_DEVELOPMENT' | 'ORG_DESIGN' | 'WELLBEING' | 'ACCOMPLISHMENT' |
  'MENTORSHIP' | 'PROMOTING_RECRUITING' | 'COMMUNITY'
export type Milestone = 0 | 1 | 2 | 3 | 4 | 5

export type MilestoneMap = {
  'DEV_INFRASTRUCTURE': Milestone,
  'WEB_CLIENT': Milestone,
  'FOUNDATIONS': Milestone,
  'SERVERS': Milestone,
  'LEGACY': Milestone,
  'TESTING': Milestone,
  'PROJECT_MANAGEMENT': Milestone,
  'COMMUNICATION': Milestone,
  'CRAFT': Milestone,
  'INITIATIVE': Milestone,
  'CAREER_DEVELOPMENT': Milestone,
  'ORG_DESIGN': Milestone,
  'WELLBEING': Milestone,
  'ACCOMPLISHMENT': Milestone,
  'MENTORSHIP': Milestone,
  'PROMOTING_RECRUITING': Milestone,
  'COMMUNITY': Milestone
}
export const milestones = [0, 1, 2, 3, 4, 5]

export const milestoneToPoints = (milestone: Milestone): number => {
  switch (milestone) {
    case 0: return 0
    case 1: return 1
    case 2: return 3
    case 3: return 6
    case 4: return 12
    case 5: return 20
    default: return 0
  }
}

export const pointsToLevels = {
  '0': '1.1',
  '5': '1.2',
  '11': '1.3',
  '17': '2.1',
  '23': '2.2',
  '29': '2.3',
  '36': '3.1',
  '43': '3.2',
  '50': '3.3',
  '58': '4.1',
  '66': '4.2',
  '74': '4.3',
  '90': '5.1',
  '110': '5.2',
  '135': '5.3',
}

export const maxLevel = 135

export type Track = {
  displayName: string,
  category: string, // TK categoryId type?
  description: string,
  milestones: {
    summary: string,
    signals: string[],
    examples: string[]
  }[]
}

type Tracks = {|
  'DEV_INFRASTRUCTURE': Track,
    'WEB_CLIENT': Track,
      'FOUNDATIONS': Track,
        'SERVERS': Track,
          'LEGACY': Track,
          'TESTING': Track,
            'PROJECT_MANAGEMENT': Track,
              'COMMUNICATION': Track,
                'CRAFT': Track,
                  'INITIATIVE': Track,
                    'CAREER_DEVELOPMENT': Track,
                      'ORG_DESIGN': Track,
                        'WELLBEING': Track,
                          'ACCOMPLISHMENT': Track,
                            'MENTORSHIP': Track,
                              'PROMOTING_RECRUITING': Track,
                                'COMMUNITY': Track
                                  |}

export const tracks: Tracks = {
  "DEV_INFRASTRUCTURE": {
    "displayName": "Dev infrastructure",
    "category": "A",
    "description": "Develop expertise in the use and fundamentals of the development infrastructure",
    "milestones": [{
      "summary": "Works effectively within established methodolgies using the available infrastructure",
      "signals": [
        "Uses proper development methodologies as part of the development process",
        "Properly implements work flow instructions (such as proper workitem editing)",
        "Familiar with the organization standars, and applies them correctly",
      ],
      "examples": [
        "Made safe and effective configuration changes",
        "Resolved simple git, TFS and pipeline erros idependently",
        "Wrote thorough postmortems for service outage",
      ],
    }, {
      "summary": "Develops new features based on existing services, or minor improvements to existing platforms",
      "signals": [
        "Creates new service pipelines based on existing ones",
        "Solves complex build issues",
        "Has the ability to classify issues, and look up solutions idependently",
      ],
      "examples": [
        "Solves complex Jenkins and TFS pipeline issues",
        "Improved Engine's build script",
      ],
    }, {
      "summary": "Designs major new features and demonstrates a nuanced understanding of devops processes",
      "signals": [
        "Implement new build integrations",
        "Works with other teams' engineers to implement a new devops procedure",
        "Writes complex automations to handle repeated work",
      ],
      "examples": [
        "Writes major new scripts or tools to support the development process",
        "Wrote the pipeline to deploy to the primary test site"
      ],
    }, {
      "summary": "Builds complex, reusable services that pioneer best practices and enable engineers to work more effectively",
      "signals": [
        "Implements a brand new process to improve velocity and quality of work",
        "Demonstrates deep knowledge of foundational systems",
        "Makes appropriate buy vs build choices",
      ],
      "examples": [
        "Wrote a detailed review on AWS infrastructure, considering standards, efficiency and simplicity",
        "Promoted the use of SonarQube to make dev better",
        "Able to point to future issues that might arise from selected architectural decisions and suggest modifications",
      ],
    }, {
      "summary": "Is an industry-leading expert in devops technologies or sets strategic devops direction for an eng team",
      "signals": [
        "Invents new techniques for monitoring services health",
        "Makes decisions that have positive, long term, wide ranging consequences",
        "Identifies and solves systemic problems with current architecture",
      ],
      "examples": [
        "Reads articles and compares methods & technologies, to integrate the most suitable",
        "Has deep understanding of dev processes, adjusts infrastructures to meet the developers needs and improve procesess",
        "Translates architectural needs into a list of tasks, and prioritizes the tasks with long term consequences in mind",
      ],
    }],
  },

  "WEB_CLIENT": {
    "displayName": "Web client",
    "category": "A",
    "description": "Develops expertise in web client technologies, such as Angular, Cesuim.",
    "milestones": [{
      "summary": "Works effectively within established web client architectures, following current best practices",
      "signals": [
        "Makes minor modifications to existing forms or components",
        "Minor style changes (colors, fonts, positioning)",
        "Uses CSS appropriately, following style guide",
      ],
      "examples": [
        "Fixed minor bug on exisiting form",
        "Familiar with current web artchitecture, best pracitces and standards",
      ],
    }, {
      "summary": "Develops new instances of existing architecture, or minor improvements to existing architecture",
      "signals": [
        "Makes sensible abstractions based on template and code patterns",
        "Specs and builds interactive components independently",
        "Prototypes simple new features quickly",
      ],
      "examples": [
        "Fixed minor bug on DS distribution",
        "Created shared components and Implement them across the web",
      ],
    }, {
      "summary": "Designs major new features and demonstrates a nuanced understanding of browser constraints",
      "signals": [
        "Provides useful design feedback and suggests feasible alternatives",
        "Performs systemic tasks to significantly minimise bundle size",
        "Acts a caretaker for all of web client code",
      ],
      "examples": [
        "Designed and implemented complex features in distribution web wroker or forms infrastructure",
        "Researched utility of service workers ",
        "Takes meaningfull role in design decisions and code reviews",
      ],
    }, {
      "summary": "Builds complex, reusable architectures that pioneer best practices and enable engineers to work more effectively",
      "signals": [
        "Pioneers architecture migrations that reduce programmer burden",
        "Implements complex UI transitions that bring delight",
        "Makes architectural decisions that eliminate entire classes of bugs",
      ],
      "examples": [
        "Defined and drove migration strategy to NeWeb",
      ],
    }, {
      "summary": "Is an industry-leading expert in web client or sets strategic web client direction for an eng team",
      "signals": [
        "Invents new techniques to innovate and overcome browser constraints",
        "Identifies and solved systemic problems with current architecture",
        "Defines a long-term vision for web client and ensures projects are in service of it",
      ],
      "examples": [
        "Invented CSS in JS",
        "Defined and drove migration strategy to NeWeb",
      ],
    }],
  },

  "FOUNDATIONS": {
    "displayName": "Foundations",
    "category": "A",
    "description": "Develops expertise in foundational systems, such as deployments, databases and machine learning",
    "milestones": [{
      "summary": "Works effectively within established structures, following current best practices",
      "signals": [
        "Writes thorough postmortems for service outages",
        "Makes simple configuration changes to services",
        "Resolved out of disk errors independently",
      ],
      "examples": [

      ],
    }, {
      "summary": "Develops new instances of existing architecture, or minor improvements to existing architecture",
      "signals": [
        "Built custom packages for DEBs, RPMs",
        "Builds machine learning jobs within the ML framework",
        "Triages service issues correctly and independently",
      ],
      "examples": [

      ],
    }, {
      "summary": "Designs standalone systems of moderate complexity, or major new features in existing systems",
      "signals": [
        "Acts as primary maintainer for existing critical systems",
        "Designs moderately complex systems",
        "Makes major version upgrades to libraries",
      ],
      "examples": [
        "Designed Ansible configuration management",
        "Made minor version upgrades to technologies",
        "Designed flexible framework for writing machine learning jobs",
      ],
    }, {
      "summary": "Builds complex, reusable architectures that pioneer best practices for other engineers, or multi-system services",
      "signals": [
        "Designs complex projects that encompass multiple systems and technologies",
        "Demonstrates deep knowledge of foundational systems",
        "Introduces new databases and technologies to meet underserved needs",
      ],
      "examples": [
        "Introduced RabbitMQ and pioneered streaming events pipeline",
      ],
    }, {
      "summary": "Is an industry-leading expert in foundational engineering or sets strategic foundational direction for an eng team",
      "signals": [
        "Designs transformational projects in service of long-term goals",
        "Defines the strategic vision for foundational work and supporting technologies",
        "Invents industry-leading techniques to solve complex problems",
      ],
      "examples": [
        "Invented a novel ML technique that advanced the state of the art",
        "Defined and developed the organizations continuous delivery strategy",
        "Developed and implemented HA strategy",
      ],
    }],
  },

  "SERVERS": {
    "displayName": "Servers",
    "category": "A",
    "description": "Develops expertise in server side engineering, using technologies such as Java, Cpp, Python",
    "milestones": [{
      "summary": "Works effectively within established server side frameworks, following current best practices",
      "signals": [
        "Makes minor changes in the server",
        "Makes minor server changes to support client needs",
        "Familiar with comm-channel architecture, best practices and standards",
      ],
      "examples": [
        "Fixed minor bug in agents",
        "Added a new endpoint to an existing swagger rest api (i.e windData)",
      ],
    }, {
      "summary": "Develops new instances of existing architecture, or minor improvements to existing architecture",
      "signals": [
        "Assesses correctness and utility of existing code and avoids blind copy-pasting",
        "Generalizes code when appropriate",
        "Determines design from product requirements",
      ],
      "examples": [
        "Identified wrong conversion of coordinates and fixed it",
        "Created base external agent which containts all the common logic",
        "Wrote design document for target distirbution service",
      ],
    }, {
      "summary": "Designs standalone systems of moderate complexity, or major new features in existing systems",
      "signals": [
        "Acts as primary maintainer for a chapter",
        "Integrates third party services effectively",
        "Designed and implemented a moderatly complex server side service",
      ],
      "examples": [
        "Takes meaningfull role in design decisions and code reviews for the specific chapter",
        "Added rabbitMQ to engine",
        "Designed consistent view writer service",
      ],
    }, {
      "summary": "Builds complex, reusable architectures that pioneer best practices for other engineers, or multi-system services",
      "signals": [
        "Delivers complex services that achieve their goals",
        "Avoids subtle architectural mistakes when considering new services",
        "Makes architectural decisions that eliminate entire classes of bugs",
      ],
      "examples": [
        "Designed the engine",
        "Merging ERW to engine/creating CVW to eliminate race conditions",
      ],
    }, {
      "summary": "Is an industry-leading expert in server side engineering or sets strategic server side direction for an eng team",
      "signals": [
        "Designs transformational projects of significant complexity and scope",
        "Makes decisions that have positive, long term, wide ranging consequences",
        "Identifies and solves systemic problems with current architecture",
      ],
      "examples": [
        "Designed the architecture of Z7",
        "Defined microservices architecture and Z7 migration plan",
      ],
    }],
  },

  "LEGACY": {
    "displayName": "Legacy",
    "category": "A",
    "description": "Has good knowledge of legacy systems, knows how to investigae and fix small bugs, and add new features",
    "milestones": [{
      "summary": "Basic knowledge legacy systems and the ability to fix bugs",
      "signals": [
        "Know the system's architecure and the flow of information. knows the processes running in each type of station",
        "Able to fix small bugs",
        "Knows how to intall a station",
      ],
      "examples": [
        "Able to follow messages between processes to analyze a problem",
        "Fixed NPE in a message print",
        "Knows how to analyze log files",
      ],
    }, {
      "summary": "Fix system bugs and add new features",
      "signals": [
        "Able to fix bugs in the system",
        "Good understanding of an area of responsibility in a system",
      ],
      "examples": [
        "Solve Logic crash issues",
        "Wrote a new interface",
        "Familiar with the structure of interfaces",
      ],
    }, {
      "summary": "Fixes major issues, and adds new features",
      "signals": [
        "Has intimate knowledge of an AOR and sufficient kknowledge in other parts of the system",
        "Can reproduce and solve complex bugs",
      ],
      "examples": [
        "Fixed a bug in production",
        "Connected HD to main station",
        "Added a new feature to the system",
      ],
    }, {
      "summary": "Extensive knowledge in Legacy Architecture with the ability to solve long standing issues",
      "signals": [
        "Able to change DST in the system",
        "Knows how to build and deploy a new version",
      ],
      "examples": [
        "Solved long standing major issues",
        "Deployed a new version in production",
        "Fixed a DB and Logic Bug regarding interfaces infrastructure",
      ],
    }, {
      "summary": "Is the expert of a legacy system",
      "signals": [
        "Able to add nadvanced features to the system",
      ],
      "examples": [
        "Modified system image to new HW",
        "Developed new Bodel",
      ],
    }],
  },

  "TESTING": {
    "displayName": "Testing",
    "category": "A",
    "description": "Develops expertise in the use and fundamentals of software testing (Automated and manual) and Quality assurance practices as a whole",
    "milestones": [{
      "summary": "Works effectively within established structures, following current best practices",
      "signals": [
        "Runs exhaustive manual test suite and produced a meaningful test results report ",
        "Writes tests for simple new feature and\or bug fix",
        "Setup a test station connected to 'Mecholel Zira' for system test",
      ],
      "examples": [
        "Ran Comms channel test suit and reported on 5 bugs with adequote details with connection to the correct Requirements",
        "Amended existing test for new category in the Add Target form",
        "Records and explains in details the test implementation and bugs found during the test",
      ],
    }, {
      "summary": "Develops advanced test suites based on current best practices",
      "signals": [
        "Writes tests for complex new features and\or bug fix",
        "Recognizes vulnarable uncovered areas and wrote tests to cover them",
        "Wrote E2E Tests for complex new features"
      ],
      "examples": [
        "Wrote a complete test suite for the engagement process",
        "Configured WL and connected to 5.6\\7.0 setup",
        "Runs complete sanity Shore test suite, and clearly documents the found bugs",
      ],
    }, {
      "summary": "Design major new practices and methods for software testing and qulity assurance",
      "signals": [
        "Implements a new infrastructure to test new or never before tested technology",
        "Reviews the tests written according to QA and software best practices",
        "Designs new tests suites for complex new system features"
      ],
      "examples": [
        "Impelemented testing abilities to test MashovJS",
        "Adds significant new tooling to improve code quality in the organization (I.E Linter)",
        "Wrote the perlimenry design of Enigma test suite",
      ],
    }, {
      "summary": "Builds/Implements complex major new testing architecture and methods",
      "signals": [
        "Designed and wrote a brand new infrastructure to test industry level hard to test features",
      ],
      "examples": [
        "Wrote a new infrastructure for E2E map testing",
        "Designed the complete real world test suite of Air Algorithms",
        "Pushed for making testing and automated testing a part of DOD",
      ],
    }, {
      "summary": "Is an industry-leading expert in automated testing and quality assurence or sets strategic foundational direction for an quality assurance and eng. team",
      "signals": [
        "Invents industry-leading techniques to solve complex problems in testing",
        "Researched, customized and implemented new QA methodologies in the organization level"
      ],
      "examples": [
        "Designed and wrote MBR software and methodology",
      ],
    }],
  },

  "PROJECT_MANAGEMENT": {
    "displayName": "Project management",
    "category": "B",
    "description": "Delivers well-scoped programs of work that meet their goals, on time, to budget, harmoniously",
    "milestones": [{
      "summary": "Effectively delivers individual tasks",
      "signals": [
        "Estimates small tasks accurately",
        "Writes effective technical specs outlining approach",
      ],
      "examples": [
        "Wrote the technical spec for ...",
      ],
    }, {
      "summary": "Effectively delivers small personal projects",
      "signals": [
        "Performs research and considers alternative approaches",
        "Delivers tightly-scoped projects efficiently",
        "Defines and hits interim milestones",
      ],
      "examples": [
      ],
    }, {
      "summary": "Effectively delivers projects through a small team",
      "signals": [
        "Delegates tasks to others appropriately",
        "Integrates business needs into project planning",
        "Chooses appropriate project management strategy based on context",
      ],
      "examples": [
        "Ran project retro to assess improvement opportunities",
        "Completed launch checklist unprompted for well controlled rollout",
        "Facilitated project kickoff meeting to get buy-in",
      ],
    }, {
      "summary": "Effectively delivers projects through a large team, or with a significant amount of stakeholders or complexity",
      "signals": [
        "Finds ways to deliver requested scope faster, and prioritizes backlog",
        "Manages dependencies on other projects and teams",
        "Leverages recognition of repeated project patterns",
      ],
      "examples": [
        "Oversaw technical delivery of Openshift",
        "Managed infrastructure migration to TFS",
        "Involved ops, cyber, and appropriate functions at project start",
      ],
    }, {
      "summary": "Manages major company pushes delivered by multiple teams",
      "signals": [
        "Considers external constraints and business objectives when planning",
        "Leads teams of teams, and coordinates effective cross- functional collaboration",
      ],
      "examples": [
        "Managed technical migration to SOA",
        "Lead technical delivery of Z7",
        "Delivered multi-month engineering project on time",
      ],
    }],
  },

  "COMMUNICATION": {
    "displayName": "Communication",
    "category": "B",
    "description": "Shares the right amount of information with the right people, at the right time, and listens effectively",
    "milestones": [{
      "summary": "Communicates effectively to close stakeholders when called upon, and incorporates constructive feedback",
      "signals": [
        "Communicates project status clearly and effectively",
        "Collaborates with others with empathy",
        "Asks for help at the appropriate juncture",
      ],
      "examples": [
        "Updated project status changes in TFS promptly",
        "Gave thoughtful commit comments",
      ],
    }, {
      "summary": "Communicates with the wider team appropriately, focusing on timeliness and good quality conversations",
      "signals": [
        "Practises active listening and suspension of attention",
        "Ensures stakeholders are aware of current blockers",
        "Chooses the appropriate tools for accurate and timely communication",
      ],
      "examples": [
        "Received and integrated critical feedback positively",
        "Created cross-team Zulip channel for interface X work",
        "Spoke to domain experts before writing spec",
      ],
    }, {
      "summary": "Proactively shares information, actively solicits feedback, and facilitates communication for multiple stakeholders",
      "signals": [
        "Resolves communication difficulties between others",
        "Anticipates and shares schedule deviations in plenty of time",
        "Manages project stakeholder expectations effectively",
      ],
      "examples": [
        "Directed team response effectively during outages",
        "Gave a substantial Eng All Hands presentation on React",
        "Gave notice of upcoming related work in Eng Briefing",
      ],
    }, {
      "summary": "Communicates complex ideas skillfully and with nuance, and establishes alignment within the wider organization",
      "signals": [
        "Communicates project risk and tradeoffs skillfully and with nuance",
        "Contextualizes and clarifies ambiguous direction and strategy for others",
        "Negotiates resourcing compromises with other teams",
      ],
      "examples": [
        "Lead off-site workshop on interviewing",
        "Wrote the organization's growth framework and rationale",
      ],
    }, {
      "summary": "Influences outcomes at the highest level, moves beyond mere broadcasting, and sets best practices for others",
      "signals": [
        "Defines processes for clear communication for the entire team",
        "Shares the right amount of information with the right people, at the right time",
        "Develops and delivers plans to execs, the board, and outside investors",
      ],
      "examples": [
        "Created the communication plan for a large organizational change",
        "Presented to the board about key company metrics and projects",
      ],
    }],
  },

  "CRAFT": {
    "displayName": "Craft",
    "category": "B",
    "description": "Embodies and promotes practices to ensure excellent quality products and services",
    "milestones": [{
      "summary": "Delivers consistently good quality work",
      "signals": [
        "Tests new code thoroughly, both locally, and in production once shipped",
        "Writes tests for every new feature and bug fix",
        "Writes clear comments,documentation and code",
      ],
      "examples": [
        "Caught a bug before it went live",
        "Landed non-trivial PR with no caretaker comments",
        "Wrote hermetic tests for the happy and sad cases",
      ],
    }, {
      "summary": "Increases the robustness and reliability of codebases, and devotes time to polishing products and systems",
      "signals": [
        "Refactors existing code to make it more testable",
        "Adds tests for uncovered areas",
        "Deletes unnecessary code and deprecates proactively when safe to do so",
      ],
      "examples": [
        "Requested tests for a PR when acting as reviewer",
        "Reduced the number of unhandled or unintended exceptions",
        "Fixed a TODO for someone else in the codebase",
      ],
    }, {
      "summary": "Improves others' ability to deliver great quality work",
      "signals": [
        "Implements new autotesting infrastracture",
        "Gives thoughtful code reviews as a domain expert",
        "Adds tooling to improve code quality",
      ],
      "examples": [
        "Added code generation tooling - swagger, avro",
        "Simplified hermetic test data modification",
        "Created dependency hub",
      ],
    }, {
      "summary": "Advocates for and models great quality with proactive actions, and tackles difficult and subtle system issues",
      "signals": [
        "Builds systems so as to eliminate entire classes of programmer error",
        "Focuses the team on quality with regular reminders",
        "Implements schema evolution",
      ],
      "examples": [
        "Added code coverage reporting",
        "Promoting standards and best practices for writing tests",
      ],
    }, {
      "summary": "Enables and encourages the entire organization to make quality a central part of the development process",
      "signals": [
        "Defines policies for the engineering org that encourage quality work",
        "Identifies and eliminates single points of failure throughout the organization",
        "Secures time and resources from execs to support great quality",
      ],
      "examples": [
        "Pushed for making testing and automated testing a part of DOD",
      ],
    }],
  },

  "INITIATIVE": {
    "displayName": "Initiative",
    "category": "B",
    "description": "Challenges the status quo and effects positive organizational change outside of mandated work",
    "milestones": [{
      "summary": "Identifies opportunities for organizational change or product improvements",
      "signals": [
        "Discuess improvement opportunities",
        "Raises meaningful tensions in tactical meetings",
        "Interested in organization processes, standards, technologies",
      ],
      "examples": [
        "Identifies problems in current organization processes",
        "Identifies difficulties in external integrations",
        "Reported bugs in current version, opened bug and explain it to PO",
      ],
    }, {
      "summary": "Causes change to positively impact a few individuals or minor improvement to an existing product or service",
      "signals": [
        "Picks bugs off the backlog proactively when blocked elsewhere",
        "Makes design quality improvements unprompted",
        "Takes on trust and safety tasks proactively when blocked elsewhere",
      ],
      "examples": [
        "Advocated on own behalf for a change in role or process",
        "Audited web client performance in Chrome and proposed fixes",
      ],
    }, {
      "summary": "Causes change to positively impact an entire team or instigates a minor feature or service",
      "signals": [
        "Demonstrates concepts proactively with prototypes",
        "Fixes complicated bugs outside of regular domain",
        "Takes ownership of systems that nobody owns or wants",
      ],
      "examples": [
        "Defined style guide to resolve style arguments",
        "Proposed and implemented at-mentions prototype",
      ],
    }, {
      "summary": "Effects change that has a substantial positive impact on the engineering organization or a major product impact",
      "signals": [
        "Champions and pioneers new technologies to solve new classes of problem",
        "Exemplifies grit and determination in the face of persistent obstacles",
        "Instigates major new features, services, or architectures",
      ],
      "examples": [
        "Created the interviewing method or policy for the organization",
        "Implemented and secured support for tech portal (unpromted)",
        "Migrated front end to  mono repo and bazel",
      ],
    }, {
      "summary": "Effects change that has a substantial positive impact on the whole enterprise",
      "signals": [
        "Creates a new function to solve systemic issues",
        "Galvanizes the entire company and garners buy in for a new strategy",
        "Changes complex organizational processes",
      ],
      "examples": [
        "Migrated the organization to Jira / TFS",
        "Built Simulation Portal prototype and convinced execs to fund it",
      ],
    }],
  },

  "CAREER_DEVELOPMENT": {
    "displayName": "Career development",
    "category": "C",
    "description": "Provides strategic support to engineers to help them build the career they want",
    "milestones": [{
      "summary": "Gives insight into opportunities and helps identify individuals' strengths and weaknesses",
      "signals": [
        "Advocates on behalf and in defense of a group member",
        "Shares opportunities for improvements and recognises achievements",
        "Explains appropriate available industry paths",
      ],
      "examples": [
        "Collected and delivered feedback",
        "Discussed career options and areas of interest informally",
      ],
    }, {
      "summary": "Formally supports and advocates for one person and provides tools to help them solve career problems",
      "signals": [
        "Ensure a group member has an appropriate role on their team",
        "Offers effective career advice to group members, without being prescriptive",
        "Creates space for people to talk through challenges",
      ],
      "examples": [
        "Set up and attended regular, constructive 1on1s ",
        "Provided coaching on how to have difficult conversations",
        "Taught group members the GROW model",
      ],
    }, {
      "summary": "Inspires and retains a small group of people and actively pushes them to stretch themselves",
      "signals": [
        "Discusses paths, and creates plans for personal and professional growth",
        "Advocates to align people with appropriate roles within organization",
        "Works with team leads to elevate emerging leaders",
      ],
      "examples": [
        "Reviewed individual group member progression every 6 weeks",
        "Suggested appropriate group member for Tech Lead position",
        "Arranged a requested switch of discipline for a group member",
      ],
    }, {
      "summary": "Manages interactions and processes between groups, promoting best practices and setting a positive example",
      "signals": [
        "Manages team transitions smoothly, respecting team and individual needs",
        "Develops best practices for conflict resolution",
        "Ensures all group members' roles are meeting their career needs",
      ],
      "examples": [
        "Built a resourcing plan based on company, team, and individual goals",
        "Prevented regretted attrition with intentional, targeted intervention",
      ],
    }, {
      "summary": "Supports the development of a signficant part of the engineering org, and widely viewed as a trusted advisor",
      "signals": [
        "Supports and develops senior leaders",
        "Identified leadership training opportunities for senior leadership",
        "Pushes everyone to be as good as they can be, with empathy",
      ],
      "examples": [
        "Provided coaching to group leads",
        "Devised Pathwise curriculum for group leads",
        "Advocated to execs for engineer development resources and programs",
      ],
    }],
  },

  "ORG_DESIGN": {
    "displayName": "Org design",
    "category": "C",
    "description": "Defines processes and structures that enables the strong growth and execution of a diverse eng organization",
    "milestones": [{
      "summary": "Respects and participates in processes, giving meaningful feedback to help the organization improve",
      "signals": [
        "Reflects on meetings that leave them inspired or frustrated",
        "Teaches others about existing processes",
        "Actively participates and makes contributions within organizational processes",
      ],
      "examples": [
        "Facilitated effective tactical meeting with empathy",
        "Explained tactical meeting format to a new recruit",
        "Provided feedback on sprint planning meeting",
      ],
    }, {
      "summary": "Identifies opportunities to improve existing processes and makes changes that positively affect the local team",
      "signals": [
        "Defines meeting structure and cadence that meets team needs",
        "Engages in organizational systems thinking",
        "Advocates for improved diversity and inclusion, and proposes ideas to help",
      ],
      "examples": [
        "Improved Watch on-call rotation scheduling",
        "Defined standard channels for inter-team communication",
      ],
    }, {
      "summary": "Develops processes and programs to solve ongoing organizational problems",
      "signals": [
        "Creates programs that meaningfully improve organizational diversity",
        "Solves long-standing organizational problems",
        "Reallocates resources to meet organizational needs",
      ],
      "examples": [
        "Developed baseline team templates for consistency",
        "Created bug-rotation program to address ongoing quality issues",
        "Defined Guilds\\Chapter manifesto and charter",
      ],
    }, {
      "summary": "Thinks deeply about organizational issues and identifies hidden dynamics that contribute to them",
      "signals": [
        "Evaluates incentive structures and their effect on execution",
        "Analyzes existing processes for bias and shortfall",
        "Ties abstract concerns to concrete organizational actions or norms",
      ],
      "examples": [
        "Analyzed the growth rubric for false negative potential",
      ],
    }, {
      "summary": "Leads initiatives to address issues stemming from hidden dynamics and company norms",
      "signals": [
        "Builds programs to train leadership in desired skills",
        "Creates new structures that provide unique growth opportunities",
        "Leads planning and communication for reorgs",
      ],
      "examples": [
        "Lead efforts to increase number of frontend engineers",
        "Directed resources to meaningfully improve diversity at all levels",
        "Built the growth framework rubric",
      ],
    }],
  },

  "WELLBEING": {
    "displayName": "Wellbeing",
    "category": "C",
    "description": "Supports the emotional well-being of group members in difficult times, and celebrates their successes",
    "milestones": [{
      "summary": "Uses tools and processes to help ensure colleagues are healthy and happy",
      "signals": [
        "Keeps confidences unless legally or morally obliged to do otherwise",
        "Applies the reasonable person principle to others",
        "Avoids blame and focuses on positive change",
      ],
      "examples": [
        "Ensured group members were taking enough vacation",
        "Put themself in another's shoes to understand their perspective",
        "Checked in with colleague showing signs of burnout ",
      ],
    }, {
      "summary": "Creates a positive, supportive, engaging team environment for group members",
      "signals": [
        "Sheds light on other experiences to build empathy and compassion",
        "Validates ongoing work and sustains motivation",
        "Proposes solutions when teams get bogged down or lose momentum",
      ],
      "examples": [
        "Coordinated a small celebration for a project launch",
        "Noted a team without a recent win and suggested some easy quick wins",
      ],
    }, {
      "summary": "Manages expectations across peers, leads in the org, promotes calm, and prevents consensus building",
      "signals": [
        "Trains group members to separate stimulus from response",
        "Maintains a pulse on individual and team morale",
        "Helps group members approach problems with curiosity",
      ],
      "examples": [
        "Reframed a problem as a challenge, instead of a barrier, when appropriate",
      ],
    }, {
      "summary": "Advocates for the needs of teams and group members, and proactively works to calm the organization",
      "signals": [
        "Ensures team environments are safe and inclusive, proactively",
        "Grounds group member anxieties in reality",
        "Tracks team retention actively and proposes solutions to strengthen it",
      ],
      "examples": [
        "Relieved org tension around product direction by providing extra context",
        "Encouraged group members to focus on what they can control",
        "Guided people through complex organizational change",
      ],
    }, {
      "summary": "Manages narratives, channels negativity into inspiration and motivation, and protects the entire team",
      "signals": [
        "Recognizes and points out narratives when appropriate",
        "Works to reshape narratives from victimization to ownership",
        "Increases the psychological safety of the entire team",
      ],
      "examples": [
        "Converted group member from a problem haver to a problem solver",
        "Challenged false narrative and redirected to compassion and empathy",
        "Cultivated and championed a culture of empathy within the entire team",
      ],
    }],
  },

  "ACCOMPLISHMENT": {
    "displayName": "Accomplishment",
    "category": "C",
    "description": "Inspires day to day excellence, maximizes potential and effectively resolves performance issues with compassion",
    "milestones": [{
      "summary": "Helps individuals identify blockers and helps them identify next steps for resolution",
      "signals": [
        "Notices when someone is stuck and reaches out",
        "Helps others break down problems into feasible, tangible next steps",
        "Talks through problems non-judgmentally",
      ],
      "examples": [
        "Unblocked a group member",
        "Reinforces and affirms positive feedback for good work",
      ],
    }, {
      "summary": "Helps individuals resolve difficult performance issues, with insight, compassion, and skill",
      "signals": [
        "Gathers context outside the immediate problem",
        "Recognizes issues within local environment and suggests change",
        "Works to encourage ownership of actions and responsibilities",
      ],
      "examples": [
        "Convinced a group member to solve a problem directly, rather than doing it for them",
        "Gave honest feedback about poor performance, with compassion",
      ],
    }, {
      "summary": "Intervenes in long-standing performance issues with targeted behavior change or performance plans",
      "signals": [
        "Aggregates signals of poor performance and creates process for improvement",
        "Investigates motivation and externalities for consistent poor performance",
        "Puts together comprehensive, achievable performance plans",
      ],
      "examples": [
        "Worked with group member to address persistent communication failures",
        "Arranged a transfer to another team, resulting in improved performance",
        "Managed group member closely to maximise chances of PIP success",
      ],
    }, {
      "summary": "Mediates escalated situations, empowers underperforming teams, and resolves conflict",
      "signals": [
        "Recognizes heightened situations and toxic or aggressive interactions",
        "Inserts themself into conflict where appropriate to calm and mediate",
        "Encourages open dialog and builds trust between parties in conflict",
      ],
      "examples": [
        "Empowered a team to drive forward amidst uncertainty",
        "Protected team from externalities so they could focus on goals",
        "Mediated sit-down between team members to address tension",
      ],
    }, {
      "summary": "Resolves complex organizational dysfunction, or persistent conflict at senior levels",
      "signals": [
        "Takes control of dysfunctional teams to organise chaos",
        "Repairs broken team dynamics and builds harmony",
        "Presides over a well-oiled team of teams",
      ],
      "examples": [
        "Turned around the performance of a problematic team",
        "De-escalated serious tensions between teams",
        "Rebuilt trust between senior team leads",
      ],
    }],
  },

  "MENTORSHIP": {
    "displayName": "Mentorship",
    "category": "D",
    "description": "Provides support to colleagues, spreads knowledge, and develops the team outside formal reporting structures",
    "milestones": [{
      "summary": "Informally mentors individuals in an ad-hoc way, supports new hires, and conveys institutional knowledge",
      "signals": [
        "Makes themself available for informal support and advice",
        "Acts as sounding board for peers and more junior members",
        "Provides sound advice when asked",
      ],
      "examples": [
        "Acted as an onboarding buddy",
        "Paired with an engineer to help them with an unfamiliar area",
        "Helped a colleague understand their feelings",
      ],
    }, {
      "summary": "Mentors people proactively, and guides people to realizations rather than providing the answer",
      "signals": [
        "Takes time to explain concepts and best practices",
        "Asks questions to illuminate concepts, rather than stating them",
        "Allows others to lead efforts when it will help their development",
      ],
      "examples": [
        "Shared interesting article with a team member to help with their growth",
        "Offered unprompted feedback to help growth, with empathy",
        "Lead from behind to support someone new to a leadership role",
      ],
    }, {
      "summary": "Teaches small groups of engineers and contributes to shared knowledge base",
      "signals": [
        "Avoids siloing information when it can be usefully shared with others",
        "Works to increase the bus factor of systems",
        "Finds tools that work best for a team member's personality",
      ],
      "examples": [
        "Gave a brown bag presentation on payments",
      ],
    }, {
      "summary": "Encourages people to mentor each other, and creates ways for them to do so",
      "signals": [
        "Defines an entire curriculum for a discipline",
        "Draws positive attention to well-modeled mentor and teaching behaviours",
        "Creates brown bag series and lines up speakers",
      ],
      "examples": [
        "Designed and taught web client guild curriculum",
      ],
    }, {
      "summary": "Instills and promotes a culture of learning and development within the entire engineering team",
      "signals": [
        "Sets incentive structures to recognise and reward mentorship",
        "Empowers team members to develop themselves",
        "Role models productive and healthy mentor relationships",
      ],
      "examples": [
        "Instituted the professional education budget for engineers",
        "Mentored mentors",
        "Started the eng advisor program and lined up external mentors",
      ],
    }],
  },

  "PROMOTING_RECRUITING": {
    "displayName": "Promoting and Recruiting",
    "category": "D",
    "description": "Promotes Organization to the outside world and establishes it as an attractive and thoughtful place to work while also strengthens the Organization's team",
    "milestones": [{
      "summary": "Represents Organization well externally, and influences individuals positively/Understands how to evaluate candidates at the Organization",
      "signals": [
        "Shares personal and organizational successes with their network",
        "Attends Organziation-hosted events and talks with guests",
        "Communicates genuine and honest excitement about their work externally",
      ],
      "examples": [
        "Shadows interviews to gain familiarity with process",
        "Acted as a guide for a non-friend visitor to the office",
        "Referred appropriate individuals for open positions",
      ],
    }, {
      "summary": "Participates more centrally in small events, and takes simple actions that positively influence groups of people/Interviews regularly, helps the team make meaningful hiring decisions",
      "signals": [
        "Takes meaningful action to introduce people to the Organization",
        "Uses interview standards to provide clear, objective feedback on candidates",
        "Organizes positive small-sized events that introduce people to the Organization",
      ],
      "examples": [
        "Volunteered as a helper for hackathon",
        "Organized a short tour of the office by new recruits",
        "Interviews candidates with empathy and treats them all with equal respect",
      ],
    }, {
      "summary": "Works hard to positively influence large groups of people on their views of the Organization/Maintains and strengthens the integrity of the current recruitement process",
      "signals": [
        "Mentors or participates in a high visibility way in an external organization",
        "Proposed useful, tangible improvements to the interview process",
        "Writes an article\blog as a representetive of the Organization",
      ],
      "examples": [
        "Represented Organization on a panel at a conference of industry experts",
        "Models great interview technique and feedback when shadowed",
        "Wrote new interview question which meets our question quality criteria",
      ],
    }, {
      "summary": "Establishes the Organization as a great, innovative company and workplace to the whole industry/Actively contributes to and leads recruitement decisions, and goes to great lengths to source great candidates",
      "signals": [
        "Establishes themself as an industry thought leader who attracts talent",
        "Publishes material about the organizational or technical innovations",
        "Planned engineering summit on interview process and training",
      ],
      "examples": [
        "Published a published paper on the Organization technology",
        "Organized and lead Organizations's presence at a recruitment fair",
        "Makes hiring decisions, resolving discrepancies between conflicting reports",
      ],
    }, {
      "summary": "Introduces the organization in a positive light to a wider audience outside the industry/Sets recruitment strategy, invests in long-term relationships for critical roles, and recruits at scale",
      "signals": [
        "Delivers key messages to broad, mainstream audiences",
        "Influences large audiences to talk about the Organization positively",
        "Organized efforts around convincing acquired engineers to join and stay",
      ],
      "examples": [
        "Published or interviewed in a mainstream newspaper or website outside tech",
        "Keynoted a conference with national attention",
        "Sets the tone, policy and goals around building a diverse, high-quality team",
      ],
    }],
  },

  "COMMUNITY": {
    "displayName": "Community",
    "category": "D",
    "description": "Builds community internally, gives of themself to the team, and champions and extols company values",
    "milestones": [{
      "summary": "Is available and present on current teams, and works to contribute positively to company culture",
      "signals": [
        "Participates in team activities and offsites",
        "Treats colleagues and clients with respect",
        "Joins groups or committees outside regular duties",
      ],
      "examples": [
        "Joined and actively participated in the web client guild",
        "Wrote entertaining and informative Prod Ops writeups on Hatch",
      ],
    }, {
      "summary": "Steps up, builds connectedness, and takes concrete actions to promote an inclusive culture",
      "signals": [
        "Makes space for others to participate",
        "Collaborates with other engineers outside direct responsibilities",
        "Finds ways to ramp up and engage new hires quickly",
      ],
      "examples": [
        "Created onboarding bingo",
        "Brought shy and introverted people into a dominant conversation",
        "Volunteered as secretary for a team",
      ],
    }, {
      "summary": "Contributes to improving team relatedness, and helps build a culture of lending support",
      "signals": [
        "Takes on additional shifts at short notice",
        "Pitches in to help other teams hit deadlines, without missing own deadlines",
        "Uses position to raise difficult issues on someone's behalf",
      ],
      "examples": [
        "Stayed positive and improved team morale during period after layoffs",
      ],
    }, {
      "summary": "Exemplifies selflessness for the team without compromising responsibilities, and lifts everyone up",
      "signals": [
        "Goes above and beyond on the Watch, serving the team without complaint",
        "Implements concrete programs to signficantly improve team inclusivity",
        "Takes on large amounts of tedious grunt work for the team without being asked",
      ],
      "examples": [
        "Devoted large amount of time to helping outside direct responsibilities",
        "Refactored hundreds of legacy Shepherd nodes",
        "Acted as sole maintainer of Gerrit for years",
      ],
    }, {
      "summary": "Lives the company values, guards positive culture, and defines policies that support relatedness between teams",
      "signals": [
        "Brings separate teams together to build relatedness",
        "Holds individuals, teams, and leadership accountable to organizations's values",
        "Sets the tone, policy, and goals around maintaining an inclusive company",
      ],
      "examples": [
        "Organized excursion offsite for the whole engineering org",
        "Devised, delivered and acted on findings from an engineer happiness survey",
        "Challenged and corrected exclusionary behaviour or policies",
      ],
    }],
  },
}

export const trackIds: TrackId[] = Object.keys(tracks)

export const categoryIds: Set<string> = trackIds.reduce((set, trackId) => {
  set.add(tracks[trackId].category)
  return set
}, new Set())

export const categoryPointsFromMilestoneMap = (milestoneMap: MilestoneMap) => {
  let pointsByCategory = new Map()
  trackIds.forEach((trackId) => {
    const milestone = milestoneMap[trackId]
    const categoryId = tracks[trackId].category
    let currentPoints = pointsByCategory.get(categoryId) || 0
    pointsByCategory.set(categoryId, currentPoints + milestoneToPoints(milestone))
  })
  return Array.from(categoryIds.values()).map(categoryId => {
    const points = pointsByCategory.get(categoryId)
    return { categoryId, points: pointsByCategory.get(categoryId) || 0 }
  })
}

export const totalPointsFromMilestoneMap = (milestoneMap: MilestoneMap): number =>
  trackIds.map(trackId => milestoneToPoints(milestoneMap[trackId]))
    .reduce((sum, addend) => (sum + addend), 0)

export const categoryColorScale = d3.scaleOrdinal()
  .domain(categoryIds)
  .range(['#fcba03', '#000080', '#6698FF', '#7D0552'])

export const titles = [
  { label: 'Engineer I', minPoints: 0, maxPoints: 16 },
  { label: 'Engineer II', minPoints: 17, maxPoints: 35 },
  { label: 'Senior Engineer', minPoints: 36, maxPoints: 57 },
  { label: 'Group Lead', minPoints: 36, maxPoints: 57 },
  { label: 'Staff Engineer', minPoints: 58, maxPoints: 89 },
  { label: 'Senior Group Lead', minPoints: 58, maxPoints: 89 },
  { label: 'Principal Engineer', minPoints: 90 },
  { label: 'Director of Engineering', minPoints: 90 }
]

export const eligibleTitles = (milestoneMap: MilestoneMap): string[] => {
  const totalPoints = totalPointsFromMilestoneMap(milestoneMap)

  return titles.filter(title => (title.minPoints === undefined || totalPoints >= title.minPoints)
    && (title.maxPoints === undefined || totalPoints <= title.maxPoints))
    .map(title => title.label)
}
