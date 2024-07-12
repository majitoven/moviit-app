import ModalVideo from "react-modal-video";

const VideoPopup = ({
  isVideoOpen,
  setIsVideoOpen,
  videoId = "H0h49xxJU0U", 
  
}:any ) => {
  return (
    <>
      <ModalVideo
        channel="youtube"
        autoplay={1}
        isOpen={isVideoOpen}
        videoId={videoId}
        onClose={() => setIsVideoOpen(false)}
      />
    </>
  );
};

export default VideoPopup;

