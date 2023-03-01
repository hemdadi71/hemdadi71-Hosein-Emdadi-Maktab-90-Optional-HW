import El from "../../library/El";

const ModalBody = () => {
  return El({
    element: "div",
    id: "modalBody",
    className:
      "fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-white w-[300px] rounded-xl z-20 hidden",
    child: [
      El({
        element: "header",
        id: "close",
        className:
          "bg-primary h-16 rounded-t-xl text-white relative flex items-center ",
        child: [
          El({
            element: "img",
            width: "18",
            className:
              "absolute top-1/2 right-4 -translate-y-1/2 cursor-pointer",
            src: "../../../src/assets/img/close.png",
          }),
          El({
            element: "h1",
            id: "title",
            child:'',
            className:
              "absolute left-1/2 -translate-x-1/2 text-2xl text-gray-200",
          }),
        ],
      }),
      El({
        element: "form",
        className: "relative",
        id: "form",
        child: [
          El({
            element: "div",
            className: "flex flex-col gap-2 p-5 text-xl",
            child: [
              El({
                element: "label",
                child: "نام:",
              }),
              El({
                element: "input",
                className:
                  "outline-none border-2 py-1 px-2 rounded-md h-[26px]",
                name: "firstName",
                type: "text",
              }),
              El({
                element: "p",
                child: "نام باید بین 3 تا 5 کاراکتر باشد",
                className: "text-md text-red-400 font-bold hidden",
              }),
            ],
          }),
          El({
            element: "div",
            className: "flex flex-col gap-2 p-5 text-xl",
            child: [
              El({
                element: "label",
                child: "نام خانوادگی:",
              }),
              El({
                element: "input",
                className:
                  "outline-none border-2 py-1 px-2 rounded-md h-[26px]",
                name: "lastName",
                type: "text",
              }),
              El({
                element: "p",
                child: "نام خانوادگی باید بین 3 تا 25 کاراکتر باشد",
                className: "text-md text-red-400 font-bold hidden",
              }),
            ],
          }),
          El({
            element: "div",
            className: "flex flex-col gap-2 p-5 text-xl",
            child: [
              El({
                element: "label",
                child: "ایمیل:",
              }),
              El({
                element: "input",
                dir:'ltr',
                className:
                  "outline-none border-2 py-1 px-2 rounded-md h-[26px]",
                name: "email",
                type: "text",
              }),
              El({
                element: "p",
                child: "نام خانوادگی باید بین 3 تا 25 کاراکتر باشد",
                className: "text-md text-red-400 font-bold hidden",
              }),
            ],
          }),
          El({
            element: "div",
            className: "flex flex-col gap-2 p-5 text-xl",
            child: [
              El({
                element: "label",
                child: "شماره تلفن:",
              }),
              El({
                element: "input",
                dir:'ltr',
                className:
                  "outline-none border-2 py-1 px-2 rounded-md h-[26px]",
                name: "phone",
                type: "phone",
              }),
              El({
                element: "p",
                child: "شماره تلفن صحیح نمی باشد.(مثال:09123456789)",
                className: "text-md text-red-400 font-bold hidden",
              }),
            ],
          }),
          El({
            element: "div",
            className: "p-5 text-xl font-bold text-gray-200",
            child: [
              El({
                element: "input",
                id: "submit",
                type: "submit",
                value: "افزودن",
                className:
                  "bg-orange w-full rounded-md items-center justify-center p-2 cursor-pointer pl-12",
              }),
            ],
          }),
          El({
            element: "img",
            id: "submitImg",
            width: "20",
            className: "absolute bottom-[1.7rem] left-[12rem]",
            src: "../../../src/assets/img/add.png",
          }),
        ],
      }),
    ],
  });
};

export default ModalBody;
