// Sample expenses array
const expenses = [
  { category: "Food", amount: 50 },
  { category: "Transportation", amount: 30 },
  { category: "Entertainment", amount: 20 }
];

// TODO: Implement the calculateTotalExpenses function
function calculateTotalExpenses(expenses) {
  return expenses.reduce((total, expense) => total + expense.amount, 0)
  // TODO: Use the reduce function to calculate total expenses
}

// Test the calculateTotalExpenses function
const totalExpenses = calculateTotalExpenses(expenses);
console.log(totalExpenses);

// Output should be:
// 100
