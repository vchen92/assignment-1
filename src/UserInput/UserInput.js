import React from 'react';

const userInput = (props) => {
    const style = {
        backgroundColor: 'red',
        fontSize: '18px',
        borderColor: 'green'
    }

    return (
        <div>
            <input style={style} type="text" onChange={props.changed} value={props.name}/>
        </div>
    );
}

export default userInput