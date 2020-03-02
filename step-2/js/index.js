const el = document.getElementById("second");
const shadowRoot = el.attachShadow({ mode: "open" });

const content = "<slot></slot>";

const internalStylesheet = `
slot {
    display: flex;
    flex-direction: row;

}
::slotted(p){
    border: 1px solid red;
    margin: 0;
    padding: 0.5rem;
    background-color: yellow;
}
`;

shadowRoot.innerHTML = `<style>${internalStylesheet}</style>${content}`;
