import React from "react";

function Folder() {
  const styles = {
    container: {
      width: "800px",
      height: "550px",
      backgroundColor: "#202020",
      border: "1px solid rgba(255,255,255,0.15)",
      borderRadius: "10px",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      color: "white",
      boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
    },

    titleBar: {
      height: "36px",
      backgroundColor: "#2b2b2b",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "0 12px",
      borderBottom: "1px solid rgba(255,255,255,0.08)",
      userSelect: "none",
    },

    title: {
      fontSize: "14px",
      fontWeight: 500,
    },

    windowControls: {
      display: "flex",
      gap: "12px",
      cursor: "pointer",
      fontSize: "14px",
    },

    toolbar: {
      height: "42px",
      backgroundColor: "#292929",
      display: "flex",
      alignItems: "center",
      gap: "10px",
      padding: "0 12px",
      borderBottom: "1px solid rgba(255,255,255,0.08)",
    },

    toolbarButton: {
      padding: "5px 10px",
      borderRadius: "5px",
      backgroundColor: "#343434",
      fontSize: "13px",
      cursor: "pointer",
    },

    addressBar: {
      flex: 1,
      backgroundColor: "#1b1b1b",
      borderRadius: "5px",
      padding: "7px 10px",
      fontSize: "13px",
      color: "#bbb",
    },

    body: {
      display: "flex",
      flex: 1,
      overflow: "hidden",
    },

    sidebar: {
      width: "220px",
      backgroundColor: "#252525",
      borderRight: "1px solid rgba(255,255,255,0.08)",
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
    },

    file: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "8px",
      cursor: "pointer",
    },

    icon: {
      width: "54px",
      height: "54px",
      backgroundColor: "#2f6fff",
      borderRadius: "8px",
    },

    fileName: {
      fontSize: "12px",
      textAlign: "center",
    },

    statusBar: {
      height: "28px",
      backgroundColor: "#292929",
      borderTop: "1px solid rgba(255,255,255,0.08)",
      display: "flex",
      alignItems: "center",
      padding: "0 12px",
      fontSize: "12px",
      color: "#999",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.titleBar}>
        <span style={styles.title}>Documents</span>

        <div style={styles.windowControls}>
          <span>🗕</span>
          <span>🗖</span>
          <span>✕</span>
        </div>
      </div>

      <div style={styles.toolbar}>
        <div style={styles.toolbarButton}>←</div>
        <div style={styles.toolbarButton}>→</div>
        <div style={styles.toolbarButton}>↑</div>

        <div style={styles.addressBar}>
          This PC &gt; Documents
        </div>
      </div>

      <div style={styles.body}>
        <div style={styles.sidebar}>
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
                Folder {i + 1}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div style={styles.statusBar}>
        12 items
      </div>
    </div>
  );
}

export default Folder;