import './Authorization_menu.scss';
import {Link} from 'react-router-dom';
import React from 'react';
import { Navigate } from 'react-router-dom';

class Authorization_menu extends React.Component {
    
    not_registered = true;

    log_in(email, password) {
        if (email.length !== 0 && password.length !== 0){
                
            var xhr = new XMLHttpRequest();
            xhr.open("POST", 'http://manager.cz87407.tw1.ru/auth.php', true);
            // xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');s
            xhr.send(JSON.stringify({
                email,
                password
            }));

            xhr.onload = () => {
                let request_data = JSON.parse(xhr.response);
                console.log(request_data);
                
                if(!request_data.error){
                    this.props.registration_done();
                    console.log(email);
                    this.props.set_user_email(email);
                    this.props.set_email(email);
                }else{
                    alert("Неверный логин или пароль");
                }
            }
            // axios.defaults.withCredentials = true;
            // axios.post('http://localhost/manager_project/auth.php', {
            //     email,
            //     password
            //   })
            //   .then(function (response) {
            //     console.log(response);
            //   })
            //   .catch(function (error) {
            //     console.log(error);
            //   });


        }
    }


    render() {
        let password_Ref = React.createRef();
        let email_Ref = React.createRef();

        let local_state = this.props.auth_field;
        
        let eye_password_classes = !local_state.is_password_hide ? 'show_password_btn show_eye' : 'show_password_btn';
        
        // TEST
        // const navigate = useNavigate();
        // navigate('/swd');

        console.log(this.props);

        return (
        <>
        {(this.props.auth_field.is_registered) && <Navigate to="/" replace={true}/>}
            <div className="authorization_menu_wrapper">
                <div className="Authorization_menu">
                    
                    <div className="input_wrap">
                        <input type="email" className="auth_input" id="aith_login_input" placeholder="Email" value={ local_state.email_text } 
                            ref={ email_Ref } onChange={() => { this.props.update_email_text(email_Ref.current.value) }} />
                        
                        <input type={local_state.is_password_hide ? 'password' : 'text'} value={ local_state.password_text } className="auth_input" id="auth_password_input" 
                            placeholder="Password"  ref={ password_Ref }  onChange={() => { this.props.update_password_text_AC(password_Ref.current.value) }} />
                        
                        <div className={eye_password_classes} onClick={() => {this.props.show_hide_password()}}></div>
                    </div>
                    
                    {/* <Link to='/' style={{ textDecoration: 'none' }}><div className="login_btn noselect"onClick={() => {this.log_in(email_Ref.current.value, password_Ref.current.value)}}>
                        <span>Sign in</span></div></Link> */}
                        <div className="login_btn noselect"onClick={() => {this.log_in(email_Ref.current.value, password_Ref.current.value)}}>
                        <span>Sign in</span></div>
                    
                    <Link to='/reg'>sign up</Link>
                </div>
            </div>
        </>
        );
    }
}


export default Authorization_menu;