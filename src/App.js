import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import Body from "./component.js/Body";
import appstore from "./utils/appStore";

function App() {
  return (
    <Provider store={appstore}>
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
