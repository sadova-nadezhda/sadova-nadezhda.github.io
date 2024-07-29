// dropdown.js
export function initializeDropdowns() {
  var maxHeight = 400;

  document.querySelectorAll(".dropdown > .drop").forEach(container => {
    var anchor = container.querySelector("a");
    var list = container.querySelector("ul");

    container.addEventListener("mouseenter", () => {
      var height = list.offsetHeight * 1.1;
      var multiplier = height / maxHeight;

      container.dataset.origHeight = container.offsetHeight;
      anchor.classList.add("hover");

      list.style.display = 'flex';
      list.style.display = "block";

      if (multiplier > 1) {
        container.style.height = maxHeight + "px";
        container.style.overflow = "hidden";

        container.addEventListener("mousemove", (e) => {
          var offset = container.getBoundingClientRect();
          var relativeY = (e.clientY - offset.top) * multiplier - container.dataset.origHeight * multiplier;
          if (relativeY > container.dataset.origHeight) {
            list.style.top = -relativeY + parseFloat(container.dataset.origHeight) + "px";
          }
        });
      }
    });

    container.addEventListener("mouseleave", () => {
      container.style.height = container.dataset.origHeight + "px";
      list.style.top = container.dataset.origHeight + "px";
      list.style.display = "none";
      anchor.classList.remove("hover");
    });
  });
}
