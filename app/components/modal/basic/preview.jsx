import Modal, { useModal } from "@lowui/modal"

import "@lowui/modal/index.css"
import styles from "./preview.module.css"

const ModalPreview = () => {
  const { toggleModal } = useModal("modalPreview")

  return (
    <div className={styles.root}>
      <button onClick={() => toggleModal(true)}>Open Modal</button>

      <br />
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum labore repellat
        repellendus aspernatur natus sequi, omnis, ex eveniet odit fuga, possimus ea placeat atque
        itaque officiis maxime quasi necessitatibus debitis. Lorem ipsum dolor sit amet consectetur,
        adipisicing elit. Nostrum labore repellat repellendus aspernatur natus sequi, omnis, ex
        eveniet odit fuga, possimus ea placeat atque itaque officiis maxime quasi necessitatibus
        debitis. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum labore repellat
        repellendus aspernatur natus sequi, omnis, ex eveniet odit fuga, possimus ea placeat atque
        itaque officiis maxime quasi necessitatibus debitis.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum labore repellat
        repellendus aspernatur natus sequi, omnis, ex eveniet odit fuga, possimus ea placeat atque
        itaque officiis maxime quasi necessitatibus debitis.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum labore repellat
        repellendus aspernatur natus sequi, omnis, ex eveniet odit fuga, possimus ea placeat atque
        itaque officiis maxime quasi necessitatibus debitis. Lorem ipsum dolor sit amet consectetur,
        adipisicing elit. Nostrum labore repellat repellendus aspernatur natus sequi, omnis, ex
        eveniet odit fuga, possimus ea placeat atque itaque officiis maxime quasi necessitatibus
        debitis.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod provident vitae cumque nulla
        ut, praesentium consequatur dolores nisi facere maxime nesciunt corrupti quam natus, non
        unde quo eius vel molestias! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
        provident vitae cumque nulla ut, praesentium consequatur dolores nisi facere maxime nesciunt
        corrupti quam natus, non unde quo eius vel molestias! Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Quod provident vitae cumque nulla ut, praesentium consequatur dolores nisi
        facere maxime nesciunt corrupti quam natus, non unde quo eius vel molestias!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod provident vitae cumque nulla
        ut, praesentium consequatur dolores nisi facere maxime nesciunt corrupti quam natus, non
        unde quo eius vel molestias! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
        provident vitae cumque nulla ut, praesentium consequatur dolores nisi facere maxime nesciunt
        corrupti quam natus, non unde quo eius vel molestias! Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Quod provident vitae cumque nulla ut, praesentium consequatur dolores nisi
        facere maxime nesciunt corrupti quam natus, non unde quo eius vel molestias!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod provident vitae cumque nulla
        ut, praesentium consequatur dolores nisi facere maxime nesciunt corrupti quam natus, non
        unde quo eius vel molestias! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
        provident vitae cumque nulla ut, praesentium consequatur dolores nisi facere maxime nesciunt
        corrupti quam natus, non unde quo eius vel molestias! Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Quod provident vitae cumque nulla ut, praesentium consequatur dolores nisi
        facere maxime nesciunt corrupti quam natus, non unde quo eius vel molestias!
      </p>

      <Modal id="modalPreview">Hey there, I&apos;m a Modal!</Modal>
    </div>
  )
}

export default ModalPreview
