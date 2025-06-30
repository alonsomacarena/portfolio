export const routeTranslations = {
  proyectos: {
    es: 'proyectos',
    en: 'work',
  },
   about: {
    es: 'sobre-mi',
    en: 'about-me',
  },
};

// Inverso: busca la clave original desde la URL
export function getRouteKeyFromSlug(slug, lang) {
  return Object.entries(routeTranslations).find(
    ([, value]) => value[lang] === slug
  )?.[0];
}

// Genera la URL traducida
export function localizedPath(lang, key) {
  return `/${lang}/${routeTranslations[key]?.[lang] || key}`;
}
