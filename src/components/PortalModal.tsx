import React, { ReactNode } from 'react';
import ReactDOM from 'react-dom';

const PortalModal = ({ children }: { children: ReactNode }) => {
  const portalRoot = document.querySelector('#portal-root');

  if (!portalRoot) {
    return null;
  }

  return ReactDOM.createPortal(children, portalRoot);
};

export default React.memo(PortalModal);
