import { c as create_ssr_component } from "../../chunks/index2.js";
import "tai-password-strength";
import { mapObjIndexed } from "ramda";
import "ajv";
import "ajv-formats";
import "ajv-errors";
/* empty css                                                *//* empty css                                                   */const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: '.hero.svelte-1cjuuyf{background:linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://add-mo-na-yan.vercel.app/cake.jpg");background-size:cover;color:var(--color-light);text-align:center;background-attachment:fixed}',
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  mapObjIndexed((v, k, a) => ({ ...v, name: k }), data);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<section class="hero svelte-1cjuuyf"><div class="hero-body"><h1>Add Mo Na Yan</h1>
    <p>Joycel please tell me what to put here na po</p></div></section>


  
      `;
});
export {
  Page as default
};
