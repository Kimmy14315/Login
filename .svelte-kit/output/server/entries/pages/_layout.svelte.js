import { c as create_ssr_component, v as validate_component } from "../../chunks/index2.js";
const Nav_svelte_svelte_type_style_lang = "";
const css = {
  code: "section.svelte-zlhhf5.svelte-zlhhf5{height:100%}header.navbar.svelte-zlhhf5.svelte-zlhhf5{background:var(--color-secondary)}header.navbar.svelte-zlhhf5 section.svelte-zlhhf5{height:100%}a.svelte-zlhhf5.svelte-zlhhf5{height:100%;color:var(--color-light);&:hover {\n      background: white;\n    }}",
  map: null
};
const Nav = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<header class="navbar svelte-zlhhf5"><section class="navbar-section svelte-zlhhf5"><a href="/" class="svelte-zlhhf5"></a></section>
  <section class="navbar-section svelte-zlhhf5"><nav><a class="btn btn-link svelte-zlhhf5" href="/design">Design</a>
      <a class="btn btn-link svelte-zlhhf5" href="/about">About</a>
      <a class="btn btn-link svelte-zlhhf5" href="/register">Register</a></nav></section>
      
</header>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Nav, "Nav").$$render($$result, {}, {}, {})}

${slots.default ? slots.default({}) : ``}`;
});
export {
  Layout as default
};
