import { c as create_ssr_component, d as each, v as validate_component, e as escape } from "../../../chunks/index2.js";
import "../../../chunks/createSigningKeyPair.js";
import "toastify-js";
import { paramCase, capitalCase } from "change-case";
import { I as Input } from "../../../chunks/Input.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: 'main.svelte-skwoza{display:flex;align-items:center;justify-content:center;height:100vh;background:linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://wallpapercave.com/wp/wp3980262.jpg");background-size:cover}.card.svelte-skwoza{min-width:25em;padding:2em;background:var(--color-light);margin:2 auto;border:0.3em solid var(--color-primary);border-radius:0.2em}',
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let form = [
    {
      title: "email",
      value: "",
      type: "string",
      format: "email",
      minLength: 5,
      examples: ["johnsmith@proton.me"]
    },
    {
      title: "firstName",
      value: "",
      type: "string",
      minLength: 1,
      examples: ["John"]
    },
    {
      title: "lastName",
      value: "",
      type: "string",
      minLength: 1,
      examples: ["Smith"]
    },
    {
      title: "password",
      value: "",
      type: "string",
      format: "password",
      minLength: 6,
      examples: ["Sup3r53cr3tP@55w0rd"]
    },
    //  , { title: "confirmPassword", value: "", type: "string", format: "password", minLength: 6, examples: ["Sup3r53cr3tP@55w0rd"]}
    {
      title: "acceptTOU",
      value: "",
      type: "boolean",
      const: true,
      description: "I accept the Terms of Use & Privacy Policy"
    }
  ];
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<main class="svelte-skwoza"><div class="card svelte-skwoza"><form class="form-horizontal" method="POST"><h1>Register</h1>
  <h2>Welcome</h2>
  
  ${each(form, (formInput) => {
      return `<div class="form-group">${formInput.type === "boolean" ? `${validate_component(Input, "Input").$$render(
        $$result,
        {
          id: "input-" + paramCase(formInput.title),
          schema: formInput
        },
        {},
        {}
      )}` : `<div class="col-3 col-sm-12"><label class="form-label" for="${"input-" + escape(paramCase(formInput.title), true)}">${escape(formInput.description ? formInput.description : capitalCase(formInput.title))}</label></div>
        <div class="col-9 col-sm-12">${validate_component(Input, "Input").$$render(
        $$result,
        {
          class: "form-input",
          id: "input-" + paramCase(formInput.title),
          name: paramCase(formInput.title),
          schema: formInput,
          value: formInput.value
        },
        {
          value: ($$value) => {
            formInput.value = $$value;
            $$settled = false;
          }
        },
        {}
      )}
        </div>`}

    </div>`;
    })}

  <button type="submit" class="btn btn-primary btn-block">Register</button></form></div></main>`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Page as default
};
