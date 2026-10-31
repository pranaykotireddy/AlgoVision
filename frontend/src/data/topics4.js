export const TOPICS_4 = [
  {
    id: "kadanes-algorithm",
    title: "9. Kadane's Algorithm",
    category: "Beginner",
    difficulty: "Medium",
    icon: "📈",
    shortDesc: "Maximum subarray sum.",
    tutorialLink: "https://www.geeksforgeeks.org/largest-sum-contiguous-subarray/",
    theory: `### 1. Core Concepts
Kadane's Algorithm finds the maximum sum of a contiguous subarray in linear time.
- **Maximum subarray problem**
- **Current maximum**
- **Global maximum**
- **Positive and negative values**
- **All-negative arrays**
- **Maximum circular subarray**
- **Dynamic programming relationship**

### 2. Code Implementation
\`\`\`python
arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
current = arr[0]
maximum = arr[0]
for num in arr[1:]:
    current = max(num, current + num)
    maximum = max(maximum, current)
print(maximum)
\`\`\``,
    complexity: [
      { op: "Time Complexity", time: "O(N)", space: "O(1)" },
    ],
    problems: {
      Easy: ["Maximum subarray sum.", "Find maximum sum of a contiguous subarray."],
      Medium: ["Maximum circular subarray sum.", "Maximum product subarray.", "Print the subarray with maximum sum."],
      Hard: ["Maximum sum rectangle in a 2D matrix.", "Maximum subarray sum with one deletion."],
    },
    codeExamples: {
      python: "arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4]\ncur = max_sum = arr[0]\nfor num in arr[1:]:\n    cur = max(num, cur + num)\n    max_sum = max(max_sum, cur)\nprint(max_sum)",
      cpp: "int arr[] = {-2, 1, -3, 4, -1, 2, 1, -5, 4};\nint n = 9, cur = arr[0], max_sum = arr[0];\nfor(int i=1; i<n; i++) {\n    cur = max(arr[i], cur + arr[i]);\n    max_sum = max(max_sum, cur);\n}",
      java: "int[] arr = {-2, 1, -3, 4, -1, 2, 1, -5, 4};\nint cur = arr[0], maxSum = arr[0];\nfor (int i = 1; i < arr.length; i++) {\n    cur = Math.max(arr[i], cur + arr[i]);\n    maxSum = Math.max(maxSum, cur);\n}",
      js: "const arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];\nlet cur = arr[0], maxSum = arr[0];\nfor (let i = 1; i < arr.length; i++) {\n    cur = Math.max(arr[i], cur + arr[i]);\n    maxSum = Math.max(maxSum, cur);\n}",
    },
    interviewPoints: [
      "Time complexity: O(n).",
      "Space complexity: O(1).",
      "Never initialize the maximum to zero if negative-only arrays are possible.",
      "Understand the difference between subarray and subsequence.",
    ],
  },
  {
    id: "sorting-patterns",
    title: "10. Sorting Patterns",
    category: "Beginner",
    difficulty: "Medium",
    icon: "🔀",
    shortDesc: "Merge sort, quick sort, custom sorting.",
    tutorialLink: "https://www.geeksforgeeks.org/sorting-algorithms/",
    theory: `### 1. Core Concepts
Sorting arranges elements in ascending or descending order according to a specific comparison rule.
- **Bubble Sort, Selection Sort, Insertion Sort**
- **Merge Sort, Quick Sort, Heap Sort**
- **Counting Sort, Radix Sort**
- **Stable and unstable sorting**
- **In-place sorting**
- **Custom comparators**

### 2. Code Implementation (Bubble Sort)
\`\`\`python
arr = [5, 2, 8, 1, 3]
for i in range(len(arr)):
    for j in range(0, len(arr)-i-1):
        if arr[j] > arr[j+1]:
            arr[j], arr[j+1] = arr[j+1], arr[j]
print(arr)
\`\`\`

### 3. Sorting Complexity
- **Bubble/Selection/Insertion**: O(n²)
- **Merge/Quick/Heap**: O(n log n)
- **Counting**: O(n + k)`,
    complexity: [
      { op: "Bubble/Selection/Insertion", time: "O(N²)", space: "O(1)" },
      { op: "Merge Sort", time: "O(N log N)", space: "O(N)" },
      { op: "Quick Sort", time: "O(N log N) avg", space: "O(log N)" },
      { op: "Heap Sort", time: "O(N log N)", space: "O(1)" },
    ],
    problems: {
      Easy: [
        "Sort an array.",
        "Sort 0s, 1s and 2s.",
        "Find the Kth smallest element.",
      ],
      Medium: [
        "Merge two sorted arrays.",
        "Merge overlapping intervals.",
        "Sort characters by frequency.",
      ],
      Hard: [
        "Count inversions.",
        "Find median of two sorted arrays.",
        "Reverse pairs.",
      ],
    },
    codeExamples: {
      python: "arr = [5, 2, 8, 1, 3]\narr.sort()\nprint(arr)",
      cpp: "int arr[] = {5, 2, 8, 1, 3};\nsort(arr, arr + 5);",
      java: "int[] arr = {5, 2, 8, 1, 3};\nArrays.sort(arr);",
      js: "const arr = [5, 2, 8, 1, 3];\narr.sort((a, b) => a - b);",
    },
    interviewPoints: [
      "Know best, average, and worst-case complexities.",
      "Understand stable vs unstable sorting.",
      "Understand in-place vs auxiliary-space sorting.",
      "Know why Merge Sort is useful for linked lists.",
      "Understand Quick Sort's worst-case (already sorted array with bad pivot).",
    ],
  }
];