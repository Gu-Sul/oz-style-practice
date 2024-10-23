import styled from "styled-components";
import { flexMixin, font_size_weight } from "../style";

const StyledContainer = styled.div`
  ${flexMixin("column", undefined, "flex-start", "5px")}
  img {
    width: 300px;
    border-radius: 10px;
    margin-bottom: 3px;
    min-height: 225px;
  }
  span {
    ${font_size_weight("12px")}
    color: $tag-color;
    border: 1px solid $tag-color;
    padding: 4px 5px;
    border-radius: 3px;
  }
  div {
    ${font_size_weight("15px", "600")}
  }
  p {
    ${font_size_weight("12px")}
    color: $gray;
  }
`;

export default function Content({ content }) {
  return (
    <StyledContainer>
      <img src={content.img} alt={content.title} />
      <span>모집중</span>
      <div>{content.title}</div>
      <p>{content.subtitle}</p>
    </StyledContainer>
  );
}
