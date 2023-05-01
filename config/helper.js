module.exports = {
  isSelected: (a, b) => {
    if (a === b) return "selected";
  },
  dateDisplay: (date) => {
    const yyyy = date.toISOString().slice(0, 4);
    const mm = date.toISOString().slice(5, 7);
    const dd = date.toISOString().slice(8, 10);
    return `${yyyy}/${mm}/${dd}`;
  },
  isoDateFormat: (date) => {
    return date.toISOString().slice(0, 10);
  },
  totalAmount: (items) => {
    let totalAmount = 0;
    items.forEach((item) => {
      totalAmount += Number(item.amount);
    });
    return totalAmount;
  },
};
// module.exports.isSelected = (a, b) => {
//   if (a === b) return "selected";
// };
// module.exports.dateDisplay = (date) => {
//   const yyyy = date.toISOString().slice(0, 4);
//   const mm = date.toISOString().slice(5, 7);
//   const dd = date.toISOString().slice(8, 10);
//   return `${yyyy}/${mm}/${dd}`;
// };
// module.exports.isoDateFormat = (date) => {
//   return date.toISOString().slice(0, 10);
// };
// module.exports.totalAmount = (items) => {
//   totalAmount: (items) => {
//     let totalAmount = 0;
//     items.forEach((item) => {
//       totalAmount += Number(item.amount);
//     });
//     return totalAmount;
//   };
// };
