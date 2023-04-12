import Registration_menu from './Registrition_menu';
import { connect } from 'react-redux';
import { show_hide_password_AC, register_AC, update_conf_password_text, update_password_text } from '../../redux/reducers/reg_reducer';


let mapStateToProps = (state) => {
    return{
        registration_field : state.registration_field
    };
};

let mapDispatchToProps = (dispatch) => {
    return {
        
        show_hide_password : () => {
            dispatch(show_hide_password_AC());
        },

        register : (email, login, password, confirmed_password) => {
            dispatch(register_AC(email, login, password, confirmed_password));
        },

        update_pass_text : (updated_text) => {
            dispatch(update_password_text(updated_text));
        },

        update_conf_pass_text : (updated_text) => {
            dispatch(update_conf_password_text(updated_text));
        }

    }
};

export default connect(mapStateToProps, mapDispatchToProps) (Registration_menu);
