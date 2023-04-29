import './MainMenu.scss';
import {Link} from 'react-router-dom';
import React from 'react';
import CreateProjWindow from './CreateProjWindow/CreateProjWindow';

class ProjectsMenu extends React.Component {

    CREATE_NEW_PROJECT = 'CREATE_NEW_PROJECT';
    GET_PROJECT_LIST = 'GET_PROJECT_LIST';
    MUST_BE_AUTHORIZED = 'MUST_BE_AUTHORIZED';
    TRY_LATER = 'TRY_LATER';

    get_user_project_list = (data) => {
        var xhr = new XMLHttpRequest();

        xhr.open("POST", 'http://localhost/manager_project/proj_server.php', true);
        // xhr.withCredentials = false;
        xhr.send(JSON.stringify(data));

        xhr.onload = () => {
            console.log(xhr.response);
            let data = JSON.parse(xhr.response);
            
            if (!data.error){
                this.props.accept_projects(data);
            }else{
                alert(this.MUST_BE_AUTHORIZED);
            }
        }
    }

    create_new_project = (project_data) => {

        if(this.props.main_menu_content.new_proj_name !== ''){
            var xhr = new XMLHttpRequest();
            xhr.open("POST", 'http://localhost/manager_project/proj_server.php', true);
            // xhr.withCredentials = false;
            xhr.send(JSON.stringify(project_data));

            xhr.onload = () => {
                console.log(xhr.response);
                let data = JSON.parse(xhr.response);
                console.log(data);
                if (!data.error){
                    this.props.create_new_proj(data);
                }else{
                    alert(this.TRY_LATER);
                }
            }
        }else{
            alert("Project name shouldn't be empty")
        }
    }


    componentDidMount() {
        let request_data = {
            user_email: this.props.main_menu_content.user_email,
            type: this.GET_PROJECT_LIST
        }

        this.get_user_project_list(request_data);
    }


    render() {
        
        let local_state = this.props.main_menu_content;
        let project_list = [];

        console.log(this.props.main_menu_content.project_list);

        if(local_state.project_list){
            project_list = local_state.project_list.map((project) =>
             <li key={`/${project.id_project}`}>
                <Link to='/project' onClick={() => this.props.set_displayed_project(project.id_project)}>{project.proj_name}</Link>
            </li>);
        }
        // console.log(project_list);

        return(
            <>
            {(local_state.is_create_proj_window_open) ? <CreateProjWindow show_hide_create_proj_window={this.props.show_hide_create_proj_window}
                                                                            update_new_proj_name={this.props.update_new_proj_name}
                                                                            update_new_proj_description={this.props.update_new_proj_description}
                                                                            project_texts={{
                                                                                proj_description: local_state.new_proj_description,
                                                                                proj_name: local_state.new_proj_name
                                                                            }}
                                                                            CREATE_NEW_PROJECT={this.CREATE_NEW_PROJECT}
                                                                            user_email={local_state.user_email}
                                                                            create_new_project={this.create_new_project}/>
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