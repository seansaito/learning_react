import React from 'react';

function Avatar({hash}) {
    console.log(hash);
    const url = `https://www.gravatar.com/avatar/${hash}`
    return (
        <img
        src={ url }
        className="avatar"
        alt="avatar"
        />
    )
}

export default Avatar;