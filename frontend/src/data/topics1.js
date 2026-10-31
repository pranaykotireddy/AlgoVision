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
- **Loops**: Repeat instructions using for and while.
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
- Simple assignment: O(1)
- Single loop: O(n)
- Nested loops: Usually O(n²)
- Binary search: O(log n)
- Recursive factorial: O(n) time, O(n) stack space`,
    complexity: [
      { op: "Simple assignment", time: "O(1)", space: "O(1)" },
      { op: "Single loop", time: "O(N)", space: "O(1)" },
      { op: "Nested loops", time: "O(N²)", space: "O(1)" },
    ],
    problems: {
      Easy: ["Print numbers from 1 to N.", "Find the sum of N natural numbers.", "Check whether a number is even or odd.", "Find the factorial of a number.", "Reverse a number.", "Find the sum of digits."],
      Medium: ["Check whether a number is prime.", "Generate the Fibonacci series.", "Find GCD and LCM.", "Check whether a number is an Armstrong number.", "Check whether a number is a palindrome."],
      Hard: ["Implement recursive binary exponentiation.", "Generate all permutations of a string using recursion.", "Solve the Tower of Hanoi problem."],
    },
    codeExamples: {
      python: "name = 'Pranay'\nage = 20\nprint(name, age)\n\ndef add(a, b):\n    return a + b\nprint(add(10, 20))\n\ndef factorial(n):\n    if n == 0: return 1\n    return n * factorial(n - 1)\nprint(factorial(5))",
      cpp: "#include <iostream>\nusing namespace std;\nint main() {\n    int age = 20;\n    cout << \"Age: \" << age << endl;\n    for (int i = 1; i <= 5; i++) cout << i << \" \";\n    return 0;\n}",
      java: "public class Main {\n    public static void main(String[] args) {\n        int age = 20;\n        System.out.println(\"Age: \" + age);\n        for (int i = 1; i <= 5; i++) System.out.print(i + \" \");\n    }\n}",
      js: "let name = 'Pranay';\nlet age = 20;\nconsole.log(name, age);\n\nfunction add(a, b) { return a + b; }\nconsole.log(add(10, 20));",
    },
    interviewPoints: ["Difference between for and while loops.", "Difference between parameters and arguments.", "What is recursion and what is a base condition?", "Difference between iteration and recursion.", "What is stack memory?", "Difference between local and global variables."],
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
      Easy: ["Find the largest element.", "Find the smallest element.", "Calculate the sum of array elements.", "Reverse an array.", "Search for an element.", "Count even and odd numbers."],
      Medium: ["Find the second-largest element.", "Remove duplicates from a sorted array.", "Move all zeros to the end.", "Rotate an array by K positions.", "Find the missing number."],
      Hard: ["Find the maximum product subarray.", "Trapping Rain Water.", "Merge two sorted arrays without extra space.", "Find the median of two sorted arrays."],
    },
    codeExamples: {
      python: "arr = [10, 20, 30, 40, 50]\nfor i in range(len(arr)):\n    print(arr[i])",
      cpp: "int arr[] = {10, 20, 30, 40, 50};\nint n = sizeof(arr) / sizeof(arr[0]);\nfor (int i = 0; i < n; i++) {\n    cout << arr[i] << \" \";\n}",
      java: "int[] arr = {10, 20, 30, 40, 50};\nfor (int i = 0; i < arr.length; i++) {\n    System.out.print(arr[i] + \" \");\n}",
      js: "const arr = [10, 20, 30, 40, 50];\nfor (let i = 0; i < arr.length; i++) {\n    console.log(arr[i]);\n}",
    },
    interviewPoints: ["Array indexing generally takes O(1).", "Linear search takes O(n).", "Inserting or deleting in the middle takes O(n).", "Understand static vs dynamic arrays."],
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
- String creation and indexing
- String traversal, slicing, reversal
- Palindrome checking
- Character frequency
- Anagram checking
- Substrings and subsequences
- String immutability
- Pattern matching

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
      Easy: ["Reverse a string.", "Check palindrome.", "Count vowels and consonants.", "Find string length without using len()."],
      Medium: ["Check whether two strings are anagrams.", "Find the first non-repeating character.", "Remove duplicate characters.", "Find the longest common prefix."],
      Hard: ["Longest palindromic substring.", "Minimum window substring.", "Implement pattern matching."],
    },
    codeExamples: {
      python: "s = 'algovision'\nprint(s[::-1])\n\ns = 'banana'\nfreq = {}\nfor ch in s:\n    freq[ch] = freq.get(ch, 0) + 1\nprint(freq)",
      cpp: "string s = \"algovision\";\nreverse(s.begin(), s.end());\ncout << s;",
      java: "String s = \"algovision\";\nStringBuilder sb = new StringBuilder(s);\nsb.reverse();\nSystem.out.println(sb.toString());",
      js: "let s = 'algovision';\nconsole.log(s.split('').reverse().join(''));",
    },
    interviewPoints: ["Strings may be immutable depending on language.", "Understand ASCII and Unicode.", "Know difference between substring and subsequence.", "String concatenation complexity varies."],
  },
  {
    id: "hashing",
    title: "4. Hashing",
    category: "Beginner",
    difficulty: "Medium",
    icon: "🗺️",
    shortDesc: "HashMap, HashSet, frequency counting.",
    tutorialLink: "https://www.geeksforgeeks.org/hashing-data-structure/",
    theory: `### 1. Core Concepts
