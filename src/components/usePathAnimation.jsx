import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './usePathAnimation.scss';

function usePathAnimation(path, cssVarible) {
  console.log('path', path);
  console.log('rerender', cssVarible);
  const [trigger, setTrigger] = useState(false);
  useEffect(() => {
    const pathCurrentLength = Math.ceil(path.current.getTotalLength());
    // do this in a better ways ??
    setTrigger(true);
    document.documentElement.style.setProperty(cssVarible, pathCurrentLength);
  }, []);
  return { trigger, setTrigger };
}

usePathAnimation.propTypes = {
  path: PropTypes.node.isRequired,
  cssVarible: PropTypes.string.isRequired,
};

export default usePathAnimation;
