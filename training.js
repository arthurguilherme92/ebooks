const arr = [
    {
        n: "Arthur",
        old: 31
    },
    {
        n: "Thavea",
        old: 27
    },
    {
        n: "Alex Jr",
        old: 25
    }
];
const callbackMap = element => element.n;
const justNames = arr.map(callbackMap);

const callbackFilter = element => element.old < 30;
const lessThirty = arr.filter(callbackFilter);

const justOld = arr.map(element => element.old);
const callbackReduce = (firstIndex, nextIndex) => firstIndex + nextIndex;
const sumEverythingOld = justOld.reduce(callbackReduce);

console.log(justNames);
console.log(lessThirty)
console.log(sumEverythingOld);