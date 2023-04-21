const SHOW_HIDE_ADD_TASK = 'SHOW_HIDE_ADD_TASK';
const SHOW_HIDE_VIEW_TASK = 'SHOW_HIDE_VIEW_TASK';
const SHOW_HIDE_CALENDAR = 'SHOW_HIDE_CALENDAR';
const SET_DATE_DEADLINE = 'SET_DATE_DEADLINE';
const SET_PRIORITY = 'SET_PRIORITY';
const ADD_NEW_DEV = 'ADD_NEW_DEV';
// const CREATE_NEW_TASK = 'CREATE_NEW_TASK';
const UPDATE_NEW_REPO_NAME = 'UPDATE_NEW_REPO_NAME';
const UPDATE_NEW_SHORT_TEXT = 'UPDATE_NEW_SHORT_TEXT';
const UPDATE_NEW_TASK_TEXT = 'UPDATE_NEW_TASK_TEXT'; 


let initial_state = {
      proj_name: "Admin-panel",
      is_add_task_menu_hide: true,
      is_view_task_menu_hide: true,
      displayed_task_id: undefined,
      
      is_calendar_hide: true,
      selected_date: 'select date',
      selected_priority: 'select prority',
      dev_proj_list: [
            {
                  value: 'KHAZARUS@GMAIL.COM',
                  label: 'Ruslan k`H',
                  ava_link: null
            },
            {
                  value: 'Dopowehko@mail.ru',
                  label: 'Ksenya',
                  ava_link: null
            },
            {
                  value: 'legorom@mail.ru',
                  label: 'Ilya',
                  ava_link: null
            }
      ],
      selected_dev_arr: [],
      repo_name: '',
      task_short_text: '', 
      task_text: '',


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
                        developers_array : [
                              {
                                    value: 'KHAZARUS@GMAIL.COM',
                                    label: 'Ruslan k`H',
                                    ava_link: null
                              },
                              {
                                    value: 'Dopowehko@mail.ru',
                                    label: 'Ksenya',
                                    ava_link: null
                              }
                        ]
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
                        developers_array : [
                              {
                                    value: 'legorom@mail.ru',
                                    label: 'Ilya',
                                    ava_link: null
                              }
                        ]
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

            case ADD_NEW_DEV: {
                  return{...state, selected_dev_arr : action.added_dev}
            }

            case UPDATE_NEW_REPO_NAME: {
                  return{...state, repo_name : action.repo_name}
            }

            case UPDATE_NEW_SHORT_TEXT: {
                  return{...state, task_short_text : action.task_short_text}
            }

            case UPDATE_NEW_TASK_TEXT: {
                  return{...state, task_text : action.task_text}
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

export const add_dev_to_task_AC = (added_dev) => {
      return{
            type : ADD_NEW_DEV,
            added_dev
      };
};


export const update_new_repo_name_AC = (repo_name) => {
      return{
            type : UPDATE_NEW_REPO_NAME,
            repo_name : repo_name,
      };
};

export const update_new_short_text_AC = (task_short_text) => {
      return{
            type : UPDATE_NEW_SHORT_TEXT,
            task_short_text : task_short_text,
      };
};

export const update_new_task_text_AC = (task_text) => {
      return{
            type : UPDATE_NEW_TASK_TEXT,
            task_text : task_text,
      };
};

// export const add_new_task_AC = (proj_name, repo_name, task_short_text, task_text) => {
//       return{
//             type : ADD_NEW_TASK,
//       };
// };


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

export const show_hide_add_task_AC = () => {
      return{ 
            type : SHOW_HIDE_ADD_TASK,
      };
};