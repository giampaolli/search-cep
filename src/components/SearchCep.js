import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';

const SearchCep = ({ handleSubmit, isFetching }) => (
    <form onSubmit={handleSubmit} className="search-container">
        <TextField name="code" label="code" margin="normal" />
        <button className={'search-container__button'} disabled={isFetching}>
            { isFetching ? 'Searching...' :'Search address'}
        </button>
    </form>
);
SearchCep.defaultProps = {
    isFetching: false,
};

SearchCep.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    isFetching: PropTypes.bool
};

export default SearchCep;
