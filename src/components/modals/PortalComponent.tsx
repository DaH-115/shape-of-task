import { memo, ReactNode } from 'react';
import { createPortal } from 'react-dom';

const Portal = ({ children }: { children: ReactNode }) => {
  const portalRoot = document.getElementById('portal-root');
  if (!portalRoot) {
    return null;
  }
  return createPortal(children, portalRoot);
};

export default memo(Portal);
