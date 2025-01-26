import React, { useState } from 'react'

import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import NavBar1 from '../components/navbar/NavBar1';
import NavBar2 from '../components/navbar/NavBar2';
import Navigation from '../components/navbar/Navigation';
import Footer from './Footer';

function Loginregister() {
  const [activeTab, setActiveTab] = useState("register");

  return (
    <div>
    <NavBar1 />
    <NavBar2 />
    <Navigation />
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
    
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
        <div className="flex justify-between border-b pb-2 mb-4">
          <button
            className={`${
              activeTab === "register" ? "border-b-2 border-red-500" : ""
            } text-lg font-semibold pb-2`}
            onClick={() => setActiveTab("register")}
          >
            Register
          </button>
          <button
            className={`${
              activeTab === "login" ? "border-b-2 border-red-500" : ""
            } text-lg font-semibold pb-2`}
            onClick={() => setActiveTab("login")}
          >
            Login
          </button>
        </div>

        {activeTab === "register" && <RegisterForm />}
        {activeTab === "login" && <LoginForm />}
      </div>
    </div>

    <Footer />
    </div>
  );
};

const RegisterForm = () => {
  return (
    <form className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <select className="border p-2 rounded" required>
          <option value="">--Select Academic Year--</option>
          <option value="2025">2025</option>
          <option value="2026">2026</option>
        </select>
        <select className="border p-2 rounded" required>
          <option value="">--Select Class--</option>
          <option value="1">Class 1</option>
          <option value="2">Class 2</option>
        </select>
      </div>
      <input type="text" placeholder="First Name" className="border w-full p-2 rounded" required />
      <input type="text" placeholder="Middle Name" className="border w-full p-2 rounded" />
      <input type="text" placeholder="Last Name" className="border w-full p-2 rounded" required />
      <div className="grid grid-cols-2 gap-4">
        <select className="border p-2 rounded" required>
          <option value="">--Select Gender--</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <input type="date" className="border p-2 rounded" required />
      </div>
      <div className="flex items-center gap-2">
        <span className="border p-2 rounded">+91</span>
        <input
          type="tel"
          placeholder="Mobile Number"
          className="border w-full p-2 rounded"
          required
        />
      </div>
      <input type="email" placeholder="Email Address" className="border w-full p-2 rounded" required />
      <select className="border w-full p-2 rounded" required>
        <option value="">--Select Source of Info--</option>
        <option value="ad">Advertisement</option>
        <option value="friend">Friend</option>
      </select>
      <div className="flex items-center gap-2">
        <input type="checkbox" id="agreement" required />
        <label htmlFor="agreement" className="text-sm">
          I agree to receive information regarding my submitted application by signing up on (School Name)*
        </label>
      </div>
      <button className="w-full bg-red-500 text-white p-2 rounded">Register</button>
    </form>
  );
};

const LoginForm = () => {
  return (
    <form className="space-y-4">
      <input type="email" placeholder="Email Address" className="border w-full p-2 rounded" required />
      <input type="password" placeholder="Password" className="border w-full p-2 rounded" required />
      <button className="w-full bg-red-500 text-white p-2 rounded">Login</button>
    </form>
  );
};

export default Loginregister