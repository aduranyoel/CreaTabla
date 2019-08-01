```html
<div id="tableContainner"></div>
<script src="CreaTabla.js"></script>
```
```js
    CreaTabla("tableContainner", {
        col: columns,// Array con las columnas
        rows: rows,// Array de Arrays para las filas
        class: ["table"],
        css: [
            {target: [0,1,2,3,4,5], prop: "padding-left", val: "8px"}
        ],
        fixed: {
            enabled: true,
            height: "50vh"
        },
        search: true
    })
```
