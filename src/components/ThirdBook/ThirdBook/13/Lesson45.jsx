import React from "react";
import content1 from "./IMG_0119.jpg";
import content2 from "./IMG_0120.jpg";
import content3 from "./IMG_0121.jpg";
import content4 from "./IMG_0122.jpg";
import content5 from "./IMG_0123.jpg";
import content6 from "./IMG_0124.jpg";
import content7 from "./IMG_0125.jpg";
import content8 from "./IMG_0126.jpg";
import content9 from "./IMG_0127.jpg";
import content10 from "./IMG_0128.jpg";
import content11 from "./IMG_0129.jpg";
import content12 from "./IMG_0130.jpg";
import content13 from "./IMG_0131.jpg";
import content14 from "./IMG_0133.jpg";


const Lesson43 = () => {
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
      id: 11,
      contentSrc: content11,
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
    },
    {
      id: 13,
      contentSrc: content13,
      alt: "content 1",
      title: "tafseer-e-quran",
      details:
        "Molana sajjad hussain naqvi give lecture of tafseer-e-quran. classes are held on google meet from iran",
    },
    {
      id: 14,
      contentSrc: content14,
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

export default Lesson43;
