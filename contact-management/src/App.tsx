import "./App.css";
import { Provider, useSelector } from "react-redux";
import store from "./state/store";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/shared/navbar/navbar";
import Contact from "./components/pages/contact";
import ChartsAndMaps from "./components/pages/chartAndMaps";
import Sidebar from "./components/shared/sidebar/sidebar";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <div className="flex flex-col h-screen">
            <Navbar />
            <div className="flex flex-grow h-full">
              <Sidebar />
              <div className="flex-grow p-4">
                <Routes>
                  <Route path="/" element={<Contact />} />
                  <Route path="/chartsAndMap" element={<ChartsAndMaps />} />
                </Routes>
              </div>
            </div>
          </div>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
