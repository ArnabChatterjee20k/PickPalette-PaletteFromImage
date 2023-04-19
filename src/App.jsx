import React from "react";
import Container from "./components/Container";
import Navbar from "./components/Navbar";
import ImageUpload from "./Page/ImageUpload/ImageUpload";

export default function App() {
  return (
    <>
      <Container>
        <Navbar />
        <ImageUpload />
      </Container>
    </>
  );
}
