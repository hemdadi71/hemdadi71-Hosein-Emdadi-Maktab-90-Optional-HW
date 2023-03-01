import El from "../../library/El";

const ModalBg = () => {
  return El({
    element: "div",
    id:'modalBg',
    className: "bg-gray-800 absolute z-10 w-full h-full top-0 left-0 bg-opacity-70 hidden",
  });
};

export default ModalBg;
