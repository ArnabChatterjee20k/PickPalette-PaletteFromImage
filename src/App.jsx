import React, { Suspense, lazy } from "react";
import Container from "./components/Container";
import Navbar from "./layout/Navbar";
import Footer from "./components/Footer";
// import ImageUpload from "./Page/ImageUpload/ImageUpload";
// import Home from "./Page/Home/assets/Home";

const Home = lazy(() => import("./Page/Home/Home"));
const ImageUpload = lazy(() => import("./Page/ImageUpload/ImageUpload"));
const Explore = lazy(() => import("./Page/Explore/Explore"));

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import FallbackLoader from "./loaders/FallbackLoader";

import { ErrorBoundary } from "react-error-boundary";
import NewsLetter from "./Page/NewsLetter/NewsLetter";

import { Toaster } from "react-hot-toast";
import Feedback from "./Page/Feedback/Feedback";

import Dashboard from "./Page/Dashboard/";
import DashboardNavbar from "./layout/DashboardNavbar";

export default function App() {
  return (
    <ErrorBoundary FallbackComponent={Fallback}>
      <BrowserRouter>
        <Toaster toastOptions={{ position: "bottom-right" }} />
        <Container>
          <Suspense fallback={<FallbackLoader />}>
            <Routes>
              <Route element={<Navbar />}>
                <Route path="/" element={<Home />} />
                <Route path="/generate" element={<ImageUpload />} />
                <Route path="/palettes" element={<Explore />} />
                <Route path="/feedback" element={<Feedback />} />
                <Route path="/subscribe">
                  <Route path="newsletter" element={<NewsLetter />} />
                </Route>
                <Route path="*" element={<h1>Not found</h1>} />
              </Route>

              <Route path="/user" element={<DashboardNavbar />}>
                <Route path="dashboard" element={<Dashboard />}>
                  <Route path="" element={<Navigate to="projects" />} />
                  <Route path="projects" element={<h1>{window.location.pathname}</h1>} />
                  <Route
                    path="favourites"
                    element={<h1>{window.location.pathname}</h1>}
                  />
                  <Route path="docs" element={<h1>{window.location.pathname}</h1>} />
                </Route>
              </Route>
            </Routes>
          </Suspense>
        </Container>
        <Footer />
      </BrowserRouter>
    </ErrorBoundary>
  );
}

function Fallback({ error }) {
  console.log(error);
  return <h1 className="text-lg font-bold">Something went wrong....</h1>;
}
