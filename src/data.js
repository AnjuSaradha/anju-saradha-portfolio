// Edit this file to update your portfolio content.
export const profile = {
  name: 'Anju Saradha', initials: 'AS', location: 'Auckland, New Zealand',
  headline: 'Software Developer exploring Cybersecurity, AI & Data Engineering.',
  intro: 'I bring years of frontend development experience to hands-on security research, intelligent applications and data-driven engineering. I enjoy building useful tools, understanding systems and solving real problems.',
  email: 'anjus1226@gmail.com',
  github: 'https://github.com/AnjuSaradha',
  linkedin: 'https://www.linkedin.com/in/anju-saradha-947319280/',
  cv: '/anju-saradha-cv.pdf', // TODO: put your PDF in public/ with this filename
  photo: '', // TODO: put profile photo in public/ and set e.g. '/profile.jpg'
  availability: 'Open to opportunities across New Zealand',
  education: 'Master of Applied Technology (Computing) · Unitec · Distinction',
  years: '7+',
};
export const navigation = ['About', 'Experience', 'Projects', 'Case Studies', 'Stack', 'AI', 'Contact'];

export const skills = [
  {
    category: "Cybersecurity",
    icon: "shield",
    items: [
      "Splunk",
      "Wireshark",
      "Nmap",
      "Burp Suite",
      "MITRE ATT&CK",
      "NIST Framework",
      "COBIT",
      "OWASP Top 10",
      "Incident Analysis",
      "SIEM"
    ]
  },
  {
    category: "Programming",
    icon: "code",
    items: [
      "Python",
      "JavaScript",
      "TypeScript",
      "SQL",
      "REST APIs"
    ]
  },
  {
    category: "Frontend",
    icon: "code",
    items: [
      "React",
      "HTML",
      "CSS",
      "WordPress",
      "Responsive Design"
    ]
  },
  {
    category: "Cloud & Data",
    icon: "brain",
    items: [
      "AWS",
      "MongoDB",
      "Databricks",
      "PySpark",
      "Spark SQL",
      "Delta Lake",
      "Machine Learning"
    ]
  },
  {
    category: "IT Support",
    icon: "terminal",
    items: [
      "Windows",
      "Linux",
      "TCP/IP",
      "DNS",
      "DHCP",
      "Networking",
      "System Troubleshooting"
    ]
  }
];

