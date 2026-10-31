export const TOPICS_2 = [
  {
    id: "hashing",
    title: "4. Hashing",
    category: "Beginner",
    difficulty: "Medium",
    icon: "🗺️",
    shortDesc: "HashMap, HashSet, frequency counting.",
    tutorialLink: "https://www.geeksforgeeks.org/hashing-data-structure/",
    theory: `### 1. Core Concepts
Hashing is a technique that maps data to locations using a hash function. It enables efficient insertion, searching, and deletion.
- **Hash functions**
- **Hash tables**
- **HashMap / Dictionary**
- **HashSet**
- **Key-value pairs**
- **Hash collisions**
- **Collision resolution**
- **Frequency counting**
- **Direct addressing**
- **Load factor**

### 2. Code Implementation (Frequency Counting)
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
      Easy: [
        "Count frequencies.",
        "Find duplicate elements.",
        "Find the first repeating element.",
      ],
      Medium: [
        "Two Sum.",
        "Group Anagrams.",
        "Longest Consecutive Sequence.",
        "Subarray Sum Equals K.",
      ],
      Hard: [
        "Count distinct elements in every window.",
        "Longest substring with K distinct characters.",
        "Design an LRU Cache.",
      ],
    },
    codeExamples: {
      python: "arr = [1, 2, 2, 3, 3, 3, 4]\nfreq = {}\nfor num in arr:\n    freq[num] = freq.get(num, 0) + 1\nprint(freq)",
      cpp: "unordered_map<int, int> freq;\nint arr[] = {1, 2, 2, 3, 3, 3, 4};\nfor (int x : arr) freq[x]++;",
      java: "HashMap<Integer, Integer> freq = new HashMap<>();\nint[] arr = {1, 2, 2, 3, 3, 3, 4};\nfor (int x : arr) freq.put(x, freq.getOrDefault(x, 0) + 1);",
      js: "const arr = [1, 2, 2, 3, 3, 3, 4];\nconst freq = {};\nfor (const num of arr) freq[num] = (freq[num] || 0) + 1;",
    },
    interviewPoints: [
      "Average HashMap lookup: O(1).",
      "Worst-case lookup can be O(n).",
      "HashSet stores unique elements.",
      "HashMap stores key-value pairs.",
      "Understand collision handling.",
    ],
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
Two Pointers is an algorithmic technique that uses two indices to process arrays, strings, or linked lists efficiently.
- **Opposite-direction pointers**
- **Same-direction pointers**
- **Slow and fast pointers**
- **Left and right pointers**
- **Pair sum**
- **Three Sum**
- **Removing duplicates**
- **Partitioning arrays**
- **In-place modifications**

### 2. Code Implementation (Pair Sum)
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
      Easy: [
        "Reverse an array.",
        "Check palindrome.",
        "Remove duplicates from sorted array.",
      ],
      Medium: [
        "Two Sum II.",
        "Container With Most Water.",
        "Three Sum.",
        "Sort Colors.",
      ],
      Hard: [
        "Trapping Rain Water.",
        "Four Sum.",
        "Minimum Window Substring.",
      ],
    },
    codeExamples: {
      python: "arr = [1, 2, 4, 6, 8, 9]\ntarget = 10\nleft, right = 0, len(arr) - 1\nwhile left < right:\n    total = arr[left] + arr[right]\n    if total == target: break\n    elif total < target: left += 1\n    else: right -= 1",
      cpp: "int arr[] = {1, 2, 4, 6, 8, 9};\nint target = 10, left = 0, right = 5;\nwhile (left < right) {\n    int sum = arr[left] + arr[right];\n    if (sum == target) break;\n    else if (sum < target) left++;\n    else right--;\n}",
      java: "int[] arr = {1, 2, 4, 6, 8, 9};\nint target = 10, left = 0, right = arr.length - 1;\nwhile (left < right) {\n    int sum = arr[left] + arr[right];\n    if (sum == target) break;\n    else if (sum < target) left++;\n    else right--;\n}",
      js: "const arr = [1, 2, 4, 6, 8, 9];\nlet target = 10, left = 0, right = arr.length - 1;\nwhile (left < right) {\n    const sum = arr[left] + arr[right];\n    if (sum === target) break;\n    else if (sum < target) left++;\n    else right--;\n}",
    },
    interviewPoints: [
      "Often reduces O(n²) to O(n).",
      "Sorted arrays are particularly useful.",
      "Understand when pointers move.",
      "Avoid unnecessary nested loops.",
    ],
  }
];