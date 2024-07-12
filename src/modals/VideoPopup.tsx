import ModalVideo from "react-modal-video";
import "react-modal-video/scss/modal-video.scss";  // Ensure this import is included
import { FC } from "react";

interface VideoPopupProps {
  isVideoOpen: boolean;
  setIsVideoOpen: (isOpen: boolean) => void;
  videoId?: string;
}

const VideoPopup: FC<VideoPopupProps> = ({ isVideoOpen, setIsVideoOpen, videoId = "H0h49xxJU0U" }) => {
  return (
    <>
      <ModalVideo
        channel="youtube"
        youtube={{
          autoplay: 1,
          modestbranding: 1,
          rel: 0,
          showinfo: 0,
          controls: 1,
          disablekb: 1,
          fs: 0,
          iv_load_policy: 3,
          cc_load_policy: 0,
        }}
        isOpen={isVideoOpen}
        videoId={videoId}
        onClose={() => setIsVideoOpen(false)}
      />
    </>
  );
};

export default VideoPopup;
