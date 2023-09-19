export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }
  if (query.toLowerCase().includes("andrew id")) {
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
    const sum = num1 + num2;
    return (
      sum.toString()
    );
  }
  return "";
}
