import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Contact from "./contact/contact";
// Home page
import Home from "./Home/Home";
// First book
import FirstBook from "./FirstBook/FirstBook";
import LessonOne from "./FirstBook/First book/1/LessonOne";
import LessonTwo from "./FirstBook/First book/2/LessonTwo";
import LessonThree from "./FirstBook/First book/3/LessonThree";
import LessonFour from "./FirstBook/First book/4/LessonFour";
import LessonFive from "./FirstBook/First book/5/LessonFive";
import LessonSix from "./FirstBook/First book/6/LessonSix";
import LessonSeven from "./FirstBook/First book/7/LessonSeven";
import LessonEight from "./FirstBook/First book/8/LessonEight";
import LessonNine from "./FirstBook/First book/9/LessonNine";
import LessonTen from "./FirstBook/First book/10/LessonTen";
import LessonEleven from "./FirstBook/First book/11/LessonEleven";
import LessonTwelve from "./FirstBook/First book/12/LessonTwelve";
import LessonThirteen from "./FirstBook/First book/13/LessonThirteen";
import LessonFourteen from "./FirstBook/First book/14/LessonFourteen";
import LessonFifteen from "./FirstBook/First book/15/LessonFifteen";
import LessonSixteen from "./FirstBook/First book/16/LessonSixteen";
// First book lectures
import FirstBookLectures from "./FirstBook/FirstBookLecture/FirstBookLectures";
// Second Book
import SecondBook from "./SecondBook/SecondBook";
// Second Book lectures
import SecondBookLEctures from "./SecondBook/SecondBookLectures/SecondBookLEctures";
// third Book
import ThirdBook from "./ThirdBook/ThirdBook";
import Lesson33 from "./ThirdBook/ThirdBook/1/Lesson33";
import Lesson34 from "./ThirdBook/ThirdBook/2/Lesson34";
import Lesson35 from "./ThirdBook/ThirdBook/3/Lesson35";
import Lesson36 from "./ThirdBook/ThirdBook/4/Lesson36";
import Lesson37 from "./ThirdBook/ThirdBook/5/Lesson37";
import Lesson38 from "./ThirdBook/ThirdBook/6/Lesson38";
import Lesson39 from "./ThirdBook/ThirdBook/7/Lesson39";
import Lesson40 from "./ThirdBook/ThirdBook/8/Lesson40";
import Lesson41 from "./ThirdBook/ThirdBook/9/Lesson41";
import Lesson42 from "./ThirdBook/ThirdBook/10/Lesson42";
import Lesson43 from "./ThirdBook/ThirdBook/11/Lesson43";
import Lesson44 from "./ThirdBook/ThirdBook/12/Lesson44";
import Lesson45 from "./ThirdBook/ThirdBook/13/Lesson45";
import Lesson46 from "./ThirdBook/ThirdBook/14/Lesson46";
import Lesson47 from "./ThirdBook/ThirdBook/15/Lesson47";
import Lesson48 from "./ThirdBook/ThirdBook/16/Lesson48";
// Third book lectures
import ThirdBookLectures from "./ThirdBook/ThirdBookLectures/ThirdBookLectures";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
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
          <Route
            path="/firstbooklectures"
            element={<FirstBookLectures />}
          ></Route>
          {/* Second book */}
          <Route path="/secondbook" element={<SecondBook />}></Route>
          {/* Second Book lectures */}
          <Route
            path="/secondbooklectures"
            element={<SecondBookLEctures />}
          ></Route>
          {/* Third book */}
          <Route path="/thirdbook" element={<ThirdBook />}></Route>
          <Route path="/Lesson33" element={<Lesson33 />}></Route>
          <Route path="/Lesson34" element={<Lesson34 />}></Route>
          <Route path="/Lesson35" element={<Lesson35 />}></Route>
          <Route path="/Lesson36" element={<Lesson36 />}></Route>
          <Route path="/Lesson37" element={<Lesson37 />}></Route>
          <Route path="/Lesson38" element={<Lesson38 />}></Route>
          <Route path="/Lesson39" element={<Lesson39 />}></Route>
          <Route path="/Lesson40" element={<Lesson40 />}></Route>
          <Route path="/Lesson41" element={<Lesson41 />}></Route>
          <Route path="/Lesson42" element={<Lesson42 />}></Route>
          <Route path="/Lesson43" element={<Lesson43 />}></Route>
          <Route path="/Lesson44" element={<Lesson44 />}></Route>
          <Route path="/Lesson45" element={<Lesson45 />}></Route>
          <Route path="/Lesson46" element={<Lesson46 />}></Route>
          <Route path="/Lesson47" element={<Lesson47 />}></Route>
          <Route path="/Lesson48" element={<Lesson48 />}></Route>
          {/* Third book lectures */}
          <Route
            path="/thirdbooklectures"
            element={<ThirdBookLectures />}
          ></Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
