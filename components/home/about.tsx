import styled from "styled-components";
import Image from "next/image";

export const About = () => {
  return (
    <Wrapper>
      <AboutContent>
        <ImageWrapper>
          <Image src="/images/shinjo.jpeg" layout="fill" />
        </ImageWrapper>
        <DescriptionWrapper>
          <DescriptionTitle>BASEBALL</DescriptionTitle>
          <Description>
            <Red>広島新庄高校</Red>時代 寮に入り、野球漬けの毎日を送る <br />
            <Red>２度甲子園出場！</Red>
            <br />
            しかしベンチ入りは叶わず、応援団長として高校野球を終える
            <br />
            <br />
            <Red>西南学院大学</Red>〜now
            <br />
            １年時、九州リーグチャンピオン！
            <br />
            ２年時、リーグ戦初出場！
            <br />
            ３年時、コロナパンデミックにより、野球ができない期間続く、
            <br />
            <br />
            楽しい野球人生ではなく、苦しい野球人生でしたが、10代という期間にやりがいといろどりを与えてくれました！
          </Description>
        </DescriptionWrapper>
      </AboutContent>
      <AboutContent>
        <ImageWrapper>
          <Image src="/images/engineering2.jpg" layout="fill" />
        </ImageWrapper>
        <DescriptionWrapper>
          <DescriptionTitle>ENGINEERING</DescriptionTitle>
          <Description>
            2020年、フロントエンドエンジニアを目指し、野球引退を決意！
            <br />
            7月から独学で勉強開始！
            <Red>
              javascript,react,firebase
              <br />
              typescript,nextjs
            </Red>
            <br />
            キャッチアップ中
            <br />
            <Red>ruby on rails, Docker</Red>
            <br />
            <br />
            簡単なタスクではありますが、バックエンドのタスクもさせていただいております！
            <br />
            また勉強アウトプットとして、Qiitaにいくつか記事を挙げておりますので見ていただけますと幸いです！
            <br />
            ⬇︎ リンク
            <br />
            <QiitaLink href="https://qiita.com/nomu-008">
              <Red>https://qiita.com/nomu-008</Red>
            </QiitaLink>
          </Description>
        </DescriptionWrapper>
      </AboutContent>
      <AboutContent>
        <ImageWrapper>
          <Image src="/images/training.jpg" layout="fill" />
        </ImageWrapper>
        <DescriptionWrapper>
          <DescriptionTitle>TRAINING</DescriptionTitle>
          <Description>
            野球をしている時から、トレーニングをしっかりとしていたこともあり、私の趣味の一つでもあります。
            週5、６のトレーニングを行っています！
            <br />
            マックス重量　
            <br />
            ベンチプレス　125kg
            <br />
            スクワット 170kg
            <br />
            デッドリフト 210kg
            <br />
            <br />
            野球部では、栄養とトレーニング班に入っていたこともあり、食事についても勉強をしました。
            <br />
            フィットネスは、自分を前向きにしてくれる存在です！
          </Description>
        </DescriptionWrapper>
      </AboutContent>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const AboutContent = styled.div`
  max-width: 900px;
  width: 60%;
  margin: 80px auto;
  display: flex;
  position: relative;
`;

const DescriptionWrapper = styled.div`
  z-index: 1000;
  padding: 20px;
  margin: 20px 0 20px auto;
  padding: 40px 35px;
  background-color: rgba(0, 0, 0, 0.6);
  max-width: 40%;
  color: white;
`;

const Description = styled.div`
  color: white;
  flex-wrap: wrap;
  line-height: 28px;
  font-size: 18px;
  letter-spacing: 0.8px;
`;

const DescriptionTitle = styled.div`
  font-size: 30px;
  font-family: "Space Mono";
  padding: 0 0 20px 0;
  letter-spacing: 5px;
`;

const Red = styled.span`
  color: #fa817d;
`;

const ImageWrapper = styled.div`
  z-index: 0;
  position: absolute;
  left: -80px;
  top: -40px;
  width: 65%;
  height: 400px;
`;

const QiitaLink = styled.a`
  &:hover {
    border-bottom: 2px solid #fa817d;
  }
`;
