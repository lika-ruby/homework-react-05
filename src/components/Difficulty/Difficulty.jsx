import {
  DiffCont,
  Subtitle,
  ListDiff,
  ItemDiff,
  TextDiff,
} from "./Difficulty.js";

export const Difficulty = ({ diff }) => {
  return (
    <DiffCont $diff={diff}>
      <Subtitle>Diffculty</Subtitle>
      <ListDiff>
        <ItemDiff>
          <TextDiff>Easy</TextDiff>
        </ItemDiff>
        <ItemDiff>
          <TextDiff>Medium</TextDiff>
        </ItemDiff>
        <ItemDiff>
          <TextDiff>Hard</TextDiff>
        </ItemDiff>
      </ListDiff>
    </DiffCont>
  );
};
