import './Authorization_menu.scss';
import {Link} from 'react-router-dom';
import React from 'react';
// import { useNavigate } from "react-router-dom";


function Authorization_menu(props) {

    let password_Ref = React.createRef();
    let email_Ref = React.createRef();

    let local_state = props.auth_field;
    
    let eye_password_classes = !local_state.is_password_hide ? 'show_password_btn show_eye' : 'show_password_btn';
    
    //TEST
    // const navigate = useNavigate();
    // navigate('/swd');

    return (
        <div className="authorization_menu_wrapper">
            <div className="Authorization_menu">
                
                <div className="input_wrap">
                    <input type="email" className="auth_input" id="aith_login_input" placeholder="Email" value={ local_state.email_text } 
                        ref={ email_Ref } onChange={() => { props.update_email_text(email_Ref.current.value) }} />
                    
                    <input type={local_state.is_password_hide ? 'password' : 'text'} value={ local_state.password_text } className="auth_input" id="auth_password_input" 
                        placeholder="Password"  ref={ password_Ref }  onChange={() => { props.update_password_text_AC(password_Ref.current.value) }} />
                    
                    <div className={eye_password_classes} onClick={() => {props.show_hide_password()}}></div>
                </div>
                
                <Link to='/' style={{ textDecoration: 'none' }}><div className="login_btn noselect"onClick={() => {props.log_in(email_Ref.current.value, password_Ref.current.value)}}>
                    <span>Sign in</span></div></Link>
                
                <Link to='/reg'>sign up</Link>
            </div>
        </div>
    );
}


export default Authorization_menu;