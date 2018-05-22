class LinkedList {
    constructor() {
      this.head = null;
      this.length = 0;
    }
   
    add(value) {
      var node = new Node(value);
      if (this.head == null) {
        this.head = node;
        this.length++;
      } else {
        var current = this.head;
        while (current.next) {
          current = current.next;
        }
        current.next = node;
        this.length++;
      }
    }
   
    reverse(k) {
      var index = 0;
      var current = this.head;
      var previous = null;
   
      while (current) {
        if (k === index) {
            console.log(`found it: ${current.value}`);
            return current;
        }
        var next = current.next;
        current.next = previous;
        previous = current;
        current = next;
        index++;
      }
    }
   }
   
   class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
   }
   
   var ll = new LinkedList();
   