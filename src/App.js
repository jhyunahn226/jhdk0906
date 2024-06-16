import "./App.css";
import React, { useState, useEffect } from "react";
import { Box, CircularProgress, Container, Typography } from "@mui/material";
import Spacer from "components/Spacer";
import ImageModal from "components/ImageModal";
import ImageCarousel from "components/ImageCarousel";
import ImageGrid from "components/ImageGrid";
import supabase from "supabaseClient";
import Page1 from "components/Page1";
import Page2 from "components/Page2";
import Page3 from "components/Page3";
import Page4 from "components/Page4";

const App = () => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentSectionPhotos, setCurrentSectionPhotos] = useState([]);

  useEffect(() => {
    const fetchPhotos = async () => {
      const { data, error } = await supabase.from("photoInfos").select("*");
      if (error) {
        console.error("Error fetching photos:", error);
      } else {
        setPhotos(data);
      }
      setLoading(false);
    };

    fetchPhotos();
  }, []);

  const handleImageClick = (image, index, sectionPhotos) => {
    setSelectedImage(image);
    setCurrentIndex(index);
    setCurrentSectionPhotos(sectionPhotos);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedImage(null);
  };

  const handlePrev = () => {
    const newIndex =
      (currentIndex - 1 + currentSectionPhotos.length) %
      currentSectionPhotos.length;
    setSelectedImage(currentSectionPhotos[newIndex]);
    setCurrentIndex(newIndex);
  };

  const handleNext = () => {
    const newIndex = (currentIndex + 1) % currentSectionPhotos.length;
    setSelectedImage(currentSectionPhotos[newIndex]);
    setCurrentIndex(newIndex);
  };

  if (loading) {
    return (
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
        }}
      >
        <CircularProgress />
        <Spacer m={2} />
        <Typography>Loading...</Typography>
      </Container>
    );
  }

  const section1Photos = photos.filter((photo) => photo.section === 1);
  const section2Photos = photos.filter((photo) => photo.section === 2);
  const section3Photos = photos.filter((photo) => photo.section === 3);

  return (
    <Container
      maxWidth="sm"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box
        component="img"
        src={`${process.env.PUBLIC_URL}/images/main.jpg`}
        sx={{
          width: "100%",
          height: "auto",
        }}
      />
      <Spacer m={3} />
      <Page1 />
      <Spacer m={3} />
      <ImageCarousel
        photos={section1Photos}
        handleImageClick={handleImageClick}
        section={section1Photos}
      />
      <Spacer m={3} />
      <Page2 />
      <Spacer m={3} />
      <ImageCarousel
        photos={section2Photos}
        handleImageClick={handleImageClick}
        section={section2Photos}
      />
      <Spacer m={3} />
      <Page3 />
      <Spacer m={3} />
      <ImageCarousel
        photos={section3Photos}
        handleImageClick={handleImageClick}
        section={section3Photos}
      />
      <Spacer m={3} />
      <Page4 />
      <Spacer m={3} />
      <ImageGrid
        photos={photos}
        handleImageClick={(image, index) =>
          handleImageClick(image, index, photos)
        }
      />
      <ImageModal
        open={modalOpen}
        onClose={handleCloseModal}
        image={selectedImage}
        photos={currentSectionPhotos}
        currentIndex={currentIndex}
        handlePrev={handlePrev}
        handleNext={handleNext}
      />
    </Container>
  );
};

export default App;
