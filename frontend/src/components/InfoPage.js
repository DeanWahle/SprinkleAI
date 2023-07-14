import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center; /* centers the text block vertically */
  height: calc(100vh - 64px); // account for AppBar height
`;

const Text = styled.div`
  position: absolute;
  color: #ffffff;
  z-index: 1;
`;

const Title = styled.h1`
  font-size: 3em; /* larger text */
  color: #000000;
`;

const Subtitle = styled.p`
  font-size: 1.5em; /* larger text */
  color: #000000;
`;

const Char = styled.span`
  transition: transform 0.3s;
  display: inline-block;
  &:hover {
    transform: scale(1.2);
  }
`;

function Torus() {
  const ref = useRef(null);
  useFrame(() => (ref.current.rotation.x = ref.current.rotation.y += 0.001)); /* slower rotation */
  return (
    <mesh visible position={[0, 0, 0]} castShadow ref={ref}>
      <torusGeometry args={[10, 3, 16, 100]} />
      <meshStandardMaterial attach="material" color="#e3af7b" /> {/* Light brown color */}
    </mesh>
  );
}

function InfoPage() {
  return (
    <Container>
      <Text>
        <Title>
          {"Welcome to Sprinkle.ai".split("").map((char, index) => (
            <Char key={index}>{char !== " " ? char : "\u00A0"}</Char> /* preserve spaces */
          ))}
        </Title>
        <Subtitle>
          {"Company specific cover letters with a dash of AI".split("").map((char, index) => (
            <Char key={index}>{char !== " " ? char : "\u00A0"}</Char> /* preserve spaces */
          ))}
        </Subtitle>
      </Text>
      <Canvas>
        <ambientLight />
        <Torus />
      </Canvas>
    </Container>
  );
}

export default InfoPage;
