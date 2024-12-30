import React from 'react'

function Taskbar() {
    
    const styles = {
        taskbar: {
            width: '100vw',
            height: '50px',
            backgroundColor: ' #2a2721',
            position: 'fixed',
            bottom: '0',
            left: '0',
            borderTop: '1px solid rgba(128, 128, 128, 0.322)',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
        },
        tray: {
            display: 'flex',
            gap: '5px',
            flexDirection: 'row',
            height: '100%',
            alignItems: 'center'
        },
        trayicon: {
            backgroundImage: `url('./src/assets/Icons/Windows.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat ',
            transform: 'scale(0.65)'
        }
    }
  return (
    <div style={styles.taskbar}>
        <div style={styles.tray}>
            <div 
            style={styles.trayicon}
            className="windowsicon"
            >                            
            </div>
            <div style={styles.trayicon}></div>
            <div style={styles.trayicon}></div>

        </div>

        <div style={styles.settings}></div>
    </div>
  )
}


export default Taskbar