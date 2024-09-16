export type User = {
  image: any;
  title: string;
  subTitle: string;
  onPress?: () => void;
  renderRightActions?: () => JSX.Element;
};

export type MessageUser = {
  id: number;
  title: string;
  description: string;
  image: ReturnType<typeof require>;
};
