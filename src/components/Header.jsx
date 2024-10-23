import styled from "styled-components";
import { flexMixin, font_size_weight } from "../style";

const StyledHeader = styled.header`
  ${flexMixin(undefined, "space-between", "center")}
  padding: 20px 20px;
  background-color: black;
  ul {
    ${flexMixin(undefined, "center", "center", "20px")}

    li {
      ${font_size_weight("16px", "400")}
      list-style: none;
    }
  }
`;

function Header() {
  return (
    <StyledHeader>
      <h1>OZ코딩스쿨</h1>
      <ul className="menu-container">
        <li>로그인</li>
        <li>회원가입</li>
        <li>내클래스</li>
      </ul>
    </StyledHeader>
  );
}

export default Header;
