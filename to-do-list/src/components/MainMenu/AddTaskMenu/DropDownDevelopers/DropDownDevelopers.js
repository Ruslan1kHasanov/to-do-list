import "./DropDownDevelopers.scss";
import React, { useState, useRef, useEffect } from "react";


export default function DropDownDevelopers(props) {
    
    // console.log(props.selected_priority);

    const container = useRef();
    const [dropdownState, setDropdownState] = useState({ open: false });

    const handleDropdownClick = () =>
        setDropdownState({ open: !dropdownState.open });

    const handleClickOutside = (e) => {
        if (container.current && !container.current.contains(e.target)) {
            setDropdownState({ open: false });
    }
    };

    // attaches an eventListener to listen when componentDidMount
    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        // optionally returning a func in useEffect runs like componentWillUnmount to cleanup
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const ligth_priority = 'ligth';
    const medium_priority = 'medium';
    const high_priority = 'high';

    return (
        <div className='dropdown_container noselect' ref={container}>
            <div
                className='dropdown_btn'
                id={props.selected_priority}
                onClick={handleDropdownClick}>
                    {props.selected_priority}
            </div>
            {dropdownState.open && (
            <div className='dropdown_list_placeholder'>
                <ul className="dropdown_list">
                    <div className="task_priority task_priority_ligth" onClick={
                        () => {
                            props.set_priority(ligth_priority);
                            handleDropdownClick();
                        }}>ligth</div>
                    <div className="task_priority task_priority_medium" onClick={
                        () => {
                            props.set_priority(medium_priority);
                            handleDropdownClick();
                        }}>medium</div>
                    <div className="task_priority task_priority_high" onClick={
                        () => {
                            props.set_priority(high_priority);
                            handleDropdownClick();
                        }}>high</div>
                </ul>
            </div>
            )}
        </div>
    );
}
