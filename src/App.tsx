// import { useReducer } from "react";
import styled, { ThemeProvider } from "styled-components";
import { theme } from "assets/styles/theme";
import { GlobalStyle } from "assets/styles/global";
import { Details } from "components/Details";
import { data } from "data";

const Slide = styled.div`
  height: 100vh;
  width: 100vw;
  padding: ${({ theme }) => theme.spacings.m};
  position: relative;
`;

const Background = styled.img`
  filter: blur(100px);
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  height: 100%;
  width: 100%;
  object-fit: cover;
  z-index: -1;
`;

const Container = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
`;

const TopLeft = styled.p`
  color: ${({ theme }) => theme.color.white};
  font-family: Tungsten;
  text-transform: uppercase;
`;

const ImagePrevious = styled.img`
  position: absolute;
  bottom: 0;
  left: 0;
  border: 1px solid #000;
  border-radius: ${({ theme }) => theme.borderRadius.image};
  height: 35%;
`;

const ImageMain = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid #000;
  border-radius: ${({ theme }) => theme.borderRadius.image};
  height: 75%;
`;

const Center = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Headline = styled.h1`
  color: ${({ theme }) => theme.color.white};
  font-size: 160px;
  letter-spacing: 0.04em;
  line-height: 80%;
  text-transform: uppercase;
  text-align: center;
`;

const Indicator = styled.div`
  display: flex;
  column-gap: ${({ theme }) => theme.spacings.l};
  justify-content: center;
`;

const IndicatorNumber = styled.p`
  color: ${({ theme }) => theme.color.white};
  font-size: ${({ theme }) => theme.fontSize.small};
`;

const IndicatorDots = styled.div`
  display: flex;
  column-gap: ${({ theme }) => theme.spacings.s};
`;

const IndicatorDot = styled.div<{ active: boolean }>`
  background-color: ${({ theme, active }) => (active ? theme.color.white : "transparent")};
  border: 1px solid ${({ theme }) => theme.color.white};
  border-radius: ${({ theme }) => theme.borderRadius.dot};
  height: 8px;
  width: 5px;
`;

const ImageNext = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  border: 1px solid #000;
  border-radius: ${({ theme }) => theme.borderRadius.image};
  height: 35%;
`;

const BottomRight = styled(Details)`
  position: absolute;
  right: 0;
  bottom: 0;
`;

// type Action = {
//   type: "increase" | "decrease";
//   payload: number;
// };

// const initialState = 0;

// // useReducer is usually preferable to useState when the next state depends on the previous one.
// function reducer(state: number, action: Action) {
//   switch (action.type) {
//     case "increase":
//       return state < data.length - 1 ? state + 1 : initialState;
//     case "decrease":
//       return state > 0 ? state - 1 : data.length - 1;
//     default:
//       return state;
//   }
// }

export function App() {
  // const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Slide>
        <Background src={require(`./assets/images/${data[0].image.desktop}`)} />
        <Container>
          <TopLeft>xyz photography</TopLeft>
          <ImagePrevious src={require(`./assets/images/${data[4].image.desktop}`)} />
          <ImageMain src={require(`./assets/images/${data[0].image.desktop}`)} />
          <Center>
            <Headline>{data[0].headline}</Headline>
            <Indicator>
              <IndicatorNumber>{`1 OF ${data.length}`}</IndicatorNumber>
              <IndicatorDots>
                {data.map((element, index) => (
                  <IndicatorDot key={index} active={index === 1} />
                ))}
              </IndicatorDots>
            </Indicator>
          </Center>
          <ImageNext src={require(`./assets/images/${data[1].image.desktop}`)} />
          <BottomRight data={data[0]} />
        </Container>
      </Slide>
    </ThemeProvider>
  );
}
