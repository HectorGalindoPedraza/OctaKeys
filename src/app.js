const piano = document.querySelector(".piano");

const Notes = [
  "Do \n (1)",
  "Re \n (2)",
  "Mi \n (3)",
  "Fa \n (4)",
  "Sol \n (5)",
  "La \n (6)",
  "Si \n (7)",
  "Do \n (8)",
];

function generateKeys(totalKeys) {
  for (let i = 0; i < totalKeys; i++) {
    const key = document.createElement("div");
    key.classList.add("key");
    const keyCode = ["65", "83", "68", "70", "74", "75", "76", "192"];
    key.setAttribute(`data-key`, `${keyCode[i]}`);
    piano.append(key);
    const label = document.createElement("div");
    label.classList.add("label");
    label.innerText = Notes[i];
    key.append(label);
  }
}
generateKeys(8);

window.addEventListener("keydown", function (e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
  if (audio) {
    audio.currentTime = 0;
    audio.play();
    key.classList.add("pressed");
    window.addEventListener("keyup", (e) =>
      key.classList.remove("pressed")
    );
  }
});