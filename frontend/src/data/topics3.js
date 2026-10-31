export const TOPICS_3 = [
  {
    id: "intervals",
    title: "19. Intervals",
    category: "Intermediate",
    difficulty: "Medium",
    icon: "⏱️",
    shortDesc: "Merge overlapping intervals, scheduling.",
    tutorialLink: "https://www.geeksforgeeks.org/merging-intervals/",
    theory: `### 1. Core Concepts
- Interval: [start, end].
- Overlapping / Non-overlapping.
- Merge Intervals.
- Insert Interval.
- Interval Scheduling.
- Meeting Rooms.

### 2. How It Works
\`[[1, 3], [2, 6], [8, 10], [9, 12]]\`
1. Sort by start: \`[[1, 3], [2, 6], [8, 10], [9, 12]]\`
2. Merge [1, 3] & [2, 6] → [1, 6].
3. Merge [8, 10] & [9, 12] → [8, 12].
Result: \`[[1, 6], [8, 12]]\`

### 3. Code Implementation
\`\`\`python
def merge_intervals(intervals):
    intervals.sort(key=lambda x: x[0])
    res = []
    for interval in intervals:
        if not res or res[-1][1] < interval[0]:
            res.append(interval)
        else:
            res[-1][1] = max(res[-1][1], interval[1])
    return res
\`\`\``,
    complexity: [
      { op: "Sorting", time: "O(N log N)", space: "O(1)" },
      { op: "Merging", time: "O(N)", space: "O(N)" },
    ],
    problems: {
      Easy: ["Check Two Intervals Overlap.", "Maximum Number of Meetings.", "Non-overlapping Intervals."],
      Medium: ["Merge Intervals.", "Insert Interval.", "Meeting Rooms II.", "Minimum Arrows to Burst Balloons."],
      Hard: ["Employee Free Time.", "My Calendar III.", "Minimum Interval to Include Each Query."],
    },
    codeExamples: {
      python: "def merge_intervals(intervals):\n    intervals.sort(key=lambda x: x[0])\n    result = []\n    for interval in intervals:\n        if not result or result[-1][1] < interval[0]:\n            result.append(interval)\n        else:\n            result[-1][1] = max(result[-1][1], interval[1])\n    return result",
      cpp: "vector<vector<int>> merge(vector<vector<int>>& intervals) {\n    sort(intervals.begin(), intervals.end());\n    vector<vector<int>> result;\n    for (auto& interval : intervals) {\n        if (result.empty() || result.back()[1] < interval[0]) result.push_back(interval);\n        else result.back()[1] = max(result.back()[1], interval[1]);\n    }\n    return result;\n}",
      java: "int[][] merge(int[][] intervals) {\n    Arrays.sort(intervals, (a, b) -> a[0] - b[0]);\n    List<int[]> result = new ArrayList<>();\n    for (int[] interval : intervals) {\n        if (result.isEmpty() || result.get(result.size()-1)[1] < interval[0])\n            result.add(interval);\n        else result.get(result.size()-1)[1] = Math.max(result.get(result.size()-1)[1], interval[1]);\n    }\n    return result.toArray(new int[result.size()][]);\n}",
      js: "function merge(intervals) {\n  intervals.sort((a, b) => a[0] - b[0]);\n  const result = [];\n  for (const interval of intervals) {\n    if (!result.length || result[result.length - 1][1] < interval[0])\n      result.push(interval);\n    else result[result.length - 1][1] = Math.max(result[result.length - 1][1], interval[1]);\n  }\n  return result;\n}",
    },
    interviewPoints: ["Most interval problems start with sorting.", "Usually sort by starting time.", "Compare current with last merged interval.", "Merging takes O(N log N)."],
  },
  {
    id: "cyclic-sort",
    title: "20. Cyclic Sort",
    category: "Intermediate",
    difficulty: "Medium",
    icon: "🔄",
    shortDesc: "In-place sorting for known range arrays.",
    tutorialLink: "https://www.geeksforgeeks.org/cycle-sort/",
    theory: `### 1. Core Concepts
Cyclic Sort is an in-place sorting technique for arrays with numbers in a known range (1 to N).
- Correct Index: value x belongs at index x - 1.
- Missing Number / Duplicate Number.

### 2. How It Works
Input: \`[3, 1, 5, 4, 2]\`
1 → Index 0, 2 → Index 1, 3 → Index 2, 4 → Index 3, 5 → Index 4.
Sorted: \`[1, 2, 3, 4, 5]\``,
    complexity: [{ op: "Time Complexity", time: "O(N)", space: "O(1)" }],
    problems: {
      Easy: ["Missing Number.", "Find All Numbers Disappeared.", "Find the Duplicate Number."],
      Medium: ["Find All Duplicates.", "First Missing Positive.", "Set Mismatch.", "Find the Corrupt Pair."],
      Hard: ["Find Multiple Missing.", "Find the Smallest Missing Positive."],
    },
    codeExamples: {
      python: "def cyclic_sort(arr):\n    i = 0\n    while i < len(arr):\n        correct = arr[i] - 1\n        if arr[i] != arr[correct]:\n            arr[i], arr[correct] = arr[correct], arr[i]\n        else:\n            i += 1\n    return arr",
      cpp: "void cyclicSort(vector<int>& arr) {\n    int i = 0, n = arr.size();\n    while (i < n) {\n        int correct = arr[i] - 1;\n        if (arr[i] != arr[correct]) swap(arr[i], arr[correct]);\n        else i++;\n    }\n}",
      java: "void cyclicSort(int[] arr) {\n    int i = 0;\n    while (i < arr.length) {\n        int correct = arr[i] - 1;\n        if (arr[i] != arr[correct]) {\n            int temp = arr[i];\n            arr[i] = arr[correct];\n            arr[correct] = temp;\n        } else i++;\n    }\n}",
      js: "function cyclicSort(arr) {\n  let i = 0;\n  while (i < arr.length) {\n    const correct = arr[i] - 1;\n    if (arr[i] !== arr[correct]) {\n      [arr[i], arr[correct]] = [arr[correct], arr[i]];\n    } else i++;\n  }\n  return arr;\n}",
    },
    interviewPoints: ["Works when elements belong to a known range.", "Standard cyclic sort takes O(N).", "Auxiliary space is O(1).", "Avoid invalid index access."],
  },
  {
    id: "recursion",
    title: "21. Recursion",
    category: "Advanced",
    difficulty: "Medium",
    icon: "🌀",
    shortDesc: "Base cases, recursive calls, call stack.",
    tutorialLink: "https://www.geeksforgeeks.org/introduction-to-recursion-2/",
    theory: `### 1. Core Concepts
- Recursive Function: Calls itself.
- Base Case: Stops recursion.
- Recursive Case: Smaller subproblem.
- Call Stack: Stores active function calls.
- Tail Recursion: Recursive call is last operation.

### 2. How It Works
Factorial of 5:
5 * factorial(4)
    4 * factorial(3)
        3 * factorial(2)
            2 * factorial(1)
                1`,
    complexity: [
      { op: "Factorial", time: "O(N)", space: "O(N)" },
      { op: "Fibonacci (naive)", time: "O(2^N)", space: "O(N)" },
    ],
    problems: {
      Easy: ["Print 1 to N.", "Factorial.", "Sum of N numbers.", "Reverse a string."],
      Medium: ["Fibonacci.", "Sum of digits.", "Palindrome check.", "Binary numbers."],
      Hard: ["Tower of Hanoi.", "All subsequences.", "Recursive multiplication.", "Recursive binary search."],
    },
    codeExamples: {
      python: "def factorial(n):\n    if n == 0 or n == 1: return 1\n    return n * factorial(n - 1)\n\ndef fibonacci(n):\n    if n <= 1: return n\n    return fibonacci(n - 1) + fibonacci(n - 2)",
      cpp: "int factorial(int n) {\n    if (n == 0 || n == 1) return 1;\n    return n * factorial(n - 1);\n}",
      java: "int factorial(int n) {\n    if (n == 0 || n == 1) return 1;\n    return n * factorial(n - 1);\n}",
      js: "function factorial(n) {\n  if (n === 0 || n === 1) return 1;\n  return n * factorial(n - 1);\n}",
    },
    interviewPoints: ["Every recursive function needs a base case.", "Understand the call stack.", "Excessive recursion can cause stack overflow.", "Understand tail recursion."],
  },
  {
    id: "backtracking",
    title: "22. Backtracking",
    category: "Advanced",
    difficulty: "Hard",
    icon: "↩️",
    shortDesc: "Subsets, permutations, N-Queens.",
    tutorialLink: "https://www.geeksforgeeks.org/backtracking-algorithms/",
    theory: `### 1. Core Concepts
- Decision Tree.
- Choose → Explore → Undo.
- Pruning invalid branches.
- Subsets / Permutations / Combinations.

### 2. How It Works
Subsets of [1, 2]: [], [1], [2], [1, 2]

### 3. Code Implementation
\`\`\`python
def subsets(arr):
    res = []
    def backtrack(index, current):
        if index == len(arr):
            res.append(current.copy())
            return
        current.append(arr[index])
        backtrack(index + 1, current)
        current.pop()
        backtrack(index + 1, current)
    backtrack(0, [])
    return res
\`\`\``,
    complexity: [
      { op: "Subsets", time: "O(N * 2^N)", space: "O(N)" },
      { op: "Permutations", time: "O(N * N!)", space: "O(N)" },
    ],
    problems: {
      Easy: ["Generate Subsets.", "Letter Case Permutation."],
      Medium: ["Permutations.", "Combination Sum.", "Generate Parentheses.", "Palindrome Partitioning."],
      Hard: ["N-Queens.", "Sudoku Solver.", "Word Break II.", "Expression Add Operators."],
    },
    codeExamples: {
      python: "def subsets(arr):\n    res = []\n    def backtrack(index, current):\n        if index == len(arr):\n            res.append(current.copy())\n            return\n        current.append(arr[index])\n        backtrack(index + 1, current)\n        current.pop()\n        backtrack(index + 1, current)\n    backtrack(0, [])\n    return res",
      cpp: "void backtrack(vector<int>& arr, int idx, vector<int>& curr, vector<vector<int>>& res) {\n    if (idx == arr.size()) { res.push_back(curr); return; }\n    curr.push_back(arr[idx]);\n    backtrack(arr, idx + 1, curr, res);\n    curr.pop_back();\n    backtrack(arr, idx + 1, curr, res);\n}",
      java: "void backtrack(int[] arr, int idx, List<Integer> curr, List<List<Integer>> res) {\n    if (idx == arr.length) { res.add(new ArrayList<>(curr)); return; }\n    curr.add(arr[idx]);\n    backtrack(arr, idx + 1, curr, res);\n    curr.remove(curr.size() - 1);\n    backtrack(arr, idx + 1, curr, res);\n}",
      js: "function subsets(arr) {\n  const res = [];\n  function backtrack(idx, curr) {\n    if (idx === arr.length) { res.push([...curr]); return; }\n    curr.push(arr[idx]);\n    backtrack(idx + 1, curr);\n    curr.pop();\n    backtrack(idx + 1, curr);\n  }\n  backtrack(0, []);\n  return res;\n}",
    },
    interviewPoints: ["Use recursion to explore choices.", "Always undo changes.", "Pruning avoids unnecessary exploration.", "Exponential time complexity."],
  },
  {
    id: "tree-dfs",
    title: "23. Tree DFS",
    category: "Advanced",
    difficulty: "Medium",
    icon: "🌳",
    shortDesc: "Preorder, inorder, postorder traversal.",
    tutorialLink: "https://www.geeksforgeeks.org/tree-traversals-inorder-preorder-and-postorder/",
    theory: `### 1. Core Concepts
- Preorder: Root → Left → Right.
- Inorder: Left → Root → Right.
- Postorder: Left → Right → Root.
- Recursive DFS vs Iterative DFS.

### 2. How It Works
Tree: 1 (L:2 (L:4, R:5), R:3)
- Preorder: 1, 2, 4, 5, 3
- Inorder: 4, 2, 5, 1, 3
- Postorder: 4, 5, 2, 3, 1`,
    complexity: [{ op: "Tree traversal", time: "O(N)", space: "O(H)" }],
    problems: {
      Easy: ["Inorder/Preorder/Postorder Traversal.", "Maximum Depth.", "Same Tree."],
      Medium: ["Path Sum.", "Diameter.", "LCA.", "Right Side View."],
      Hard: ["Maximum Path Sum.", "Serialize/Deserialize.", "Vertical Order Traversal."],
    },
    codeExamples: {
      python: "def preorder(root):\n    if not root: return\n    print(root.val)\n    preorder(root.left)\n    preorder(root.right)\n\ndef inorder(root):\n    if not root: return\n    inorder(root.left)\n    print(root.val)\n    inorder(root.right)",
      cpp: "void inorder(TreeNode* root) {\n    if (!root) return;\n    inorder(root->left);\n    cout << root->val;\n    inorder(root->right);\n}",
      java: "void inorder(TreeNode root) {\n    if (root == null) return;\n    inorder(root.left);\n    System.out.print(root.val);\n    inorder(root.right);\n}",
      js: "function inorder(root) {\n  if (!root) return;\n  inorder(root.left);\n  console.log(root.val);\n  inorder(root.right);\n}",
    },
    interviewPoints: ["Preorder visits root first.", "Inorder visits root between subtrees.", "Postorder visits root last.", "Inorder of BST gives sorted order."],
  },
  {
    id: "tree-bfs",
    title: "24. Tree BFS",
    category: "Advanced",
    difficulty: "Medium",
    icon: "🌲",
    shortDesc: "Level order traversal.",
    tutorialLink: "https://www.geeksforgeeks.org/level-order-tree-traversal/",
    theory: `### 1. Core Concepts
- Level Order traversal.
- Uses Queue.
- Zigzag Traversal.
- Left/Right View.

### 2. How It Works
Tree: 1 (L:2 (L:4, R:5), R:3 (R:6))
- Level 0: 1
- Level 1: 2, 3
- Level 2: 4, 5, 6`,
    complexity: [{ op: "Traversal", time: "O(N)", space: "O(W)" }],
    problems: {
      Easy: ["Level Order Traversal.", "Maximum Depth.", "Minimum Depth.", "Average of Levels."],
      Medium: ["Zigzag Level Order.", "Right Side View.", "Next Right Pointers."],
      Hard: ["Vertical Order Traversal.", "Maximum Width.", "Serialize/Deserialize."],
    },
    codeExamples: {
      python: "from collections import deque\ndef level_order(root):\n    if not root: return []\n    q, res = deque([root]), []\n    while q:\n        node = q.popleft()\n        res.append(node.val)\n        if node.left: q.append(node.left)\n        if node.right: q.append(node.right)\n    return res",
      cpp: "vector<int> levelOrder(TreeNode* root) {\n    if (!root) return {};\n    queue<TreeNode*> q; q.push(root);\n    vector<int> res;\n    while (!q.empty()) {\n        TreeNode* node = q.front(); q.pop();\n        res.push_back(node->val);\n        if (node->left) q.push(node->left);\n        if (node->right) q.push(node->right);\n    }\n    return res;\n}",
      java: "List<Integer> levelOrder(TreeNode root) {\n    List<Integer> res = new ArrayList<>();\n    if (root == null) return res;\n    Queue<TreeNode> q = new LinkedList<>();\n    q.offer(root);\n    while (!q.isEmpty()) {\n        TreeNode node = q.poll();\n        res.add(node.val);\n        if (node.left != null) q.offer(node.left);\n        if (node.right != null) q.offer(node.right);\n    }\n    return res;\n}",
      js: "function levelOrder(root) {\n  if (!root) return [];\n  const q = [root], res = [];\n  while (q.length) {\n    const node = q.shift();\n    res.push(node.val);\n    if (node.left) q.push(node.left);\n    if (node.right) q.push(node.right);\n  }\n  return res;\n}",
    },
    interviewPoints: ["BFS uses a queue.", "Queue space can reach O(N).", "Use `deque` in Python.", "BFS finds shortest paths in unweighted graphs."],
  },
  {
    id: "binary-search-tree",
    title: "25. Binary Search Tree",
    category: "Advanced",
    difficulty: "Medium",
    icon: "🔎",
    shortDesc: "Search, insert, delete in O(log N).",
    tutorialLink: "https://www.geeksforgeeks.org/binary-search-tree-data-structure/",
    theory: `### 1. Core Concepts
- Left subtree < Root < Right subtree.
- Search / Insertion / Deletion.
- Min = leftmost, Max = rightmost.
- Inorder traversal gives sorted values.
- Balanced BST height ~ log N.

### 2. BST Visualization
\`\`\`
      50
     /  \\
    30   70
   / \\   / \\
  20 40 60 80
\`\`\`
For node 50: Left = 20,30,40. Right = 60,70,80.`,
    complexity: [
      { op: "Search (Avg)", time: "O(log N)", space: "O(1)" },
      { op: "Insert (Avg)", time: "O(log N)", space: "O(1)" },
      { op: "Delete (Avg)", time: "O(log N)", space: "O(1)" },
      { op: "Search (Worst)", time: "O(N)", space: "O(1)" },
    ],
    problems: {
      Easy: ["Search in a BST.", "Insert into a BST.", "Min Distance Nodes.", "Range Sum of BST."],
      Medium: ["Validate BST.", "Delete Node in a BST.", "Kth Smallest.", "LCA of BST.", "Sorted Array to BST."],
      Hard: ["Recover BST.", "Serialize and Deserialize BST.", "Largest BST Subtree."],
    },
    codeExamples: {
      python: "def insert(root, val):\n    if not root: return TreeNode(val)\n    if val < root.val: root.left = insert(root.left, val)\n    else: root.right = insert(root.right, val)\n    return root\n\ndef search(root, target):\n    if not root or root.val == target: return root\n    if target < root.val: return search(root.left, target)\n    return search(root.right, target)",
      cpp: "TreeNode* insert(TreeNode* root, int val) {\n    if (!root) return new TreeNode(val);\n    if (val < root->val) root->left = insert(root->left, val);\n    else root->right = insert(root->right, val);\n    return root;\n}",
      java: "TreeNode insert(TreeNode root, int val) {\n    if (root == null) return new TreeNode(val);\n    if (val < root.val) root.left = insert(root.left, val);\n    else root.right = insert(root.right, val);\n    return root;\n}",
      js: "function insert(root, val) {\n  if (!root) return new TreeNode(val);\n  if (val < root.val) root.left = insert(root.left, val);\n  else root.right = insert(root.right, val);\n  return root;\n}",
    },
    interviewPoints: ["BST ordering property.", "Inorder gives sorted values.", "Skewed BST = O(N).", "Deletion: 3 cases (leaf, one child, two children)."],
  }
];