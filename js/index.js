const popup = document.querySelector(".popup");
const close = document.querySelector(".close");

const closeBtn = () => {
  popup.classList.add("hide");
};

close.addEventListener("click", closeBtn);
