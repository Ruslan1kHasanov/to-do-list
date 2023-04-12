const SHOW_HIDE_BURGER_MENU = 'SHOW_HIDE_BURGER_MENU';

let initial_state = {
    is_burger_menu_hide: true,
};

export const header_reducer = (state = initial_state, action) =>{
    switch(action.type) {
      
      case SHOW_HIDE_BURGER_MENU: {
            let is_hide = (state.is_burger_menu_hide) ? false : true;
            return{...state, is_burger_menu_hide : is_hide}
      }

      default:
      return state;
}
};

export const show_hide_burger_menu_AC = () => {
    return{ 
            type : SHOW_HIDE_BURGER_MENU
      };
};

