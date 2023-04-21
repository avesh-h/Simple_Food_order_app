import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "./App.css";
import Carts from "./components/Cart/Carts";
import Navbar from "./components/Layout/Navbar";
import LoginForm from "./components/Login/loginForm";
import Products from "./components/Product/Products";
import RegisterForm from "./components/Register/RegisterForm";
import { auth } from "./components/config/firebaseConfig";
import { authActions } from "./store/LoginAuth";

function App() {
  const dispatch = useDispatch();

  const [user, setUser] = useState({});

  const showCart = useSelector((state) => {
    return state.ui.cartVisible;
  });

  const isLoggedIn = useSelector((state) => {
    return state.auth.Authentication;
  });

  const cart = useSelector((state) => {
    return state.cart;
  });

  //Send Cartdata to the Firebase
  useEffect(() => {
    if (isLoggedIn) {
      const sendCartData = async () => {
        const response = await fetch(
          "https://food-cart-app-3e126-default-rtdb.firebaseio.com/cart.json",
          {
            method: "PUT",
            body: JSON.stringify(cart),
          }
        );
      };
      sendCartData().catch((err) => {
        console.log(err);
      });
    }
  }, [cart]);

  //Register account
  const register = async (data) => {
    let user;
    try {
      user = await createUserWithEmailAndPassword(
        auth,
        data.registerEmail,
        data.registerPassword
      );
    } catch (err) {
      console.log(err.message);
      toast.error(err.message, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } finally {
      if (user) {
        window.open(`${process.env.REACT_APP_MY_URL}`, "_self");
      }
    }
  };

  // login accout
  const login = async (data) => {
    let user;
    try {
      user = await signInWithEmailAndPassword(
        auth,
        data.loginEmail,
        data.loginPassword
      );
    } catch (err) {
      console.log(err);
    } finally {
      if (user) {
        dispatch(authActions.login());
      } else {
        toast.error("Invalid Credential!", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }
    }
  };

  // Logout
  const logout = async () => {
    await signOut(auth);
    dispatch(authActions.logout());
  };

  useEffect(() => {
    auth.onAuthStateChanged((currUser) => {
      setUser(currUser);
    });
  }, []);

  return (
    <Router>
      <div className="App">
        <Navbar onLogout={logout} />
        <Routes>
          <Route
            path="/login"
            element={!isLoggedIn && <LoginForm onLogin={login} />}
          />
          <Route
            path="/signup"
            element={!isLoggedIn && <RegisterForm onRegister={register} />}
          />
        </Routes>
        {localStorage.getItem('loggedIn') && (
          <div>
            {showCart && <Carts />}
            <Products />
          </div>
        )}
      </div>
      <ToastContainer />
    </Router>
  );
}

export default App;
