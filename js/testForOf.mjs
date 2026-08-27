import{createInterface} from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
async function main(){
const sc = new createInterface({input, output});



/*const iterable = [10, 20, 30];

for (const value of iterable) {
  console.log(value);
} */

const iterable = new Map([
  ["a", 1],
  ["b", 2],
  ["c", 3],
]);

for (const entry of iterable) {
  console.log(entry);
}

for (const [key, value] of iterable) {
  console.log(value);
                                     }
sc.close();
                    }
await main()