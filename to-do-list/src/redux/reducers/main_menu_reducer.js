const SHOW_HIDE_ADD_TASK = 'SHOW_HIDE_ADD_TASK';
const SHOW_HIDE_VIEW_TASK = 'SHOW_HIDE_VIEW_TASK';

let initial_state = {
    is_add_task_menu_hide: true,
    is_view_task_menu_hide: true,
};

export const main_menu_reducer = (state = initial_state, action) =>{
    switch(action.type) {
      
            case SHOW_HIDE_ADD_TASK: {
                  let is_hide = (state.is_add_task_menu_hide) ? false : true;
                  return{...state, is_add_task_menu_hide : is_hide}
            }

            case SHOW_HIDE_VIEW_TASK: {
                  let is_hide = (state.is_view_task_menu_hide) ? false : true;
                  return{...state, is_view_task_menu_hide : is_hide}
            }

            default:
            return state;
      }
};


export const show_hide_view_task_AC = () => {
      return{ 
              type : SHOW_HIDE_VIEW_TASK
        };
};


export const show_hide_add_task_AC = () => {
    return{ 
            type : SHOW_HIDE_ADD_TASK
      };
};

