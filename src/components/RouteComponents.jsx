import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
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
        <Route index element={<HomePage />} />
        <Route path="/article/:id" element={<ArticlePage />} />
      </Routes>
    </BrowserRouter>
  );
};
