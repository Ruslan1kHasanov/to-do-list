import './CreateProjWindow.scss';

let CreateProjWindow = (props) => {

    return(
        <div className="create_new_proj_wrapper">
            <div className="create_new_proj_container">
                <div className="create_new_proj_header">
                    <h2>Create new project</h2>
                    <div className="close_btn" onClick={() => props.show_hide_create_proj_window(false)}></div>
                </div>
                <div className="create_new_proj_body">
                    <label htmlFor='project_name_input'>Project name</label>
                    <input type="text" id='project_name_input'/>
                    <label htmlFor="project_description">Description</label>
                    <textarea id="project_description" cols="30" rows="10"></textarea>
                    <div className="create_new_proj_btn noselect">Create project</div>
                </div>
            </div>
        </div>
    );
}

export default CreateProjWindow;