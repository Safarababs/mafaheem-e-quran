import React from "react";
import content1 from "./Second Book/IMG_0076.jpg";
import content2 from "./Second Book/IMG_0077.jpg";
import content3 from "./Second Book/IMG_0078.jpg";
import content4 from "./Second Book/IMG_0079.jpg";
import content5 from "./Second Book/IMG_0080.jpg";
import content6 from "./Second Book/IMG_0081.jpg";
import content7 from "./Second Book/IMG_0082.jpg";
import content8 from "./Second Book/IMG_0083.jpg";
import content9 from "./Second Book/IMG_0084.jpg";
import content10 from "./Second Book/IMG_0085.jpg";
import content12 from "./Second Book/IMG_0086.jpg";
import content13 from "./Second Book/IMG_0087.jpg";
import content14 from "./Second Book/IMG_0088.jpg";
import content15 from "./Second Book/IMG_0089.jpg";



const Lesson22 = () => {
  const Content = [
    {
      id: 1,
      contentSrc: content1,
      alt: "content 1",
      title: "tafseer-e-quran",
      details:
        "Molana sajjad hussain naqvi give lecture of tafseer-e-quran. classes are held on google meet from iran",
    },
    {
      id: 2,
      contentSrc: content2,
      alt: "content 1",
      title: "tafseer-e-quran",
      details:
        "Molana sajjad hussain naqvi give lecture of tafseer-e-quran. classes are held on google meet from iran",
    },
    {
      id: 3,
      contentSrc: content3,
      alt: "content 1",
      title: "tafseer-e-quran",
      details:
        "Molana sajjad hussain naqvi give lecture of tafseer-e-quran. classes are held on google meet from iran",
    },
    {
      id: 4,
      contentSrc: content4,
      alt: "content 1",
      title: "tafseer-e-quran",
      details:
        "Molana sajjad hussain naqvi give lecture of tafseer-e-quran. classes are held on google meet from iran",
    },
    {
      id: 5,
      contentSrc: content5,
      alt: "content 1",
      title: "tafseer-e-quran",
      details:
        "Molana sajjad hussain naqvi give lecture of tafseer-e-quran. classes are held on google meet from iran",
    },
    {
      id: 6,
      contentSrc: content6,
      alt: "content 1",
      title: "tafseer-e-quran",
      details:
        "Molana sajjad hussain naqvi give lecture of tafseer-e-quran. classes are held on google meet from iran",
    },
    {
      id: 7,
      contentSrc: content7,
      alt: "content 1",
      title: "tafseer-e-quran",
      details:
        "Molana sajjad hussain naqvi give lecture of tafseer-e-quran. classes are held on google meet from iran",
    },
    {
      id: 8,
      contentSrc: content8,
      alt: "content 1",
      title: "tafseer-e-quran",
      details:
        "Molana sajjad hussain naqvi give lecture of tafseer-e-quran. classes are held on google meet from iran",
    },
    {
      id: 9,
      contentSrc: content9,
      alt: "content 1",
      title: "tafseer-e-quran",
      details:
        "Molana sajjad hussain naqvi give lecture of tafseer-e-quran. classes are held on google meet from iran",
    },
    {
      id: 10,
      contentSrc: content10,
      alt: "content 1",
      title: "tafseer-e-quran",
      details:
        "Molana sajjad hussain naqvi give lecture of tafseer-e-quran. classes are held on google meet from iran",
    },
    {
      id: 12,
      contentSrc: content12,
      alt: "content 1",
      title: "tafseer-e-quran",
      details:
        "Molana sajjad hussain naqvi give lecture of tafseer-e-quran. classes are held on google meet from iran",
    },{
      id: 13,
      contentSrc: content13,
      alt: "content 1",
      title: "tafseer-e-quran",
      details:
        "Molana sajjad hussain naqvi give lecture of tafseer-e-quran. classes are held on google meet from iran",
    },{
      id: 14,
      contentSrc: content14,
      alt: "content 1",
      title: "tafseer-e-quran",
      details:
        "Molana sajjad hussain naqvi give lecture of tafseer-e-quran. classes are held on google meet from iran",
    },{
      id: 15,
      contentSrc: content15,
      alt: "content 1",
      title: "tafseer-e-quran",
      details:
        "Molana sajjad hussain naqvi give lecture of tafseer-e-quran. classes are held on google meet from iran",
    }
  ];

  return (
    <section className="mafaheem">
      <div className="content-container">
        {Content.map((content, index) => (
          <div key={content.id} className="content-box">
            <img src={content.contentSrc} alt={content.title} loading="lazy" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Lesson22;
