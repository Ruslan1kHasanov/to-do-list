import React from "react";
import './AddContributor.scss';

let AddContributor = (props) => {
    let contrib_email_Ref = React.createRef();
    let is_admin_Ref = React.createRef();
    // console.log(props);
    return(
        <div className="add_contrib_wrapper">
            <div className="add_contrib_container">
                <div className="close_btn" onClick={() => props.show_hide_invite_contributor(false)}>x</div>
                <label htmlFor="contrib_email_input">Contributor email</label>
                <input type="text" id="contrib_email_input"
                        ref={ contrib_email_Ref }
                        value={props.new_contributor_email}
                        onChange={() => props.update_new_contrib_email_text(contrib_email_Ref.current.value)}/>
                <label htmlFor="is_admin_input" >Is Admin: </label>
                <input type="checkbox" name="is_admin" id="is_admin_input"
                        ref={ is_admin_Ref }
                        checked={props.is_contributor_admin}
                        onChange={() => props.update_is_admin_checkbox(is_admin_Ref.current.checked)}/> <br />
                <button onClick={() => props.invite_contributor()}>invite contributor</button>
            </div>
        </div>
    );
}

export default AddContributor;