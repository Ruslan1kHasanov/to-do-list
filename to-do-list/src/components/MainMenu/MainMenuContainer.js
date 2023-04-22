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
        accept_projects : () => {
            dispatch(accept_projects_AC());
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (MainMenu);