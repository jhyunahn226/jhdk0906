import React from "react";
import { Box, Typography } from "@mui/material";
import Spacer from "./Spacer";

const Page2 = () => {
  return (
    <Box
      sx={{
        textAlign: "left",
        mx: 4,
        my: 1,
      }}
    >
      <Typography
        variant="h5"
        sx={{
          fontFamily: "OwnglyphMeetme",
          whiteSpace: "pre-line",
        }}
      >
        {`그래서 김다경과 안재현이
        여러분의 '마음'을 초대합니다.`}
      </Typography>
      <Spacer m={2} />
      <Typography variant="h6" sx={{ fontFamily: "OwnglyphMeetme" }}>
        2024년 9월 6일이에요.
      </Typography>
      <Spacer m={2} />
      <Typography variant="body1" sx={{ fontFamily: "KyoboHandwriting" }}>
        <span style={{ color: "gray", textDecoration: "line-through" }}>
          (이탈리아에 직접 오셔서 축하해 주셔도 되고)
        </span>{" "}
        여러분의 축하의 마음이 담긴 따뜻한 연락 한 통이면 충분할 것 같아요.
      </Typography>
      <Spacer m={2} />
      <Typography variant="body1" sx={{ fontFamily: "KyoboHandwriting" }}>
        아, 그런데 왜 하필 9월 6일이냐?!
      </Typography>
      <Spacer m={1.5} />
      <Typography variant="body1" sx={{ fontFamily: "KyoboHandwriting" }}>
        그 날이 저희가 처음 연애를 시작한 날짜거든요. 2019년부터 만남을
        이어왔으니 벌써 5년이 되었네요.
      </Typography>
      <Spacer m={1.5} />
      <Typography variant="body1" sx={{ fontFamily: "KyoboHandwriting" }}>
        신기하게도 저희는 5년 동안 단 한번도 싸우지 않았답니다.
      </Typography>
      <Spacer m={1.5} />
      <Typography variant="body1" sx={{ fontFamily: "KyoboHandwriting" }}>
        둘 다 둥글둥글, 예민하지 않고 무던한 성격이라서 그런지 서로에게 잘
        맞춰주고 배려하며 연애해왔어요.
      </Typography>
      <Spacer m={1.5} />
      <Typography variant="body1" sx={{ fontFamily: "KyoboHandwriting" }}>
        그래도 결혼은 현실이라고 같이 살면 싸울 수 밖에 없다던데, 그래도 이
        사람이라면 슬기롭게 헤쳐나갈 수 있을 거란 확신이 들어요.
      </Typography>
      <Spacer m={1.5} />
      <Typography variant="body1" sx={{ fontFamily: "KyoboHandwriting" }}>
        맛있는 거 먹고 풀면 되죠 뭐! 그게 인생 아닐까요?
      </Typography>
      <Typography
        variant="body1"
        sx={{ fontFamily: "KyoboHandwriting", color: "gray" }}
      >
        (다경이는 부대찌개나 LA갈비만 먹으면 그렇게 웃음이 난대요)
      </Typography>
    </Box>
  );
};

export default Page2;
