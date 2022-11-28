import Modal, { useModal } from "@lowui/modal";

const ModalPreview = () => {
  const { toggleModal } = useModal(1);

  return (
    <div>
      <button onClick={() => toggleModal(true)}>Open Modal</button>
      <Modal id={1}>Hey there, I&apos;m a Modal!</Modal>
    </div>
  );
};

export default ModalPreview;
