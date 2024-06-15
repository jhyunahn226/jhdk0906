import React from "react";
import { Dialog, DialogContent, DialogTitle, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const ImageModal = ({ open, onClose, image }) => {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="lg" fullWidth>
      <DialogTitle
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          padding: 0, // 기본 패딩을 0으로 설정
          paddingRight: 2, // 오른쪽 패딩을 2로 설정
          minHeight: "unset", // 기본 높이 초기화
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
            justifyContent: "center",
            alignItems: "center",
            padding: 0,
          }}
        >
          <img
            src={image.url}
            alt={image.description}
            style={{
              width: "100%",
              height: "auto",
              maxHeight: "80vh", // 최대 높이를 화면의 80%로 설정
              objectFit: "contain", // 이미지를 축소하여 전체가 보이도록 함
            }}
          />
        </DialogContent>
      )}
    </Dialog>
  );
};

export default ImageModal;
