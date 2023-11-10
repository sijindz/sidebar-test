import { BsBookmarkCheck, BsChatRightText, BsEnvelope, BsGear, BsHouseDoor, BsKanban, BsPerson, BsQuestionCircle } from "react-icons/bs";
import { SideNavItem } from "./types/type";



export const SIDENAV_ITEMS: SideNavItem[] = [
  {
    title: 'Home',
    path: '/',
    icon: <BsHouseDoor size={20}/>,
  },
  {
    title: 'Projects',
    path: '/projects',
    icon: <BsKanban size={20}/>,
    submenu: true,
    subMenuItems: [
      { title: 'All', path: '/projects' },
      { title: 'Back End', path: '/projects/frontend' },
      { title: 'Front End', path: '/projects/backend' },
    ],
  },
  {
    title: 'Messages',
    path: '/messages',
    icon: <BsEnvelope size={20}/>,
  },
  {
    title: 'Settings',
    path: '/settings',
    icon: <BsGear size={20}/>,
    submenu: true,
    subMenuItems: [
      { title: 'Account', path: '/settings/account' },
      { title: 'Privacy', path: '/settings/privacy' },
    ],
  },
  {
    title: 'Help',
    path: '/help',
    icon: <BsQuestionCircle size={20}/>,
  },
];