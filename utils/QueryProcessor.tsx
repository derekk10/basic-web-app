export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }
  else if (query.toLowerCase().includes("andrew id")) {
    return (
    "Your AndrewID is Derekk."
    );
  }
  else if (query.toLowerCase().includes("name")) {
    return (
      "Derek"
    );
  }
  else if (query.toLowerCase().includes("plus")) {
    const arr = query.split(" ");
    const num1 = parseInt(arr[2]);
    const num2 = parseInt(arr[4].substring(0, arr[4].length-1));
    var sum = num1 + num2;
    return (
      sum.toString()
    );
  }
  else if (query.toLowerCase().includes("which of the following numbers is the largest:")) {
    const arr = query.split(" ");
    const nums = arr.slice(-3);
    let ans = -1
    nums.forEach(num => {
      ans = Math.max(ans, parseInt(num.substring(0, num.length-1)))
    });
    return (
      ans.toString()
    );
  }
  return "";
}
