import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Searchbar from "./Components/Searchbar";
import { AuthWarpper } from "./context/auth";
import { CartWrapper } from "./context/cart";
import MyNavigation from "./MyNavigation";
import { Provider } from "react-redux";
import {store} from './State/store'

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
      <AuthWarpper>
        <CartWrapper>
          <ToastContainer />
          <Header />
          <Searchbar />
          <MyNavigation />
          <Footer />
        </CartWrapper>
      </AuthWarpper>
      </Provider>
    </BrowserRouter>
  );
}

export default App;