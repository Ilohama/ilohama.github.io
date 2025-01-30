import PopUp from "@/components/layout/PopUp";

type Props = {
  ytSrc: string;
  onClose: () => void;
};

export default function LfPopUp({ ytSrc, onClose }: Props) {
  return (
    <PopUp
      onClose={() => {
        onClose();
      }}
    >
      <iframe
        width="100%"
        height="100%"
        src={ytSrc}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </PopUp>
  );
}
