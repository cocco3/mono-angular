# Browser Support

The last 2 major versions (both desktop and mobile) of Chrome, Edge, Firefox, and Safari are officially supported.

## PostCSS

Modern CSS features are enabled via [PostCSS][postcss], configured in [.postcssrc.json](/.postcssrc.json) and automatically recognized by Angular:

- [postcss-nesting][postcss-nesting] - support [nested style rules][caniuse-css-nesting]
- [@csstools/postcss-media-minmax][postcss-media-minmax] - support media query [range notation][caniuse-css-media-range]

## Browserslist Configuration

Define supported browsers in [.browserslistrc](/.browserslistrc), following [Browserslist query syntax][browserslist-docs].

To preview the targeted browsers:

```sh
> npx browserslist
```

Additinal tools:
https://github.com/browserslist/browserslist?tab=readme-ov-file#tools

## caniuse-lite

[caniuse-lite][caniuse-lite] provides the browser support data used by Browserslist and PostCSS plugins. It's added as a dev dependency and auto-updated via Renovate.

To manually update:

```sh
> npx update-browserslist-db@latest
```

[browserslist-docs]: https://github.com/browserslist/browserslist?tab=readme-ov-file#queries
[caniuse-css-media-range]: https://caniuse.com/css-media-range-syntax
[caniuse-css-nesting]: https://caniuse.com/css-nesting
[caniuse-lite]: https://github.com/browserslist/caniuse-lite
[postcss]: https://github.com/postcss/postcss
[postcss-media-minmax]: https://github.com/csstools/postcss-plugins/tree/main/plugins/postcss-media-minmax#readme
[postcss-nesting]: https://github.com/csstools/postcss-plugins/tree/main/plugins/postcss-nesting#readme
