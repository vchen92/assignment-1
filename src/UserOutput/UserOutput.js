import React from 'react';

const userOutput = (props) => {
    return (
        <div>
            <p>{props.username}</p>
            <p>This is Line 1.</p>
            <p>This is Line 2.</p>
        </div>
    );
}

export default userOutput