import React from "react";
import styled from "@emotion/styled";

const AppContainer = styled.div`
  height: 100vh;
  min-height: 100vh;
  width: 100vw;
  min-width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  align-items: center;
`;

const Header = styled.header`
  background: rgba(0, 0, 0, 0.3);
  width: 100%;
  text-align: center;
`;

const Main = styled.main`
  background: rgba(0, 0, 0, 0.1);
  width: 100%;
  height: 100%;
  text-align: center;
`;

const Footer = styled.footer`
  background: rgba(0, 0, 0, 0.3);
  width: 100%;
  text-align: center;
`;

const StyledText = styled.span`
  color: maroon;
`;

const App: React.FC = () => {
  return (
    <AppContainer>
      <Header>
        <StyledText>Header</StyledText>
      </Header>
      <Main>
        <StyledText>Main</StyledText>
      </Main>
      <Footer>
        <StyledText>Footer</StyledText>
      </Footer>
    </AppContainer>
  );
};

export default App;
