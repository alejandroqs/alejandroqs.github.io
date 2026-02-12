
export type Mode = 'corporate' | 'disruptor';

export interface Project {
  id: string;
  title: string;
  tech: string[];
  metrics: string[];
  description: string;
  highlight?: boolean;
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
    items: {
      company: string;
      role: string;
      period: string;
      description: string;
    }[];
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
      label: "Corporate" // or "Business"
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
      title: "Technical Arsenal",
      mobileWeb: { title: "Mobile & Web", items: ["Kotlin", "Flutter", "React", "Node.js", "AWS"] },
      blockchain: { title: "Blockchain", items: ["Solidity", "Web3.js", "Hardhat", "IPFS"] }
    },
    experience: {
      title: "Professional Experience",
      items: [
        {
          company: "Duonion",
          role: "Technical Leadership",
          period: "2022-Present",
          description: "Leading product development and technical strategy for scalable applications."
        },
        {
          company: "Freelance / Consultant",
          role: "Full Stack Developer",
          period: "2018-2022",
          description: "Delivering custom solutions for diverse international clients."
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
      title: "Cryptographic Primitives",
      mobileWeb: { title: "Frontend IO", items: ["Kotlin", "Flutter", "React", "Node.js", "AWS"] },
      blockchain: { title: "Core Protocol", items: ["Solidity", "Web3.js", "Hardhat", "IPFS"] }
    },
    experience: {
      title: "Execution History",
      items: [
        {
          company: "Duonion",
          role: "Protocol Architect",
          period: "2022-Present",
          description: "Architecting decentralized solutions and secure protocol implementations."
        },
        {
          company: "Freelance / Consultant",
          role: "Smart Contract Engineer",
          period: "2018-2022",
          description: "Deploying autonomous smart contracts for DAO infrastructure."
        }
      ]
    },
    footer: {
      contact: "Initialize Handshake",
      closing: "Ready to deploy immediately."
    }
  }
};
