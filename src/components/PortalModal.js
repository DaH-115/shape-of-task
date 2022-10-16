import ReactDOM from 'react-dom';

const PortalModal = ({ children }) => {
  const portalRoot = document.querySelector('#portal-root');

  return ReactDOM.createPortal(children, portalRoot);
};

export default PortalModal;
