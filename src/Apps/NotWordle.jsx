import React, { useState, useEffect } from "react";

function NotWordle({setOpenApps}) {
  const [position, setPosition] = useState({ x: 100, y: 100 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
  window.addEventListener("mousemove", handleMouseMove);
  window.addEventListener("mouseup", handleMouseUp);

  return () => {
    window.removeEventListener("mousemove", handleMouseMove);
    window.removeEventListener("mouseup", handleMouseUp);
  };
});

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
      visibility: "visible",
    }, 
    container: {
      width: '720px',
      height: '550px',
      backgroundColor: '#202020',
      borderRadius: '10px',
      border: '1px solid rgba(128, 128, 128, 0.322)',
      position: 'absolute',
      left: `${position.x}px`,
      top: `${position.y}px`,
      cursor: 'move',
    },
    toolbar: {
      display: 'flex',
      flexDirection: 'row',
    },
    screencontrols: {
      display: 'flex',
      flexDirection: 'row',
      width: '90px',
      height: '35px',
      justifyContent: 'space-between',
      position: 'absolute',
      right: '0',
      paddingRight: '10px',
      cursor: 'pointer'
    },
  }
  const handleMouseDown = (e) => {
  setIsDragging(true);

  setDragOffset({
    x: e.clientX - position.x,
    y: e.clientY - position.y,
  });
};

const handleMouseMove = (e) => {
  if (!isDragging) return;

  setPosition({
    x: e.clientX - dragOffset.x,
    y: e.clientY - dragOffset.y,
  });
};

const handleMouseUp = () => {
  setIsDragging(false);
};

  const closeNotepad = () => {
    setOpenApps([]);
  };

  const minimizeNotepad = () => {
    setIsMinimized(true);
  }

  const maximizeNotepad = () => {
    setIsMaximized(prev => !prev);
  };

    
  return (
    <div style={styles.desktop}>
      <div
        style={styles.container}
        onMouseDown={handleMouseDown}>
        <div style={styles.toolbar}> 
      NOT WORDLE

          <div style={styles.screencontrols}>
            <div onClick={minimizeNotepad}>🗕</div>
            <div onClick={maximizeNotepad}>🗖</div>
            <div onClick={closeNotepad}>✖</div>
          </div>
        </div>  
      </div>
    </div>
  )
}

export default NotWordle;