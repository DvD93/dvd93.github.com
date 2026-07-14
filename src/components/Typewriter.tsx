import { useEffect, useRef } from "react"
import Typed from "typed.js";
import './Typewriter.css'
import { useLang } from "../i18n/LanguageContext";
import type { TypewriterProps } from "../types/types";

export const Typewriter = ({ variant = 'dark' }: TypewriterProps) => {

    const spanRef = useRef<HTMLSpanElement>(null);
    const { t, lang } = useLang();

    useEffect(() => {
        const typed = new Typed(spanRef.current, {
            strings: [...t.hero.typewriterRoles],
            typeSpeed: 60,
            backSpeed: 40,
            backDelay: 1500,
            loop: true,
        })
        return () => typed.destroy();
    }, [lang]);

    return (
        <div className={`text_typing text_typing-${variant}`}
            aria-label={t.hero.rolesAriaLabel}>
            <div className="about-tw-carousel">
                <p className="about-tw-prefix">
                    {t.hero.greeting}
                    <span ref={spanRef} />
                </p>
            </div>
        </div>
    )
}