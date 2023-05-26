import { c as create_ssr_component, a as subscribe, e as escape, b as add_attribute } from "../../../chunks/index2.js";
import "../../../chunks/createSigningKeyPair.js";
import { u as user } from "../../../chunks/stores.js";
const ___ASSET___0 = "/user.svg";
const ___ASSET___1 = "/shield.svg";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $user, $$unsubscribe_user;
  $$unsubscribe_user = subscribe(user, (value) => $user = value);
  let username, password;
  $$unsubscribe_user();
  return `<h1>Login</h1>
<h2>Welcome ${escape($user)}</h2>
<form method="POST"><label><img${add_attribute("src", ___ASSET___0, 0)} alt="Icon of User">
    <input type="text" name="username"${add_attribute("value", username, 0)}></label>
  <label><img${add_attribute("src", ___ASSET___1, 0)} alt="Icon of a Shield representing password">
    <input type="password" name="password"${add_attribute("value", password, 0)}></label>
  <button type="submit">Login</button></form>`;
});
export {
  Page as default
};
