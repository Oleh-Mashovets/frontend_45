import React from "react";
import { Routes, Route} from "react-router-dom";

import List from "./pages/List";
import Albums from "./pages/Albums";
import Photos from "./pages/Photos";

export default function App() {
  return (
      <Routes>
          <Route path="/" element={<List/>} />
          <Route path="/albums/:userId" element={<Albums/>} />
          <Route path="/photos/:albumId" element={<Photos/>} />
      </Routes>
  );
}
