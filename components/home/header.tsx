import styled from "styled-components";

export const Header = () => {
  return (
    <Wrapper>
      <img src="https://img.icons8.com/wired/100/ffffff/flex-biceps.png" />
      <HeaderNavWrapper>
        <HeaderNav href="#about">About</HeaderNav>
        <HeaderNav href="#works">Portfolio</HeaderNav>
        <HeaderNav href="#contact">Contact</HeaderNav>
      </HeaderNavWrapper>
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
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 0 auto;
  text-align: center;
  max-width: 1400px;
  padding: 20px 20px 0 20px;
  display: flex;
  position: relative;
`;

const HeaderNavWrapper = styled.div`
  display: flex;
  max-width: 600px;
  width: 100%;
  height: 100px;
  line-height: 100px;
  margin-left: 80px;
`;

const HeaderNav = styled.a`
  font-size: 24px;
  font-weight: bold;
  margin: 0 2em;
  color: white !important;
  :hover {
  }
`;

const IconNavWrapper = styled.nav`
  display: flex;
  overflow: hidden;
  max-width: 400px;
  height: 130px;
  line-height: 130px;
  width: 100%;
  position: absolute;
  right: 0;
`;

const Icon = styled.a`
  margin: 0.3em 1.2em;
`;
