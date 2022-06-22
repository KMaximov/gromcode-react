import React, { useEffect, useState } from 'react';

const Dimensions = () => {
  const [demensions, setDimensions] = useState({
    width: null,
    height: null,
  });

  useEffect(() => {
    const { innerHeight, innerWidth } = window;
    setDimensions({ width: innerWidth, height: innerHeight });
    const handleResize = e => {
      const { innerHeight, innerWidth } = e.target;
      setDimensions({ width: innerWidth, height: innerHeight });
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  // якщо передаємо пустий масив то юсефект працює як компонентдідмаунт

  const { width, height } = demensions;
  return <div className="dimensions">{`${width}px - ${height}px`}</div>
};

export default Dimensions;