- Hash functions and hash tables
- HashMap / Dictionary
- HashSet
- Key-value pairs
- Hash collisions and collision resolution
- Frequency counting
- Direct addressing
- Load factor

### 2. Code Implementation
\`\`\`python
arr = [1, 2, 2, 3, 3, 3, 4]
freq = {}
for num in arr:
    freq[num] = freq.get(num, 0) + 1
print(freq)
\`\`\``,
    complexity: [
      { op: "Average Lookup", time: "O(1)", space: "O(N)" },
      { op: "Worst-case Lookup", time: "O(N)", space: "O(N)" },
    ],
    problems: {
      Easy: ["Count frequencies.", "Find duplicate elements.", "Find the first repeating element."],
      Medium: ["Two Sum.", "Group Anagrams.", "Longest Consecutive Sequence.", "Subarray Sum Equals K."],
      Hard: ["Count distinct elements in every window.", "Longest substring with K distinct characters.", "Design an LRU Cache."],
    },
    codeExamples: {
      python: "arr = [1, 2, 2, 3, 3, 3, 4]\nfreq = {}\nfor num in arr:\n    freq[num] = freq.get(num, 0) + 1\nprint(freq)",
      cpp: "unordered_map<int, int> freq;\nint arr[] = {1, 2, 2, 3, 3, 3, 4};\nfor (int x : arr) freq[x]++;",
      java: "HashMap<Integer, Integer> freq = new HashMap<>();\nint[] arr = {1, 2, 2, 3, 3, 3, 4};\nfor (int x : arr) freq.put(x, freq.getOrDefault(x, 0) + 1);",
      js: "const arr = [1, 2, 2, 3, 3, 3, 4];\nconst freq = {};\nfor (const num of arr) freq[num] = (freq[num] || 0) + 1;",
    },
    interviewPoints: ["Average HashMap lookup: O(1).", "Worst-case can be O(n).", "HashSet stores unique elements.", "HashMap stores key-value pairs."],
  },
  {
    id: "two-pointers",
    title: "5. Two Pointers",
    category: "Beginner",
    difficulty: "Medium",
    icon: "👉👈",
    shortDesc: "Opposite direction, same direction, fast & slow.",
    tutorialLink: "https://www.geeksforgeeks.org/two-pointers-technique/",
    theory: `### 1. Core Concepts
- Opposite-direction pointers
- Same-direction pointers
- Slow and fast pointers
- Left and right pointers
- Pair sum and Three Sum
- Removing duplicates
- Partitioning arrays
- In-place modifications

### 2. Code Implementation
\`\`\`python
arr = [1, 2, 4, 6, 8, 9]
target = 10
left = 0
right = len(arr) - 1
while left < right:
    total = arr[left] + arr[right]
    if total == target:
        print(arr[left], arr[right])
        break
    elif total < target:
        left += 1
    else:
        right -= 1
\`\`\``,
    complexity: [
      { op: "Time Complexity", time: "O(N)", space: "O(1)" },
    ],
    problems: {
      Easy: ["Reverse an array.", "Check palindrome.", "Remove duplicates from sorted array."],
      Medium: ["Two Sum II.", "Container With Most Water.", "Three Sum.", "Sort Colors."],
      Hard: ["Trapping Rain Water.", "Four Sum.", "Minimum Window Substring."],
    },
    codeExamples: {
      python: "arr = [1, 2, 4, 6, 8, 9]\ntarget = 10\nleft, right = 0, len(arr) - 1\nwhile left < right:\n    total = arr[left] + arr[right]\n    if total == target: break\n    elif total < target: left += 1\n    else: right -= 1",
      cpp: "int arr[] = {1, 2, 4, 6, 8, 9};\nint target = 10, left = 0, right = 5;\nwhile (left < right) {\n    int sum = arr[left] + arr[right];\n    if (sum == target) break;\n    else if (sum < target) left++;\n    else right--;\n}",
      java: "int[] arr = {1, 2, 4, 6, 8, 9};\nint target = 10, left = 0, right = arr.length - 1;\nwhile (left < right) {\n    int sum = arr[left] + arr[right];\n    if (sum == target) break;\n    else if (sum < target) left++;\n    else right--;\n}",
      js: "const arr = [1, 2, 4, 6, 8, 9];\nlet target = 10, left = 0, right = arr.length - 1;\nwhile (left < right) {\n    const sum = arr[left] + arr[right];\n    if (sum === target) break;\n    else if (sum < target) left++;\n    else right--;\n}",
    },
    interviewPoints: ["Often reduces O(n²) to O(n).", "Sorted arrays are particularly useful.", "Understand when pointers move.", "Avoid unnecessary nested loops."],
  },
  {
    id: "sliding-window",
    title: "6. Sliding Window",
    category: "Beginner",
    difficulty: "Medium",
    icon: "🪟",
    shortDesc: "Fixed window, variable window.",
    tutorialLink: "https://www.geeksforgeeks.org/window-sliding-technique/",
    theory: `### 1. Core Concepts
- Fixed-size window
- Variable-size window
- Window expansion and contraction
- Left and right boundaries
- Window sum and frequency
- Maximum/minimum subarray
- Longest substring problems

### 2. Code Implementation
\`\`\`python
arr = [2, 1, 5, 1, 3, 2]
k = 3
window_sum = sum(arr[:k])
maximum = window_sum
for i in range(k, len(arr)):
    window_sum += arr[i]
    window_sum -= arr[i-k]
    maximum = max(maximum, window_sum)
print(maximum)
\`\`\``,
    complexity: [
      { op: "Time Complexity", time: "O(N)", space: "O(1)" },
    ],
    problems: {
      Easy: ["Maximum sum of K consecutive elements.", "Average of every window of size K."],
      Medium: ["Longest substring without repeating characters.", "Minimum Size Subarray Sum.", "Maximum number of vowels in a substring."],
      Hard: ["Sliding Window Maximum.", "Minimum Window Substring.", "Longest substring with at most K distinct characters."],
    },
    codeExamples: {
      python: "arr = [2, 1, 5, 1, 3, 2]\nk = 3\nwindow_sum = sum(arr[:k])\nmaximum = window_sum\nfor i in range(k, len(arr)):\n    window_sum += arr[i] - arr[i-k]\n    maximum = max(maximum, window_sum)\nprint(maximum)",
      cpp: "int arr[] = {2, 1, 5, 1, 3, 2};\nint k = 3, n = 6;\nint windowSum = 0;\nfor(int i=0; i<k; i++) windowSum += arr[i];\nint maxSum = windowSum;\nfor(int i=k; i<n; i++) {\n    windowSum += arr[i] - arr[i-k];\n    maxSum = max(maxSum, windowSum);\n}",
      java: "int[] arr = {2, 1, 5, 1, 3, 2};\nint k = 3;\nint windowSum = 0;\nfor (int i = 0; i < k; i++) windowSum += arr[i];\nint maxSum = windowSum;\nfor (int i = k; i < arr.length; i++) {\n    windowSum += arr[i] - arr[i - k];\n    maxSum = Math.max(maxSum, windowSum);\n}",
      js: "const arr = [2, 1, 5, 1, 3, 2];\nconst k = 3;\nlet windowSum = 0;\nfor (let i = 0; i < k; i++) windowSum += arr[i];\nlet maxSum = windowSum;\nfor (let i = k; i < arr.length; i++) {\n    windowSum += arr[i] - arr[i - k];\n    maxSum = Math.max(maxSum, windowSum);\n}",
    },
    interviewPoints: ["Fixed window: size stays constant.", "Variable window: size changes based on conditions.", "Improves O(n × k) to O(n)."],
  },
  {
    id: "prefix-sum",
    title: "7. Prefix Sum",
    category: "Beginner",
    difficulty: "Medium",
    icon: "➕",
    shortDesc: "Prefix sum, suffix sum, range queries.",
    tutorialLink: "https://www.geeksforgeeks.org/prefix-sum-array-implementation-applications-competitive-programming/",
    theory: `### 1. Core Concepts
- Prefix sum array
- Cumulative sum
- Range sum queries
- Suffix sum
- 2D prefix sum
- Prefix XOR
- Subarray sum
- Prefix sum with HashMap

### 2. Code Implementation
\`\`\`python
arr = [2, 4, 6, 8, 10]
prefix = [0]
for num in arr:
    prefix.append(prefix[-1] + num)

left = 1
right = 3
print(prefix[right + 1] - prefix[left])
\`\`\``,
    complexity: [
      { op: "Preprocessing", time: "O(N)", space: "O(N)" },
      { op: "Range Query", time: "O(1)", space: "O(1)" },
    ],
    problems: {
      Easy: ["Build a prefix sum array.", "Find running sum.", "Range sum query."],
      Medium: ["Subarray Sum Equals K.", "Equilibrium Point.", "Find pivot index."],
      Hard: ["Count subarrays with a given sum.", "Maximum size subarray with sum K.", "2D range sum queries."],
    },
    codeExamples: {
      python: "arr = [2, 4, 6, 8, 10]\nprefix = [0]\nfor num in arr: prefix.append(prefix[-1] + num)\nprint(prefix[4] - prefix[1])",
      cpp: "int arr[] = {2, 4, 6, 8, 10};\nint n = 5;\nint prefix[n+1];\nprefix[0] = 0;\nfor(int i=0; i<n; i++) prefix[i+1] = prefix[i] + arr[i];\ncout << prefix[4] - prefix[1];",
      java: "int[] arr = {2, 4, 6, 8, 10};\nint[] prefix = new int[arr.length + 1];\nfor (int i = 0; i < arr.length; i++) prefix[i+1] = prefix[i] + arr[i];\nSystem.out.println(prefix[4] - prefix[1]);",
      js: "const arr = [2, 4, 6, 8, 10];\nconst prefix = [0];\nfor (let i = 0; i < arr.length; i++) prefix.push(prefix[i] + arr[i]);\nconsole.log(prefix[4] - prefix[1]);",
    },
    interviewPoints: ["Preprocessing: O(n).", "Each range query: O(1).", "Space: O(n) for prefix array.", "Be careful with zero-based indexing."],
  },
  {
    id: "difference-array",
    title: "8. Difference Array",
    category: "Beginner",
    difficulty: "Medium",
    icon: "➖",
    shortDesc: "Range updates, cumulative operations.",
    tutorialLink: "https://www.geeksforgeeks.org/difference-array-range-update-query-o1/",
    theory: `### 1. Core Concepts
- Difference array construction
- Range increment/decrement
- Boundary updates
- Reconstructing original array
- Prefix sum relationship
- Multiple range queries

### 2. Code Implementation
\`\`\`python
arr = [1, 2, 3, 4, 5]
diff = [0] * (len(arr) + 1)

left, right = 1, 3
value = 10
diff[left] += value
diff[right + 1] -= value

result = []
current = 0
for i in range(len(arr)):
    current += diff[i]
    result.append(arr[i] + current)
print(result)
\`\`\``,
    complexity: [
      { op: "Range Update", time: "O(1)", space: "O(1)" },
      { op: "Reconstruction", time: "O(N)", space: "O(N)" },
    ],
    problems: {
      Easy: ["Construct a difference array.", "Apply one range update."],
      Medium: ["Apply multiple range updates.", "Range addition queries.", "Flight bookings range updates."],
      Hard: ["Maximum element after multiple range updates.", "Minimum operations for range modifications."],
    },
    codeExamples: {
      python: "arr = [1, 2, 3, 4, 5]\ndiff = [0] * (len(arr) + 1)\ndiff[1] += 10\ndiff[4] -= 10\nres, cur = [], 0\nfor i in range(len(arr)):\n    cur += diff[i]\n    res.append(arr[i] + cur)\nprint(res)",
      cpp: "int arr[] = {1, 2, 3, 4, 5};\nint n = 5;\nint diff[n+1] = {0};\ndiff[1] += 10;\ndiff[4] -= 10;\nint cur = 0;\nfor(int i=0; i<n; i++) {\n    cur += diff[i];\n    arr[i] += cur;\n}",
      java: "int[] arr = {1, 2, 3, 4, 5};\nint[] diff = new int[arr.length + 1];\ndiff[1] += 10;\ndiff[4] -= 10;\nint cur = 0;\nfor (int i = 0; i < arr.length; i++) {\n    cur += diff[i];\n    arr[i] += cur;\n}",
      js: "const arr = [1, 2, 3, 4, 5];\nconst diff = new Array(arr.length + 1).fill(0);\ndiff[1] += 10;\ndiff[4] -= 10;\nlet cur = 0;\nfor (let i = 0; i < arr.length; i++) {\n    cur += diff[i];\n    arr[i] += cur;\n}",
    },
    interviewPoints: ["Useful when many range updates are required.", "Each update takes O(1).", "Reconstruction takes O(n)."],
  },
];