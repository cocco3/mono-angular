# CSS Styling Guide

A set of guidelines for styling components and writing scalable, maintainable CSS.

## Encapsulate a component's styles

Avoid relying on global CSS. Try to always author all of a component's styles inside its own CSS.

This allows for greater portability, cleaner maintenance, and easier debugging.

## Use border-box

Adjust [box-sizing](https://css-tricks.com/box-sizing/) for more intuitive layouts and avoid having to calculate sizes when using padding/width/etc.

```css
/* ❌ Avoid this */

:host {
  padding-inline: 24px;
  width: calc(100% - 48px);
}
```

```css
/* ✅ Do this instead */

:host {
  box-sizing: border-box;
  padding-inline: 24px;
  width: 100%;
}
```

## Organizing selectors

Avoid nesting classes that mimic the DOM structure. This creates unnecessary specificity and becomes harder to maintain.

Angular already encapsulates the styles for a component, so nesting is often unnecessary.

Going further, and completely optional, you could also opt for a methodology like [BEM](https://css-tricks.com/taming-the-cascade-with-bem-and-modern-css-selectors/) to help organize your CSS.

```css
/* ❌ Avoid this */

.header {
  padding-inline: 24px;
  width: 100%;

  .title {
    color: black;

    &:hover {
      text-decoration: underline;
    }

    &.active {
      font-weight: bold;
    }

    .icon: {
      width: 20px;
    }
  }
}
```

```css
/* ✅ Do this instead */

.header {
  padding-inline: 24px;
  width: 100%;
}

.header_title {
  color: black;

  &:hover {
    text-decoration: underline;
  }

  &.active {
    font-weight: bold;
  }
}

.header_icon {
  width: 20px;
}
```

## Design system

Always opt for [theme](https://quantified-communications.github.io/sim-storybook/?path=/docs/foundations-theme--docs) and [typography](https://quantified-communications.github.io/sim-storybook/?path=/docs/foundations-typography--docs) variables to enforce design system standards.

## Local variables

Use CSS custom properties ([mdn](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties), [css-tricks](https://css-tricks.com/a-complete-guide-to-custom-properties/)) for managing component variants.

- (see [qai-label](https://github.com/Quantified-Communications/sim-storybook/blob/dev/projects/qai-ui/src/base/qai-label/qai-label.css) as an example)

```css
/* ❌ Avoid this */

.container {
  color: black;
}

.icon {
  color: gray;
}

.container.error {
  color: red;
}

.container.error .icon {
  color: pink;
}
```

```css
/* ✅ Do this instead */

.container {
  --text-color: black;
  --icon-color: gray;

  color: var(--text-color);
}

.icon {
  color: var(--icon-color);
}

.container.error {
  --text-color: red;
  --icon-color: pink;
}
```

## Logical properties

Use logical properties ([mdn](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_logical_properties_and_values), [css-tricks](https://css-tricks.com/css-logical-properties-and-values/)) instead of physical properties to support different writing systems and orientations in different languages.

```css
/* ❌ Avoid this */

.container {
  border-top: 1px solid black;
  margin: 8px 16px;
  padding-left: 24px;
  padding-right: 24px;
}
```

```css
/* ✅ Do this instead */

.container {
  border-block-start: 1px solid black;
  margin-block: 8px;
  margin-inline: 16px;
  padding-inline: 24px;
}
```

## Opacity on color variables

Apply opacity to any color variable using [CSS relative colors](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_colors/Relative_colors)

```css
/* ✅ Do this */

.container: {
  background-color: rgb(from var(--bg-primary) r g b / 10%);
}
```

## Avoid explicit heights/widths

A lot of times we should avoid explicit heights and widths. To better support responsive layouts and different languages, components need to be able to shrink and grow.

Instead you can opt for min-height or min-width.

## Appearance vs. layout

Avoid mixing appearance and layout styles on a component ([css-tricks](https://css-tricks.com/the-benefits-of-structuring-css-around-appearance-and-layout/)). Instead, leave layout related properties (margin, position, width, etc) for the container to control.

This allows components to be more portable and easily used anywhere.

```css
/* ❌ Avoid this */

.button {
  background: blue;
  color: white;
  padding-inline: 4px;
  margin-block-end: 20px;
  width: 200px;
}
```

```css
/* ✅ Do this instead */

.button {
  background: blue;
  color: white;
  padding-inline: 4px;
}

/***** Then in the host app or some container component: *****/
.container {
  margin-block-end: 20px;

  .button {
    width: 200px;
  }
}
```

## Container vs. media queries

At the component level, consider using [container queries](https://css-tricks.com/css-container-queries/) instead of media queries.

This allows more predictable responsive behavior based on a container size instead of the screen size.

For example, suppose you want to hide a label when there is not enough space. Using a container query means you can set it up so the label will get hidden if placed inside a narrow sidebar.

## Long text and ellipsis

Use caution if truncating text with an ellipsis. In some cases, this can cause [issues for usability](https://css-tricks.com/text-overflow-ellipsis-considered-harmful/) and accessibility.

When an ellipsis is used, the text is gone from the DOM, meaning even a screen reader cannot announce what the whole string is.

It can be acceptable to truncate text where there is an option to view all of it, or there is a keyboard accessible way of showing a tooltip.

When text is some sort of identifiable information, like a title or a link, it is a best practice to always display the full string without any ellipsis. Write defensive CSS to allow containers to grow and the text to wrap.
