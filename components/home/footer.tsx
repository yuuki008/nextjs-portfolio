import styled from "styled-components";
export const Footer = () => {
  return (
    <>
      <IconNavWrapper>
        <Icon href="https://twitter.com/ax0kQcEB93ntx6X">
          <img src="https://img.icons8.com/android/32/ffffff/twitter.png" />
        </Icon>
        <Icon href="https://github.com/yuuki008">
          <img src="https://img.icons8.com/material-rounded/32/ffffff/github.png" />
        </Icon>
        <Icon href="https://www.instagram.com/n.doop.yuuki08/?hl=ja">
          <img src="https://img.icons8.com/material-rounded/32/ffffff/instagram-new.png" />
        </Icon>
      </IconNavWrapper>
      <Info>
        西南学院大学:　能村 優希
        <br /> email: s22ah261@gmail.com
      </Info>
    </>
  );
};

const IconNavWrapper = styled.nav`
  display: flex;
  overflow: hidden;
  height: 100px;
  width: 400px;
  margin: 50px auto;
  justify-content: center;
`;

const Icon = styled.a`
  margin: 0.3em 1.2em;
  line-height: 90px;
  padding: 15px;
`;

const Info = styled.div`
  position: absolute;
  right: 10px;
  font-size: 17px;
  top: 30px;
  color: white;
`;
