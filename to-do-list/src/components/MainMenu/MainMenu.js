import './MainMenu.scss';
// import { Link } from 'react-router-dom';
import Task from './Task/Task';
import AddTaskMenu from './AddTaskMenu/AddTaskMenu';
// import ViewTaskMenu from './ViewTaskMenu/ViewTaskMenu';
import shortid from 'shortid';
import React from 'react';

class MainMenu extends React.Component {
      
      

      render() {

            let task_list = this.props.main_content.task_list.map(task => <Task state={{task}} key={shortid.generate()}
                                                                                    is_view_task = {this.props.main_content.is_view_task_menu_hide}
                                                                                    show_hide_view_task_menu={this.props.show_hide_view_task_menu}
                                                                                    displayed_task_id = {this.props.main_content.displayed_task_id}/>);

            return(
                              <div className="MainMenuContainer">
                  
                                    {this.props.main_content.is_add_task_menu_hide ? <></> : <AddTaskMenu state={this.props}/>}
                                    {/* {props.main_content.is_view_task_menu_hide ? <></> : <ViewTaskMenu state={props}/>} */}
                  
                                    <h1>Admin-panel</h1>
                                    <div className="desk_container">
                                          <div className="desk desk_to_do">
                                                <div className="desk_top noselect">
                                                      <h2 className='h2_to_do'>To Do</h2>
                                                      <div className="add_task_btn" id="to_do_btn" onClick={() => {this.props.show_hide_add_task_menu()}}></div>
                                                </div>
                                                <div className="tasks_placeholder">
                                                      { task_list }
                                                </div>
                                          </div>
                  
                                          <div className="desk desk_in_progress">
                                                <div className="desk_top">
                                                      <h2 className='h2_in_progress'>In Progress</h2>
                                                      <div className="add_task_btn" id="in_progress_btn"></div>
                                                </div>
                                                <div className="tasks_placeholder">
                  
                                                </div>
                                          </div>
                  
                                          <div className="desk desk_done noselect">
                                                <div className="desk_top">
                                                      <h2 className='h2_done'>Done</h2>
                                                      <div className="add_task_btn" id="done_btn"></div>
                                                </div>
                                                <div className="tasks_placeholder">
                  
                                                </div>
                                          </div>
                                    </div>
                              </div>
                        );
      };
}


export default MainMenu;