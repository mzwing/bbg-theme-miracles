import { LitElement, html } from "lit";
import { customElement, state } from "lit/decorators";

@customElement("blog-card")
export class BlogCard extends LitElement {
  @state()
    blogdata = 0;

  render() {
    return html``;
  }
}

declare global {
  // eslint-disable-next-line no-unused-vars
  interface HTMLElementTagNameMap {
    "blog-card": BlogCard;
  }
}
