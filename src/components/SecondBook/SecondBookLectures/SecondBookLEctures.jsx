import React from "react";

const SecondBookLEctures = () => {
  const Lectures = [
    {
      id: 1,
      src: "https://www.youtube.com/embed/tDQKSz-gPa0?si=S5gvqBdFU5Gnz6b1",
      lessonNo: "Lesson No 1",
      title: "Mafaheem-e-quran",
      details:
        "Teacher: Molana Dr. Syed Sajjad Hussain Naqvi PHD in Tafsee-e-Quran",
    },
    {
      id: 2,
      src: "https://www.youtube.com/embed/78pnEWjzLX0?si=WeJdx5T-L3xibEd_",
      lessonNo: "Lesson No 2",
      title: "Mafaheem-e-quran",
      details:
        "Teacher: Molana Dr. Syed Sajjad Hussain Naqvi PHD in Tafsee-e-Quran",
    },{
      id: 3,
      src: "https://www.youtube.com/embed/xGV3poGXyL0?si=0wmjmjqCBuhUAYiC",
      lessonNo: "Lesson No 3",
      title: "Mafaheem-e-quran",
      details:
        "Teacher: Molana Dr. Syed Sajjad Hussain Naqvi PHD in Tafsee-e-Quran",
    },{
      id: 4,
      src: "https://www.youtube.com/embed/lP86WzU5lC0?si=LZutFMjh7Rb45qV8",
      lessonNo: "Lesson No 4",
      title: "Mafaheem-e-quran",
      details:
        "Teacher: Molana Dr. Syed Sajjad Hussain Naqvi PHD in Tafsee-e-Quran",
    },{
      id: 5,
      src: "https://www.youtube.com/embed/-J9JbuM0Dzk?si=ihURUEUBi2XmVEgM",
      lessonNo: "Lesson No 5",
      title: "Mafaheem-e-quran",
      details:
        "Teacher: Molana Dr. Syed Sajjad Hussain Naqvi PHD in Tafsee-e-Quran",
    },{
      id: 6,
      src: "https://www.youtube.com/embed/4SEhVMkokmU?si=YKAkpGO3p3w2uF_8",
      lessonNo: "Lesson No 6",
      title: "Mafaheem-e-quran",
      details:
        "Teacher: Molana Dr. Syed Sajjad Hussain Naqvi PHD in Tafsee-e-Quran",
    },{
      id: 7,
      src: "https://www.youtube.com/embed/F6NUyELrtgQ?si=ABlq4r0HMZ_VTN7Q",
      lessonNo: "Lesson No 7",
      title: "Mafaheem-e-quran",
      details:
        "Teacher: Molana Dr. Syed Sajjad Hussain Naqvi PHD in Tafsee-e-Quran",
    },{
      id: 8,
      src: "https://www.youtube.com/embed/CUUidvm4yVk?si=PJ_YEA1DWEVh6CdH",
      lessonNo: "Lesson No 8",
      title: "Mafaheem-e-quran",
      details:
        "Teacher: Molana Dr. Syed Sajjad Hussain Naqvi PHD in Tafsee-e-Quran",
    },{
      id: 9,
      src: "https://www.youtube.com/embed/QJFTINm-aos?si=Wh11nXwKodmTk5IJ",
      lessonNo: "Lesson No 9",
      title: "Mafaheem-e-quran",
      details:
        "Teacher: Molana Dr. Syed Sajjad Hussain Naqvi PHD in Tafsee-e-Quran",
    },{
      id: 10,
      src: "https://www.youtube.com/embed/XaO4I8Wg_E0?si=Wc384DDDyjN5dhVr",
      lessonNo: "Lesson No 10",
      title: "Mafaheem-e-quran",
      details:
        "Teacher: Molana Dr. Syed Sajjad Hussain Naqvi PHD in Tafsee-e-Quran",
    },{
      id: 11,
      src: "https://www.youtube.com/embed/Z2QEGiNangI?si=gOdd0PvVNQ-PpxBu",
      lessonNo: "Lesson No 11",
      title: "Mafaheem-e-quran",
      details:
        "Teacher: Molana Dr. Syed Sajjad Hussain Naqvi PHD in Tafsee-e-Quran",
    },{
      id: 12,
      src: "https://www.youtube.com/embed/Ce_tN1jMGZs?si=FS_3whTJ_NEtKO2M",
      lessonNo: "Lesson No 12",
      title: "Mafaheem-e-quran",
      details:
        "Teacher: Molana Dr. Syed Sajjad Hussain Naqvi PHD in Tafsee-e-Quran",
    },
    {
      id: 13,
      src: "https://www.youtube.com/embed/1pnKyo-YvF8?si=cZhlQnFH7iJTWVjh",
      lessonNo: "Lesson No 13",
      title: "Mafaheem-e-quran",
      details:
        "Teacher: Molana Dr. Syed Sajjad Hussain Naqvi PHD in Tafsee-e-Quran",
    },
    {
      id: 15,
      src: "https://www.youtube.com/embed/vlyWCS5CCLM?si=pu27DuNp4zSXEsuC",
      lessonNo: "Lesson No 15",
      title: "Mafaheem-e-quran",
      details:
        "Teacher: Molana Dr. Syed Sajjad Hussain Naqvi PHD in Tafsee-e-Quran",
    },
    {
      id: 16,
      src: "https://www.youtube.com/embed/SAKBH33sPiw?si=dk4HOmpEGqdnZ4TW",
      lessonNo: "Lesson No 16",
      title: "Mafaheem-e-quran",
      details:
        "Teacher: Molana Dr. Syed Sajjad Hussain Naqvi PHD in Tafsee-e-Quran",
    },
  ];
  return (
    <div className="lectures">
      <div className="lecture-container">
        {Lectures.map((lecture) => (
          <div key={lecture.id} className="lecture-box">
            <iframe src={lecture.src} title={lecture.title} allow=" autoplay; picture-in-picture; web-share" allowfullscreen />
            <h1>{lecture.title}</h1>
            <h1>{lecture.lessonNo}</h1>
            <p>{lecture.details}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SecondBookLEctures;
