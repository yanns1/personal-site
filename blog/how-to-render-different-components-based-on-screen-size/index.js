const Component1 = `
  <ul>
    <li class='first'>Navlink 1</li>
    <li class='second'>Navlink 2</li>
    <li class='third'>Navlink 3</li>
  </ul>
`;

const Component2 = `
  <ul>
    <li class='first'>Navlink 1</li>
    <li class='second'>Navlink 2</li>
    <li class='third'>Navlink 3</li>
    <li class='fourth'>Navlink 4</li>
  </ul>
`;

const setNavInnerHTML = (html) => {
  const nav = document.querySelector("nav");
  nav.innerHTML = html;
};

// I'm borrowing the MDN doc notation here: "mql" stands for "media query list".
const mql = window.matchMedia("(max-width: 400px)");

// For first render
let mobileView = mql.matches;
if (mobileView) {
  setNavInnerHTML(Component1);
} else {
  setNavInnerHTML(Component2);
}

// For subsequent renders if screen size changes
mql.addEventListener("change", (e) => {
  let mobileView = e.matches;
  if (mobileView) {
    setNavInnerHTML(Component1);
  } else {
    setNavInnerHTML(Component2);
  }
});
