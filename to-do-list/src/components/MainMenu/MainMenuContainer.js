import { connect } from "react-redux";
import MainMenu from "./MainMenu";
import { show_hide_add_task_AC, show_hide_view_task_AC} from '../../redux/reducers/main_menu_reducer';


let mapStateToProps = (state) => {
    return{
        main_content : state.main_content
    }
}

let mapDispatchToProps = (dispatch) => {
    return{
        show_hide_add_task_menu : () => {
            dispatch(show_hide_add_task_AC());
        },

        show_hide_view_task_menu : () => {
            dispatch(show_hide_view_task_AC());
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (MainMenu);