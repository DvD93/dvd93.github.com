import { useState, useEffect } from 'react';
import './Footer.css';
import { useLang } from '../i18n/LanguageContext';

export const Footer = () => {
    /* For Button ▲ */
    const [showButton, setShowButton] = useState(false);
    const { t } = useLang();

    useEffect(() => {
        const handleScroll = () => {
            //  We evaluate if the scroll went down more than 400 pixels  
            if (window.scrollY > 400) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        };

        //  We listen to the browser scroll event  
        window.addEventListener('scroll', handleScroll);

        //  We clean up the event when the component is unmounted to avoid memory leaks  
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <footer className="footer-container">
            <div className="footer-content">
                <div className="footer-quote-icon">“</div>
                <blockquote className="footer-phrase">
                    {t.footer.phrase}
                </blockquote>
                <span className="footer-author">{t.footer.author}</span>
            </div>

            {/*  We alternate the 'visible' class */}
            <button
                className={`scroll-to-top ${showButton ? 'visible' : ''}`}
                onClick={handleScrollToTop}
                aria-label="Volver al inicio de la página"
            >
                <span className="arrow-up">▲</span>
            </button>
        </footer>
    );
};