const SHOW_HIDE_ADD_TASK = 'SHOW_HIDE_ADD_TASK';
const SHOW_HIDE_VIEW_TASK = 'SHOW_HIDE_VIEW_TASK';
const SHOW_HIDE_CALENDAR = 'SHOW_HIDE_CALENDAR';
const SET_DATE_DEADLINE = 'SET_DATE_DEADLINE';
const SET_PRIORITY = 'SET_PRIORITY';
const ADD_NEW_DEV = 'ADD_NEW_DEV';
const CREATE_NEW_TASK = 'CREATE_NEW_TASK';
const UPDATE_NEW_REPO_NAME = 'UPDATE_NEW_REPO_NAME';
const UPDATE_NEW_SHORT_TEXT = 'UPDATE_NEW_SHORT_TEXT';
const UPDATE_NEW_TASK_TEXT = 'UPDATE_NEW_TASK_TEXT';
const SET_DISPLAYED_PROJECT = 'SET_DISPLAYED_PROJECT';
const SET_USER_EMAIL = 'SET_USER_EMAIL';
const ACCEPT_USER_DATA_PROJECT = 'ACCEPT_USER_DATA_PROJECT';
const CREATE_NEW_COLUMN = 'CREATE_NEW_COLUMN';
const UPDATE_NEW_COLUMN_NAME = 'UPDATE_NEW_COLUMN_NAME';
const SHOW_HIDE_CREATE_NEW_COLUMN = 'SHOW_HIDE_CREATE_NEW_COLUMN';
const SHOW_HIDE_INVITE_CONTRIBUTOR = 'SHOW_HIDE_INVITE_CONTRIBUTOR';
const UPDATE_NEW_CONTRIBUTOR_EMAIL = 'UPDATE_NEW_CONTRIBUTOR_EMAIL';
const UPDATE_IS_ADMIN_CHECKBOX = 'UPDATE_IS_ADMIN_CHECKBOX';
const ADD_CONTRIBUTOR = 'ADD_CONTRIBUTOR';
const SET_CONTRIBUTORS_LIST = 'SET_CONTRIBUTORS_LIST';
const SET_SELECTED_TASK_COLUMN_ID = 'SET_SELECTED_TASK_COLUMN_ID';
const SET_NOTES = 'SET_NOTES';

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
      selected_task_column_id: undefined,

      task_list : [ 
                  {
                        task_id : 1,
                        proj_name : "Admin-panel",
                        repo_name : "admni-panel-client",
                        task_priority : "ligth",
                        date_of_deadline : "16.04.23",
                        task_short_text : "Надо что-то сделать",
                        task_text : "",
                        task_status : "to_do",
                        id_component : 15,
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
                        repo_name : "admni-panel-client",
                        task_priority : "high",
                        date_of_deadline : "90.04.23",
                        task_short_text : "Второе тестовое to-do задание",
                        task_text : "<p> some text </p>",
                        task_status : "to_do",
                        id_component : 15,
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
                        task_id : 3,
                        proj_name : "Admin-panel",
                        repo_name : "admni-panel",
                        task_priority : "ligth",
                        date_of_deadline : "00.00.23",
                        task_short_text : "Типо сделанное задание",
                        task_text : "<p> some text </p>",
                        task_status : "done",
                        id_component : 20,
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
                              },
                              {
                                    value: 'Dopowehko2@mail.ru',
                                    label: 'Ksenya2',
                                    ava_link: null
                              }
                        ]
                  },
            
                  { 
                        task_id : 4,
                        proj_name : "Admin-panel",
                        repo_name : "admni-panel",
                        task_priority : "medium",
                        date_of_deadline : "24.04.23",
                        task_short_text : "Что-то сделаем !",
                        task_text : "<h1 style=\"text-align: center;\"><span style=\"background-color: rgb(191, 237, 210);\">asdasdasd</span></h1>\n<p><span style=\"background-color: rgb(191, 237, 210);\">Зравстыуйте коллега</span></p>",
                        task_status : "in_progress",
                        id_component : 15,
                        developers_array : [
                              {
                                    value: 'legorom@mail.ru',
                                    label: 'Ilya',
                                    ava_link: null
                              }
                        ]
                  }
            ],
      project_list : [
            {
                  project_name : "admin-panel",
                  project_id : 1
            },
      ],
      displayed_project: undefined,
      columns_list: [
            // {desk_formal_name: 'to_do', desk_name: 'To Do'},
            // {desk_formal_name: 'in_progress', desk_name: 'In Progress'},
            // {desk_formal_name: 'done', desk_name: 'Done'}
      ],

      new_column_name: '',
      is_create_new_column_open: false,
      
      is_invete_new_contributor_open: false,
      new_contributor_email: '',
      is_contributor_admin: false,
      contributors_list:[

      ],
};

