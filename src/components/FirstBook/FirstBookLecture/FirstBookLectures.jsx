import React from "react";
import "./FirstBookLecture.css";

const FirstBookLectures = () => {
  const Lectures = [
    {
      id: 1,
      src:"https://www.youtube.com/embed/7hrlVseVORo?si=vnWh02vDyyQvoDVL",
      lessonNo: "Lesson No 1",
      title: "Mafaheem-e-quran",
      details:
        "Teacher: Molana Dr. Syed Sajjad Hussain Naqvi PHD in Tafsee-e-Quran",
    },{
      id: 2,
      src:"https://www.youtube.com/embed/Mo3Aiv4yA2A?si=Ap4WMSPsmpODGmg3",
      lessonNo: "Lesson No 2",
      title: "Mafaheem-e-quran",
      details:
        "Teacher: Molana Dr. Syed Sajjad Hussain Naqvi PHD in Tafsee-e-Quran",
    },{
      id: 3,
      src:"https://www.youtube.com/embed/e8ZCh64uPzc?si=SNge9KM8FXvLFIvc",
      lessonNo: "Lesson No 3",
      title: "Mafaheem-e-quran",
      details:
        "Teacher: Molana Dr. Syed Sajjad Hussain Naqvi PHD in Tafsee-e-Quran",
    },{
      id: 4,
      src:"https://www.youtube.com/embed/6bN3Ud97O1Y?si=Rlpd1LRETRiZyev8",
      lessonNo: "Lesson No 4",
      title: "Mafaheem-e-quran",
      details:
        "Teacher: Molana Dr. Syed Sajjad Hussain Naqvi PHD in Tafsee-e-Quran",
    },{
      id: 5,
      src:"https://www.youtube.com/embed/QaKq5_ZqTms?si=7fR_qTiv8hwMIA-t",
      lessonNo: "Lesson No 5",
      title: "Mafaheem-e-quran",
      details:
        "Teacher: Molana Dr. Syed Sajjad Hussain Naqvi PHD in Tafsee-e-Quran",
    },{
      id: 6,
      src:"https://www.youtube.com/embed/KQ2NctcSJos?si=-5WGlGq7YMVvjkKj",
      lessonNo: "Lesson No 6",
      title: "Mafaheem-e-quran",
      details:
        "Teacher: Molana Dr. Syed Sajjad Hussain Naqvi PHD in Tafsee-e-Quran",
    },{
      id: 7,
      src:"https://www.youtube.com/embed/7g7Lk9uaaTI?si=3fGi92kErxsD4WW9",
      lessonNo: "Lesson No 7",
      title: "Mafaheem-e-quran",
      details:
        "Teacher: Molana Dr. Syed Sajjad Hussain Naqvi PHD in Tafsee-e-Quran",
    },{
      id: 8,
      src:"https://www.youtube.com/embed/HfjesuTKpp4?si=1D5nQPjbGpX4Hrcw",
      lessonNo: "Lesson No 8",
      title: "Mafaheem-e-quran",
      details:
        "Teacher: Molana Dr. Syed Sajjad Hussain Naqvi PHD in Tafsee-e-Quran",
    },{
      id: 9,
      src:"https://www.youtube.com/embed/i6b4fq3RaSk?si=-VwA5VCWSSryPRmA",
      lessonNo: "Lesson No 9",
      title: "Mafaheem-e-quran",
      details:
        "Teacher: Molana Dr. Syed Sajjad Hussain Naqvi PHD in Tafsee-e-Quran",
    },{
      id: 10,
      src:"https://www.youtube.com/embed/jaSedxEoOKo?si=TKzp5BJKAwYMB_Zi",
      lessonNo: "Lesson No 10",
      title: "Mafaheem-e-quran",
      details:
        "Teacher: Molana Dr. Syed Sajjad Hussain Naqvi PHD in Tafsee-e-Quran",
    },{
      id: 11,
      src:"https://www.youtube.com/embed/AgUAHFyuGEE?si=Dsap0C2CoNxqN8pg",
      lessonNo: "Lesson No 11",
      title: "Mafaheem-e-quran",
      details:
        "Teacher: Molana Dr. Syed Sajjad Hussain Naqvi PHD in Tafsee-e-Quran",
    },{
      id: 12,
      src:"https://www.youtube.com/embed/Rcafu0V69kU?si=eBjlZRloeWK1waTv",
      lessonNo: "Lesson No 12",
      title: "Mafaheem-e-quran",
      details:
        "Teacher: Molana Dr. Syed Sajjad Hussain Naqvi PHD in Tafsee-e-Quran",
    },{
      id: 13,
      src:"https://www.youtube.com/embed/Eg4YUXfAFMk?si=T27FzAB3pZrnIq74",
      lessonNo: "Lesson No 13",
      title: "Mafaheem-e-quran",
      details:
        "Teacher: Molana Dr. Syed Sajjad Hussain Naqvi PHD in Tafsee-e-Quran",
    },{
      id: 14,
      src:"https://www.youtube.com/embed/F-V5wrOIMJw?si=jyeQqdDcR-URqEIL",
      
      lessonNo: "Lesson No 14",
      title: "Mafaheem-e-quran",
      details:
        "Teacher: Molana Dr. Syed Sajjad Hussain Naqvi PHD in Tafsee-e-Quran",
    },{
      id: 15,
      src:"https://www.youtube.com/embed/NOUg3C2n2GQ?si=dL26qP7yfF4lRO1O" ,
      lessonNo: "Lesson No 15",
      title: "Mafaheem-e-quran",
      details:
        "Teacher: Molana Dr. Syed Sajjad Hussain Naqvi PHD in Tafsee-e-Quran",
    },{
      id: 16,
      src:"https://www.youtube.com/embed/obkq5wYn2wM?si=6Mq78B40OznGapnP",
      lessonNo: "Lesson No 16",
      title: "Mafaheem-e-quran",
      details:
        "Teacher: Molana Dr. Syed Sajjad Hussain Naqvi PHD in Tafsee-e-Quran",
    },
  ]
  return (
    <div className="lectures">
      <div className="lecture-container">
      {Lectures.map((lecture) => (
        <div key={lecture.id} className="lecture-box">
          <iframe
            src={lecture.src}
            title={lecture.title}
          />
          <h1>{lecture.title}</h1>
          <h1>{lecture.lessonNo}</h1>
          <p>{lecture.details}</p>
        </div>
      ))}
      </div>
    </div>
  );
};

export default FirstBookLectures;
