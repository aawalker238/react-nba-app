import style from '../Components/Header/SideNav/SideNavigation.css';

export default [
  {
    type: style.option,
    icon: 'home',
    text: 'Home',
    link: '/'
  },
  {
    type: style.option,
    icon: 'file-text-o',
    text: 'News',
    link: '/news'
  },
  {
    type: style.option,
    icon: 'play',
    text: 'Videos',
    link: '/videos'
  },
  {
    type: style.option,
    icon: 'sign-in',
    text: 'Log In',
    link: '/login'
  },
  {
    type: style.option,
    icon: 'sign-out',
    text: 'Log out',
    link: '/logout'
  }
];
