import { createGlobalStyle } from "styled-components";

const GlobalStyled = createGlobalStyle`
/* CSS RESET */
* {
    margin: 0;
}
`;

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyled />
      {children}
    </>
  );
};

export default Layout;
