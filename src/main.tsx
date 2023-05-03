import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './assets/css/main.css';
import './assets/css/app.css';
import { IpContextProvider } from './context/IpContextProvider.tsx';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render( 
  <IpContextProvider>
    <App /> 
  </IpContextProvider>
  )
