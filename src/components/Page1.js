import React from "react";
import { Box, Divider, Typography } from "@mui/material";
import Spacer from "./Spacer";

const Page1 = () => {
  return (
    <Box
      sx={{
        textAlign: "left",
        mx: 4,
        my: 1,
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Divider
          sx={{
            backgroundColor: "black",
            width: "50px",
            height: "0.5px",
          }}
        />
      </Box>
      <Spacer m={2} />
      <Typography
        variant="h5"
        sx={{ fontFamily: "OwnglyphMeetme", textAlign: "center" }}
      >
        Keep Your Date
      </Typography>
      <Typography
        variant="subtitle1"
        sx={{ fontFamily: "OwnglyphMeetme", textAlign: "center" }}
      >
        2024.09.06
      </Typography>
      <Spacer m={3} />
      <Typography variant="body1" sx={{ fontFamily: "KyoboHandwriting" }}>
        아! 저희는 결혼식을 따로 하지 않기로 했어요.
      </Typography>
      <Spacer m={1.5} />
      <Typography variant="body1" sx={{ fontFamily: "KyoboHandwriting" }}>
        저희가 이렇게 여러분께 청첩장을 보냈다는 것은, 저희의 삶에서 여러분과의
        인연이 소중한 의미가 있었다는 뜻이에요.
      </Typography>
      <Spacer m={1.5} />
      <Typography variant="body1" sx={{ fontFamily: "KyoboHandwriting" }}>
        함께 학교나 직장을 다니며 일상을 공유했거나, 고민을 나눴던 사이이거나,
        서로의 기쁨을 나의 일처럼 기뻐해줬던 기억이 있거나...
      </Typography>
      <Spacer m={1.5} />
      <Typography variant="body1" sx={{ fontFamily: "KyoboHandwriting" }}>
        그래서 이 글을 읽고 계시는 당신이라면, 굳이 결혼식을 하지 않더라도
        충분히 마음으로 진심 어린 축하를 보내주실 거라는 걸 알거든요.
      </Typography>
      <Spacer m={1.5} />
      <Typography variant="body1" sx={{ fontFamily: "KyoboHandwriting" }}>
        그리고 무엇보다도... 결혼식을 하면 저희는 분명 오열하느라 식이 제대로
        진행되지 않을거에요.{" "}
        <span style={{ color: "gray" }}>
          (상상만 해도 울컥한 걸 보면 확실해요)
        </span>
      </Typography>
      <Spacer m={1.5} />
      <Typography variant="body1" sx={{ fontFamily: "KyoboHandwriting" }}>
        대신 이탈리아의 조용한 시골 마을에서 단둘이 소소한 세리머니를 하기로
        했답니다.
      </Typography>
    </Box>
  );
};

export default Page1;
