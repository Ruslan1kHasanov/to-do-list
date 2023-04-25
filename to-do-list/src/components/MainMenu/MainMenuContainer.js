import { connect } from "react-redux";
import MainMenu from './MainMenu';
import { accept_projects_AC } from '../../redux/reducers/main_menu_reducer';

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
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (MainMenu);