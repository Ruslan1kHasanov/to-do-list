import './Project.scss';
import Task from '../Task/Task';
import AddTaskMenu from '../AddTaskMenu/AddTaskMenu';
// import ViewTaskMenu from './ViewTaskMenu/ViewTaskMenu';
import ColumnDesk from './ColumnDesk/ColumnDesk';
import shortid from 'shortid';
import React from 'react';
import Create_column from './Create_column/Create_column';


class Project extends React.Component {

    GET_PROJECT_DATA = 'GET_PROJECT_DATA';
    CREATE_NEW_COLUMN = 'CREATE_NEW_COLUMN';

    get_project_data = (proj_id) => {     
        var xhr = new XMLHttpRequest();
        xhr.open("POST", 'http://localhost/manager_project/proj_server.php', true);
        
        // console.log("proj_id: " + proj_id);

        xhr.send(JSON.stringify({
            type: this.GET_PROJECT_DATA,
            proj_id
        }));

        xhr.onload = () => {
            // console.log(xhr.response);
            let proj_data = JSON.parse(xhr.response);
            this.props.accept_user_data_project(proj_data);
        }
    }

    create_new_column = (proj_id, component_name) => {

        if(this.props.main_content.new_column_name !== ''){
            var xhr = new XMLHttpRequest();
            xhr.open("POST", 'http://localhost/manager_project/proj_server.php', true);
            
            let sended_data = {
                type: this.CREATE_NEW_COLUMN,
                proj_id,
                component_name
            }

            // console.log(sended_data);

            xhr.send(JSON.stringify(sended_data));
    
            xhr.onload = () => {
                console.log(xhr.response);
                let request = JSON.parse(xhr.response);
                console.log(request);
                if (!request.error){
                    this.props.create_new_column(request);
                }else{
                    alert("TRY_LATER")
                }
            }
        }
        else{
            alert("имя колонки не должно быть пустиым")
        }
    }

    componentDidMount() {
        let request_data = {
            user_email: 'test@mail.com',
            type: 'GET_PROJECT_LIST'
        }

        this.get_project_data(this.props.main_content.displayed_project);
    }

    render() {
        // console.log(this.props.main_content.columns_list);

        let to_do_task_list = this.props.main_content.task_list.map(task => { let res = (task.task_status === "to_do") ? 
                                                                            <Task state={{task}} key={shortid.generate()}
                                                                                is_view_task = {this.props.main_content.is_view_task_menu_hide}
                                                                                show_hide_view_task_menu={this.props.show_hide_view_task_menu}
                                                                                displayed_task_id = {this.props.main_content.displayed_task_id}/>
                                                                            : "";
                                                                            return res;});


        let in_progres_task_list = this.props.main_content.task_list.map(task => { let res = (task.task_status === "in_progress") ? 
                                                                            <Task state={{task}} key={shortid.generate()}
                                                                                is_view_task = {this.props.main_content.is_view_task_menu_hide}
                                                                                show_hide_view_task_menu={this.props.show_hide_view_task_menu}
                                                                                displayed_task_id = {this.props.main_content.displayed_task_id}/>
                                                                            : "";
                                                                            return res;});

        let done_task_list = this.props.main_content.task_list.map(task => { let res = (task.task_status === "done") ? 
                                                                            <Task state={{task}} key={shortid.generate()}
                                                                                is_view_task = {this.props.main_content.is_view_task_menu_hide}
                                                                                show_hide_view_task_menu={this.props.show_hide_view_task_menu}
                                                                                displayed_task_id = {this.props.main_content.displayed_task_id}/>
                                                                            : "";
                                                                            return res;});
        
        let columns_list = this.props.main_content.columns_list.map(column =>
                                                    <ColumnDesk
                                                        desk_formal_name={column.component_name}
                                                        desk_name={column.component_name}
                                                        task_list={to_do_task_list}
                                                        show_hide_add_task_menu={this.props.show_hide_add_task_menu}
                                                        key={column.id_component}/>)

        return(
                <>
                    {
                        this.props.main_content.is_create_new_column_open ?
                            <Create_column
                            show_hide_new_column = {this.props.show_hide_new_column}
                            new_column_name = {this.props.main_content.new_column_name}
                            update_new_column_name_text={this.props.update_new_column_name_text}
                            create_new_column={this.create_new_column}
                            displayed_project={this.props.main_content.displayed_project}/>
                            : <></>
                    }
                    <div className="MainMenuContainer">
                        
                        {this.props.main_content.is_add_task_menu_hide ? <></> : <AddTaskMenu state={this.props}/>}
                        {/* {props.main_content.is_view_task_menu_hide ? <></> : <ViewTaskMenu state={props}/>} */}
                        <div className="main_menu_header">
                            <h1>Admin-panel</h1>
                            <div className="create_new_column_btn noselect"
                                    onClick={() => this.props.show_hide_new_column(true)}>add column</div>
                        </div>
                        <div className="desk_container">
                                {columns_list}
                        </div>
                    </div>
                </>
        );
    };
}


export default Project;