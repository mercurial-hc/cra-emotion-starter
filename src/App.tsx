import React from "react";

import tw, { styled } from "twin.macro";

const AppContainer = styled.div`
  ${tw`h-screen w-screen flex flex-col items-center `}
  min-height: 100vh;
  min-width: 100vw;
`;

const Header = styled.header`
  ${tw`bg-gray-300 text-3xl flex items-center justify-center w-full`}
`;

const Main = styled.main`
  ${tw`bg-gray-100 text-lg text-center w-full h-full`}
`;

const Footer = styled.footer`
  ${tw`bg-gray-300 text-xl flex items-center justify-center w-full`}
`;

const StyledText = styled.span`
  ${tw`text-purple-500 leading-8`}
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
