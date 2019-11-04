export const SET_THEME_NAME = 'SET_THEME_NAME';

export function setTheme(theme) {
    return {
        type: SET_THEME_NAME,
        payload: theme,
    }
}
