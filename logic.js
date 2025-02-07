let AddBtn = document.getElementById("addNotesBtn");
let notesList = document.getElementById("myAllNotes");
AddBtn.addEventListener("click", () => {
  let txt = document.createElement("p");
  txt.setAttribute("contenteditable", "true");
  txt.className = "note";

  let img = document.createElement("img");
  img.src =
    "https://th.bing.com/th/id/R.27299b1faed2d63a3e9512bd8cd187ad?rik=%2fVRT3CdCaWVC3w&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fdelete-button-png-delete-icon-1600.png&ehk=mRIiUoExO9FPzeoYwqDk%2bfWDlxlcYGmfTbaQ2Pbwyak%3d&risl=&pid=ImgRaw&r=0";

  txt.appendChild(img);
  notesList.appendChild(txt);
  saveData();
});

const saveData = () => {
  window.localStorage.setItem("Notes", notesList.innerHTML);
};
const showData = () => {
  if (localStorage.getItem("Notes")) {
    notesList.innerHTML = localStorage.getItem("Notes");
  }
};

notesList.addEventListener("click", (e) => {
  if (e.target.tagName === "IMG") {
    e.target.parentElement.remove();
    saveData();
  } else if (e.target.tagName === "P") {
    let note = Array.from(document.getElementsByClassName("note"));
    note.forEach((nt) => {
      nt.onkeyup = function () {
        saveData();
      };
    });
  }
});

showData();
