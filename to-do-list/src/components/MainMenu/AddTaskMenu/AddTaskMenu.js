import './AddTaskMenu.scss';
import React, { useRef } from 'react';
import { useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import DropDownSelecPriority from './DropDownSelector/DropDownSelector';
import DevSelector from './DevSelector/DevSelector';
import shortid from 'shortid';

let AddTaskMenu = (props) => {
      
      console.log(props);

      const add_new_task = () => {

            if(local_state.main_content.repo_name != '' && local_state.main_content.task_short_text != ''){
                  
                  let modify_dev_arr = [];
                  local_state.main_content.selected_dev_arr.map((item) => {
                        modify_dev_arr.push(item.value);
                  });
      
      
                  let new_task = {
                        type: 'CREATE_NEW_NOTE',
                        proj_id : local_state.main_content.displayed_project,
                        date_of_deadline : local_state.main_content.selected_date,
                        priority : local_state.main_content.selected_priority,
                        contributors_email : modify_dev_arr,
                        sub_project_name : local_state.main_content.repo_name,
                        short_text : local_state.main_content.task_short_text,
                        full_text : local_state.main_content.task_text,
                        id_component : local_state.main_content.selected_task_column_id,
                        creator_email : local_state.user_email
                  }
                  var xhr = new XMLHttpRequest();
                  xhr.open("POST", 'http://manager.cz87407.tw1.ru/proj_server.php', true);
                  
                  xhr.send(JSON.stringify(new_task));
                  
                  xhr.onload = () => {
                        console.log(xhr.response);
                        let request = JSON.parse(xhr.response);
                        console.log(request);
                        if (!request.error){
                              let modify_task = {
                                    task_id : shortid.generate(),
                                    sub_project_name : new_task.sub_project_name,
                                    priority : new_task.priority,
                                    date_of_deadline : new_task.date_of_deadline,
                                    short_text : new_task.short_text,
                                    full_text : new_task.full_text,
                                    id_component : new_task.id_component,
                                    developers_array: modify_dev_arr
                              }
                              props.state.creating_new_task(modify_task);
                              local_state.show_hide_add_task_menu();
                        }else{
                              alert(request.message)
                        }
                    }
                  console.log(JSON.stringify(new_task));
            }
            else{
                  alert("Наименование и описание не должны быть пустыми");
            }
            
      };

      let getFormatDate = (value, event) => {
            let formatDate = (value.getDate() < 10) ? '0' + value.getDate().toString() : value.getDate().toString();
            let formatMonth = (value.getMonth() < 10) ? '0' + value.getMonth().toString() : value.getMonth().toString();
            local_state.set_new_deadline(formatDate+'.'+formatMonth+'.'+value.getFullYear());
      }

      let local_state = props.state;

      const editorRef = useRef(null);

      let input_repo_nameRef = React.createRef();
      let input_short_textRef = React.createRef();

      // console.log(props);

      const [date, setDate] = useState(new Date());

      return(
            <div className="add_task_menu_wrapper">
                  <div className="add_task_menu_container">
                        <div className="close_btn" onClick={() => local_state.show_hide_add_task_menu()}></div>
                        <div className="add_task_menu">
                              <h2>Adding task</h2>

                              <div className="top_adding_task">
                                    <div>
                                          <label htmlFor="repo_name">Наименование репозитория</label>
                                          <input type="text" name="repo_name" id="repo_name_input" className='add_task_input'
                                                ref={ input_repo_nameRef }
                                                value={local_state.main_content.repo_name}
                                                onChange={() => local_state.update_repo_name(input_repo_nameRef.current.value)}/>
                                    </div>
                                    <div className="top_left_adding_task_group">

                                          <DevSelector 
                                                add_new_dev={local_state.add_new_dev}
                                                selected_dev_arr={local_state.main_content.selected_dev_arr}
                                                dev_proj_list={local_state.main_content.dev_proj_list}/>
                                          
                                          <DropDownSelecPriority set_priority={local_state.set_priority} selected_priority = {local_state.main_content.selected_priority}/>
                                          
                                          <div className="calendar_place_holder">
                                                {local_state.main_content.is_calendar_hide ?
                                                      <></> :
                                                      <>
                                                            <Calendar className='calendar' onChange={setDate} value={date} 
                                                                  	onClickDay={(value, event) => getFormatDate(value, event)}/>
                                                            <div className="calendar_wrapper" onClick={local_state.show_hide_calendar}></div>
                                                      </>}
                                          
                                          </div>
                                          <div className="select_dead_line_btn" onClick={local_state.show_hide_calendar}>
                                                {local_state.main_content.selected_date}
                                          </div>
                                    </div>
                              </div>
                              
                              <label htmlFor="task_description">Описание задачи</label>
                              <textarea name="task_description" id="description_input" cols="30" rows="8" className='add_task_input text_input'
                                    ref={input_short_textRef}
                                    value={local_state.main_content.task_short_text}
                                    onChange={() => local_state.update_short_text(input_short_textRef.current.value)}/>
                              
                              <Editor
                                    apiKey='wyczfsf287p5a75doxuzs85xb8kyv7y9e8clfrpp26wdz082'
                                    onInit={(evt, editor) => editorRef.current = editor}
                                    initialValue=''
                                    init={{
                                          height: 560,
                                          menubar: false,
                                          plugins: [],
                                          toolbar: 'undo redo | styles | formatselect |' +
                                          'bold italic backcolor | alignleft aligncenter ' +
                                          'alignright alignjustify | ' +
                                          'removeformat',
                                          content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                                          }}
                                    value={local_state.main_content.task_text}
                                    onEditorChange={() => local_state.update_task_text(editorRef.current.getContent())}
                                    />
                              <button onClick={add_new_task}>Create task</button>
                        </div>
                  </div>
            </div>
      );
};

export default AddTaskMenu;