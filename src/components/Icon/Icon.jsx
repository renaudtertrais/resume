import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const Icon = props => (
  <i {...props} className={classnames(`fa fa-${props.name}`, props.className)} />
);

Icon.displayName = 'Icon';

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
};

Icon.defaultProps = {
  className: '',
};

export default Icon;
