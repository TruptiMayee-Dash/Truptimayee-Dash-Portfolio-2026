import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  Database,
  Download,
  ExternalLink,
  Github,
  GraduationCap,
  Layers3,
  Linkedin,
  Mail,
  Menu,
  MonitorSmartphone,
  MousePointer2,
  Send,
  Terminal,
  X,
  Zap,
} from "lucide-react";
import {
  profile,
  experiences,
  education,
  skillGroups,
  projects,
  journey,
} from "./data/portfolio";

const navItems = [
  ["About", "about"],
  ["Experience", "experience"],
  ["Skills", "skills"],
  ["Projects", "projects"],
  ["Journey", "journey"],
  ["Contact", "contact"],
];

const filters = ["All", "Java", "Spring Boot", "Angular", "PHP", "Frontend"];

function scrollToId(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

function SectionHeading({ eyebrow, title, text }) {
  return (
    <div className="section-heading">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}

function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [filter, setFilter] = useState("All");

  const filteredProjects = useMemo(() => {
    if (filter === "All") return projects;
    return projects.filter(
      (project) =>
        project.category === filter ||
        project.tags.some((tag) => tag.toLowerCase().includes(filter.toLowerCase()))
    );
  }, [filter]);

  const handleNav = (id) => {
    scrollToId(id);
    setMobileOpen(false);
  };

  return (
    <div className="app">
      <div className="noise" />
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <header className="navbar">
        <button className="brand" onClick={() => handleNav("home")} aria-label="Go home">
          <span className="brand-mark">TD</span>
          <span>Trupti<span className="muted-dot">.</span></span>
        </button>

        <nav className={`nav-links ${mobileOpen ? "open" : ""}`}>
          {navItems.map(([label, id]) => (
            <button key={id} onClick={() => handleNav(id)}>{label}</button>
          ))}
          <a className="nav-cta" href={`mailto:${profile.email}`}>Let's talk <ArrowUpRight size={15} /></a>
        </nav>

        <button className="menu-button" onClick={() => setMobileOpen((v) => !v)} aria-label="Toggle menu">
          {mobileOpen ? <X /> : <Menu />}
        </button>
      </header>

      <main>
        <section id="home" className="hero section">
          <div className="hero-copy">
            <motion.div
              className="availability"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="pulse" /> Open to software engineering opportunities
            </motion.div>

            <motion.p className="hero-kicker" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.15 }}>
              SOFTWARE ENGINEER · MCA · BHUBANESWAR
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              Building digital products with <span>code, clarity &amp; curiosity.</span>
            </motion.h1>

            <motion.p className="hero-description" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
              {profile.summary}
            </motion.p>

            <motion.div className="hero-actions" initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
              <button className="button primary" onClick={() => scrollToId("projects")}>
                Explore projects <ArrowUpRight size={17} />
              </button>
              <a className="button secondary" href={profile.resume} download>
                Download resume <Download size={17} />
              </a>
            </motion.div>

            <div className="hero-socials">
              <a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={18} /> LinkedIn</a>
              <a href={profile.github} target="_blank" rel="noreferrer"><Github size={18} /> GitHub</a>
              <a href={`mailto:${profile.email}`}><Mail size={18} /> Email</a>
            </div>
          </div>

          <div className="hero-visual" aria-label="Technology overview">
            <div className="orbit orbit-a" />
            <div className="orbit orbit-b" />
            <div className="code-card">
              <div className="code-top">
                <span /><span /><span />
                <small>trupti.java</small>
              </div>
              <pre>{`public class Engineer {

  String focus = "Java";
  String frontend = "Angular";
  String database = "SQL";

  void build() {
    learn();
    solve();
    ship();
  }
}`}</pre>
              <div className="code-status"><span /> available for new opportunities</div>
            </div>
            <div className="float-chip chip-java"><Terminal size={15} /> Java</div>
            <div className="float-chip chip-angular"><Code2 size={15} /> Angular</div>
            <div className="float-chip chip-sql"><Database size={15} /> SQL</div>
            <div className="hero-grid" />
          </div>
        </section>

        <section id="about" className="section">
          <SectionHeading eyebrow="01 / ABOUT" title="A developer who likes understanding the whole picture." text="From requirements and UI details to debugging and deployment, I enjoy turning practical problems into clean, usable software." />
          <div className="about-grid">
            <div className="about-panel glass">
              <div className="about-icon"><Code2 /></div>
              <h3>Software Engineer</h3>
              <p>{profile.summary}</p>
              <p>I am particularly interested in Java, Spring Boot, Angular, SQL and modern full-stack development. I also enjoy frontend interaction, responsive design and improving user experience.</p>
              <div className="mini-stats">
                <div><strong>1+</strong><span>Year professional experience</span></div>
                <div><strong>8.38</strong><span>MCA CGPA</span></div>
                <div><strong>10+</strong><span>Technologies in active toolkit</span></div>
              </div>
            </div>

            <div className="education-list">
              <div className="small-label">EDUCATION</div>
              {education.map((item) => (
                <div className="education-card" key={item.year}>
                  <div className="year">{item.year}</div>
                  <GraduationCap size={21} />
                  <div>
                    <h3>{item.degree}</h3>
                    <p>{item.institute}</p>
                    <span>{item.score}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="section">
          <SectionHeading eyebrow="02 / EXPERIENCE" title="Real projects. Real constraints. Practical engineering." />
          <div className="experience-list">
            {experiences.map((exp, index) => (
              <motion.article
                className="experience-item"
                key={exp.company}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.08 }}
              >
                <div className="experience-period">{exp.period}</div>
                <div className="experience-line"><span /></div>
                <div className="experience-content">
                  <div className="role-row">
                    <div>
                      <h3>{exp.role}</h3>
                      <p className="company">{exp.company}</p>
                    </div>
                    <BriefcaseBusiness size={20} />
                  </div>
                  <p>{exp.description}</p>
                  <ul>
                    {exp.points.map((point) => <li key={point}>{point}</li>)}
                  </ul>
                  <div className="tag-row">{exp.stack.map((tag) => <span key={tag}>{tag}</span>)}</div>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="skills" className="section">
          <SectionHeading eyebrow="03 / SKILLS" title="A practical stack with Java at the core." text="The portfolio intentionally distinguishes hands-on experience from technologies I am currently strengthening." />
          <div className="skills-grid">
            {skillGroups.map((group, index) => (
              <motion.div
                className="skill-card glass"
                key={group.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.04 }}
              >
                <div className="skill-number">0{index + 1}</div>
                <h3>{group.title}</h3>
                <div className="skill-tags">
                  {group.skills.map((skill) => <span key={skill}>{skill}</span>)}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="projects" className="section">
          <SectionHeading eyebrow="04 / PROJECTS" title="Selected work & learning projects." text="A mix of professional website work and focused Java/Spring Boot projects." />
          <div className="filter-bar">
            {filters.map((item) => (
              <button key={item} className={filter === item ? "active" : ""} onClick={() => setFilter(item)}>
                {item}
              </button>
            ))}
          </div>
          <motion.div layout className="projects-grid">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.article
                  layout
                  className="project-card"
                  key={project.title}
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.25 }}
                >
                  <div className="project-visual">
                    <span>{project.category.toUpperCase()}</span>
                    <div className="visual-code"><Code2 size={42} /></div>
                    <div className="project-status">{project.status}</div>
                  </div>
                  <div className="project-body">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="tag-row">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>
        </section>

        <section id="journey" className="section">
          <SectionHeading eyebrow="05 / JOURNEY" title="Growing deliberately, one layer at a time." text="My direction is toward strong Java engineering and full-stack product development, while keeping my frontend foundation sharp." />
          <div className="journey-track">
            {journey.map((item, index) => (
              <motion.div
                className="journey-card"
                key={item.step}
                initial={{ opacity: 0, x: index % 2 ? 20 : -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <span>{item.step}</span>
                <div className="journey-icon">{[<Terminal />, <MonitorSmartphone />, <Layers3 />, <Database />, <Zap />][index]}</div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </motion.div>
            ))}
          </div>

          <div className="hire-banner glass">
            <div>
              <span className="eyebrow">WHY WORK WITH ME</span>
              <h3>Strong fundamentals. Real-world exposure. A learner's mindset.</h3>
            </div>
            <div className="hire-points">
              <span><MousePointer2 /> Frontend & UI problem solving</span>
              <span><Terminal /> Java & OOP foundation</span>
              <span><Database /> SQL & database fundamentals</span>
              <span><Zap /> Adaptable and quick to learn</span>
            </div>
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div className="contact-box">
            <div>
              <span className="eyebrow">06 / CONTACT</span>
              <h2>Let's build something useful.</h2>
              <p>I'm open to software engineering opportunities where I can contribute, learn and grow with a strong technical team.</p>
            </div>
            <div className="contact-actions">
              <a className="button primary" href={`mailto:${profile.email}`}><Mail size={17} /> Email me</a>
              <a className="button secondary" href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={17} /> LinkedIn</a>
            </div>
            <div className="contact-details">
              <span>{profile.location}</span>
              <span>{profile.email}</span>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <span>Designed & built with React.</span>
        <a href="#home">Back to top ↑</a>
      </footer>
    </div>
  );
}

export default App;