import { connect } from "react-redux";
import MainMenu from './MainMenu';
import { accept_projects_AC, show_hide_create_proj_window_AC } from '../../redux/reducers/main_menu_reducer';
import { set_displayed_project_AC } from '../../redux/reducers/project_reducer';

let mapStateToProps = (state) => {
    return{
        main_menu_content : state.main_menu
    }
}

let mapDispatchToProps = (dispatch) => {
    return{
        accept_projects : (project_list) => {
            dispatch(accept_projects_AC(project_list));
        },
        show_hide_create_proj_window : (is_open) => {
            dispatch(show_hide_create_proj_window_AC(is_open));
        },
        set_displayed_project : (displayed_project) => {
            dispatch(set_displayed_project_AC(displayed_project));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (MainMenu);