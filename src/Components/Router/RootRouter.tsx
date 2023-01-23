import { Router, Routes, Route, BrowserRouter } from "react-router-dom";
import * as React from 'react';
import { Component } from 'react';
import Students from "../Students";
import EditStudent from "../EditStudent";
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