import { connect } from "react-redux";
import Authorization_menu from "./Authorization_menu";
import { show_hide_password_AC } from "../../redux/reducers/reg_reducer";
import { log_in_AC, update_email_text_AC, update_password_text_AC } from "../../redux/reducers/auth_reducer";


let mapStateToProps = (state) => {
    return{
        auth_field : state.auth_field
    }
}

let mapDispatchToProps = (dispatch) => {
    return{
        log_in : (email, password) => {
            dispatch(log_in_AC(email, password));
        },

        show_hide_password : () => {
            dispatch(show_hide_password_AC());
        },

        update_email_text : (updated_text) => {
            dispatch(update_email_text_AC(updated_text));
        },

        update_password_text_AC : (updated_text) => {
           dispatch(update_password_text_AC(updated_text)); 
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Authorization_menu);