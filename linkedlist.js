'use strict';
// insertFirst, remove, insertLast, find

class _Node {

  constructor(value,next) {
    this.value=value;
    this.next=next;
  }
}


class LinkedList {
  constructor() {
    this.head  = null;
  }

  insertFirst(item) {
    this.head = new _Node(item, this.head);
  }

  insertLast(item) {
    if (this.head === null) {
      return this.insertFirst(item);
    }

    let currentNode = this.head;

    while (currentNode.next !== null) {
      currentNode = currentNode.next;
    }
    currentNode.next = new _Node(item,null);
  }

  remove(node) {
    if (!this.head) {
      return false;
    }

    if (this.head.value === node) {
      this.head = this.head.next;    
      return true;
    }

    let currentNode = this.head;
    let previousNode = null;


    while ((currentNode !== null) && (currentNode.value !== node)) {
      previousNode = currentNode;
      currentNode=currentNode.next;
    }

    if (currentNode === null) {
      console.log('Item not found');
      return false;
    }

    previousNode.next = currentNode.next;
    return true;
  }


  find(item) {
    if (this.head === null) {
      return console.log('Array contains no items');
    }

    if (this.head.value === item) {
      console.log('Found your item: ', item);
      return;
    }

    let currentNode = this.head;

    while (currentNode.value !== item && currentNode !== null) {
      currentNode = currentNode.next;
    }

    if (currentNode.value === item) {
      console.log('Found your item!: ', item);
    } else {
      console.log('Your item could not be found');
    }

  }

  // display(){
  //   console.log('===start of list===');
  //   let tempNode = this.head;
  //   if(tempNode === null){
  //     console.log('its an empty list!');
  //     return;
  //   }
  //   if(tempNode.next === null){
  //     console.log(tempNode.value);
  //     return;
  //   }
  //   while(tempNode !== null){
  //     console.log(tempNode.value);
  //     tempNode = tempNode.next;

  //   }
  //   console.log('===end of list===');
  // }

  insertBefore(value,valueOfNext) {
    
    if (!this.head) {
      return console.log('There is no key to insert before');
    }
    let currentNode = this.head;
    let previousNode = this.head;

    while (currentNode.value !== valueOfNext && currentNode !== null) {
      previousNode = currentNode;
      currentNode = currentNode.next;
    }

    previousNode.next = new _Node(value, currentNode);
  
  }


  insertAfter(value=null, valueOfPrev) {
    
    if (!value) {
      return console.log('You didn\'t provide a value to insert');
    }

    if (!this.head) {
      return console.log('No value to insert After');
    }

    if (this.head.next === null) {
      return this.insertLast(value);
    }

    let currentNode = this.head;
    // let previousNode = null;

    while(currentNode.value !== valueOfPrev && currentNode.next !== null) {
      // previousNode = currentNode;
      currentNode = currentNode.next;
    }
    
    const newNode = new _Node(value,currentNode.next);
    currentNode.next = newNode;
  }

  insertAt(index,value=null) {
    if (!this.head) {
      return console.log('This list has no items');
    }

    if (!value) {
      return console.log('You did not provide a value!');
    }

    let counter = 0;
    let currentNode = this.head;
    let previousNode = null;
    while (counter !== index && currentNode.next !== null) {
      previousNode = currentNode;
      currentNode = currentNode.next;
      counter++;
    }

    if (counter !== index) {
      return console.log('You cannot insert an item at a location further ahead in the array than the array extends');
    }

    previousNode.next = new _Node(value, currentNode);
  }
}



// EXTRA-CLASS FUNCTIONS (non list-specific)
const displayList = (linkedlist) => {
  if (!linkedlist.head) {
    console.log('This list has no items');
    return;
  }
  let iteratedNode = linkedlist.head;

  console.log('<==LIST BEGINNT==>');
  while(iteratedNode !== null) {
    console.log(iteratedNode.value);
    iteratedNode = iteratedNode.next;

  }
  console.log('<==LIST STOPPT==>');
};


const showListSize = linkedList => {

  if (!linkedList.head) {
    console.log(0);
    return;
  }
  let iteratedNode = linkedList.head;
  let counter = 0;

  while (iteratedNode !== null) {
    iteratedNode = iteratedNode.next;
    counter++;
  }

  console.log(counter);
};


const isEmpty = list => {
  if (!list.head) {
    console.log(true);
    return true;
  }
  console.log(false);
  return false;
};

const findPrevious = (list, value=null) => {
  if (!list.head) {
    return console.log('This list has no items');
  }

  if (!value) {
    return console.log('You did not provide a value to search for');
  }

  let currentNode = list.head;
  let previousNode = null;

  while (currentNode !== null && currentNode.value !== value)  {
    previousNode = currentNode;
    currentNode = currentNode.next;
  }

  if (previousNode.value === null) {
    return console.log('There is no array member before the item you specified');
  }

  console.log(previousNode.value);
   

};


const findLast = list => {
  if (!list.head)
    return console.log('This list has no items');


  let currentNode = list.head;

  while (currentNode.next !== null) {
    currentNode = currentNode.next;
  }

  console.log(currentNode.value);
};



function WhatDoesThisProgramDo(lst){
  let current = lst.head;
  while(current !== null){
    let newNode = current;
    while (newNode.next !== null) {
      if (newNode.next.value === current.value) {
        newNode.next = newNode.next.next;
      }
      else{
        newNode = newNode.next;
      }
    }
    current = current.next;
  }
}

//Reverse a List

// const reverseList = list => {

//   let newList = new LinkedList();

//   let currentNode = list.head;
//   while (currentNode !== null) {
//     newList.insertFirst(currentNode.value);
//     currentNode = currentNode.next;
//   }

//   return newList;
// };

const reverseList = list => {
  if (list.head.next === null) {
    return list.head;
  }

  return new _Node(list.value, list.next);


};





// TESTING=======================================>



function main() {
  const SLL = new LinkedList();
  SLL.insertLast('Apollo');
  SLL.insertLast('Starbuck');
  SLL.insertLast('Boomer');
  SLL.insertLast('Helo');
  SLL.insertLast('Husker');
  SLL.insertLast('Starbuck');
  SLL.insertLast('Tauhida');
  SLL.insertAfter('hello!!!','Apollo');
  SLL.insertAt(3,'Parsnips');
  SLL.remove('Tauhida');

  console.log('BREAKER-------------');
  displayList(SLL);
  // showListSize(SLL);
  // // isEmpty(SLL);
  // // findPrevious(SLL, 'Boomer');
  // findLast(SLL);
  // console.log('BREAKER-------------');
  // WhatDoesThisProgramDo(SLL);
  // displayList(SLL);
  console.log(reverseList(SLL));
}

main();