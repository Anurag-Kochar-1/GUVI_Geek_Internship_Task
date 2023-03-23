import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

const SignUpPage = lazy(() => import("../../pages/SignUpPage/SignUpPage"));

const index = () => {
  return (
    <Suspense fallback={<div>LOADING...</div>}>
      <Routes>
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </Suspense>
  );
};

export default index;
