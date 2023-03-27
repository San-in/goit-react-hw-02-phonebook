import React from 'react';
import PropTypes from 'prop-types';
import {
  StyledContactItem,
  StyledContactBtn,
} from 'components/ContactItem/ContactItem.styled';

export const ContactItem = ({ item, deleteContact }) => {
  return (
    <StyledContactItem>
      <p>
        {item.name}: {item.number}
      </p>
      <StyledContactBtn type="button" onClick={deleteContact} id={item.id}>
        Delete
      </StyledContactBtn>
    </StyledContactItem>
  );
};

ContactItem.propTypes = {
  deleteContact: PropTypes.func.isRequired,
  item: PropTypes.exact({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
};
