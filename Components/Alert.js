import React from 'react'

function Alert(props) {
    return (
        <div style={{height: '50px'}}>
        {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show h-20`} role="alert">
            {props.alert.msg} 
        </div>}
        </div>
    )
}

export default Alert
