import React, { useState } from "react";
import Footer from "../../components/Footer";
import logo from "../../assets/ASCA.png";
import ExploreFuture from "../../components/ExploreFuture";
import NavBar1 from "../../components/navbar/NavBar1";
import NavBar2 from "../../components/navbar/NavBar2";
import Navigation from "../../components/navbar/Navigation";

function Academic3() {
  const [activeSection, setActiveSection] = useState('classes-i-ii');

  const renderContent = () => {
    switch(activeSection) {
      case 'classes-i-ii':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Assessment Scheme for Classes I and II</h2>
            <ul className="list-disc list-inside text-zinc-700 space-y-2">
              <li>No formal examinations</li>
              <li>Evaluation through Continuous and Comprehensive Evaluation (CCE)</li>
              <li>Testing can be simultaneous with teaching or separate</li>
              <li>Minimum 8 CCE cycles planned</li>
              <li>Students should obtain at least 'C' grade</li>
              <li>10 CCE cycles planned to ensure 8 completed cycles</li>
              <li>Students typically unaware they are being tested</li>
            </ul>
          </div>
        );
      
      case 'classes-iii-vii':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Assessment Scheme for Classes III to VII</h2>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">First Term (April-September)</h3>
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="border p-2">Assessment Type</th>
                    <th className="border p-2">Percentage</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border p-2">Formative Assessment 1</td>
                    <td className="border p-2 text-center">10%</td>
                  </tr>
                  <tr>
                    <td className="border p-2">Formative Assessment 2</td>
                    <td className="border p-2 text-center">10%</td>
                  </tr>
                  <tr>
                    <td className="border p-2">Summative Assessment 1</td>
                    <td className="border p-2 text-center">30%</td>
                  </tr>
                </tbody>
              </table>

              <h3 className="text-xl font-semibold mt-4">Second Term (October-March)</h3>
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="border p-2">Assessment Type</th>
                    <th className="border p-2">Percentage</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border p-2">Formative Assessment 3</td>
                    <td className="border p-2 text-center">10%</td>
                  </tr>
                  <tr>
                    <td className="border p-2">Formative Assessment 4</td>
                    <td className="border p-2 text-center">10%</td>
                  </tr>
                  <tr>
                    <td className="border p-2">Summative Assessment 2</td>
                    <td className="border p-2 text-center">30%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        );
      
      case 'monitoring-tools':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Monitoring Tools</h2>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">For Classes I and II</h3>
              <ul className="list-disc list-inside text-zinc-700">
                <li>Continuous Evaluation Folder</li>
                <li>Achievement Record</li>
                <li>Result Register</li>
              </ul>

              <h3 className="text-xl font-semibold mt-4">For Classes III to VII</h3>
              <ul className="list-disc list-inside text-zinc-700">
                <li>Grade Slip (Term-wise)</li>
                <li>Achievement Record</li>
                <li>Result Register</li>
                <li>Anecdotal Record</li>
              </ul>

              <h3 className="text-xl font-semibold mt-4">Principal's Monitoring Tools</h3>
              <ul className="list-disc list-inside text-zinc-700">
                <li>Class Observation Form</li>
                <li>Performance Portfolio for Teachers</li>
              </ul>
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="overflow-hidden">
      <NavBar1 />
      <NavBar2 />
      <Navigation />
      <div className="bg-green-900 bg-opacity-90 bg-blend-overlay bg-cover bg-center w-full min-h-[300px] px-4 md:px-16 py-[100px] bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKKKpMvnn-dTKfy2a9H6Dv_-3uKrR2OXrtjA&s')]">
        <p className="pb-3 text-3xl md:text-4xl font-bold text-white">
          Assessment Scheme
        </p>
        <div className="flex">
          <p className="font-semibold text-white">Home</p>
          <p className="px-3 font-semibold text-white">/</p>
          <p className="font-semibold text-yellow-400">Assessment</p>
        </div>
      </div>

      <div className="min-h-fit w-full px-4 md:px-14 py-[80px]">
        <div>
          <div className="flex items-center justify-center">
            <img
              alt="school logo"
              src={logo}
              className="w-[70px] h-[70px] object-contain rounded-lg"
            />
          </div>
          <div className="font-bold text-2xl md:text-3xl pt-5 text-center">
            Comprehensive Assessment Scheme
          </div>

          <div className="mt-8 mb-6 flex justify-center space-x-4">
            <button 
              onClick={() => setActiveSection('classes-i-ii')}
              className={`px-4 py-2 rounded ${activeSection === 'classes-i-ii' ? 'bg-green-700 text-white' : 'bg-gray-200'}`}
            >
              Classes I-II
            </button>
            <button 
              onClick={() => setActiveSection('classes-iii-vii')}
              className={`px-4 py-2 rounded ${activeSection === 'classes-iii-vii' ? 'bg-green-700 text-white' : 'bg-gray-200'}`}
            >
              Classes III-VII
            </button>
            <button 
              onClick={() => setActiveSection('monitoring-tools')}
              className={`px-4 py-2 rounded ${activeSection === 'monitoring-tools' ? 'bg-green-700 text-white' : 'bg-gray-200'}`}
            >
              Monitoring Tools
            </button>
          </div>

          <div className="pt-8 px-4 md:px-0">
            {renderContent()}
          </div>
        </div>
      </div>

      <ExploreFuture />
      <Footer />
    </div>
  );
}

export default Academic3;