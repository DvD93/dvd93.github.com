import './Experience.css'
import { EXPERIENCES } from '../data/experiences'
import { FaBriefcase } from "react-icons/fa6"
import { useLang } from "../i18n/LanguageContext"

export const Experience = () => {
    const { t } = useLang();

    return (
        <section id="experience" className="experience-section" aria-labelledby="experience-title">
            <div className="section-title">
                <h2 id="experience-title">{t.experience.title}</h2>
                <span>{t.experience.subtitle}</span>
            </div>
            <div className="timeline">
                <div className="timeline-line" aria-hidden="true" />
                {EXPERIENCES.map((experience) => {
                    const expText = t.experience.items[experience.idExp];
                    return (
                        <article className="timeline-item" key={experience.idExp}>
                            <div className="timeline-icon" aria-hidden="true">
                                <FaBriefcase style={{ fontSize: '16px' }} />
                            </div>
                            <div className="timeline-card">
                                <h3 className="timeline-role">{expText.role}</h3>
                                <div className="timeline-info">
                                    <span className="timeline-company">{experience.company}</span>
                                    <span className="timeline-separator" aria-hidden="true">•</span>
                                    <time dateTime={experience.startDate}>
                                        {experience.startDate} — {experience.endDate}
                                    </time>
                                </div>
                                <ul className="timeline-tasks">
                                    {experience.taskIds.map((taskId) => (
                                        <li key={taskId}>{expText.tasks[taskId]}</li>
                                    ))}
                                </ul>
                            </div>
                        </article>
                    );
                })}
            </div>
        </section>
    )
}