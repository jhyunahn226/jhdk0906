import React from "react";
import { Box, Container, Typography } from "@mui/material";
import Spacer from "./Spacer";

const Page4 = () => {
  return (
    <Box
      sx={{
        textAlign: "left",
        mx: 2,
        my: 1,
      }}
    >
      <Typography
        variant="h5"
        sx={{ fontFamily: "OwnglyphMeetme", textAlign: "center" }}
      >
        "안재현 & 김다경 스럽게"
      </Typography>
      <Spacer m={3} />
      <Typography variant="body1" sx={{ fontFamily: "KyoboHandwriting" }}>
        이제 부부의 연으로 앞으로도 소소한 행복으로 가득한, '저희다운' 삶을 함께
        만들어 가보려 합니다.
      </Typography>
      <Spacer m={1.5} />
      <Typography variant="body1" sx={{ fontFamily: "KyoboHandwriting" }}>
        그리고 저희만 행복한 삶이 아닌, 여러분처럼 소중한 분들의 행복에도 보탬이
        되는 삶을 살아보려구요.
      </Typography>
      <Spacer m={1.5} />
      <Typography variant="body1" sx={{ fontFamily: "KyoboHandwriting" }}>
        저희의 다짐을 사랑의 이름으로 지켜나갈 수 있도록 앞날을 축복해 주시면
        감사드리겠습니다.
      </Typography>
      <Spacer m={1.5} />
      <Typography variant="body1" sx={{ fontFamily: "KyoboHandwriting" }}>
        저희, 예쁘게 잘 살게요!
      </Typography>
      <Spacer m={2} />
      <Container
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Container sx={{ display: "flex" }}>
          <Box
            component="img"
            src={`${process.env.PUBLIC_URL}/images/shinchan_olaf.png`}
            sx={{
              width: "50%",
              height: "auto",
            }}
          />
        </Container>
        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            alignItems: "flex-end",
          }}
        >
          <Typography
            variant="body1"
            sx={{ fontFamily: "KyoboHandwriting", fontSize: 14 }}
          >
            2024.09.06~
          </Typography>
          <Typography
            variant="body1"
            sx={{ fontFamily: "KyoboHandwriting", fontSize: 14 }}
          >
            김다경 & 안재현 드림
          </Typography>
        </Container>
      </Container>
    </Box>
  );
};

export default Page4;
