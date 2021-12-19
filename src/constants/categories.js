const incomeColors = ['#FFBF00', '#FDDA0D', '#FFFF8F', '#E4D00A', '#E49B0F', '#FCF55F', '#FAFA33', '#FBEC5D'];
const expenseColors = ['#FF69B4', '#FFB6C1', '#F8C8DC', '#FAA0A0', '#F89880', '#FA8072', '#E37383', '#ffae8a', '#A95C68'];

export const incomeCategories = [
  { type: 'Salary', amount: 0, color: incomeColors[0] },
  { type: 'Stocks', amount: 0, color: incomeColors[1] },
  { type: 'Extra income', amount: 0, color: incomeColors[2] },
  { type: 'Business', amount: 0, color: incomeColors[3] },
  { type: 'Rental Income', amount: 0, color: incomeColors[4] },
  { type: 'Shagun/Gifts', amount: 0, color: incomeColors[5] },
  { type: 'Online Income', amount: 0, color: incomeColors[6] },
  { type: 'Savings', amount: 0, color: incomeColors[7] },
];

export const expenseCategories = [
  { type: 'Bills', amount: 0, color: expenseColors[0] },
  { type: 'Car Maintainance', amount: 0, color: expenseColors[1] },
  { type: 'Fees', amount: 0, color: expenseColors[2] },
  { type: 'Groceries', amount: 0, color: expenseColors[3] },
  { type: 'EMI', amount: 0, color: expenseColors[4] },
  { type: 'Medical Expense', amount: 0, color: expenseColors[5] },
  { type: 'Shopping', amount: 0, color: expenseColors[6] },
  { type: 'Travel', amount: 0, color: expenseColors[7] },
  { type: 'Miscellaneous', amount: 0, color: expenseColors[8] }
];

export const resetCategories = () => {
  incomeCategories.forEach((c) => c.amount = 0);
  expenseCategories.forEach((c) => c.amount = 0);
};
