import React from "react";
import { Box, IconButton, Typography } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const ImageCarousel = ({
  photos,
  handleImageClick,
  handleLikeClick,
  section,
}) => {
  return (
    <Carousel
      sx={{
        maxWidth: "100%", // 최대 너비를 100%로 설정하여 부모 컨테이너를 초과하지 않도록 함
        width: "100%", // 전체 너비를 100%로 설정
      }}
      showStatus={false}
      showThumbs={true}
      showIndicators={false}
      infiniteLoop
      autoPlay
      interval={3000}
      renderArrowPrev={(clickHandler, hasPrev) => {
        return (
          <IconButton
            sx={{
              position: "absolute",
              left: 10,
              top: "50%",
              transform: "translateY(-50%)",
              zIndex: 1,
              backgroundColor: "transparent",
              color: "white",
              "&:hover": {
                backgroundColor: "transparent",
              },
              svg: {
                filter: "drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.5))",
                stroke: "black",
                strokeWidth: "0.2px",
              },
            }}
            onClick={clickHandler}
          >
            <ArrowBackIosNewIcon />
          </IconButton>
        );
      }}
      renderArrowNext={(clickHandler, hasNext) => {
        return (
          <IconButton
            sx={{
              position: "absolute",
              right: 10,
              top: "50%",
              transform: "translateY(-50%)",
              zIndex: 1,
              backgroundColor: "transparent",
              color: "white",
              "&:hover": {
                backgroundColor: "transparent",
              },
              svg: {
                filter: "drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.5))",
                stroke: "black",
                strokeWidth: "0.2px",
              },
            }}
            onClick={clickHandler}
          >
            <ArrowForwardIosIcon />
          </IconButton>
        );
      }}
    >
      {photos.map((photo, index) => (
        <Box
          key={photo.id}
          onClick={() => handleImageClick(photo, index, section)}
        >
          <img
            src={`${process.env.PUBLIC_URL}/photos/${photo.url}`}
            alt={photo.description}
            style={{ width: "100%", height: "auto" }}
          />
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              padding: 0,
              paddingLeft: 1,
              paddingRight: 1,
            }}
          >
            <Box
              sx={{ display: "flex", direction: "row", alignItems: "center" }}
            >
              <IconButton
                sx={{ color: "red" }}
                onClick={(e) => {
                  e.stopPropagation();
                  handleLikeClick(e, photo);
                }}
              >
                <FavoriteBorderIcon sx={{ fontSize: 20 }} />
              </IconButton>
              <Typography sx={{ fontSize: 12, color: "black" }}>
                {photo.likes}
              </Typography>
            </Box>
            <Typography
              sx={{
                flexGrow: 1,
                textAlign: "right",
                alignSelf: "center",
                color: "black",
              }}
            >
              {photo.description}
            </Typography>
          </Box>
        </Box>
      ))}
    </Carousel>
  );
};

export default ImageCarousel;
