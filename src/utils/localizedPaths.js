const routeMap = {
  es: {
    '': '',
    'proyectos': 'work',
    'sobre-mi': 'about-me'
  },
  en: {
    '': '',
    'work': 'proyectos',
    'about-me': 'sobre-mi'
  }
};

export function getLocalizedPath(currentPath, currentLang) {
  const nextLang = currentLang === 'es' ? 'en' : 'es';
  const segments = currentPath.split('/').filter(Boolean);
  const currentSlug = segments[1] || '';
  const projectId = segments[2]

  // Buscar la clave en el idioma actual que coincida con el slug actual
  const key = Object.entries(routeMap[currentLang]).find(
    ([k, v]) => v === currentSlug || k === currentSlug
  )?.[0] || '';

  // Luego traducir esa clave al idioma destino
  const translatedSlug = routeMap[nextLang][key] || '';

  return `/${nextLang}/${translatedSlug}${projectId ? `/${projectId}` : ''}`;;
}



export function getAbsolutePathForNav(slugKey, lang) {
  const map = {
    'inicio': '',
    'project': lang === 'es' ? 'proyectos' : 'work',
    'aboutPage': lang === 'es' ? 'sobre-mi' : 'about-me'
  };
  return `/${lang}/${map[slugKey] || ''}`;
}


export function getProjectDetailPath(projectId, lang) {
  const baseSlug = lang === 'es' ? 'proyectos' : 'work';
  return `/${lang}/${baseSlug}/${projectId}`;
}

