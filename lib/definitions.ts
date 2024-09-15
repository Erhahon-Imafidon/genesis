export type User = {
  image: any;
  title: string;
  subTitle: string;
};

export type MessageUser = {
  id: number;
  title: string;
  description: string;
  image: ReturnType<typeof require>;
};
