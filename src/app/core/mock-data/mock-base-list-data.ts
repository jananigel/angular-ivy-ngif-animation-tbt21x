import { BaseList } from "../interface/list.interface";

export const MOCK_BASE_LIST_DATA: BaseList[] = [
  {
    show: true,
    children: [
      {
        show: true,
        children: [
          {
            show: true,
            children: [
              { show: true, children: [{ show: false, children: [] }] }
            ]
          },
          { show: true, children: [] },
          { show: false, children: [] }
        ]
      },
      { show: false, children: [] }
    ]
  },
  {
    show: false,
    children: [{ show: true, children: [{ show: true, children: [] }] }]
  },
  {
    show: true,
    children: [{ show: true, children: [{ show: false, children: [] }] }]
  }
];
