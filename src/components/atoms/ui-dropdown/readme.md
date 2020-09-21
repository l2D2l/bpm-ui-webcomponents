# ui-dropdown



<!-- Auto Generated Below -->


## Properties

| Property      | Attribute     | Description | Type                                  | Default                                                                                                                                                                                                                                                                                             |
| ------------- | ------------- | ----------- | ------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `items`       | --            |             | `{ label: string; value: string; }[]` | `[     { label: 'Ahorro Efectivo N° 001236195159 - Disponible S/ 10.00', value: '001236195159' },     { label: 'Ahorro Efectivo N° 001236195151 - Disponible S/ 20.00', value: '001236195151' },     { label: 'Ahorro Efectivo N° 001236195152 - Disponible S/ 5.00', value: '001236195152' },   ]` |
| `placeholder` | `placeholder` |             | `string`                              | `'Lista de cuentas de ahorro'`                                                                                                                                                                                                                                                                      |
| `value`       | `value`       |             | `string`                              | `'001236195159'`                                                                                                                                                                                                                                                                                    |


## Events

| Event         | Description | Type               |
| ------------- | ----------- | ------------------ |
| `valueChange` |             | `CustomEvent<any>` |


## Dependencies

### Depends on

- [ui-text](../ui-text)
- [ui-icon](../ui-icon)

### Graph
```mermaid
graph TD;
  ui-dropdown --> ui-text
  ui-dropdown --> ui-icon
  style ui-dropdown fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
