import { w as writable } from "./index.js";
const user = writable("New User");
const currentCakeDesign = writable({});
export {
  currentCakeDesign as c,
  user as u
};
