import styled from "styled-components";
import Image from "next/image";

export const Work = () => {
  return (
    <Wrapper>
      <div>
        <WorkDescription>
          Moviebox github...
          <IconWrapper
            style={{ position: "absolute", top: "25px", paddingLeft: "10px" }}
          >
            <img src="https://img.icons8.com/material-rounded/32/000000/github.png" />
          </IconWrapper>
        </WorkDescription>
        <ImageWrapper>
          <a href="https://movi-2e9b3.web.app/">
            <Image
              src="/images/moviebox.png"
              width={500}
              height={300}
              layout={"fixed"}
            />
          </a>
        </ImageWrapper>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 1400px;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
`;

const WorkDescription = styled.div`
  text-align: center;
  height: 33px;
  position: relative;
  padding: 30px;
`;

const Red = styled.a`
  color: #fa817d;
  border-style: none;
`;

const IconWrapper = styled.span`
  position: absolute;
  top: "25px";
  padding-left: 10px;
`;

const ImageWrapper = styled.div`
  width: 500px;
  margin: 0 auto;
`;
