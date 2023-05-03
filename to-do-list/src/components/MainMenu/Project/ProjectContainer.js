import { connect } from "react-redux";
import Project from "./Project";
import { show_hide_add_task_AC,
    show_hide_view_task_AC,
    show_hide_calendar_AC,
    set_new_deadline_AC,
    set_priority_AC,
    add_dev_to_task_AC,
    update_new_repo_name_AC,
    update_new_short_text_AC,
    update_new_task_text_AC,
    creating_new_task_AC,
    accept_user_data_project_AC,
    create_new_column_AC,
    update_new_column_name_text_AC,
    show_hide_new_column_AC,
    show_hide_invite_contributor_AC,
    update_new_contrib_email_text_AC,
    update_is_admin_checkbox_AC,
    add_contributor_AC} from '../../../redux/reducers/project_reducer';


let mapStateToProps = (state) => {
    return{
        main_content : state.main_content,
    }
}

let mapDispatchToProps = (dispatch) => {
    return{
        show_hide_add_task_menu : () => {
            dispatch(show_hide_add_task_AC());
        },

        show_hide_view_task_menu : (task_id) => {
            dispatch(show_hide_view_task_AC(task_id));
        },

        show_hide_calendar : () => {
            dispatch(show_hide_calendar_AC());
        },

        set_new_deadline : (date_of_deadline) => {
            dispatch(set_new_deadline_AC(date_of_deadline));
        },

        set_priority : (selected_prority) => {
            dispatch(set_priority_AC(selected_prority));
        },

        add_new_dev : (added_dev) => {
            dispatch(add_dev_to_task_AC(added_dev));
        },

        update_repo_name : (updated_repo) => {
            dispatch(update_new_repo_name_AC(updated_repo));
        },

        update_short_text : (updated_text) => {
            dispatch(update_new_short_text_AC(updated_text));
        },

        update_task_text : (apdated_text) => {
            dispatch(update_new_task_text_AC(apdated_text));
        },

        creating_new_task : () => {
            dispatch(creating_new_task_AC());
        },

        accept_user_data_project : (proj_data) => {
            dispatch(accept_user_data_project_AC(proj_data));
        },

        create_new_column : (column_data) => {
            dispatch(create_new_column_AC(column_data));
        },

        update_new_column_name_text : (text) => {
            dispatch(update_new_column_name_text_AC(text));
        },

        show_hide_new_column : (is_open) => {
            dispatch(show_hide_new_column_AC(is_open));
        },

        show_hide_invite_contributor : (is_open) => {
            dispatch(show_hide_invite_contributor_AC(is_open));
        },

        update_new_contrib_email_text : (text) => {
            dispatch(update_new_contrib_email_text_AC(text));
        },

        update_is_admin_checkbox : (is_admin) => {
            dispatch(update_is_admin_checkbox_AC(is_admin));
        },

        add_contributor : (data) => {
            dispatch(add_contributor_AC(data));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Project);