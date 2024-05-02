import React, { Suspense, lazy, useEffect } from "react";
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

import DashboardNavbar from "./layout/DashboardNavbar";
import Dashboard from "./layout/Dashboard";
import projectViewerLinks from "./data/dashboard-links/projectViewerLinks.dashboard";
import projectSettingsLinks from "./data/dashboard-links/projectSettingsLinks.dashboard";

import Projects from "./Page/Projects";
import ProjectViewer from "./Page/Projects/components/ProjectViewer";

import ProjectPalette from "./Page/ProjectPalette";
import supabaseClient from "./supabaseClient";
import { AuthContextProvider } from "./context/AuthContext";
import { MemberModalContextProvider } from "./context/MemberModalContext";
import Signin from "./Page/Signin/Signin";
import Signup from "./Page/Signup/Signup";
import LivePreview from "./Page/LivePreview/LivePreview";

export default function App() {
  return (
    <ErrorBoundary FallbackComponent={Fallback}>
      <AuthContextProvider>
        <BrowserRouter>
          <MemberModalContextProvider>
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
                    <Route path="/preview" element={<LivePreview />} />
                    <Route path="*" element={<h1>Not found</h1>} />
                  </Route>

                  <Route path="/user" element={<DashboardNavbar />}>
                    <Route path="signin" element={<Signin />} />
                    <Route path="signup" element={<Signup />} />
                    <Route
                      path="dashboard"
                      element={<Dashboard sidebarLinks={projectViewerLinks} />}
                    >
                      <Route path="" element={<Navigate to="projects" />} />
                      <Route path="projects" element={<Projects />}>
                        <Route path="" element={<ProjectViewer />} />
                      </Route>
                      <Route
                        path="favourites"
                        element={<h1>{window.location.pathname}</h1>}
                      />
                      <Route
                        path="keys"
                        element={<h1>{window.location.pathname}</h1>}
                      />
                      <Route
                        path="docs"
                        element={<h1>{window.location.pathname}</h1>}
                      />
                    </Route>
                    <Route
                      path="projects/:id"
                      element={
                        <Dashboard sidebarLinks={projectSettingsLinks} />
                      }
                    >
                      <Route path="palette" element={<ProjectPalette />} />
                      <Route path="settings" element={<h1>settings</h1>} />
                      <Route path="usage" element={<h1>usage</h1>} />
                    </Route>
                  </Route>
                </Routes>
              </Suspense>
            </Container>
            <Footer />
          </MemberModalContextProvider>
        </BrowserRouter>
      </AuthContextProvider>
    </ErrorBoundary>
  );
}

function Fallback({ error }) {
  console.log(error);
  return <h1 className="text-lg font-bold">Something went wrong....</h1>;
}
