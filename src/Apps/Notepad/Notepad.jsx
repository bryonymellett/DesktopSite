import React, { useState } from 'react';

function Notepad() {
  const [value, setValue] = useState("");
  const [textLength, setTextLength] = useState(0);
  const [position, setPosition] = useState({ x: 100, y: 100 }); // Initial position of Notepad window
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 }); // Store the drag offset

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
      zIndex: '-1'
    }, 
    container: {
      width: '500px',
      height: '700px',
      backgroundColor: '#202020',
      borderRadius: '10px',
      border: '1px solid rgba(128, 128, 128, 0.322)',
      display: 'flex',
      position: 'absolute', // Allow absolute positioning for dragging
      left: `${position.x}px`, // Set position dynamically
      top: `${position.y}px`, // Set position dynamically
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
    tab: {
      width: '120px',
      minWidth: '30px',
      height: '25px',
      backgroundColor: '#2c2c2c',
      padding: '5px 7px -10px 7px',
      fontSize: '13px',
      borderRadius: '5px 5px 0px 0px',
    },
    screencontrols: {
      display: 'flex',
      flexDirection: 'row',
      width: '90px',
      height: '35px',
      justifyContent: 'space-between',
      right: '0px',
    },
    toolbar: {
      height: '38px',
      width: '100%',
      backgroundColor: '#2c2c2c',
      alignContent: 'center',
      alignItems: 'center',
      fontSize: '13px',
      display: 'flex',
      flexDirection: 'row',
      gap: '20px',
    },
    textcontainer: {
      backgroundColor: '#272727',
      height: '550px',
      width: '100%',
    },
    textarea: {
      width: '100%',
      height: '100%',
      outline: 'none',
      padding: '15px',
      backgroundColor: 'transparent',
      borderWidth: '0',
      resize: 'none',
      textAlignVertical: 'top',
      fontSize: '15px',
    },
    footer: {
      height: '20px',
      width: '100%',
      backgroundColor: '#2c2c2c',
      fontSize: '11px',
    },
  };

  const countCharacters = (e) => {
    setValue(e.target.value);
    setTextLength(value.length);
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
          <div>I</div>
          <div style={styles.tab}>Untitled X</div>
          <div style={styles.tab}>+</div>
          <div style={styles.screencontrols}>
            <div>-</div>
            <div>sq</div>
            <div>x</div>
          </div>
        </div>
        <div style={styles.toolbar}>
          <div>File</div>
          <div>Edit</div>
          <div>View</div>
        </div>
        <div style={styles.textcontainer}>
          <textarea
            style={styles.textarea}
            onChange={countCharacters}
            value={value}
          />
        </div>
        <div style={styles.footer}>{textLength} characters</div>
      </div>
    </div>
    </div>
  );
}

export default Notepad;
