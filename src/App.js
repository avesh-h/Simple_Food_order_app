import "./App.css";
import Carts from "./components/Cart/Carts";
import Navbar from "./components/Layout/Navbar";
import Products from "./components/Product/Products";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import LoginForm from "./components/Login/loginForm";
import RegisterForm from "./components/Register/RegisterForm";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { auth } from "./components/config/firebaseConfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { authActions } from "./store/LoginAuth";
import { ToastContainer, toast } from "react-toastify";

function App() {
  const dispatch = useDispatch();

  const [user, setUser] = useState({});

  const showCart = useSelector((state) => {
    return state.ui.cartVisible;
  });

  const isLoggedIn = useSelector((state) => {
    return state.auth.Authentication;
  });

  //Send Cartdata to the Firebase
  const cart = useSelector((state) => {
    return state.cart;
  });

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
        {isLoggedIn && (
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
