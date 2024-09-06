import { SlowComponent } from "./components/slow-component";
import { AdditionalComplexThings, BlaBla } from "./components/dummy-components";
import { RaisedComponent } from "./RaisedState";

export default function App() {


  return (
    <>
      {/* <Button onClick={() => setVisible(true)}>Open Dialog</Button> */}
      {/* add the button */}
      <RaisedComponent/>
      <SlowComponent />
      <BlaBla />
      <AdditionalComplexThings />
    </>
  );
}
