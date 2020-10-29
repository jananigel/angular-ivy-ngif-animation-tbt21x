import { List } from "../interface/list.interface";

export const MOCK_DATA: List[] = [
  {
    id: "123456",
    name: "list 1",
    children: [
      {
        id: "1111",
        name: "child list 1",
        children: []
      },
      {
        id: "2222",
        name: "child list 2",
        children: []
      }
    ]
  },
  {
    id: "1234567",
    name: "list 2",
    children: []
  },
  {
    id: "12345678",
    name: "list 3",
    children: []
  },
  {
    id: "123456789",
    name: "list 3",
    children: [
      {
        id: "3333",
        name: "list 3 child 1",
        children: []
      }
    ]
  }
];