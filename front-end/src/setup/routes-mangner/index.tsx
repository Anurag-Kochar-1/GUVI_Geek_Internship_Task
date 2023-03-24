import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
const SignUpPage = lazy(() => import("../../pages/SignUpPage/SignUpPage"));
const LogInPage = lazy(() => import("../../pages/LogInPage/LogInPage"));

const index = () => {
  return (
    <Suspense fallback={<div>LOADING...</div>}>
      <Routes>
        <Route path="/"  element={<HomePage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LogInPage />} />
      </Routes>
    </Suspense>
  );
};

export default index;