export const experiences = [
  { role: 'Software Developer', company: 'Professional experience', period: 'Previous experience · approx. 7 years', location: 'Frontend & web development', points: ['Built and maintained user-facing web applications using JavaScript, React, CSS and WordPress.', 'Collaborated on practical application development and troubleshooting.', 'Transitioning this engineering foundation into cybersecurity, AI and data projects.'], tags: ['React', 'JavaScript', 'CSS', 'WordPress'] },
  { role: 'Cybersecurity Training & Hands-on Labs', company: 'Independent learning and practical projects', period: 'Recent', location: 'Auckland, New Zealand', points: ['Practised network traffic investigation, web security testing and security event analysis.', 'Built Python-based detection experiments and explored SIEM workflows.', 'Completed Datacom’s cybersecurity job simulation and hands-on labs.'], tags: ['Splunk', 'Wireshark', 'Nmap', 'Python'] },
];
export const projects = [
  { num: '01', title: 'AURA OS — Local AI Assistant', type: 'AI • Desktop', summary: 'A voice-enabled desktop assistant with a PySide6 interface and local Ollama model integration. Supports natural-language questions, spoken responses and commands such as opening a terminal.', tags: ['Python', 'PySide6', 'Ollama', 'Speech Recognition'], link: '', highlight: 'LOCAL AI' },
  { num: '02', title: 'Vishing Detection with Zero-Shot Learning', type: 'Research • Cybersecurity', summary: 'Master’s research detecting social-engineering signals in fraudulent call transcripts using semantic embeddings and attribute mapping, with reported accuracy around 97–98% on the project dataset.', tags: ['NLP', 'Zero-Shot Learning', 'Python', 'Security Research'], link: '', highlight: 'THESIS' },
  { num: '03', title: 'Customer & Loyalty Data Insights', type: 'Data Engineering', summary: 'A Databricks pipeline combining customer, product and sales data to generate business KPIs and customer segments using PySpark, Spark SQL, Delta Lake and K-Means.', tags: ['Databricks', 'PySpark', 'Delta Lake', 'MLlib'], link: '', highlight: 'DATA' },
  { num: '04', title: 'SYN Scan Detection & Alerting', type: 'Network Security', summary: 'Python and Scapy network-monitoring experiment that detects bursts of SYN packets, raises alerts and records findings in CSV logs.', tags: ['Python', 'Scapy', 'Nmap', 'Detection'], link: '', highlight: 'SECURITY' },
  { num: '05', title: 'Security Investigation Labs', type: 'SOC • Blue Team', summary: 'Hands-on analysis across Splunk, Wireshark and web security labs, including CloudTrail investigation, SMB/NTLM traffic analysis and access-control testing.', tags: ['Splunk', 'Wireshark', 'Burp Suite', 'CloudTrail'], link: '', highlight: 'SOC' },
  { num: '06', title: 'React AI Job Portal', type: 'Web Development • AI', summary: 'A personal web-development project exploring job-search experiences and AI-assisted functionality with React.', tags: ['React', 'JavaScript', 'AI'], link: 'https://github.com/AnjuSaradha', highlight: 'WEB' },
];
export const cases = [
  { title: 'Detecting Social Engineering in Calls', problem: 'Traditional keyword rules can miss subtle impersonation, urgency and authority cues.', approach: ['Prepare call transcript dataset', 'Map social-engineering attributes', 'Generate semantic representations', 'Evaluate zero-shot classification'], outcome: 'Research prototype evaluated on approximately 5,000 transcripts, with reported 97–98% accuracy on the project dataset.' },
  { title: 'Building a Voice-Enabled Local Assistant', problem: 'Desktop workflows can be repetitive and cloud-dependent.', approach: ['Build PySide6 desktop interface', 'Add speech input and spoken output', 'Integrate a local Ollama model', 'Handle commands and application lifecycle'], outcome: 'Working local assistant prototype; ongoing improvements include response speed and voice shutdown behaviour.' },
  { title: 'Finding Suspicious Network Scans', problem: 'Repeated connection attempts may indicate reconnaissance activity.', approach: ['Capture packets with Scapy', 'Track SYN events over time', 'Apply a configurable threshold', 'Raise alerts and write CSV logs'], outcome: 'Practical detection experiment tested with Nmap-generated traffic in a lab environment.' },
];
export const qa = [
  { keys: ['hello','hi','hey'], answer: 'Hi! I’m Anju’s portfolio assistant. Ask about her background, cybersecurity work, AI projects, skills or how to get in touch.' },
  { keys: ['experience','background','work'], answer: 'Anju has approximately seven years of software development experience, especially frontend and web technologies including JavaScript, React, CSS and WordPress. She is expanding into cybersecurity, AI and data engineering.' },
  { keys: ['education','degree','master','unitec'], answer: 'Anju completed a Master of Applied Technology (Computing) at Unitec in Auckland, passing with Distinction. Her thesis focused on vishing detection using zero-shot learning.' },
  { keys: ['cyber','security','soc','splunk'], answer: 'Anju has practical exposure to Splunk, Wireshark, Nmap, Burp Suite, network traffic analysis and SOC workflows. Projects include SYN scan detection and investigation labs.' },
  { keys: ['aura','ollama','assistant','voice'], answer: 'AURA OS is Anju’s Python/PySide6 desktop assistant with speech interaction and a locally running Ollama model. It can answer questions and respond to commands such as opening a terminal.' },
  { keys: ['vishing','thesis','fraud','zero-shot'], answer: 'Her thesis investigated detection of social-engineering indicators in fraudulent call transcripts using zero-shot learning and semantic features. Reported project accuracy was approximately 97–98% on the evaluated dataset.' },
  { keys: ['data','databricks','pyspark'], answer: 'Her Customer & Loyalty Data Insights project uses Databricks, PySpark, Spark SQL, Delta Lake and K-Means clustering for KPIs and customer segmentation.' },
  { keys: ['project','portfolio','github'], answer: 'Featured work includes AURA OS, vishing detection research, a Databricks insights pipeline, SYN scan detection, SOC labs and a React AI job portal. Her GitHub is github.com/AnjuSaradha.' },
  { keys: ['skill','technology','stack','tools'], answer: 'Key skills include React, JavaScript, TypeScript, Python, WordPress, Splunk, Wireshark, Nmap, Burp Suite, Databricks, PySpark, SQL and Linux/Windows fundamentals.' },
  { keys: ['contact','email','hire','opportunit','location','available'], answer: 'Anju is based in Auckland and open to opportunities across New Zealand. You can reach her at anjus1226@gmail.com or through the contact section.' },
];
