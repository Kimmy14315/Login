
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
	export const SHELL: string;
	export const npm_command: string;
	export const SESSION_MANAGER: string;
	export const WINDOWID: string;
	export const __ETC_PROFILE_DONE: string;
	export const npm_config_userconfig: string;
	export const COLORTERM: string;
	export const _fzf_orig_completion_tee: string;
	export const XDG_CONFIG_DIRS: string;
	export const _fzf_orig_completion_rm: string;
	export const npm_config_cache: string;
	export const _fzf_orig_completion_rmdir: string;
	export const XDG_SESSION_PATH: string;
	export const NIX_BUILD_CORES: string;
	export const XDG_MENU_PREFIX: string;
	export const configureFlags: string;
	export const mesonFlags: string;
	export const shell: string;
	export const depsHostHost: string;
	export const NODE: string;
	export const _fzf_orig_completion_uniq: string;
	export const _fzf_orig_completion_ftp: string;
	export const SSH_AUTH_SOCK: string;
	export const STRINGS: string;
	export const _fzf_orig_completion_tail: string;
	export const depsTargetTarget: string;
	export const XCURSOR_PATH: string;
	export const stdenv: string;
	export const COLOR: string;
	export const OPENAI_API_KEY: string;
	export const npm_config_local_prefix: string;
	export const builder: string;
	export const DESKTOP_SESSION: string;
	export const SSH_AGENT_PID: string;
	export const GDK_PIXBUF_MODULE_FILE: string;
	export const NO_AT_BRIDGE: string;
	export const npm_config_globalconfig: string;
	export const GPG_TTY: string;
	export const EDITOR: string;
	export const XDG_SEAT: string;
	export const _fzf_orig_completion_mv: string;
	export const PWD: string;
	export const NIX_PROFILES: string;
	export const SOURCE_DATE_EPOCH: string;
	export const LOGNAME: string;
	export const XDG_SESSION_DESKTOP: string;
	export const XDG_SESSION_TYPE: string;
	export const NIX_ENFORCE_NO_NATIVE: string;
	export const NIX_PATH: string;
	export const npm_config_init_module: string;
	export const ASTRA_DB_REGION: string;
	export const NIXPKGS_CONFIG: string;
	export const CXX: string;
	export const _: string;
	export const XAUTHORITY: string;
	export const TEMPDIR: string;
	export const system: string;
	export const XDG_GREETER_DATA_DIR: string;
	export const HOST_PATH: string;
	export const GDM_LANG: string;
	export const enableParallelBuilding: string;
	export const IN_NIX_SHELL: string;
	export const _fzf_orig_completion_diff: string;
	export const doInstallCheck: string;
	export const buildCommandPath: string;
	export const HOME: string;
	export const enableParallelChecking: string;
	export const NIX_BINTOOLS: string;
	export const SSH_ASKPASS: string;
	export const LANG: string;
	export const _fzf_orig_completion_awk: string;
	export const LS_COLORS: string;
	export const OPENAI_ORGANIZATION: string;
	export const XDG_CURRENT_DESKTOP: string;
	export const depsTargetTargetPropagated: string;
	export const _fzf_orig_completion_telnet: string;
	export const npm_package_version: string;
	export const VTE_VERSION: string;
	export const cmakeFlags: string;
	export const GIO_EXTRA_MODULES: string;
	export const outputs: string;
	export const _fzf_orig_completion_grep: string;
	export const NIX_STORE: string;
	export const oai_token: string;
	export const TMPDIR: string;
	export const XDG_SEAT_PATH: string;
	export const fleek_hosting_key: string;
	export const ASTRA_API_CLIENT_ID: string;
	export const LD: string;
	export const INIT_CWD: string;
	export const READELF: string;
	export const _fzf_orig_completion_du: string;
	export const oai_secret_key: string;
	export const NIX_USER_PROFILE_DIR: string;
	export const _fzf_orig_completion_sort: string;
	export const INFOPATH: string;
	export const npm_lifecycle_script: string;
	export const doCheck: string;
	export const depsBuildBuild: string;
	export const XDG_SESSION_CLASS: string;
	export const _fzf_orig_completion_cat: string;
	export const TERM: string;
	export const npm_package_name: string;
	export const GTK_PATH: string;
	export const SIZE: string;
	export const propagatedNativeBuildInputs: string;
	export const npm_config_prefix: string;
	export const LESSOPEN: string;
	export const _fzf_orig_completion_ln: string;
	export const USER: string;
	export const strictDeps: string;
	export const _fzf_orig_completion_ld: string;
	export const _fzf_orig_completion_ls: string;
	export const TZDIR: string;
	export const ASTRA_API_APPLICATION_TOKEN: string;
	export const AR: string;
	export const AS: string;
	export const MANPAGER: string;
	export const TEMP: string;
	export const DISPLAY: string;
	export const NIX_BINTOOLS_WRAPPER_TARGET_HOST_x86_64_unknown_linux_gnu: string;
	export const npm_lifecycle_event: string;
	export const SHLVL: string;
	export const NIX_BUILD_TOP: string;
	export const NM: string;
	export const PAGER: string;
	export const NIX_CFLAGS_COMPILE: string;
	export const QTWEBKIT_PLUGIN_PATH: string;
	export const patches: string;
	export const passAsFile: string;
	export const __NIXOS_SET_ENVIRONMENT_DONE: string;
	export const XDG_VTNR: string;
	export const buildInputs: string;
	export const _fzf_orig_completion_pushd: string;
	export const XDG_SESSION_ID: string;
	export const LOCALE_ARCHIVE: string;
	export const LESSKEYIN_SYSTEM: string;
	export const npm_config_user_agent: string;
	export const TERMINFO_DIRS: string;
	export const ASTRA_DB_ID: string;
	export const npm_execpath: string;
	export const MOZ_PLUGIN_PATH: string;
	export const _fzf_orig_completion_vim: string;
	export const XDG_RUNTIME_DIR: string;
	export const NODE_PATH: string;
	export const depsBuildTarget: string;
	export const OBJCOPY: string;
	export const out: string;
	export const npm_package_json: string;
	export const KDEDIRS: string;
	export const _fzf_orig_completion_cd: string;
	export const STRIP: string;
	export const _fzf_orig_completion_less: string;
	export const XDG_DATA_DIRS: string;
	export const _fzf_orig_completion_cp: string;
	export const LIBEXEC_PATH: string;
	export const TMP: string;
	export const OBJDUMP: string;
	export const npm_config_noproxy: string;
	export const PATH: string;
	export const propagatedBuildInputs: string;
	export const npm_config_metrics_registry: string;
	export const npm_config_node_gyp: string;
	export const GDMSESSION: string;
	export const CC: string;
	export const NIX_CC: string;
	export const ASTRA_DB_KEYSPACE: string;
	export const DBUS_SESSION_BUS_ADDRESS: string;
	export const depsBuildTargetPropagated: string;
	export const _fzf_orig_completion_sed: string;
	export const depsBuildBuildPropagated: string;
	export const npm_config_global_prefix: string;
	export const NIX_CC_WRAPPER_TARGET_HOST_x86_64_unknown_linux_gnu: string;
	export const QT_PLUGIN_PATH: string;
	export const ASTRA_API_CLIENT_SECRET: string;
	export const CONFIG_SHELL: string;
	export const __structuredAttrs: string;
	export const npm_node_execpath: string;
	export const _fzf_orig_completion_head: string;
	export const RANLIB: string;
	export const NIX_HARDENING_ENABLE: string;
	export const _fzf_orig_completion_wc: string;
	export const OLDPWD: string;
	export const NIX_LDFLAGS: string;
	export const nativeBuildInputs: string;
	export const name: string;
	export const depsHostHostPropagated: string;
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
		SHELL: string;
		npm_command: string;
		SESSION_MANAGER: string;
		WINDOWID: string;
		__ETC_PROFILE_DONE: string;
		npm_config_userconfig: string;
		COLORTERM: string;
		_fzf_orig_completion_tee: string;
		XDG_CONFIG_DIRS: string;
		_fzf_orig_completion_rm: string;
		npm_config_cache: string;
		_fzf_orig_completion_rmdir: string;
		XDG_SESSION_PATH: string;
		NIX_BUILD_CORES: string;
		XDG_MENU_PREFIX: string;
		configureFlags: string;
		mesonFlags: string;
		shell: string;
		depsHostHost: string;
		NODE: string;
		_fzf_orig_completion_uniq: string;
		_fzf_orig_completion_ftp: string;
		SSH_AUTH_SOCK: string;
		STRINGS: string;
		_fzf_orig_completion_tail: string;
		depsTargetTarget: string;
		XCURSOR_PATH: string;
		stdenv: string;
		COLOR: string;
		OPENAI_API_KEY: string;
		npm_config_local_prefix: string;
		builder: string;
		DESKTOP_SESSION: string;
		SSH_AGENT_PID: string;
		GDK_PIXBUF_MODULE_FILE: string;
		NO_AT_BRIDGE: string;
		npm_config_globalconfig: string;
		GPG_TTY: string;
		EDITOR: string;
		XDG_SEAT: string;
		_fzf_orig_completion_mv: string;
		PWD: string;
		NIX_PROFILES: string;
		SOURCE_DATE_EPOCH: string;
		LOGNAME: string;
		XDG_SESSION_DESKTOP: string;
		XDG_SESSION_TYPE: string;
		NIX_ENFORCE_NO_NATIVE: string;
		NIX_PATH: string;
		npm_config_init_module: string;
		ASTRA_DB_REGION: string;
		NIXPKGS_CONFIG: string;
		CXX: string;
		_: string;
		XAUTHORITY: string;
		TEMPDIR: string;
		system: string;
		XDG_GREETER_DATA_DIR: string;
		HOST_PATH: string;
		GDM_LANG: string;
		enableParallelBuilding: string;
		IN_NIX_SHELL: string;
		_fzf_orig_completion_diff: string;
		doInstallCheck: string;
		buildCommandPath: string;
		HOME: string;
		enableParallelChecking: string;
		NIX_BINTOOLS: string;
		SSH_ASKPASS: string;
		LANG: string;
		_fzf_orig_completion_awk: string;
		LS_COLORS: string;
		OPENAI_ORGANIZATION: string;
		XDG_CURRENT_DESKTOP: string;
		depsTargetTargetPropagated: string;
		_fzf_orig_completion_telnet: string;
		npm_package_version: string;
		VTE_VERSION: string;
		cmakeFlags: string;
		GIO_EXTRA_MODULES: string;
		outputs: string;
		_fzf_orig_completion_grep: string;
		NIX_STORE: string;
		oai_token: string;
		TMPDIR: string;
		XDG_SEAT_PATH: string;
		fleek_hosting_key: string;
		ASTRA_API_CLIENT_ID: string;
		LD: string;
		INIT_CWD: string;
		READELF: string;
		_fzf_orig_completion_du: string;
		oai_secret_key: string;
		NIX_USER_PROFILE_DIR: string;
		_fzf_orig_completion_sort: string;
		INFOPATH: string;
		npm_lifecycle_script: string;
		doCheck: string;
		depsBuildBuild: string;
		XDG_SESSION_CLASS: string;
		_fzf_orig_completion_cat: string;
		TERM: string;
		npm_package_name: string;
		GTK_PATH: string;
		SIZE: string;
		propagatedNativeBuildInputs: string;
		npm_config_prefix: string;
		LESSOPEN: string;
		_fzf_orig_completion_ln: string;
		USER: string;
		strictDeps: string;
		_fzf_orig_completion_ld: string;
		_fzf_orig_completion_ls: string;
		TZDIR: string;
		ASTRA_API_APPLICATION_TOKEN: string;
		AR: string;
		AS: string;
		MANPAGER: string;
		TEMP: string;
		DISPLAY: string;
		NIX_BINTOOLS_WRAPPER_TARGET_HOST_x86_64_unknown_linux_gnu: string;
		npm_lifecycle_event: string;
		SHLVL: string;
		NIX_BUILD_TOP: string;
		NM: string;
		PAGER: string;
		NIX_CFLAGS_COMPILE: string;
		QTWEBKIT_PLUGIN_PATH: string;
		patches: string;
		passAsFile: string;
		__NIXOS_SET_ENVIRONMENT_DONE: string;
		XDG_VTNR: string;
		buildInputs: string;
		_fzf_orig_completion_pushd: string;
		XDG_SESSION_ID: string;
		LOCALE_ARCHIVE: string;
		LESSKEYIN_SYSTEM: string;
		npm_config_user_agent: string;
		TERMINFO_DIRS: string;
		ASTRA_DB_ID: string;
		npm_execpath: string;
		MOZ_PLUGIN_PATH: string;
		_fzf_orig_completion_vim: string;
		XDG_RUNTIME_DIR: string;
		NODE_PATH: string;
		depsBuildTarget: string;
		OBJCOPY: string;
		out: string;
		npm_package_json: string;
		KDEDIRS: string;
		_fzf_orig_completion_cd: string;
		STRIP: string;
		_fzf_orig_completion_less: string;
		XDG_DATA_DIRS: string;
		_fzf_orig_completion_cp: string;
		LIBEXEC_PATH: string;
		TMP: string;
		OBJDUMP: string;
		npm_config_noproxy: string;
		PATH: string;
		propagatedBuildInputs: string;
		npm_config_metrics_registry: string;
		npm_config_node_gyp: string;
		GDMSESSION: string;
		CC: string;
		NIX_CC: string;
		ASTRA_DB_KEYSPACE: string;
		DBUS_SESSION_BUS_ADDRESS: string;
		depsBuildTargetPropagated: string;
		_fzf_orig_completion_sed: string;
		depsBuildBuildPropagated: string;
		npm_config_global_prefix: string;
		NIX_CC_WRAPPER_TARGET_HOST_x86_64_unknown_linux_gnu: string;
		QT_PLUGIN_PATH: string;
		ASTRA_API_CLIENT_SECRET: string;
		CONFIG_SHELL: string;
		__structuredAttrs: string;
		npm_node_execpath: string;
		_fzf_orig_completion_head: string;
		RANLIB: string;
		NIX_HARDENING_ENABLE: string;
		_fzf_orig_completion_wc: string;
		OLDPWD: string;
		NIX_LDFLAGS: string;
		nativeBuildInputs: string;
		name: string;
		depsHostHostPropagated: string;
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
