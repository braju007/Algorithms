function formatList(items) {
    const len = items.length;
  
    if (len === 0) return "";
    if (len === 1) return items[0];
    if (len === 2) return `${items[0]} and ${items[1]}`;
    return `${items.slice(0, len - 1).join(", ")} and ${items[len - 1]}`;
  }
  
  //For the purpose of user debugging.
  console.log(formatList([""])); // ''
  console.log(formatList(["apple"])); // apple
  console.log(formatList(["apple", "banana"])); // apple and banana
  console.log(formatList(["apple", "banana", "carrot"])); // apple, banana and carrot