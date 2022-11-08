function solve(arr) {
    let firstKEl = Number(arr.shift());
    console.log(arr.slice(0, firstKEl).join(" "));
    console.log(arr.slice(arr.length - firstKEl).join(" "));
}