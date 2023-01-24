import { Routes, Route, BrowserRouter } from "react-router-dom";
import EditStudent from "../EditStudent";
import Students from "../Students";

function RootRouter() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Students />} />
          <Route path="edit" element={<EditStudent />} />
        </Routes>
      </BrowserRouter>
      );
}

export default RootRouter;