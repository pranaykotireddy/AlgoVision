export const TOPICS_2 = [
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
- Maximum subarray problem
- Current maximum
- Global maximum
- Positive and negative values
- All-negative arrays
- Maximum circular subarray
- Dynamic programming relationship

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
    complexity: [{ op: "Time Complexity", time: "O(N)", space: "O(1)" }],
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
    interviewPoints: ["Time complexity: O(n).", "Space complexity: O(1).", "Never initialize max to zero if negatives possible.", "Difference between subarray and subsequence."],
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
- Bubble Sort, Selection Sort, Insertion Sort
- Merge Sort, Quick Sort, Heap Sort
- Counting Sort, Radix Sort
- Stable and unstable sorting
- In-place sorting
- Custom comparators

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
- Bubble/Selection/Insertion: O(n²)
- Merge/Quick/Heap: O(n log n)
- Counting: O(n + k)`,
    complexity: [
      { op: "Bubble/Selection/Insertion", time: "O(N²)", space: "O(1)" },
      { op: "Merge Sort", time: "O(N log N)", space: "O(N)" },
      { op: "Quick Sort", time: "O(N log N) avg", space: "O(log N)" },
      { op: "Heap Sort", time: "O(N log N)", space: "O(1)" },
    ],
    problems: {
      Easy: ["Sort an array.", "Sort 0s, 1s and 2s.", "Find the Kth smallest element."],
      Medium: ["Merge two sorted arrays.", "Merge overlapping intervals.", "Sort characters by frequency."],
      Hard: ["Count inversions.", "Find median of two sorted arrays.", "Reverse pairs."],
    },
    codeExamples: {
      python: "arr = [5, 2, 8, 1, 3]\narr.sort()\nprint(arr)",
      cpp: "int arr[] = {5, 2, 8, 1, 3};\nsort(arr, arr + 5);",
      java: "int[] arr = {5, 2, 8, 1, 3};\nArrays.sort(arr);",
      js: "const arr = [5, 2, 8, 1, 3];\narr.sort((a, b) => a - b);",
    },
    interviewPoints: ["Know best, average, worst-case complexity.", "Stable vs unstable sorting.", "In-place vs auxiliary-space sorting.", "Merge Sort for linked lists.", "Quick Sort's worst case."],
  },
  {
    id: "binary-search",
    title: "11. Binary Search",
    category: "Intermediate",
    difficulty: "Medium",
    icon: "🔍",
    shortDesc: "Efficient O(log N) search on sorted data.",
    tutorialLink: "https://www.geeksforgeeks.org/binary-search/",
    theory: `### 1. Core Concepts
- Sorted Array required
- Search Space, Left/Right Pointer
- Middle Element
- Lower Bound / Upper Bound
- First/Last Occurrence
- Binary Search Variants (Rotated Arrays, Peak, Answer Space)

### 2. How It Works
\`arr = [10, 20, 30, 40, 50, 60, 70]\`, target = 50.
1. Left = 0, Right = 6. Mid = 3 (40).
2. 50 > 40, search right half.
3. Mid = 5 (60). 50 < 60, search left half.
4. Mid = 4 (50). Found at index 4.

### 3. Code Implementation
\`\`\`python
def binary_search(arr, target):
    l, r = 0, len(arr) - 1
    while l <= r:
        mid = l + (r - l) // 2
        if arr[mid] == target: return mid
        if arr[mid] < target: l = mid + 1
        else: r = mid - 1
    return -1
\`\`\``,
    complexity: [
      { op: "Best-case", time: "O(1)", space: "O(1)" },
      { op: "Average/Worst-case", time: "O(log N)", space: "O(1)" },
      { op: "Recursive Space", time: "O(log N)", space: "O(log N)" },
    ],
    problems: {
      Easy: ["Binary Search.", "Search Insert Position.", "First/Last Occurrence.", "Sqrt(x)."],
      Medium: ["Search in Rotated Sorted Array.", "Find Peak Element.", "Find Minimum in Rotated Sorted Array."],
      Hard: ["Median of Two Sorted Arrays.", "Aggressive Cows.", "Allocate Minimum Number of Pages."],
    },
    codeExamples: {
      python: "def binary_search(arr, target):\n    l, r = 0, len(arr) - 1\n    while l <= r:\n        mid = l + (r - l) // 2\n        if arr[mid] == target: return mid\n        if arr[mid] < target: l = mid + 1\n        else: r = mid - 1\n    return -1",
      cpp: "int binarySearch(int arr[], int n, int target) {\n    int l = 0, r = n - 1;\n    while (l <= r) {\n        int mid = l + (r - l) / 2;\n        if (arr[mid] == target) return mid;\n        if (arr[mid] < target) l = mid + 1;\n        else r = mid - 1;\n    }\n    return -1;\n}",
      java: "int binarySearch(int[] arr, int target) {\n    int l = 0, r = arr.length - 1;\n    while (l <= r) {\n        int mid = l + (r - l) / 2;\n        if (arr[mid] == target) return mid;\n        if (arr[mid] < target) l = mid + 1;\n        else r = mid - 1;\n    }\n    return -1;\n}",
      js: "function binarySearch(arr, target) {\n  let l = 0, r = arr.length - 1;\n  while (l <= r) {\n    const mid = Math.floor(l + (r - l) / 2);\n    if (arr[mid] === target) return mid;\n    if (arr[mid] < target) l = mid + 1;\n    else r = mid - 1;\n  }\n  return -1;\n}",
    },
    interviewPoints: ["Requires a correctly defined search space.", "Time complexity is O(log n).", "Iterative uses O(1) space; Recursive uses O(log n).", "Watch out for infinite loops.", "Binary Search on Answer."],
  },
  {
    id: "binary-search-on-answer",
    title: "12. Binary Search on Answer",
    category: "Intermediate",
    difficulty: "Hard",
    icon: "🎯",
    shortDesc: "Optimize minimum/maximum constraints.",
    tutorialLink: "https://www.geeksforgeeks.org/binary-search-on-answer/",
    theory: `### 1. Core Concepts
Instead of searching an array, we search a range of possible answers.
- Search Space: Min possible answer to Max possible answer.
- Feasibility Function: Checks if a potential answer is valid.
- Monotonic Property: If an answer works, all larger/smaller answers also work.
- Objective: Find the minimum possible maximum value (e.g., Allocate Pages).

### 2. How It Works
Example: Allocate Minimum Pages. \`Pages = [10, 20, 30, 40]\`, Students = 2.
- Search Space: Min = 40, Max = 100.
- Mid = 70. Feasibility: Can we allocate books such that no student gets > 70? Yes.
- Since it works, we try smaller (move right pointer).`,
    complexity: [
      { op: "Feasibility check", time: "O(N)", space: "O(1)" },
      { op: "Binary search iterations", time: "O(log R)", space: "O(1)" },
      { op: "Overall time", time: "O(N log R)", space: "O(1)" },
    ],
    problems: {
      Easy: ["Square root of an integer.", "Smallest divisor given a threshold."],
      Medium: ["Koko Eating Bananas.", "Capacity to Ship Packages Within D Days.", "Split Array Largest Sum."],
      Hard: ["Aggressive Cows.", "Allocate Minimum Number of Pages.", "Painter's Partition Problem."],
    },
    codeExamples: {
      python: "def allocate_pages(arr, students):\n    def can_allocate(limit):\n        count, pages = 1, 0\n        for book in arr:\n            if book > limit: return False\n            if pages + book > limit:\n                count += 1\n                pages = book\n            else: pages += book\n        return count <= students\n\n    left, right = max(arr), sum(arr)\n    ans = right\n    while left <= right:\n        mid = (left + right) // 2\n        if can_allocate(mid):\n            ans = mid\n            right = mid - 1\n        else: left = mid + 1\n    return ans",
      cpp: "bool canAllocate(int arr[], int n, int students, int limit) {\n    int count = 1, pages = 0;\n    for (int i = 0; i < n; i++) {\n        if (arr[i] > limit) return false;\n        if (pages + arr[i] > limit) { count++; pages = arr[i]; }\n        else pages += arr[i];\n    }\n    return count <= students;\n}",
      java: "boolean canAllocate(int[] arr, int students, int limit) {\n    int count = 1, pages = 0;\n    for (int book : arr) {\n        if (book > limit) return false;\n        if (pages + book > limit) { count++; pages = book; }\n        else pages += book;\n    }\n    return count <= students;\n}",
      js: "function canAllocate(arr, students, limit) {\n  let count = 1, pages = 0;\n  for (const book of arr) {\n    if (book > limit) return false;\n    if (pages + book > limit) { count++; pages = book; }\n    else pages += book;\n  }\n  return count <= students;\n}",
    },
    interviewPoints: ["Identify monotonic answer space.", "Define min/max possible answers.", "Write a feasibility function.", "Overall time: O(N log R)."],
  },
  {
    id: "fast-slow-pointers",
    title: "13. Fast & Slow Pointers",
    category: "Intermediate",
    difficulty: "Medium",
    icon: "🐢🐇",
    shortDesc: "Tortoise and Hare algorithm for cycles.",
    tutorialLink: "https://www.geeksforgeeks.org/floyds-cycle-finding-algorithm/",
    theory: `### 1. Core Concepts
Also known as **Tortoise and Hare**. Used to find cycles and middle nodes.
- Slow Pointer: Moves 1 step.
- Fast Pointer: Moves 2 steps.
- Cycle Detection: If slow == fast, a cycle exists.
- Middle Node: When fast reaches end, slow is at middle.
- Cycle Start: Find the node where cycle begins.

### 2. How It Works
1. Fast moves 2 steps, slow moves 1.
2. If they meet, there is a cycle.
3. To find the start, reset slow to head. Move both 1 step until they meet again.`,
    complexity: [
      { op: "Cycle detection", time: "O(N)", space: "O(1)" },
      { op: "Middle node", time: "O(N)", space: "O(1)" },
    ],
    problems: {
      Easy: ["Middle of the Linked List.", "Linked List Cycle.", "Find length of linked list."],
      Medium: ["Linked List Cycle II.", "Happy Number.", "Remove Nth Node From End.", "Palindrome Linked List."],
      Hard: ["Reorder List.", "Find the Duplicate Number.", "Detect and remove cycle."],
    },
    codeExamples: {
      python: "def has_cycle(head):\n    slow = fast = head\n    while fast and fast.next:\n        slow = slow.next\n        fast = fast.next.next\n        if slow == fast: return True\n    return False",
      cpp: "bool hasCycle(ListNode *head) {\n    ListNode *slow = head, *fast = head;\n    while (fast && fast->next) {\n        slow = slow->next;\n        fast = fast->next->next;\n        if (slow == fast) return true;\n    }\n    return false;\n}",
      java: "boolean hasCycle(ListNode head) {\n    ListNode slow = head, fast = head;\n    while (fast != null && fast.next != null) {\n        slow = slow.next;\n        fast = fast.next.next;\n        if (slow == fast) return true;\n    }\n    return false;\n}",
      js: "function hasCycle(head) {\n  let slow = head, fast = head;\n  while (fast && fast.next) {\n    slow = slow.next;\n    fast = fast.next.next;\n    if (slow === fast) return true;\n  }\n  return false;\n}",
    },
    interviewPoints: ["Fast pointer must check fast and fast.next.", "Provides O(1) extra space.", "Understand math behind finding cycle start."],
  },
  {
    id: "linked-list-patterns",
    title: "14. Linked List Patterns",
    category: "Intermediate",
    difficulty: "Medium",
    icon: "🔗",
    shortDesc: "Reversal, merging, cycle detection.",
    tutorialLink: "https://www.geeksforgeeks.org/linked-list-data-structure/",
    theory: `### 1. Core Concepts
- Node contains data and next pointer.
- Singly / Doubly / Circular Linked Lists.
- Dummy Node simplifies head insertion/deletion.
- Reversal: O(N)
- Merging: Combining sorted lists.

### 2. Reverse a Linked List
\`\`\`python
def reverse_list(head):
    prev, curr = None, head
    while curr:
        nxt = curr.next
        curr.next = prev
        prev = curr
        curr = nxt
    return prev
\`\`\``,
    complexity: [
      { op: "Access by index", time: "O(N)", space: "O(1)" },
      { op: "Search", time: "O(N)", space: "O(1)" },
      { op: "Insert at head", time: "O(1)", space: "O(1)" },
      { op: "Reverse", time: "O(N)", space: "O(1)" },
    ],
    problems: {
      Easy: ["Reverse Linked List.", "Middle of Linked List.", "Delete a Node.", "Merge Two Sorted Lists."],
      Medium: ["Add Two Numbers.", "Remove Nth Node From End.", "Reorder List.", "Odd Even Linked List."],
      Hard: ["Reverse Nodes in K-Group.", "Merge K Sorted Lists.", "Copy List with Random Pointer."],
    },
    codeExamples: {
      python: "class Node:\n    def __init__(self, data):\n        self.data = data\n        self.next = None\n\ndef reverse(head):\n    prev, curr = None, head\n    while curr:\n        nxt = curr.next\n        curr.next = prev\n        prev = curr\n        curr = nxt\n    return prev",
      cpp: "struct Node {\n    int data;\n    Node* next;\n};\nNode* reverse(Node* head) {\n    Node *prev = nullptr, *curr = head;\n    while (curr) {\n        Node* nxt = curr->next;\n        curr->next = prev;\n        prev = curr;\n        curr = nxt;\n    }\n    return prev;\n}",
      java: "class Node {\n    int data;\n    Node next;\n}\nNode reverse(Node head) {\n    Node prev = null, curr = head;\n    while (curr != null) {\n        Node nxt = curr.next;\n        curr.next = prev;\n        prev = curr;\n        curr = nxt;\n    }\n    return prev;\n}",
      js: "class Node {\n  constructor(data) {\n    this.data = data;\n    this.next = null;\n  }\n}\nfunction reverse(head) {\n  let prev = null, curr = head;\n  while (curr) {\n    const nxt = curr.next;\n    curr.next = prev;\n    prev = curr;\n    curr = nxt;\n  }\n  return prev;\n}",
    },
    interviewPoints: ["Use dummy nodes to avoid edge cases.", "Reversing takes O(N).", "Understand memory allocation."],
  },
  {
    id: "stack-patterns",
    title: "15. Stack Patterns",
    category: "Intermediate",
    difficulty: "Medium",
    icon: "📚",
    shortDesc: "LIFO structure, balancing, expression eval.",
    tutorialLink: "https://www.geeksforgeeks.org/stack-data-structure/",
    theory: `### 1. Core Concepts
- LIFO (Last In First Out).
- Push / Pop / Peek / isEmpty.
- Balanced Parentheses.
- Expression Evaluation (Infix, Postfix, Prefix).

### 2. Balanced Parentheses
\`\`\`python
def is_balanced(s):
    stack = []
    pairs = {')': '(', '}': '{', ']': '['}
    for ch in s:
        if ch in "({[": stack.append(ch)
        elif ch in ")}]":
            if not stack or stack[-1] != pairs[ch]: return False
            stack.pop()
    return len(stack) == 0
\`\`\``,
    complexity: [
      { op: "Push", time: "O(1)", space: "O(1)" },
      { op: "Pop", time: "O(1)", space: "O(1)" },
      { op: "Peek", time: "O(1)", space: "O(1)" },
      { op: "Search", time: "O(N)", space: "O(1)" },
    ],
    problems: {
      Easy: ["Implement Stack using Arrays.", "Valid Parentheses.", "Min Stack."],
      Medium: ["Evaluate Reverse Polish Notation.", "Daily Temperatures.", "Next Greater Element."],
      Hard: ["Largest Rectangle in Histogram.", "Maximal Rectangle.", "Basic Calculator."],
    },
    codeExamples: {
      python: "stack = []\nstack.append(10)\nstack.append(20)\nprint(stack.pop())",
      cpp: "stack<int> s;\ns.push(10);\ns.push(20);\ncout << s.top();\ns.pop();",
      java: "Stack<Integer> s = new Stack<>();\ns.push(10);\ns.push(20);\nSystem.out.println(s.peek());\ns.pop();",
      js: "const stack = [];\nstack.push(10);\nstack.push(20);\nconsole.log(stack.pop());",
    },
    interviewPoints: ["Stack follows LIFO.", "Push/pop are O(1).", "Recursion uses call stack.", "Difference between stack and queue."],
  },
  {
    id: "queue-patterns",
    title: "16. Queue Patterns",
    category: "Intermediate",
    difficulty: "Medium",
    icon: "🚶‍♂️",
    shortDesc: "FIFO structure, BFS, circular queues.",
    tutorialLink: "https://www.geeksforgeeks.org/queue-data-structure/",
    theory: `### 1. Core Concepts
- FIFO (First In First Out).
- Enqueue / Dequeue / Front / Rear.
- Circular Queue: Reuses array space.
- Deque: Double-ended queue.
- BFS: Uses queue to explore graphs.

### 2. Queue Using Deque (Python)
\`\`\`python
from collections import deque
queue = deque()
queue.append(10)
queue.append(20)
print(queue.popleft())
\`\`\``,
    complexity: [
      { op: "Enqueue", time: "O(1)", space: "O(1)" },
      { op: "Dequeue", time: "O(1)", space: "O(1)" },
      { op: "Front", time: "O(1)", space: "O(1)" },
      { op: "Search", time: "O(N)", space: "O(1)" },
    ],
    problems: {
      Easy: ["Implement Queue using Array.", "Implement Stack using Queues."],
      Medium: ["Design Circular Queue.", "Rotting Oranges.", "Binary Tree Level Order Traversal."],
      Hard: ["Sliding Window Maximum.", "Shortest Path in Binary Matrix.", "Design Task Scheduler."],
    },
    codeExamples: {
      python: "from collections import deque\nq = deque()\nq.append(10)\nq.append(20)\nprint(q.popleft())",
      cpp: "queue<int> q;\nq.push(10);\nq.push(20);\ncout << q.front();\nq.pop();",
      java: "Queue<Integer> q = new LinkedList<>();\nq.offer(10);\nq.offer(20);\nSystem.out.println(q.peek());\nq.poll();",
      js: "const queue = [];\nqueue.push(10);\nqueue.push(20);\nconsole.log(queue.shift());",
    },
    interviewPoints: ["Queue follows FIFO.", "Enqueue/dequeue are O(1).", "Circular queues prevent wasted space."],
  },
  {
    id: "monotonic-stack",
    title: "17. Monotonic Stack",
    category: "Intermediate",
    difficulty: "Hard",
    icon: "📉",
    shortDesc: "Next greater/smaller element patterns.",
    tutorialLink: "https://www.geeksforgeeks.org/introduction-to-monotonic-stack/",
    theory: `### 1. Core Concepts
- Monotonic Increasing Stack
- Monotonic Decreasing Stack
- Next Greater / Smaller Element
- Histogram / Largest Rectangle
- Stock Span

### 2. Next Greater Element
\`\`\`python
def next_greater(arr):
    stack, res = [], [-1] * len(arr)
    for i in range(len(arr)):
        while stack and arr[i] > arr[stack[-1]]:
            idx = stack.pop()
            res[idx] = arr[i]
        stack.append(i)
    return res
\`\`\``,
    complexity: [{ op: "Overall algorithm", time: "O(N)", space: "O(N)" }],
    problems: {
      Easy: ["Next Greater Element I.", "Daily Temperatures."],
      Medium: ["Online Stock Span.", "Asteroid Collision.", "Remove K Digits."],
      Hard: ["Largest Rectangle in Histogram.", "Maximal Rectangle.", "Trapping Rain Water."],
    },
    codeExamples: {
      python: "def next_greater(arr):\n    stack = []\n    res = [-1] * len(arr)\n    for i in range(len(arr)):\n        while stack and arr[i] > arr[stack[-1]]:\n            idx = stack.pop()\n            res[idx] = arr[i]\n        stack.append(i)\n    return res",
      cpp: "vector<int> nextGreater(vector<int>& arr) {\n    stack<int> s;\n    vector<int> res(arr.size(), -1);\n    for (int i = 0; i < arr.size(); i++) {\n        while (!s.empty() && arr[i] > arr[s.top()]) {\n            res[s.top()] = arr[i];\n            s.pop();\n        }\n        s.push(i);\n    }\n    return res;\n}",
      java: "int[] nextGreater(int[] arr) {\n    Stack<Integer> stack = new Stack<>();\n    int[] res = new int[arr.length];\n    Arrays.fill(res, -1);\n    for (int i = 0; i < arr.length; i++) {\n        while (!stack.isEmpty() && arr[i] > arr[stack.peek()]) {\n            res[stack.pop()] = arr[i];\n        }\n        stack.push(i);\n    }\n    return res;\n}",
      js: "function nextGreater(arr) {\n  const stack = [], res = new Array(arr.length).fill(-1);\n  for (let i = 0; i < arr.length; i++) {\n    while (stack.length && arr[i] > arr[stack[stack.length - 1]]) {\n      res[stack.pop()] = arr[i];\n    }\n    stack.push(i);\n  }\n  return res;\n}",
    },
    interviewPoints: ["Maintains sorted order.", "Store indices.", "Each element pushed/popped once.", "Usually O(N)."],
  },
  {
    id: "monotonic-queue",
    title: "18. Monotonic Queue",
    category: "Intermediate",
    difficulty: "Hard",
    icon: "📊",
    shortDesc: "Sliding window max/min using deque.",
    tutorialLink: "https://www.geeksforgeeks.org/sliding-window-maximum-maximum-of-all-subarrays-of-size-k/",
    theory: `### 1. Core Concepts
- Deque (double-ended queue).
- Sliding Window Maximum.
- Front Removal (outside window).
- Back Removal (not useful).

### 2. Sliding Window Maximum
\`\`\`python
from collections import deque

def max_sliding_window(arr, k):
    dq, result = deque(), []
    for i in range(len(arr)):
        while dq and dq[0] <= i - k: dq.popleft()
        while dq and arr[dq[-1]] <= arr[i]: dq.pop()
        dq.append(i)
        if i >= k - 1: result.append(arr[dq[0]])
    return result
\`\`\``,
    complexity: [{ op: "Overall", time: "O(N)", space: "O(K)" }],
    problems: {
      Easy: ["Maximum in Every Window."],
      Medium: ["Sliding Window Maximum.", "First Negative Integer in Every Window.", "Shortest Subarray with Sum at Least K."],
      Hard: ["Constrained Subsequence Sum.", "Continuous Subarrays."],
    },
    codeExamples: {
      python: "from collections import deque\ndef max_window(arr, k):\n    dq, res = deque(), []\n    for i in range(len(arr)):\n        while dq and dq[0] <= i - k: dq.popleft()\n        while dq and arr[dq[-1]] <= arr[i]: dq.pop()\n        dq.append(i)\n        if i >= k - 1: res.append(arr[dq[0]])\n    return res",
      cpp: "vector<int> maxWindow(vector<int>& arr, int k) {\n    deque<int> dq;\n    vector<int> res;\n    for (int i = 0; i < arr.size(); i++) {\n        if (!dq.empty() && dq.front() <= i - k) dq.pop_front();\n        while (!dq.empty() && arr[dq.back()] <= arr[i]) dq.pop_back();\n        dq.push_back(i);\n        if (i >= k - 1) res.push_back(arr[dq.front()]);\n    }\n    return res;\n}",
      java: "int[] maxWindow(int[] arr, int k) {\n    Deque<Integer> dq = new LinkedList<>();\n    int[] res = new int[arr.length - k + 1];\n    int idx = 0;\n    for (int i = 0; i < arr.length; i++) {\n        if (!dq.isEmpty() && dq.peekFirst() <= i - k) dq.pollFirst();\n        while (!dq.isEmpty() && arr[dq.peekLast()] <= arr[i]) dq.pollLast();\n        dq.offerLast(i);\n        if (i >= k - 1) res[idx++] = arr[dq.peekFirst()];\n    }\n    return res;\n}",
      js: "function maxWindow(arr, k) {\n  const dq = [], res = [];\n  for (let i = 0; i < arr.length; i++) {\n    if (dq.length && dq[0] <= i - k) dq.shift();\n    while (dq.length && arr[dq[dq.length - 1]] <= arr[i]) dq.pop();\n    dq.push(i);\n    if (i >= k - 1) res.push(arr[dq[0]]);\n  }\n  return res;\n}",
    },
    interviewPoints: ["Use deque for candidate indices.", "Remove expired from front.", "Remove unnecessary from back.", "O(N) overall."],
  }
];