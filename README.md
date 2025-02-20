# Quicksort

Implement an iterative (no recursive calls) version of quicksort. Use the
template I've provided in `code.js`. Test your new function; I've provided some
basic testing code that uses [jsverify](https://jsverify.github.io/) in
`code.test.js`.

Hint: To make quicksort iterative, think about the part of the array each
recursive call considers.

## Runtime Analysis

Analyse the time complexity of your implementation and give a $\Theta$ bound for
its worst-case runtime. Add your answer, including your reasoning, to this
markdown file.

The time complexity for my implementation of the iterative quicksort depends mostly on the sort function, which picks the first position of the array as the pivot and then moves it to the correct spot. In the worst case, it has to move every element through the entire array, so it essentially runs in $\Theta(n^2)$. This is the most dominant term of the entire algorithm, as the the rest of the code loops through the remaining portions of the array, which would be linear time complexity. Therefore, the worst case time complexity would be $\Theta(n^2)$

### Sources and Plagiarism 

We discussed quicksort briefly in class 

https://www.geeksforgeeks.org/iterative-quick-sort/, used for figuring out how to store the sides of the array after sorting the pivot value 

I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.
