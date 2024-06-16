import React from "react";
import { Box, IconButton, Typography } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
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
      showStatus={false}
      showThumbs={false}
      infiniteLoop
      autoPlay
      interval={3000}
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
