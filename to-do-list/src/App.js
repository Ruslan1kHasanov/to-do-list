import { Route, Routes } from "react-router-dom";
import Authorization_menu_container from "./components/Authorization_menu/Authorization_menu_container"
import Registration_menu_container from './components/Registration_menu/Registration_menu_container';
import MainMenuContainer from "./components/MainMenu/MainMenuContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import './App.scss';

function App(props) {
  
  // console.log(props.state);
  
  return (
    <div className="App">
      <HeaderContainer/>
      <Routes>
        <Route path='/auth' element={<Authorization_menu_container />}/>
        <Route path='/reg' element={<Registration_menu_container />}/>
        <Route path='/' element={<MainMenuContainer />}/>
      </Routes>
    </div>
  );
}

export default App;
