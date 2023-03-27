import React from 'react';
import PropTypes from 'prop-types';
import { FilterLabel, FilterInput } from 'components/Filter/Filter.styled';
const onBlur = e => {
  e.currentTarget.value = '';
};
export const Filter = ({ onFindInput }) => {
  return (
    <>
      <FilterLabel htmlFor="find">Find contacts by name</FilterLabel>
      <FilterInput
        type="text"
        name="find"
        id="find"
        onChange={onFindInput}
        onBlur={onBlur}
      />
    </>
  );
};
Filter.propTypes = {
  onFindInput: PropTypes.func.isRequired,
};
