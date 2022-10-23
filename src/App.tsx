import { useReducer } from "react";
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

const BottomRight = styled(Details)`
  position: absolute;
  right: 0;
  bottom: 0;
`;

const ImagePrevious = styled.img`
  position: absolute;
  bottom: 0;
  left: 0;
  border: 1px solid #000;
  border-radius: ${({ theme }) => theme.borderRadius.image};
  cursor: pointer;
  height: 35%;
`;

const ImageNext = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  border: 1px solid #000;
  border-radius: ${({ theme }) => theme.borderRadius.image};
  cursor: pointer;
  height: 35%;
`;

const HeadlineOutline = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: calc(40vh + 2px);
`;

const Center = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 75vh;
  width: calc(56.25vh + 2px); // aspect width of image plus border
  overflow: hidden;
`;

const ImageMain = styled.img`
  border: 1px solid #000;
  border-radius: ${({ theme }) => theme.borderRadius.image};
  height: 100%;
`;

const HeadlineFilled = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 40vh;
`;

const Indicator = styled.div`
  position: absolute;
  top: calc(50% + 20vh + 16px);
  left: 50%;
  transform: translate(-50%, -50%);
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
  cursor: pointer;
  height: 8px;
  width: 5px;
`;

type Action = { type: "increase" } | { type: "decrease" } | { type: "new"; payload: number };

const initialState = 0;

// useReducer is usually preferable to useState when the next state depends on the previous one.
function reducer(state: number, action: Action) {
  switch (action.type) {
    case "increase":
      return state < data.length - 1 ? state + 1 : initialState;
    case "decrease":
      return state > 0 ? state - 1 : data.length - 1;
    case "new":
      return action.payload;
    default:
      return state;
  }
}

export function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const previousState = state > 0 ? state - 1 : data.length - 1;
  const nextState = state < data.length - 1 ? state + 1 : initialState;

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Slide>
        <Background src={require(`./assets/images/${data[state].image.desktop}`)} />
        <Container>
          <TopLeft>xyz photography</TopLeft>
          <BottomRight data={data[0]} />
          <ImagePrevious
            onClick={() => dispatch({ type: "decrease" })}
            src={require(`./assets/images/${data[previousState].image.desktop}`)}
          />
          <ImageNext
            onClick={() => dispatch({ type: "increase" })}
            src={require(`./assets/images/${data[nextState].image.desktop}`)}
          />
          <HeadlineOutline src={require(`./assets/images/text/${data[state].headline}Outline.svg`)} />
          <Center>
            <ImageMain src={require(`./assets/images/${data[state].image.desktop}`)} />
            <HeadlineFilled src={require(`./assets/images/text/${data[state].headline}Filled.svg`)} />
            <Indicator>
              <IndicatorNumber>{`${state + 1} OF ${data.length}`}</IndicatorNumber>
              <IndicatorDots>
                {data.map((element, index) => (
                  <IndicatorDot
                    onClick={() => dispatch({ type: "new", payload: index })}
                    key={index}
                    active={index === state}
                  />
                ))}
              </IndicatorDots>
            </Indicator>
          </Center>
        </Container>
      </Slide>
    </ThemeProvider>
  );
}
