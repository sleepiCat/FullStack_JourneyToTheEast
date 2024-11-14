import { Button } from "./button";
import { ModalDialog } from "./modal-dialog";
import useToggleDialog from "../hooks/useDialog";

const ToggleButtonWithDialog = () => {

  // function is destructured 
  const { isVisible, show, hide } = useToggleDialog();

  return (
    <>
      <Button onClick={show}>Show dialog</Button>
      {isVisible && <ModalDialog onClose={hide} />}
    </>
  );
};

export default ToggleButtonWithDialog;
