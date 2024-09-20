import { ImageSourcePropType } from "react-native";

export type User = {
  image?: ImageSourcePropType;
  title: string;
  subTitle?: string;
  onPress?: () => void;
  renderRightActions?: React.FC<any>; // Different method of creating a type that returns a jsx or tsx Function
  ImageComponent?: () => React.ReactNode; // Different method of creating a type that returns a jsx or tsx Function
};

export type MessageUser = {
  id: number;
  title: string;
  description: string;
  image: ReturnType<typeof require>; // If you want the require function to be used in the image prop so you don't have to use require in the component
};
