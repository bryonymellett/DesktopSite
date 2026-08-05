import Notepad from "../Apps/Notepad/Notepad";
import Folder from "../Apps/Folders/Folder";
import RecycleBin from "../Apps/RecycleBin";
import NotWordle from "../Apps/NotWordle";

const apps = [
    { name: 'Recycle Bin', image: './src/assets/DesktopIcons/RecycleBin.png', component: RecycleBin },
    { name: 'SharkData', image: './src/assets/DesktopIcons/PixelShark.png'},
    { name: 'Notepad', image: './src/assets/DesktopIcons/NewPage.png', component: Notepad },
    { name: 'Folder1', image: './src/assets/DesktopIcons/Folder.png', component: Folder},
    { name: 'Settings', image: './assets/DesktopIcons/Settings.png' },
    { name: 'README.md', image: './assets/DesktopIcons/Settings.png' },
    { name: 'Linkedin', image: './assets/DesktopIcons/Settings.png' },
    { name: 'Github', image: './assets/DesktopIcons/Settings.png' },
    { name: 'Terminal', image: './assets/DesktopIcons/Settings.png' },
    { name: 'About/CV', image: './assets/DesktopIcons/Settings.png' },
    { name: 'Calculator', image: './assets/DesktopIcons/Settings.png' },
    { name: 'Calendar', image: './assets/DesktopIcons/Settings.png', component: NotWordle },
    { name: 'NotWordle', image: './assets/DesktopIcons/Settings.png' },
    { name: 'Is it David Attenborough?', image: './assets/DesktopIcons/Settings.png' },
    { name: 'Paint', image: './assets/DesktopIcons/Settings.png' },

// Tamagotchi





  ];
  
  export default apps;