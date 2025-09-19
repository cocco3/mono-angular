# Browser Support

The last 2 major versions of Chrome, Edge, Firefox, and Safari (desktop and mobile) are officially supported.

## postcss

To stay on the cutting edge, [postcss](https://github.com/postcss/postcss) is configured to support modern CSS features:

- [postcss-nesting](https://github.com/csstools/postcss-plugins/tree/main/plugins/postcss-nesting#readme) - use nesting style rules
- [@csstools/postcss-media-minmax](https://github.com/csstools/postcss-plugins/tree/main/plugins/postcss-media-minmax#readme) - use range notation in media queries

Configuration can be found here: [.postcssrc.json](/.postcssrc.json)

## browserslist

Supported browsers identified in [.browserslistrc](/.browserslistrc)

[caniuse-lite](https://github.com/browserslist/caniuse-lite) has also been added as a dependency so renovate will automically update this.

Manually update the browsers database:

```sh
> npx update-browserslist-db@latest
```

See which browsers will be targeted based on the [.browserslistrc](/.browserslistrc) config:

```sh
> npx browserslist
```

## Tools

Some helpful browserslist tools can be found here:
https://github.com/browserslist/browserslist?tab=readme-ov-file#tools
