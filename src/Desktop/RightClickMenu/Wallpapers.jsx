import React, { useState } from 'react'

function Wallpapers({mousePosition, selectWallpaper}) {
  const [wallpaperPath, setWallPaperPath] = useState("")

    const styles = {
        menu: {
          width: '290px', 
          height: '300px', 
          backgroundColor: '#1f1f1f',
          borderRadius: '10px',
          border: '1px solid rgba(128, 128, 128, 0.322)',
          justifyContent: 'center',
          justifyItems: 'center',
          alignItems: 'center',
          padding: '1px 5px 15px 5px' ,
          opacity: '95%',
          marginLeft: `${mousePosition.x + 235}px`,
          marginTop: `${mousePosition.y + 15}px`,
          position: 'absolute',
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          gap: '7px',
        },
        thumbnail: {
            width: '39%',
            height: '60px',
            border: '1px solid rgba(223, 208, 208, 0.84)',
            borderRadius: '3px',
            backgroundSize: 'cover',
            cursor: 'pointer'

        }
      }

    const wallpaperPaths = [
        './src/assets/Wallpapers/Shipwreck.jpg',
        './src/assets/Wallpapers/Sparkles.jpg',
        './src/assets/Wallpapers/Whale.jpg',
        './src/assets/Wallpapers/Shipwreck.jpg',
        './src/assets/Wallpapers/Sparkles.jpg',
        './src/assets/Wallpapers/Whale.jpg',
    ]

    const handleWallpaper = (path) => {
      selectWallpaper(path)
    }
    
  return (
    <div style={styles.menu}>
        {wallpaperPaths.map((path, id) => (
            <div 
            key={id}
            onClick={() => handleWallpaper(path)}
            style={{
                ...styles.thumbnail,
                backgroundImage: `url(${path})`,
                }}>

            </div>

        ))}


    </div>
  )
}

export default Wallpapers;