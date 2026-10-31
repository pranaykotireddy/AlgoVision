export const TOPICS_4 = [
  {
    id: "heap-top-k",
    title: "26. Heap & Top K",
    category: "Intermediate",
    difficulty: "Medium",
    icon: "⛰️",
    shortDesc: "Priority queue, Kth largest, K closest.",
    tutorialLink: "https://www.geeksforgeeks.org/heap-data-structure/",
    theory: `### 1. Core Concepts
- Min-Heap / Max-Heap
- Priority Queue operations
- Kth Largest / Smallest Element
- Top K Frequent Elements
- K Closest Points to Origin
- Merge K Sorted Lists / Arrays
- Heapify: O(N)

### 2. Code Implementation (Min-Heap in Python)
\`\`\`python
import heapq

arr = [5, 1, 8, 3, 9]
heapq.heapify(arr)
print(arr[0])  # smallest
heapq.heappush(arr, 2)
print(heapq.heappop(arr))  # 1
\`\`\``,
    complexity: [
      { op: "Heapify", time: "O(N)", space: "O(1)" },
      { op: "Push / Pop", time: "O(log N)", space: "O(1)" },
      { op: "Peek", time: "O(1)", space: "O(1)" },
    ],
    problems: {
      Easy: ["Kth Largest Element in a Stream.", "Last Stone Weight.", "Relative Ranks."],
      Medium: ["Kth Largest Element in an Array.", "Top K Frequent Elements.", "K Closest Points to Origin.", "Task Scheduler."],
      Hard: ["Merge K Sorted Lists.", "Find Median from Data Stream.", "Sliding Window Median."],
    },
    codeExamples: {
      python: "import heapq\narr = [3, 2, 1, 5, 6, 4]\nk = 2\nheap = arr[:k]\nheapq.heapify(heap)\nfor num in arr[k:]:\n    if num > heap[0]:\n        heapq.heapreplace(heap, num)\nprint(heap[0])",
      cpp: "priority_queue<int, vector<int>, greater<int>> minHeap;\nfor (int num : arr) {\n    minHeap.push(num);\n    if (minHeap.size() > k) minHeap.pop();\n}\nreturn minHeap.top();",
      java: "PriorityQueue<Integer> minHeap = new PriorityQueue<>();\nfor (int num : arr) {\n    minHeap.offer(num);\n    if (minHeap.size() > k) minHeap.poll();\n}\nreturn minHeap.peek();",
      js: "// JavaScript has no built-in heap; use a MinHeap class\nclass MinHeap { constructor() { this.h = []; } push(v) { this.h.push(v); this.h.sort((a,b)=>a-b); } pop() { return this.h.shift(); } peek() { return this.h[0]; } size() { return this.h.length; } }\nconst heap = new MinHeap();\nfor (const num of arr) { heap.push(num); if (heap.size() > k) heap.pop(); }\nconsole.log(heap.peek());",
    },
    interviewPoints: ["Use a min-heap of size K for Kth largest.", "Heapify is O(N), not O(N log N).", "Python `heapq` is a min-heap only; negate values for max-heap.", "Merge K sorted: push first element of each list, pop and push next."],
  },
  {
    id: "greedy",
    title: "27. Greedy Algorithms",
    category: "Intermediate",
    difficulty: "Medium",
    icon: "🎯",
    shortDesc: "Local optimal choices, interval scheduling, jump game.",
    tutorialLink: "https://www.geeksforgeeks.org/greedy-algorithms/",
    theory: `### 1. Core Concepts
- Greedy choice property
- Optimal substructure
- Interval Scheduling / Activity Selection
- Jump Game (reachability)
- Gas Station (circular greedy)
- Task Scheduler (cooldown)
- When greedy fails (use DP instead)

### 2. Code Implementation (Jump Game II)
\`\`\`python
def jump(nums):
    jumps = 0
    current_end = 0
    farthest = 0
    for i in range(len(nums) - 1):
        farthest = max(farthest, i + nums[i])
        if i == current_end:
            jumps += 1
            current_end = farthest
    return jumps
\`\`\``,
    complexity: [
      { op: "Jump Game", time: "O(N)", space: "O(1)" },
      { op: "Interval Scheduling", time: "O(N log N)", space: "O(1)" },
      { op: "Gas Station", time: "O(N)", space: "O(1)" },
    ],
    problems: {
      Easy: ["Assign Cookies.", "Best Time to Buy and Sell Stock II.", "Lemonade Change."],
      Medium: ["Jump Game.", "Jump Game II.", "Gas Station.", "Task Scheduler.", "Partition Labels."],
      Hard: ["Candy.", "Create Maximum Number.", "Minimum Number of Refueling Stops."],
    },
    codeExamples: {
      python: "def can_jump(nums):\n    farthest = 0\n    for i in range(len(nums)):\n        if i > farthest: return False\n        farthest = max(farthest, i + nums[i])\n    return True",
      cpp: "bool canJump(vector<int>& nums) {\n    int farthest = 0;\n    for (int i = 0; i < nums.size(); i++) {\n        if (i > farthest) return false;\n        farthest = max(farthest, i + nums[i]);\n    }\n    return true;\n}",
      java: "boolean canJump(int[] nums) {\n    int farthest = 0;\n    for (int i = 0; i < nums.length; i++) {\n        if (i > farthest) return false;\n        farthest = Math.max(farthest, i + nums[i]);\n    }\n    return true;\n}",
      js: "function canJump(nums) {\n  let farthest = 0;\n  for (let i = 0; i < nums.length; i++) {\n    if (i > farthest) return false;\n    farthest = Math.max(farthest, i + nums[i]);\n  }\n  return true;\n}",
    },
    interviewPoints: ["Greedy works when local optimal leads to global optimal.", "Always verify with counterexamples.", "Interval scheduling: sort by end time.", "If greedy fails, consider DP."],
  },
  {
    id: "dynamic-programming-1d",
    title: "28. 1D Dynamic Programming",
    category: "Advanced",
    difficulty: "Medium",
    icon: "📊",
    shortDesc: "Fibonacci, House Robber, Coin Change, LIS.",
    tutorialLink: "https://www.geeksforgeeks.org/dynamic-programming/",
    theory: `### 1. Core Concepts
- State definition
- Transition (recurrence)
- Base cases
- Order of computation
- Space optimization (rolling variables)
- Classic 1D patterns: Take/Skip, Unbounded Knapsack, LIS

### 2. Code Implementation (House Robber)
\`\`\`python
def rob(nums):
    prev2 = prev1 = 0
    for num in nums:
        prev2, prev1 = prev1, max(prev1, prev2 + num)
    return prev1
\`\`\``,
    complexity: [
      { op: "House Robber", time: "O(N)", space: "O(1)" },
      { op: "Coin Change", time: "O(N × amount)", space: "O(amount)" },
      { op: "LIS (DP)", time: "O(N²)", space: "O(N)" },
      { op: "LIS (Binary Search)", time: "O(N log N)", space: "O(N)" },
    ],
    problems: {
      Easy: ["Climbing Stairs.", "Fibonacci Number.", "Min Cost Climbing Stairs."],
      Medium: ["House Robber.", "House Robber II.", "Coin Change.", "Longest Increasing Subsequence.", "Word Break."],
      Hard: ["Maximum Product Subarray.", "Decode Ways II.", "Russian Doll Envelopes."],
    },
    codeExamples: {
      python: "def coin_change(coins, amount):\n    dp = [float('inf')] * (amount + 1)\n    dp[0] = 0\n    for coin in coins:\n        for i in range(coin, amount + 1):\n            dp[i] = min(dp[i], dp[i - coin] + 1)\n    return dp[amount] if dp[amount] != float('inf') else -1",
      cpp: "int coinChange(vector<int>& coins, int amount) {\n    vector<int> dp(amount + 1, amount + 1);\n    dp[0] = 0;\n    for (int coin : coins)\n        for (int i = coin; i <= amount; i++)\n            dp[i] = min(dp[i], dp[i - coin] + 1);\n    return dp[amount] > amount ? -1 : dp[amount];\n}",
      java: "int coinChange(int[] coins, int amount) {\n    int[] dp = new int[amount + 1];\n    Arrays.fill(dp, amount + 1);\n    dp[0] = 0;\n    for (int coin : coins)\n        for (int i = coin; i <= amount; i++)\n            dp[i] = Math.min(dp[i], dp[i - coin] + 1);\n    return dp[amount] > amount ? -1 : dp[amount];\n}",
      js: "function coinChange(coins, amount) {\n  const dp = new Array(amount + 1).fill(Infinity);\n  dp[0] = 0;\n  for (const coin of coins)\n    for (let i = coin; i <= amount; i++)\n      dp[i] = Math.min(dp[i], dp[i - coin] + 1);\n  return dp[amount] === Infinity ? -1 : dp[amount];\n}",
    },
    interviewPoints: ["Define state clearly: dp[i] = answer for prefix i.", "Take/Skip pattern: dp[i] = max(dp[i-1], dp[i-2] + nums[i]).", "LIS can be O(N log N) with patience sorting.", "Coin Change: unbounded knapsack, iterate coins outer or inner carefully."],
  },
  {
    id: "dynamic-programming-2d",
    title: "29. 2D Dynamic Programming",
    category: "Advanced",
    difficulty: "Hard",
    icon: "🧮",
    shortDesc: "Grid DP, LCS, Edit Distance, Knapsack.",
    tutorialLink: "https://www.geeksforgeeks.org/dynamic-programming/",
    theory: `### 1. Core Concepts
- 2D state: dp[i][j] usually represents prefix of two sequences or grid position
- Grid traversal: Unique Paths, Minimum Path Sum
- String DP: LCS, Edit Distance, Longest Palindromic Subsequence
- 0/1 Knapsack: dp[i][w]
- Space optimization: 1D array

### 2. Code Implementation (LCS)
\`\`\`python
def lcs(s1, s2):
    m, n = len(s1), len(s2)
    dp = [[0] * (n + 1) for _ in range(m + 1)]
    for i in range(1, m + 1):
        for j in range(1, n + 1):
            if s1[i-1] == s2[j-1]:
                dp[i][j] = 1 + dp[i-1][j-1]
            else:
                dp[i][j] = max(dp[i-1][j], dp[i][j-1])
    return dp[m][n]
\`\`\``,
    complexity: [
      { op: "Grid DP", time: "O(M × N)", space: "O(N)" },
      { op: "LCS / Edit Distance", time: "O(M × N)", space: "O(N)" },
      { op: "0/1 Knapsack", time: "O(N × W)", space: "O(W)" },
    ],
    problems: {
      Easy: ["Unique Paths.", "Minimum Path Sum.", "Longest Common Subsequence."],
      Medium: ["Edit Distance.", "Longest Palindromic Subsequence.", "Partition Equal Subset Sum.", "Target Sum."],
      Hard: ["Regular Expression Matching.", "Wildcard Matching.", "Distinct Subsequences.", "Burst Balloons."],
    },
    codeExamples: {
      python: "def min_path_sum(grid):\n    m, n = len(grid), len(grid[0])\n    dp = [0] * n\n    dp[0] = grid[0][0]\n    for j in range(1, n): dp[j] = dp[j-1] + grid[0][j]\n    for i in range(1, m):\n        dp[0] += grid[i][0]\n        for j in range(1, n):\n            dp[j] = min(dp[j], dp[j-1]) + grid[i][j]\n    return dp[-1]",
      cpp: "int minPathSum(vector<vector<int>>& grid) {\n    int m = grid.size(), n = grid[0].size();\n    vector<int> dp(n, 0);\n    dp[0] = grid[0][0];\n    for (int j = 1; j < n; j++) dp[j] = dp[j-1] + grid[0][j];\n    for (int i = 1; i < m; i++) {\n        dp[0] += grid[i][0];\n        for (int j = 1; j < n; j++)\n            dp[j] = min(dp[j], dp[j-1]) + grid[i][j];\n    }\n    return dp[n-1];\n}",
      java: "int minPathSum(int[][] grid) {\n    int m = grid.length, n = grid[0].length;\n    int[] dp = new int[n];\n    dp[0] = grid[0][0];\n    for (int j = 1; j < n; j++) dp[j] = dp[j-1] + grid[0][j];\n    for (int i = 1; i < m; i++) {\n        dp[0] += grid[i][0];\n        for (int j = 1; j < n; j++)\n            dp[j] = Math.min(dp[j], dp[j-1]) + grid[i][j];\n    }\n    return dp[n-1];\n}",
      js: "function minPathSum(grid) {\n  const m = grid.length, n = grid[0].length;\n  const dp = new Array(n).fill(0);\n  dp[0] = grid[0][0];\n  for (let j = 1; j < n; j++) dp[j] = dp[j-1] + grid[0][j];\n  for (let i = 1; i < m; i++) {\n    dp[0] += grid[i][0];\n    for (let j = 1; j < n; j++)\n      dp[j] = Math.min(dp[j], dp[j-1]) + grid[i][j];\n  }\n  return dp[n-1];\n}",
    },
    interviewPoints: ["2D DP can often be optimized to 1D.", "For knapsack, iterate capacity backwards to avoid reuse.", "LCS: if chars match, 1 + diagonal; else max(top, left).", "Edit Distance: insert, delete, replace."],
  },
  {
    id: "graph-bfs-dfs",
    title: "30. Graph BFS & DFS",
    category: "Advanced",
    difficulty: "Medium",
    icon: "🕸️",
    shortDesc: "Traversal, connected components, islands.",
    tutorialLink: "https://www.geeksforgeeks.org/graph-data-structure-and-algorithms/",
    theory: `### 1. Core Concepts
- Adjacency list vs matrix
- BFS: queue, shortest path in unweighted graphs
- DFS: stack/recursion, connectivity, cycle detection
- Grid as graph (4-directional / 8-directional)
- Number of Islands, Flood Fill, Rotting Oranges

### 2. Code Implementation (Number of Islands)
\`\`\`python
def num_islands(grid):
    if not grid: return 0
    rows, cols = len(grid), len(grid[0])
    count = 0
    def dfs(r, c):
        if r < 0 or c < 0 or r >= rows or c >= cols or grid[r][c] != '1':
            return
        grid[r][c] = '0'
        dfs(r+1, c); dfs(r-1, c); dfs(r, c+1); dfs(r, c-1)
    for r in range(rows):
        for c in range(cols):
            if grid[r][c] == '1':
                count += 1
                dfs(r, c)
    return count
\`\`\``,
    complexity: [
      { op: "BFS / DFS", time: "O(V + E)", space: "O(V)" },
      { op: "Grid traversal", time: "O(M × N)", space: "O(M × N)" },
    ],
    problems: {
      Easy: ["Flood Fill.", "Find if Path Exists in Graph."],
      Medium: ["Number of Islands.", "Rotting Oranges.", "Clone Graph.", "Pacific Atlantic Water Flow.", "Surrounded Regions."],
      Hard: ["Word Ladder.", "Shortest Path in Binary Matrix.", "Alien Dictionary."],
    },
    codeExamples: {
      python: "from collections import deque\ndef bfs(graph, start):\n    visited = set([start])\n    q = deque([start])\n    while q:\n        node = q.popleft()\n        for nei in graph[node]:\n            if nei not in visited:\n                visited.add(nei)\n                q.append(nei)\n    return visited",
      cpp: "void dfs(int node, vector<vector<int>>& adj, vector<bool>& vis) {\n    vis[node] = true;\n    for (int nei : adj[node])\n        if (!vis[nei]) dfs(nei, adj, vis);\n}",
      java: "void dfs(int node, List<List<Integer>> adj, boolean[] vis) {\n    vis[node] = true;\n    for (int nei : adj.get(node))\n        if (!vis[nei]) dfs(nei, adj, vis);\n}",
      js: "function dfs(node, adj, vis) {\n  vis[node] = true;\n  for (const nei of adj[node])\n    if (!vis[nei]) dfs(nei, adj, vis);\n}",
    },
    interviewPoints: ["BFS uses a queue; DFS uses recursion/stack.", "Grid problems: treat each cell as a node.", "Mark visited before enqueueing to avoid duplicates.", "BFS finds shortest path in unweighted graphs."],
  },
  {
    id: "topological-sort",
    title: "31. Topological Sort",
    category: "Advanced",
    difficulty: "Hard",
    icon: "🔗",
    shortDesc: "DAG ordering, course schedule, dependencies.",
    tutorialLink: "https://www.geeksforgeeks.org/topological-sorting/",
    theory: `### 1. Core Concepts
- Directed Acyclic Graph (DAG)
- Kahn's Algorithm (BFS with in-degree)
- DFS-based topological sort
- Cycle detection in directed graphs
- Course Schedule, Alien Dictionary

### 2. Code Implementation (Kahn's Algorithm)
\`\`\`python
from collections import deque
def topo_sort(n, edges):
    adj = [[] for _ in range(n)]
    indeg = [0] * n
    for u, v in edges:
        adj[u].append(v)
        indeg[v] += 1
    q = deque([i for i in range(n) if indeg[i] == 0])
    order = []
    while q:
        u = q.popleft()
        order.append(u)
        for v in adj[u]:
            indeg[v] -= 1
            if indeg[v] == 0:
                q.append(v)
    return order if len(order) == n else []
\`\`\``,
    complexity: [{ op: "Topological Sort", time: "O(V + E)", space: "O(V + E)" }],
    problems: {
      Easy: ["Find if Path Exists in Graph."],
      Medium: ["Course Schedule.", "Course Schedule II.", "Minimum Height Trees."],
      Hard: ["Alien Dictionary.", "Parallel Courses III.", "Sort Items by Groups Respecting Dependencies."],
    },
    codeExamples: {
      python: "from collections import deque\ndef can_finish(num, prereq):\n    adj = [[] for _ in range(num)]\n    indeg = [0] * num\n    for a, b in prereq:\n        adj[b].append(a)\n        indeg[a] += 1\n    q = deque([i for i in range(num) if indeg[i] == 0])\n    seen = 0\n    while q:\n        u = q.popleft(); seen += 1\n        for v in adj[u]:\n            indeg[v] -= 1\n            if indeg[v] == 0: q.append(v)\n    return seen == num",
      cpp: "bool canFinish(int n, vector<vector<int>>& pre) {\n    vector<vector<int>> adj(n);\n    vector<int> indeg(n, 0);\n    for (auto& p : pre) { adj[p[1]].push_back(p[0]); indeg[p[0]]++; }\n    queue<int> q;\n    for (int i = 0; i < n; i++) if (indeg[i] == 0) q.push(i);\n    int seen = 0;\n    while (!q.empty()) {\n        int u = q.front(); q.pop(); seen++;\n        for (int v : adj[u]) if (--indeg[v] == 0) q.push(v);\n    }\n    return seen == n;\n}",
      java: "boolean canFinish(int n, int[][] pre) {\n    List<List<Integer>> adj = new ArrayList<>();\n    for (int i = 0; i < n; i++) adj.add(new ArrayList<>());\n    int[] indeg = new int[n];\n    for (int[] p : pre) { adj.get(p[1]).add(p[0]); indeg[p[0]]++; }\n    Queue<Integer> q = new LinkedList<>();\n    for (int i = 0; i < n; i++) if (indeg[i] == 0) q.offer(i);\n    int seen = 0;\n    while (!q.isEmpty()) {\n        int u = q.poll(); seen++;\n        for (int v : adj.get(u)) if (--indeg[v] == 0) q.offer(v);\n    }\n    return seen == n;\n}",
      js: "function canFinish(n, pre) {\n  const adj = Array.from({length: n}, () => []);\n  const indeg = new Array(n).fill(0);\n  for (const [a, b] of pre) { adj[b].push(a); indeg[a]++; }\n  const q = [];\n  for (let i = 0; i < n; i++) if (indeg[i] === 0) q.push(i);\n  let seen = 0;\n  while (q.length) {\n    const u = q.shift(); seen++;\n    for (const v of adj[u]) if (--indeg[v] === 0) q.push(v);\n  }\n  return seen === n;\n}",
    },
    interviewPoints: ["Topological sort only works on DAGs.", "If result length < N, a cycle exists.", "Kahn's algorithm uses in-degree.", "DFS approach uses post-order and reverse."],
  },
  {
    id: "union-find",
    title: "32. Union-Find (DSU)",
    category: "Advanced",
    difficulty: "Medium",
    icon: "🔗",
    shortDesc: "Connected components, cycle detection, Kruskal.",
    tutorialLink: "https://www.geeksforgeeks.org/introduction-to-disjoint-set-data-structure-or-union-find-algorithm/",
    theory: `### 1. Core Concepts
- Parent array
- Path compression
- Union by rank / size
- Connected components
- Cycle detection in undirected graphs
- Kruskal's MST

### 2. Code Implementation
\`\`\`python
class DSU:
    def __init__(self, n):
        self.parent = list(range(n))
        self.rank = [0] * n
    def find(self, x):
        if self.parent[x] != x:
            self.parent[x] = self.find(self.parent[x])
        return self.parent[x]
    def union(self, x, y):
        px, py = self.find(x), self.find(y)
        if px == py: return False
        if self.rank[px] < self.rank[py]: px, py = py, px
        self.parent[py] = px
        if self.rank[px] == self.rank[py]: self.rank[px] += 1
        return True
\`\`\``,
    complexity: [{ op: "Find / Union", time: "O(α(N)) ≈ O(1)", space: "O(N)" }],
    problems: {
      Easy: ["Number of Provinces."],
      Medium: ["Redundant Connection.", "Accounts Merge.", "Number of Islands II.", "Graph Valid Tree."],
      Hard: ["Swim in Rising Water.", "Largest Component Size by Common Factor.", "Optimize Water Distribution in a Village."],
    },
    codeExamples: {
      python: "class DSU:\n    def __init__(self, n):\n        self.p = list(range(n))\n    def find(self, x):\n        if self.p[x] != x: self.p[x] = self.find(self.p[x])\n        return self.p[x]\n    def union(self, x, y):\n        self.p[self.find(x)] = self.find(y)",
      cpp: "int find(int x, vector<int>& p) {\n    if (p[x] != x) p[x] = find(p[x], p);\n    return p[x];\n}\nvoid unite(int x, int y, vector<int>& p) {\n    p[find(x, p)] = find(y, p);\n}",
      java: "int find(int x, int[] p) {\n    if (p[x] != x) p[x] = find(p[x], p);\n    return p[x];\n}\nvoid union(int x, int y, int[] p) {\n    p[find(x, p)] = find(y, p);\n}",
      js: "function find(x, p) {\n  if (p[x] !== x) p[x] = find(p[x], p);\n  return p[x];\n}\nfunction union(x, y, p) {\n  p[find(x, p)] = find(y, p);\n}",
    },
    interviewPoints: ["Path compression flattens the tree.", "Union by rank keeps tree shallow.", "Use DSU for dynamic connectivity.", "Kruskal's MST uses DSU."],
  },
  {
    id: "shortest-path",
    title: "33. Shortest Path",
    category: "Advanced",
    difficulty: "Hard",
    icon: "🛣️",
    shortDesc: "Dijkstra, Bellman-Ford, 0-1 BFS.",
    tutorialLink: "https://www.geeksforgeeks.org/shortest-path-algorithms-a-complete-guide/",
    theory: `### 1. Core Concepts
- Dijkstra: non-negative weights, min-heap
- Bellman-Ford: negative weights, detects negative cycles
- 0-1 BFS: edges weight 0 or 1, deque
- Floyd-Warshall: all-pairs, O(V³)
- Network Delay Time, Cheapest Flights Within K Stops

### 2. Code Implementation (Dijkstra)
\`\`\`python
import heapq
def dijkstra(graph, start):
    dist = {node: float('inf') for node in graph}
    dist[start] = 0
    pq = [(0, start)]
    while pq:
        d, u = heapq.heappop(pq)
        if d > dist[u]: continue
        for v, w in graph[u]:
            if dist[u] + w < dist[v]:
                dist[v] = dist[u] + w
                heapq.heappush(pq, (dist[v], v))
    return dist
\`\`\``,
    complexity: [
      { op: "Dijkstra (heap)", time: "O((V + E) log V)", space: "O(V + E)" },
      { op: "Bellman-Ford", time: "O(V × E)", space: "O(V)" },
      { op: "0-1 BFS", time: "O(V + E)", space: "O(V)" },
    ],
    problems: {
      Easy: ["Find the City With the Smallest Number of Neighbors."],
      Medium: ["Network Delay Time.", "Cheapest Flights Within K Stops.", "Path with Maximum Probability."],
      Hard: ["Path With Minimum Effort.", "Swim in Rising Water.", "Shortest Path Visiting All Nodes."],
    },
    codeExamples: {
      python: "import heapq\ndef network_delay(times, n, k):\n    adj = {i: [] for i in range(1, n+1)}\n    for u, v, w in times: adj[u].append((v, w))\n    dist = {i: float('inf') for i in range(1, n+1)}\n    dist[k] = 0\n    pq = [(0, k)]\n    while pq:\n        d, u = heapq.heappop(pq)\n        if d > dist[u]: continue\n        for v, w in adj[u]:\n            if d + w < dist[v]:\n                dist[v] = d + w\n                heapq.heappush(pq, (dist[v], v))\n    ans = max(dist.values())\n    return ans if ans < float('inf') else -1",
      cpp: "int networkDelayTime(vector<vector<int>>& times, int n, int k) {\n    vector<vector<pair<int,int>>> adj(n + 1);\n    for (auto& t : times) adj[t[0]].push_back({t[1], t[2]});\n    vector<int> dist(n + 1, INT_MAX);\n    dist[k] = 0;\n    priority_queue<pair<int,int>, vector<pair<int,int>>, greater<>> pq;\n    pq.push({0, k});\n    while (!pq.empty()) {\n        auto [d, u] = pq.top(); pq.pop();\n        if (d > dist[u]) continue;\n        for (auto [v, w] : adj[u])\n            if (d + w < dist[v]) { dist[v] = d + w; pq.push({dist[v], v}); }\n    }\n    int ans = 0;\n    for (int i = 1; i <= n; i++) ans = max(ans, dist[i]);\n    return ans == INT_MAX ? -1 : ans;\n}",
      java: "int networkDelayTime(int[][] times, int n, int k) {\n    List<List<int[]>> adj = new ArrayList<>();\n    for (int i = 0; i <= n; i++) adj.add(new ArrayList<>());\n    for (int[] t : times) adj.get(t[0]).add(new int[]{t[1], t[2]});\n    int[] dist = new int[n + 1];\n    Arrays.fill(dist, Integer.MAX_VALUE);\n    dist[k] = 0;\n    PriorityQueue<int[]> pq = new PriorityQueue<>((a, b) -> a[0] - b[0]);\n    pq.offer(new int[]{0, k});\n    while (!pq.isEmpty()) {\n        int[] cur = pq.poll();\n        int d = cur[0], u = cur[1];\n        if (d > dist[u]) continue;\n        for (int[] nei : adj.get(u))\n            if (d + nei[1] < dist[nei[0]]) { dist[nei[0]] = d + nei[1]; pq.offer(new int[]{dist[nei[0]], nei[0]}); }\n    }\n    int ans = 0;\n    for (int i = 1; i <= n; i++) ans = Math.max(ans, dist[i]);\n    return ans == Integer.MAX_VALUE ? -1 : ans;\n}",
      js: "function networkDelayTime(times, n, k) {\n  const adj = Array.from({length: n + 1}, () => []);\n  for (const [u, v, w] of times) adj[u].push([v, w]);\n  const dist = new Array(n + 1).fill(Infinity);\n  dist[k] = 0;\n  const pq = [[0, k]];\n  while (pq.length) {\n    pq.sort((a, b) => a[0] - b[0]);\n    const [d, u] = pq.shift();\n    if (d > dist[u]) continue;\n    for (const [v, w] of adj[u])\n      if (d + w < dist[v]) { dist[v] = d + w; pq.push([dist[v], v]); }\n  }\n  const ans = Math.max(...dist.slice(1));\n  return ans === Infinity ? -1 : ans;\n}",
    },
    interviewPoints: ["Dijkstra fails with negative weights.", "Bellman-Ford handles negative edges and detects negative cycles.", "0-1 BFS uses deque: push front for 0, back for 1.", "Grid shortest path with weights can use Dijkstra."],
  }
];