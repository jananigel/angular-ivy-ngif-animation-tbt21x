export interface BaseList {
  show: boolean;
  children: BaseList[];
}

export interface List {
  id: string;
  name: string;
  children: List[];
}