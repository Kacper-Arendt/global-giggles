import styled from "@emotion/styled";

// COMPONENTS
import { Aside, Footer, Header, Main } from "src/coreUi/layouts/sections";

const StyledMainLayout = styled.div`
  display: grid;
  grid-template-areas:
    "aside header"
    "aside main"
    "aside footer";
  grid-template-columns: 12.5rem 1fr;
  grid-template-rows: 4rem 1fr 4rem;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.palette.background.default};
`;

export const MainLayout = () => (
  <StyledMainLayout>
    <Header />
    <Aside />
    <Main />
    <Footer />
  </StyledMainLayout>
);
