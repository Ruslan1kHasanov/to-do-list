
let ColumnDesk = (props) => {
    
    // console.log(props.task_list);

    let current_task_list = props.task_list.map(task => { let res = (task.props.state.task.id_component === props.id_component) ? 
        task
        : <></>;
    return res;});

    // console.log(current_task_list);

    return(
        <div className={"desk desk_"+`${props.desk_formal_name}`}>
            <div className="desk_top noselect">
                    <h2 className={"h2_"+`${props.desk_formal_name}`}>{props.desk_name}</h2>
                    <div className="add_task_btn" id={`${props.desk_formal_name}`+"_btn"} onClick={() => {
                        props.show_hide_add_task_menu();
                        props.set_selected_task_column_id(props.id_component);
                    }}></div>
            </div>
            <div className="tasks_placeholder">
                {current_task_list}
            </div>
        </div>
    );
}

export default ColumnDesk;