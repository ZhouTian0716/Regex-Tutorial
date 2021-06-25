# A study of Regular Expression on matching color HEX Value

## Summary

By looking at all the Valid color HEX Values, we can find the actual pattern is that, it has the following format:
* Must start with "#".
* Each digit is either letter from a to f, or integer from 0 to 9.
* Allowing to have 3 or 6 digits.
* 4 or 8 digits also works, valid but rarely used.

We'll be using this Regex to validate a Hex Value:
```md
^#([a-f0-9]{3,4}|[a-f0-9]{6}|[a-f0-9]{8})$

This Regular Expression includes concepts such as: Position, Quantifiers, Character Classes and The OR Operator. Please see seperate explaination for those concepts below.
```
In short, this Regular Expression is matching through documents with these conditions:
* Must start with "#".
* Target must be at the start and end of a line.
* Each digit must be either letter from a to f, or integer from 0 to 9.
* Must have 3 or 6 digits, allowing 4 or 8 digits.


Please try Hex Value Examples listed below with this link: [https://www.w3schools.com/colors/colors_picker.asp](https://www.w3schools.com/colors/colors_picker.asp)

You can test the Regex with these examples:
```md
Valid:
#ade123
#aef
#ae23bcce
#a23b
Invalid:
#aefcbg
#aefcb
#2141251
```
## Table of Contents
- [Position](#position)
- [Quantifiers](#quantifiers)
- [Character Classes](#character-classes)
- [The OR Operator](#the-or-operator)
## Regex Components
### Position

```md
^  means to match something from the beginning of a line.

^example // This will get the first "example" in line 1 highlighted.

$  means to match something from the end of a line.

example$ // This will get the last "example" in line 1 highlighted.
```
```md
example is an example
```
  
### Quantifiers
These quantifiers are used after any Literal or Meta Characters to specifiy their quantities.

```md
*  means to have 0 or unlimited.

+  means to have 1 or unlimited.

?  means to have 0 or 1.

{n}  any integer.

{min, max}  specifies a range.
```

### Grouping Constructs

### Bracket Expressions

### Character Classes
```md
Square brackets "[]", normally to have some range specified inside.

[a-z0-9] means to match any letter from a to z, and also any integer from 0 to 9.
```
### The OR Operator
```md
Division sign "|", normally used together with ().

(A|B) means to match A or B.
```
## Author

Zhou Tian : [https://github.com/ZhouTian0716](https://github.com/ZhouTian0716)
