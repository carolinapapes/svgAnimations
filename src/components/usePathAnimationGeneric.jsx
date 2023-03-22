import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import './PathAnimation.scss';

function usePathAnimationGeneric(path, cssVarible) {
  const [length, setLength] = useState('0');
  document.documentElement.style.setProperty(cssVarible, Math.ceil(length));

  useEffect(() => {
    const pathCurrentLength = Math.ceil(path.current.getTotalLength());
    setLength(pathCurrentLength);
  }, []);
  return { length };
}

usePathAnimationGeneric.propTypes = {
  path: PropTypes.node.isRequired,
  cssVarible: PropTypes.string.isRequired,
};

export default usePathAnimationGeneric;
