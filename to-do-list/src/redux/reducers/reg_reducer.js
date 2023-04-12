import { passwordStrength } from 'check-password-strength';


const SHOW_HIDE_PASSWORD = 'SHOW_HIDE_PASSWORD';
const REGISTER = 'REGISTER';
const UPDATE_PASSWORD_TEXT = 'UPDATE_PASSWORD_TEXT';
const UPDATE_CONF_PASSWORD_TEXT = 'UPDATE_CONF_PASSWORD_TEXT';

let initial_state = {
    password_text: '',
    confirmed_password_text: '',
    is_password_hide: true,
    password_strength: 0,
    is_passwords_same: true,
};


export const reg_reducer = (state = initial_state, action) => {
    switch(action.type) {
        case SHOW_HIDE_PASSWORD: {
            let is_hide = (state.is_password_hide) ? false : true;
            return{...state, is_password_hide : is_hide};
        }

        case(REGISTER): {
            if (action.password === action.confirmed_password){
                var xhr = new XMLHttpRequest();
                xhr.open('POST', 'http://127.0.0.1:8080/reg', true);
                
                xhr.send(JSON.stringify({
                    email : action.email,
                    login : action.login,
                    password : action.password,
                    confirmed_password : action.confirmed_password
                }));

                return {...state, is_passwords_same : true};
            }
            else{
                return{...state, is_passwords_same : false};
            }
        }

        case(UPDATE_PASSWORD_TEXT): {
            let password_strength = passwordStrength(action.updated_text).id;
            if(state.confirmed_password_text !== action.updated_text && state.confirmed_password_text !== ''){
                state.is_passwords_same = false;
            }
            else{
                state.is_passwords_same = true;
            }
            return {...state, password_text : action.updated_text, password_strength }
        }

        case(UPDATE_CONF_PASSWORD_TEXT): {
            if(state.password_text !== action.updated_text){
                state.is_passwords_same = false;
            }
            else{
                state.is_passwords_same = true;
            }
            return {...state, confirmed_password_text : action.updated_text, is_passwords_same : state.is_passwords_same}
        }

        default:
            return state;
    }
}

export const show_hide_password_AC = () => {
    return { type : SHOW_HIDE_PASSWORD };
};

export const register_AC = (email, login, password, confirmed_password) => {
    return {
        type : REGISTER,
        email,
        login,
        password,
        confirmed_password
    };
};

export const update_password_text = (updated_text) => {
    return {
        type : UPDATE_PASSWORD_TEXT,
        updated_text
    }
};

export const update_conf_password_text = (updated_text) => {
    return {
        type : UPDATE_CONF_PASSWORD_TEXT,
        updated_text
    }
};