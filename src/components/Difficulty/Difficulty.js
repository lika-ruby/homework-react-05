import styled from "styled-components";
export const ItemDiff = styled.li`
  margin: 0 auto;
  border-radius: 40px;
  padding: 8px 12px;
  background-color:rgb(173, 211, 214);
  `;
export const DiffCont = styled.div`
  margin: 0 auto;
  padding: 12px;
  background:rgb(200, 231, 232);
  border-radius: 20px;

  ${ItemDiff}{

  &:nth-child(${({ $diff }) => ($diff === 3 ? "3" : $diff === 1 ? "2" : $diff === 0 ? "1" : "")}){
    background-color : rgb(124, 170, 170);
  }  
  }
`;

export const Subtitle = styled.h3`
  font-size: 18px;
  font-weight: 400;
  color:rgb(34, 38, 56);
  margin-bottom: 40px;
  text-align: center;
  margin-bottom: 12px;
`;

export const ListDiff = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between; 
   gap: 8px;
`;





export const TextDiff = styled.p`
  font-size: 16px;
  font-weight: 400;
  text-align: center;
  color: rgb(34, 38, 56);
`;