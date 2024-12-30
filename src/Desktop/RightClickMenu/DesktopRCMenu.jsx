import React, { useState } from 'react'
import Wallpapers from './Wallpapers';

function DesktopRCMenu({mousePosition, selectWallpaper}) {
    const [hovered, setHovered] = useState(false)

    const styles = {
        menu: {
          width: '230px', 
          height: '370px', 
          backgroundColor: '#1f1f1f',
          borderRadius: '10px',
          border: '1px solid rgba(128, 128, 128, 0.322)',
          justifyContent: 'center',
          justifyItems: 'center',
          alignItems: 'center',
          padding: '1px 5px 15px 5px' ,
          opacity: '85%',
          marginLeft: `${mousePosition.x}px`,
          marginTop: `${mousePosition.y}px`,
          position: 'absolute',
        }
    
      }
    
  return (
    <>
    <div style={styles.menu}>
        <p 
        className="menutext" 
        style={styles.menutext}
        onMouseEnter ={() => setHovered(true)}>
            Wallpaper
        </p>
    </div>
    {hovered && <Wallpapers mousePosition={mousePosition} selectWallpaper={selectWallpaper}/>}
    </>
  )
}

export default DesktopRCMenu;
