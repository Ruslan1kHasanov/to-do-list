import './AddTaskMenu.scss';
import React, { useRef } from 'react';
import { useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

let AddTaskMenu = (props) => {

      let getFormatDate = (value, event) => {
            let formatDate = (value.getDate() < 10) ? '0' + value.getDate().toString() : value.getDate().toString();
            let formatMonth = (value.getMonth() < 10) ? '0' + value.getMonth().toString() : value.getMonth().toString();
            local_state.set_new_deadline(formatDate+'.'+formatMonth+'.'+value.getFullYear());
      }

      

      let local_state = props.state;

      const editorRef = useRef(null);
      const log = () => {
            if (editorRef.current) {
                  console.log(editorRef.current.getContent());
            }
      };

      console.log(local_state);

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
                                          <input type="text" name="repo_name" id="repo_name_input" className='add_task_input'/>
                                    </div>
                                    <div className="top_left_adding_task_group">
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
                                          <div className="select_proirity_btn"></div>
                                    </div>
                              </div>
                              
                              <label htmlFor="task_description">Описание задачи</label>
                              <textarea name="task_description" id="description_input" cols="30" rows="8" className='add_task_input text_input'/>
                              
                              <Editor
                                    apiKey='wyczfsf287p5a75doxuzs85xb8kyv7y9e8clfrpp26wdz082'
                                    onInit={(evt, editor) => editorRef.current = editor}
                                    initialValue="Some Text"
                                    init={{
                                          height: 540,
                                          menubar: false,
                                          plugins: [
                                                'image'
                                          ],
                                          toolbar: 'undo redo | formatselect | link image |' +
                                          'bold italic backcolor | alignleft aligncenter ' +
                                          'alignright alignjustify | bullist numlist outdent indent | ' +
                                          'removeformat',
                                          content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                                          }}
                                    />
                                    <button onClick={log}>Log editor content</button>
                        </div>
                  </div>
            </div>
      );
};

export default AddTaskMenu;