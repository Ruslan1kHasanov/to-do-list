const ACCEPT_USER_PROJECTS = 'ACCEPT_USER_PROJECTS';
const SHOW_HIDE_CREATE_PROJ_WINDOW = 'SHOW_HIDE_CREATE_PROJ_WINDOW';


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
};

export const main_menu_reducer = (state = initial_state, action) =>{
    switch(action.type) {

            case ACCEPT_USER_PROJECTS: {
                  return{...state, project_list : action.project_list}
            }

            case SHOW_HIDE_CREATE_PROJ_WINDOW: {
                  return{...state, is_create_proj_window_open : action.is_open}
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
