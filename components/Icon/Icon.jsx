import React from 'react';
import classnames from 'classnames';

const Icon = props => (
  <i {...props} className={classnames(`fa fa-${props.name}`, props.className)} />
);

Icon.displayName = 'Icon';

Icon.propTypes = {
  name: React.PropTypes.string.isRequired,
  className: React.PropTypes.string,
};

Icon.defaultProps = {
  className: '',
};

export default Icon;
