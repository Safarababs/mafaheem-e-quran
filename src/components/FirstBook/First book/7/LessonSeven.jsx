import React, { useState } from "react";
import content1 from "./IMG_0001.jpg";
import content2 from "./IMG_0002.jpg";
import content3 from "./IMG_0003.jpg";
import content4 from "./IMG_0004.jpg";
import content5 from "./IMG_0005.jpg";
import content6 from "./IMG_0006.jpg";
import content7 from "./IMG_0007.jpg";
import content8 from "./IMG_0008.jpg";
import content9 from "./IMG_0009.jpg";
import content10 from "./IMG_0010.jpg";
import content11 from "./IMG_0011.jpg";
import content12 from "./IMG_0012.jpg";
import content13 from "./IMG_0013.jpg";
import content14 from "./IMG_0014.jpg";

const LessonSeven = () => {

    const [modalVisible, setModalVisible] = useState(false);
  const [selectedcontent, setSelectedcontent] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);

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
      },{
        id: 3,
        contentSrc: content3,
        alt: "content 1",
        title: "tafseer-e-quran",
        details:
          "Molana sajjad hussain naqvi give lecture of tafseer-e-quran. classes are held on google meet from iran",
      },{
        id: 4,
        contentSrc: content4,
        alt: "content 1",
        title: "tafseer-e-quran",
        details:
          "Molana sajjad hussain naqvi give lecture of tafseer-e-quran. classes are held on google meet from iran",
      },{
        id: 5,
        contentSrc: content5,
        alt: "content 1",
        title: "tafseer-e-quran",
        details:
          "Molana sajjad hussain naqvi give lecture of tafseer-e-quran. classes are held on google meet from iran",
      },{
        id: 6,
        contentSrc: content6,
        alt: "content 1",
        title: "tafseer-e-quran",
        details:
          "Molana sajjad hussain naqvi give lecture of tafseer-e-quran. classes are held on google meet from iran",
      },{
        id: 7,
        contentSrc: content7,
        alt: "content 1",
        title: "tafseer-e-quran",
        details:
          "Molana sajjad hussain naqvi give lecture of tafseer-e-quran. classes are held on google meet from iran",
      },{
        id: 8,
        contentSrc: content8,
        alt: "content 1",
        title: "tafseer-e-quran",
        details:
          "Molana sajjad hussain naqvi give lecture of tafseer-e-quran. classes are held on google meet from iran",
      },{
        id: 9,
        contentSrc: content9,
        alt: "content 1",
        title: "tafseer-e-quran",
        details:
          "Molana sajjad hussain naqvi give lecture of tafseer-e-quran. classes are held on google meet from iran",
      },{
        id: 10,
        contentSrc: content10,
        alt: "content 1",
        title: "tafseer-e-quran",
        details:
          "Molana sajjad hussain naqvi give lecture of tafseer-e-quran. classes are held on google meet from iran",
      },{
        id: 11,
        contentSrc: content11,
        alt: "content 1",
        title: "tafseer-e-quran",
        details:
          "Molana sajjad hussain naqvi give lecture of tafseer-e-quran. classes are held on google meet from iran",
      },{
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
      },
  ];

  const openModal = (contentSrc, index) => {
    setSelectedcontent(contentSrc);
    setCurrentIndex(index);
    setModalVisible(true);

    // Scroll to the top of the page
    window.scrollTo(0, 0);
  };

  // Function to close the modal
  const closeModal = () => {
    setSelectedcontent(null);
    setCurrentIndex(null);
    setModalVisible(false);
  };

  // Function to show the next content
  const showNextcontent = () => {
    const nextIndex = currentIndex + 1;
    if (nextIndex < Content.length) {
      setSelectedcontent(Content[nextIndex].contentSrc);
      setCurrentIndex(nextIndex);
    }
  };

  return (
    <section className="mafaheem">
    <div className="content-container">
    {modalVisible && (
        <div className="overlay">
          <div className="modal">
            {/* Cross button */}
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <img
              src={selectedcontent}
              alt="Modal content"
              className="modal-content"
            />
            
            {/* Next button */}
            {currentIndex < Content.length - 1 && (
              <button className="next-button" onClick={showNextcontent}>
                Next
              </button>
            )}
          </div>
        </div>
      )}
      {Content.map((content, index) => (
        <div key={content.id} className="content-box">
          <img
            src={content.contentSrc}
            alt={content.title}
            onClick={() => openModal(content.contentSrc, index)}
          />
        </div>
      ))}

      
    </div>
    </section>
  );
};

export default LessonSeven;
