import axios from "axios";
import { useState } from "react";
import { BACKEND_URL } from "../config";
import priorityQueue from "priority-queue";

class PriorityQueue {
    constructor() {
        this.queue = [];
    }

    push(item) {
        this.queue.push(item);
        this.queue.sort((a, b) => b.amount - a.amount);
    }

    pop() {
        return this.queue.shift();
    }

    top() {
        return this.queue[0];
    }

    empty() {
        return this.queue.length === 0;
    }
  }

export function mainAlgo(transactionsList){

    console.log(transactionsList);
    
const transactions = [];
const finalString = [];
// const [visiblefinalString , setVisibleFinalString] = useState(1);

transactionsList.map((transaction)=>{
    let userid = transaction.userId;
    let amount = transaction.amountPaid;
    let payee = transaction.payee;

    transactions.push({amount , userid ,payee});
});

console.log(transactions);

//Algo--->
const take = new PriorityQueue();
const give = new PriorityQueue();
let s = 0;
let n = transactions.length;

//sum-->
for(let t of transactions){
   s += t.amount;
}

console.log(s);
const avg = s/n;

 //main-->
for(let t of transactions){
    t.amount = t.amount - avg;
    if(t.amount >= 0){
        take.push(t);
        console.log(t);
    }
    else{
        const k =- t.amount;
        t.amount = k;
        give.push(t);
    }
}

console.log(take);
console.log(give);

while (!take.empty() && !give.empty()) {
    let p = take.top().amount;
    let q = give.top().amount;
    let a = take.top().userid;
    let b = give.top().userid;
    let pa = take.top().payee;
    let pb = give.top().payee;

    console.log(a + " " + pa + " " + p);
    console.log(b + " " + pb + " " + q);

    const minT = Math.min(p, q);
    p -= minT;
    q -= minT;

    if (p === 0) {
        take.pop();
    } else {
        take.pop();
        take.push({p, a , pa});
    }

    if (q === 0) {
        give.pop();
    } else {
        give.pop();
        give.push({q, b , pb});
    }

   

    console.log(pb + " owes " + pa + " " + minT);

    finalString.push(`${pb}  owes  ${pa}  : Rs.  ${minT}`);
    console.log(finalString);
  }


return finalString;
    
}