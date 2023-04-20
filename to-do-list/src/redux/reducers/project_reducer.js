const SHOW_HIDE_ADD_TASK = 'SHOW_HIDE_ADD_TASK';
const SHOW_HIDE_VIEW_TASK = 'SHOW_HIDE_VIEW_TASK';
const SHOW_HIDE_CALENDAR = 'SHOW_HIDE_CALENDAR';
const SET_DATE_DEADLINE = 'SET_DATE_DEADLINE';
const SET_PRIORITY = 'SET_PRIORITY';


let initial_state = {
      proj_name: "Admin-panel",
      is_add_task_menu_hide: true,
      is_view_task_menu_hide: true,
      displayed_task_id: undefined,
      is_calendar_hide: true,
      selected_date: 'select date',
      selected_priority: 'select prority',
      task_list : [ 
                  {
                        task_id : 1,
                        proj_name : "Admin-panel",
                        repo_name : "admni-panel-client",
                        task_priority : "ligth",
                        date_of_deadline : "16.04.23",
                        task_short_text : "Надо что-то сделать",
                        task_text : "",
                        task_status : "to-do",
                        developers_array : ["khazarus, Dopowehko"]
                  },
            
                  { 
                        task_id : 2,
                        proj_name : "Admin-panel",
                        repo_name : "admni-panel",
                        task_priority : "medium",
                        date_of_deadline : "24.04.23",
                        task_short_text : "Что-то сделаем !",
                        task_text : "",
                        task_status : "In progress",
                        developers_array : ["Iliya", "Dimetresky"]
                  }
            ]
};

export const main_menu_reducer = (state = initial_state, action) =>{
    switch(action.type) {
      
            case SHOW_HIDE_ADD_TASK: {
                  let is_hide = (state.is_add_task_menu_hide) ? false : true;
                  return{...state, is_add_task_menu_hide : is_hide}
            }

            case SHOW_HIDE_VIEW_TASK: {
                  let is_hide = (state.is_view_task_menu_hide) ? false : true;
                  return{...state, is_view_task_menu_hide : is_hide, displayed_task_id : action.task_id}
            }

            case SHOW_HIDE_CALENDAR: {
                  let is_hide = (state.is_calendar_hide) ? false : true;
                  return{...state, is_calendar_hide : is_hide}
            }

            case SET_DATE_DEADLINE: {
                  return{...state, selected_date : action.date_of_deadline}
            }

            case SET_PRIORITY: {
                  return{...state, selected_priority : action.selected_priority}
            }

            default:
            return state;
      }
};


export const show_hide_view_task_AC = (task_id) => {
      return{ 
              type : SHOW_HIDE_VIEW_TASK,
              task_id
      };
};

export const show_hide_calendar_AC = () => {
      return{ 
              type : SHOW_HIDE_CALENDAR
      };
};

export const set_new_deadline_AC = (date_of_deadline) => {
      return{ 
              type : SET_DATE_DEADLINE,
              date_of_deadline
      };
};

export const set_priority_AC = (selected_priority) => {
      return{ 
              type : SET_PRIORITY,
              selected_priority
      };
};


// export const show_hide_add_task_AC = (proj_name, repo_name, task_priority, date_of_deadline,
//                                      task_short_text, task_text, task_status, developers_array) => {
//     return{ 
//             type : SHOW_HIDE_ADD_TASK,
//             proj_name,
//             repo_name,
//             task_priority,
//             date_of_deadline,
//             task_short_text,
//             task_text,
//             task_status,
//             developers_array
//       };
// };

export const show_hide_add_task_AC = (proj_name, repo_name, task_priority, date_of_deadline,
      task_short_text, task_text, task_status, developers_array) => {
return{ 
      type : SHOW_HIDE_ADD_TASK,
      repo_name,
};
};