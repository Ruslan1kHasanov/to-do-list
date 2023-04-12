import './Header.scss'
import Burger_menu_btn from "./Burger_menu_btn/Burger_menu_btn";

let Header = (props) => {
      
      return(
            <header>
                  <div className="logo noselect"></div>
                  <Burger_menu_btn state={props}/>
            </header>
      );
}

export default Header;