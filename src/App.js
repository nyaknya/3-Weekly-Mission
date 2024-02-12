import { BrowserRouter, Route, Routes } from "react-router-dom";

import FolderPage from "./pages/FolderPage/FolderPage";
import SharedPage from "./pages/SharedPage/SharedPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/shared" element={<SharedPage />} />
        <Route path="/folder" element={<FolderPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
