import './ProjectsMenu.scss';
import {Link} from 'react-router-dom';
import React from 'react';

class ProjectsMenu extends React.Component {
    render() {
        return(
            <>
            <div className="proj_menu_wrapper">
                <div className="proj_menu_header">
                    <h2>Your projects</h2>
                    <div className="add_proj_btn"></div>
                </div>
                <div className="proj_menu_container">
                    <ul>
                        <li><Link to={"/project1"}>project1</Link></li>
                    </ul>
                </div>
            </div>
            </>
        );
    }
}

export default ProjectsMenu;