type tagType = "intro" | "service" | "recurit" | "customer";

export interface ListParams {
  title: string;
  link: string;
}

export interface NavItemsParams {
  id: number;
  tag: tagType;
  title: string;
  path: string;
  cName: string;
  isDropDown: boolean;
  downList?: ListParams[];
}
export const NAV_ITEMS: NavItemsParams[] = [
  {
    id: 1,
    tag: "intro",
    title: "ABOUT ME",
    path: "/About",
    cName: "nav-item",
    isDropDown: false,
  },
  {
    id: 2,
    tag: "service",
    title: "PROJECT",
    path: "../Pages/Menu/Service",
    cName: "nav-item",
    isDropDown: true,
    downList: [
      {
        title: "BBOING",
        link: "/distribute",
      },
      {
        title: "MUZIMAKZI",
        link: "/circulate",
      },
      {
        title: "BLOG",
        link: "/franchise",
      },
      {
        title: "INSTAGRAM",
        link: "/insurance",
      },
    ],
  },
  {
    id: 3,
    tag: "recurit",
    title: "RESUME",
    path: "../Pages/Menu/Recruit",
    cName: "nav-item",
    isDropDown: false,
  },
  {
    id: 4,
    tag: "customer",
    title: "CONTACT ME",
    path: "../Pages/Menu/Cs",
    cName: "nav-item",
    isDropDown: true,
    downList: [
      {
        title: "공지사항",
        link: "/notice",
      },
      {
        title: "팀프뉴스",
        link: "/news",
      },
      {
        title: "문의하기",
        link: "/ask",
      },
      {
        title: "자주 묻는 질문",
        link: "/faq",
      },
    ],
  },
];

export const SERVICE_DROP_DOWN = [
  {
    id: 1,
    title: "물류",
    path: "/src/Pages/SubMenu/Distribute.tsx",
    cName: "submenu-item",
  },
  {
    id: 2,
    title: "유통",
    path: "/src/Pages/SubMenu/Distribute/Circulation",
    cName: "submenu-item",
  },
  {
    id: 3,
    title: "프렌차이즈",
    path: "/src/Pages/SubMenu/Distribute/Franchise",
    cName: "submenu-item",
  },
  {
    id: 4,
    title: "보험",
    path: "/src/Pages/SubMenu/Distribute/Insurance",
    cName: "submenu-item",
  },
];

export const CUSTOMER_DROP_DOWN = [
  {
    id: 1,
    title: "공지사항",
    path: "/src/Pages/SubMenu/Notice",
    cName: "submenu-item",
  },
  {
    id: 2,
    title: "팀프뉴스",
    path: "/src/Pages/SubMenu/News",
    cName: "submenu-item",
  },
  {
    id: 3,
    title: "문의하기",
    path: "/src/Pages/SubMenu/Cs",
    cName: "submenu-item",
  },
  {
    id: 4,
    title: "자주 묻는 질문",
    path: "src/Pages/SubMenu/Faq",
    cName: "submenu-item",
  },
];
