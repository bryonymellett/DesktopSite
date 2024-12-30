import { useEffect, useState } from 'react'
import './App.css'
import DesktopRCMenu from './Desktop/RightClickMenu/DesktopRCMenu'
import DesktopIcon from './Desktop/DesktopIcon';
import Taskbar from './Taskbar/Taskbar';
import apps from './data/appData';

function App() {
  const [desktopMenu, showDesktopMenu] = useState(false);
  const [mousePosition, setMousePosition] = useState({x: 0, y: 0});
  const [wallpaperPath, setWallpaperPath] = useState('./src/assets/Wallpapers/Whale.jpg');

  const [appList, setAppList] = useState(apps)

  useEffect(() => {
    setAppList(apps)
  }, [])
  

  const handleRightClick = (e) => {
    e.preventDefault();
    setMousePosition({
      x: e.clientX - 15,
      y: e.clientY - 11    
    })
    showDesktopMenu(current => !current)
    console.log(appList)
  };

  const selectWallpaper = (path) => {
    setWallpaperPath(path)
  }

  const styles = {
    background: {
      backgroundImage: `url(${wallpaperPath})`
    }
  }

  return (
    <>
      <div style={styles.background} className="desktopbg">
      {/* <Notepad /> */}

      <div 
      className="desktopcontainer"
      onContextMenu={handleRightClick}
      >
      {desktopMenu && <DesktopRCMenu mousePosition={mousePosition} selectWallpaper={selectWallpaper}/>}
      {appList.map((app, id)=>(
        <DesktopIcon key={id} app={app}/>
      ))}
      

    
        </div>
      </div>
      <Taskbar />
     
    </>
  )
}

export default App
