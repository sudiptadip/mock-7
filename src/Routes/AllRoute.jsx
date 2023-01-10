import React from "react";
import { Routes, Route } from "react-router-dom";
import HomepageButton from "../Components/HomepageButton";
import Data from "../Pages/Data";
import Login from "../Pages/Login";
import Report from "../Pages/Report";
import UserForm from "../Pages/UserForm";
import PrivateRoute from "./PrivateRoute";
import PrivateRoute2 from "./PrivateRoute2";

export default function AllRoute() {
  return (
    <Routes>
      <Route path={"/"} element={<HomepageButton />} />
      <Route path={"/user"} element={<UserForm />} />
      <Route path={"/login"} element={<Login />} />
      <Route
        path={"/data"}
        element={
          <PrivateRoute re={<Login />}>
            <Data />
          </PrivateRoute>
        }
      />
      <Route
        path={"/report"}
        element={
          <PrivateRoute2 re={<Login />}>
            <Report />
          </PrivateRoute2>
        }
      />
    </Routes>
  );
}
