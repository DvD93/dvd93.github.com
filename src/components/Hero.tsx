import Perfil1 from "../assets/perfil-1.jpg"
import { useLang } from "../i18n/LanguageContext"
import { EmailContact } from "./EmailContact"
import './Hero.css'
import { LanguageSwitcher } from "./LanguageSwitcher"
import { Typewriter } from "./Typewriter"

export const Hero = () => {
    const { t } = useLang();

    return (
        <section id="hero" className="hero-container" aria-labelledby="hero-title">
            <header className="hero-section">

                <figure className="profile-img">
                    <img
                        src={Perfil1}
                        alt="David Emanuel González Escobar - Test Automation Engineer"
                        width={200}
                        height={200}
                    />
                </figure>

                <div className="hero-content">
                    <h1 id="hero-title">David Emanuel González Escobar</h1>
                    <Typewriter />

                    <p className="hero-intro">
                        {t.hero.introPrefix}
                        <span className="tech-highlight tech-highlight--selenium">Selenium</span>
                        {t.hero.introMidSeleniumAssertJ}
                        <span className="tech-highlight tech-highlight--assertj">AssertJ</span>
                        {t.hero.introConnector}
                        <span className="tech-highlight tech-highlight--performance">{t.hero.introPerformance}</span>
                        {t.hero.introClosing}
                    </p>
                    <p className="hero-cta-text">{t.hero.ctaText}</p>

                    <div className="hero-actions">
                        <a
                            className="hero-btn hero-btn--primary"
                            href="/CV-David-Gonzalez.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={t.hero.downloadCvAriaLabel}
                        >
                            <span>{t.hero.downloadCv}</span>
                        </a>
                        <EmailContact email="93davidgonzalez@gmail.com" />
                    </div>
                </div>

            </header>

            <LanguageSwitcher />

        </section>
    )
}