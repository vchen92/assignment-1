import React from 'react';

import './UserOutput.css';

const userOutput = (props) => {
    return (
        <div>
            <p>{props.username}</p>
            <p className="line1">This is Line 1.</p>
            <p className="line2">This is Line 2.</p>
        </div>
    );
}

export default userOutput