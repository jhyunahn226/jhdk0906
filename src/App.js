import "./App.css";
import React, { useState, useEffect } from "react";
import { Box, Container, Divider, Typography } from "@mui/material";
import { Player } from "@lottiefiles/react-lottie-player";
import Spacer from "components/Spacer";
import ImageModal from "components/ImageModal";
import ImageCarousel from "components/ImageCarousel";
import ImageGrid from "components/ImageGrid";
import supabase from "supabaseClient";
import Page1 from "components/Page1";
import Page2 from "components/Page2";
import Page3 from "components/Page3";
import Page4 from "components/Page4";
import Footer from "components/Footer";
import Sponsor from "components/Sponsor";

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

  const handleLikeClick = async (e, photo) => {
    e.stopPropagation(); // 클릭 이벤트가 부모에게 전달되지 않도록 막음
    const newLikes = photo.likes + 1;
    const { error } = await supabase
      .from("photoInfos")
      .update({ likes: newLikes })
      .eq("id", photo.id);
    if (error) {
      console.error("Error updating likes:", error);
    } else {
      setPhotos((prevPhotos) =>
        prevPhotos.map((p) =>
          p.id === photo.id ? { ...p, likes: newLikes } : p
        )
      );
    }
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
        <Player
          autoplay
          loop
          src={`${process.env.PUBLIC_URL}/lotties/loading.json`}
          style={{ height: "200px", width: "200px" }}
        />
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
        padding: 0,
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
        handleLikeClick={handleLikeClick}
        section={section1Photos}
      />
      <Spacer m={3} />
      <Page2 />
      <Spacer m={3} />
      <ImageCarousel
        photos={section2Photos}
        handleImageClick={handleImageClick}
        handleLikeClick={handleLikeClick}
        section={section2Photos}
      />
      <Spacer m={3} />
      <Page3 />
      <Spacer m={3} />
      <ImageCarousel
        photos={section3Photos}
        handleImageClick={handleImageClick}
        handleLikeClick={handleLikeClick}
        section={section3Photos}
      />
      <Spacer m={3} />
      <Page4 />

      <Spacer m={4} />

      <Divider
        sx={{
          backgroundColor: "black",
          width: "50px",
          height: "0.5px",
        }}
      />
      <Spacer m={1} />
      <Typography sx={{ fontFamily: "OwnglyphMeetme", fontSize: 24 }}>
        💵 아무리 그래도 💸
      </Typography>
      <Typography sx={{ fontFamily: "OwnglyphMeetme", fontSize: 24 }}>
        마음만으로는-부족해
      </Typography>
      <Spacer m={1} />
      <Sponsor />

      <Spacer m={4} />

      <Divider
        sx={{
          backgroundColor: "black",
          width: "50px",
          height: "0.5px",
        }}
      />
      <Spacer m={1} />
      <Typography sx={{ fontFamily: "OwnglyphMeetme", fontSize: 24 }}>
        📸 정말 힘들게 고른 💍
      </Typography>
      <Typography sx={{ fontFamily: "OwnglyphMeetme", fontSize: 24 }}>
        43장의 사진들
      </Typography>
      <Spacer m={1} />
      <ImageGrid
        photos={photos}
        handleImageClick={(image, index) =>
          handleImageClick(image, index, photos)
        }
      />
      <Footer />
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
