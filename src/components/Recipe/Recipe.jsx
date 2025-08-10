import { Difficulty } from "../Difficulty/Difficulty.jsx";
import { Item, Subtitle, ListTypes, ItemType, TextType } from "./Recipe.js";

export const Recipe = ({
  name,
  time,
  servings,
  calories,
  difficulty,
  icons,
}) => {
  console.log(difficulty);
  return (
    <Item $diff={difficulty}>
      <Subtitle>{name}</Subtitle>
      <ListTypes>
        <ItemType>
          {icons[0]} <TextType>{time} min</TextType>
        </ItemType>
        <ItemType>
          {icons[1]} <TextType> {servings} servings</TextType>
        </ItemType>
        <ItemType>
          {icons[2]} <TextType>{calories} calories</TextType>
        </ItemType>
      </ListTypes>
      <Difficulty diff={difficulty} />
    </Item>
  );
};

// icons={icons}
// name={recipe.name}
// time = { recipe.time }
// servings = { recipe.servings }
// calories={recipe.calories}
// difficulty={recipe.difficulty}
