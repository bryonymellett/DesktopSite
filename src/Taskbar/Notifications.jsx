import React from 'react'

function Notifications() {
    const styles = {
     container: {
      width: '400px',
      height: '250px',
      backgroundColor: '#202020d0',
      borderRadius: '10px',
      border: '1px solid rgba(128, 128, 128, 0.322)',
      position: 'absolute',
      right: '15px',
      bottom: '70px',
    },
    icon: {
        width: '60px',
        height: '60px',
        backgroundImage: `url('./src/assets/DesktopIcons/PixelShark.png')`,
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        },
    }   
  return (
    
    <div style={styles.container}>Notifications</div>
  )
}

export default Notifications