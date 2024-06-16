import { Container, IconButton, Box, Typography } from "@mui/material";
import Spacer from "./Spacer";

const Sponsor = () => {
  const handleShinchanClick = () => {
    window.open("https://qr.kakaopay.com/Ej8NFl3qZ", "_blank");
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
          onClick={handleShinchanClick}
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
    </Container>
  );
};

export default Sponsor;
