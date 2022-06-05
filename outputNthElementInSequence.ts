// An = A(n-1) + A(n-2) for all n < 2

// You are given A1 and A2, as well as the index = n

// A1 === first number
// A2 === second number
// n === index

// input = '1 2 5'
// output = 8

// A1 = 1
// A2 = 2
// A3 = A2 + A1 = 2 + 1 = 3
// A4 = A3 + A2 = 3 + 2 = 5
// A5 = A4 + A3 = 5 + 3 = 8
// A6 = A5 + A4 = 8 + 5 = 13
// A7 = A6 + A5 = 13 + 8 = 21