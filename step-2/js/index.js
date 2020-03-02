function setupShadowDOM(id) {
    const el = document.getElementById(id);
    const content = el.innerHTML;
    el.removeChild(el.querySelector("p"));

    const shadowRoot = el.attachShadow({ mode: "open" });

    const internalStylesheet = `
    p { 
        color: var(--text-color, gray); 
    }
`;

    shadowRoot.innerHTML = `<style>${internalStylesheet}</style>${content}`;
}

setupShadowDOM("first");
setupShadowDOM("second");
setupShadowDOM("third");
setupShadowDOM("fourth");
