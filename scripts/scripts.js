function addLineClass(pre) {
  var lines = pre.innerText.split("\n"); // can use innerHTML also
  while (pre.childNodes.length > 0) {
    pre.removeChild(pre.childNodes[0]);
  }
  for (var i = 0; i < lines.length; i++) {
    var span = document.createElement("span");
    if (i === 0 || i === lines.length - 1) {
      span.classList.add("hidden");
    }
    span.classList.add("line");
    span.innerText = lines[i]; // can use innerHTML also
    pre.appendChild(span);
    pre.appendChild(document.createTextNode("\n"));
  }
}

window.addEventListener("DOMContentLoaded", function () {
  // Cope
  var buttonCopy = document.getElementById("copy");
  var pres = document.querySelectorAll("pre code");

  if (buttonCopy) {
    var codeSection = document.getElementById("code");

    buttonCopy.addEventListener("click", function () {
      navigator.clipboard.writeText(codeSection.textContent);
    });
  }

  // Transform pre
  for (var i = 0; i < pres.length; i++) {
    addLineClass(pres[i]);
  }

  new Glide(".glide", {
    type: "carousel",
    startAt: 0,
    perView: 5,

    breakpoints: {
      1220: {
        perView: 4,
        autoplay: 3000,
      },
      768: {
        perView: 3,
        autoplay: 3000,
      },
      640: {
        perView: 2,
        autoplay: 3000,
      },
    },
  }).mount();
});
