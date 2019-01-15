import React from 'react'

export default props => {
    return(
        <div className={"col border rounded " + props.className} onClick={() => props.onClick(props.value)}>{props.value}</div>
    );
}

// export default Button ;