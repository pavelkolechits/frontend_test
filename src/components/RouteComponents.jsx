import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ACTIONS } from "../redux/constants";
import { useEffect } from "react";
import { ArticlePage } from "./ArticlePage/ArticlePage";
import { HomePage } from "./HomePage";

export const RouteComponents = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: ACTIONS.GET_NEWS_REQUEST });
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/article/:id" element={<ArticlePage />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
};
