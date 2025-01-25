import React, { useState } from "react";
import Footer from "../../components/Footer";
import logo from "../../assets/ASCA.png";
import ExploreFuture from "../../components/ExploreFuture";
import NavBar1 from "../../components/navbar/NavBar1";
import NavBar2 from "../../components/navbar/NavBar2";
import Navigation from "../../components/navbar/Navigation";

function Academic4() {
  const [activeSubject, setActiveSubject] = useState('english');

  const renderQuestionPaperDetails = () => {
    const subjects = {
      'english': {
        formativeAssessment: {
          marks: 40,
          time: '90 Minutes',
          competencies: [
            { name: 'Reading', marks: 5, type: 'VSA', questions: 5 }
          ]
        },
        summativeAssessment: {
          marks: 60,
          time: '2 Hours',
          competencies: [
            { name: 'Reading', marks: 20, types: ['VSA'] },
            { name: 'Writing', marks: 40, types: ['SA', 'VSA', 'LA'] }
          ]
        }
      },
      'mathematics': {
        formativeAssessment: {
          marks: 40,
          time: '90 Minutes',
          competencies: [
            { name: 'Concept', marks: 20, subtypes: ['Knowledge', 'Understanding'] },
            { name: 'Ability to Compute', marks: 10 },
            { name: 'Problem Solving', marks: 10 }
          ]
        },
        summativeAssessment: {
          marks: 60,
          time: '2 Hours',
          competencies: [
            { name: 'Concept', marks: 30, subtypes: ['Knowledge', 'Understanding'] },
            { name: 'Ability to Compute', marks: 15 },
            { name: 'Problem Solving', marks: 15 }
          ]
        }
      },
      'evs': {
        formativeAssessment: {
          marks: 40,
          time: '90 Minutes',
          competencies: [
            { name: 'Observation and Reporting', marks: 10 },
            { name: 'Identification and Classification', marks: 15 },
            { name: 'Discovery of Facts', marks: 15 }
          ]
        },
        summativeAssessment: {
          marks: 60,
          time: '2 Hours',
          competencies: [
            { name: 'Observation and Reporting', marks: 20 },
            { name: 'Identification and Classification', marks: 20 },
            { name: 'Discovery of Facts', marks: 20 }
          ]
        }
      }
    };

    const currentSubject = subjects[activeSubject];

    return (
      <div className="space-y-6 max-w-4xl mx-auto">
        <div>
          <h2 className="text-2xl font-bold mb-4">Formative Assessment</h2>
          <div className="bg-gray-100 p-4 rounded">
            <p><strong>Marks:</strong> {currentSubject.formativeAssessment.marks}</p>
            <p><strong>Time:</strong> {currentSubject.formativeAssessment.time}</p>
            <h3 className="text-xl font-semibold mt-2">Competency Weightage</h3>
            <ul className="list-disc list-inside">
              {currentSubject.formativeAssessment.competencies.map((comp, index) => (
                <li key={index}>
                  {comp.name}: {comp.marks} Marks 
                  {comp.subtypes && ` (${comp.subtypes.join(', ')})`}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Summative Assessment</h2>
          <div className="bg-gray-100 p-4 rounded">
            <p><strong>Marks:</strong> {currentSubject.summativeAssessment.marks}</p>
            <p><strong>Time:</strong> {currentSubject.summativeAssessment.time}</p>
            <h3 className="text-xl font-semibold mt-2">Competency Weightage</h3>
            <ul className="list-disc list-inside">
              {currentSubject.summativeAssessment.competencies.map((comp, index) => (
                <li key={index}>
                  {comp.name}: {comp.marks} Marks
                  {comp.subtypes && ` (${comp.subtypes.join(', ')})`}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold">Question Types</h3>
          <ul className="list-disc list-inside">
            <li>VSA (Very Short Answer): 1 Mark (One word to one sentence)</li>
            <li>SA (Short Answer): 2 Marks (Class III/IV: 10 Words, Class V: 20 Words)</li>
            <li>LA (Long Answer): 4-5 Marks (Class III: 30 Words, Class IV: 40 Words, Class V: 50 Words)</li>
          </ul>
        </div>
      </div>
    );
  };

  return (
    <div className="overflow-hidden">
      <NavBar1 />
      <NavBar2 />
      <Navigation />
      <div className="bg-green-900 bg-opacity-90 bg-blend-overlay bg-cover bg-center w-full min-h-[300px] px-4 md:px-16 py-[100px] bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKKKpMvnn-dTKfy2a9H6Dv_-3uKrR2OXrtjA&s')]">
        <div className="max-w-4xl mx-auto">
          <p className="pb-3 text-3xl md:text-4xl font-bold text-white">
            Question Paper Design
          </p>
          <div className="flex">
            <p className="font-semibold text-white">Home</p>
            <p className="px-3 font-semibold text-white">/</p>
            <p className="font-semibold text-yellow-400">Assessment Pattern</p>
          </div>
        </div>
      </div>

      <div className="min-h-fit w-full px-4 md:px-14 py-[80px]">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center">
            <img
              alt="school logo"
              src={logo}
              className="w-[70px] h-[70px] object-contain rounded-lg"
            />
          </div>
          <div className="font-bold text-2xl md:text-3xl pt-5 text-center">
            Assessment Paper Design (Classes III-VII)
          </div>

          <div className="mt-8 mb-6 flex justify-center space-x-4">
            <button 
              onClick={() => setActiveSubject('english')}
              className={`px-4 py-2 rounded ${activeSubject === 'english' ? 'bg-green-700 text-white' : 'bg-gray-200'}`}
            >
              English/Hindi
            </button>
            <button 
              onClick={() => setActiveSubject('mathematics')}
              className={`px-4 py-2 rounded ${activeSubject === 'mathematics' ? 'bg-green-700 text-white' : 'bg-gray-200'}`}
            >
              Mathematics
            </button>
            <button 
              onClick={() => setActiveSubject('evs')}
              className={`px-4 py-2 rounded ${activeSubject === 'evs' ? 'bg-green-700 text-white' : 'bg-gray-200'}`}
            >
              EVS
            </button>
          </div>

          <div className="pt-8 px-4 md:px-0">
            {renderQuestionPaperDetails()}
          </div>
        </div>
      </div>

      <ExploreFuture />
      <Footer />
    </div>
  );
}

export default Academic4;