# Scroll-Toggle

Simple javascript plugin to toggle elements on scroll. The styling to hide and show elements must be done by yourself.

![demo](https://raw.githubusercontent.com/heimrichhannot/scroll-toggle/master/docs/assets/scroll-toggle-demo.gif "Scroll Toggle Demo")

## Usage

Require the plugin itself.

`require('ScrollToggle');`

By default the plugin listens on elements with the `.scroll-toggle` css class.

```
<div class="nav-quick scroll-toggle" data-offset="#header" data-body-class="nav-quick-hidden">
</div>
```

In order to hide elements, you can use the following scss snippet and customize for your needs:

```
.scroll-toggle {
  transition: transform 250ms linear;
  transform: translateY(0);
  &.scroll-hide {
    transform: translateY(100%);
  }
}
```

## Additional Attributes

| Attributes  | Description  |
|---|---|
| data-offset | Set a minimum offset to start hide element (body scrollTop), can also be an valid CSS-Selector like `#header` |
| data-body-class | Define a custom CSS class that should be toggled on body element on hide/show element. |
