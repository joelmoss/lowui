import { fireEvent, render, screen, waitFor } from "@testing-library/react";

import { useModal } from "./hooks";
import Modal from ".";

test("closed by default", () => {
  render(
    <Modal id={1}>
      <div>withinTheModal</div>
    </Modal>
  );

  expect(screen.queryByText("withinTheModal")).not.toBeInTheDocument();
});

test("opening", async () => {
  const App = () => {
    const { toggleModal } = useModal(1);

    return (
      <>
        <button onClick={() => toggleModal(true)}>Open Modal</button>
        <Modal id={1}>
          <div>withinTheModal</div>
        </Modal>
      </>
    );
  };

  render(<App />);

  fireEvent.click(screen.getByText("Open Modal"));

  expect(await screen.findByText("withinTheModal")).toBeInTheDocument();
});

test("default header", async () => {
  const App = () => {
    return (
      <Modal id="defaultHeader" isOpen>
        <div>withinTheModal</div>
      </Modal>
    );
  };

  render(<App />);

  expect(await screen.findByText("withinTheModal")).toBeInTheDocument();

  fireEvent.click(screen.getAllByTitle("Close")[0]);

  expect(screen.queryByText("withinTheModal")).not.toBeInTheDocument();
});

test("custom header (react element)", async () => {
  const App = () => {
    return (
      <Modal id="customHeaderReactElement" isOpen header={<div>myHeader</div>}>
        <div>withinTheModal</div>
      </Modal>
    );
  };

  render(<App />);

  expect(await screen.findByText("withinTheModal")).toBeInTheDocument();
  expect(await screen.findByText("myHeader")).toBeInTheDocument();
});

test("custom header (function)", async () => {
  const Header = () => {
    return <div>myHeader</div>;
  };

  const App = () => {
    return (
      <Modal id="customHeaderFunction" isOpen header={Header}>
        <div>withinTheModal</div>
      </Modal>
    );
  };

  render(<App />);

  expect(await screen.findByText("withinTheModal")).toBeInTheDocument();
  expect(await screen.findByText("myHeader")).toBeInTheDocument();
});

test("canClose prop", async () => {
  render(
    <Modal id="canCloseProp" isOpen canClose={false}>
      <div>withinTheModal</div>
    </Modal>
  );

  await waitFor(() => {
    expect(screen.queryAllByRole("button")).toStrictEqual([]);
  });

  expect(document.body).toMatchSnapshot();
});

test("title prop", async () => {
  const title = "My Title";

  render(
    <Modal id="titleProp" isOpen title={title}>
      <div>withinTheModal</div>
    </Modal>
  );

  expect(await screen.findByText(title)).toBeInTheDocument();
  expect(document.body).toMatchSnapshot();
});

test("isOpen prop", async () => {
  render(
    <Modal id={1} isOpen>
      withinTheModal
    </Modal>
  );

  expect(await screen.findByText("withinTheModal")).toBeInTheDocument();
});

test("onClose prop", async () => {
  const onClose = jest.fn();

  const App = () => {
    const { toggleModal } = useModal(1);

    return (
      <>
        <button onClick={() => toggleModal(false)}>Close Modal</button>
        <Modal id={1} isOpen onClose={onClose}>
          <div>withinTheModal</div>
        </Modal>
      </>
    );
  };

  render(<App />);

  fireEvent.click(screen.getByText("Close Modal"));

  expect(onClose).toHaveBeenCalled();
});

test("footer prop (react element)", async () => {
  const App = () => {
    return (
      <Modal id={1} isOpen footer={<div>footer</div>}>
        <div>withinTheModal</div>
      </Modal>
    );
  };

  render(<App />);

  expect(await screen.findByText("footer")).toBeInTheDocument();
});

test("footer prop (function)", async () => {
  const Footer = () => {
    return <div>footer</div>;
  };

  const App = () => {
    return (
      <Modal id={1} isOpen footer={Footer}>
        <div>withinTheModal</div>
      </Modal>
    );
  };

  render(<App />);

  expect(await screen.findByText("footer")).toBeInTheDocument();
});

test("multiple modals", async () => {
  const ModalOne = () => {
    return (
      <Modal id="modal1" isOpen>
        Modal1
      </Modal>
    );
  };

  const ModalTwo = () => {
    return <Modal id="modal2">Modal2</Modal>;
  };

  const App = () => {
    return (
      <>
        <ModalOne />
        <ModalTwo />
      </>
    );
  };

  render(<App />);

  expect(await screen.findByText("Modal1")).toBeInTheDocument();
  expect(screen.queryByText("Modal2")).not.toBeInTheDocument();
});
