import './TileCard.css';

/* ---------- Skill Tile ---------- */
export function SkillTile({ skill }) {
  return (
    <div className="tile tile--skill">
      <div>
        <div className="tile__skill-icon">{skill.icon}</div>
        <div className="tile__skill-name">{skill.name}</div>
      </div>
      {skill.level !== undefined && (
        <div>
          <div className="tile__skill-bar-track">
            <div
              className="tile__skill-bar-fill"
              style={{ width: `${skill.level}%` }}
            />
          </div>
          <div className="tile__skill-level">{skill.level}%</div>
        </div>
      )}
    </div>
  );
}

/* ---------- Tool Tile ---------- */
export function ToolTile({ tool }) {
  return (
    <div className="tile tile--tool">
      <div className="tile__tool-icon">{tool.icon}</div>
      <div className="tile__tool-name">{tool.name}</div>
    </div>
  );
}

/* ---------- Project Tile ---------- */
const PROJECT_ICONS = {
  'AI / ML': '🤖',
  'Game Dev': '🎮',
  'Web App': '🌐',
  'Dev Tools': '🛠️',
};

export function ProjectTile({ project }) {
  return (
    <div className="tile tile--project">
      <div className="tile__project-banner">
        <div
          className="tile__project-banner-bg"
          style={{
            background: `linear-gradient(135deg, ${project.color}44 0%, ${project.color}11 100%)`,
          }}
        />
        <span className="tile__project-category">{project.category}</span>
        <span className="tile__project-icon">
          {PROJECT_ICONS[project.category] || '📦'}
        </span>
      </div>
      <div className="tile__project-body">
        <h3 className="tile__project-title">{project.title}</h3>
        <p className="tile__project-desc">{project.description}</p>
        <div className="tile__project-tags">
          {project.tech.map((t) => (
            <span className="tile__project-tag" key={t}>{t}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ---------- Experience Tile ---------- */
export function ExperienceTile({ exp }) {
  return (
    <div className="tile tile--experience">
      <div className="tile__exp-header">
        <div>
          <div className="tile__exp-role">{exp.role}</div>
          <div className="tile__exp-company">{exp.company}</div>
        </div>
        <span className="tile__exp-type">{exp.type}</span>
      </div>
      <div className="tile__exp-period">📅 {exp.period}</div>
      <ul className="tile__exp-achievements">
        {exp.achievements.map((a, i) => (
          <li className="tile__exp-achievement" key={i}>{a}</li>
        ))}
      </ul>
      {exp.tags && (
        <div className="tile__exp-tags">
          {exp.tags.map((t) => (
            <span className="tile__exp-tag" key={t}>{t}</span>
          ))}
        </div>
      )}
    </div>
  );
}

/* ---------- Education Tile ---------- */
export function EducationTile({ edu }) {
  return (
    <div className="tile tile--education">
      <div className="tile__edu-icon">{edu.icon}</div>
      <div className="tile__edu-degree">{edu.degree}</div>
      <div className="tile__edu-institution">{edu.institution}</div>
      <div className="tile__edu-period">{edu.period}</div>
    </div>
  );
}

/* ---------- Hobby Tile ---------- */
const HOBBY_ICONS = {
  'Board Gaming': '🎲',
  'Story Writing': '✍️',
  'Watching Movies': '🎬',
  '8 Ball Pool': '🎱',
};

export function HobbyTile({ hobby }) {
  return (
    <div className="tile tile--hobby">
      <div className="tile__hobby-name">
        {HOBBY_ICONS[hobby] || '⭐'} {hobby}
      </div>
    </div>
  );
}
