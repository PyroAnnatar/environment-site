import React, { useState } from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";

import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import SharedLayout from "./pages/SharedLayout";
import Livestock from "./pages/Livestock";
import FarmAnalytics from "./pages/FarmAnalytics";
import ProtectedRoute from "./pages/ProtectedRoute";
import Error from "./pages/Error";

// Tododo
// Use the funny doge rice farmer avatar - ✔
// Test mode - ✔
// Try to figure out the animations maybe? - ✔
// User logic - ✔
// Protected Route - ✔
// 404 handling - ✔
// Close modal by clicking outside - ✔
// Show Password - ✔
// Some sort of error message for fun? Not really crucial but at this point we're doing things just to do things - ✔
// Make the test mode button really fancy for some obscure reason - ✔
// Spend too much excruciating time handcrafting the button even more - ✔

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [users, setUsers] = useState([]);
  const [test, setTest] = useState(true);
  const [currentUser, setCurrentUser] = useState(null);

  function testy() {
    setTest((prev) => !prev);
  }

  function handleAddUser(newUser) {
    if (!users.find((user) => user.username === newUser.username)) {
      setUsers((prev) => [...prev, newUser]);
      setCurrentUser(newUser);
    }
  }

  function modifyCurrentUser(user) {
    setCurrentUser(user);
  }

  function clearCurrentUser() {
    setCurrentUser(null);
  }

  function handleOpenModal() {
    setIsOpen(true);
  }
  function handleCloseModal() {
    setIsOpen(false);
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Login
              users={users}
              testy={testy}
              test={test}
              modifyCurrentUser={modifyCurrentUser}
            />
          }
        />
        <Route
          path="/Sign-Up"
          element={
            <SignUp
              modifyCurrentUser={modifyCurrentUser}
              testy={testy}
              test={test}
              users={users}
              handleAddUser={handleAddUser}
            />
          }
        />
        <Route
          path="/Dashboard"
          element={
            <ProtectedRoute currentUser={currentUser} test={test}>
              <SharedLayout
                clearCurrentUser={clearCurrentUser}
                currentUser={currentUser}
                handleOpenModal={handleOpenModal}
                handleCloseModal={handleCloseModal}
                isOpen={isOpen}
              />
            </ProtectedRoute>
          }
        >
          <Route index element={<Dashboard />} />
          <Route path="Livestock" element={<Livestock />} />
          <Route path="Farm-Analytics" element={<FarmAnalytics />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
