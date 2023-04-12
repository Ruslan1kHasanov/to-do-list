import React from 'react';
import { Link } from 'react-router-dom'
import './Burger_menu.scss';


function Burger_menu(props) {

    console.log(props)

    return(
        <div className="burger_menu_container noselect">
            <div className="burger_menu">
                <Link to='/auth' onClick={()=>props.state.show_hide_burger_menu()}>Авторизоваться</Link>
            </div>
        </div>
    )
}

export default Burger_menu;
