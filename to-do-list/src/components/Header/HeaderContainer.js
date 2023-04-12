import { connect } from "react-redux";
import Header from "./Header";
import { show_hide_burger_menu_AC } from '../../redux/reducers/header_reducer';


let mapStateToProps = (state) => {
    return{
        header : state.header
    }
}

let mapDispatchToProps = (dispatch) => {
    return{
        show_hide_burger_menu : () => {
            dispatch(show_hide_burger_menu_AC());
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Header);