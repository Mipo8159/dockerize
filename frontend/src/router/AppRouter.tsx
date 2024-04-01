import React from "react";
import { Route, Routes } from "react-router-dom";
import TodosPage from "../pages/TodosPage";
import Todopage from "../pages/Todopage";

const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/todos" element={<TodosPage />} />
      <Route path="todos/:id" element={<Todopage />} />
    </Routes>
  );
};

export default AppRouter;
