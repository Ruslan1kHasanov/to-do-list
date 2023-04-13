import './AddTaskMenu.scss';
import React, { useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';

let AddTaskMenu = (props) => {

      let local_state = props.state;

      const editorRef = useRef(null);
      const log = () => {
            if (editorRef.current) {
                  console.log(editorRef.current.getContent());
            }
      };

      return(
            <div className="add_task_menu_wrapper">
                  <div className="add_task_menu_container">
                        <div className="close_btn" onClick={() => local_state.show_hide_add_task_menu()}></div>
                        <div className="add_task_menu">
                              <h2>Adding task</h2>
                              <label htmlFor="repo_name">Наименование репозитория</label>
                              <input type="text" name="repo_name" id="repo_name_input" className='add_task_input'/>
                              <label htmlFor="task_description">Описание задачи</label>
                              <textarea name="task_description" id="description_input" cols="30" rows="10" className='add_task_input text_input'/>
                              <Editor
                                    onInit={(evt, editor) => editorRef.current = editor}
                                    initialValue="Some Text"
                                    init={{
                                          height: 570,
                                          menubar: false,
                                          plugins: [
                                                'image'
                                          ],
                                          toolbar: 'undo redo | formatselect | link image |' +
                                          'bold italic backcolor | alignleft aligncenter ' +
                                          'alignright alignjustify | bullist numlist outdent indent | ' +
                                          'removeformat | help',
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