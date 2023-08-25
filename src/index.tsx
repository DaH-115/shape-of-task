// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
// import { BrowserRouter } from 'react-router-dom';
// import { HelmetProvider } from 'react-helmet-async';
// import { Provider } from 'react-redux';
// import store from 'store';

// ReactDOM.render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <HelmetProvider>
//         <Provider store={store}>
//           <App />
//         </Provider>
//       </HelmetProvider>
//     </BrowserRouter>
//   </React.StrictMode>,
//   document.getElementById('root')
// );

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Provider } from 'react-redux';
import store from 'store';

const rootNode = document.getElementById('root')!;

ReactDOM.createRoot(rootNode).render(
  <React.StrictMode>
    <BrowserRouter>
      <HelmetProvider>
        <Provider store={store}>
          <App />
        </Provider>
      </HelmetProvider>
    </BrowserRouter>
  </React.StrictMode>
);
