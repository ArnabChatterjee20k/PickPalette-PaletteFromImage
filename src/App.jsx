import React from "react";
import Container from "./components/Container";
import Navbar from "./components/Navbar";
import ImageUpload from "./Page/ImageUpload/ImageUpload";
import FamousPalettes from "./Page/ImageUpload/Components/FamousPalettes";
import Divider from "./components/Divider";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Container>
        <Navbar />
        <ImageUpload />
        <div className="my-10">
          <Divider />
        </div>
        <FamousPalettes />
        <Footer />
      </Container>
    </>
  );
}
