import PropTypes from 'prop-types';

export const Finder = ({ filter, onChange }) => {
  return (
    <input type="text" name="filter" value={filter} onChange={onChange}></input>
  );
};

Finder.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
