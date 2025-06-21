import { Text } from "react-native";

type RecipeListProps = {
  test: string;
};

export const UseCase1Component = ({ test }: RecipeListProps) => {
  return (
    <div>
      <Text>Title</Text>
      <Text>{test}</Text>
    </div>
  );
};
