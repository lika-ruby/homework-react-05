import { Recipe } from "../Recipe/Recipe.jsx";
import { Sect, Title, List } from "./PageBoard.js";

export const PageBoard = ({ recipes, icons }) => {
  return (
    <Sect>
      <Title>Recipes for you</Title>
      <List>
        {recipes.map((recipe) => (
          <Recipe
            key={recipe.name}
            icons={icons}
            name={recipe.name}
            time={recipe.time}
            servings={recipe.servings}
            calories={recipe.calories}
            difficulty={recipe.difficulty}
          />
        ))}
      </List>
    </Sect>
  );
};
