# Step 3

The **Shadow DOM** feature allows you to insulate part of the DOM from the rest of your HTML page.

* Global styles do not leak inside the Shadow Root
* Styles applied within a Shadow Root do not leak outside of it.

# APIs

```
element.attachShadow({ mode: 'open' })
```

* `mode` defaults to `closed`, which will make if impossible to inspect the content of the Shadow DOM. Native HTML elements like e.g. `select`, `video`, have closed shadow roots. It is recommended to avoid creating closed shadow roots.