
// this file is generated — do not edit it


/// <reference types="@sveltejs/kit" />

/**
 * Environment variables [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env`. Like [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), this module cannot be imported into client-side code. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env).
 * 
 * _Unlike_ [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), the values exported from this module are statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * ```ts
 * import { API_KEY } from '$env/static/private';
 * ```
 * 
 * Note that all environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * 
 * ```
 * MY_FEATURE_FLAG=""
 * ```
 * 
 * You can override `.env` values from the command line like so:
 * 
 * ```bash
 * MY_FEATURE_FLAG="enabled" npm run dev
 * ```
 */
declare module '$env/static/private' {
	export const PROFILEHOME: string;
	export const SONGSHU_ENCRYPTION_KEY: string;
	export const KDE_FULL_SESSION: string;
	export const HISTFILESIZE: string;
	export const ASTRA_DB_KEYSPACE: string;
	export const CODECOV_TOKEN: string;
	export const printful_store_id: string;
	export const printful_token: string;
	export const GITHUB_API_TOKEN: string;
	export const LANGUAGE: string;
	export const fleek_hosting_key: string;
	export const USER: string;
	export const npm_config_user_agent: string;
	export const XDG_SEAT: string;
	export const TF_VAR_do_token: string;
	export const project_id: string;
	export const SSH_AGENT_PID: string;
	export const XDG_SESSION_TYPE: string;
	export const dt_mysql_username: string;
	export const npm_node_execpath: string;
	export const XCURSOR_SIZE: string;
	export const KONSOLE_VERSION: string;
	export const SHLVL: string;
	export const npm_config_noproxy: string;
	export const HOME: string;
	export const KDE_APPLICATIONS_AS_SCOPE: string;
	export const OLDPWD: string;
	export const DESKTOP_SESSION: string;
	export const ASTRA_API_APPLICATION_TOKEN: string;
	export const npm_package_json: string;
	export const SHELL_SESSION_ID: string;
	export const OPENAI_API_KEY: string;
	export const GTK_RC_FILES: string;
	export const GTK_MODULES: string;
	export const XDG_SEAT_PATH: string;
	export const KDE_SESSION_VERSION: string;
	export const KONSOLE_DBUS_SESSION: string;
	export const DNS_SIMPLE_TOKEN: string;
	export const npm_config_userconfig: string;
	export const npm_config_local_prefix: string;
	export const KDED_STARTED_BY_KDEINIT: string;
	export const ASTRA_DB_REGION: string;
	export const DBUS_SESSION_BUS_ADDRESS: string;
	export const COLORTERM: string;
	export const ASTRA_DB_ID: string;
	export const KONSOLE_DBUS_WINDOW: string;
	export const COLOR: string;
	export const npm_config_metrics_registry: string;
	export const ASTRA_API_CLIENT_ID: string;
	export const LOGNAME: string;
	export const ASTRA_API_CLIENT_SECRET: string;
	export const WINDOWID: string;
	export const QT_AUTO_SCREEN_SCALE_FACTOR: string;
	export const _: string;
	export const npm_config_prefix: string;
	export const oai_secret_key: string;
	export const XDG_SESSION_CLASS: string;
	export const COLORFGBG: string;
	export const filebase_token: string;
	export const zero_ad_path: string;
	export const TERM: string;
	export const XDG_SESSION_ID: string;
	export const pinata_jwt: string;
	export const npm_config_cache: string;
	export const GTK2_RC_FILES: string;
	export const dt_mysql_ip: string;
	export const npm_config_node_gyp: string;
	export const PATH: string;
	export const web3_storage_token: string;
	export const DNS_SIMPLE_ACC_ID: string;
	export const NODE: string;
	export const npm_package_name: string;
	export const XDG_SESSION_PATH: string;
	export const XDG_RUNTIME_DIR: string;
	export const XCURSOR_THEME: string;
	export const dt_mysql_password: string;
	export const DISPLAY: string;
	export const LANG: string;
	export const XDG_CURRENT_DESKTOP: string;
	export const infura_secret: string;
	export const XDG_SESSION_DESKTOP: string;
	export const XAUTHORITY: string;
	export const pinata_api_key: string;
	export const LS_COLORS: string;
	export const npm_lifecycle_script: string;
	export const SSH_AUTH_SOCK: string;
	export const SHELL: string;
	export const COVERALLS_REPO_TOKEN: string;
	export const npm_package_version: string;
	export const npm_lifecycle_event: string;
	export const QT_ACCESSIBILITY: string;
	export const OPENAI_ORGANIZATION: string;
	export const KONSOLE_DBUS_SERVICE: string;
	export const pinata_api_secret: string;
	export const GPG_AGENT_INFO: string;
	export const zero_ad_mod_path_1: string;
	export const zero_ad_mod_path_2: string;
	export const XDG_VTNR: string;
	export const npm_config_globalconfig: string;
	export const npm_config_init_module: string;
	export const PWD: string;
	export const npm_execpath: string;
	export const XDG_DATA_DIRS: string;
	export const npm_config_global_prefix: string;
	export const npm_command: string;
	export const KDE_SESSION_UID: string;
	export const oai_token: string;
	export const INIT_CWD: string;
	export const EDITOR: string;
	export const NODE_ENV: string;
}

