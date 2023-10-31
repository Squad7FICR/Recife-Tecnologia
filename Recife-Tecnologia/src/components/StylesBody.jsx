import React, { useEffect } from 'react';

const withBodyStyles = (WrappedComponent, styles) => {
  return (props) => {
    useEffect(() => {
      const originalStyles = document.body.style.cssText;

      document.body.style.cssText = styles;
      return () => {
        document.body.style.cssText = originalStyles;
      };
    }, []);

    return <WrappedComponent {...props} />;
  };
};

export default withBodyStyles;
