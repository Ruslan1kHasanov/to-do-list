const SHOW_HIDE_PASSWORD = 'SHOW_HIDE_PASSWORD';
const UPDATE_PASSWORD_TEXT = 'UPDATE_PASSWORD_TEXT';
const UPDATE_EMAIL_TEXT = 'UPDATE_EMAIL_TEXT';
const REGISTRATION_DONE = 'REGISTRATION_DONE';

let initial_state = {
    is_password_hide: true,
    password_text: '',
    email_text: '',
    is_registered: false
};

export const auth_reducer = (state = initial_state, action) =>{
    switch(action.type) {
        case SHOW_HIDE_PASSWORD: {
            let is_hide = (state.is_password_hide) ? false : true;
            return{...state, is_password_hide : is_hide};
        }

        case UPDATE_PASSWORD_TEXT: {
            return{...state, password_text : action.updated_text};
        }

        case UPDATE_EMAIL_TEXT: {
            return{...state, email_text : action.updated_text};
        }

        case REGISTRATION_DONE: {
            return{...state, is_registered: true}
        }

        default:
            return state;
    }
};

export const update_password_text_AC = (updated_text) => {
    return {
        type : UPDATE_PASSWORD_TEXT,
        updated_text
    }
};

export const update_email_text_AC = (updated_text) => {
    return {
        type : UPDATE_EMAIL_TEXT,
        updated_text
    }
};

export const registration_done_AC = () => {
    return{
        type: REGISTRATION_DONE
    }
}