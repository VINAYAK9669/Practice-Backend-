import HomePage from "./Pages/HomePage";
import JobDetailPage from "./Pages/JobDetailPage";
import Register from "./Pages/Register";
import Login from "./Pages/Login";

import "./index.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

// TODO: CONFIGURE REACT QUERY
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

// *Create a client
const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route index path="/" element={<HomePage />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/job" element={<JobDetailPage />}></Route>
            <Route path="*" element={<p>Page Not Found</p>} />
          </Routes>
        </BrowserRouter>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  );
}

export default App;

/*

TODO: Configure Tanstack Query
      - create client using "QueryClient()" outside the main function
      - Provide client to the main Application using "QueryClientProvider"
*/
