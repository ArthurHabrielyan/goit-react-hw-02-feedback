import PropTypes from 'prop-types';

export const Section = ({ children, title }) => {
  return (
    <>
      <div>
        <h2>{title}</h2>
        {children}
      </div>
    </>
  );
};

Section.propTypes = {
  title: PropTypes.string,
};
