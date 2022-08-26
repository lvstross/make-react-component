"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = `
import { createSelector } from 'reselect'

const selectShopItems = state => state.shop.items
const selectTaxPercent = state => state.shop.taxPercent

const selectSubtotal = createSelector(selectShopItems, items =>
  items.reduce((subtotal, item) => subtotal + item.value, 0)
)

const selectTax = createSelector(
  selectSubtotal,
  selectTaxPercent,
  (subtotal, taxPercent) => subtotal * (taxPercent / 100)
)

const selectTotal = createSelector(
  selectSubtotal,
  selectTax,
  (subtotal, tax) => ({ total: subtotal + tax })
)

const exampleState = {
  shop: {
    taxPercent: 8,
    items: [
      { name: 'apple', value: 1.2 },
      { name: 'orange', value: 0.95 }
    ]
  }
}
`;
