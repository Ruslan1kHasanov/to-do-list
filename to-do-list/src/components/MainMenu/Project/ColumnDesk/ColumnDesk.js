
let ColumnDesk = (props) => {
    
    console.log(props);

    return(
        <div className={"desk desk_"+`${props.desk_formal_name}`}>
            <div className="desk_top noselect">
                    <h2 className={"h2_"+`${props.desk_formal_name}`}>{props.desk_name}</h2>
                    <div className="add_task_btn" id={`${props.desk_formal_name}`+"_btn"} onClick={() => {props.show_hide_add_task_menu()}}></div>
            </div>
            <div className="tasks_placeholder">
                {props.task_list}
            </div>
        </div>
    );
}

export default ColumnDesk;