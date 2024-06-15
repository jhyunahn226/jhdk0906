import React from "react";
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

const ImageModal = ({ open, onClose, image }) => {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="lg" fullWidth>
      <DialogTitle
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          padding: 0,
          paddingRight: 2,
          minHeight: "unset",
        }}
      >
        <IconButton
          edge="end"
          color="inherit"
          onClick={onClose}
          aria-label="close"
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      {image && (
        <DialogContent
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: 0,
            width: "100%",
          }}
        >
          <Box
            sx={{
              width: "100%",
              textAlign: "center",
            }}
          >
            <img
              src={image.url}
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
            <IconButton
              sx={{
                color: "red",
              }}
            >
              <FavoriteBorderIcon
                sx={{
                  fontSize: 20,
                }}
              />
            </IconButton>
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
      )}
    </Dialog>
  );
};

export default ImageModal;
