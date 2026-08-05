import React, { useState } from 'react';

function RecycleBin({openApp, setOpenApps}) {
  const [isOpen, setisOpen] = useState(0)
  const [value, setValue] = useState("");
  const [textLength, setTextLength] = useState(0);
  const [position, setPosition] = useState({ x: 100, y: 100 }); // Initial position of Notepad window
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 }); // Store the drag offset
  const [isMaximized, setIsMaximized] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

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
      left: isMaximized ? '0px' : `${position.x}px`, 
      top: isMaximized ? '0px' : `${position.y}px`, 
      cursor: 'move', // Change cursor to indicate drag mode
    },
    containerFlex: {
      width: '100%',
      height: '100%',
    },
    titlebar: {
      height: '38px',
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'flex-end',
      gap: '10px',
    },
    logo: {
          width: '20px',
          height: '20px',
          backgroundImage: `url('./src/assets/DesktopIcons/RecycleBin.png')`,
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          margin: '0px 0px 8px 10px'
    },
    tab: {
      width: '135px',
      minWidth: '30px',
      height: '25px',
      backgroundColor: '#2c2c2c',
      padding: '5px 7px -10px 7px',
      margin: '0px 0px 0px 0px',
      fontSize: '13px',
      borderRadius: '5px 5px 0px 0px',
      alignItems: 'center',
      padding: '1px 10px',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    addtab: {
      width: '10px',
      minWidth: '10px',
      height: '25px',
      backgroundColor: '#2c2c2c',
      padding: '5px 7px -10px 7px',
      margin: '0px 0px 0px 0px',
      fontSize: '13px',
      borderRadius: '5px 5px 0px 0px',
      alignItems: 'center',
      padding: '1px 10px',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
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
    toolbar: {
      height: '45px',
      width: '100%',
      backgroundColor: '#2c2c2c',
      alignContent: 'center',
      alignItems: 'center',
      fontSize: '13px',
      display: 'flex',
      flexDirection: 'row',
      gap: '20px',
      borderBottom: '1px solid rgba(128, 128, 128, 0.32)',
    },
    searchbar: {
      backgroundColor: '#8080802f',
      height: '30px',
      width: '400px',
      borderRadius: '5px',
      marginLeft: '200px',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      padding: '0px 0px 0px 10px'
    },
    foldercontainer: {
      backgroundColor: 'hsl(0%, 0%, 10%)',
      height: '83%',
      width: '100%',
      display: "flex",
    },
    sidebarpanel: {
      width: "160px",
      height: "95%",
      backgroundColor: "#252525",
      borderRight: '1px solid rgba(128, 128, 128, 0.322)',
      padding: "10px",
      display: "flex",
      flexDirection: "column",
      gap: "6px",
    },
    sidebarItem: {
      padding: "8px 10px",
      borderRadius: "5px",
      cursor: "pointer",
      fontSize: "14px",
    },
    filePane: {
      flex: 1,
      backgroundColor: "#1e1e1e",
      padding: "16px",
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, 90px)",
      alignContent: "start",
      gap: "18px",
      marginLeft: "8px",
    },
    file: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "8px",
      cursor: "pointer",
    },
    
  };

  const countCharacters = (e) => {
    setValue(e.target.value);
    setTextLength(value.length);
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

  // Handle the start of the drag
  const handleDragStart = (e) => {
    // Capture the initial mouse offset relative to the element's top-left corner
    const offsetX = e.clientX - position.x;
    const offsetY = e.clientY - position.y;
    setDragOffset({ x: offsetX, y: offsetY });
    e.target.classList.add('dragging');
  };

  // Handle the drag over event to allow dropping
  const handleDragOver = (e) => {
    e.preventDefault(); // Prevent default to allow drop
  };

  // Handle the drop event
  const handleDrop = (e) => {
    e.preventDefault();
    // Calculate new position by adjusting mouse position with the drag offset
    const newPosX = e.clientX - dragOffset.x;
    const newPosY = e.clientY - dragOffset.y;

    setPosition({
      x: newPosX, // Adjust position relative to mouse
      y: newPosY, // Adjust position relative to mouse
    });

    e.target.classList.remove('dragging');
  };

  return (
    <div
    style={styles.desktop}
    onDragOver={handleDragOver}
    onDrop={handleDrop}
  >
    <div
      style={styles.container}
      draggable="true"
      onDragStart={handleDragStart}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <div style={styles.containerFlex}>
        <div style={styles.titlebar}>
          <div style={styles.logo}></div>
          <div style={styles.tab}>
            <div>Recycle Bin</div>
            <div>✖</div>
          </div>
          <div style={styles.screencontrols}>
            <div onClick={minimizeNotepad}>🗕</div>
            <div onClick={maximizeNotepad}>🗖</div>
            <div onClick={closeNotepad}>✖</div>
          </div>
        </div>
        <div style={styles.toolbar}>
          <div style={styles.searchbar}>Search</div>
          <div></div>
          <div></div>
        </div>
        <div style={styles.foldercontainer}>
          <div style={styles.sidebarpanel}>
          <div style={styles.sidebarItem}>🏠 Home</div>
          <div style={styles.sidebarItem}>🖥️ Desktop</div>
          <div style={styles.sidebarItem}>📄 Documents</div>
          <div style={styles.sidebarItem}>📷 Pictures</div>
          <div style={styles.sidebarItem}>🎵 Music</div>
          <div style={styles.sidebarItem}>🎬 Videos</div>
          <div style={styles.sidebarItem}>🗑️ Recycle Bin</div>
        </div>

        <div style={styles.filePane}>
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} style={styles.file}>
              <div style={styles.icon}></div>
              <span style={styles.fileName}>
                Apple core {i + 1}
              </span>
            </div>
          ))}
        </div>
        </div>
             <div style={styles.footer}></div>
        </div>
    </div>
    </div>
  );
}

export default RecycleBin;
