import { BrowserRouter, Route, Routes } from "react-router-dom";
// import ReactDOM from "react-dom/client";
import "./App.css";
import Body from "./component/Body";
import Header from "./pages/Header";
import ProductDetails from "./component/ProductDetails";
// import { Provider } from "react-redux";
// import store from "./component/utils/store";
import WishList from "./component/WishList";
import Bag from "./component/Bag";
import MyAccount from "./pages/MyAccount";
import ForgotPass from "./pages/ForgotPass";
import UpdatePass from "./pages/UpdatePass";

// const App = () => {
//   return (
//     <>
//       <Provider store={store}>
//         <Header />
//         <Outlet />
//       </Provider>
//     </>
//   );
// };

// const approuter = createBrowserRouter([
//   {
//     path: "/",
//     element: <Body />,
//   },
//   {
//     path: "/product/:id",
//     element: <ProductDetails />,
//   },
// ]);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<RouterProvider router={approuter} />);

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/WishList" element={<WishList />} />
          <Route path="/Bag" element={<Bag />} />
          <Route path="/myAccount" element={<MyAccount />} />
          <Route path="/fogotPassword" element={<ForgotPass />} /> 
          <Route path="/reset-password/:id/:token" element={<UpdatePass/>} /> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
