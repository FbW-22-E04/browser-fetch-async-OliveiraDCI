import "../styles/main.scss";
import "babel-polyfill";

// const modal = document.getElementById("myModal");
// let promiseOfModal = new Promise(function (resolve) {
//   window.setTimeout(function () {
//     resolve(modal);
//   }, 1000);
// });

// promiseOfModal.then(function (val) {
//   console.log("User has been on the page for 60 seconds");
//   val.style.display = "block";
// });

// modal.addEventListener("click", (e) => {
//   switch (e.target.className) {
//     case "close":
//     case "modal":
//       modal.style.display = "none";
//       break;
//   }
// });

// Async / Await syntax:

(async function openModal() {
  const modal = document.getElementById("myModal");
  const modalTimer = (ms = 1000 * 60) => new Promise((t) => setTimeout(t, ms));

  await modalTimer();

  modal.style.display = "block";

  modal.addEventListener("click", (e) => {
    switch (e.target.className) {
      case "close":
      case "modal":
        modal.style.display = "none";
        break;
    }
  });
})();
