import { ReactElement } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { QueryClientProvider, QueryClient } from 'react-query';

import { UserAuthContextProvider } from './context/UserAuthContext';
import { ForgotPasswordContextProvider } from './context/ForgotPasswordContext';

import Routes from './routes/routes';
import GlobalStyles from './styles/global';
import 'react-toastify/dist/ReactToastify.css';
import './styles/fonts.css';

const queryClient = new QueryClient();

function App(): ReactElement {
  return (
    <BrowserRouter>
      <ForgotPasswordContextProvider>
        <UserAuthContextProvider>
          <QueryClientProvider client={queryClient}>
            <Routes />
            <GlobalStyles />
          </QueryClientProvider>
        </UserAuthContextProvider>
        <ToastContainer />
      </ForgotPasswordContextProvider>
    </BrowserRouter>
  );
}

export default App;
