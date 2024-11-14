import { SlowComponent } from "./components/slow-component";
import { AdditionalComplexThings, BlaBla } from "./components/dummy-components";
import DynamicScroll from "./components/dynamic-scroll";
import { UseReducerComponent } from "./components/reducer-component";

export default function App() {
  return (
    <DynamicScroll
      content={
        <>
          <UseReducerComponent />
          <SlowComponent />
          <BlaBla />
          <AdditionalComplexThings />
        </>
      }
    />
  );
}


