import ModalBg from "../../Components/ModalBg";
import ModalBody from "../../Components/ModalBody";
import Table from "../../Components/Table";
import Tfoot from "../../Components/Tfoot/Tfoot";
import El from "../../library/El";
const Container = () => {
  return El({
    element: "div",
    className: "",
    child: [Table(), Tfoot(), ModalBody(), ModalBg()],
  });
};

export default Container;
