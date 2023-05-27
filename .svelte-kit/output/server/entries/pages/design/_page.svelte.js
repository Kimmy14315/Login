import { c as create_ssr_component, a as subscribe, s as setContext, o as onDestroy, g as getContext, b as add_attribute, v as validate_component, d as each, e as escape } from "../../../chunks/index2.js";
import { c as currentCakeDesign } from "../../../chunks/stores.js";
import { I as Input } from "../../../chunks/Input.js";
import { w as writable } from "../../../chunks/index.js";
/* empty css                                                      */import { mapObjIndexed, map } from "ramda";
import { snakeCase, capitalCase } from "change-case";
let id = 1;
function getId() {
  return `svelte-tabs-${id++}`;
}
const TABS = {};
function removeAndUpdateSelected(arr, item, selectedStore) {
  const index = arr.indexOf(item);
  arr.splice(index, 1);
  selectedStore.update((selected) => selected === item ? arr[index] || arr[arr.length - 1] : selected);
}
const Tabs = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_selectedTab;
  let { initialSelectedIndex = 0 } = $$props;
  const tabs = [];
  const panels = [];
  const controls = writable({});
  const labeledBy = writable({});
  const selectedTab = writable(null);
  $$unsubscribe_selectedTab = subscribe(selectedTab, (value) => value);
  const selectedPanel = writable(null);
  function registerItem(arr, item, selectedStore) {
    arr.push(item);
    selectedStore.update((selected) => selected || item);
    onDestroy(() => removeAndUpdateSelected(arr, item, selectedStore));
  }
  function selectTab(tab) {
    const index = tabs.indexOf(tab);
    selectedTab.set(tab);
    selectedPanel.set(panels[index]);
  }
  setContext(TABS, {
    registerTab(tab) {
      registerItem(tabs, tab, selectedTab);
    },
    registerTabElement(tabElement) {
    },
    registerPanel(panel) {
      registerItem(panels, panel, selectedPanel);
    },
    selectTab,
    selectedTab,
    selectedPanel,
    controls,
    labeledBy
  });
  if ($$props.initialSelectedIndex === void 0 && $$bindings.initialSelectedIndex && initialSelectedIndex !== void 0)
    $$bindings.initialSelectedIndex(initialSelectedIndex);
  $$unsubscribe_selectedTab();
  return `<div class="svelte-tabs">${slots.default ? slots.default({}) : ``}</div>`;
});
const css$3 = {
  code: ".svelte-tabs__tab.svelte-1fbofsd{border:none;border-bottom:2px solid transparent;color:#000000;cursor:pointer;list-style:none;display:inline-block;padding:0.5em 0.75em}.svelte-tabs__tab.svelte-1fbofsd:focus{outline:thin dotted}.svelte-tabs__selected.svelte-1fbofsd{border-bottom:2px solid #4F81E5;color:#4F81E5}",
  map: null
};
const Tab = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $selectedTab, $$unsubscribe_selectedTab;
  let $controls, $$unsubscribe_controls;
  let tabEl;
  const tab = { id: getId() };
  const { registerTab, registerTabElement, selectTab, selectedTab, controls } = getContext(TABS);
  $$unsubscribe_selectedTab = subscribe(selectedTab, (value) => $selectedTab = value);
  $$unsubscribe_controls = subscribe(controls, (value) => $controls = value);
  let isSelected;
  registerTab(tab);
  $$result.css.add(css$3);
  isSelected = $selectedTab === tab;
  $$unsubscribe_selectedTab();
  $$unsubscribe_controls();
  return `<li role="tab"${add_attribute("id", tab.id, 0)}${add_attribute("aria-controls", $controls[tab.id], 0)}${add_attribute("aria-selected", isSelected, 0)}${add_attribute("tabindex", isSelected ? 0 : -1, 0)} class="${["svelte-tabs__tab svelte-1fbofsd", isSelected ? "svelte-tabs__selected" : ""].join(" ").trim()}"${add_attribute("this", tabEl, 0)}>${slots.default ? slots.default({}) : ``}</li>`;
});
const css$2 = {
  code: ".svelte-tabs__tab-list.svelte-12yby2a{border-bottom:1px solid #CCCCCC;margin:0;padding:0}",
  map: null
};
const TabList = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `<ul role="tablist" class="svelte-tabs__tab-list svelte-12yby2a">${slots.default ? slots.default({}) : ``}</ul>`;
});
const css$1 = {
  code: ".svelte-tabs__tab-panel.svelte-epfyet{margin-top:0.5em}",
  map: null
};
const TabPanel = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $labeledBy, $$unsubscribe_labeledBy;
  let $selectedPanel, $$unsubscribe_selectedPanel;
  const panel = { id: getId() };
  const { registerPanel, selectedPanel, labeledBy } = getContext(TABS);
  $$unsubscribe_selectedPanel = subscribe(selectedPanel, (value) => $selectedPanel = value);
  $$unsubscribe_labeledBy = subscribe(labeledBy, (value) => $labeledBy = value);
  registerPanel(panel);
  $$result.css.add(css$1);
  $$unsubscribe_labeledBy();
  $$unsubscribe_selectedPanel();
  return `<div${add_attribute("id", panel.id, 0)}${add_attribute("aria-labelledby", $labeledBy[panel.id], 0)} class="svelte-tabs__tab-panel svelte-epfyet" role="tabpanel">${$selectedPanel === panel ? `${slots.default ? slots.default({}) : ``}` : ``}</div>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: 'figure.svelte-1m6hx6u.svelte-1m6hx6u.svelte-1m6hx6u{--image-size:8em;height:var(--image-size);width:var(--image-size);position:relative}figure.svelte-1m6hx6u>.svelte-1m6hx6u.svelte-1m6hx6u{height:100%;width:100%;position:absolute;top:0;left:0;background-size:contain}figure.svelte-1m6hx6u>.svelte-1m6hx6u img.svelte-1m6hx6u{height:100%;width:100%}.svelte-tabs *{border-bottom:none;transition:all 500ms ease-in-out;transition-duration:800ms}.svelte-tabs__tab-list{counter-reset:step;border:none;border-bottom:none !important}.svelte-tabs li.svelte-tabs__tab:before{content:counter(step) ". "}.svelte-tabs li.svelte-tabs__tab{counter-increment:step;background:var(--color-primary);color:white;clip-path:polygon(85% 0%, 100% 50%, 85% 100%, 0% 100%, 15% 50%, 0% 0%);width:11em;padding:0.5em 2em;border-bottom:0 solid var(--color-primary);margin-right:-1em}.svelte-tabs li.svelte-tabs__selected{background:var(--color-secondary);color:var(--color-primary);color:white}.selected.svelte-1m6hx6u.svelte-1m6hx6u.svelte-1m6hx6u{box-shadow:0 0 0em 0.15em var(--color-primary)}.svelte-1m6hx6u.svelte-1m6hx6u.svelte-1m6hx6u{transition:all 500ms ease-in-out;transition-duration:800ms}.card.svelte-1m6hx6u.svelte-1m6hx6u.svelte-1m6hx6u:hover{box-shadow:0 0 0em 0.15em var(--color-secondary)}.flex.svelte-1m6hx6u.svelte-1m6hx6u.svelte-1m6hx6u{display:flex;flex-wrap:wrap;justify-content:space-around;gap:1em;margin:1em}.flex.svelte-1m6hx6u>.svelte-1m6hx6u.svelte-1m6hx6u{flex:1 1 auto;min-width:15em}textarea.svelte-1m6hx6u.svelte-1m6hx6u.svelte-1m6hx6u{width:30em}.ai-prompt.svelte-1m6hx6u.svelte-1m6hx6u.svelte-1m6hx6u{display:flex;max-width:60em;margin:0 auto;padding:1em;flex-wrap:wrap}.ai-prompt.svelte-1m6hx6u>.svelte-1m6hx6u.svelte-1m6hx6u{display:inline;padding:1em;flex:1 1 20em}.product-preview.svelte-1m6hx6u.svelte-1m6hx6u.svelte-1m6hx6u{height:20em}.product-preview.svelte-1m6hx6u img.svelte-1m6hx6u.svelte-1m6hx6u{height:100%;display:block;margin:0 auto}',
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $currentCakeDesign, $$unsubscribe_currentCakeDesign;
  $$unsubscribe_currentCakeDesign = subscribe(currentCakeDesign, (value) => $currentCakeDesign = value);
  let { data } = $$props;
  let { base, icing, layer, topping, color, size, decoration } = mapObjIndexed((v, k, a) => ({ ...v, name: k }), data);
  let options = [base, icing, size, layer, topping, decoration];
  let getExampleText = (option) => "Example: I would like a cake for my wife's anniversary! What " + option.name + " should I use?";
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  $$unsubscribe_currentCakeDesign();
  return `<div class="product-preview svelte-1m6hx6u"><img${add_attribute(
    "src",
    $currentCakeDesign.base ? "/base_" + snakeCase($currentCakeDesign.base) + ".png" : "",
    0
  )} class="svelte-1m6hx6u"></div>

