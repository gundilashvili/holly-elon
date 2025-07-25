import { useState } from "react";

export default function YoutubePopup({ src }) {
  const [isOpen, setIsOpen] = useState(false);

  const getYoutubeId = (url) => {
    const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|v\/))([\w-]{11})/);
    return match ? match[1] : null;
  };

  const videoId = getYoutubeId(src);
  const embedUrl = videoId ? `https://www.youtube.com/embed/${videoId}?autoplay=1` : null;

  return (
    <>
      <button className="play-btn" onClick={() => setIsOpen(true)}>
        ▶
      </button>

      {isOpen && (
        <div className="popup-overlay" onClick={() => setIsOpen(false)}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <iframe
              width="100%"
              height="100%"
              src={embedUrl}
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
            <button className="close-btn" onClick={() => setIsOpen(false)}>✕</button>
          </div>
        </div>
      )}

      <style jsx>{`
        .play-btn {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background: rgba(0, 0, 0, 0.7);
          border: none;
          color: white;
          font-size: 2rem;
          border-radius: 50%;
          width: 60px;
          height: 60px;
          cursor: pointer;
          z-index: 2;
        }

        .popup-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: rgba(0, 0, 0, 0.9);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
        }

        .popup-content {
          position: relative;
          width: 90%;
          max-width: 960px;
          aspect-ratio: 16 / 9;
          background: #000;
          border-radius: 8px;
          overflow: hidden;
        }

        .close-btn {
          position: absolute;
          top: 10px;
          right: 10px;
          background: rgba(255, 255, 255, 0.1);
          border: none;
          font-size: 1.5rem;
          color: white;
          cursor: pointer;
          padding: 4px 10px;
          border-radius: 4px;
          z-index: 10;
        }
      `}</style>
    </>
  );
}
