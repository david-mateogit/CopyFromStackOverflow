window.onload = function () {

  function copyFunction(elem) {
    const copyText = elem.textContent;
    const textArea = document.createElement("textarea");
    textArea.id = "Copy-Area"
    textArea.textContent = copyText;
    document.body.append(textArea);
    textArea.select();
    document.execCommand("copy");
  }

  const codeblocks = document.querySelectorAll(".s-code-block");

  if (codeblocks.length) {
    codeblocks.forEach((el) => {
      const parentDiv = el.parentNode;
      const img = document.createElement("img");
      img.src = chrome.runtime.getURL("./images/copy.png");
      img.classList.add("Copy-Btn");
      parentDiv.insertBefore(img, el);

      img.addEventListener('click', () => {
        copyFunction(el)
      })
    })

  }

}





