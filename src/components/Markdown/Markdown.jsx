import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import marked from 'marked';

const Markdown = ({ value, className }) => (
  <div
    className={classnames('Markdown', className)}
    dangerouslySetInnerHTML={{ __html: marked(value) }}
  />
);

Markdown.displayName = 'Markdown';

Markdown.propTypes = {
  value: PropTypes.string.isRequired,
  className: PropTypes.any,
};

export default Markdown;
