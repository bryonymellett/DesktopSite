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
  const [openApps, setOpenApps] = useState([]);
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

    {/* background and right-click options */}
      <div 
        className="desktopcontainer"
        onContextMenu={handleRightClick}
      >

      {desktopMenu && <DesktopRCMenu mousePosition={mousePosition} selectWallpaper={selectWallpaper}/>}
     <div className="windowLayer">
    {openApps.map(app => {
      const AppComponent = app.component;
      return <AppComponent key={app.name} setOpenApps={setOpenApps}/>;
    })}
  </div>

      {appList.map((app, id)=>(
        <DesktopIcon 
          key={id} 
          app={app} 
          setOpenApps={setOpenApps}/>
      ))}

     
      

    
        </div>
      </div>
      <Taskbar openApps={openApps} />
     
    </>
  )
}

export default App
