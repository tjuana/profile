import React, { CSSProperties } from 'react';

const backgroundStyle: CSSProperties = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  zIndex: -1,
};

const BackgroundImage = () => {
  return (
    <picture>
      <source srcSet="/background.jpg" type="image/webp" />
      <img src="/background.jpg" alt="Background" style={backgroundStyle} />
    </picture>
  );
};

export default BackgroundImage;
