import {SET_THEME_NAME} from "../actions/ThemeActions";

export const initialState = {
    theme: 'dark'
};

export function themeReducer(state = initialState, action) {

    switch (action.type) {
        case SET_THEME_NAME:
            return { ...state, theme: action.payload };

        default:
            return state;
    }

}
