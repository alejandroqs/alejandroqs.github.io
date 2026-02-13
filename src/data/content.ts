
export type Mode = 'corporate' | 'disruptor';

export interface Project {
  id: string;
  title: string;
  tech: string[];
  metrics: string[];
  description: string;
  highlight?: boolean;
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  description: string;
  highlights: string[]; // Added highlights for bullet points
}

export interface Content {
  hero: {
    title: string;
    subtitle: string;
    tagline: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  switch: {
    label: string;
  };
  projects: {
    title: string;
    items: Project[];
  };
  skills: {
    title: string;
    mobileWeb: { title: string; items: string[] };
    blockchain: { title: string; items: string[] };
  };
  experience: {
    title: string;
    items: ExperienceItem[];
  };
  footer: {
    contact: string;
    closing: string;
  };
}

export const content: Record<Mode, Content> = {
  corporate: {
    hero: {
      title: "Senior Full Stack Engineer. Building High-Performance Mobile & Web Apps.",
      subtitle: "Engineer behind apps with 100k+ downloads and secure decentralized protocols.",
      tagline: "100k+ Downloads | Scalable Architecture",
      ctaPrimary: "View Projects",
      ctaSecondary: "Download CV"
    },
    switch: {
      label: "Corporate"
    },
    projects: {
      title: "Featured Projects",
      items: [
        {
          id: "oraculum",
          title: "Oraculum (Android App)",
          tech: ["Kotlin", "Android SDK"],
          metrics: ["100k Downloads", "4.7 Rating", "GDPR Compliance"],
          description: "High-performance mobile application focusing on user retention and scalable architecture."
        },
        {
          id: "numerology",
          title: "Numerology (Flutter)",
          tech: ["Flutter", "Dart"],
          metrics: ["Cross-platform", "Analytics"],
          description: "Cross-platform utility app with optimized analytics integration."
        },
        {
          id: "nft-collection",
          title: "NFT Collection / Web3",
          tech: ["Solidity", "Web3.js"],
          metrics: ["Gas Optimization", "Smart Contract Security"],
          description: "Secure smart contract implementation for digital assets."
        }
      ]
    },
    skills: {
      title: "Core Competencies",
      mobileWeb: {
        title: "Enterprise Engineering",
        items: ["React", "TypeScript", "Node.js", "AWS", "Docker", "System Design", "Microservices", "CI/CD"]
      },
      blockchain: {
        title: "Emerging Technologies",
        items: ["Blockchain Architecture", "Smart Contracts", "Solidity", "Web3 Integration", "Cryptography"]
      }
    },
    experience: {
      title: "Professional Experience",
      items: [
        {
          company: "Duonion",
          role: "Lead Frontend & Full Stack Engineer",
          period: "2019 – 2025",
          description: "Technical leadership and end-to-end development of digital solutions, acting as the principal architect for web and mobile platforms.",
          highlights: [
            "Designed and developed multiple Single Page Applications (SPAs) using React and TypeScript, improving code maintainability.",
            "Led the engineering of digital products that scaled to over 100,000 users (flagship success: Oraculum).",
            "Developed complex user interfaces for decentralized ecosystems, integrating Web3 authentication ensuring fluid UX.",
            "Implemented asynchronous loading strategies significantly reducing initial load times."
          ]
        },
        {
          company: "Freelance Consultant",
          role: "Full Stack Web Developer",
          period: "2019 – 2022",
          description: "Consultancy and development of bespoke web platforms, e-commerce solutions, and management systems for international clients.",
          highlights: [
            "Built and customized robust e-commerce platforms (Shopify, Magento) integrating headless solutions with React/Node.js.",
            "Delivered 'Pixel Perfect' and fully responsive interface designs ensuring cross-browser compatibility.",
            "Created and consumed secure RESTful APIs using Node.js and PHP for high-availability applications."
          ]
        },
        {
          company: "Innovation Centre (CICEI)",
          role: "R&D Engineer (Data & Web Visualization)",
          period: "2018 – 2019",
          description: "Applied research in data visualization and real-time sentiment analysis.",
          highlights: [
            "Developed interactive dashboards for visualizing large datasets processed with Spark and Scala.",
            "Applied machine learning techniques to predict trends from social media data."
          ]
        }
      ]
    },
    footer: {
      contact: "Get in touch",
      closing: "Ready to deploy immediately."
    }
  },
  disruptor: {
    hero: {
      title: "Blockchain Architect. Securing the Future of Decentralized Finance.",
      subtitle: "Engineer behind apps with 100k+ downloads and secure decentralized protocols.",
      tagline: "DeFi Protocols | Smart Contract Auditing",
      ctaPrimary: "View Protocols",
      ctaSecondary: "Download Manifest"
    },
    switch: {
      label: "Protocol"
    },
    projects: {
      title: "Deployed Contracts",
      items: [
        {
          id: "nft-collection",
          title: "NFT Collection / Web3",
          tech: ["Solidity", "Web3.js", "Merkle Trees"],
          metrics: ["Gas Optimization", "Smart Contract Security"],
          description: "Advanced smart contract architecture with gas-optimized execution.",
          highlight: true
        },
        {
          id: "oraculum",
          title: "Oraculum (Android App)",
          tech: ["Kotlin", "Android SDK"],
          metrics: ["100k User Nodes", "Encrypted Data"],
          description: "Mass-scale mobile deployment with robust data privacy protocols."
        },
        {
          id: "numerology",
          title: "Numerology (Flutter)",
          tech: ["Flutter", "Dart"],
          metrics: ["Cross-chain Visualization"],
          description: "Cross-chain data visualization interface."
        }
      ]
    },
    skills: {
      title: "Cryptographic Arsenal",
      mobileWeb: {
        title: "Full Stack Foundation",
        items: ["React", "TypeScript", "Node.js", "Rust", "WASM", "Distributed Systems"]
      },
      blockchain: {
        title: "Protocol Engineering",
        items: ["Solidity", "Yul / Assembly", "EVM Internals", "Gas Optimization", "zk-SNARKs", "DeFi Security"]
      }
    },
    experience: {
      title: "Execution History",
      items: [
        {
          company: "Duonion",
          role: "Blockchain Architect & Technical Co-Founder",
          period: "2022 – 2025",
          description: "Led the architectural design and technical strategy for Web3 solutions, bridging the gap between decentralized protocols and user-friendly mobile/web interfaces.",
          highlights: [
            "Designed secure server architectures integrating AWS Lambda with Ethereum-based smart contracts.",
            "Defined the technical roadmap for blockchain integration, focusing on scalability and security.",
            "Oversaw the full-stack development of DApps, ensuring seamless wallet connectivity."
          ]
        },
        {
          company: "Confidential NFT Project",
          role: "Lead Smart Contract Developer",
          period: "2020 – 2023",
          description: "Engineered and deployed a high-performance NFT collection, handling the entire lifecycle from Smart Contract creation to minting DApp.",
          highlights: [
            "Wrote and optimized Solidity contracts, implementing advanced features like presale whitelisting (Merkle Trees).",
            "Conducted rigorous internal auditing to prevent common vulnerabilities (Reentrancy, Overflow/Underflow).",
            "Built the minting DApp using Web3.js for real-time supply tracking."
          ]
        },
        {
          company: "Independent Consultant",
          role: "Senior Mobile & Software Engineer",
          period: "2019 – Present",
          description: "Delivering high-reliability software solutions. Demonstrated ability to build products that achieve mass adoption.",
          highlights: [
            "Engineered Oraculum (Android), achieving 100,000+ downloads and a 4.7-star rating.",
            "Implemented secure payment gateways and GDPR-compliant data handling transferable to DeFi security.",
            "Developed Numerology (Flutter), optimizing performance and user engagement through advanced analytics."
          ]
        }
      ]
    },
    footer: {
      contact: "Initialize Handshake",
      closing: "Ready to deploy immediately."
    }
  }
};
