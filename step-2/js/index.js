const el = document.getElementById("second");
const shadowRoot = el.attachShadow({ mode: "open" });

const content = "<slot></slot>";

const internalStylesheet = `
slot {
    display: flex;
    flex-direction: row;
}
::slotted(p){
    padding: 0.5rem;
    margin: 0 0.5rem;
    border: 1px solid black;
    border-radius: 0.5rem;
    background-color: yellow;
}
`;

shadowRoot.innerHTML = `<style>${internalStylesheet}</style>${content}`;
