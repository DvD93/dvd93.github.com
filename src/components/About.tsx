import ProfileImage from "../assets/about-perfil.jpg"
import { useLang } from "../i18n/LanguageContext"
import './About.css'
import { Typewriter } from "./Typewriter"

export const About = () => {
    const { t } = useLang();

    return (
        <section id="about" className="about-section" aria-labelledby="about-title">
            <div className="section-title">
                <h2 id="about-title">{t.about.title}</h2>
                <span>{t.about.subtitle}</span>
            </div>

            <div className="about-layout">
                {/* Image section */}
                <figure className="about-img-wrapper">
                    <img
                        src={ProfileImage}
                        alt="David Emanuel González Escobar"
                        width={320}
                        height={380}
                        loading="lazy"
                    />
                </figure>

                {/* Content section */}
                <div className="about-body">

                    <Typewriter variant="light" />

                    <div className="about-paragraphs">
                        {t.about.descriptiveParagraphs.map((text, index) => (
                            <p key={index} className="about-paragraph">
                                {text}
                            </p>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}