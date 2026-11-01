import React, { useState, useEffect, useRef } from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowUpRight, ArrowDown, ArrowRight, Download, Github, Linkedin, Mail, MapPin, Menu, X, Send, Sparkles, Shield, Code2, BrainCircuit, Terminal, GraduationCap, ChevronDown, Bot, CheckCircle2, ExternalLink } from 'lucide-react';
import { profile, navigation, skills, experiences, projects, cases, qa } from './data';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

import {
  SiPython,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiMongodb,
  SiSplunk,
  SiWireshark,
  SiDatabricks,
  SiLinux,
  SiHtml5,
  SiWordpress,
  SiGit
} from "react-icons/si";

import { FaAws, FaWindows, FaCss3Alt } from "react-icons/fa";

import {
  Database,
  ShieldCheck,
  Network,
  Search
} from "lucide-react";


import './style.css';
const icons = { shield: Shield, code: Code2, brain: BrainCircuit, terminal: Terminal };
function LinkButton({href, children, className='', download=false}) { return <a className={className} href={href} {...(download ? {download:true} : href?.startsWith('http') ? {target:'_blank',rel:'noreferrer'} : {})}>{children}</a> }
function Header(){ const [open,setOpen]=useState(false); return <header className="header"><div className="container nav"><a className="brand" href="#home"><span className="brand-mark">A<span>.</span></span><span>ANJU<span className="brand-dim"> / SARADHA</span></span></a><nav className={open?'nav-links open':'nav-links'}>{navigation.map(item=><a key={item} href={'#'+item.toLowerCase().replace(' ','-')} onClick={()=>setOpen(false)}>{item}</a>)}</nav><a className="nav-contact" href="#contact">Let's Talk <ArrowUpRight size={15}/></a><button className="mobile-menu" aria-label="Toggle menu" onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button></div></header> }
function SectionHeading({eyebrow,title,desc}){return <div className="section-heading"><div className="eyebrow"><span className="eyebrow-line"/>{eyebrow}</div><h2>{title}</h2>{desc&&<p>{desc}</p>}</div>}
function AnimatedRoles(){
  const roles = ['Security Operations Center Analyst', 'AI Enthusiast', 'Software Developer', 'IT Support Specialist', 'Help Desk Analyst'];
  const [roleIndex,setRoleIndex] = useState(0);
  const [displayText,setDisplayText] = useState('');
  const [deleting,setDeleting] = useState(false);
  useEffect(()=>{
    const current = roles[roleIndex];
    const delay = deleting ? 42 : displayText === current ? 1800 : 75;
    const timer = setTimeout(()=>{
      if (!deleting) {
        if (displayText.length < current.length) setDisplayText(current.slice(0,displayText.length+1));
        else setDeleting(true);
      } else if (displayText.length > 0) {
        setDisplayText(current.slice(0,displayText.length-1));
      } else {
        setDeleting(false);
        setRoleIndex(i=>(i+1)%roles.length);
      }
    },delay);
    return ()=>clearTimeout(timer);
  },[roleIndex,displayText,deleting]);
  return <div className="hero-typing animated-role" aria-label={roles[roleIndex]}><span>{displayText}</span><span className="typing-cursor" aria-hidden="true">|</span></div>;
}
const featuredTech = [
  { name: 'Python', Icon: SiPython, color: '#ffd343' },
  { name: 'SQL', Icon: Database, color: '#9cc9ff' },
  { name: 'React', Icon: SiReact, color: '#61dafb' },
  { name: 'MongoDB', Icon: SiMongodb, color: '#47a248' },
  { name: 'AWS', Icon: FaAws, color: '#ff9900' },
  { name: 'Splunk', Icon: SiSplunk, color: '#ff65b4' },
  { name: 'Wireshark', Icon: SiWireshark, color: '#41a5e8' },
  { name: 'NIST / COBIT', Icon: ShieldCheck, color: '#b9cced' },
];

const technologyIcons = {
  Python: { Icon: SiPython, color: "#3776AB" },
  JavaScript: { Icon: SiJavascript, color: "#F7DF1E" },
  TypeScript: { Icon: SiTypescript, color: "#3178C6" },
  React: { Icon: SiReact, color: "#61DAFB" },
  MongoDB: { Icon: SiMongodb, color: "#47A248" },
  SQL: { Icon: Database, color: "#60A5FA" },
  AWS: { Icon: FaAws, color: "#FF9900" },
  Splunk: { Icon: SiSplunk, color: "#F472B6" },
  Wireshark: { Icon: SiWireshark, color: "#1679A7" },
  Databricks: { Icon: SiDatabricks, color: "#FF3621" },
  Linux: { Icon: SiLinux, color: "#FCC624" },
  Windows: { Icon: FaWindows, color: "#00A4EF" },
  HTML: { Icon: SiHtml5, color: "#E34F26" },
  CSS: { Icon: FaCss3Alt, color: "#1572B6" },
  WordPress: { Icon: SiWordpress, color: "#21759B" },
  Git: { Icon: SiGit, color: "#F05032" },
  Nmap: { Icon: Network, color: "#38BDF8" },
  "Burp Suite": { Icon: Search, color: "#FF6633" },
  "NIST Framework": { Icon: ShieldCheck, color: "#A78BFA" },
  COBIT: { Icon: ShieldCheck, color: "#A78BFA" },
  "MITRE ATT&CK": { Icon: ShieldCheck, color: "#EF4444" },
  "OWASP Top 10": { Icon: ShieldCheck, color: "#F97316" },
  "TCP/IP": { Icon: Network, color: "#22D3EE" },
  Python3: { Icon: SiPython, color: "#3776AB" }
};

function TechnologyTile({ name }) {
  const technology = technologyIcons[name] || {
    Icon: Code2,
    color: "#A78BFA"
  };

  const Icon = technology.Icon;

  return (
    <div className="technology-tile">
      <div className="technology-icon-box">
        <Icon
          size={25}
          color={technology.color}
        />
      </div>
      <span className="technology-name">{name}</span>
    </div>
  );
}

function HeroTechAndStats(){return <div className="hero-extras"><div className="hero-tech-row" aria-label="Featured technical skills">{featuredTech.map(({name,Icon,color})=><span className="hero-tech-pill" key={name}><Icon size={19} color={color} aria-hidden="true"/><span>{name}</span></span>)}</div><div className="hero-stat-grid"><div><strong>7+</strong><span>Years in development</span></div><div><strong>6</strong><span>Featured projects</span></div><div><strong>97–98%</strong><span>Vishing research accuracy</span></div><div><strong>NZ</strong><span>Based in Auckland</span></div></div></div>}
function Hero(){return <section className="hero hero-v2 container" id="home"><div className="hero-glow"/><div className="hero-copy"><div className="availability"><span className="live-dot"/>{profile.availability} <span className="availability-sep">·</span> Auckland, New Zealand</div><h1 className="hero-statement">Building secure, intelligent digital experiences with <span>Cybersecurity, AI & Python.</span></h1><AnimatedRoles/><p className="hero-intro">{profile.intro}</p><div className="hero-badges"><span>✓ Master's with Distinction</span><span>✓ 7+ years in development</span><span>✓ AI & security projects</span><span>✓ Open to NZ opportunities</span></div><div className="hero-actions"><a className="btn primary" href="#projects">Explore My Work <ArrowUpRight size={18}/></a><LinkButton className="btn secondary" href={profile.cv}>Download CV <Download size={17}/></LinkButton></div><div className="socials"><LinkButton href={profile.github}><FaGithub size={19}/> GitHub <ArrowUpRight size={13}/></LinkButton><LinkButton href={profile.linkedin}><FaLinkedin size={19}/> LinkedIn <ArrowUpRight size={13}/></LinkButton></div><HeroTechAndStats/></div></section>}
function Stats(){return <div className="stats"><div><strong>{profile.years}</strong><span>Years in development</span></div><div><strong>MSc</strong><span>With Distinction</span></div><div><strong>6</strong><span>Featured projects</span></div><div><strong>NZ</strong><span>Based in Auckland</span></div></div>}


function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <SectionHeading
          eyebrow="01 / ABOUT ME"
          title={<>About <em>me</em></>}
          desc="A developer's mindset. A security-first curiosity. A passion for practical AI."
        />

        <div className="about-grid">
          {/* LEFT SIDE - Photo and About Me text */}
          <div>
            <div className="about-profile-photo">
              <img
                src="/images/profile.jpg"
                alt="Anju Saradha"
                className="about-profile-image"
              />

              <div className="about-availability">
                <span className="about-green-dot"></span>
                Available immediately
              </div>
            </div>

            <p className="large-copy">
              I’m a software developer with a growing focus on{" "}
              <span>cybersecurity, AI and data engineering.</span>
            </p>

            <p>
              My background is in building web experiences with
              JavaScript, React, CSS and WordPress. More recently,
              I’ve been exploring how systems work beneath the
              interface — from network traffic and security alerts
              to machine learning and intelligent assistants.
            </p>

            <p>
              I completed my Master of Applied Technology (Computing)
              at Unitec with Distinction. My research explored
              detecting vishing attacks using zero-shot learning,
              and I continue to learn by building hands-on projects.
            </p>

            <div className="about-facts">
              <span>
                <MapPin size={16} />
                {profile.location}
              </span>

              <span>
                <GraduationCap size={16} />
                Unitec · Master’s with Distinction
              </span>
            </div>
          </div>

          {/* RIGHT SIDE - Current Focus panel */}
          <div className="about-panel">
            <span className="panel-kicker">
              CURRENT FOCUS
            </span>

            <div className="focus-item">
              <Shield />
              <div>
                <strong>Security Operations</strong>
                <small>
                  Threat detection · Incident analysis · SIEM
                </small>
              </div>
            </div>

            <div className="focus-item">
              <BrainCircuit />
              <div>
                <strong>Applied AI</strong>
                <small>
                  Local LLMs · NLP · Intelligent tools
                </small>
              </div>
            </div>

            <div className="focus-item">
              <Terminal />
              <div>
                <strong>Data & Automation</strong>
                <small>
                  PySpark · Python · Practical pipelines
                </small>
              </div>
            </div>

            <div className="panel-foot">
              Always learning. Always building.{" "}
              <span>↗</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


function Experience() {
  const career = [
    {
      role: "Cybersecurity — Hands-on Training & Projects",
      company: "Independent Security Labs & Professional Development",
      period: "Recent / Ongoing",
      location: "Auckland, New Zealand",
      summary: "Practical security learning through SOC simulations, network investigations and threat-detection projects.",
      highlights: ["Security monitoring", "Network analysis", "Threat detection"],
      points: [
        "Investigated security events and logs using Splunk and SOC analysis workflows.",
        "Analysed network traffic in Wireshark, including SMB and NTLM authentication activity.",
        "Built a Python and Scapy SYN scan detector with alerts and CSV logging.",
        "Practised web application security testing using Burp Suite and IDOR labs.",
        "Completed SOC-focused simulations and hands-on incident investigation exercises."
      ],
      tags: ["Splunk", "Wireshark", "Python", "Nmap", "Burp Suite", "MITRE ATT&CK", "SOC"]
    },
    {
      role: "Front End Developer",
      company: "Spriio Software Solutions LLP, Pune",
      period: "2018 – 2022",
      location: "Pune, India",
      summary: "Designed and developed responsive web pages and applications from client requirements and UI/UX designs.",
      highlights: ["Frontend development", "Responsive interfaces", "UI/UX implementation"],
      points: [
        "Planned and designed engaging, responsive web pages and applications according to client requirements.",
        "Translated UI/UX ideas into functional and scalable applications optimised for multiple devices.",
        "Collaborated with web designers and backend developers on coding, debugging and ongoing improvements.",
        "Developed and enhanced features in response to changing project requirements.",
        "Created reusable templates and code libraries with attention to maintainability."
      ],
      tags: ["JavaScript", "HTML", "CSS", "Frontend", "Responsive Design", "UI/UX"]
    },
    {
      role: "Software Quality Tester (Manual) & UI Developer",
      company: "Amrita Center for Cyber Security and Networks, Kollam",
      period: "2015 – 2018",
      location: "Kollam, India",
      summary: "Performed manual software quality assurance, UI development and data analysis activities.",
      highlights: ["Software testing", "Bug reporting", "Data analysis"],
      points: [
        "Conducted manual QA tests in different environments and verified fixes before deployment.",
        "Analysed test outcomes and provided feedback to design teams on usability and database impacts.",
        "Performed data cleaning, preprocessing, mining and validation.",
        "Explored data visualisation and decision-tree algorithms including ID3 and C4.5."
      ],
      tags: ["Manual Testing", "QA", "UI Development", "Data Analysis", "Data Mining"]
    }
  ];
  const [expanded, setExpanded] = useState(0);
  return (
    <section className="section section-alt" id="experience">
      <div className="container career-container">
        <SectionHeading eyebrow="03 / CAREER" title={<>Career <em>Journey</em></>}
          desc="Professional experience in software development and quality assurance, alongside hands-on cybersecurity training and projects." />
        <div className="career-list">
          {career.map((job, index) => {
            const isOpen = expanded === index;
            return (
              <article className={`career-card ${isOpen ? 'expanded' : ''}`} key={job.role}>
                <button type="button" className="career-header" aria-expanded={isOpen}
                  onClick={() => setExpanded(isOpen ? null : index)}>
                  <div className="career-heading"><h3>{job.role}</h3><span className="career-company">{job.company}</span></div>
                  <div className="career-meta"><span className="career-date">{job.period}</span>
                    <span className="career-location">{job.location}</span>
                    <ChevronDown size={17} className={`career-chevron ${isOpen ? 'open' : ''}`} />
                  </div>
                </button>
                {isOpen && <div className="career-body">
                  <p className="career-summary">{job.summary}</p>
                  <div className="career-highlights">{job.highlights.map(item => <span key={item}>{item}</span>)}</div>
                  <ul className="career-points">{job.points.map(point => <li key={point}>{point}</li>)}</ul>
                  <div className="career-tags">{job.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
                </div>}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
const vishingGallery = [
  { src: '/vishing/Zslcomp.png', title: 'Fraud accuracy comparison across models', note: 'Model performance across dataset sizes from 1,000 to 5,000 samples.' },
  { src: '/vishing/zsl5000c.png', title: 'Zero-shot learning confusion matrix', note: 'Evaluation results for the zero-shot learning model.' },
  { src: '/vishing/lstm5000c.png', title: 'LSTM confusion matrix', note: 'Confusion matrix from the LSTM baseline experiment.' },
  { src: '/vishing/dt5000roc.png', title: 'Decision Tree ROC curve', note: 'Decision Tree ROC curve (AUC 0.85 in the supplied figure).' },
  { src: '/vishing/nb5000roc.png', title: 'Naive Bayes ROC curve', note: 'Naive Bayes ROC curve (AUC 0.95 in the supplied figure).' },
  { src: '/vishing/feautreextraction.jpg', title: 'Feature extraction', note: 'Tokenisation and embedding feature vectors from a sample message.' },
  { src: '/vishing/attributemapping.jpg', title: 'Attribute mapping', note: 'Mapping embedded terms to social-engineering attributes.' },
  { src: '/vishing/cosine_similarity.jpg', title: 'Cosine similarity', note: 'Illustration of similarity between an input embedding and an attribute embedding.' },
];

function VishingProjectModal({ onClose }) {
  const [slide, setSlide] = useState(0);
  useEffect(() => {
    const handleKey = (event) => {
      if (event.key === 'Escape') onClose();
      if (event.key === 'ArrowRight') setSlide(i => (i + 1) % vishingGallery.length);
      if (event.key === 'ArrowLeft') setSlide(i => (i - 1 + vishingGallery.length) % vishingGallery.length);
    };
    document.addEventListener('keydown', handleKey);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [onClose]);
  const current = vishingGallery[slide];
  return <div className="vishing-backdrop" onMouseDown={e => { if (e.target === e.currentTarget) onClose(); }}>
    <section className="vishing-modal" role="dialog" aria-modal="true" aria-label="Vishing detection project details">
      <header className="vishing-modal-header"><div><span>02 / RESEARCH PROJECT</span><h3>Vishing Detection with Zero-Shot Learning</h3></div><button type="button" onClick={onClose} aria-label="Close project viewer"><X size={20}/></button></header>
      <div className="vishing-gallery">
        <div className="vishing-image-stage"><button type="button" className="vishing-gallery-arrow prev" aria-label="Previous image" onClick={() => setSlide(i => (i - 1 + vishingGallery.length) % vishingGallery.length)}>‹</button><img src={current.src} alt={current.title}/><button type="button" className="vishing-gallery-arrow next" aria-label="Next image" onClick={() => setSlide(i => (i + 1) % vishingGallery.length)}>›</button><span className="vishing-count">{slide + 1} / {vishingGallery.length}</span></div>
        <div className="vishing-thumbnails">{vishingGallery.map((item,i) => <button type="button" key={item.src} onClick={() => setSlide(i)} className={i === slide ? 'selected' : ''} aria-label={'Show '+item.title} aria-pressed={i === slide}><img src={item.src} alt=""/></button>)}</div>
        <div className="vishing-image-caption"><strong>{current.title}</strong><span>{current.note}</span></div>
      </div>
      <div className="vishing-modal-content">
        <p>Master’s research investigating how zero-shot learning can identify vishing and social-engineering signals in fraudulent call transcripts. The approach uses semantic embeddings and attribute mapping to recognise patterns such as urgency and requests for sensitive information.</p>
        <div className="vishing-tags"><span>Python</span><span>NLP</span><span>Zero-Shot Learning</span><span>Embeddings</span><span>Cybersecurity</span><span>Model Evaluation</span></div>
        <h4>// RESEARCH APPROACH</h4>
        <ul><li>Prepared and analysed fraud-call transcript data.</li><li>Extracted semantic representations using tokenisation and embeddings.</li><li>Mapped input text to social-engineering attributes using similarity-based techniques.</li><li>Compared the zero-shot approach with machine-learning and deep-learning baselines.</li><li>Evaluated results using accuracy comparisons, confusion matrices and ROC curves.</li></ul>
        <h4>// RESULTS &amp; INTERPRETATION</h4>
        <p>The supplied comparison figure shows the zero-shot learning model at approximately 96–97% fraud-class accuracy across the tested sample sizes. The uploaded ROC figures report AUC values of 0.85 for Decision Tree and 0.95 for Naive Bayes. Results are from the project evaluation dataset and should not be interpreted as guaranteed real-world detection performance.</p>
      </div>
    </section>
  </div>;
}

const databricksGallery = [
  {src:'/databricks/01-overview.png',title:'Project overview and customer data loading',note:'Databricks notebook introducing the customer analytics workflow and loading customer JSON.'},
  {src:'/databricks/02-schema-products.png',title:'Schema inspection and product data',note:'Inspecting customer schema and loading the product CSV dataset.'},
  {src:'/databricks/03-null-checks.png',title:'Checking missing values',note:'PySpark checks for null values across customer fields.'},
  {src:'/databricks/04-city-cleaning.png',title:'Standardising city names',note:'Using initcap to normalise inconsistent city values such as Auckland and auckland.'},
  {src:'/databricks/05-quantity-cleaning.png',title:'Handling missing sales quantities',note:'Identifying and removing sales records with missing quantity values.'},
  {src:'/databricks/06-customer-sales-join.png',title:'Joining sales and customers',note:'Joining cleaned sales records to customer data on customer_id for further analysis.'}
];

function DatabricksProjectModal({onClose}) {
  const [slide,setSlide] = useState(0);
  useEffect(()=>{
    const handleKey = event => {
      if(event.key === 'Escape') onClose();
      if(event.key === 'ArrowRight') setSlide(i => (i+1)%databricksGallery.length);
      if(event.key === 'ArrowLeft') setSlide(i => (i-1+databricksGallery.length)%databricksGallery.length);
    };
    document.addEventListener('keydown',handleKey);
    const oldOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return ()=>{document.removeEventListener('keydown',handleKey);document.body.style.overflow=oldOverflow;};
  },[onClose]);
  const current = databricksGallery[slide];
  return <div className="vishing-backdrop" onMouseDown={e=>{if(e.target===e.currentTarget)onClose();}}>
    <section className="vishing-modal" role="dialog" aria-modal="true" aria-label="Customer and Loyalty Data Insights project details">
      <header className="vishing-modal-header"><div><span>03 / DATA ENGINEERING PROJECT</span><h3>Customer &amp; Loyalty Data Insights</h3></div><button type="button" onClick={onClose} aria-label="Close project viewer"><X size={20}/></button></header>
      <div className="vishing-gallery">
        <div className="vishing-image-stage"><button type="button" className="vishing-gallery-arrow prev" aria-label="Previous screenshot" onClick={()=>setSlide(i=>(i-1+databricksGallery.length)%databricksGallery.length)}>‹</button><img src={current.src} alt={current.title}/><button type="button" className="vishing-gallery-arrow next" aria-label="Next screenshot" onClick={()=>setSlide(i=>(i+1)%databricksGallery.length)}>›</button><span className="vishing-count">{slide+1} / {databricksGallery.length}</span></div>
        <div className="vishing-thumbnails">{databricksGallery.map((item,i)=><button type="button" key={item.src} onClick={()=>setSlide(i)} className={i===slide?'selected':''} aria-label={'Show '+item.title} aria-pressed={i===slide}><img src={item.src} alt=""/></button>)}</div>
        <div className="vishing-image-caption"><strong>{current.title}</strong><span>{current.note}</span></div>
      </div>
      <div className="vishing-modal-content">
        <p>An end-to-end customer and loyalty analytics project built in Databricks. The workflow brings together customer, product and sales datasets, cleans inconsistent or missing values, and prepares joined records for customer and transaction analysis.</p>
        <div className="vishing-tags"><span>Databricks</span><span>PySpark</span><span>Spark SQL</span><span>Delta Lake</span><span>Data Cleaning</span><span>Customer Analytics</span><span>MLlib / K-Means</span></div>
        <h4>// WHAT I BUILT</h4>
        <ul><li>Loaded customer JSON and product and sales CSV data into Databricks.</li><li>Inspected DataFrame schemas and checked datasets for missing values.</li><li>Standardised city names using PySpark transformations.</li><li>Handled missing sales quantities during data preparation.</li><li>Joined cleaned sales and customer data using customer IDs.</li><li>Explored customer and sales insights, with a broader project scope including segmentation using K-Means.</li></ul>
        <h4>// TECHNICAL CHALLENGE</h4>
        <p>Making differently structured source datasets consistent enough for reliable joins and downstream analytics, while identifying missing or inconsistent values before analysis.</p>
        <h4>// PROJECT EVIDENCE</h4>
        <p>The gallery documents notebook steps and sample outputs. It does not show final KPI values or clustering evaluation results, so those are not claimed here.</p>
      </div>
    </section>
  </div>;
}

function Projects(){
  const [showVishing, setShowVishing] = useState(false);
  const [showDatabricks, setShowDatabricks] = useState(false);
  return <section className="section" id="projects"><div className="container">
    <SectionHeading eyebrow="04 / SELECTED WORK" title={<>Featured <em>projects</em></>} desc="From security research to local AI — practical projects built to learn, test and solve."/>
    <div className="project-grid">{projects.map(p => <article className="project-card" key={p.num}>
      <div className="project-art"><div className="project-no">{p.num} / 06</div><span className="art-symbol">{p.num==='01'?'✳':p.num==='02'?'◈':p.num==='03'?'▦':p.num==='04'?'⌁':p.num==='05'?'◎':'◇'}</span><span className="art-caption">{p.highlight}</span></div>
      <div className="project-content"><div className="project-type">{p.type}</div><h3>{p.title}</h3><p>{p.summary}</p><div className="tags">{p.tags.map(t=><span key={t}>{t}</span>)}</div>
      {p.num === '03' ? <button type="button" className="project-link vishing-open-link" onClick={() => setShowDatabricks(true)}>View Project <ArrowUpRight size={16}/></button> : p.num === '02' ? <button type="button" className="project-link vishing-open-link" onClick={() => setShowVishing(true)}>View Project <ArrowUpRight size={16}/></button> : p.link ? <LinkButton className="project-link" href={p.link}>View project <ArrowUpRight size={16}/></LinkButton> : <span className="project-unavailable">Project link coming soon</span>}
      </div></article>)}</div>
  </div>{showVishing && <VishingProjectModal onClose={() => setShowVishing(false)}/>}
  {showDatabricks && <DatabricksProjectModal onClose={() => setShowDatabricks(false)}/>}</section>;
}
function CaseStudies(){return <section className="section section-alt" id="case-studies"><div className="container"><SectionHeading eyebrow="05 / DEEP DIVES" title={<>Engineering <em>case studies</em></>} desc="How I approach problems, experiments and measurable outcomes."/><div className="case-list">{cases.map((c,i)=><details className="case" key={c.title} open={i===0}><summary><span className="case-number">0{i+1}</span><strong>{c.title}</strong><ChevronDown size={20}/></summary><div className="case-body"><div><span className="panel-kicker">THE PROBLEM</span><p>{c.problem}</p></div><div><span className="panel-kicker">MY APPROACH</span><ol>{c.approach.map(s=><li key={s}>{s}</li>)}</ol></div><div><span className="panel-kicker">OUTCOME</span><p>{c.outcome}</p></div></div></details>)}</div></div></section>}

function Stack() {
  const [active, setActive] = useState("All");

  const categories = [
    "All",
    ...skills.map((skill) => skill.category)
  ];

  const filteredSkills = skills.filter(
    (skill) =>
      active === "All" || skill.category === active
  );

  return (
    <section className="section" id="stack">
      <div className="container">
        <SectionHeading
          eyebrow="02 / TECHNICAL SKILLS"
          title="Technology I Work With"
          desc="My technical toolkit across software, cybersecurity, AI, data and IT support."
        />

        <div className="filters">
          {categories.map((category) => (
            <button
              key={category}
              className={active === category ? "active" : ""}
              onClick={() => setActive(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="technology-categories">
          {filteredSkills.map((group) => (
            <div
              className="technology-category-card"
              key={group.category}
            >
              <h3>{group.category.toUpperCase()}</h3>

              <div className="technology-icon-grid">
                {group.items.map((name) => (
                  <TechnologyTile
                    key={name}
                    name={name}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AI(){return <section className="section section-alt" id="ai"><div className="container"><SectionHeading eyebrow="06 / PERSPECTIVE" title={<>Exploring the Future with <em>AI</em></>} /><div className="ai-grid"><div><h3>AI is most useful when paired with human judgement.</h3><p>I use AI to explore ideas, speed up repetitive tasks and understand unfamiliar concepts — but I still want to validate the results and understand the systems I build.</p><p>Projects like AURA OS and my vishing research are ways for me to connect intelligent technology with practical user and security needs.</p><a className="inline-link" href="#projects">Explore my AI projects <ArrowRight size={16}/></a></div><div className="ai-diagram"><div>DATA + CONTEXT</div><ArrowDown size={20}/><div>AI / AUTOMATION</div><ArrowDown size={20}/><div className="accent-box">HUMAN VALIDATION</div><ArrowDown size={20}/><div>USEFUL OUTCOMES</div></div></div></div></section>}
function Contact(){const [sent,setSent]=useState(false);const [form,setForm]=useState({name:'',email:'',message:''});const submit=(e)=>{e.preventDefault();const subject=encodeURIComponent('Portfolio enquiry from '+form.name);const body=encodeURIComponent('From: '+form.name+' ('+form.email+')\n\n'+form.message);window.location.href=`mailto:${profile.email}?subject=${subject}&body=${body}`;setSent(true)};return <section className="section contact-section" id="contact"><div className="container"><SectionHeading eyebrow="07 / CONTACT" title={<>Let's build something <em>meaningful.</em></>} desc="Interested in collaborating or discussing an opportunity? I'd love to hear from you."/><div className="contact-grid"><div className="contact-details"><a href={'mailto:'+profile.email}><Mail size={19}/><span><small>EMAIL</small>{profile.email}</span><ArrowUpRight size={17}/></a><div><MapPin size={19}/><span><small>LOCATION</small>{profile.location}</span></div><div><CheckCircle2 size={19}/><span><small>AVAILABILITY</small>{profile.availability}</span></div><div className="contact-social"><LinkButton href={profile.github}><Github size={19}/> GitHub <ArrowUpRight size={14}/></LinkButton>{profile.linkedin&&<LinkButton href={profile.linkedin}><Linkedin size={19}/> LinkedIn <ArrowUpRight size={14}/></LinkButton>}</div></div><form className="contact-form" onSubmit={submit}><h3>Send an enquiry</h3><p>Opens your email app with a pre-filled message.</p><label>Name<input required placeholder="Your name" value={form.name} onChange={e=>setForm({...form,name:e.target.value})}/></label><label>Email<input type="email" required placeholder="you@company.com" value={form.email} onChange={e=>setForm({...form,email:e.target.value})}/></label><label>Message<textarea required rows="5" placeholder="What would you like to talk about?" value={form.message} onChange={e=>setForm({...form,message:e.target.value})}/></label><button className="btn primary" type="submit">Open email draft <Send size={16}/></button>{sent&&<p className="note">Your email app should open. Please send the message there; this form does not send automatically.</p>}</form></div></div></section>}
function getAnswer(q){const lower=q.toLowerCase();const match=qa.find(x=>x.keys.some(k=>lower.includes(k)));return match?.answer || 'I can help with Anju’s projects, experience, education, cybersecurity skills, AI work and contact information. Try asking “What is AURA OS?” or “What cybersecurity experience does Anju have?”';}
function Chatbot(){const [open,setOpen]=useState(false),[draft,setDraft]=useState(''),[messages,setMessages]=useState([{who:'bot',text:'Hi! 👋 I’m Anju’s portfolio assistant. Ask me about her experience, projects, skills or availability.'}]);const bottom=useRef(null);useEffect(()=>{bottom.current?.scrollIntoView({behavior:'smooth',block:'nearest'})},[messages,open]);const send=(e)=>{e.preventDefault();if(!draft.trim())return;const q=draft.trim();setMessages(m=>[...m,{who:'user',text:q},{who:'bot',text:getAnswer(q)}]);setDraft('')};return <div className="chat-wrap">{open&&<div className="chat-panel" role="dialog" aria-label="Portfolio assistant"><div className="chat-head"><div className="chat-icon"><Bot size={20}/></div><div><strong>anju.bot</strong><small><span className="live-dot"/> Portfolio assistant · online</small></div><button aria-label="Close chat" onClick={()=>setOpen(false)}><X size={19}/></button></div><div className="chat-messages">{messages.map((m,i)=><div key={i} className={'chat-bubble '+m.who}>{m.text}</div>)}<div ref={bottom}/></div><form className="chat-input" onSubmit={send}><input aria-label="Ask about Anju" placeholder="Ask about Anju..." value={draft} onChange={e=>setDraft(e.target.value)}/><button aria-label="Send message" type="submit"><Send size={18}/></button></form><div className="chat-disclaimer">Answers use a curated portfolio FAQ, not a live AI model.</div></div>}<button className="chat-toggle" onClick={()=>setOpen(!open)} aria-label={open?'Close portfolio assistant':'Open portfolio assistant'}>{open?<X size={23}/>:<><Sparkles size={21}/><span>Ask Anju AI</span></>}</button></div>}

function Footer() {
  return (
    <footer className="portfolio-footer">
      <div className="footer-content">
        <h2 className="footer-name">ANJU SARADHA</h2>

        <p className="footer-role">
          Software Developer | Cybersecurity & AI Enthusiast
        </p>

        <p className="footer-stack">
          Python · React · Splunk · AI · AWS
        </p>

        <div className="footer-links">
          <a
            href="https://github.com/AnjuSaradha"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/anju-saradha-947319280/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>

          <a href="mailto:anjus1226@gmail.com">
            Email
          </a>
        </div>

        <p className="footer-copyright">
          © {new Date().getFullYear()} Anju Saradha.
        </p>

        <p className="footer-message">
          Built with React — combining creativity,
          cybersecurity and intelligent technology.
        </p>
      </div>
    </footer>
  );
}

function App(){return <><Header/><main><Hero/>
<About/>
<Stack/>
<Experience/>
<Projects/>
<CaseStudies/>
<AI/>
<Contact/></main><Footer/><Chatbot/></>};

createRoot(document.getElementById('root')).render(<React.StrictMode><App/></React.StrictMode>);
