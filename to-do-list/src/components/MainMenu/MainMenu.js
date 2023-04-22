import './MainMenu.scss';
import {Link} from 'react-router-dom';
import React from 'react';

class ProjectsMenu extends React.Component {

    get_user_project_list = (data) => {
        var xhr = new XMLHttpRequest();

        xhr.open("POST", 'http://localhost/manager_project/proj_server.php', true);
        
        xhr.send(JSON.stringify(data));

        xhr.onload = () => {
            console.log(xhr.response);

        }

        xhr.onerror = function() {
            // console.log('connection to http://localhost/manager_project/proj_server.php error');
        };

    } 


    componentDidMount() {
        // this.get_user_project_list();
    }


    render() {
        
        let local_state = this.props.main_menu_content;

        let project_list = local_state.project_list.map((project) => <li key={`/${project.project_id}`}>
                                                                        <Link to={`/${project.project_id}`}>{project.project_name}</Link>
                                                                    </li>);
        console.log(this.props);

        return(
            <div className="proj_menu_wrapper">
                <div className="proj_menu_header">
                    <h2>Your projects</h2>
                    <div className="add_proj_btn"></div>
                </div>
                <div className="proj_menu_container">
                    <ul>
                        {/* <li><Link to={"/project"}>project1</Link></li> */}
                        {project_list}
                    </ul>
                </div>
            </div>
        );
    }
}

export default ProjectsMenu;