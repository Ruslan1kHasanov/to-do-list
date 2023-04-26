import './MainMenu.scss';
import {Link} from 'react-router-dom';
import React from 'react';
import CreateProjWindow from './CreateProjWindow/CreateProjWindow';

class ProjectsMenu extends React.Component {

    CREATE_NEW_PROJECT = 'CREATE_NEW_PROJECT';
    GET_PROJECT_LIST = 'GET_PROJECT_LIST';

    get_user_project_list = (data) => {
        var xhr = new XMLHttpRequest();

        xhr.open("POST", 'http://localhost/manager_project/proj_server.php', true);
        
        xhr.send(JSON.stringify(data));

        xhr.onload = () => {
            
            let data = JSON.parse(xhr.response);
            // console.log(xhr.response);
            // console.log(data);
            
            if (!data.error){
                this.props.accept_projects(data);
            }
            
        }

    } 


    componentDidMount() {
        let request_data = {
            user_email: 'test@mail.com',
            type: this.GET_PROJECT_LIST
        }

        this.get_user_project_list(request_data);
    }


    render() {
        
        let local_state = this.props.main_menu_content;
        let project_list = [];

        // console.log(this.props);

        if(local_state.project_list){
            project_list = local_state.project_list.map((project) =>
             <li key={`/${project.id_project}`}>
                <Link to='/project' onClick={() => this.props.set_displayed_project(project.id_project)}>{project.proj_name}</Link>
            </li>);
        }
        // console.log(project_list);

        return(
            <>
            {(local_state.is_create_proj_window_open) ? <CreateProjWindow show_hide_create_proj_window={this.props.show_hide_create_proj_window}/>
                                                        : <></>}
            <div className="proj_menu_wrapper">
                <div className="proj_menu_header">
                    <h2>Your projects</h2>
                    <div className="add_proj_btn" onClick={() => this.props.show_hide_create_proj_window(true)}>
                        Create new project
                    </div>
                </div>
                <div className="proj_menu_container">
                    <ul>
                        {/* <li><Link to={"/project"}>project1</Link></li> */}
                        {project_list}
                    </ul>
                </div>
            </div>
            </>
        );
    }
}

export default ProjectsMenu;