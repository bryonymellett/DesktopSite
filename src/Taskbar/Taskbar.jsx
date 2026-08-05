import React from 'react'
import Notifications from './Notifications'
import SearchPanel from './SearchPanel'

function Taskbar({openApps}) {
    
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
            alignItems: 'center',
            justifyContent: 'center',
            width: '30%',

        },
        trayapps: {
            display: 'flex',
            gap: '5px',
            flexDirection: 'row',
            height: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            width: '40%',

        },
        trayright: {
            width: '30%',
            right: '0',
            display: 'flex',
            justifyContent: 'right',
            alignItems: 'center',
        },
        trayicon: {
            backgroundImage: `url('./src/assets/Icons/Windows.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat ',
            transform: 'scale(0.65)',
            cursor: 'default',
        },
        icon: {
            width: '25px',
            height: '25px',
            backgroundImage: `url('./src/assets/Icons/NotificationBell.png')`,
            backgroundSize: 'contain',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
        },
    }

  return (
    <div style={styles.taskbar}>
        <div style={styles.tray}></div>
        <div style={styles.trayapps}>
            <div 
            style={styles.trayicon}
            className="windowsicon">                           
            </div>
            <div style={styles.trayicon} className="windowsicon">Search</div>
            
            <div>{openApps.map(app => (
                <img
                    key={app.name}
                    src={app.image}
                    alt={app.name}
                    style={{
                        width: "24px",
                        height: "24px",
                        margin: "0 4px"
                    }}
                />
            ))}
            </div>


        </div>

        <div style={styles.trayright}>
            <div style={styles.icon}></div>
            <div style={styles.icon}></div>
            <div style={styles.icon}></div>

            {/* <div>settimgs, clock, calendar, notifications</div> */}

        <Notifications/>
        <SearchPanel />
    </div>
    </div>
  )
}


export default Taskbar