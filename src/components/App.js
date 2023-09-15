import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './Navbar/Navbar';
// Home page
import Home from './Home/Home';
// First book 
import FirstBook from './FirstBook/FirstBook';
import LessonOne from './FirstBook/First book/1/LessonOne';
import LessonTwo from './FirstBook/First book/2/LessonTwo';
import LessonThree from './FirstBook/First book/3/LessonThree';
import LessonFour from './FirstBook/First book/4/LessonFour';
import LessonFive from './FirstBook/First book/5/LessonFive';
import LessonSix from './FirstBook/First book/6/LessonSix';
import LessonSeven from './FirstBook/First book/7/LessonSeven';
import LessonEight from './FirstBook/First book/8/LessonEight';
import LessonNine from './FirstBook/First book/9/LessonNine';
import LessonTen from './FirstBook/First book/10/LessonTen';
import LessonEleven from './FirstBook/First book/11/LessonEleven';
import LessonTwelve from './FirstBook/First book/12/LessonTwelve';
import LessonThirteen from './FirstBook/First book/13/LessonThirteen';
import LessonFourteen from './FirstBook/First book/14/LessonFourteen';
import LessonFifteen from './FirstBook/First book/15/LessonFifteen';
import LessonSixteen from './FirstBook/First book/16/LessonSixteen';
// First book lectures
import FirstBookLectures from './FirstBook/FirstBookLecture/FirstBookLectures';
// Second Book
import SecondBook from './SecondBook/SecondBook';
// Second Book lectures
import SecondBookLEctures from './SecondBook/SecondBookLectures/SecondBookLEctures';
// third Book
import ThirdBook from './ThirdBook/ThirdBook';
// Third book lectures
import ThirdBookLectures from './ThirdBook/ThirdBookLectures/ThirdBookLectures';


const App = () => {
  return (
    <>
      <Router>
      <Navbar />
      <Routes>
      <Route path='/' exact element={<Home />}></Route>
      {/* first Book */}
      <Route path="/firstbook" element={<FirstBook />}></Route>
      <Route path="/LessonOne" element={<LessonOne />}></Route>
      <Route path="/LessonTwo" element={<LessonTwo />}></Route>
      <Route path="/LessonThree" element={<LessonThree />}></Route>
      <Route path="/LessonFour" element={<LessonFour />}></Route>
      <Route path="/LessonFive" element={<LessonFive />}></Route>
      <Route path="/LessonSix" element={<LessonSix />}></Route>
      <Route path="/LessonSeven" element={<LessonSeven />}></Route>
      <Route path="/LessonEight" element={<LessonEight />}></Route>
      <Route path="/LessonNine" element={<LessonNine />}></Route>
      <Route path="/LessonTen" element={<LessonTen />}></Route>
      <Route path="/LessonEleven" element={<LessonEleven />}></Route>
      <Route path="/LessonTwelve" element={<LessonTwelve />}></Route>
      <Route path="/LessonThirteen" element={<LessonThirteen />}></Route>
      <Route path="/LessonFourteen" element={<LessonFourteen />}></Route>
      <Route path="/LessonFifteen" element={<LessonFifteen />}></Route>
      <Route path="/LessonSixteen" element={<LessonSixteen />}></Route>
      {/* First Book lectures */}
      <Route path="/firstbooklectures" element={<FirstBookLectures />}></Route>
      {/* Second book */}
      <Route path="/secondbook" element={<SecondBook />}></Route>
      {/* Second Book lectures */}
      <Route path="/secondbooklectures" element={<SecondBookLEctures />}></Route>
      {/* Third book */}
      <Route path="/thirdbook" element={<ThirdBook />}></Route>
      {/* Third book lectures */}
      <Route path="/thirdbooklectures" element={<ThirdBookLectures />}></Route>
      </Routes>
      </Router>
    </>
  )
}

export default App
