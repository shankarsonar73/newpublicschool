import React, { useState } from "react";
import Footer from "../components/Footer";
import logo from "../assets/ASCA.png";
import ExploreFuture from "../components/ExploreFuture";
import NavBar1 from "../components/navbar/NavBar1";
import NavBar2 from "../components/navbar/NavBar2";
import Navigation from "../components/navbar/Navigation";

function Academic2() {
  const [activeSection, setActiveSection] = useState('overview');

  const renderContent = () => {
    switch(activeSection) {
      case 'overview':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold mb-4">Formative Assessment Overview</h2>
            <p className="text-zinc-700">
              Formative Assessment for Classes III to VII involves suggested activities by teachers to assess the expected level of learning across different subjects. These activities are designed to evaluate students' skills, knowledge, and overall development through various interactive and comprehensive methods.
            </p>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Key Assessment Areas</h3>
              <ul className="list-disc list-inside text-zinc-700">
                <li>Home and Class Assignments</li>
                <li>Oral Questioning and Quizzes</li>
                <li>Seminars and Symposiums</li>
                <li>Group Discussions</li>
                <li>Project-based Learning</li>
                <li>Action Plans</li>
                <li>Surveys</li>
              </ul>
            </div>
          </div>
        );
      
      case 'subjects':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold mb-4">Subject-wise Assessment Activities</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2">1. Languages (English/Hindi)</h3>
                <p className="text-zinc-700">
                  Activities include listening comprehension, conversations, dialogues, oral quizzes, story telling, presentations, role play, reading comprehension, creative writing, and group projects.
                </p>
                <div className="mt-2">
                  <h4 className="font-medium">Quarterly Focus:</h4>
                  <ul className="list-disc list-inside text-zinc-700">
                    <li>April-May: Listening comprehension, Conversations</li>
                    <li>July-August: Reading Comprehension, Story Development</li>
                    <li>November-December: Presentations, Oral Quizzes</li>
                    <li>January-February: Creative Writing, Role Play</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">2. Mathematics</h3>
                <p className="text-zinc-700">
                  Activities include oral quizzes, group projects, puzzles, data handling, problem solving, estimation, mapping, field activities, and math lab exercises.
                </p>
                <div className="mt-2">
                  <h4 className="font-medium">Quarterly Focus:</h4>
                  <ul className="list-disc list-inside text-zinc-700">
                    <li>April-May: Data Handling and Analysis</li>
                    <li>July-August: Problem Solving, Puzzles</li>
                    <li>November-December: Estimation, Field Activities</li>
                    <li>January-February: Group Projects, Oral Quizzes</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">3. Environmental Studies</h3>
                <p className="text-zinc-700">
                  Activities include reading with purpose, role play, presentations, group discussions, surveys, chart making, model creation, map reading, and investigations.
                </p>
                <div className="mt-2">
                  <h4 className="font-medium">Quarterly Focus:</h4>
                  <ul className="list-disc list-inside text-zinc-700">
                    <li>April-May: Reading, Role Play, Oral Quizzes</li>
                    <li>July-August: Current Topic Presentations, Projects</li>
                    <li>November-December: Charts, Models, Group Discussion</li>
                    <li>January-February: Source-based Analysis, Investigations</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        );
      
      case 'assessment-methods':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold mb-4">Assessment Methods</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2">a. Seminars</h3>
                <p className="text-zinc-700">
                  8-10 students research and present a divided topic. Assessed on research ability, content knowledge, public speaking, verbal expression, ICT skills, and leadership.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">b. Group Discussions</h3>
                <p className="text-zinc-700">
                  10 students discuss a topic with defined roles: group leader, moderator, and recorder. Assessed on teamwork, communication, content knowledge, and interpersonal skills.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">c. Action Plans</h3>
                <p className="text-zinc-700">
                  Students identify community problems, analyze causes, interact with stakeholders, and develop solution strategies. Focuses on problem-solving, community awareness, and collaborative skills.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">d. Project-based Learning</h3>
                <p className="text-zinc-700">
                  Includes investigatory and experimental projects involving data collection, hypothesis testing, analysis, and drawing conclusions. Develops critical thinking, research, and analytical skills.
                </p>
              </div>
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
          Formative Assessment
        </p>
        <div className="flex">
          <p className="font-semibold text-white">Home</p>
          <p className="px-3 font-semibold text-white">/</p>
          <p className="font-semibold text-yellow-400">Assessment</p>
        </div>
      </div>

      <div className="min-h-fit w-fit px-4 md:px-14 py-[80px]">
        <div>
          <div className="flex items-center justify-center">
            <img
              alt="school logo"
              src={logo}
              className="w-[70px] h-[70px] object-contain rounded-lg"
            />
          </div>
          <div className="font-bold text-2xl md:text-3xl pt-5 text-center">
            Formative Assessment for Classes III to VII
          </div>

          <div className="mt-8 mb-6 flex justify-center space-x-4">
            <button 
              onClick={() => setActiveSection('overview')}
              className={`px-4 py-2 rounded ${activeSection === 'overview' ? 'bg-green-700 text-white' : 'bg-gray-200'}`}
            >
              Overview
            </button>
            <button 
              onClick={() => setActiveSection('subjects')}
              className={`px-4 py-2 rounded ${activeSection === 'subjects' ? 'bg-green-700 text-white' : 'bg-gray-200'}`}
            >
              Subject Activities
            </button>
            <button 
              onClick={() => setActiveSection('assessment-methods')}
              className={`px-4 py-2 rounded ${activeSection === 'assessment-methods' ? 'bg-green-700 text-white' : 'bg-gray-200'}`}
            >
              Assessment Methods
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

export default Academic2;