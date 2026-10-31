export const TOPICS_3 = [
  {
    id: "sliding-window",
    title: "6. Sliding Window",
    category: "Beginner",
    difficulty: "Medium",
    icon: "🪟",
    shortDesc: "Fixed window, variable window.",
    tutorialLink: "https://www.geeksforgeeks.org/window-sliding-technique/",
    theory: `### 1. Core Concepts
Sliding Window maintains a continuous section of an array or string and moves that section to solve problems efficiently.
- **Fixed-size window**
- **Variable-size window**
- **Window expansion**
- **Window contraction**
- **Left and right boundaries**
- **Window sum**
- **Window frequency**
- **Maximum/minimum subarray**
- **Longest substring problems**

### 2. Code Implementation (Max Sum of K)
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
    interviewPoints: [
      "Fixed window: window size stays constant.",
      "Variable window: window size changes according to conditions.",
      "Many problems improve from O(n × k) to O(n).",
      "Sliding window generally works on contiguous ranges.",
    ],
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
Prefix Sum is a technique that stores cumulative sums to answer range-sum queries efficiently.
- **Prefix sum array**
- **Cumulative sum**
- **Range sum queries**
- **Suffix sum**
- **2D prefix sum**
- **Prefix XOR**
- **Subarray sum**
- **Prefix sum with HashMap**

### 2. Code Implementation
\`\`\`python
arr = [2, 4, 6, 8, 10]
prefix = [0]
for num in arr:
    prefix.append(prefix[-1] + num)

# Sum from index 1 to 3
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
    interviewPoints: [
      "Preprocessing: O(n).",
      "Each range sum query: O(1).",
      "Space: O(n) for the prefix array.",
      "Be careful with zero-based indexing.",
    ],
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
A Difference Array is an optimization technique used to perform multiple range updates efficiently.
- **Difference array construction**
- **Range increment**
- **Range decrement**
- **Boundary updates**
- **Reconstructing original array**
- **Prefix sum relationship**
- **Multiple range queries**

### 2. Code Implementation
\`\`\`python
arr = [1, 2, 3, 4, 5]
diff = [0] * (len(arr) + 1)

# Add 10 to indices 1 through 3
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
    interviewPoints: [
      "Useful when many range updates are required.",
      "Each update takes O(1).",
      "Reconstructing the array takes O(n).",
      "Difference arrays are closely related to prefix sums.",
    ],
  }
];