import React from 'react'

function NotWordle({openApp, setOpenApps}) {

  const styles = {
    desktop: {
      width: '100vw',
      height: '100vh',
      backgroundColor: 'none',
      opacity: '100%',
      position: 'fixed',
      overflow: 'hidden',
      left: '0',
      bottom: '0',
      zIndex: '-1',
      visibility: isMinimized ? "hidden" : "visible",
    }, 
    container: {
      width: isMaximized ? '100vw' : '720px',
      height: isMaximized ? '100vh' : '550px',
      backgroundColor: '#202020',
      borderRadius: isMaximized ? '0px' : '10px',
      border: '1px solid rgba(128, 128, 128, 0.322)',
      display: 'flex',
      position: 'absolute', 
      cursor: 'move',
    },
  }
    
  return (
    <div style={styles.desktop}>
      <div
        style={styles.container}
        draggable="true"
        onDragStart={handleDragStart}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >HELLO

      </div>
    </div>
  )
}

export default NotWordle;