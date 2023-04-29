import { connect } from "react-redux";
import Authorization_menu from "./Authorization_menu";
import { show_hide_password_AC } from "../../redux/reducers/reg_reducer";
import { update_email_text_AC, update_password_text_AC, registration_done_AC } from "../../redux/reducers/auth_reducer";
import { set_menu_user_email_AC } from '../../redux/reducers/main_menu_reducer';
import { set_user_email_AC } from '../../redux/reducers/project_reducer';

let mapStateToProps = (state) => {
    return{
        auth_field : state.auth_field
    }
}

let mapDispatchToProps = (dispatch) => {
    return{
        show_hide_password : () => {
            dispatch(show_hide_password_AC());
        },

        update_email_text : (updated_text) => {
            dispatch(update_email_text_AC(updated_text));
        },

        update_password_text_AC : (updated_text) => {
           dispatch(update_password_text_AC(updated_text)); 
        },

        registration_done : () => {
            dispatch(registration_done_AC());
        },

        set_user_email : (email) => {
            dispatch(set_menu_user_email_AC(email), set_user_email_AC(email))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Authorization_menu);