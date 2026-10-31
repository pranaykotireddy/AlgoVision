export const TOPICS_6 = [
  {
    id: "segment-tree",
    title: "40. Segment Tree",
    category: "Advanced",
    difficulty: "Hard",
    icon: "🌲",
    shortDesc: "Range queries and point/range updates in O(log N).",
    tutorialLink: "https://www.geeksforgeeks.org/segment-tree-data-structure/",
    theory: `### 1. Core Concepts
- Tree over array ranges; each node stores an aggregate (sum, min, max).
- Build: O(N), Query: O(log N), Update: O(log N).
- Point update vs range update (lazy propagation).
- Used for range sum, range min/max, range GCD.
- Fenwick Tree (BIT) is simpler for prefix-sum range queries.

### 2. Code Implementation (Range Sum Segment Tree)
\`\`\`python
class SegTree:
    def __init__(self, arr):
        self.n = len(arr)
        self.tree = [0] * (4 * self.n)
        self._build(arr, 0, 0, self.n - 1)

    def _build(self, arr, node, l, r):
        if l == r:
            self.tree[node] = arr[l]
            return
        mid = (l + r) // 2
        self._build(arr, 2*node+1, l, mid)
        self._build(arr, 2*node+2, mid+1, r)
        self.tree[node] = self.tree[2*node+1] + self.tree[2*node+2]

    def update(self, idx, val, node=0, l=0, r=None):
        if r is None: r = self.n - 1
        if l == r:
            self.tree[node] = val
            return
        mid = (l + r) // 2
        if idx <= mid:
            self.update(idx, val, 2*node+1, l, mid)
        else:
            self.update(idx, val, 2*node+2, mid+1, r)
        self.tree[node] = self.tree[2*node+1] + self.tree[2*node+2]

    def query(self, ql, qr, node=0, l=0, r=None):
        if r is None: r = self.n - 1
        if qr < l or r < ql:
            return 0
        if ql <= l and r <= qr:
            return self.tree[node]
        mid = (l + r) // 2
        return self.query(ql, qr, 2*node+1, l, mid) + self.query(ql, qr, 2*node+2, mid+1, r)
\`\`\``,
    complexity: [
      { op: "Build", time: "O(N)", space: "O(N)" },
      { op: "Query", time: "O(log N)", space: "O(log N)" },
      { op: "Update", time: "O(log N)", space: "O(log N)" },
    ],
    problems: {
      Easy: ["Range Sum Query - Immutable."],
      Medium: ["Range Sum Query - Mutable.", "Range Minimum Query.", "Count of Smaller Numbers After Self."],
      Hard: ["Range Module.", "Falling Squares.", "My Calendar III.", "Number of Longest Increasing Subsequence."],
    },
    codeExamples: {
      python: "class NumArray:\n    def __init__(self, nums):\n        self.n = len(nums)\n        self.tree = [0] * (4 * self.n)\n        self._build(nums, 0, 0, self.n - 1)\n    def _build(self, a, node, l, r):\n        if l == r: self.tree[node] = a[l]; return\n        m = (l + r) // 2\n        self._build(a, 2*node+1, l, m)\n        self._build(a, 2*node+2, m+1, r)\n        self.tree[node] = self.tree[2*node+1] + self.tree[2*node+2]",
      cpp: "class SegTree {\n    vector<int> tree;\n    int n;\n    void build(vector<int>& a, int node, int l, int r) {\n        if (l == r) { tree[node] = a[l]; return; }\n        int m = (l + r) / 2;\n        build(a, 2*node+1, l, m);\n        build(a, 2*node+2, m+1, r);\n        tree[node] = tree[2*node+1] + tree[2*node+2];\n    }\npublic:\n    SegTree(vector<int>& a) : n(a.size()) {\n        tree.resize(4*n);\n        build(a, 0, 0, n-1);\n    }\n};",
      java: "class SegTree {\n    int[] tree;\n    int n;\n    SegTree(int[] a) {\n        n = a.length;\n        tree = new int[4*n];\n        build(a, 0, 0, n-1);\n    }\n    void build(int[] a, int node, int l, int r) {\n        if (l == r) { tree[node] = a[l]; return; }\n        int m = (l + r) / 2;\n        build(a, 2*node+1, l, m);\n        build(a, 2*node+2, m+1, r);\n        tree[node] = tree[2*node+1] + tree[2*node+2];\n    }\n}",
      js: "class SegTree {\n  constructor(a) {\n    this.n = a.length;\n    this.tree = new Array(4 * this.n).fill(0);\n    this.build(a, 0, 0, this.n - 1);\n  }\n  build(a, node, l, r) {\n    if (l === r) { this.tree[node] = a[l]; return; }\n    const m = Math.floor((l + r) / 2);\n    this.build(a, 2*node+1, l, m);\n    this.build(a, 2*node+2, m+1, r);\n    this.tree[node] = this.tree[2*node+1] + this.tree[2*node+2];\n  }\n}",
    },
    interviewPoints: ["Segment tree gives O(log N) range queries.", "Lazy propagation enables O(log N) range updates.", "Fenwick tree is simpler but limited to prefix-based queries.", "Tree array size: 4 × N is safe."],
  },
  {
    id: "fenwick-tree",
    title: "41. Fenwick Tree (BIT)",
    category: "Advanced",
    difficulty: "Hard",
    icon: "📈",
    shortDesc: "Prefix sums with point updates in O(log N).",
    tutorialLink: "https://www.geeksforgeeks.org/binary-indexed-tree-or-fenwick-tree-2/",
    theory: `### 1. Core Concepts
- Binary Indexed Tree (BIT) supports point update + prefix query in O(log N).
- Uses the lowest set bit: i & (-i) to jump through indices.
- 1-indexed internally.
- Supports prefix sum, range sum, and frequency counting.
- Can be extended to range update / point query and 2D BIT.

### 2. Code Implementation
\`\`\`python
class Fenwick:
    def __init__(self, n):
        self.n = n
        self.bit = [0] * (n + 1)

    def update(self, i, delta):
        while i <= self.n:
            self.bit[i] += delta
            i += i & (-i)

    def query(self, i):
        s = 0
        while i > 0:
            s += self.bit[i]
            i -= i & (-i)
        return s

    def range_sum(self, l, r):
        return self.query(r) - self.query(l - 1)
\`\`\``,
    complexity: [
      { op: "Point Update", time: "O(log N)", space: "O(N)" },
      { op: "Prefix Query", time: "O(log N)", space: "O(N)" },
      { op: "Range Sum", time: "O(log N)", space: "O(N)" },
    ],
    problems: {
      Easy: ["Range Sum Query - Immutable."],
      Medium: ["Range Sum Query - Mutable.", "Count of Smaller Numbers After Self.", "Reverse Pairs."],
      Hard: ["Count of Range Sum.", "Create Sorted Array through Instructions.", "2D BIT Range Sum."],
    },
    codeExamples: {
      python: "class BIT:\n    def __init__(self, n):\n        self.n = n\n        self.t = [0] * (n + 1)\n    def update(self, i, d):\n        while i <= self.n:\n            self.t[i] += d\n            i += i & -i\n    def query(self, i):\n        s = 0\n        while i > 0:\n            s += self.t[i]\n            i -= i & -i\n        return s",
      cpp: "struct BIT {\n    vector<int> t;\n    int n;\n    BIT(int n) : n(n), t(n + 1, 0) {}\n    void update(int i, int d) {\n        for (; i <= n; i += i & -i) t[i] += d;\n    }\n    int query(int i) {\n        int s = 0;\n        for (; i > 0; i -= i & -i) s += t[i];\n        return s;\n    }\n};",
      java: "class BIT {\n    int[] t;\n    int n;\n    BIT(int n) { this.n = n; t = new int[n + 1]; }\n    void update(int i, int d) {\n        for (; i <= n; i += i & -i) t[i] += d;\n    }\n    int query(int i) {\n        int s = 0;\n        for (; i > 0; i -= i & -i) s += t[i];\n        return s;\n    }\n}",
      js: "class BIT {\n  constructor(n) { this.n = n; this.t = new Array(n + 1).fill(0); }\n  update(i, d) {\n    for (; i <= this.n; i += i & -i) this.t[i] += d;\n  }\n  query(i) {\n    let s = 0;\n    for (; i > 0; i -= i & -i) s += this.t[i];\n    return s;\n  }\n}",
    },
    interviewPoints: ["BIT is 1-indexed.", "i & (-i) isolates the lowest set bit.", "BIT is simpler and faster than a segment tree for prefix queries.", "Coordinate compression is often needed before using BIT."],
  },
  {
    id: "advanced-graphs",
    title: "42. Advanced Graph Algorithms",
    category: "Advanced",
    difficulty: "Hard",
    icon: "🧭",
    shortDesc: "SCC, bridges, articulation points, Euler path.",
    tutorialLink: "https://www.geeksforgeeks.org/graph-data-structure-and-algorithms/",
    theory: `### 1. Core Concepts
- Strongly Connected Components (SCC): Kosaraju, Tarjan
- Bridges and Articulation Points (Tarjan's DFS)
- Eulerian Path / Circuit
- Bipartite check (2-coloring)
- Biconnected components
- Flow algorithms (conceptual: Ford-Fulkerson, Edmonds-Karp)

### 2. Code Implementation (Tarjan's Bridges)
\`\`\`python
def find_bridges(n, adj):
    tin = [-1] * n
    low = [0] * n
    timer = [0]
    bridges = []

    def dfs(v, parent):
        tin[v] = low[v] = timer[0]
        timer[0] += 1
        for to in adj[v]:
            if to == parent:
                continue
            if tin[to] != -1:
                low[v] = min(low[v], tin[to])
            else:
                dfs(to, v)
                low[v] = min(low[v], low[to])
                if low[to] > tin[v]:
                    bridges.append((v, to))

    for i in range(n):
        if tin[i] == -1:
            dfs(i, -1)
    return bridges
\`\`\``,
    complexity: [
      { op: "SCC (Kosaraju/Tarjan)", time: "O(V + E)", space: "O(V + E)" },
      { op: "Bridges / Articulation Points", time: "O(V + E)", space: "O(V + E)" },
      { op: "Bipartite Check", time: "O(V + E)", space: "O(V)" },
    ],
    problems: {
      Easy: ["Is Graph Bipartite?"],
      Medium: ["Critical Connections in a Network.", "Course Schedule II."],
      Hard: ["Reconstruct Itinerary (Euler Path).", "Minimum Number of Days to Disconnect Island.", "Maximum Flow (Edmonds-Karp)."],
    },
    codeExamples: {
      python: "def is_bipartite(graph):\n    color = [-1] * len(graph)\n    from collections import deque\n    for s in range(len(graph)):\n        if color[s] != -1: continue\n        color[s] = 0\n        q = deque([s])\n        while q:\n            u = q.popleft()\n            for v in graph[u]:\n                if color[v] == -1:\n                    color[v] = 1 - color[u]\n                    q.append(v)\n                elif color[v] == color[u]:\n                    return False\n    return True",
      cpp: "bool isBipartite(vector<vector<int>>& g) {\n    vector<int> color(g.size(), -1);\n    for (int s = 0; s < g.size(); s++) {\n        if (color[s] != -1) continue;\n        color[s] = 0;\n        queue<int> q; q.push(s);\n        while (!q.empty()) {\n            int u = q.front(); q.pop();\n            for (int v : g[u]) {\n                if (color[v] == -1) { color[v] = 1 - color[u]; q.push(v); }\n                else if (color[v] == color[u]) return false;\n            }\n        }\n    }\n    return true;\n}",
      java: "boolean isBipartite(int[][] g) {\n    int[] color = new int[g.length];\n    Arrays.fill(color, -1);\n    for (int s = 0; s < g.length; s++) {\n        if (color[s] != -1) continue;\n        color[s] = 0;\n        Queue<Integer> q = new LinkedList<>();\n        q.offer(s);\n        while (!q.isEmpty()) {\n            int u = q.poll();\n            for (int v : g[u]) {\n                if (color[v] == -1) { color[v] = 1 - color[u]; q.offer(v); }\n                else if (color[v] == color[u]) return false;\n            }\n        }\n    }\n    return true;\n}",
      js: "function isBipartite(g) {\n  const color = new Array(g.length).fill(-1);\n  for (let s = 0; s < g.length; s++) {\n    if (color[s] !== -1) continue;\n    color[s] = 0;\n    const q = [s];\n    while (q.length) {\n      const u = q.shift();\n      for (const v of g[u]) {\n        if (color[v] === -1) { color[v] = 1 - color[u]; q.push(v); }\n        else if (color[v] === color[u]) return false;\n      }\n    }\n  }\n  return true;\n}",
    },
    interviewPoints: ["Bridges: low[child] > tin[parent].", "Articulation points: low[child] >= tin[parent].", "Eulerian path exists iff 0 or 2 nodes have odd degree.", "Bipartite graphs have no odd-length cycles."],
  },
  {
    id: "advanced-dp",
    title: "43. Advanced DP",
    category: "Advanced",
    difficulty: "Hard",
    icon: "🧠",
    shortDesc: "Bitmask DP, DP on trees, interval DP, digit DP.",
    tutorialLink: "https://www.geeksforgeeks.org/dynamic-programming/",
    theory: `### 1. Core Concepts
- Bitmask DP: state = subset mask (TSP, assignment problems)
- DP on Trees: rerooting, subtree aggregates
- Interval DP: dp[i][j] over subarrays (Burst Balloons, MCM)
- Digit DP: count numbers with a property in a range
- DP with state compression / profile DP

### 2. Code Implementation (Bitmask DP — TSP)
\`\`\`python
def tsp(dist):
    n = len(dist)
    INF = float('inf')
    dp = [[INF] * n for _ in range(1 << n)]
    dp[1][0] = 0  # start at city 0, mask = 1
    for mask in range(1 << n):
        for u in range(n):
            if dp[mask][u] == INF:
                continue
            for v in range(n):
                if mask & (1 << v):
                    continue
                new_mask = mask | (1 << v)
                dp[new_mask][v] = min(dp[new_mask][v], dp[mask][u] + dist[u][v])
    return min(dp[(1 << n) - 1][i] + dist[i][0] for i in range(n))
\`\`\``,
    complexity: [
      { op: "Bitmask DP", time: "O(2^N × N²)", space: "O(2^N × N)" },
      { op: "Interval DP", time: "O(N³)", space: "O(N²)" },
      { op: "Tree DP", time: "O(N)", space: "O(N)" },
    ],
    problems: {
      Easy: ["Partition Equal Subset Sum (bitmask view)."],
      Medium: ["Burst Balloons.", "Matrix Chain Multiplication.", "House Robber III.", "Shortest Path Visiting All Nodes."],
      Hard: ["TSP.", "Count Numbers with Unique Digits (digit DP).", "Minimum Cost to Merge Stones.", "Cherry Pickup II."],
    },
    codeExamples: {
      python: "def count_numbers_with_unique_digits(n):\n    if n == 0: return 1\n    count = 10\n    unique = 9\n    available = 9\n    for i in range(2, n + 1):\n        unique *= available\n        available -= 1\n        count += unique\n    return count",
      cpp: "int countNumbersWithUniqueDigits(int n) {\n    if (n == 0) return 1;\n    int count = 10, unique = 9, avail = 9;\n    for (int i = 2; i <= n; i++) {\n        unique *= avail--;\n        count += unique;\n    }\n    return count;\n}",
      java: "int countNumbersWithUniqueDigits(int n) {\n    if (n == 0) return 1;\n    int count = 10, unique = 9, avail = 9;\n    for (int i = 2; i <= n; i++) {\n        unique *= avail--;\n        count += unique;\n    }\n    return count;\n}",
      js: "function countNumbersWithUniqueDigits(n) {\n  if (n === 0) return 1;\n  let count = 10, unique = 9, avail = 9;\n  for (let i = 2; i <= n; i++) {\n    unique *= avail--;\n    count += unique;\n  }\n  return count;\n}",
    },
    interviewPoints: ["Bitmask DP is feasible for N ≤ 20.", "Interval DP: try every split point in [i, j).", "Tree DP: combine child results at each node.", "Digit DP uses (position, tight, state) parameters."],
  }
];