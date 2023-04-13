import './AddTaskMenu.scss';


let AddTaskMenu = (props) => {

      let local_state = props.state;

      // console.log(local_state);

      return(
            <div className="add_task_menu_wrapper">
                  <div className="add_task_menu_container">
                        <div className="close_btn" onClick={() => local_state.show_hide_add_task_menu()}></div>
                  </div>
            </div>
      );
};

export default AddTaskMenu;