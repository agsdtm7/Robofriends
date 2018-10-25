import React from 'react';

const Card = ({ id, username, name, email }) => {
    return (
        <div className='tc bg-light-green dib br3 ma2 grow bw2 shadow-5'>
            <img id={id} src={`https://robohash.org/${username}?200x200`} alt="robots" />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;