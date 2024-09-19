import { ImageSourcePropType } from "react-native";

export type User = {
  image?: ImageSourcePropType;
  title: string;
  subTitle: string;
  onPress?: () => void;
  renderRightActions?: React.FC<any>; // Different method of creating a type that returns a jsx or tsx Function
};

export type MessageUser = {
  id: number;
  title: string;
  description: string;
  image: ReturnType<typeof require>;
};
