import Routes from "./libs/Route/Routes";
import store from "./libs/StateManegment/Store/store";
import {Provider} from "react-redux";




function App() {
  return (
    <Provider store={store}>
        <Routes/>
    </Provider>
  );
}

export default App;
