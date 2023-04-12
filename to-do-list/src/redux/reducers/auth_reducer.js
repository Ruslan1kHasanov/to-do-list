const LOG_IN = 'LOG_IN';
const SHOW_HIDE_PASSWORD = 'SHOW_HIDE_PASSWORD';
const UPDATE_PASSWORD_TEXT = 'UPDATE_PASSWORD_TEXT';
const UPDATE_EMAIL_TEXT = 'UPDATE_EMAIL_TEXT';

let initial_state = {
    is_password_hide: true,
    password_text: '',
    email_text: ''
};

export const auth_reducer = (state = initial_state, action) =>{
    switch(action.type) {
        case LOG_IN: {
            if (state.email_text.length !== 0 && state.password_text.length !== 0){
                
                var xhr = new XMLHttpRequest();
                xhr.open("POST", 'http://127.0.0.1:8080/reg', true);
                
                xhr.send(JSON.stringify({
                    email : action.email,
                    password : action.password
                }));

                xhr.onload = (request) => {
                    console.log(request.response);
                };

            }
            return state;
        }

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

        default:
            return state;
    }
};

export const log_in_AC = (email, password) => {
    return{ type : LOG_IN,
            email,
            password 
        };
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

