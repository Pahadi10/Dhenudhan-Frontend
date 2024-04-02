export const registerWebComponent = name => {
  if (window.customElements.get(name)) {
    return
  }

  window.customElements.define(name, class extends HTMLElement {})
}
