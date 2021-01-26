import React from "react";
import styled from "styled-components";
import { Header } from "./header";
import { About } from "./about";
import { Contact } from "./contact";
import { Work } from "./work";
import Image from "next/image";

export const home = () => {
  return (
    <div>
      <HeaderWrapper>
        <div style={{ width: "100%", height: "100vh", position: "absolute" }}>
          <Image src="/images/kyouto1.jpg" layout="fill" />
        </div>
        <HeaderWrapper2>
          <Header />
          <HeaderContent>
            YUUKI NOUMURA IS A ROOKIE ENGINEER
            <br />
            BASE IN HUKUOKA, JAPAN
            <SubContent>
              能村優希は、エンジニアを目指し、インターン生として活動中です！
              <br />
              フロント中心でしたが、現在は、バックエンドのキャッチアップも行っており、
              <br />
              フルスタックエンジニア目指し学習中です!
            </SubContent>
          </HeaderContent>
        </HeaderWrapper2>
      </HeaderWrapper>
      <AboutWrapper>
        <SectionTitle id="about">ABOUT</SectionTitle>
        <About />
      </AboutWrapper>
      <WorkWrapper>
        <SectionTitle id="works">PORTFOLIO</SectionTitle>
        <Work />
      </WorkWrapper>
      <ContactWrapper>
        <SectionTitle id="contact">Contact</SectionTitle>
        <Contact />
      </ContactWrapper>
    </div>
  );
};

const HeaderWrapper = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  position: relative;
`;

const HeaderWrapper2 = styled.div`
  background-color: rgba(0, 0, 0, 0.6);
  height: 100vh;
  position: relative;
`;

const HeaderContent = styled.div`
  padding: 220px 0;
  letter-spacing: 5px;
  color: white;
  font-size: 35px;
  max-width: 900px;
  margin: 0 auto;
  text-align: center;
`;

const SubContent = styled.div`
  font-size: 16px;
  padding: 30px 0;
`;

const SectionTitle = styled.div`
  font-size: 35px;
  width: 100%;
  text-align: center;
  margin: 80px 0;
`;

const AboutWrapper = styled.div`
  margin: 0 auto;
  position: relative;
  display: flex;
  flex-direction: column;
`;

const ContactWrapper = styled.div``;

const WorkWrapper = styled.div``;
