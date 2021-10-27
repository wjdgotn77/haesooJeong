const $guestInformation = document.querySelector(".about-guest");
const $nameInput = document.querySelector(".guest-input");
const $submitButton = document.querySelector(".guest-button");
const $firstMessage = document.querySelector(".guest-message");

const $contentsContainer = document.querySelector(".about-contents");
const $guestName = document.querySelector(".guest-name");

const CSS_PROPERTIES = {
  hidden: "hidden",
  disappear: "disappear",
};

$submitButton.addEventListener("click", handleClickSubmit);

function handleClickSubmit() {
  const guestName = $nameInput.value;
  const confirmWindow = confirm(` "${guestName}" 님이 맞으신가요?`);

  if (confirmWindow) {
    $guestInformation.classList.add(CSS_PROPERTIES.disappear);
    $guestName.classList.remove(CSS_PROPERTIES.hidden);
    $guestName.textContent = `${guestName}님 만나서 반가워요. 👋`;
  } else {
    $firstMessage.textContent = "이름을 다시 입력해주세요.🤔";
  }
}
