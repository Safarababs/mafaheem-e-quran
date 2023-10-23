import React from "react";
import content1 from "./Second Book/IMG_0048.jpg";
import content2 from "./Second Book/IMG_0049.jpg";
import content3 from "./Second Book/IMG_0050.jpg";
import content4 from "./Second Book/IMG_0051.jpg";
import content5 from "./Second Book/IMG_0052.jpg";
import content6 from "./Second Book/IMG_0053.jpg";
import content7 from "./Second Book/IMG_0054.jpg";
import content8 from "./Second Book/IMG_0055.jpg";
import content9 from "./Second Book/IMG_0056.jpg";
import content10 from "./Second Book/IMG_0057.jpg";
import content12 from "./Second Book/IMG_0058.jpg";
import content13 from "./Second Book/IMG_0059.jpg";
import content14 from "./Second Book/IMG_0060.jpg";
import content15 from "./Second Book/IMG_0061.jpg";



const Lesson20 = () => {
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

export default Lesson20;
