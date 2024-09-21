import React from "react";

function Alert(props) {
    const capitalize = (word) => {
        const lower = word.toLowerCase();
        // const lower = word;
        return (lower.charAt(0).toUpperCase() + lower.slice(1));
    }
    return(
        <div style={{height: '60px'}}>
        {props.alert.type && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            <strong>{capitalize(props.alert.type)}: </strong>{props.alert.msg}
        </div>}
        </div>
    )
}

export default Alert;