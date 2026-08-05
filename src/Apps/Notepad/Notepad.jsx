import React, { useState, useEffect } from 'react';
import NotepadContent from './NotepadContent';
import NotepadTab from './NotepadTab';
import notepadDataset from '../../data/NotepadDataset';

function Notepad({openApp, setOpenApps}) {
  const [isOpen, setisOpen] = useState(0)
  const [value, setValue] = useState("");
  const [tabTitle, setTabTitle] = useState("");
  const [textLength, setTextLength] = useState(0);
  const [position, setPosition] = useState({ x: 100, y: 100 }); // Initial position of Notepad window
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 }); // Store the drag offset
  const [isMaximized, setIsMaximized] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [notepadData, setNotepadData] = useState(notepadDataset);
  const [activeTab, setActiveTab] = useState(1);

  useEffect(()=> {
    setNotepadData(notepadDataset)
  }, [])

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
      width: isMaximized ? '100vw' : '550px',
      height: isMaximized ? '100vh' : '700px',
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
    notepadlogo: {
          width: '20px',
          height: '20px',
          backgroundImage: `url('./src/assets/DesktopIcons/NewPage.png')`,
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
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
    tabtitle: {
      outline: 'none',
      border: 'none',
      cursor: 'text',
      backgroundColor: 'transparent'
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
      height: '83%',
      width: '100%',
    },
    textarea: {
      width: '95%',
      height: '10%',
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
      margin: '15px 0px 0px 0px',

    },
    
    
  };

  const AddTab = () => {
    setNotepadData([
      ...notepadData,
      {
        id:4,
        tabTitle: "Untitled",
        messageContent: ""
      }
    ])
  }

  const changeTabTitle = (e) => {
    setTabTitle(e.target.value);
  }

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

  const currentTab = notepadData.find(tab => tab.id === activeTab);

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
          <div style={styles.notepadlogo}></div>
          
          {notepadData.map((item, id)=>(
              <div 
              isActive={item.id === activeTab}
              onClick={()=>setActiveTab(item.id)}          
              style={{
                ...styles.tab,
                backgroundColor: item.id === activeTab ? "#3b3b3b" : "#2c2c2c",
  }}>
              <NotepadTab
                key={id}
                item={item}
              /><div>✖</div>
</div>
           ))}
          
          <div 
          style={styles.addtab}
          onClick={AddTab}
          >✚</div>
          <div style={styles.screencontrols}>
            <div onClick={minimizeNotepad}>🗕</div>
            <div onClick={maximizeNotepad}>🗖</div>
            <div onClick={closeNotepad}>✖</div>
          </div>
        </div>
        <div style={styles.toolbar}>
          <div>File</div>
          <div>Edit</div>
          <div>View</div>
        </div>
        <div style={styles.textcontainer}>
        
        <NotepadContent tab={currentTab}/>
          <textarea
            style={styles.textarea}
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
