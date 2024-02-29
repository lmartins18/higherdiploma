import VideoPlayer from "./ VideoPlayer.js";
import { useContext } from "react";
import { Modal, ModalContext } from "../Modal";

export const AttractionModal = ({ bodyText }) => {
  const {isModalOpen, modalTitle } = useContext(ModalContext);
  return (
    <Modal>
      {isModalOpen && <VideoPlayer query={modalTitle} />}
      <p className="my-12 text-md first-letter:font-uncial first-letter:text-7xl first-letter:text-emerald-700">{bodyText}</p>
    </Modal>
  );
}