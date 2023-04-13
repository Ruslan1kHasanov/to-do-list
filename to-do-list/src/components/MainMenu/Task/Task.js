import './Task.scss';

let task_priority = ['task_priority_ligth', 'task_priority_higth', 'task_priority_medium']

const Task = (props) => {

      let local_state = props.state;

      return(
            <div className="task_wrapper">
                  <div className="task_container" onClick={() => {local_state.show_hide_add_task_menu()}}>
                        <h3 className='proj_name'>Тестовое задание</h3>
                        <div className="date_of_deadline noselect">16.04.23</div>
                        <p className="task_text">
                              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi tempore, voluptatibus quam alias pariatur inventore dignissimos perferendis molestiae vitae temporibus nesciunt, excepturi quaerat aperiam aut illum sed nobis. Harum, quas?
                        </p>
                        <div className="peoples_placeholder">
                              <div className="developer_ava"></div>
                              <div className="developer_ava"></div>
                              <div className="developer_ava"></div>
                        </div>
                        <div className="task_priority_higth task_priority noselect">high</div>
                  </div>
            </div>
      );
};


export default Task;