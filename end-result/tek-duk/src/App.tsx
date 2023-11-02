import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import "./App.scss";
import Home from "./pages/Home/Home";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Home />
    </QueryClientProvider>
  );
};

export default App;
