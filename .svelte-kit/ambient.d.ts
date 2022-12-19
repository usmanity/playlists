
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
	export const GREP_COLOR: string;
	export const AUTOJUMP_ERROR_PATH: string;
	export const MANPATH: string;
	export const COLOR_NC: string;
	export const npm_package_devDependencies_prettier: string;
	export const TERM_PROGRAM: string;
	export const NODE: string;
	export const FNM_LOGLEVEL: string;
	export const INIT_CWD: string;
	export const COLOR_CYAN: string;
	export const COLOR_RED: string;
	export const AUTOJUMP_SOURCED: string;
	export const _P9K_TTY: string;
	export const npm_package_devDependencies_typescript: string;
	export const npm_package_devDependencies_prettier_plugin_svelte: string;
	export const npm_config_version_git_tag: string;
	export const SHELL: string;
	export const TERM: string;
	export const COLOR_PURPLE: string;
	export const npm_package_devDependencies_vite: string;
	export const ZPLUG_LOADFILE: string;
	export const CLICOLOR: string;
	export const FNM_NODE_DIST_MIRROR: string;
	export const TMPDIR: string;
	export const HOMEBREW_REPOSITORY: string;
	export const COLOR_LIGHT_RED: string;
	export const COLOR_GREEN: string;
	export const COLOR_LIGHT_PURPLE: string;
	export const npm_package_scripts_lint: string;
	export const npm_config_init_license: string;
	export const TERM_PROGRAM_VERSION: string;
	export const FPATH: string;
	export const npm_package_scripts_dev: string;
	export const COLOR_BLUE: string;
	export const TERM_SESSION_ID: string;
	export const npm_package_devDependencies__sveltejs_kit: string;
	export const npm_package_private: string;
	export const npm_config_registry: string;
	export const COLOR_YELLOW: string;
	export const npm_package_readmeFilename: string;
	export const USER: string;
	export const ZPLUG_USE_CACHE: string;
	export const npm_package_description: string;
	export const ZPLUG_ERROR_LOG: string;
	export const npm_package_license: string;
	export const npm_package_scripts_check_watch: string;
	export const COMMAND_MODE: string;
	export const ZPLUG_PROTOCOL: string;
	export const SSH_AUTH_SOCK: string;
	export const DOTFILES_DIR: string;
	export const __CF_USER_TEXT_ENCODING: string;
	export const npm_execpath: string;
	export const npm_package_devDependencies_tslib: string;
	export const COLOR_BLACK: string;
	export const npm_package_devDependencies_svelte: string;
	export const _ZPLUG_VERSION: string;
	export const _ZPLUG_PREZTO: string;
	export const PERIOD: string;
	export const LSCOLORS: string;
	export const FNM_VERSION_FILE_STRATEGY: string;
	export const _ZPLUG_AWKPATH: string;
	export const FNM_ARCH: string;
	export const PATH: string;
	export const COLOR_GRAY: string;
	export const npm_config_argv: string;
	export const LaunchInstanceID: string;
	export const _: string;
	export const __CFBundleIdentifier: string;
	export const PWD: string;
	export const COLOR_LIGHT_CYAN: string;
	export const npm_package_scripts_preview: string;
	export const P9K_SSH: string;
	export const EDITOR: string;
	export const npm_lifecycle_event: string;
	export const LANG: string;
	export const P9K_TTY: string;
	export const npm_package_name: string;
	export const ITERM_PROFILE: string;
	export const npm_package_scripts_build: string;
	export const npm_config_version_commit_hooks: string;
	export const XPC_FLAGS: string;
	export const _ZPLUG_CONFIG_SUBSHELL: string;
	export const FNM_MULTISHELL_PATH: string;
	export const ZPLUG_BIN: string;
	export const _ZPLUG_OHMYZSH: string;
	export const npm_config_bin_links: string;
	export const _ZPLUG_URL: string;
	export const XPC_SERVICE_NAME: string;
	export const npm_package_devDependencies__sveltejs_adapter_auto: string;
	export const npm_package_version: string;
	export const COLOR_BROWN: string;
	export const npm_package_devDependencies_svelte_check: string;
	export const COLORFGBG: string;
	export const HOME: string;
	export const SHLVL: string;
	export const ZPLUG_CACHE_DIR: string;
	export const npm_package_type: string;
	export const LC_TERMINAL_VERSION: string;
	export const GREP_OPTIONS: string;
	export const npm_config_save_prefix: string;
	export const npm_config_strict_ssl: string;
	export const HOMEBREW_PREFIX: string;
	export const ZPLUG_THREADS: string;
	export const ZPLUG_REPOS: string;
	export const npm_config_version_git_message: string;
	export const FNM_DIR: string;
	export const ITERM_SESSION_ID: string;
	export const COLOR_LIGHT_GRAY: string;
	export const LOGNAME: string;
	export const COLOR_LIGHT_BLUE: string;
	export const YARN_WRAP_OUTPUT: string;
	export const npm_package_scripts_format: string;
	export const VISUAL: string;
	export const npm_lifecycle_script: string;
	export const ZPLUG_FILTER: string;
	export const COLOR_WHITE: string;
	export const ZPLUG_HOME: string;
	export const COLOR_LIGHT_GREEN: string;
	export const npm_config_version_git_sign: string;
	export const npm_config_ignore_scripts: string;
	export const npm_config_user_agent: string;
	export const HOMEBREW_CELLAR: string;
	export const INFOPATH: string;
	export const LC_TERMINAL: string;
	export const npm_config_init_version: string;
	export const npm_config_ignore_optional: string;
	export const SECURITYSESSIONID: string;
	export const ZPLUG_ROOT: string;
	export const npm_package_scripts_check: string;
	export const COLORTERM: string;
	export const npm_node_execpath: string;
	export const npm_config_version_tag_prefix: string;
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
		GREP_COLOR: string;
		AUTOJUMP_ERROR_PATH: string;
		MANPATH: string;
		COLOR_NC: string;
		npm_package_devDependencies_prettier: string;
		TERM_PROGRAM: string;
		NODE: string;
		FNM_LOGLEVEL: string;
		INIT_CWD: string;
		COLOR_CYAN: string;
		COLOR_RED: string;
		AUTOJUMP_SOURCED: string;
		_P9K_TTY: string;
		npm_package_devDependencies_typescript: string;
		npm_package_devDependencies_prettier_plugin_svelte: string;
		npm_config_version_git_tag: string;
		SHELL: string;
		TERM: string;
		COLOR_PURPLE: string;
		npm_package_devDependencies_vite: string;
		ZPLUG_LOADFILE: string;
		CLICOLOR: string;
		FNM_NODE_DIST_MIRROR: string;
		TMPDIR: string;
		HOMEBREW_REPOSITORY: string;
		COLOR_LIGHT_RED: string;
		COLOR_GREEN: string;
		COLOR_LIGHT_PURPLE: string;
		npm_package_scripts_lint: string;
		npm_config_init_license: string;
		TERM_PROGRAM_VERSION: string;
		FPATH: string;
		npm_package_scripts_dev: string;
		COLOR_BLUE: string;
		TERM_SESSION_ID: string;
		npm_package_devDependencies__sveltejs_kit: string;
		npm_package_private: string;
		npm_config_registry: string;
		COLOR_YELLOW: string;
		npm_package_readmeFilename: string;
		USER: string;
		ZPLUG_USE_CACHE: string;
		npm_package_description: string;
		ZPLUG_ERROR_LOG: string;
		npm_package_license: string;
		npm_package_scripts_check_watch: string;
		COMMAND_MODE: string;
		ZPLUG_PROTOCOL: string;
		SSH_AUTH_SOCK: string;
		DOTFILES_DIR: string;
		__CF_USER_TEXT_ENCODING: string;
		npm_execpath: string;
		npm_package_devDependencies_tslib: string;
		COLOR_BLACK: string;
		npm_package_devDependencies_svelte: string;
		_ZPLUG_VERSION: string;
		_ZPLUG_PREZTO: string;
		PERIOD: string;
		LSCOLORS: string;
		FNM_VERSION_FILE_STRATEGY: string;
		_ZPLUG_AWKPATH: string;
		FNM_ARCH: string;
		PATH: string;
		COLOR_GRAY: string;
		npm_config_argv: string;
		LaunchInstanceID: string;
		_: string;
		__CFBundleIdentifier: string;
		PWD: string;
		COLOR_LIGHT_CYAN: string;
		npm_package_scripts_preview: string;
		P9K_SSH: string;
		EDITOR: string;
		npm_lifecycle_event: string;
		LANG: string;
		P9K_TTY: string;
		npm_package_name: string;
		ITERM_PROFILE: string;
		npm_package_scripts_build: string;
		npm_config_version_commit_hooks: string;
		XPC_FLAGS: string;
		_ZPLUG_CONFIG_SUBSHELL: string;
		FNM_MULTISHELL_PATH: string;
		ZPLUG_BIN: string;
		_ZPLUG_OHMYZSH: string;
		npm_config_bin_links: string;
		_ZPLUG_URL: string;
		XPC_SERVICE_NAME: string;
		npm_package_devDependencies__sveltejs_adapter_auto: string;
		npm_package_version: string;
		COLOR_BROWN: string;
		npm_package_devDependencies_svelte_check: string;
		COLORFGBG: string;
		HOME: string;
		SHLVL: string;
		ZPLUG_CACHE_DIR: string;
		npm_package_type: string;
		LC_TERMINAL_VERSION: string;
		GREP_OPTIONS: string;
		npm_config_save_prefix: string;
		npm_config_strict_ssl: string;
		HOMEBREW_PREFIX: string;
		ZPLUG_THREADS: string;
		ZPLUG_REPOS: string;
		npm_config_version_git_message: string;
		FNM_DIR: string;
		ITERM_SESSION_ID: string;
		COLOR_LIGHT_GRAY: string;
		LOGNAME: string;
		COLOR_LIGHT_BLUE: string;
		YARN_WRAP_OUTPUT: string;
		npm_package_scripts_format: string;
		VISUAL: string;
		npm_lifecycle_script: string;
		ZPLUG_FILTER: string;
		COLOR_WHITE: string;
		ZPLUG_HOME: string;
		COLOR_LIGHT_GREEN: string;
		npm_config_version_git_sign: string;
		npm_config_ignore_scripts: string;
		npm_config_user_agent: string;
		HOMEBREW_CELLAR: string;
		INFOPATH: string;
		LC_TERMINAL: string;
		npm_config_init_version: string;
		npm_config_ignore_optional: string;
		SECURITYSESSIONID: string;
		ZPLUG_ROOT: string;
		npm_package_scripts_check: string;
		COLORTERM: string;
		npm_node_execpath: string;
		npm_config_version_tag_prefix: string;
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
