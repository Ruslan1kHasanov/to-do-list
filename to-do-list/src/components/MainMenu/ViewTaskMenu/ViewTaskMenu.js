import './ViewTaskMenu.scss';

let ViewTaskMenu = (props) => {

      
      let local_state = props.state.state.task;

      console.log(local_state);
      
      let display_task = (props.state.displayed_task_id === local_state.id_note) ? true : false;

      function createMarkup() { return {__html: local_state.full_text}; };

      return(
            <>
            {(display_task) ? 
            
                  <div className="view_task_menu_wrapper">
                  <div className="view_task_menu_container">
                        <div className="close_btn" onClick={() =>
                                                      props.state.show_hide_view_task_menu(local_state.task_id)
                                                }></div>
                        <div className="view_task_menu">
                              <div className="task_header">
                                    <h2 className="repo_name">{ local_state.sub_project_name }</h2>
                                    <div className="date_of_deadline noselect">{ local_state.date_of_deadline }</div>
                                    <div className={`task_priority_${local_state.priority} task_priority noselect`}>{local_state.priority}</div>
                              </div>
                              <div className="task_description_container">
                                    <h3>Описание</h3>
                                    <p className='task_description_text'>
                                          {local_state.short_text}
                                    </p>
                              </div>
                              <div className="task_text" dangerouslySetInnerHTML={createMarkup()}>
                                    
                              </div>
                        </div>
                  </div>
            </div>
            
            :

            <></>
            }
      </>
            
      );
};

export default ViewTaskMenu;