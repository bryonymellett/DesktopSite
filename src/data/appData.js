import Notepad from "../Apps/Notepad/Notepad";
import Folder from "../Apps/Folders/Folder";
import RecycleBin from "../Apps/RecycleBin";
import NotWordle from "../Apps/NotWordle";

const apps = [
    { name: 'Recycle Bin', image: './src/assets/DesktopIcons/RecycleBin.png', component: RecycleBin },
    { name: 'SharkData', image: './src/assets/DesktopIcons/PixelShark.png'},
    { name: 'Notepad', image: './src/assets/DesktopIcons/NewPage.png', component: Notepad },
    { name: 'Folder1', image: './src/assets/DesktopIcons/Folder.png', component: Folder},
    { name: 'Folder2', image: './src/assets/DesktopIcons/Folder.png', component: Folder},
    { name: 'Folder3', image: './src/assets/DesktopIcons/Folder.png', component: Folder},
    { name: 'README.md', image: './assets/DesktopIcons/Settings.png' },
    { name: 'Linkedin', image: './src/assets/DesktopIcons/LinkedIn.png' },
    { name: 'Github', image: './src/assets/DesktopIcons/GitHub.png' },
    { name: 'Terminal', image: './src/assets/DesktopIcons/Terminal.png' },
    { name: 'About/CV', image: './assets/DesktopIcons/Settings.png' },
    { name: 'Calculator', image: './assets/DesktopIcons/Settings.png' },
    { name: 'Calendar', image: './src/assets/DesktopIcons/CalendarIcon.png' },
    { name: 'NotWordle', image: './assets/DesktopIcons/Settings.png', component: NotWordle },
    { name: 'Is it David Attenborough?', image: './assets/DesktopIcons/Settings.png' },
    { name: 'Paint', image: './src/assets/DesktopIcons/Paint.png' },

  ];
  
  export default apps;