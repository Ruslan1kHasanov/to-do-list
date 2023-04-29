import React from 'react';
import './CreateProjWindow.scss';

let CreateProjWindow = (props) => {

    let proj_name_Ref = React.createRef();
    let proj_description_Ref = React.createRef();

    // console.log(props);

    return(
        <div className="create_new_proj_wrapper">
            <div className="create_new_proj_container">
                <div className="create_new_proj_header">
                    <h2>Create new project</h2>
                    <div className="close_btn" onClick={() => props.show_hide_create_proj_window(false)}></div>
                </div>
                <div className="create_new_proj_body">
                    
                    <label htmlFor='project_name_input'>Project name</label>
                    <input type="text" id='project_name_input' ref={ proj_name_Ref }
                            value={props.project_texts.proj_name}
                            onChange={() => props.update_new_proj_name(proj_name_Ref.current.value)}/>

                    <label htmlFor="project_description">Description</label>
                    <textarea id="project_description" cols="30" rows="10" ref={ proj_description_Ref }
                                value={props.project_texts.proj_description}
                                onChange={() => props.update_new_proj_description(proj_description_Ref.current.value)}>
                    </textarea>
                    
                    <div className="create_new_proj_btn noselect"
                            onClick={() => {props.create_new_project({
                                "creator_email": props.user_email,
                                "proj_name": proj_name_Ref.current.value,
                                "project_description": proj_description_Ref.current.value,
                                "type": props.CREATE_NEW_PROJECT
                            });
                            props.show_hide_create_proj_window(false);}
                            }>Create project</div>
                </div>
            </div>
        </div>
    );
}

export default CreateProjWindow;