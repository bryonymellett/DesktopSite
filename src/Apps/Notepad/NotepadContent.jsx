import React from 'react'

function NotepadContent({tab}) {
    const styles = {
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
    }
  return (
    <div>
     <textarea
            style={styles.textarea}
            value={tab.messageContent}
          />
    </div>
  )
}

export default NotepadContent