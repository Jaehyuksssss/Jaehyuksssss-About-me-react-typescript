export interface MainLinkParams {
  id: number
  src: string
  title: string
  path:string;
}

export const LINK_LIST: MainLinkParams[] = [
  {
    id: 1,
    src: '/public/Imgs/main_linkimg05.jpeg',
    title:'Github',
    path:'https://github.com/Jaehyuksssss?tab=repositories'
  },
  {
    id: 2,
    src: '/public/Imgs/main_linkimg02.png',
    title:'Resume',
    path:''
  },
  {
    id: 3,
    src: '/public/Imgs/main_linkimg03.jpeg',
    title:'Project',
    path:''
  }
]
