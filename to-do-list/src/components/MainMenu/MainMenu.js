import './MainMenu.scss';
import { Link } from 'react-router-dom';


let MainMenu = (props) => {
      return(
            <div className="MainMenuContainer">
                  <div className="desk_container">
                        <div className="desk desk_to_do">
                              <div className="desk_top noselect">
                                    <h2 className='h2_to_do'>To Do</h2>
                                    <div className="add_task_btn" id="to_do_btn"></div>
                              </div>
                              <div className="task_wrapper">
                                    <div className="task_container">
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
                              <div className="task_wrapper">
                                    <div className="task_container">
                                          <h3 className='proj_name'>Тестовое задание</h3>
                                          <div className="date_of_deadline noselect">16.04.23</div>
                                          <p className="task_text">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi tempore, voluptatibus quam alias pariatur inventore dignissimos perferendis molestiae vitae temporibus nesciunt, excepturi quaerat aperiam aut illum sed nobis. Harum, quas?
                                          </p>
                                          <div className="peoples_placeholder">
                                                <div className="developer_ava"></div>
                                                <div className="developer_ava"></div>
                                          </div>
                                          <div className="task_priority_ligth task_priority noselect">low</div>
                                    </div>
                              </div>
                              <div className="task_wrapper">
                                    <div className="task_container">
                                          <h3 className='proj_name'>Тестовое задание</h3>
                                          <div className="date_of_deadline noselect">16.04.23</div>
                                          <p className="task_text">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi tempore, voluptatibus quam alias pariatur inventore dignissimos perferendis molestiae vitae temporibus nesciunt, excepturi quaerat aperiam aut illum sed nobis. Harum, quas?
                                          </p>
                                          <div className="peoples_placeholder">
                                                <div className="developer_ava"></div>
                                                <div className="developer_ava"></div>
                                          </div>
                                          <div className="task_priority_ligth task_priority noselect">low</div>
                                    </div>
                              </div>
                        </div>
                        <div className="desk desk_in_progress noselect">
                              <div className="desk_top">
                                    <h2 className='h2_in_progress'>In Progress</h2>
                                    <div className="add_task_btn" id="in_progress_btn"></div>
                              </div>
                              <div className="task_wrapper">
                                    <div className="task_container">
                                          <h3 className='proj_name'>React Client</h3>
                                          <div className="date_of_deadline noselect">24.04.23</div>
                                          <p className="task_text">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi tempore, voluptatibus quam alias pariatur inventore dignissimos perferendis molestiae vitae temporibus nesciunt, excepturi quaerat aperiam aut illum sed nobis. Harum, quas?
                                          </p>
                                          <div className="peoples_placeholder">
                                                <div className="developer_ava"></div>
                                                <div className="developer_ava"></div>
                                          </div>
                                          <div className="task_priority_medium task_priority noselect">medium</div>
                                    </div>
                              </div>
                        </div>
                        <div className="desk desk_done noselect">
                              <div className="desk_top">
                                    <h2 className='h2_done'>Done</h2>
                                    <div className="add_task_btn" id="done_btn"></div>
                              </div>
                        </div>
                  </div>
            </div>
      );
}

export default MainMenu;