import El from "../../library/El";

const Table = () => {
  return El({
    element: "table",
    className: "text-2xl w-[700px]",
    child: [
      El({
        element: "thead",
        className: "bg-primary text-gray-200",
        child: [
          El({
            element: "tr",
            child: [
              El({
                element: "th",
                className: "p-5 rounded-tr-2xl",
                child: "نام",
              }),
              El({
                element: "th",
                className: "p-5",
                child: "نام خانوادگی",
              }),
              El({
                element: "th",
                className: "p-5",
                child: "ایمیل",
              }),
              El({
                element: "th",
                className: "p-5",
                child: "موبایل",
              }),
              El({
                element: "th",
                className: "p-5  rounded-tl-2xl",
                child: "عملیات",
              }),
            ],
          }),
        ],
      }),
      //   ........
      El({
        element: "tbody",
        className:'text-center bg-white',
        id: "tbody",
        child: [],
      }),
      //   ...............
    ],
  });
};

export default Table;
