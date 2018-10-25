import React from 'react';

const SearchBox = ({ searchfield, searchChange }) => {
    return (
        <input
            className='pa ba b--green bg-lightest-blue'
            type='search'
            placeholder='search robots'
            onChange={searchChange}
        />
    );
}

export default SearchBox;