import './Project.scss';
import Task from '../Task/Task';
import AddTaskMenu from '../AddTaskMenu/AddTaskMenu';
// import ViewTaskMenu from './ViewTaskMenu/ViewTaskMenu';
import ColumnDesk from './ColumnDesk/ColumnDesk';
import shortid from 'shortid';
import React from 'react';

class Project extends React.Component {

    get_project_data = (proj_name) => {     
        var xhr = new XMLHttpRequest();
        xhr.open("POST", 'http://localhost/manager_project/proj_server.php', true);
        
        // console.log(proj_name);

        // xhr.send(JSON.stringify({
        //     proj_name
        // }));

        xhr.onload = () => {
            console.log(xhr.response);
        }
    }

    componentDidMount() {
        let request_data = {
            user_email: 'test@mail.com',
            type: 'GET_PROJECT_LIST'
        }

        this.get_project_data(this.props.main_content.proj_name);
    }

    render() {
        console.log(this.props.main_content);

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

        // console.log(to_do_task_list);

        return(
                <div className="MainMenuContainer">
    
                    {this.props.main_content.is_add_task_menu_hide ? <></> : <AddTaskMenu state={this.props}/>}
                    {/* {props.main_content.is_view_task_menu_hide ? <></> : <ViewTaskMenu state={props}/>} */}
    
                    <h1>Admin-panel</h1>
                    <div className="desk_container">
                            
                            <ColumnDesk desk_formal_name="to_do" desk_name="To Do"
                                        task_list={to_do_task_list} show_hide_add_task_menu={this.props.show_hide_add_task_menu}/>

                            <ColumnDesk desk_formal_name="in_progress" desk_name="In Progress"
                                        task_list={in_progres_task_list} show_hide_add_task_menu={this.props.show_hide_add_task_menu}/>
    
                            <ColumnDesk desk_formal_name="done" desk_name="Done"
                                        task_list={done_task_list} show_hide_add_task_menu={this.props.show_hide_add_task_menu}/>
                    </div>
                </div>
        );
    };
}


export default Project;