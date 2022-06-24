# Nuxt 3 + TypeScript + Vite starter

Custom Nuxt 3 starter with TypeScript and Vite. 
Nuxt 3 is actually at beta stage and this repository will be updated regularly till it is stable released.

## Installation

Make sure to install the dependencies:

```bash
npm/yarn/pnpm install (--shamefully-hoist with pnpm)
```

Nuxt3 will run on port 3000 by default by running the following command:

```bash
npm/yarn/pnpm run dev
```

## Packages and plugins

- [pinia](https://pinia.vuejs.org/) for store management
- [VueUse](https://vueuse.org/) set of composable composition API
- [UnoCss/preset-icons](https://github.com/unocss/unocss/tree/main/packages/preset-icons) to use icons using class names
- Middleware authentication plugin using key based authentication with [jose](https://github.com/panva/jose/)
- [Nitro](https://github.com/unjs/nitro) plugin for server api (mongoosse database is used)

## Dev tools
- TypeScript
- Vite - Fire up Vite server automatically
- pnpm
- Netlify settings file auto deployement

## Authentication

To use the authentication plugin, you have to generate keys.
    
```bash
openssl ecparam -genkey -name prime256v1 -noout -out key-pair.pem

openssl pkcs8 -topk8 -inform PEM -outform PEM -nocrypt -in key-pair.pem -out private.key

openssl ec -in key-pair.pem -pubout -out public.key
```

## Icons usage

`npm/yarn/pnpm i -D @iconify/[collection-icons]` - You can see this list of icons at [iconify](https://icon-sets.iconify.design/).

