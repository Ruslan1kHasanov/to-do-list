import './MainMenu.scss';
import {Link} from 'react-router-dom';
import React from 'react';

class ProjectsMenu extends React.Component {

    get_user_project_list = (data) => {
        var xhr = new XMLHttpRequest();

        xhr.open("POST", 'http://localhost/manager_project/proj_server.php', true);
        
        xhr.send(JSON.stringify(data));

        xhr.onload = () => {
            
            let data = JSON.parse(xhr.response);
            // console.log(data);
            
            if (!data.error){
                this.props.accept_projects(data);
            }

            // console.log(xhr.response);
        }

        // let tipo_request = {
        //     error : null,
        //     project_list : [
        //         {
        //               project_name : "admin-panel",
        //               project_id : 1
        //         },
        //         {
        //             project_name : "tested-proj",
        //             project_id : 2
        //         },
        //         {
        //             project_name : "exemp-proj",
        //             project_id : 3
        //         }
        //     ]
        // };
        
        // console.log(JSON.stringify(tipo_request));


        // xhr.onerror = function() {
        //     // console.log('connection to http://localhost/manager_project/proj_server.php error');
        // };

    } 


    componentDidMount() {
        let request_data = {
            user_email: 'test@mail.com',
            type: 'GET_PROJECT_LIST'
        }

        this.get_user_project_list(request_data);
    }


    render() {
        
        let local_state = this.props.main_menu_content;
        let project_list = [];

        // console.log(local_state.project_list);

        if(local_state.project_list){
            project_list = local_state.project_list.map((project) => <li key={`/${project.id_project}`}>
                                                                            <Link to={`/${project.id_project}`}>{project.proj_name}</Link>
                                                                     </li>);
        }
        console.log(project_list);

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