import React from 'react'

function NotepadTab({item, onClick }) {
  return (
    <>
        <p onClick={onClick}>{item.tabTitle}
          
        </p>
    </>
  )
}

export default NotepadTab