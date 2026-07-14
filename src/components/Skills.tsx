import { SKILLS_DATA } from '../data/icons'
import './Skills.css'
import { useLang } from '../i18n/LanguageContext';

export const Skills = () => {
    const { t } = useLang();

    return (
        <section id="skills" className="skills-section" aria-labelledby="skills-title">
            <div className="section-title">
                <h2 id="skills-title">{t.skill.title}</h2>
                <span>{t.skill.subtitle}</span>
            </div>

            <ul className="skills-grid" role="list">
                {SKILLS_DATA.map(({ id, icon, title }) => (
                    /* Dynamic class using text templates */
                    <li className={`skill-card skill-card-${id}`} key={id}>
                        <div className="skill-icon-wrapper">
                            <img
                                src={icon}
                                alt={`Logo de ${title}`}
                                loading="lazy"
                                decoding="async"
                                width={60}
                                height={60}
                            />
                        </div>
                        <span className="skill-name">{title}</span>
                    </li>
                ))}
            </ul>
        </section>
    )
}
