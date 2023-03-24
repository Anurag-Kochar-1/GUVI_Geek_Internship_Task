import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
const SignUpPage = lazy(() => import("../../pages/SignUpPage/SignUpPage"));
const LogInPage = lazy(() => import("../../pages/LogInPage/LogInPage"));
const ProfilePage = lazy(() => import("../../pages/ProfilePage/ProfilePage"));

const index = () => {
  return (
    <Suspense
      fallback={
        <div className="w-full h-screen bg-white flex justify-center items-center">
          <AiOutlineLoading3Quarters
            size={"1.2rem"}
            className="text-brand animate-spin"
          />
        </div>
      }
    >
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LogInPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </Suspense>
  );
};

export default index;
