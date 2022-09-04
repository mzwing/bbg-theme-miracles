import { LitElement, html } from "lit";
import { customElement } from "lit/decorators";

@customElement("blog-nav")
export class BlogNav extends LitElement {
  render() {
    return html``;
  }
}

declare global {
  // eslint-disable-next-line no-unused-vars
  interface HTMLElementTagNameMap {
    "blog-nav": BlogNav;
  }
}
