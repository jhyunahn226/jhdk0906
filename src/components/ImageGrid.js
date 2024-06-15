import React from "react";
import { ImageList, ImageListItem, Box } from "@mui/material";

const ImageGrid = ({ photos, handleImageClick }) => {
  return (
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
  );
};

export default ImageGrid;
