const ACCEPT_USER_PROJECTS = 'ACCEPT_USER_PROJECTS';
const SHOW_HIDE_CREATE_PROJ_WINDOW = 'SHOW_HIDE_CREATE_PROJ_WINDOW';
const SET_USER_EMAIL = 'SET_USER_EMAIL';
const UPDATE_NEW_PROJ_NAME = 'UPDATE_NEW_PROJ_NAME';
const UPDATE_NEW_PROJ_DESCRIPTION = 'UPDATE_NEW_PROJ_DESCRIPTION';
const CREATE_NEW_PROJECT = 'CREATE_NEW_PROJECT';

let initial_state = {
      project_list : [
            // {
            //       project_name : "admin-panel",
            //       id_project : 1
            // },
            // {
            //     project_name : "initial-state",
            //     id_project : 2
            // }
      ],
      is_create_proj_window_open: false,
      user_email: '',
      new_proj_name: '',
      new_proj_description: ''
};

export const main_menu_reducer = (state = initial_state, action) =>{
    switch(action.type) {

            case ACCEPT_USER_PROJECTS: {
                  return{...state, project_list : action.project_list}
            }

            case SHOW_HIDE_CREATE_PROJ_WINDOW: {
                  return{...state, is_create_proj_window_open : action.is_open}
            }

            case SET_USER_EMAIL: {
                  // console.log(action.email);
                  return{...state, user_email: action.email}
            }

            case UPDATE_NEW_PROJ_NAME: {
                  return{...state, new_proj_name: action.updated_text}
            }

            case UPDATE_NEW_PROJ_DESCRIPTION: {
                  return{...state, new_proj_description: action.updated_text}
            }

            case CREATE_NEW_PROJECT: {
                  return{...state, project_list: [...state.project_list, action.project_data]}
            }

            default:
            return state;
      }
};


export const accept_projects_AC = (project_list) => {
      return{ 
            type : ACCEPT_USER_PROJECTS,
            project_list
      };
}

export const show_hide_create_proj_window_AC = (is_open) => {
      return{
            type: SHOW_HIDE_CREATE_PROJ_WINDOW,
            is_open
      }
}

export const set_menu_user_email_AC = (email) => {
      return{
            type: SET_USER_EMAIL,
            email
      }
}

export const update_new_proj_name_AC = (updated_text) => {
      return{
            type: UPDATE_NEW_PROJ_NAME,
            updated_text
      }
}

export const update_new_proj_description_AC = (updated_text) => {
      return{
            type: UPDATE_NEW_PROJ_DESCRIPTION,
            updated_text
      }
}

export const create_new_proj_AC = (project_data) => {
      return{
            type: CREATE_NEW_PROJECT,
            project_data
      }
}
