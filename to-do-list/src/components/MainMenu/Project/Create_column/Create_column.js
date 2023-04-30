import React from "react";
import './Create_column.scss';

let Create_column = (props) => {
    let column_name_Ref = React.createRef();
    // console.log(props);
    return(
        <div className="create_new_column_wrapper">
            <div className="create_new_column_container">
                <div className="close_btn" onClick={() => props.show_hide_new_column(false)}>x</div>
                <label htmlFor="colimn_name">Наименование колонки</label>
                <input type="text" id="colimn_name"
                        ref={ column_name_Ref }
                        value={ props.new_column_name }
                        onChange={() => props.update_new_column_name_text(column_name_Ref.current.value)}/>
                <button onClick={() => {
                        props.create_new_column(props.displayed_project, props.new_column_name);
                        props.show_hide_new_column(false);
                    }}>создать колонку</button>
            </div>
        </div>
    );
}

export default Create_column;