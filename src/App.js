import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Books from "./views/Books";
import Characters from "./views/Characters";
import Book from "./views/Book";
import {
  QueryClient,
  QueryClientProvider,
} from "react-query";
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  return (
    <QueryClientProvider className="app" client={queryClient}>
      <ToastContainer />
      <BrowserRouter>
        <div className=" font-sans">
          <Switch>
            <Route exact path="/" component={Books} />
            <Route exact path="/characters" component={Characters} />
            <Route exact path="/books/:id" component={Book} />
          </Switch>
        </div>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
