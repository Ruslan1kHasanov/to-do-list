import './Task.scss';
import shortid from 'shortid';
import ViewTaskMenu from '../ViewTaskMenu/ViewTaskMenu';

const Task = (props) => {
      
      // console.log(props);
      let local_state = props.state;
      // console.log(local_state.task.task_id);

      let developers_arr = props.state.task.developers_array.map(develoer => <div className="developer_ava" key={shortid.generate()}></div>)

      return(
            <>
            
            {props.is_view_task ? <></> : <ViewTaskMenu state={props}/>}
            
            <div className="task_wrapper">
                  <div className="task_container" onClick={() => {props.show_hide_view_task_menu(local_state.task.task_id)}}>
                        <h3 className='proj_name'>{local_state.task.repo_name}</h3>
                        <div className="date_of_deadline noselect">{local_state.task.date_of_deadline}</div>
                        <p className="task_short_text">
                              {local_state.task.task_short_text}
                        </p>
                        <div className="peoples_placeholder">
                              { developers_arr }
                        </div>
                        <div className={`task_priority_${local_state.task.task_priority}` +
                                          ' task_priority noselect'}>{local_state.task.task_priority}</div>
                  </div>
            </div>
            </>
      );
};


export default Task;