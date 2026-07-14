import { useState, useCallback } from 'react'
import './Navbar.css'
import { FaLinkedin } from "react-icons/fa"
import { SiGithub } from "react-icons/si"
import { useLang } from '../i18n/LanguageContext'

const NAV_LINKS = [
    { sectionId: 'experience' },
    { sectionId: 'skills' },
    { sectionId: 'about' },
    { sectionId: 'training' },
    { sectionId: 'services' },
    { sectionId: 'contact' }
] as const;

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = useCallback(() => {
        setIsOpen(prev => !prev)
    }, [])

    const closeMenu = useCallback(() => {
        setIsOpen(false)
    }, [])

    const { t } = useLang();

    return (
        <>
            {/* Hamburger button — mobile only */}
            <button
                className={`hamburger ${isOpen ? 'is-active' : ''}`}
                onClick={toggleMenu}
                aria-label={isOpen ? 'Cerrar menú de navegación' : 'Abrir menú de navegación'}
                aria-expanded={isOpen}
                aria-controls="main-nav"
            >
                <span className="hamburger-line" />
                <span className="hamburger-line" />
                <span className="hamburger-line" />
            </button>

            {/* Overlay — mobile only */}
            {isOpen && (
                <div
                    className="nav-overlay"
                    onClick={closeMenu}
                    aria-hidden="true"
                />
            )}

            <aside className={`sidebar-container ${isOpen ? 'is-open' : ''}`}>
                <nav id="main-nav" className="nav-container" role="navigation" aria-label="Navegación principal">
                    <div className="nav-name">
                        <span className="nav-full-name">David González</span>
                        <span className="nav-name-role">Test Automation Engineer</span>
                    </div>

                    <ul className="menu-links">
                        {NAV_LINKS.map(({ sectionId }) => (
                            <li key={sectionId}>
                                <a
                                    href={`#${sectionId}`}
                                    onClick={closeMenu}
                                >
                                    {t.navbar[sectionId]}
                                </a>
                            </li>
                        ))}
                    </ul>

                    <ul className="social-media" aria-label="Redes sociales">
                        <li>
                            <a
                                href="https://www.linkedin.com/in/davidemanuelgonzalezescobar/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Perfil de LinkedIn"
                                title="LinkedIn"
                            >
                                <FaLinkedin fontSize={28} />
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://github.com/dvd93"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Perfil de GitHub"
                                title="GitHub"
                            >
                                <SiGithub fontSize={28} />
                            </a>
                        </li>
                    </ul>
                </nav>
            </aside>
        </>
    )
}