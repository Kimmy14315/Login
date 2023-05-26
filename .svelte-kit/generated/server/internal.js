
import root from '../root.svelte';
import { set_building } from '__sveltekit/environment';
import { set_assets } from '__sveltekit/paths';
import { set_private_env, set_public_env } from '../../../node_modules/@sveltejs/kit/src/runtime/shared-server.js';

export const options = {
	app_template_contains_nonce: false,
	csp: {"mode":"auto","directives":{"upgrade-insecure-requests":false,"block-all-mixed-content":false},"reportOnly":{"upgrade-insecure-requests":false,"block-all-mixed-content":false}},
	csrf_check_origin: true,
	embedded: false,
	env_public_prefix: 'PUBLIC_',
	hooks: null, // added lazily, via `get_hooks`
	preload_strategy: "modulepreload",
	root,
	service_worker: false,
	templates: {
		app: ({ head, body, assets, nonce, env }) => "<!DOCTYPE html>\n<html lang=\"en\">\n\t<head>\n\t\t<meta charset=\"utf-8\" />\n\t\t<link rel=\"icon\" href=\"favicon.png\" />\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />\n    <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.css\">\n    <link rel='stylesheet' href='" + assets + "/global.css'>\n    <link href=\"https://allfont.net/allfont.css?fonts=parsek\" rel=\"stylesheet\" type=\"text/css\" />\n    <script>var global = window</script>\n\t\t" + head + "\n    <!--\n    <link rel=\"stylesheet\" href=\"https://unpkg.com/spectre.css/dist/spectre-exp.min.css\">\n    <link rel=\"stylesheet\" href=\"https://unpkg.com/spectre.css/dist/spectre-icons.min.css\">\n    <link rel=\"stylesheet\" href=\"https://unpkg.com/spectre.css/dist/spectre.min.css\">\n\t\t<meta name=\"viewport\" content=\"width=device-width\" />\n    <link rel=\"stylesheet\" type=\"text/css\" href=\"https://cdn.jsdelivr.net/npm/toastify-js/src/toastify.min.css\">\n    <script src=\"https://unpkg.com/tweetnacl@1.0.3/nacl-fast.js\"></script>\n    <script src=\"https://unpkg.com/tweetnacl-util@0.15.1/nacl-util.js\"></script>\n\n    <script src=\"https://unpkg.com/argon2-browser/dist/argon2-bundled.js\"></script>\n    <script> console.log(argon2)</script>\n    <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/milligram/1.4.1/milligram.css\">\n    <script src=\"https://unpkg.com/argon2-browser@1.18.0/dist/argon2-bundled.min.js\"></script>\n    <link rel=\"stylesheet\" href=\"https://unpkg.com/mgplus@1.1.0-preview.2/dist/mg-plus.min.css\">\n    <link rel=\"stylesheet\" href=\"https://cdn.jsdelivr.net/npm/purecss@3.0.0/build/pure-min.css\" integrity=\"sha384-X38yfunGUhNzHpBaEBsWLO+A0HDYOQi8ufWDkZ0k9e0eXz/tH3II7uKZ9msv++Ls\" crossorigin=\"anonymous\">\n\n\t\t<div style=\"display: contents\">\n    </div>\n    -->\n\n\n\t</head>\n\t<body data-sveltekit-preload-data=\"hover\">\n      " + body + "\n\t</body>\n</html>\n",
		error: ({ status, message }) => "<!DOCTYPE html>\n<html lang=\"en\">\n\t<head>\n\t\t<meta charset=\"utf-8\" />\n\t\t<title>" + message + "</title>\n\n\t\t<style>\n\t\t\tbody {\n\t\t\t\t--bg: white;\n\t\t\t\t--fg: #222;\n\t\t\t\t--divider: #ccc;\n\t\t\t\tbackground: var(--bg);\n\t\t\t\tcolor: var(--fg);\n\t\t\t\tfont-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,\n\t\t\t\t\tUbuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t\tjustify-content: center;\n\t\t\t\theight: 100vh;\n\t\t\t}\n\n\t\t\t.error {\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t\tmax-width: 32rem;\n\t\t\t\tmargin: 0 1rem;\n\t\t\t}\n\n\t\t\t.status {\n\t\t\t\tfont-weight: 200;\n\t\t\t\tfont-size: 3rem;\n\t\t\t\tline-height: 1;\n\t\t\t\tposition: relative;\n\t\t\t\ttop: -0.05rem;\n\t\t\t}\n\n\t\t\t.message {\n\t\t\t\tborder-left: 1px solid var(--divider);\n\t\t\t\tpadding: 0 0 0 1rem;\n\t\t\t\tmargin: 0 0 0 1rem;\n\t\t\t\tmin-height: 2.5rem;\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t}\n\n\t\t\t.message h1 {\n\t\t\t\tfont-weight: 400;\n\t\t\t\tfont-size: 1em;\n\t\t\t\tmargin: 0;\n\t\t\t}\n\n\t\t\t@media (prefers-color-scheme: dark) {\n\t\t\t\tbody {\n\t\t\t\t\t--bg: #222;\n\t\t\t\t\t--fg: #ddd;\n\t\t\t\t\t--divider: #666;\n\t\t\t\t}\n\t\t\t}\n\t\t</style>\n\t</head>\n\t<body>\n\t\t<div class=\"error\">\n\t\t\t<span class=\"status\">" + status + "</span>\n\t\t\t<div class=\"message\">\n\t\t\t\t<h1>" + message + "</h1>\n\t\t\t</div>\n\t\t</div>\n\t</body>\n</html>\n"
	},
	version_hash: "h8w0il"
};

export function get_hooks() {
	return {};
}

export { set_assets, set_building, set_private_env, set_public_env };
