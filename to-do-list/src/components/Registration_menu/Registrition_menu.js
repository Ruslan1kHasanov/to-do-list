import React from 'react';
import './Registration_menu.scss';
import { Link } from 'react-router-dom';

function Registration_menu(props){
    
    let email_input = React.createRef();
    let login_input = React.createRef();
    let password_input = React.createRef();
    let password_confirm_input = React.createRef();

    let local_state = props.registration_field;
    
    let password_strength_style = {};
    let password_input_style = {};
    
    console.log(local_state);

    if (local_state.password_strength === 1 || (local_state.password_strength === 0 && local_state.password_text !== '')){
        password_strength_style.width = '33.33%';
        password_strength_style.background = 'red';

        password_input_style.boxShadow = '0 0 0 0.3rem rgba(255, 0, 0, 0.25)';
    }
    else if (local_state.password_strength === 2){
        password_strength_style.width = '66.66%';
        password_strength_style.background = 'orange';
        
        password_input_style.boxShadow = '0 0 0 0.3rem rgba(255, 174, 0, 0.397)';
    }
    else if (local_state.password_strength === 3){
        password_strength_style.width = '99.99%';
        password_strength_style.background = 'rgb(0, 192, 42)';

        password_input_style.boxShadow = '0 0 0 0.3rem rgba(0, 255, 64, 0.397)';
    }

    let eye_password_classes = !local_state.is_password_hide ? 'show_password_btn reg_btn show_eye' : 'show_password_btn reg_btn';


    return(
        <div className="registration_menu_wrapper">
            <div className="Registration_menu">
                <div className="input_wrap">
                    
                    <label htmlFor="email_input">Email:</label>
                    <input type="email" id="email_input" className="register_input" ref={email_input}/>

                    <label htmlFor="login_input">Login:</label>
                    <input type="text" id="login_input" className="register_input" ref={login_input}/>
                    
                    <label htmlFor="password_input">Password:</label>
                    <input type={local_state.is_password_hide ? "password" : "text"} style={password_input_style}
                                 id="password_input" className="register_input" value={local_state.password_text}
                            ref={password_input} onChange={() => {props.update_pass_text(password_input.current.value)}} />
                    
                    <div className={eye_password_classes} onClick={() => {props.show_hide_password()}}></div>
                    
                    <div className="password_strenght_container">
                        <div className="password_strenght_line" style={password_strength_style}></div>
                    </div>
                    
                    <label htmlFor="password_confirm_input">Confirm password:</label>
                    <input type={local_state.is_password_hide ? "password" : "text"} id="password_confirm_input" value={local_state.confirmed_password_text}
                            className="register_input" ref={password_confirm_input} onChange={() => {props.update_conf_pass_text(password_confirm_input.current.value)}} />
                    
                    <div className="pass_con_holder">
                    {(local_state.is_passwords_same) ? <></> : <div className="is_same_passwords">passwords don't match*</div>}
                    </div>
                </div>
                <Link to='/' style={{ textDecoration: 'none' }}><div id="register_btn" onClick={() => {props.register(
                    email_input.current.value,
                    login_input.current.value,
                    password_input.current.value,
                    password_confirm_input.current.value
                )}}><span>Sign up</span></div></Link>
                
            </div>
        </div>
    );
}


export default Registration_menu;