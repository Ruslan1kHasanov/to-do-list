import React from "react";
import './AddContributor.scss';

let AddContributor = (props) => {
    let contrib_email_Ref = React.createRef();
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
                <button>invite contributor</button>
            </div>
        </div>
    );
}

export default AddContributor;