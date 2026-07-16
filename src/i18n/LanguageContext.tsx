import {
  createContext,
  useContext,
  useState,
  useEffect,
  useMemo,
  type ReactNode,
} from 'react';
import {
  translations,
  type Lang,
  type TranslationShape,
  DEFAULT_LANG,
  AVAILABLE_LANGS,
} from './translations';

const STORAGE_KEY = 'portfolio-lang';

interface LanguageContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: TranslationShape;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(
  undefined
);

function detectInitialLang(): Lang {
  // 1) If the user has already selected a language, we respect that choice.
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved && AVAILABLE_LANGS.includes(saved as Lang)) {
    return saved as Lang;
  }

  // 2) If not, we try to detect the browser language
  const browserLang = navigator.language.slice(0, 2);
  if (AVAILABLE_LANGS.includes(browserLang as Lang)) {
    return browserLang as Lang;
  }

  // 3) Fallback to the default language
  return DEFAULT_LANG;
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(DEFAULT_LANG);

  // 1) We detect the initial language only in the client (localStorage/navigator
  useEffect(() => {
    setLangState(detectInitialLang());
  }, []);

  // 2) 🌟 SEO AND ACCESSIBILITY UPDATE 🌟
  useEffect(() => {
    // We specifically changed the HTML `lang` attribute.
    document.documentElement.lang = lang === 'es' ? 'es-AR' : 'en';
    // We changed the `<title>` of the tab dynamically
    document.title = lang === 'es'
      ? 'David González | Test Automation Engineer'
      : 'David González | Test Automation Engineer';
    // Also adding the meta description dynamically
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        lang === 'es'
          ? 'Portfolio de David Emanuel González Escobar — Test Automation Engineer con +5 años de experiencia en Globant. Especializado en Selenium WebDriver, JMeter, pruebas de rendimiento, QA y automatización.'
          : 'Portfolio of David Emanuel González Escobar — Test Automation Engineer with +5 years of experience at Globant. Specialized in Selenium WebDriver, JMeter, performance testing, QA, and automation.'
      );
    }
  }, [lang]);

  const setLang = (newLang: Lang) => {
    setLangState(newLang);
    localStorage.setItem(STORAGE_KEY, newLang);
  };

  // useMemo avoids recalculating/rerendering unnecessarily when other things change
  const value = useMemo<LanguageContextValue>(
    () => ({
      lang,
      setLang,
      t: translations[lang],
    }),
    [lang]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

// Hook to consume the context. It throws a clear error if used outside the Provider,
// instead of failing silently with "undefined".
export function useLang(): LanguageContextValue {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLang must be used within a <LanguageProvider>');
  }
  return context;
}
