import palette from "@/styles/palette";
import styled from "styled-components";

export const MenuList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  padding: 20px 24px;
  width: 100%;
  border-bottom: 2px solid ${palette.GRAY_100};
`;

export const Title = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: ${palette.GRAY_700};
`;
