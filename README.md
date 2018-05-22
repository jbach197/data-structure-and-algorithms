# Shift an Array

## Challenge
Write a function called insertShiftArray which takes an array as an argument. Without utilizing any of the built-in methods available to your language, return an array with a new value inserted into the middle-index.

Examples:

[2,4,6,8], 5  -->	[2,4,5,6,8]
[4,8,15,23,42], 16  --> 	[4,8,15,16,23,42]


## Solution
![whiteboard image](/assets/array_shift.jpg)

## Credits
Collobrated with the class.



# Largest Product

## Challenge
Write a function called LargestProduct which takes in a 2D array. Without utilizing any of the built-in methods available to your language, return the largest product of 2 adjacent values within the 2D array.

Example:
[ 
    [ 1, 2, 1 ], 
    [ 2, 4, 2 ], 
    [ 3, 6, 8 ], 
    [ 7, 8, 1 ] 
  ]
Output: 64

## Solution
![whiteboard image](/assets/array_adjacent_product.jpg)

## Credits
Collobrated with the class.

# Linked Link Inserts

## Challenge
Write the following methods for the Linked List class:

.append(value) which adds a new node with the given value to the end of the list
.insertBefore(value, newVal) which add a new node with the given newValue immediately before the first value node
.insertAfter(value, newVal) which add a new node with the given newValue immediately after the first value node
You have access to the Node class and all the properties on the Linked List class.

Examples
.append(value)
Input	                           Args	  Output
head -> [1] -> [3] -> [2] -> X	 5	    head -> [1] -> [3] -> [2] -> [5] -> X

.insertBefore(value, newVal)
Input	                            Args	  Output
head -> [1] -> [3] -> [2] -> X  	3, 5	  head -> [1] -> [5] -> [3] -> [2] -> X

.insertAfter(value, newVal)
Input	                            Args	  Output
head -> [1] -> [3] -> [2] -> X	  3, 5	  head -> [1] -> [3] -> [5] -> [2] -> X



## Solution
![whiteboard image](/assets/ll_insertions.jpg)

## Credits
None

# Linked List kth From End

## Challenge
Write a method for the Linked List class which takes a number, k, as a parameter. Return the node that is k from the end of the linked list. You have access to the Node class and all the properties on the Linked List class as well as the methods created in previous challenges. ​

Examples:
Input                             Arg       OutPut
head -> A -> B -> C -> D -> X     2         B

## Solution
![whiteboard image](/assets/ll_kth_from_end.jpg)

## Credits
Collobrated with Ovi and Timea.