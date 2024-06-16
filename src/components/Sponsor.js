import React, { useState } from "react";
import {
  Container,
  IconButton,
  Box,
  Typography,
  Dialog,
  DialogContent,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Spacer from "./Spacer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Sponsor = () => {
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleJHyunClick = () => {
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  const handleKakaoSend = () => {
    window.open("https://qr.kakaopay.com/Ej8NFl3qZ", "_blank");
    setDialogOpen(false);
  };

  const handleCopyAccount = () => {
    navigator.clipboard.writeText("신한은행 110-320-955821").then(() => {
      toast.success("계좌번호가 복사되었습니다!", {
        position: "bottom-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
      });
    });
    setDialogOpen(false);
  };

  const handleOlafClick = () => {
    console.log("Olaf GIF clicked");
    // 여기에서 Olaf 버튼 클릭 시 실행할 코드를 작성하세요
  };

  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: 4, // 버튼 간의 간격
        padding: 2,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <IconButton
          onClick={handleJHyunClick}
          sx={{
            borderRadius: "50%",
            overflow: "hidden",
            padding: 0,
          }}
        >
          <img
            src={`${process.env.PUBLIC_URL}/images/shinchan.gif`}
            alt="Shinchan GIF"
            style={{
              width: "100px",
              height: "100px",
              objectFit: "cover",
            }}
          />
        </IconButton>
        <Spacer m={0.5} />
        <Typography sx={{ fontFamily: "KyoboHandwriting", fontSize: 16 }}>
          재현 축복하기
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <IconButton
          onClick={handleOlafClick}
          sx={{
            borderRadius: "50%",
            overflow: "hidden",
            padding: 0,
          }}
        >
          <img
            src={`${process.env.PUBLIC_URL}/images/olaf.gif`}
            alt="Olaf GIF"
            style={{
              width: "100px",
              height: "100px",
              objectFit: "cover",
            }}
          />
        </IconButton>
        <Spacer m={0.5} />
        <Typography sx={{ fontFamily: "KyoboHandwriting", fontSize: 16 }}>
          다경 응원하기
        </Typography>
      </Box>

      <Dialog open={dialogOpen} onClose={handleCloseDialog}>
        <DialogContent sx={{ padding: 4 }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                width: "100%",
                cursor: "pointer",
                border: "0.5px solid black",
                borderRadius: "4px",
                padding: "12px",
              }}
              onClick={handleKakaoSend}
            >
              <Box
                component="img"
                src={`${process.env.PUBLIC_URL}/icons/kakao-yellow.png`}
                sx={{
                  width: "24px",
                }}
              />
              <Spacer m={1} />
              <Typography sx={{ fontFamily: "KyoboHandwriting", fontSize: 16 }}>
                카카오 송금하기
              </Typography>
            </Box>
            <Spacer m={1} />
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                width: "100%",
                cursor: "pointer",
                border: "0.5px solid black",
                borderRadius: "4px",
                padding: "12px",
              }}
              onClick={handleCopyAccount}
            >
              <Box
                component="img"
                src={`${process.env.PUBLIC_URL}/icons/shinhan.png`}
                sx={{
                  width: "24px",
                }}
              />
              <Spacer m={1} />
              <Box>
                <Typography
                  sx={{ fontFamily: "KyoboHandwriting", fontSize: 16 }}
                >
                  계좌번호 복사하기
                </Typography>
                <Typography
                  sx={{ fontFamily: "KyoboHandwriting", fontSize: 10 }}
                >
                  (신한 110-320-955821)
                </Typography>
              </Box>
            </Box>
            <Spacer m={1} />
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                cursor: "pointer",
                padding: "6px",
              }}
              onClick={handleCloseDialog}
            >
              <Typography
                sx={{
                  fontFamily: "KyoboHandwriting",
                  fontSize: 14,
                  color: "gray",
                }}
              >
                마음만으로 충분해요
              </Typography>
              <Spacer m={0.4} />
              <CloseIcon sx={{ fontSize: 18, color: "gray" }} />
            </Box>
          </Box>
        </DialogContent>
      </Dialog>
      <ToastContainer
        toastClassName="custom-toast"
        bodyClassName="custom-toast-body"
      />
      <style jsx global>{`
        .custom-toast {
          font-family: "KyoboHandwriting", sans-serif;
          font-size: 16px;
        }
        .custom-toast-body {
          font-family: "KyoboHandwriting", sans-serif;
          font-size: 16px;
        }
      `}</style>
    </Container>
  );
};

export default Sponsor;
