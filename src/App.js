import React, { useState } from 'react';
import { Routes, Route, Link } from "react-router-dom";
import CourseContainer from './components/CourseContainer';
import CourseDetails from './components/CourseDetails';
import Header from './components/Navbar/Header';
import { NotFound } from './components/NotFound';
import PrivateRoute from './components/PrivateRoute';
import SignIn from './components/SignIn';
function App() {
  const [email, setEmail] = useState('');
  return (
    <>
      <div>
        <ul style={{ display: 'flex', justifyContent: 'space-around', listStyle: 'none' }}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="page1">Page 1</Link></li>
          <li><Link to="page2">Page 2</Link></li>
          <li><Link to="page3">Page 3</Link></li>
        </ul>
      </div>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/"
          element={
            <PrivateRoute>
              <CourseContainer email={email} setEmail={setEmail} />
            </PrivateRoute>
          }
        />
        <Route
          path="/course/:courseId"
          element={
            <PrivateRoute>
              <CourseDetails email={email} setEmail={setEmail} />
            </PrivateRoute>
          }
        />
        <Route path="/login" element={<SignIn email={email} setEmail={setEmail} />} />
      </Routes>
    </>
  );
}

export default App;
