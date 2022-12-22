import styled from "styled-components";

const HeaderStyled = styled.header`
  width: 100%;
  background-color: #f8f8f8;
  height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 0 2rem;
`;

const Header = () => {
  return (
    <HeaderStyled>
      <h2>Header for advance</h2>
    </HeaderStyled>
  );
};

export default Header;
