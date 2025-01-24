/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Footer from "../components/Footer";
import logo from "../assets/ASCA.png";
import ExploreFuture from "../components/ExploreFuture";
import NavBar1 from "../components/navbar/NavBar1";
import NavBar2 from "../components/navbar/NavBar2";
import Navigation from "../components/navbar/Navigation";

function Academic1() {
  return (
    <div className="overflow-hidden">
      <NavBar1 />
      <NavBar2 />
      <Navigation />
      <div className="bg-green-900 bg-opacity-90 bg-blend-overlay bg-cover bg-center w-full min-h-[300px] px-4 md:px-16 py-[100px] bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKKKpMvnn-dTKfy2a9H6Dv_-3uKrR2OXrtjA&s')]">
        <p className="pb-3 text-3xl md:text-4xl font-bold text-white">
        Assessments
        </p>
        <div className="flex">
          <p className="font-semibold text-white">Home</p>
          <p className="px-3 font-semibold text-white">/</p>
          <p className="font-semibold text-yellow-400">Assessments</p>
        </div>
      </div>

      <div className="min-h-fit w-fit px-4 md:px-14 py-[80px]">
        <div>
          <div className="flex items-center justify-center">
            <img
              alt="college logo"
              src={logo}
              className="w-[70px] h-[70px] object-contain rounded-lg"
            />
          </div>
          <div className="font-bold text-2xl md:text-3xl pt-5 text-center">
            Welcome to New Pune Public School
          </div>

          <div className="flex flex-col items-center justify-center pt-8 px-4 md:px-0">
            <p className="text-justify text-zinc-700 font-medium">
            Academic Assessment is an important part of teaching and learning process. Hence, the Assessment pattern has been developed after conducting research of various international standards together with a study of the NCERT guidelines.

The stress is laid on maximizing learning in the classroom, inducing a spirit to use the knowledge in real life situations. For the tiny tots, i.e. Classes Nursery to III, the academic year is divided into three terms. There are no formal examinations for these classes. However, evaluation of the child’s progress is done on the basis of day to day performance under the Continuous and Comprehensive Evaluation (CCE).

These theme based assessments are carried out in various ways which include written assessments via worksheets and written work done in the notebooks in school and at home, oral assessments via classroom discussions and interactions, and activity assessments that are judged primarily through Thursday activities, Project activities, Learning center activities, creative work etc.

Our school being affiliated to the CBSE, the assessments for the secondary sections is in adherence to the Assessment guidelines laid down by the boards. Continuous & Comprehensive Evaluation (CCE) is carried out throughout the session in various ways which include written work done in school and at home, verbal assessments via classroom discussions and interactions, project assignments and co-curricular activities.

The co-scholastic performance of the students is evaluated through various activities which are either individual or group tasks. We have incorporated several activities in our curriculum like Activities and clubs in classes IV to X, which enhances the innate co-scholastic talents amongst the students.

We also have the inter-class and intra-class events and competitions embedded in our curriculum. The participation and performance of the students in these activities and programs helps the Class teachers, Co-curricular teachers in evaluating the co-scholastic performance of the child.

For Classes VI to VIII, the academic year is divided into two terms. Students are evaluated through formal assessments as well as through their day to day performance.

Four formal assessments are conducted in the academic session, twice during each term. For Class IX, the academic year is divided into four terms.

Students are evaluated through formal assessments as well as through their day to day performance under CCE. Four formal assessments are conducted in the academic session, one at the end of each term and these include components like written test, multiple assessments, portfolio/notebooks and subject enrichment.

For Class X, the academic year is divided into four terms. The final evaluation of student’s progress is based on the formal assessments conducted at the end of each Term by School and the Board Examination conducted at the end of the session by CBSE. School’s evaluation is based on formal assessments as well as on the student’s day to day performance under CCE and these include components like written test, multiple assessments, portfolio/notebooks and subject enrichment.
            </p>
           
          </div>
        </div>

        
      </div>


      <ExploreFuture />

      <Footer />
    </div>
  );
}

export default Academic1;
