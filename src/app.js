const $guestInformation = document.querySelector(".about-guest");
const $nameInput = document.querySelector(".guest-input");
const $submitButton = document.querySelector(".guest-button");
const $firstMessage = document.querySelector(".guest-message");

const $contentsContainer = document.querySelector(".about-contents");
const $selfContainer = document.querySelector(".about-self");
const $guestName = document.querySelector(".guest-name");

const CSS_PROPERTIES = {
  hidden: "hidden",
  disappear: "disappear",
};

$submitButton.addEventListener("click", handleClickSubmit);
$nameInput.addEventListener("keyup", (e) => {
  if (e.keyCode === 13) {
    handleClickSubmit();
  }
});

function handleClickSubmit() {
  const guestName = $nameInput.value;

  if (!guestName) {
    alert("빈칸은 노노노🤔");
  } else {
    const confirmWindow = confirm(` "${guestName}" 님이 맞으신가요?`);

    if (confirmWindow) {
      $guestInformation.classList.add(CSS_PROPERTIES.disappear);
      $selfContainer.classList.remove(CSS_PROPERTIES.hidden);
      $guestName.innerHTML = `
      <span class="half-highlight">
      " ${guestName} "</span>
      님 만나서 반가워요. 👋
      `;
    } else {
      $firstMessage.textContent = "이름을 다시 입력해주세요.🤔";
    }
  }
}