export const project_reducer = (state = initial_state, action) =>{
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

            case CREATE_NEW_TASK: {
                  return{
                        ...state,
                        task_list: [...state.task_list, action.task],
                        selected_date: 'select date',
                        selected_priority: 'select prority',
                        selected_dev_arr: [],
                        repo_name: '',
                        task_short_text: '', 
                        task_text: '',
                  }
            }
            
            case SET_USER_EMAIL: {
                  return{...state, user_email: action.email}
            }

            case SET_DISPLAYED_PROJECT: {
                  return{...state, displayed_project: action.displayed_project}
            }

            case ACCEPT_USER_DATA_PROJECT: {
                  return{...state, columns_list: action.list}
            }

            case CREATE_NEW_COLUMN: {
                  return{...state, columns_list: [...state.columns_list, action.column_data], new_column_name: ''}
            }

            case UPDATE_NEW_COLUMN_NAME: {
                  return{...state, new_column_name: action.text}
            }

            case SHOW_HIDE_CREATE_NEW_COLUMN: {
                  return{...state, is_create_new_column_open: action.is_open}
            }

            case SHOW_HIDE_INVITE_CONTRIBUTOR: {
                  return{...state, is_invete_new_contributor_open: action.is_open}
            }

            case UPDATE_NEW_CONTRIBUTOR_EMAIL: {
                  return{...state, new_contributor_email: action.text}
            }

            case UPDATE_IS_ADMIN_CHECKBOX: {
                  return{...state, is_contributor_admin: action.is_admin}
            }

            case ADD_CONTRIBUTOR: {
                  return{
                        ...state,
                        dev_proj_list: [...state.dev_proj_list, action.data],
                        is_contributor_admin: false,
                        new_contributor_email: '',
                        is_invete_new_contributor_open: false
                  }
            }

            case SET_CONTRIBUTORS_LIST: {
                  return{...state, dev_proj_list: action.list}
            }

            case SET_SELECTED_TASK_COLUMN_ID: {
                  return{...state, selected_task_column_id: action.column_id}
            }

            case SET_NOTES: {
                  return{...state, task_list: action.notes}
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

export const show_hide_add_task_AC = () => {
      return{ 
            type : SHOW_HIDE_ADD_TASK,
      };
};

export const creating_new_task_AC = (task) => {
      return{ 
            type : CREATE_NEW_TASK,
            task
      };
};

export const set_displayed_project_AC = (displayed_project) => {
      return{
            type: SET_DISPLAYED_PROJECT,
            displayed_project
      }
}

export const set_user_email_AC = (email) => {
      return{
            type: SET_USER_EMAIL,
            email
      }
}

export const accept_user_data_project_AC = (list) => {
      return{
            type: ACCEPT_USER_DATA_PROJECT,
            list
      }
}

export const create_new_column_AC = (column_data) => {
      return{
            type: CREATE_NEW_COLUMN,
            column_data
      }
}

export const update_new_column_name_text_AC = (text) => {
      return{
            type: UPDATE_NEW_COLUMN_NAME,
            text
      }
}

export const show_hide_new_column_AC = (is_open) => {
      return{
            type: SHOW_HIDE_CREATE_NEW_COLUMN,
            is_open
      }
}

export const show_hide_invite_contributor_AC = (is_open) => {
      return{
            type: SHOW_HIDE_INVITE_CONTRIBUTOR,
            is_open
      }
}

export const update_new_contrib_email_text_AC = (text) => {
      return{
            type: UPDATE_NEW_CONTRIBUTOR_EMAIL,
            text
      }
}

export const update_is_admin_checkbox_AC = (is_admin) => {
      return{
            type: UPDATE_IS_ADMIN_CHECKBOX,
            is_admin
      }
}

export const add_contributor_AC = (data) => {
      return{
            type: ADD_CONTRIBUTOR,
            data
      }
}

export const set_contributors_list_AC = (list) => {
      return{
            type: SET_CONTRIBUTORS_LIST,
            list
      }
}

export const set_selected_task_column_id_AC = (column_id) => {
      return{
            type: SET_SELECTED_TASK_COLUMN_ID,
            column_id
      }
}

export const set_notes_AC = (notes) => {
      return{
            type: SET_NOTES,
            notes
      }
}