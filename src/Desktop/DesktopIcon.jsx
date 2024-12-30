import React, { useState } from "react";
import Notepad from "../Apps/Notepad/Notepad";

function DesktopIcon({app}) {
    const [appOpened, setAppOpened] = useState(false)

    const openApp = () => {
        setAppOpened(current => !current)
    }

    const AppComponent=app.component;
    
    const styles = {
        desktopicon: {
          width: '85px',
          height: '80px',
          padding: '0px',
          justifyContent: 'center',
    
        },
        iconcontainer: {
           width: '100%',
           height: '100%',
           display: 'flex',
           flexDirection: 'column',
           justifyContent: 'center',
           alignItems: 'center'
        },
        iconImage: {
          width: '60px',
          height: '60px',
          backgroundImage: `url('./src/assets/DesktopIcons/PixelShark.png')`,
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        },
        iconDescription: {
            fontSize: '11.5px',
            textShadow: '3px 2px 2px rgb(0, 0, 0)',
        }

      };

    return (
        <>
        <div 
            class="desktopicon"
            style={styles.desktopicon}
            onDoubleClick={openApp}>
                <div style={styles.iconcontainer}>
                    <div style=
                    {{...styles.iconImage, backgroundImage: `url(${app.image})`}}>
                    </div>
                    <div>
                        <p style={styles.iconDescription}>{app.name}</p>
                    </div>
                </div>
        </div>
        {/* {appOpened && "You've opened the app!"} */}
        {appOpened && <AppComponent/>}
        </>
    )
}

export default DesktopIcon;