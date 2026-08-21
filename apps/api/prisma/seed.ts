/* eslint-disable */
import { PrismaClient, Role, CourseLevel } from '@prisma/client';
import * as dotenv from 'dotenv';

dotenv.config();

const connectionString =
  process.env.DATABASE_URL ||
  'postgresql://postgres:postgres@localhost:5432/cybernexus?schema=public';

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: connectionString,
    },
  },
} as any);

async function main() {
  console.log('⚡ Starting CyberNexus Academy database seed...');

  await prisma.moduleProgress.deleteMany();
  await prisma.certificate.deleteMany();
  await prisma.enrollment.deleteMany();
  await prisma.module.deleteMany();
  await prisma.course.deleteMany();
  await prisma.user.deleteMany();

  const adminUser = await prisma.user.create({
    data: {
      email: 'ninad@cybernexus.io',
      passwordHash:
        '$2b$10$epR3Z5uJqQ0u9L5P.1V9e.XvC8v4jYmF41f8i2aK4q3D5n8V1b2C3',
      fullName: 'Ninad Pawar',
      studentHandle: 'NEXUS-ROOT-001',
      role: Role.ADMIN,
      clearance: 'LEVEL 5 (CHIEF ARCHITECT)',
      avatarUrl:
        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150',
    },
  });

  console.log(
    `✔ Admin User created: ${adminUser.fullName} (${adminUser.email})`,
  );

  const coursesToSeed = [
    {
      slug: 'digital-forensics',
      title: 'Digital Forensics & Incident Response',
      badge: 'DFIR TRACK',
      description:
        'Master memory forensics, filesystem analysis, artifact extraction, and malware triaging during active breach investigations.',
      level: CourseLevel.INTERMEDIATE,
      duration: '8 Weeks',
      tags: ['Forensics', 'Volatility', 'Autopsy', 'Incident Response'],
      highlights: [
        'Live Memory Analysis',
        'Chain of Custody Labs',
        'Ransomware Case Studies',
      ],
      modules: [
        {
          title: 'Digital Evidence Handling & Legal Integrity',
          duration: '45 Mins',
          isSandbox: false,
        },
        {
          title: 'Live RAM Acquisition & Memory Extraction',
          duration: '90 Mins',
          isSandbox: true,
        },
        {
          title: 'Windows Registry & File System Forensics',
          duration: '75 Mins',
          isSandbox: true,
        },
        {
          title: 'Malware Triage & Network Packet Reconstruction',
          duration: '120 Mins',
          isSandbox: true,
        },
      ],
    },
    {
      slug: 'ethical-hacking',
      title: 'Offensive Security & Ethical Hacking',
      badge: 'RED TEAM',
      description:
        'Learn penetration testing methodologies, network exploitation, privilege escalation, and Active Directory attacks in isolated sandboxes.',
      level: CourseLevel.INTERMEDIATE,
      duration: '10 Weeks',
      tags: ['PenTesting', 'Metasploit', 'Active Directory', 'Burp Suite'],
      highlights: [
        'Interactive Root-the-Box Labs',
        'Custom Exploit Payloads',
        'AD Forest Compromise',
      ],
      modules: [
        {
          title: 'Advanced Network Reconnaissance & Port Enumeration',
          duration: '60 Mins',
          isSandbox: true,
        },
        {
          title: 'Vulnerability Analysis & Custom Payload Crafting',
          duration: '90 Mins',
          isSandbox: true,
        },
        {
          title: 'Linux & Windows Privilege Escalation Vectors',
          duration: '110 Mins',
          isSandbox: true,
        },
        {
          title: 'Active Directory Domain Dominance & Lateral Movement',
          duration: '140 Mins',
          isSandbox: true,
        },
      ],
    },
    {
      slug: 'soc-analyst',
      title: 'SOC Analyst & Threat Hunting',
      badge: 'BLUE TEAM',
      description:
        'Defensive SIEM monitoring, threat intelligence correlation, Splunk/ELK query tuning, and automated triage workflows.',
      level: CourseLevel.BEGINNER,
      duration: '6 Weeks',
      tags: ['SIEM', 'Splunk', 'Threat Intel', 'MITRE ATT&CK'],
      highlights: [
        'Live SIEM Ingestion',
        'MITRE Mapping',
        'PCAP Traffic Analysis',
      ],
      modules: [
        {
          title: 'SOC Architecture & Incident Lifecycle Management',
          duration: '45 Mins',
          isSandbox: false,
        },
        {
          title: 'Splunk & ELK Log Ingestion and Alert Rule Creation',
          duration: '80 Mins',
          isSandbox: true,
        },
        {
          title: 'MITRE ATT&CK Framework Mapping & Threat Triage',
          duration: '70 Mins',
          isSandbox: true,
        },
        {
          title: 'PCAP Traffic Inspection & Network Anomaly Detection',
          duration: '100 Mins',
          isSandbox: true,
        },
      ],
    },
    {
      slug: 'cloud-security',
      title: 'Cloud Infrastructure & IAM Defense',
      badge: 'CLOUD DEFENSE',
      description:
        'Secure AWS/Azure multi-tenant setups, detect IAM misconfigurations, configure CSPM rules, and audit containerized microservices.',
      level: CourseLevel.ADVANCED,
      duration: '8 Weeks',
      tags: ['AWS Security', 'K8s Hardening', 'IAM', 'Terraform Compliance'],
      highlights: [
        'Kubernetes Attack Graphs',
        'AWS GuardDuty Triage',
        'IaC Security Scanning',
      ],
      modules: [
        {
          title: 'Cloud Threat Landscape & Shared Responsibility Matrix',
          duration: '40 Mins',
          isSandbox: false,
        },
        {
          title: 'AWS Identity & Access Management (IAM) Hardening',
          duration: '90 Mins',
          isSandbox: true,
        },
        {
          title: 'Kubernetes Cluster Defense & Runtime Security',
          duration: '120 Mins',
          isSandbox: true,
        },
        {
          title: 'Automated CI/CD Infrastructure as Code (IaC) Scanning',
          duration: '80 Mins',
          isSandbox: true,
        },
      ],
    },
    {
      slug: 'web-security',
      title: 'Web Application Pentesting (OWASP Top 10)',
      badge: 'APPSEC',
      description:
        'Deep dive into SQLi, blind XSS, CSRF, IDOR, SSRF, JWT exploitation, and API security auditing with modern vulnerability tooling.',
      level: CourseLevel.BEGINNER,
      duration: '6 Weeks',
      tags: ['OWASP Top 10', 'Burp Suite Pro', 'API Security', 'GraphQL'],
      highlights: [
        'Vulnerable Target Sandboxes',
        'API Key Forgery',
        'Automated Fuzzing',
      ],
      modules: [
        {
          title: 'HTTP/HTTPS Internals & Burp Suite Proxy Setup',
          duration: '50 Mins',
          isSandbox: true,
        },
        {
          title: 'Authentication Bypass, IDOR & Broken Access Controls',
          duration: '90 Mins',
          isSandbox: true,
        },
        {
          title: 'Server-Side Injection (SQLi, SSTI, SSRF) Exploitation',
          duration: '110 Mins',
          isSandbox: true,
        },
        {
          title: 'Modern GraphQL & REST API Endpoint Auditing',
          duration: '85 Mins',
          isSandbox: true,
        },
      ],
    },
    {
      slug: 'cybersecurity',
      title: 'AI in Cybersecurity & Fraud Analytics',
      badge: 'EMERGING TECH',
      description:
        'Apply machine learning for automated anomaly detection, LLM red teaming, prompt injection defenses, and behavioral malware classification.',
      level: CourseLevel.ADVANCED,
      duration: '7 Weeks',
      tags: ['AI Defense', 'LLM Red Teaming', 'Fraud ML', 'Python for Sec'],
      highlights: [
        'Prompt Injection Testing',
        'Model Evasion Detection',
        'Threat Analytics Notebooks',
      ],
      modules: [
        {
          title: 'Foundations of Machine Learning in Threat Detection',
          duration: '50 Mins',
          isSandbox: false,
        },
        {
          title: 'Behavioral Anomaly Detection using Unsupervised Models',
          duration: '95 Mins',
          isSandbox: true,
        },
        {
          title: 'Adversarial Machine Learning & Evasion Attacks',
          duration: '90 Mins',
          isSandbox: true,
        },
        {
          title: 'Red Teaming LLMs & Guardrail Enforcement',
          duration: '115 Mins',
          isSandbox: true,
        },
      ],
    },
  ];

  for (const courseData of coursesToSeed) {
    const { modules, ...courseDetails } = courseData;

    const createdCourse = await prisma.course.create({
      data: {
        ...courseDetails,
        instructorId: adminUser.id,
        modules: {
          create: modules.map((m, idx) => ({
            title: m.title,
            duration: m.duration,
            isSandbox: m.isSandbox,
            orderIndex: idx + 1,
          })),
        },
      },
    });

    console.log(
      `✔ Created Track: [${createdCourse.badge}] ${createdCourse.title}`,
    );
  }

  console.log('🚀 Database seeding completed successfully!');
}

main()
  .catch((e) => {
    console.error('❌ Error while seeding database:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
