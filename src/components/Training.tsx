import './Training.css'
import { FaGraduationCap } from "react-icons/fa6"
import { HiOutlineAcademicCap } from "react-icons/hi2"
import { useLang } from '../i18n/LanguageContext'

const EDUCATION_IDS = ['edu-1', 'edu-2', 'edu-3'] as const;

const COURSES = [
    { id: "course-1", platform: "Informatorio Chaco, Argentina" },
    { id: "course-2", platform: "Globant Chaco, Argentina" },
    { id: "course-3", platform: "Polo IT Corrientes, Argentina" },
    { id: "course-4", platform: "Informatorio, Chaco, Argentina" }
] as const;

export const Training = () => {
    const { t } = useLang();

    return (
        <section id="training" className="training-section" aria-labelledby="training-title">
            <div className="section-title">
                <h2 id="training-title">{t.training.title}</h2>
                <span>{t.training.subtitle}</span>
            </div>
            <div className="education-list">
                {EDUCATION_IDS.map((eduId) => {
                    const edu = t.training.education[eduId];
                    return (
                        <article className="education-card" key={eduId}>
                            <div className="education-card-icon" aria-hidden="true">
                                <FaGraduationCap fontSize={22} />
                            </div>
                            <div className="education-card-body">
                                <h3>{edu.title}</h3>
                                <span>{edu.institution}</span>
                            </div>
                        </article>
                    );
                })}
            </div>
            <div className="courses-block">
                <h3 className="courses-heading">
                    <HiOutlineAcademicCap fontSize={24} />
                    {t.training.coursesHeading}
                </h3>
                <div className="courses-grid">
                    {COURSES.map((course) => (
                        <div className="course-tag" key={course.id}>
                            <span className="course-name">
                                {t.training.courses[course.id].name}
                            </span>
                            {course.platform && (
                                <span className="course-platform">{course.platform}</span>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}