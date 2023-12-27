import React from 'react';
import ReactDOM from 'react-dom';

const PortalComponents = ({ children }: { children: React.ReactNode }) => {
  const portalRoot = document.querySelector('#portal-root');

  if (!portalRoot) {
    return null;
  }

  return ReactDOM.createPortal(children, portalRoot);
};

export default React.memo(PortalComponents);
