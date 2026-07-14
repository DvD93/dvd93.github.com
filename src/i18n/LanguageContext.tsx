// LanguageContext.tsx
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
  // 1) Si el usuario ya eligió un idioma antes, respetamos esa elección
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved && AVAILABLE_LANGS.includes(saved as Lang)) {
    return saved as Lang;
  }

  // 2) Si no, intentamos detectar el idioma del navegador
  const browserLang = navigator.language.slice(0, 2);
  if (AVAILABLE_LANGS.includes(browserLang as Lang)) {
    return browserLang as Lang;
  }

  // 3) Fallback al idioma por defecto
  return DEFAULT_LANG;
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(DEFAULT_LANG);

  // Detectamos el idioma inicial solo en el cliente (localStorage/navigator
  // no existen en SSR, pero como es React puro con Vite/CRA no hay problema)
  useEffect(() => {
    setLangState(detectInitialLang());
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = (newLang: Lang) => {
    setLangState(newLang);
    localStorage.setItem(STORAGE_KEY, newLang);
  };

  // useMemo evita recalcular/rerenderizar de más cuando cambian otras cosas
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

// Hook para consumir el contexto. Tira error claro si se usa fuera del Provider,
// en vez de fallar silenciosamente con "undefined".
export function useLang(): LanguageContextValue {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLang debe usarse dentro de un <LanguageProvider>');
  }
  return context;
}