${validate_component(Tabs, "Tabs").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(TabList, "TabList").$$render($$result, { class: "tab tab-block" }, {}, {
        default: () => {
          return `${each(options, (option) => {
            return `${validate_component(Tab, "Tab").$$render($$result, { class: "tab-item" }, {}, {
              default: () => {
                return `${escape(capitalCase(option.name))}`;
              }
            })}`;
          })}`;
        }
      })}

  ${each(options, (option) => {
        return `${validate_component(TabPanel, "TabPanel").$$render($$result, {}, {}, {
          default: () => {
            return `<section class="ai-prompt svelte-1m6hx6u"><label class="form-label svelte-1m6hx6u" for="${"textarea-" + escape(option.name, true)}">
          <p class="svelte-1m6hx6u">Describe what kind of <em class="svelte-1m6hx6u">${escape(option.name)}</em> you want and the AI Assistant will choose for you! </p></label>
        <textarea class="form-input svelte-1m6hx6u" name="${"ai-prompt-" + escape(option.name, true)}" id="${"textarea-" + escape(option.name, true)}">${escape(getExampleText(option), false)}</textarea>
        <button class="svelte-1m6hx6u">Submit</button></section>

      <div class="flex svelte-1m6hx6u">${each(option.choices, (choice) => {
              return `
        <label class="${"card " + escape(
                $currentCakeDesign[option.name] === choice.name ? "selected" : "",
                true
              ) + " svelte-1m6hx6u"}" style="min-height: 10em;"${add_attribute("for", choice.name, 0)}><h2 class="svelte-1m6hx6u">${escape(choice.name)}</h2>
          ${validate_component(Input, "Input").$$render(
                $$result,
                {
                  name: option.name,
                  schema: {
                    enum: map((x) => capitalCase(String(x.name)), option.choices)
                  },
                  id: choice.name,
                  radio: true,
                  single: "true",
                  value: choice.name,
                  hide: true
                },
                {},
                {}
              )}
          <figure class="svelte-1m6hx6u">${escape(choice.name.toLowerCase())}
            <div class="cake-base svelte-1m6hx6u"><img${add_attribute("src", "/" + snakeCase(option.name) + "_" + snakeCase(choice.name) + ".png", 0)} class="svelte-1m6hx6u"></div>
            <div class="cake-icing svelte-1m6hx6u"></div>
            <div class="cake-size svelte-1m6hx6u"></div>
            <div class="cake-layer svelte-1m6hx6u"></div>
            <div class="cake-topping svelte-1m6hx6u"></div>
            <div class="cake-decoration svelte-1m6hx6u"></div></figure>

        </label>`;
            })}</div>
    `;
          }
        })}`;
      })}`;
    }
  })}`;
});
export {
  Page as default
};
