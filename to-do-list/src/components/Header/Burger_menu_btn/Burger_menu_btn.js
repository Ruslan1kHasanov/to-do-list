import React from "react";
import './Burger_menu_btn.scss';
import Burger_menu from './Burger_menu/Burger_menu';

function Burger_menu_btn(props) {

    let local_state = props.state;
    
    // console.log(window.location.href);

    return(
        <div className="profile_menu_burger_wrapper">
            <div className="profile_menu_burger" onClick={() => local_state.show_hide_burger_menu()}>
                <div className="profile_menu_burger_btn"></div>
            </div>
            <div className="burger_menu_holder">
                {local_state.header.is_burger_menu_hide ? <></> : <Burger_menu state={local_state}/>}
            </div>
         </div>
    );
}

export default Burger_menu_btn;