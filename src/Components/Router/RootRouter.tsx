import { Routes, Route, BrowserRouter } from "react-router-dom";
import AddStudent from "../AddStudent";
import EditStudent from "../EditStudent";
import Students from "../Students";

function RootRouter() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Students />} />
          <Route path="edit" element={<EditStudent />} />
          <Route path="add" element={<AddStudent />} />
        </Routes>
      </BrowserRouter>
      );
}

export default RootRouter;