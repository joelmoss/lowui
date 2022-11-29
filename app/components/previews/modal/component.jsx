import Modal, { useModal } from "@lowui/modal"

const ModalPreview = () => {
  const { toggleModal } = useModal("modalPreview")

  return (
    <div>
      <button onClick={() => toggleModal(true)}>Open Modal</button>
      <Modal id="modalPreview">Hey there, I&apos;m a Modal!</Modal>
    </div>
  )
}

export default ModalPreview
