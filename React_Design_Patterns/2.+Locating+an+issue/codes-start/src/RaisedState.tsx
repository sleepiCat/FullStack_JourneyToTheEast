import React, { useState } from "react";
import { CustomButton } from "./components/foo";
import { Button } from "./components/button";
import { ModalDialog } from "./components/modal-dialog";

export const RaisedComponent = () => {

    const [visible, setVisible] = useState(false);
    let v = false;
    const [visible2, setVisible2] = useState(false);
    return (
        <>
        <CustomButton onClick={() => {console.log("I'm clicked!")
        v = true;
      }} component={<Button onClick={()=> setVisible(true)}>Prop Click</Button>}>Custom Click</CustomButton> 
      {/* add the dialog itself */}
      {v ? <ModalDialog onClose={ () => setVisible(false)}/> : null}
      {visible ? <ModalDialog onClose={ () => setVisible(false)}/> : null}
        </>
        
    )
}