import React, { Suspense, lazy } from "react";
import Container from "./components/Container";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
// import ImageUpload from "./Page/ImageUpload/ImageUpload";
// import Home from "./Page/Home/assets/Home";

const Home = lazy(() => import("./Page/ImageUpload/ImageUpload"));
const ImageUpload = lazy(() => import("./Page/ImageUpload/ImageUpload"));

import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <>
      <Container>
        <Navbar />
        <BrowserRouter>
          <Suspense fallback={<h1>Loading....</h1>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/generate" element={<ImageUpload />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
        <Footer />
      </Container>
    </>
  );
}
