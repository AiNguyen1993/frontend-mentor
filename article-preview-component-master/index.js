document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector(".btn");
  const popup = document.querySelector(".popup");

  button.onclick = function () {
    popup.style.display = "inline-flex";
  };

  document.addEventListener("click", function (e) {
    if (!popup.contains(e.target) && !button.contains(e.target)) {
      popup.style.display = "none";
    }
  });
});
