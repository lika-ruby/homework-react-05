import styled from "styled-components";

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  padding: 32px;
  background:rgb(255, 255, 255);
  border-radius: 20px;
  width: 320px;
  gap: 24px;

      box-shadow: ${({ $diff }) => ($diff === 3 ? "0 4px 34px 0 #ab0000" : "none")};
`;

export const Subtitle = styled.h2`
  font-size: 20px;
  font-weight: 400;
  color:rgb(49, 57, 90);
  margin-bottom: 20px;
  text-align: center;
`;

export const ListTypes = styled.ul`
  display: flex;
  justify-content: space-between;
`;


export const ItemType = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`;


export const TextType = styled.p`
  font-size: 16px;
  font-weight: 400;
  color:rgb(76, 103, 132);
`;
