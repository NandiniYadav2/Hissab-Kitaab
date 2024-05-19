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
        const k = (- t.amount);
        t.amount = k;
        give.push(t);
    }
}

console.log(take);
console.log(give);

while (!take.empty() && !give.empty()) {
    let p = take.top();
    let q = give.top();
   

    console.log(p.userid + " " + p.payee + " " + p.amount);
    console.log(q.userid + " " + q.payee + " " + q.amount);

    const minT = Math.min(p.amount, q.amount);
    p.amount -= minT;
    q.amount -= minT;

    if (p.amount > 0) {
        take.pop();
        take.push(p);
    } else {
        take.pop();    
    }

    if (q.amount > 0) {
        give.pop();
        give.push(q);
    } else {
        give.pop();
    }

   

    console.log(q.payee + " owes " + p.payee + " " + minT);

    finalString.push(`${q.payee}  owes  ${p.payee}  : Rs.  ${minT}`);
    console.log(finalString);
  }


return finalString;
    
}
