let Menu = document.getElementById("menu");
let Foodjan = document.querySelector(".foodMenu");
let Sign = document.querySelector(".sign");
let Contact = document.querySelector(".contactjan");
let qatar = document.getElementById("close");
let close = document.getElementById("Close");
let Order = document.getElementById("order");
Menu.addEventListener("click", () => {
  Foodjan.classList.add("bg-active");
});

Close.addEventListener("click", () => {
  //   console.log("hello");
  Foodjan.classList.remove("bg-active");
});

Contact.addEventListener("click", () => {
  // console.log("hello");
  Sign.classList.add("bg-act");
});

qatar.addEventListener("click", () => {
  // console.log("hello");
  Sign.classList.remove("bg-act");
});

Order.addEventListener("click", () => {
  Name = document.getElementById("name").value;
  Plate = document.getElementById("plate").value;

  if (localStorage.getItem("itemjson") == null) {
    let itemArr = [];
    itemArr.push([Name, Plate]);
    localStorage.setItem("itemjson", JSON.stringify(itemArr));
  } else {
    itemArrStr = localStorage.getItem("itemjson");
    itemArr = JSON.parse(itemArrStr);
    itemArr.push([Name, Plate]);
    localStorage.setItem("itemjson", JSON.stringify(itemArr));
  }
});
