import React, { useState, useCallback } from "react";
import styled from "styled-components";
import Image from "next/image";

export const Seinan = ({ videos }) => {
  const [more, setMore] = useState(false);
  const handleMore = useCallback(() => {
    setMore(!more);
  }, [more]);

  const viewVideos = more ? videos : videos.slice(0, 3);
  const button = more ? "CLOSE" : "SEE MORE";

  return (
    <Wrapper>
      <MainWrapper>
        <Description>
          西南学院野球部は、野球部活動だけでなく、商店街の店舗との連携やイベントなど
          <br />
          自立した集団づくりを実践している集団です！
          <br />
          上のyoutubeアイコンから西南学院大学に飛べます！
        </Description>
        <VideosWrapper>
          {viewVideos.map((video: any) => (
            <VideoWrapper>
              <iframe
                id="ytplayer"
                width={350}
                height={230}
                src={`https://www.youtube.com/embed/${video.id.videoId}`}
              />
            </VideoWrapper>
          ))}
        </VideosWrapper>
        <MoreButton onClick={handleMore}>{button}</MoreButton>
      </MainWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  position: relative;
`;

const ImageWrapper = styled.div`
  position: absolute;
  width: 100%;
  z-index: 0;
`;

const MainWrapper = styled.div`
  z-index: 1000;
`;

const Description = styled.div`
  padding-bottom: 30px;
  font-size: 18px;
  line-height: 28px;
  letter-spacing: 3px;
`;

const VideosWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const VideoWrapper = styled.div`
  padding: 15px;
`;

const MoreButton = styled.div`
  background-color: #222;
  font-size: 17;
  border-radius: 30px;
  width: 80px;
  margin: 50px auto;
  color: #fff;
  padding: 25px;
  cursor: pointer;
  &:hover {
    color: #222;
    background-color: #fff;
  }
`;

const Red = styled.a`
  color: #fa817d;
`;
