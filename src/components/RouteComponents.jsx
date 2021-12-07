import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ArticlePage } from "./ArticlePage/ArticlePage";
import { HomePage } from "./HomePage";

export const RouteComponents = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/article/:id" element={<ArticlePage />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
};
