import { useLayoutEffect, useState } from 'react';

type WindowSizeProps = 's' | 'm' | 'l';

export const useWindowSize = () => {
  const [size, setSize] = useState<WindowSizeProps>('l');
  useLayoutEffect(() => {
    function updateSize() {
      const { innerWidth } = window || {};
      if (innerWidth >= 1080 && size !== 'l') {
        setSize('l');
      } else if (innerWidth < 1080 && innerWidth >= 760 && size !== 'm') {
        setSize('m');
      } else if (innerWidth < 760 && size !== 's') {
        setSize('s');
      }
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
};
