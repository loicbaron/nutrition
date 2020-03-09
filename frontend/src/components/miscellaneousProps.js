import PropTypes from 'prop-types';

export const anyNumberOfChildren = PropTypes.oneOfType([
  PropTypes.arrayOf(PropTypes.node),
  PropTypes.arrayOf(PropTypes.element),
  PropTypes.node,
  PropTypes.element,
]);

export const reactRouterMatch = PropTypes.shape({
  params: PropTypes.object.isRequired,
  isExact: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
});

export const formatTextWithPayload = PropTypes.shape({
  key: PropTypes.string.isRequired,
  values: PropTypes.objectOf(PropTypes.string),
});
