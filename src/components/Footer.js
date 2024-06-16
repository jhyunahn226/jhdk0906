import { useEffect } from "react";
import { Container, Typography, IconButton, Divider } from "@mui/material";
import Spacer from "./Spacer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Footer = () => {
  // 배포한 자신의 사이트
  const realUrl = "https://jhdk0906.vercel.app";
  // 로컬 주소 (localhost 3000 같은거)
  const resultUrl = window.location.href;

  // 재랜더링시에 실행되게 해준다.
  useEffect(() => {
    // init 해주기 전에 clean up 을 해준다.
    window.Kakao.cleanup();
    // 자신의 js 키를 넣어준다.
    window.Kakao.init("e2c3d60e13cadd32ee10154b420cf56f");
    // 잘 적용되면 true 를 뱉는다.
    console.log(window.Kakao.isInitialized());
  }, []);

  const shareKakao = () => {
    window.Kakao.Share.sendDefault({
      objectType: "feed",
      content: {
        title: "안재현 ♡ 김다경",
        description: "Keep Your Date\n2024.09.06 - Puglia, Italy",
        imageUrl:
          "https://jdpuymhlqtfpzwbfzvvi.supabase.co/storage/v1/object/public/photos/thumbnail.JPG",
        link: {
          webUrl: realUrl,
          mobileWebUrl: realUrl,
        },
      },
      buttons: [
        {
          title: "초대장 열어보기",
          link: {
            webUrl: realUrl,
            mobileWebUrl: realUrl,
          },
        },
      ],
    });
  };

  const handleLinkClick = () => {
    navigator.clipboard.writeText(realUrl).then(() => {
      toast.success("링크가 복사되었습니다!", {
        position: "bottom-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
      });
    });
  };

  return (
    <Container
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#323232",
        padding: 2,
      }}
    >
      <Container
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <IconButton onClick={shareKakao} sx={{ padding: 0 }}>
          <img
            src={`${process.env.PUBLIC_URL}/icons/kakaotalk.png`}
            alt="KakaoTalk"
            style={{ width: 30, height: 30 }}
          />
        </IconButton>
        <Spacer m={2} />
        <Divider
          orientation="vertical"
          flexItem
          sx={{
            backgroundColor: "white",
            width: "0.1px",
          }}
        />
        <Spacer m={2} />
        <IconButton onClick={handleLinkClick} sx={{ padding: 0 }}>
          <img
            src={`${process.env.PUBLIC_URL}/icons/link.png`}
            alt="Link"
            style={{ width: 30, height: 30 }}
          />
        </IconButton>
      </Container>
      <Spacer m={1.5} />
      <Typography sx={{ color: "lightgray", fontSize: 12 }}>
        Copyright ©FCCF. All Rights Reserved.
      </Typography>
      <Spacer m={0.2} />
      <Typography sx={{ color: "lightgray", fontSize: 12 }}>
        Made by JHyun & D.A.Komm
      </Typography>
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

export default Footer;
