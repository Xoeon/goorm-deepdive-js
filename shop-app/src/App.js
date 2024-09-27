import { QueryClient, QueryClientProvider } from 'react-query';
import Router from './routes/Router';
import { Provider } from 'react-redux';
import store from './store';
import { BottomSheet } from 'react-spring-bottom-sheet';

function App() {
  const queryClient = new QueryClient();

  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <Router />
      </QueryClientProvider>
      <BottomSheet>hey</BottomSheet>
    </Provider>
  );
}

export default App;
