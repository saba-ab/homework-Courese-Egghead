(() => {
  const allElements = document.querySelectorAll("*");
  allElements.forEach((element) => {
    element.style.margin = "0";
    element.style.padding = "0";
    element.style.border = "0";
    element.style.boxSizing = "border-box";
    element.style.fontFamily = "Arial, Sans Serif";
  });
})();
function createContainer(className, bgColor) {
  const container = document.createElement("div");
  container.classList.add(className);
  container.style.display = "flex";
  container.style.justifyContent = "center";
  container.style.alignItems = "center";
  container.style.flexDirection = "column";
  container.style.padding = "50px 5%";
  container.style.backgroundColor = bgColor;
  return container;
}
function createButton(bgColor, fontColor, text) {
  const button = document.createElement("button");
  button.style.border = "1px solid #23A6F0";
  button.style.borderRadius = "10px";
  button.style.fontSize = "20px";
  button.style.padding = "10px 20px";
  button.style.cursor = "pointer";
  button.style.backgroundColor = bgColor;
  button.style.color = fontColor;
  button.innerHTML = text;
  return button;
}

function createHeaderWrapper() {
  const headerWrapper = document.createElement("div");
  headerWrapper.style.display = "flex";
  headerWrapper.style.flexDirection = "column";
  headerWrapper.style.justifyContent = "center";
  headerWrapper.style.alignItems = "center";
  headerWrapper.style.maxWidth = "500px";
  headerWrapper.style.padding = "40px";
  headerWrapper.style.textAlign = "center";
  const welcome = document.createElement("p");
  welcome.textContent = "Welcome";
  welcome.style.color = "#23A6F0";
  welcome.style.fontSize = "18px";
  const mainHeader = document.createElement("h1");
  mainHeader.textContent = "Selling on the internet like a pro";
  mainHeader.style.color = "white";
  mainHeader.style.fontSize = "58px";
  mainHeader.style.textAlign = "center";
  const description = document.createElement("p");
  description.textContent =
    "We know how large objects will act, but things on a small scale just do not act that way.";
  description.style.color = "white";
  description.style.fontSize = "20px";

  const buttonWrapper = document.createElement("div");
  buttonWrapper.style.display = "flex";
  buttonWrapper.style.gap = "20px";
  buttonWrapper.style.justifyContent = "center";
  buttonWrapper.style.flexWrap = "wrap";
  buttonWrapper.append(createButton("#23A6F0", "white", "Get Quote Now"));
  buttonWrapper.append(
    createButton("rgba(0, 0, 0, 0)", "#23A6F0", "Learn More")
  );

  headerWrapper.append(welcome);
  headerWrapper.append(mainHeader);
  headerWrapper.append(description);
  headerWrapper.append(buttonWrapper);
  headerWrapper.append(boxWrapper);
  return headerWrapper;
}
function createBox(image, boxHeader, description, bgColor, fontColor, line) {
  const box = document.createElement("div");
  box.style.display = "flex";
  box.style.flexDirection = "column";
  box.style.alignItems = "Start";
  box.style.backgroundColor = bgColor;
  box.style.color = fontColor;
  box.style.padding = "40px";
  box.style.maxWidth = "250px";
  const boxImg = document.createElement("img");
  boxImg.setAttribute("src", image);
  boxImg.style.width = "60px";
  const headerText = document.createElement("p");
  headerText.textContent = boxHeader;
  const redLine = document.createElement("div");
  redLine.style.width = "100px";
  redLine.style.height = "2px";
  redLine.style.backgroundColor = line;
  const descriptionText = document.createElement("p");
  descriptionText.textContent = description;
  descriptionText.style.color = "#737373";

  box.append(boxImg);
  box.append(headerText);
  box.append(redLine);
  box.append(descriptionText);
  box.addEventListener("mousemove", () => {
    box.style.transform = "scale(1.05)";
    box.style.color = "white";
    box.style.backgroundColor = "#23A6F0";
    redLine.style.backgroundColor = "white";
    box.style.cursor = "pointer";
    descriptionText.style.color = "#fff";
  });
  box.addEventListener("mouseleave", () => {
    box.style.transform = "";
    box.style.color = "";
    box.style.backgroundColor = "white";
    redLine.style.backgroundColor = "red";
    descriptionText.style.color = "#737373";
  });
  return box;
}

const boxWrapper = document.createElement("div");
boxWrapper.style.display = "flex";
boxWrapper.style.gap = "20px";
boxWrapper.style.flexWrap = "wrap";
boxWrapper.style.justifyContent = "center";
boxWrapper.append(
  createBox(
    "./media/badEmoji.svg",
    "training Courses",
    "The gradual accumulation of information about atomic and small-scale behaviour...",
    "white",
    "black",
    "red"
  )
);
boxWrapper.append(
  createBox(
    "./media/greenCheck.svg",
    "2,769 online courses",
    "The gradual accumulation of information about atomic and small-scale behaviour...",
    "white",
    "black",
    "red"
  )
);
boxWrapper.append(
  createBox(
    "./media/card.svg",
    "training Courses",
    "The gradual accumulation of information about atomic and small-scale behaviour...",
    "white",
    "black",
    "red"
  )
);
// es gvian movtvine mara kvelgan mainc ar mawkobda ese
const divStyles = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
};
function createFeatures() {
  const features = document.createElement("div");
  features.style.display = "flex";
  features.style.flexDirection = "column";
  features.style.alignItems = "center";
  features.style.justifyContent = "center";
  features.style.textAlign = "center";
  features.style.margin = "100px 0 ";
  features.style.maxWidth = "470px";
  const advice = document.createElement("p");
  advice.textContent = "Practice Advice";
  advice.style.color = "#23A6F0";
  advice.style.fontSize = "20px";
  const featuresHeader = document.createElement("h2");
  featuresHeader.textContent = "Featured Products";
  featuresHeader.style.fontSize = "48px";
  const description = document.createElement("p");
  description.textContent =
    "Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics ";
  description.style.color = "#737373";
  const subscribe = document.createElement("div");
  subscribe.style.borderRadius = "10px";
  subscribe.style.display = "flex";
  subscribe.style.width = "100%";
  const input = document.createElement("input");
  input.style.width = "85%";
  input.style.padding = "15px";
  input.style.fontSize = "20px";
  input.placeholder = "Your Email";
  const subButton = document.createElement("div");
  subButton.style.display = "flex";
  subButton.style.cursor = "pointer";
  subButton.style.alignItems = "center";
  subButton.style.justifyContent = "center";
  subButton.style.padding = "15px";
  subButton.style.textAlign = "center";
  subButton.style.backgroundColor = "#23A6F0";
  subButton.style.color = "#fff";
  subButton.style.width = "15%";
  subButton.innerHTML = "Subscribe";
  subscribe.append(input);
  subscribe.append(subButton);
  features.append(advice);
  features.append(featuresHeader);
  features.append(description);
  features.append(subscribe);
  return features;
}
document.body.appendChild(createContainer("firstSection", "#252B42"));
document.body.appendChild(createContainer("secondSection", "white"));
const firstSection = document.querySelector(".firstSection");
firstSection.append(createHeaderWrapper());
firstSection.append(boxWrapper);
const secondSection = document.querySelector(".secondSection");
secondSection.append(createFeatures());
