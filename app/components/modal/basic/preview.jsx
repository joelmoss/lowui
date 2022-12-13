import { useCallback } from "react"
import Modal, { useModal } from "@lowui/modal"

import "@lowui/modal/index.css"
import styles from "./preview.module.css"

const ModalPreview = () => {
  const { toggleModal } = useModal("modalPreview")
  const onClick = useCallback(() => toggleModal(true), [toggleModal])

  return (
    <div className={styles.root}>
      <button type="button" onClick={onClick}>
        Open Modal
      </button>

      <Modal id="modalPreview">Hey there, I&apos;m a Modal!</Modal>

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
    </div>
  )
}

export default ModalPreview
