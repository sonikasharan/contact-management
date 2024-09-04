import "./App.css";
import { Provider, useSelector } from "react-redux";
import store from "./state/store";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./components/shared/navbar/navbar";
import Contact from "./components/pages/contact";
import ChartsAndMaps from "./components/pages/chartAndMaps";
import Sidebar from "./components/shared/sidebar/sidebar";
import { QueryClient, QueryClientProvider } from "react-query";

function App() {
  const queryClient = new QueryClient();
  return (
    <div className="App">
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <BrowserRouter basename="/contact-management">
            <div className="flex flex-col h-screen max-h-screen">
              <Navbar />
              <div className="flex flex-grow h-full w-full">
                <Sidebar />
                <div className="flex-grow p-4 w-full">
                  <Routes>
                    <Route path="/" element={<Navigate to="/contact" />} />
                    <Route path="/contact" element={<Contact />} />

                    <Route path="/chartsAndMap" element={<ChartsAndMaps />} />
                  </Routes>
                </div>
              </div>
            </div>
          </BrowserRouter>
        </QueryClientProvider>
      </Provider>
    </div>
  );
}

export default App;
