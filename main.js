const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "chrome://branding/content/about-logo@2x.png") {
    myImage.setAttribute("src", "www.jpg");
  } else {
    myImage.setAttribute("src", "chrome://branding/content/about-logo@2x.png");
  }
});

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Mozilla is cool, ${myName}`;
  }
}


  myButton.addEventListener("click", () => {
    setUserName();
  });
   
