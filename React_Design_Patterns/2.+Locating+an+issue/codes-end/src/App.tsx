import { SlowComponent } from "./components/slow-component";
import { AdditionalComplexThings, BlaBla } from "./components/dummy-components";
import { Button } from "./components/button";
import { useState } from "react";
import { ModalDialog } from "./components/modal-dialog";

export default function App() {
  const [visible, setVisible] = useState(false);
  return (
    <>
      {/* add the button */}
      <Button onClick={() => setVisible(true)}>Open Dialog</Button>
      {/* add the dialog itself */}
      {visible ? <ModalDialog onClose={() => setVisible(false)} /> : null}
      <SlowComponent />
      <BlaBla />
      <AdditionalComplexThings />
    </>
  );
}
