import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Box,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import supabase from "supabaseClient";

const ImageModal = ({
  open,
  onClose,
  image,
  photos,
  currentIndex,
  handlePrev,
  handleNext,
}) => {
  const [likes, setLikes] = useState(0);

  useEffect(() => {
    if (image) {
      setLikes(image.likes);
    }
  }, [image]);

  const handleLikeClick = async () => {
    if (!image) return;

    const { data, error } = await supabase
      .from("photoInfos")
      .update({ likes: likes + 1 })
      .eq("id", image.id);

    if (error) {
      console.error("Error updating likes:", error);
    } else {
      setLikes(likes + 1);
    }
  };

  if (!image) {
    return null;
  }

  return (
    <Dialog open={open} onClose={onClose} maxWidth="lg" fullWidth>
      <DialogTitle
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: 0,
          paddingLeft: 2,
          paddingRight: 2,
          minHeight: "unset",
        }}
      >
        <Typography sx={{ fontFamily: "KyoboHandwriting" }}>
          {currentIndex + 1} / {photos.length}
        </Typography>
        <IconButton
          edge="end"
          color="inherit"
          onClick={onClose}
          aria-label="close"
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: 0,
          width: "100%",
          position: "relative",
        }}
      >
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
          onClick={handlePrev}
        >
          <ArrowBackIosNewIcon />
        </IconButton>
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
          onClick={handleNext}
        >
          <ArrowForwardIosIcon />
        </IconButton>
        <Box
          sx={{
            width: "100%",
            textAlign: "center",
          }}
        >
          <img
            src={`${process.env.PUBLIC_URL}/photos/${image.url}`}
            alt={image.description}
            style={{
              width: "100%",
              height: "auto",
              maxHeight: "80vh",
              objectFit: "contain",
            }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            padding: 0,
            marginLeft: 4,
            marginRight: 4,
          }}
        >
          <Box sx={{ display: "flex", direction: "row", alignItems: "center" }}>
            <IconButton sx={{ color: "red" }} onClick={handleLikeClick}>
              <FavoriteBorderIcon sx={{ fontSize: 20 }} />
            </IconButton>
            <Typography sx={{ fontSize: 12 }}>{likes}</Typography>
          </Box>
          <Typography
            sx={{
              flexGrow: 1,
              textAlign: "right",
              alignSelf: "center",
            }}
          >
            {image.description}
          </Typography>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default ImageModal;
