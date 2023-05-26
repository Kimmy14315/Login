import { c as create_ssr_component, a as subscribe, e as escape, n as null_to_empty, f as spread, h as escape_attribute_value, i as escape_object, b as add_attribute, d as each } from "./index2.js";
import { c as currentCakeDesign } from "./stores.js";
import taiPasswordStrength from "tai-password-strength";
import { omit, pickBy, isNotNil } from "ramda";
import { paramCase, capitalCase } from "change-case";
import Ajv from "ajv";
import addFormats from "ajv-formats";
import "ajv-errors";
/* empty css                                     */const css = {
  code: ".input-error-wrapper.svelte-1dpy9gk small.svelte-1dpy9gk{color:white}",
  map: null
};
const Input = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let pEntropy;
  let $currentCakeDesign, $$unsubscribe_currentCakeDesign;
  $$unsubscribe_currentCakeDesign = subscribe(currentCakeDesign, (value2) => $currentCakeDesign = value2);
  const ajv = new Ajv();
  addFormats(ajv);
  let { schema = {} } = $$props;
  let { class: _class } = $$props;
  let { id: _id } = $$props;
  let { radio = void 0 } = $$props;
  let { name = "" } = $$props;
  let { showMeter = true } = $$props;
  let { single = false } = $$props;
  let { hide = void 0 } = $$props;
  var strengthTester = new taiPasswordStrength.PasswordStrength();
  const getPasswordStrength = (password) => strengthTester.check(password);
  let { value = "" } = $$props;
  let touched = false;
  let errorMessage = "";
  let field = { validity: { valid: true } };
  let passwordStrength = {
    shannonEntropyBits: 0,
    strengthCode: "No Password"
  };
  const schemaToAttributes = (schema2) => pickBy(isNotNil, {
    minlength: schema2["minLength"],
    maxlength: schema2["maxLength"],
    pattern: schema2["pattern"],
    min: schema2["min"],
    max: schema2["max"],
    required: schema2["minLength"] > 0 ? "true" : void 0,
    class: _class,
    id: _id,
    style: hide ? "opacity: 0;" : "",
    name: name || void 0,
    disabled: schema2["readOnly"] ? true : void 0,
    placeholder: (schema2["examples"] && typeof schema2["examples"]) === "object" ? schema2["examples"][0] : ""
  });
  let attributes = schemaToAttributes(schema);
  const validate = ajv.compile(omit(["value", "placeholder", "name"], schema));
  if ($$props.schema === void 0 && $$bindings.schema && schema !== void 0)
    $$bindings.schema(schema);
  if ($$props.class === void 0 && $$bindings.class && _class !== void 0)
    $$bindings.class(_class);
  if ($$props.id === void 0 && $$bindings.id && _id !== void 0)
    $$bindings.id(_id);
  if ($$props.radio === void 0 && $$bindings.radio && radio !== void 0)
    $$bindings.radio(radio);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.showMeter === void 0 && $$bindings.showMeter && showMeter !== void 0)
    $$bindings.showMeter(showMeter);
  if ($$props.single === void 0 && $$bindings.single && single !== void 0)
    $$bindings.single(single);
  if ($$props.hide === void 0 && $$bindings.hide && hide !== void 0)
    $$bindings.hide(hide);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  $$result.css.add(css);
  passwordStrength = getPasswordStrength(value);
  pEntropy = passwordStrength["shannonEntropyBits"];
  errorMessage = ((value2) => {
    validate(value2);
    if (schema.format === "password")
      return pEntropy > 24 ? "" : "Too Weak";
    return "";
  })(value);
  $$unsubscribe_currentCakeDesign();
  return `<span class="${escape(null_to_empty("popover popover-right input-error-wrapper " + (errorMessage.length > 0 && touched ? "has-error" : "")), true) + " svelte-1dpy9gk"}">

  ${schema.format === "email" ? `<input${spread(
    [
      {
        title: escape_attribute_value(errorMessage)
      },
      escape_object(attributes),
      { type: "email" }
    ],
    {}
  )}${add_attribute("this", field, 0)}${add_attribute("value", value, 0)}>
    ${errorMessage ? `<small class="popover-container toast toast-error svelte-1dpy9gk">${escape(errorMessage)}</small>` : ``}` : `${schema.format === "password" ? `<input${spread(
    [
      {
        title: escape_attribute_value(errorMessage)
      },
      escape_object(attributes),
      { type: "password" }
    ],
    {}
  )}${add_attribute("this", field, 0)}${add_attribute("value", value, 0)}>
    ${showMeter ? `<meter class="meter" min="0" low="16" high="24" optimum="32" max="40"${add_attribute("value", passwordStrength["shannonEntropyBits"], 0)}></meter>
      ${errorMessage ? `
        <small class="popover-container toast toast-error svelte-1dpy9gk">${escape(errorMessage)}</small>` : ``}` : `${errorMessage ? `<small class="popover-container toast toast-error svelte-1dpy9gk">${escape(errorMessage)}</small>` : ``}`}` : `${schema.type === "boolean" ? `<label class="form-checkbox" for="${"input-" + escape(paramCase(schema.title), true)}">${escape(schema.description ? schema.description : capitalCase(schema.title))}
    <input${spread(
    [
      {
        title: escape_attribute_value(errorMessage)
      },
      escape_object(attributes),
      { type: "checkbox" }
    ],
    {}
  )}${add_attribute("this", field, 0)}${add_attribute("checked", value, 1)}>
    <i class="form-icon"></i></label>
    ${errorMessage ? `<small class="popover-container toast toast-error svelte-1dpy9gk">${escape(errorMessage ? "please accept the terms" : "")}</small>` : ``}` : `${radio === true && single ? `<input${spread(
    [
      {
        title: escape_attribute_value(errorMessage)
      },
      escape_object(attributes),
      { type: "radio" },
      { value: escape_attribute_value(value) }
    ],
    {}
  )}${add_attribute("this", field, 0)}${value === $currentCakeDesign[name] ? add_attribute("checked", true, 1) : ""}>` : `${schema.enum && Array.isArray(schema.enum) ? `${radio === true || radio === void 0 && schema.enum.length < 6 ? `${each(schema.enum, (choice) => {
    return `<h2>${escape(choice)}</h2>
        <input${spread(
      [
        {
          title: escape_attribute_value(errorMessage)
        },
        escape_object(attributes),
        { type: "radio" },
        { value: escape_attribute_value(choice) }
      ],
      {}
    )}${add_attribute("this", field, 0)}${choice === $currentCakeDesign[name] ? add_attribute("checked", true, 1) : ""}>`;
  })}` : `<select${spread([escape_object(attributes), { class: "form-select" }], {})}>${each(schema.enum, (choice) => {
    return `<option${add_attribute("value", paramCase(choice), 0)}>${escape(choice)}</option>`;
  })}</select>`}` : `${schema.type === "string" ? `<input${spread(
    [
      {
        title: escape_attribute_value(errorMessage)
      },
      escape_object(attributes),
      { type: "text" }
    ],
    {}
  )}${add_attribute("this", field, 0)}${add_attribute("value", value, 0)}>
    ${errorMessage ? `<small class="popover-container toast toast-error svelte-1dpy9gk">${escape(errorMessage)}</small>` : ``}` : `<input${spread(
    [
      {
        title: escape_attribute_value(errorMessage)
      },
      escape_object(attributes),
      { type: "text" }
    ],
    {}
  )}${add_attribute("this", field, 0)}${add_attribute("value", value, 0)}>
    ${errorMessage ? `<small class="popover-container toast toast-error svelte-1dpy9gk">${escape(errorMessage)}</small>` : ``}`}`}`}`}`}`}


</span>`;
});
export {
  Input as I
};
