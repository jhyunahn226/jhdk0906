import "./App.css";
import React, { useState, useEffect } from "react";
import {
  Box,
  CircularProgress,
  Container,
  ImageList,
  ImageListItem,
  Typography,
} from "@mui/material";
import Spacer from "components/Spacer";
import ImageModal from "components/ImageModal";
import supabase from "supabaseClient";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const App = () => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const fetchPhotos = async () => {
      const { data, error } = await supabase.from("photos").select("*");
      if (error) {
        console.error("Error fetching photos:", error);
      } else {
        setPhotos(data);
      }
      setLoading(false);
    };

    fetchPhotos();
  }, []);

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedImage(null);
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
        <Typography>Loading...</Typography>
      </Container>
    );
  }

  const section1Photos = photos.filter((photo) => photo.section === 1);
  const section2Photos = photos.filter((photo) => photo.section === 2);
  const section3Photos = photos.filter((photo) => photo.section === 3);

  return (
    <Container
      maxWidth="xs"
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
      <Spacer m={2} />
      <Carousel
        showStatus={false}
        showThumbs={false}
        infiniteLoop
        autoPlay
        interval={3000}
      >
        {section1Photos.map((photo) => (
          <div key={photo.id} onClick={() => handleImageClick(photo)}>
            <img src={photo.url} alt={photo.description} />
            <p className="legend">{photo.description}</p>
          </div>
        ))}
      </Carousel>
      <Spacer m={2} />
      <Carousel
        showStatus={false}
        showThumbs={false}
        infiniteLoop
        autoPlay
        interval={3000}
      >
        {section2Photos.map((photo) => (
          <div key={photo.id} onClick={() => handleImageClick(photo)}>
            <img src={photo.url} alt={photo.description} />
            <p className="legend">{photo.description}</p>
          </div>
        ))}
      </Carousel>
      <Spacer m={2} />
      <Carousel
        showStatus={false}
        showThumbs={false}
        infiniteLoop
        autoPlay
        interval={3000}
      >
        {section3Photos.map((photo) => (
          <div key={photo.id} onClick={() => handleImageClick(photo)}>
            <img src={photo.url} alt={photo.description} />
            <p className="legend">{photo.description}</p>
          </div>
        ))}
      </Carousel>
      <Spacer m={2} />
      <ImageList
        sx={{
          width: "100%",
        }}
        cols={3}
        gap={1}
      >
        {photos.map((photo) => (
          <ImageListItem key={photo.id} onClick={() => handleImageClick(photo)}>
            <Box
              sx={{
                position: "relative",
                width: "100%",
                paddingBottom: "100%", // 1:1 aspect ratio
              }}
            >
              <img
                src={photo.url}
                alt={photo.description}
                loading="lazy"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  cursor: "pointer", // Add cursor pointer to indicate clickability
                }}
              />
            </Box>
          </ImageListItem>
        ))}
      </ImageList>
      <ImageModal
        open={modalOpen}
        onClose={handleCloseModal}
        image={selectedImage}
      />
    </Container>
  );
};

export default App;
