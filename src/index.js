import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './componets/Main';
import { ConfigProvider } from 'antd';
import { Provider } from 'react-redux';
import srote from './redux';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ConfigProvider>
      <Provider store={srote}>
        <App />
      </Provider>
    </ConfigProvider>
  </React.StrictMode>
);
