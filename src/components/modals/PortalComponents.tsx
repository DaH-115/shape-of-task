import { memo, ReactNode } from 'react';
import { createPortal } from 'react-dom';

const PortalComponents = ({ children }: { children: ReactNode }) => {
  const portalRoot = document.querySelector('#portal-root');
  if (!portalRoot) {
    return null;
  }
  return createPortal(children, portalRoot);
};

export default memo(PortalComponents);
