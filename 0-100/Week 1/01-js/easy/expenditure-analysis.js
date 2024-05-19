/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  const finalcategory={};
  transactions.forEach(transactions => {
    const category=transactions.category;
    const price=transactions.price;

    if(finalcategory.hasOwnProperty(category)){
      finalcategory[category]=finalcategory[category]+price;
    }
    else{
      finalcategory[category]=price;
    }
  });
  const result=[];
  for (const key in finalcategory) {
    result.push({category:key,totalSpent:finalcategory[key]});}
  return result;
}

module.exports = calculateTotalSpentByCategory;
