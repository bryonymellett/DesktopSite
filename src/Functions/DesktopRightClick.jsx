import React from 'react';

function DesktopRightClick() {
  const styles = {
    menu: {
      width: '300px', 
      height: '300px', 
      backgroundColor: 'lightblue'
    }
  }


  return (
    <div 
      onContextMenu={handleRightClick}
      style={styles.menu}
    >
      Right-click on this box
    </div>
  );
}

export default DesktopRightClick;