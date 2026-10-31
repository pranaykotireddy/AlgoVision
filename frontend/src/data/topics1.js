export const TOPICS_1 = [
  {
    id: "basic-programming",
    title: "1. Basic Programming",
    category: "Beginner",
    difficulty: "Easy",
    icon: "💻",
    shortDesc: "Learn the fundamental concepts required to write programs.",
    tutorialLink: "https://www.geeksforgeeks.org/dsa/programming-tutorial/",
    theory: `### 1. Core Concepts
- **Programming**: Giving instructions to a computer to perform tasks.
- **Variables**: Named memory locations used to store values.
- **Data Types**: Define the type of data (integer, string, Boolean).
- **Operators**: Perform arithmetic, comparison, and logical operations.
- **Conditional Statements**: Execute code based on conditions (if, else, elif).
- **Loops**: Repeat instructions using \`for\` and \`while\`.
- **Functions**: Reusable blocks of code that perform specific tasks.
- **Recursion**: A function calling itself to solve smaller subproblems.
- **Input/Output**: Read user input and display results.
- **Type Conversion**: Convert values from one data type to another.

### 2. Important Concepts to Understand
**Variables:**
\`\`\`python
name = "Pranay"
age = 20
marks = 85.5
print(name, age)
\`\`\`

**Conditional Statements:**
\`\`\`python
number = 10
if number > 0:
    print("Positive")
elif number < 0:
    print("Negative")
else:
    print("Zero")
\`\`\`

**Loops:**
\`\`\`python
for i in range(1, 6):
    print(i)
\`\`\`

**Functions:**
\`\`\`python
def add(a, b):
    return a + b
print(add(10, 20))
\`\`\`

**Recursion:**
\`\`\`python
def factorial(n):
    if n == 0: # Base condition
        return 1
    return n * factorial(n - 1)
print(factorial(5))
\`\`\`

### 3. Complexity Basics
- Simple assignment: \`O(1)\`
- Single loop: \`O(n)\`
- Nested loops: Usually \`O(n²)\`
- Binary search: \`O(log n)\`
- Recursive factorial: \`O(n)\` time, \`O(n)\` stack space`,
    complexity: [
      { op: "Simple assignment", time: "O(1)", space: "O(1)" },
      { op: "Single loop", time: "O(N)", space: "O(1)" },
      { op: "Nested loops", time: "O(N²)", space: "O(1)" },
    ],
    problems: {
      Easy: [
        "Print numbers from 1 to N.",
        "Find the sum of N natural numbers.",
        "Check whether a number is even or odd.",
        "Find the factorial of a number.",
        "Reverse a number.",
        "Find the sum of digits.",
      ],
      Medium: [
        "Check whether a number is prime.",
        "Generate the Fibonacci series.",
        "Find GCD and LCM.",
        "Check whether a number is an Armstrong number.",
        "Check whether a number is a palindrome.",
      ],
      Hard: [
        "Implement recursive binary exponentiation.",
        "Generate all permutations of a string using recursion.",
        "Solve the Tower of Hanoi problem.",
      ],
    },
    codeExamples: {
      python: "name = 'Pranay'\nage = 20\nprint(name, age)\n\ndef add(a, b):\n    return a + b\nprint(add(10, 20))\n\ndef factorial(n):\n    if n == 0: return 1\n    return n * factorial(n - 1)\nprint(factorial(5))",
      cpp: "#include <iostream>\nusing namespace std;\nint main() {\n    int age = 20;\n    cout << \"Age: \" << age << endl;\n    for (int i = 1; i <= 5; i++) cout << i << \" \";\n    return 0;\n}",
      java: "public class Main {\n    public static void main(String[] args) {\n        int age = 20;\n        System.out.println(\"Age: \" + age);\n        for (int i = 1; i <= 5; i++) System.out.print(i + \" \");\n    }\n}",
      js: "let name = 'Pranay';\nlet age = 20;\nconsole.log(name, age);\n\nfunction add(a, b) { return a + b; }\nconsole.log(add(10, 20));",
    },
    interviewPoints: [
      "Difference between `for` and `while` loops.",
      "Difference between parameters and arguments.",
      "What is recursion and what is a base condition?",
      "Difference between iteration and recursion.",
      "What is stack memory?",
      "Difference between local and global variables.",
    ],
  },
  {
    id: "array-traversal",
    title: "2. Array Traversal",
    category: "Beginner",
    difficulty: "Easy",
    icon: "🔁",
    shortDesc: "Searching, insertion, deletion, traversal.",
    tutorialLink: "https://www.geeksforgeeks.org/dsa/array-data-structure-guide/",
    theory: `### 1. Core Concepts
- **Array**: Collection of elements stored in indexed positions.
- **Indexing**: Access elements using their positions.
- **Traversal**: Visit each element one by one.
- **Insertion**: Add an element at a particular position.
- **Deletion**: Remove an element from an array.
- **Searching**: Find an element in an array.
- **Updating**: Change an existing element.
- **Multidimensional Arrays**: Arrays containing rows and columns.
- **Dynamic Arrays**: Arrays that can resize automatically.

### 2. Code Implementations
**Array Traversal:**
\`\`\`python
arr = [10, 20, 30, 40, 50]
for i in range(len(arr)):
    print(arr[i])
\`\`\`

**Find the Maximum Element:**
\`\`\`python
arr = [10, 45, 20, 80, 30]
maximum = arr[0]
for num in arr:
    if num > maximum:
        maximum = num
print("Maximum:", maximum)
\`\`\`

**Linear Search:**
\`\`\`python
arr = [10, 20, 30, 40, 50]
target = 30
for i in range(len(arr)):
    if arr[i] == target:
        print("Found at index:", i)
        break
\`\`\``,
    complexity: [
      { op: "Array indexing", time: "O(1)", space: "O(1)" },
      { op: "Linear search", time: "O(N)", space: "O(1)" },
      { op: "Insert/Delete in middle", time: "O(N)", space: "O(1)" },
    ],
    problems: {
      Easy: [
        "Find the largest element.",
        "Find the smallest element.",
        "Calculate the sum of array elements.",
        "Reverse an array.",
        "Search for an element.",
        "Count even and odd numbers.",
      ],
      Medium: [
        "Find the second-largest element.",
        "Remove duplicates from a sorted array.",
        "Move all zeros to the end.",
        "Rotate an array by K positions.",
        "Find the missing number.",
      ],
      Hard: [
        "Find the maximum product subarray.",
        "Trapping Rain Water.",
        "Merge two sorted arrays without extra space.",
        "Find the median of two sorted arrays.",
      ],
    },
    codeExamples: {
      python: "arr = [10, 20, 30, 40, 50]\nfor i in range(len(arr)):\n    print(arr[i])",
      cpp: "int arr[] = {10, 20, 30, 40, 50};\nint n = sizeof(arr) / sizeof(arr[0]);\nfor (int i = 0; i < n; i++) {\n    cout << arr[i] << \" \";\n}",
      java: "int[] arr = {10, 20, 30, 40, 50};\nfor (int i = 0; i < arr.length; i++) {\n    System.out.print(arr[i] + \" \");\n}",
      js: "const arr = [10, 20, 30, 40, 50];\nfor (let i = 0; i < arr.length; i++) {\n    console.log(arr[i]);\n}",
    },
    interviewPoints: [
      "Array indexing generally takes O(1).",
      "Linear search takes O(n).",
      "Inserting or deleting in the middle takes O(n) because elements may need shifting.",
      "Understand the difference between arrays and linked lists.",
      "Understand static arrays versus dynamic arrays.",
    ],
  },
  {
    id: "string-manipulation",
    title: "3. String Manipulation",
    category: "Beginner",
    difficulty: "Easy",
    icon: "🔤",
    shortDesc: "Reversal, palindrome, anagrams.",
    tutorialLink: "https://www.geeksforgeeks.org/string-data-structure/",
    theory: `### 1. Core Concepts
Strings are sequences of characters used to represent and manipulate text.
- **String creation and indexing**
- **String traversal**
- **String slicing**
- **String reversal**
- **Palindrome checking**
- **Character frequency**
- **Anagram checking**
- **Substrings and subsequences**
- **String immutability**
- **Pattern matching**

### 2. Code Implementations
\`\`\`python
# Reverse a string
s = "algovision"
print(s[::-1])

# Check palindrome
s = "madam"
print(s == s[::-1])

# Character frequency
s = "banana"
freq = {}
for ch in s:
    freq[ch] = freq.get(ch, 0) + 1
print(freq)
\`\`\``,
    complexity: [
      { op: "Reversal", time: "O(N)", space: "O(N)" },
      { op: "Palindrome Check", time: "O(N)", space: "O(1)" },
      { op: "Anagram Check", time: "O(N log N) or O(N)", space: "O(1) or O(N)" },
    ],
    problems: {
      Easy: [
        "Reverse a string.",
        "Check palindrome.",
        "Count vowels and consonants.",
        "Find string length without using len().",
      ],
      Medium: [
        "Check whether two strings are anagrams.",
        "Find the first non-repeating character.",
        "Remove duplicate characters.",
        "Find the longest common prefix.",
      ],
      Hard: [
        "Longest palindromic substring.",
        "Minimum window substring.",
        "Implement pattern matching.",
      ],
    },
    codeExamples: {
      python: "s = 'algovision'\nprint(s[::-1])\n\ns = 'banana'\nfreq = {}\nfor ch in s:\n    freq[ch] = freq.get(ch, 0) + 1\nprint(freq)",
      cpp: "string s = \"algovision\";\nreverse(s.begin(), s.end());\ncout << s;",
      java: "String s = \"algovision\";\nStringBuilder sb = new StringBuilder(s);\nsb.reverse();\nSystem.out.println(sb.toString());",
      js: "let s = 'algovision';\nconsole.log(s.split('').reverse().join(''));",
    },
    interviewPoints: [
      "Strings may be immutable depending on the language.",
      "Understand ASCII and Unicode.",
      "Know the difference between substring and subsequence.",
      "String concatenation can have different complexity depending on the language.",
    ],
  }
];