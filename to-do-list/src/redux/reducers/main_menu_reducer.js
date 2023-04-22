const ACCEPT_USER_PROJECTS = 'ACCEPT_USER_PROJECTS';

let initial_state = {
    project_list : [
            {
                  project_name : "admin-panel",
                  project_id : 1
            },
            {
                project_name : "some-proj",
                project_id : 2
            }
      ],
};

export const main_menu_reducer = (state = initial_state, action) =>{
    switch(action.type) {

            case ACCEPT_USER_PROJECTS: {
                  return{...state, project_list : action.project_list}
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
