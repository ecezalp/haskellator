# Learn You a Haskell for Great Good!

## 1. Introduction
### So What is Haskell

- Purely functional programming language: everything is a function.
- "You don't tell the computer what to do as such but rather you tell it what stuff is."
- Referential transparency: if a function is called twice with the same parameters, it's guaranteed to return the same result.
- Haskell is lazy: unless specifically told otherwise, Haskell won't execute functions until forced to show a result.
- Think of a program as a series of transformations on data.
- Haskell is statistically typed, and has type inference.
- Haskell has been designed by an academic research committee, and the stable version has been released in 2003.

### What you need to dive in
- GHC (Glasgow Haskell Compiler) is what I will be using to compile Haskell. 

// I have installed Haskell Color Compiler, link to technical page

## 2. Starting Out
### Ready, set, go!

- Arithmetic is straightforward.
- Not Equals is typed as /=.
- Different types (such as int and string) can not be compared.
- infix function: has syntax param1 func param2, such as 1 * 1
- prefix function: has syntax func param1 param2.
- **succ** takes anything that has a defined succcessor and returns that successor (succ 8 => 9)
- **min** and **max** returns the min or max from an order.
- parantheses act in the arithmetic way to determine the order of operations.
- A prefix function can be converted into an infix function by being surrounded in backticks 1 `min` 2

### Baby's first functions
