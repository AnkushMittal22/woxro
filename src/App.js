import Header from "./components/header/Header";

import AllPage from "./components/allPage/AllPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" exect element={<AllPage />} exact />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
