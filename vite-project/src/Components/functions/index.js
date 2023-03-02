const fun = () => {
  const addItem = document.getElementById("addItem");
  const modalBody = document.getElementById("modalBody");
  const modalBg = document.getElementById("modalBg");
  const close = document.getElementById("close");
  const tbody = document.getElementById("tbody");
  const submitImg = document.getElementById("submitImg");
  const title = document.getElementById("title");
  const submit = document.getElementById("submit");
  const form = document.getElementById("form");
  const emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  form.setAttribute("data-validation", "0");
  //   .......................................................
  let state = [];
  // .........................................................
  let selectedId;
  //   ..............................................................................
  const handleData = (e) => {
    e.preventDefault();
    form.querySelectorAll("input").forEach((item) => {
      if (!item.value) {
        item.classList.add("border-red-500");
        item.nextElementSibling.innerHTML = "لطفا فیلد مورد نظر را پر کنید";
        item.nextElementSibling.classList.remove("hidden");
      }
    });
    if (form.dataset.validation === "0") {
      return;
    }
    const data = {
      firstName: e.currentTarget.firstName.value,
      lastName: e.currentTarget.lastName.value,
      phone: e.currentTarget.phone.value,
      email: e.currentTarget.email.value,
      id: Date.now(),
    };
    if (submit.value === "افزودن") {
      state.push(data);
      renderList(state);

      form.reset();
    } else if (submit.value === "ویرایش") {
      state = state.map((item) => {
        if (item.id === selectedId) {
          item.firstName = form.firstName.value;
          item.lastName = form.lastName.value;
          item.email = form.email.value;
          item.phone = form.phone.value;
        }
        return item;
      });
      renderList(state);
      form.reset();
      handleHideModal();
    }
    localStorage.setItem("items", JSON.stringify(state));
  };
  
  //   ....................................................................................
  const handleDeleteItem = (id) => {
    const filterItem = state.filter((item) => item.id !== id);
    state = filterItem;
    renderList(state);
  };
  //   ....................................................................................
  const handleEditItem = (e) => {
    handleShowModal();
    title.innerText = "ویرایش اطلاعات";
    submit.value = "ویرایش";
    submit.classList.remove("pl-12");
    submitImg.classList.add("hidden");
    // .................................
    const id = +e.currentTarget.parentElement.parentElement.id;
    selectedId = id;
    const selectedItem = state.find((item) => item.id === id);
    form.firstName.value = selectedItem.firstName;
    form.lastName.value = selectedItem.lastName;
    form.email.value = selectedItem.email;
    form.phone.value = selectedItem.phone;
    // ............
    form.querySelectorAll("input").forEach((item) => {
      item.classList.remove("border-green-500");
      item.classList.remove("border-red-500");
    });
  };
  //   ..................................................................................
  const renderList = (arr) => {
    tbody.innerHTML = "";
    arr.map((item) => {
      const tr = document.createElement("tr");
      tr.id = item.id;
      const firstName_td = document.createElement("td");
      firstName_td.classList.add("p-5");
      firstName_td.innerHTML = `${item.firstName}`;
      tr.append(firstName_td);
      // ......................................................
      const lastName_td = document.createElement("td");
      lastName_td.classList.add("p-5");
      lastName_td.innerHTML = `${item.lastName}`;
      tr.append(lastName_td);
      // ......................................................
      const email_td = document.createElement("td");
      email_td.classList.add("p-5");
      email_td.innerHTML = `${item.email}`;
      tr.append(email_td);
      // ......................................................
      const phone_td = document.createElement("td");
      phone_td.classList.add("p-5");
      phone_td.innerHTML = `${item.phone}`;
      tr.append(phone_td);
      tbody.append(tr);
      //   ......................................................
      const img_td = document.createElement("td");
      img_td.className = "flex justify-center gap-10 mt-4";
      const edit = document.createElement("img");

      edit.className = "cursor-pointer";

      edit.addEventListener("click", handleEditItem);

      const trash = document.createElement("img");
      trash.id = "trash";
      trash.className = "cursor-pointer";

      trash.addEventListener("click", () => handleDeleteItem(item.id));

      edit.setAttribute("src", "../../../src/assets/img/edit.png");
      trash.setAttribute("src", "../../../src/assets/img/trash.png");
      img_td.append(edit, trash);
      tr.append(img_td);

      //   .........................................................
    });
    form.reset();
    handleHideModal();
  };
  // ....................................................................
  const handleShowModal = () => {
    modalBody.classList.remove("hidden");
    modalBg.classList.remove("hidden");
    form.querySelectorAll("input").forEach((item) => {
      item.classList.remove("border-green-500");
      item.classList.remove("border-red-500");
    });
  };
  //   .............................................................................
  const handleHideModal = () => {
    modalBody.classList.add("hidden");
    modalBg.classList.add("hidden");
    if (submit.value === "ویرایش") {
      submit.value = "افزودن";
      title.innerText = "افزودن کاربر جدید";
      submit.classList.add("pl-12");
      submitImg.classList.remove("hidden");
    }
    form.reset();
  };
  // ...............
  const valid = (child) => {
    form.childNodes[child].childNodes[1].classList.remove("border-red-500");
    form.childNodes[child].childNodes[1].classList.add(`border-green-500`);
    form.childNodes[child].childNodes[2].classList.add("hidden");
  };
  const invalid = (msg, child) => {
    form.childNodes[child].childNodes[1].classList.add("border-red-500");
    form.childNodes[child].childNodes[1].classList.remove("border-green-500");
    form.childNodes[child].childNodes[2].classList.remove("hidden");
    form.childNodes[child].childNodes[2].innerHTML = `${msg}`;
  };
  // ..................................................................................
  const handleFormValidation = () => {
    const inputF = form.firstName.value;
    const inputL = form.lastName.value;
    const inputE = form.email.value;
    const inputP = form.phone.value;
    if (inputF && 3 < inputF.length && inputF.length < 25) {
      valid(0);
      form.dataset.validation = "1";
    } else {
      invalid("نام باید بین 5 تا 25 کاراکتر باشد", 0);
      form.dataset.validation = "0";
    }
    if (inputL && 3 < inputL.length && inputL.length < 25) {
      valid(1);
      form.dataset.validation = "1";
    } else {
      invalid("نام خانوادگی باید بین 5 تا 25 کاراکتر باشد", 1);
      form.dataset.validation = "0";
    }
    if (inputE && emailPattern.test(inputE)) {
      valid(2);
      form.dataset.validation = "1";
    } else {
      invalid("لطفا ایمیل را به درستی وارد کنید", 2);
      form.dataset.validation = "0";
    }
    if (inputP && inputP.length === 11) {
      valid(3);
      form.dataset.validation = "1";
    } else {
      invalid("لطفا شماره تلفن خود را به درستی وارد کنید", 3);
      form.dataset.validation = "0";
    }
  };
  // ..............Local Storage Codes.................................................
  const firstState = localStorage.getItem("items");
  const parsedItems = JSON.parse(firstState);
  state = parsedItems;
  renderList(parsedItems);
  //   ..........................................................................................
  modalBg.addEventListener("click", handleHideModal);
  close.addEventListener("click", handleHideModal);
  addItem.addEventListener("click", handleShowModal);
  form.addEventListener("submit", handleData);
  form.addEventListener("change", handleFormValidation);
};

export default fun;
