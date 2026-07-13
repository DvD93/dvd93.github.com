import { useState, useRef, useEffect } from 'react';
import { MdTranslate, MdKeyboardArrowDown } from 'react-icons/md';
import { useLang } from '../i18n/LanguageContext';
import { AVAILABLE_LANGS, type Lang } from '../i18n/translations';
import './LanguageSwitcher.css';

const LANG_LABELS: Record<Lang, string> = {
  es: 'ES',
  en: 'EN',
};

export function LanguageSwitcher() {
  const { lang, setLang } = useLang();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // closes the dropdown if clicked outside 
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // closes the dropdown with the escape key  
  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === 'Escape') setIsOpen(false);
    }
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  const handleSelect = (newLang: Lang) => {
    setLang(newLang);
    setIsOpen(false);
  };

  return (
    <div className="lang-switcher" ref={containerRef}>
      <button
        className="lang-switcher__trigger"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <MdTranslate size={16} />
        <span>{LANG_LABELS[lang]}</span>
        <MdKeyboardArrowDown
          size={16}
          className={`lang-switcher__chevron ${isOpen ? 'lang-switcher__chevron--open' : ''}`}
        />
      </button>

      {isOpen && (
        <ul className="lang-switcher__dropdown" role="listbox">
          {AVAILABLE_LANGS.map((availableLang) => (
            <li key={availableLang}>
              <button
                className="lang-switcher__option"
                role="option"
                aria-selected={lang === availableLang}
                onClick={() => handleSelect(availableLang)}
              >
                {LANG_LABELS[availableLang]}
                {lang === availableLang && (
                  <span className="lang-switcher__dot" />
                )}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}