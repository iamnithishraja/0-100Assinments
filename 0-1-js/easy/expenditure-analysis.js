/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(array) {
  const catPrice = {};
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    catPrice[element["category"]] == null ? catPrice[element["category"]] = element["price"] : catPrice[element["category"]] += element["price"];
  }
  const ans = [];
  for (const key in catPrice) {
    const element = catPrice[key];
    ans.push({ category: key, totalSpent: element });
  }
  return ans;
}
module.exports = calculateTotalSpentByCategory;
