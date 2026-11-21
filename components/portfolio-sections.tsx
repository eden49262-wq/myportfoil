import {
  ArrowDownRight,
  ArrowUpRight,
  Braces,
  CheckCircle2,
  Code2,
  ExternalLink,
  Gauge,
  Layers3,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import {
  experience,
  githubProfileUrl,
  projects,
  skillGroups,
} from "./portfolio-data";

export function SectionHeading({
  label,
  title,
  description,
}: {
  label: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="section-heading">
      <span className="eyebrow">{label}</span>
      <h2 className="section-title">{title}</h2>
      {description && <p className="section-description">{description}</p>}
    </div>
  );
}

function ProjectPreview({ variant }: { variant: string }) {
  const labels: Record<string, string> = {
    learning: "COURSEFLOW / OVERVIEW",
    support: "RELAY DESK / INBOX",
    finance: "NORTHSTAR / MONTHLY",
  };

  return (
    <div className={`preview-window preview-${variant}`} aria-hidden="true">
      <div className="preview-topbar">
        <div className="preview-dots"><span /><span /><span /></div>
        <span>{labels[variant]}</span>
        <span>•••</span>
      </div>
      <div className="preview-content">
        <div className="preview-panel">
          <div className="preview-line short accent" />
          <div className="preview-line" />
          <div className="preview-line short" />
          <div className="preview-bars">
            <span /><span /><span /><span /><span /><span />
          </div>
        </div>
        <div className="preview-panel preview-side-panel">
          <div className="preview-line short" />
          <div className="preview-metric">{variant === "support" ? "24" : variant === "finance" ? "$2.4k" : "86%"}</div>
          <div className="preview-line accent" />
          <div className="preview-line short" />
        </div>
      </div>
      <span className="preview-watermark">{variant === "learning" ? "LEARN" : variant === "support" ? "INBOX" : "INSIGHT"}</span>
    </div>
  );
}

function ProjectCard({ project }: { project: (typeof projects)[number] }) {
  return (
    <article className="project-card surface-card">
      <ProjectPreview variant={project.preview} />
      <div className="project-body">
        <div className="project-meta">
          <span className="mono project-number">{project.number}</span>
          <span className="project-type">{project.type}</span>
        </div>
        <h3 className="project-title">{project.name}</h3>
        <p className="project-role">{project.role}</p>
        <div className="project-breakdown">
          <div>
            <span className="breakdown-label">PROBLEM</span>
            <p>{project.problem}</p>
          </div>
          <div>
            <span className="breakdown-label">SOLUTION</span>
            <p>{project.solution}</p>
          </div>
          <div className="impact-row">
            <span className="breakdown-label">IMPACT GOAL</span>
            <p>{project.impact}</p>
          </div>
        </div>
        <div className="project-tags">
          {project.technologies.map((technology) => (
            <span className="tag" key={technology}>{technology}</span>
          ))}
        </div>
        <div className="project-actions">
          <a className="project-action project-action-primary" href="#contact">
            Live Demo <ExternalLink size={13} />
          </a>
          <a
            className="project-action"
            href={githubProfileUrl}
            target="_blank"
            rel="noreferrer"
          >
            <Code2 size={14} /> GitHub Source <ArrowUpRight size={13} />
          </a>
        </div>
      </div>
    </article>
  );
}

export function ProjectSection() {
  return (
    <section className="section" id="projects">
      <SectionHeading
        label="Selected work"
        title="Engineering that solves real problems."
        description="A few full-stack product concepts that show how I think through user needs, system design, and the details that make software feel dependable."
      />
      <p className="concept-note">
        <Sparkles size={14} />
        Concept projects for portfolio illustration — impact figures are design targets, not measured results.
      </p>
      <div className="projects-grid">
        {projects.map((project) => <ProjectCard key={project.number} project={project} />)}
      </div>
    </section>
  );
}

export function AboutAndStack() {
  return (
    <section className="section" id="about">
      <SectionHeading
        label="The way I build"
        title="Thoughtful engineering, from the first sketch to production."
        description="I enjoy turning a complex problem into software that feels simple to use and straightforward to maintain."
      />
      <div className="about-stack-grid">
        <div className="approach-card surface-card">
          <div className="approach-item">
            <span className="approach-icon"><Gauge size={17} /></span>
            <div>
              <h3>Performance with purpose</h3>
              <p>Fast interfaces start with good architecture: lean rendering, efficient data access, and a focus on what users need first.</p>
            </div>
          </div>
          <div className="approach-item">
            <span className="approach-icon"><Braces size={17} /></span>
            <div>
              <h3>Clean, dependable APIs</h3>
              <p>Clear contracts, sensible validation, and thoughtful data models make features easier to evolve and safer to depend on.</p>
            </div>
          </div>
          <div className="approach-item">
            <span className="approach-icon"><CheckCircle2 size={17} /></span>
            <div>
              <h3>Accessible by default</h3>
              <p>Semantic markup, keyboard-friendly interactions, and responsive layouts belong in the first implementation—not the last.</p>
            </div>
          </div>
        </div>
        <div className="stack-column" id="stack">
          <div className="stack-heading">
            <span className="eyebrow">Tools of the trade</span>
            <span className="mono stack-count">01 — 04</span>
          </div>
          <div className="skill-groups">
            {skillGroups.map((group) => (
              <div className="skill-group" key={group.title}>
                <div className="skill-group-title">
                  <h3>{group.title}</h3>
                  <span>{group.description}</span>
                </div>
                <div className="skill-tags">
                  {group.skills.map((skill) => <span className="tag" key={skill}>{skill}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function ExperienceSection() {
  return (
    <section className="section" id="experience">
      <SectionHeading
        label="Experience & education"
        title="A foundation built by doing."
        description="A snapshot of the work, study, and hands-on practice shaping the way I engineer."
      />
      <div className="experience-layout">
        <div className="timeline">
          {experience.map((item) => (
            <article className="timeline-item" key={item.title}>
              <span className="timeline-date mono">{item.period}</span>
              <h3>{item.title}</h3>
              <p className="timeline-org">{item.organization}</p>
              <ul>
                {item.achievements.map((achievement) => <li key={achievement}>{achievement}</li>)}
              </ul>
            </article>
          ))}
        </div>
        <aside className="experience-aside surface-card">
          <span className="aside-icon"><Layers3 size={18} /></span>
          <span className="eyebrow">My focus</span>
          <h3>Make the complex feel clear.</h3>
          <p>Good engineering is invisible in the best way: the product feels natural, the system is understandable, and the team can keep moving.</p>
          <a href="#projects" className="text-link">Explore selected work <ArrowDownRight size={15} /></a>
        </aside>
      </div>
      <p className="editable-note">Experience and education entries are starter copy; update dates, roles, and achievements to match your verified history.</p>
    </section>
  );
}

export function StandardsSection() {
  const standards = [
    {
      icon: <Layers3 size={18} />,
      title: "Full-stack architecture",
      description: "Design cohesive systems across the interface, API, and data layer—with clear boundaries and room to grow.",
      number: "01",
    },
    {
      icon: <ShieldCheck size={18} />,
      title: "Responsive & accessible UI",
      description: "Deliver polished experiences that adapt across devices and work well for people using different input methods.",
      number: "02",
    },
    {
      icon: <Code2 size={18} />,
      title: "Clean, tested code",
      description: "Keep code readable and predictable with meaningful types, focused components, and a habit of validating changes.",
      number: "03",
    },
  ];

  return (
    <section className="section standards-section">
      <SectionHeading
        label="What I bring"
        title="A high bar for the details."
        description="The engineering habits I bring to every project, whatever the size of the problem."
      />
      <div className="standards-grid">
        {standards.map((standard) => (
          <article className="standard-card surface-card" key={standard.number}>
            <div className="standard-top">
              <span className="standard-icon">{standard.icon}</span>
              <span className="mono standard-number">{standard.number}</span>
            </div>
            <h3>{standard.title}</h3>
            <p>{standard.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
