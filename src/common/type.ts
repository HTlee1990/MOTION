export type BasicContextType = {
  title: string;
};

export type MediaContext = {
  category: 'Video' | 'Image';
  src: string;
} & BasicContextType;

export type TextContext = {
  category: 'Todo' | 'Note';
  body: string;
} & BasicContextType;

export type test = {
  title: string;
  category: 'Video' | 'Image' | 'Todo' | 'Note';
  body: string;
  scr: string;
};
