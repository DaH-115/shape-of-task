import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { LinkButtonProps } from "@/components/buttons/types";

const LinkButton = ({ linkTo, text }: LinkButtonProps) => {
  return (
    <StyledLink to={linkTo}>
      {text}
      <StyledArrowIcon />
    </StyledLink>
  );
};

export default LinkButton;

// 링크 스타일
const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover,
  &:active {
    color: ${({ theme }) => theme.colors.priority1};
    text-decoration: underline;
    transition: all 0.2s ease-in-out;
  }
`;

// 아이콘 스타일
const StyledArrowIcon = styled(FaArrowRight)`
  font-size: 0.9rem;
  margin-left: 0.6rem;

  &:hover,
  &:active {
    color: ${({ theme }) => theme.colors.priority1};
    transition: all 0.2s ease-in-out;
  }
`;
