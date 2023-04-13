import './ViewTaskMenu.scss';

let ViewTaskMenu = (props) => {

      let local_state = props.state;

      return(
            <div className="view_task_menu_wrapper">
                  <div className="view_task_menu_container">
                        <div className="close_btn" onClick={() => local_state.show_hide_view_task_menu()}></div>
                        <div className="view_task_menu">
                              <h2 className="repo_name">Tested</h2>
                              <div className="task_description_container">
                                    <p>
                                          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima sint nesciunt maiores, laborum dolores vero mollitia architecto vitae suscipit nam nobis quos debitis asperiores veniam tempora recusandae quas rerum fuga.
                                    </p>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default ViewTaskMenu;