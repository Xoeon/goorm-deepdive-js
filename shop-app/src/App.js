import { QueryClient, QueryClientProvider } from 'react-query';
import Router from './routes/Router';

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Router />
    </QueryClientProvider>
  );
}

export default App;
