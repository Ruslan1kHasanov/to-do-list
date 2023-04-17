import { Route, Routes } from "react-router-dom";
import Authorization_menu from "./components/Authorization_menu/Authorization_menu_container"
import Registration_menu from './components/Registration_menu/Registration_menu_container';
import MainMenu from "./components/MainMenu/MainMenuContainer";
import Header from "./components/Header/HeaderContainer";
import ProjectsMenu from "./components/ProjectsMenu/ProjectsMenuContainer";
import './App.scss';

function App(props) {
  
  // console.log(props.state);
  
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/auth' element={<Authorization_menu />}/>
        <Route path='/reg' element={<Registration_menu />}/>
        <Route path='/project1' element={<MainMenu />}/>
        <Route path='/your_projects' element={<ProjectsMenu />}/>
      </Routes>
    </div>
  );
}

export default App;
