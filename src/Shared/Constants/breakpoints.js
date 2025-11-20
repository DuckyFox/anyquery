/**
 * Константы брейкпоинтов для адаптивного дизайна
 */
export const BREAKPOINTS = {
    /** Мобильные устройства */
    MOBILE: 375,
    /** Планшеты */
    TABLET: 768,
    /** Десктоп */
    DESKTOP: 1440,
}

/**
 * Проверка, является ли текущая ширина мобильной
 * @param {number} width - Текущая ширина экрана
 * @returns {boolean}
 */
export const isMobile = width => width <= BREAKPOINTS.MOBILE

/**
 * Проверка, является ли текущая ширина планшетной
 * @param {number} width - Текущая ширина экрана
 * @returns {boolean}
 */
export const isTablet = width => width > BREAKPOINTS.MOBILE && width <= BREAKPOINTS.TABLET

/**
 * Проверка, является ли текущая ширина десктопной
 * @param {number} width - Текущая ширина экрана
 * @returns {boolean}
 */
export const isDesktop = width => width > BREAKPOINTS.TABLET
