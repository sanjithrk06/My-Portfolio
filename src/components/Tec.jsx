import React from "react";
import styled, { keyframes, css } from "styled-components";
import { styles } from "../styles";
import { scss, sexpress, sgit, shtml, sjs, smongo, snode, sreact, sredux } from "../index";

function Tec() {
  const row1 = [
    scss, 
    sexpress, 
    sgit, 
    shtml, 
    smongo, 
    snode, 
    sreact, 
    sredux,
    sjs,
  ];


  return (
    <AppContainer className="">
      <Wrapper>
        <p className={` ${styles.sectionSubText } text-[#689775]`}>With Great Skills!</p>
        <p className={` ${styles.sectionHeadText } text-[#fb442c]`}>Skills I Know.</p>
        <Marquee>
          <MarqueeGroup>
            {row1.map((el) => (
              <ImageGroup>
                <Image src={el} key={el} />
              </ImageGroup>
            ))}
          </MarqueeGroup>
          <MarqueeGroup>
            {row1.map((el) => (
              <ImageGroup>
                <Image src={el} key={el} />
              </ImageGroup>
            ))}
          </MarqueeGroup>
        </Marquee>
      </Wrapper>
    </AppContainer>
  );
}

export default Tec;

const AppContainer = styled.div`
  width: 100%;
  height:auto;
  color: #000000;

  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 100%;
  height: fit-content;
  padding: 5rem 0rem;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Text = styled.div`
  font-size: 35px;
  font-weight: 600;
  margin-bottom: 40px;
`;

const Note = styled.div`
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 10px;
`;

const Marquee = styled.div`
  display: flex;
  width: 90%;
  overflow: hidden;
  user-select: none;

  mask-image: linear-gradient(
    to right,
    hsl(0 0% 0% / 0),
    hsl(0 0% 0% / 1) 10%,
    hsl(0 0% 0% / 1) 90%,
    hsl(0 0% 0% / 0)
  );
`;

const scrollX = keyframes`
  from {
    left: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;

const common = css`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  white-space: nowrap;
  width: auto;
  animation: ${scrollX} 30s linear infinite;
`;

const MarqueeGroup = styled.div`
  ${common}
`;
const MarqueeGroup2 = styled.div`
  ${common}
  animation-direction: reverse;
  animation-delay: -3s;
`;

const ImageGroup = styled.div`
  display: grid;
  place-items: center;
  width: clamp(.5rem, .5rem + 30vmin, 20rem);
  padding: calc(clamp(10rem, 1rem + 30vmin, 30rem) / 10);
`;

const Image = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  /* border: 1px solid black; */
  border-radius: 0.5rem;
  background: white;
  aspect-ratio: 16/9;
  padding: 2px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;