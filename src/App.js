import { Outlet } from 'react-router-dom';
import SearchHeader from './components/SearchHeader';
import { QueryClient, QueryClientProvider } from 'react-query';
import { YoutubeApiProvider } from './context/YoutubeApiContext';
import { LoginContextProvider } from './context/LoginContext';

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <LoginContextProvider>
        <SearchHeader />
        <YoutubeApiProvider>
          <QueryClientProvider client={queryClient}>
            <Outlet />
          </QueryClientProvider>
        </YoutubeApiProvider>
      </LoginContextProvider>
    </>
  );
}

export default App;