/**
 * Similar to [`$env/static/private`](https://kit.svelte.dev/docs/modules#$env-static-private), except that it only includes environment variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Values are replaced statically at build time.
 * 
 * ```ts
 * import { PUBLIC_BASE_URL } from '$env/static/public';
 * ```
 */
declare module '$env/static/public' {
	
}

/**
 * This module provides access to runtime environment variables, as defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/master/packages/adapter-node) (or running [`vite preview`](https://kit.svelte.dev/docs/cli)), this is equivalent to `process.env`. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env).
 * 
 * This module cannot be imported into client-side code.
 * 
 * ```ts
 * import { env } from '$env/dynamic/private';
 * console.log(env.DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 * 
 * > In `dev`, `$env/dynamic` always includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 */
declare module '$env/dynamic/private' {
	export const env: {
		PROFILEHOME: string;
		SONGSHU_ENCRYPTION_KEY: string;
		KDE_FULL_SESSION: string;
		HISTFILESIZE: string;
		ASTRA_DB_KEYSPACE: string;
		CODECOV_TOKEN: string;
		printful_store_id: string;
		printful_token: string;
		GITHUB_API_TOKEN: string;
		LANGUAGE: string;
		fleek_hosting_key: string;
		USER: string;
		npm_config_user_agent: string;
		XDG_SEAT: string;
		TF_VAR_do_token: string;
		project_id: string;
		SSH_AGENT_PID: string;
		XDG_SESSION_TYPE: string;
		dt_mysql_username: string;
		npm_node_execpath: string;
		XCURSOR_SIZE: string;
		KONSOLE_VERSION: string;
		SHLVL: string;
		npm_config_noproxy: string;
		HOME: string;
		KDE_APPLICATIONS_AS_SCOPE: string;
		OLDPWD: string;
		DESKTOP_SESSION: string;
		ASTRA_API_APPLICATION_TOKEN: string;
		npm_package_json: string;
		SHELL_SESSION_ID: string;
		OPENAI_API_KEY: string;
		GTK_RC_FILES: string;
		GTK_MODULES: string;
		XDG_SEAT_PATH: string;
		KDE_SESSION_VERSION: string;
		KONSOLE_DBUS_SESSION: string;
		DNS_SIMPLE_TOKEN: string;
		npm_config_userconfig: string;
		npm_config_local_prefix: string;
		KDED_STARTED_BY_KDEINIT: string;
		ASTRA_DB_REGION: string;
		DBUS_SESSION_BUS_ADDRESS: string;
		COLORTERM: string;
		ASTRA_DB_ID: string;
		KONSOLE_DBUS_WINDOW: string;
		COLOR: string;
		npm_config_metrics_registry: string;
		ASTRA_API_CLIENT_ID: string;
		LOGNAME: string;
		ASTRA_API_CLIENT_SECRET: string;
		WINDOWID: string;
		QT_AUTO_SCREEN_SCALE_FACTOR: string;
		_: string;
		npm_config_prefix: string;
		oai_secret_key: string;
		XDG_SESSION_CLASS: string;
		COLORFGBG: string;
		filebase_token: string;
		zero_ad_path: string;
		TERM: string;
		XDG_SESSION_ID: string;
		pinata_jwt: string;
		npm_config_cache: string;
		GTK2_RC_FILES: string;
		dt_mysql_ip: string;
		npm_config_node_gyp: string;
		PATH: string;
		web3_storage_token: string;
		DNS_SIMPLE_ACC_ID: string;
		NODE: string;
		npm_package_name: string;
		XDG_SESSION_PATH: string;
		XDG_RUNTIME_DIR: string;
		XCURSOR_THEME: string;
		dt_mysql_password: string;
		DISPLAY: string;
		LANG: string;
		XDG_CURRENT_DESKTOP: string;
		infura_secret: string;
		XDG_SESSION_DESKTOP: string;
		XAUTHORITY: string;
		pinata_api_key: string;
		LS_COLORS: string;
		npm_lifecycle_script: string;
		SSH_AUTH_SOCK: string;
		SHELL: string;
		COVERALLS_REPO_TOKEN: string;
		npm_package_version: string;
		npm_lifecycle_event: string;
		QT_ACCESSIBILITY: string;
		OPENAI_ORGANIZATION: string;
		KONSOLE_DBUS_SERVICE: string;
		pinata_api_secret: string;
		GPG_AGENT_INFO: string;
		zero_ad_mod_path_1: string;
		zero_ad_mod_path_2: string;
		XDG_VTNR: string;
		npm_config_globalconfig: string;
		npm_config_init_module: string;
		PWD: string;
		npm_execpath: string;
		XDG_DATA_DIRS: string;
		npm_config_global_prefix: string;
		npm_command: string;
		KDE_SESSION_UID: string;
		oai_token: string;
		INIT_CWD: string;
		EDITOR: string;
		NODE_ENV: string;
		[key: `PUBLIC_${string}`]: undefined;
		[key: string]: string | undefined;
	}
}

/**
 * Similar to [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), but only includes variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Note that public dynamic environment variables must all be sent from the server to the client, causing larger network requests — when possible, use `$env/static/public` instead.
 * 
 * ```ts
 * import { env } from '$env/dynamic/public';
 * console.log(env.PUBLIC_DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 */
declare module '$env/dynamic/public' {
	export const env: {
		[key: `PUBLIC_${string}`]: string | undefined;
	}
}
