import El from "../../library/El";

const Tfoot = () => {
  return El({
    element: "div",
    id:'addItem',
    className: "bg-orange text-2xl font-bold flex gap-3 items-center justify-center text-gray-200 rounded-b-xl py-4",
    child: [
      El({
        element: "p",
        className:'cursor-pointer',
        child: "برای اضافه کردن کاربر جدید کلیک کنید",
      }),
      El({
        element: "img",
        className:'cursor-pointer',
        src: "../../../src/assets/img/add.png",
      }),
    ],
  });
};

export default Tfoot;
