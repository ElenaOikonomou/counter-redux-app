import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client';
import './index.css'
import App from './App.js'
import { Provider } from 'react-redux';  //allows us to connect our redux store to our react app
import { store } from './state/store';

const root = document.getElementById('root');
if (root) {
  ReactDOM.createRoot(root).render(
    <StrictMode>
      <Provider store={store}> 
        <App />
      </Provider> 
    </StrictMode>
  );
} else {
  console.error('Root element not found!');
}
//our store since we added the provider can now  be accessible by any component within our App 

