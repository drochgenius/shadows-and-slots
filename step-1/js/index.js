const el = document.getElementById("second");
const content = el.innerHTML;
el.removeChild(el.querySelector("p"));

const shadowRoot = document
    .getElementById("second")
    .attachShadow({ mode: "open" });

const internalStylesheet = `
    p { 
        color: red; 
        text-decoration: underline;
    }
`;

shadowRoot.innerHTML = `<style>${internalStylesheet}</style>${content}`;
