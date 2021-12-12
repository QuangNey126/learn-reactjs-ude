## Folder structure

```
src
|_ components (shared components between feature)
|  |_ Loading
|      |_ index.jsx
|      |_ styles.scss
|
|_ feature
|   |_ Todo
|      |_ components (components of feature Todo)
|      |_ pages (pages of feature Todo)
|      |_ index.jsx (entry point of feature Todo)
|
|_ App.js
```

FiltersViewer

```js
const filters = {
  isPromotion: true,
  salePrice_lte: 100,
  salePrice_gte: 100,
};
```

FILTER_LIST

- id: number
- getLabel:(filters) => string
- isActive: (filters) => true/false
- isVisible: (filters) => true/false
- isRemovable: boolean
- onRemove: func
- onToggle: func

```

```
