export const TOPICS_5 = [
  {
    id: "minimum-spanning-tree",
    title: "34. Minimum Spanning Tree",
    category: "Advanced",
    difficulty: "Hard",
    icon: "🌐",
    shortDesc: "Kruskal, Prim, connecting all nodes at min cost.",
    tutorialLink: "https://www.geeksforgeeks.org/minimum-spanning-tree/",
    theory: `### 1. Core Concepts
- Spanning Tree: connects all V vertices with exactly V-1 edges, no cycles.
- Minimum Spanning Tree (MST): spanning tree with minimum total edge weight.
- Kruskal's Algorithm: sort edges by weight, use DSU to avoid cycles.
- Prim's Algorithm: grow MST from a start node using a min-heap.
- Used in network design, clustering, approximation algorithms.

### 2. Code Implementation (Kruskal)
\`\`\`python
class DSU:
    def __init__(self, n):
        self.p = list(range(n))
    def find(self, x):
        if self.p[x] != x:
            self.p[x] = self.find(self.p[x])
        return self.p[x]
    def union(self, x, y):
        self.p[self.find(x)] = self.find(y)

def kruskal(n, edges):
    dsu = DSU(n)
    edges.sort(key=lambda e: e[2])
    mst, cost = [], 0
    for u, v, w in edges:
        if dsu.find(u) != dsu.find(v):
            dsu.union(u, v)
            mst.append((u, v, w))
            cost += w
    return mst, cost
\`\`\`

### 3. Prim's Algorithm
\`\`\`python
import heapq
def prim(graph, start):
    visited = set([start])
    heap = [(w, start, v) for v, w in graph[start]]
    heapq.heapify(heap)
    cost = 0
    while heap:
        w, u, v = heapq.heappop(heap)
        if v in visited: continue
        visited.add(v)
        cost += w
        for nei, wt in graph[v]:
            if nei not in visited:
                heapq.heappush(heap, (wt, v, nei))
    return cost
\`\`\``,
    complexity: [
      { op: "Kruskal", time: "O(E log E)", space: "O(V + E)" },
      { op: "Prim (heap)", time: "O((V + E) log V)", space: "O(V + E)" },
    ],
    problems: {
      Easy: ["Connecting Cities With Minimum Cost."],
      Medium: ["Min Cost to Connect All Points.", "Optimize Water Distribution in a Village.", "Find Critical and Pseudo-Critical Edges in MST."],
      Hard: ["Minimum Cost to Reach Destination in Time.", "Minimum Spanning Tree with Edge Constraints."],
    },
    codeExamples: {
      python: "def min_cost_connect_points(points):\n    n = len(points)\n    edges = []\n    for i in range(n):\n        for j in range(i+1, n):\n            d = abs(points[i][0]-points[j][0]) + abs(points[i][1]-points[j][1])\n            edges.append((d, i, j))\n    edges.sort()\n    p = list(range(n))\n    def find(x):\n        while p[x] != x:\n            p[x] = p[p[x]]; x = p[x]\n        return x\n    cost = 0\n    for d, u, v in edges:\n        ru, rv = find(u), find(v)\n        if ru != rv:\n            p[ru] = rv\n            cost += d\n    return cost",
      cpp: "int minCostConnectPoints(vector<vector<int>>& pts) {\n    int n = pts.size();\n    vector<tuple<int,int,int>> edges;\n    for (int i = 0; i < n; i++)\n        for (int j = i+1; j < n; j++)\n            edges.push_back({abs(pts[i][0]-pts[j][0]) + abs(pts[i][1]-pts[j][1]), i, j});\n    sort(edges.begin(), edges.end());\n    vector<int> p(n); iota(p.begin(), p.end(), 0);\n    function<int(int)> find = [&](int x) { return p[x] == x ? x : p[x] = find(p[x]); };\n    int cost = 0;\n    for (auto [w, u, v] : edges) {\n        int ru = find(u), rv = find(v);\n        if (ru != rv) { p[ru] = rv; cost += w; }\n    }\n    return cost;\n}",
      java: "int minCostConnectPoints(int[][] pts) {\n    int n = pts.length;\n    List<int[]> edges = new ArrayList<>();\n    for (int i = 0; i < n; i++)\n        for (int j = i+1; j < n; j++)\n            edges.add(new int[]{Math.abs(pts[i][0]-pts[j][0]) + Math.abs(pts[i][1]-pts[j][1]), i, j});\n    edges.sort((a, b) -> a[0] - b[0]);\n    int[] p = new int[n];\n    for (int i = 0; i < n; i++) p[i] = i;\n    int cost = 0;\n    for (int[] e : edges) {\n        int ru = find(p, e[1]), rv = find(p, e[2]);\n        if (ru != rv) { p[ru] = rv; cost += e[0]; }\n    }\n    return cost;\n}\nint find(int[] p, int x) { return p[x] == x ? x : (p[x] = find(p, p[x])); }",
      js: "function minCostConnectPoints(points) {\n  const n = points.length;\n  const edges = [];\n  for (let i = 0; i < n; i++)\n    for (let j = i+1; j < n; j++)\n      edges.push([Math.abs(points[i][0]-points[j][0]) + Math.abs(points[i][1]-points[j][1]), i, j]);\n  edges.sort((a, b) => a[0] - b[0]);\n  const p = Array.from({length: n}, (_, i) => i);\n  const find = x => p[x] === x ? x : (p[x] = find(p[x]));\n  let cost = 0;\n  for (const [w, u, v] of edges) {\n    const ru = find(u), rv = find(v);\n    if (ru !== rv) { p[ru] = rv; cost += w; }\n  }\n  return cost;\n}",
    },
    interviewPoints: ["MST has exactly V-1 edges.", "Kruskal is edge-based; Prim is vertex-based.", "Kruskal uses DSU; Prim uses a heap.", "MST is not unique when weights tie."],
  },
  {
    id: "trie",
    title: "35. Trie (Prefix Tree)",
    category: "Advanced",
    difficulty: "Medium",
    icon: "🌴",
    shortDesc: "Prefix search, autocomplete, word dictionary.",
    tutorialLink: "https://www.geeksforgeeks.org/trie-insert-and-search/",
    theory: `### 1. Core Concepts
- Trie node: children map + isEnd flag
- Insert, Search, StartsWith: O(L) where L is word length
- Prefix-based operations: autocomplete, spell check
- Word Dictionary with wildcards (DFS)
- Maximum XOR pair using binary trie

### 2. Code Implementation
\`\`\`python
class TrieNode:
    def __init__(self):
        self.children = {}
        self.is_end = False

class Trie:
    def __init__(self):
        self.root = TrieNode()
    def insert(self, word):
        node = self.root
        for ch in word:
            if ch not in node.children:
                node.children[ch] = TrieNode()
            node = node.children[ch]
        node.is_end = True
    def search(self, word):
        node = self.root
        for ch in word:
            if ch not in node.children:
                return False
            node = node.children[ch]
        return node.is_end
    def starts_with(self, prefix):
        node = self.root
        for ch in prefix:
            if ch not in node.children:
                return False
            node = node.children[ch]
        return True
\`\`\``,
    complexity: [
      { op: "Insert", time: "O(L)", space: "O(L)" },
      { op: "Search", time: "O(L)", space: "O(1)" },
      { op: "StartsWith", time: "O(L)", space: "O(1)" },
    ],
    problems: {
      Easy: ["Implement Trie.", "Longest Common Prefix."],
      Medium: ["Design Add and Search Words Data Structure.", "Replace Words.", "Map Sum Pairs."],
      Hard: ["Word Search II.", "Maximum XOR of Two Numbers in an Array.", "Palindrome Pairs.", "Stream of Characters."],
    },
    codeExamples: {
      python: "class TrieNode:\n    def __init__(self):\n        self.children = {}\n        self.is_end = False\n\nclass Trie:\n    def __init__(self):\n        self.root = TrieNode()\n    def insert(self, word):\n        node = self.root\n        for ch in word:\n            node = node.children.setdefault(ch, TrieNode())\n        node.is_end = True\n    def search(self, word):\n        node = self.root\n        for ch in word:\n            if ch not in node.children: return False\n            node = node.children[ch]\n        return node.is_end",
      cpp: "struct TrieNode {\n    TrieNode* child[26] = {};\n    bool isEnd = false;\n};\nclass Trie {\n    TrieNode* root = new TrieNode();\npublic:\n    void insert(string word) {\n        auto node = root;\n        for (char c : word) {\n            if (!node->child[c - 'a']) node->child[c - 'a'] = new TrieNode();\n            node = node->child[c - 'a'];\n        }\n        node->isEnd = true;\n    }\n    bool search(string word) {\n        auto node = root;\n        for (char c : word) {\n            if (!node->child[c - 'a']) return false;\n            node = node->child[c - 'a'];\n        }\n        return node->isEnd;\n    }\n};",
      java: "class TrieNode {\n    TrieNode[] child = new TrieNode[26];\n    boolean isEnd = false;\n}\nclass Trie {\n    TrieNode root = new TrieNode();\n    public void insert(String word) {\n        TrieNode node = root;\n        for (char c : word.toCharArray()) {\n            if (node.child[c - 'a'] == null) node.child[c - 'a'] = new TrieNode();\n            node = node.child[c - 'a'];\n        }\n        node.isEnd = true;\n    }\n    public boolean search(String word) {\n        TrieNode node = root;\n        for (char c : word.toCharArray()) {\n            if (node.child[c - 'a'] == null) return false;\n            node = node.child[c - 'a'];\n        }\n        return node.isEnd;\n    }\n}",
      js: "class TrieNode {\n  constructor() { this.children = {}; this.isEnd = false; }\n}\nclass Trie {\n  constructor() { this.root = new TrieNode(); }\n  insert(word) {\n    let node = this.root;\n    for (const ch of word) {\n      if (!node.children[ch]) node.children[ch] = new TrieNode();\n      node = node.children[ch];\n    }\n    node.isEnd = true;\n  }\n  search(word) {\n    let node = this.root;\n    for (const ch of word) {\n      if (!node.children[ch]) return false;\n      node = node.children[ch];\n    }\n    return node.isEnd;\n  }\n}",
    },
    interviewPoints: ["Trie operations are O(L), not O(N).", "Use a map for flexible character sets; array for lowercase letters.", "Word Search II combines Trie + DFS backtracking.", "Binary trie solves maximum XOR problems."],
  },
  {
    id: "bit-manipulation",
    title: "36. Bit Manipulation",
    category: "Intermediate",
    difficulty: "Medium",
    icon: "🔢",
    shortDesc: "XOR tricks, bit masks, subsets via bits.",
    tutorialLink: "https://www.geeksforgeeks.org/bitwise-operators-in-c-cpp/",
    theory: `### 1. Core Concepts
- AND, OR, XOR, NOT, left shift, right shift
- Check / set / clear / toggle a bit
- Count set bits (Brian Kernighan)
- XOR tricks: single number, missing number
- Subset enumeration using bitmask
- Power of two check: n & (n-1) == 0

### 2. Code Implementation
\`\`\`python
# Single number (all appear twice except one)
def single_number(nums):
    ans = 0
    for num in nums:
        ans ^= num
    return ans

# Count set bits
def count_bits(n):
    count = 0
    while n:
        n &= n - 1
        count += 1
    return count

# Enumerate all subsets
def subsets(nums):
    n = len(nums)
    result = []
    for mask in range(1 << n):
        subset = [nums[i] for i in range(n) if mask & (1 << i)]
        result.append(subset)
    return result
\`\`\``,
    complexity: [
      { op: "Single Number", time: "O(N)", space: "O(1)" },
      { op: "Count Bits", time: "O(log N)", space: "O(1)" },
      { op: "Subset Enumeration", time: "O(N × 2^N)", space: "O(N)" },
    ],
    problems: {
      Easy: ["Single Number.", "Number of 1 Bits.", "Power of Two.", "Hamming Distance."],
      Medium: ["Single Number II.", "Single Number III.", "Subsets.", "Counting Bits.", "Reverse Bits."],
      Hard: ["Maximum XOR of Two Numbers.", "Minimum Number of Flips to Make OR Equal.", "Find XOR Sum of All Pairs."],
    },
    codeExamples: {
      python: "def single_number(nums):\n    ans = 0\n    for n in nums: ans ^= n\n    return ans\n\ndef count_bits(n):\n    c = 0\n    while n:\n        n &= n - 1\n        c += 1\n    return c",
      cpp: "int singleNumber(vector<int>& nums) {\n    int ans = 0;\n    for (int n : nums) ans ^= n;\n    return ans;\n}\nint countBits(int n) {\n    int c = 0;\n    while (n) { n &= n - 1; c++; }\n    return c;\n}",
      java: "int singleNumber(int[] nums) {\n    int ans = 0;\n    for (int n : nums) ans ^= n;\n    return ans;\n}\nint countBits(int n) {\n    int c = 0;\n    while (n != 0) { n &= n - 1; c++; }\n    return c;\n}",
      js: "function singleNumber(nums) {\n  let ans = 0;\n  for (const n of nums) ans ^= n;\n  return ans;\n}\nfunction countBits(n) {\n  let c = 0;\n  while (n) { n &= n - 1; c++; }\n  return c;\n}",
    },
    interviewPoints: ["XOR of a number with itself is 0.", "XOR is commutative and associative.", "n & (n-1) clears the lowest set bit.", "Bitmask DP uses integer masks for subset states."],
  },
  {
    id: "math-number-theory",
    title: "37. Math & Number Theory",
    category: "Intermediate",
    difficulty: "Medium",
    icon: "➗",
    shortDesc: "GCD, primes, modular arithmetic, fast power.",
    tutorialLink: "https://www.geeksforgeeks.org/mathematical-algorithms/",
    theory: `### 1. Core Concepts
- GCD / LCM (Euclidean algorithm)
- Prime checking, Sieve of Eratosthenes
- Prime factorization
- Modular arithmetic (mod inverse, Fermat's little theorem)
- Fast exponentiation (binary exponentiation)
- Divisors, perfect numbers, Armstrong numbers

### 2. Code Implementation
\`\`\`python
import math

def gcd(a, b):
    return math.gcd(a, b)

def sieve(n):
    is_prime = [True] * (n + 1)
    is_prime[0] = is_prime[1] = False
    for i in range(2, int(n**0.5) + 1):
        if is_prime[i]:
            for j in range(i*i, n + 1, i):
                is_prime[j] = False
    return [i for i in range(n + 1) if is_prime[i]]

def power(base, exp, mod):
    result = 1
    base %= mod
    while exp:
        if exp & 1:
            result = result * base % mod
        base = base * base % mod
        exp >>= 1
    return result
\`\`\``,
    complexity: [
      { op: "GCD", time: "O(log min(a,b))", space: "O(1)" },
      { op: "Sieve", time: "O(N log log N)", space: "O(N)" },
      { op: "Fast Power", time: "O(log exp)", space: "O(1)" },
    ],
    problems: {
      Easy: ["GCD of Two Numbers.", "Count Primes.", "Power of Three.", "Happy Number."],
      Medium: ["Sieve of Eratosthenes.", "Pow(x, n).", "Excel Sheet Column Number.", "Ugly Number II."],
      Hard: ["Count Primes in Range.", "Super Pow.", "Prime Factorization of Large Numbers."],
    },
    codeExamples: {
      python: "def gcd(a, b):\n    while b:\n        a, b = b, a % b\n    return a\n\ndef power(base, exp, mod):\n    res = 1\n    base %= mod\n    while exp:\n        if exp & 1: res = res * base % mod\n        base = base * base % mod\n        exp >>= 1\n    return res",
      cpp: "int gcd(int a, int b) {\n    while (b) { int t = b; b = a % b; a = t; }\n    return a;\n}\nlong long power(long long base, long long exp, long long mod) {\n    long long res = 1;\n    base %= mod;\n    while (exp) {\n        if (exp & 1) res = res * base % mod;\n        base = base * base % mod;\n        exp >>= 1;\n    }\n    return res;\n}",
      java: "int gcd(int a, int b) {\n    while (b != 0) { int t = b; b = a % b; a = t; }\n    return a;\n}\nlong power(long base, long exp, long mod) {\n    long res = 1;\n    base %= mod;\n    while (exp > 0) {\n        if ((exp & 1) == 1) res = res * base % mod;\n        base = base * base % mod;\n        exp >>= 1;\n    }\n    return res;\n}",
      js: "function gcd(a, b) {\n  while (b) [a, b] = [b, a % b];\n  return a;\n}\nfunction power(base, exp, mod) {\n  let res = 1;\n  base %= mod;\n  while (exp) {\n    if (exp & 1) res = res * base % mod;\n    base = base * base % mod;\n    exp >>= 1;\n  }\n  return res;\n}",
    },
    interviewPoints: ["GCD via Euclid: gcd(a,b) = gcd(b, a%b).", "Sieve marks multiples of each prime.", "Fast power is O(log n).", "Fermat: a^(p-1) ≡ 1 mod p for prime p."],
  },
  {
    id: "matrix",
    title: "38. Matrix / 2D Arrays",
    category: "Intermediate",
    difficulty: "Medium",
    icon: "🔲",
    shortDesc: "Rotation, spiral, search, transpose.",
    tutorialLink: "https://www.geeksforgeeks.org/matrix/",
    theory: `### 1. Core Concepts
- Traversal: row-major, column-major
- Transpose: swap matrix[i][j] with matrix[j][i]
- Rotation 90°: transpose + reverse each row
- Spiral traversal
- Matrix search (row-wise/column-wise sorted)
- 2D prefix sum
- Set Matrix Zeroes (in-place)

### 2. Code Implementation (Rotate 90° Clockwise)
\`\`\`python
def rotate(matrix):
    n = len(matrix)
    # Transpose
    for i in range(n):
        for j in range(i + 1, n):
            matrix[i][j], matrix[j][i] = matrix[j][i], matrix[i][j]
    # Reverse each row
    for row in matrix:
        row.reverse()
\`\`\``,
    complexity: [
      { op: "Traversal", time: "O(M × N)", space: "O(1)" },
      { op: "Rotation", time: "O(N²)", space: "O(1)" },
      { op: "Spiral", time: "O(M × N)", space: "O(1)" },
    ],
    problems: {
      Easy: ["Transpose Matrix.", "Matrix Diagonal Sum.", "Lucky Numbers in a Matrix."],
      Medium: ["Rotate Image.", "Spiral Matrix.", "Set Matrix Zeroes.", "Search a 2D Matrix.", "Valid Sudoku."],
      Hard: ["Spiral Matrix II.", "Maximal Rectangle.", "Sudoku Solver.", "Word Search II."],
    },
    codeExamples: {
      python: "def spiral_order(matrix):\n    res = []\n    while matrix:\n        res += matrix.pop(0)\n        if matrix and matrix[0]:\n            for row in matrix: res.append(row.pop())\n        if matrix:\n            res += matrix.pop()[::-1]\n        if matrix and matrix[0]:\n            for row in matrix[::-1]: res.append(row.pop(0))\n    return res",
      cpp: "vector<int> spiralOrder(vector<vector<int>>& m) {\n    vector<int> res;\n    int top = 0, bottom = m.size()-1, left = 0, right = m[0].size()-1;\n    while (top <= bottom && left <= right) {\n        for (int j = left; j <= right; j++) res.push_back(m[top][j]);\n        top++;\n        for (int i = top; i <= bottom; i++) res.push_back(m[i][right]);\n        right--;\n        if (top <= bottom) { for (int j = right; j >= left; j--) res.push_back(m[bottom][j]); bottom--; }\n        if (left <= right) { for (int i = bottom; i >= top; i--) res.push_back(m[i][left]); left++; }\n    }\n    return res;\n}",
      java: "List<Integer> spiralOrder(int[][] m) {\n    List<Integer> res = new ArrayList<>();\n    int top = 0, bottom = m.length-1, left = 0, right = m[0].length-1;\n    while (top <= bottom && left <= right) {\n        for (int j = left; j <= right; j++) res.add(m[top][j]);\n        top++;\n        for (int i = top; i <= bottom; i++) res.add(m[i][right]);\n        right--;\n        if (top <= bottom) { for (int j = right; j >= left; j--) res.add(m[bottom][j]); bottom--; }\n        if (left <= right) { for (int i = bottom; i >= top; i--) res.add(m[i][left]); left++; }\n    }\n    return res;\n}",
      js: "function spiralOrder(m) {\n  const res = [];\n  let top = 0, bottom = m.length - 1, left = 0, right = m[0].length - 1;\n  while (top <= bottom && left <= right) {\n    for (let j = left; j <= right; j++) res.push(m[top][j]);\n    top++;\n    for (let i = top; i <= bottom; i++) res.push(m[i][right]);\n    right--;\n    if (top <= bottom) { for (let j = right; j >= left; j--) res.push(m[bottom][j]); bottom--; }\n    if (left <= right) { for (let i = bottom; i >= top; i--) res.push(m[i][left]); left++; }\n  }\n  return res;\n}",
    },
    interviewPoints: ["Rotate 90° = transpose + reverse rows.", "Spiral: shrink boundaries after each pass.", "Search 2D matrix: treat as 1D binary search.", "Set zeroes: use first row/col as markers."],
  },
  {
    id: "design-patterns-problems",
    title: "39. Design / System-Style Problems",
    category: "Advanced",
    difficulty: "Medium",
    icon: "🏗️",
    shortDesc: "LRU Cache, LFU, Twitter, Rate Limiter.",
    tutorialLink: "https://www.geeksforgeeks.org/system-design-tutorial/",
    theory: `### 1. Core Concepts
- Combine data structures to meet O(1) requirements
- LRU Cache: HashMap + Doubly Linked List
- LFU Cache: HashMap + Frequency Buckets
- Design Twitter: HashMap + Heap for feed
- Rate Limiter: Token bucket / sliding window
- Time-based key-value store: HashMap + Binary Search

### 2. Code Implementation (LRU Cache)
\`\`\`python
class Node:
    def __init__(self, k, v):
        self.k, self.v = k, v
        self.prev = self.next = None

class LRUCache:
    def __init__(self, capacity):
        self.cap = capacity
        self.cache = {}
        self.head = Node(0, 0)
        self.tail = Node(0, 0)
        self.head.next = self.tail
        self.tail.prev = self.head

    def _remove(self, node):
        node.prev.next = node.next
        node.next.prev = node.prev

    def _add(self, node):
        node.next = self.head.next
        node.prev = self.head
        self.head.next.prev = node
        self.head.next = node

    def get(self, key):
        if key not in self.cache:
            return -1
        node = self.cache[key]
        self._remove(node)
        self._add(node)
        return node.v

    def put(self, key, value):
        if key in self.cache:
            self._remove(self.cache[key])
        node = Node(key, value)
        self.cache[key] = node
        self._add(node)
        if len(self.cache) > self.cap:
            lru = self.tail.prev
            self._remove(lru)
            del self.cache[lru.k]
\`\`\``,
    complexity: [
      { op: "LRU get / put", time: "O(1)", space: "O(capacity)" },
      { op: "LFU get / put", time: "O(1)", space: "O(capacity)" },
    ],
    problems: {
      Easy: ["Design HashMap.", "Design HashSet."],
      Medium: ["LRU Cache.", "Design Twitter.", "Insert Delete GetRandom O(1).", "Time Based Key-Value Store.", "Design Circular Queue."],
      Hard: ["LFU Cache.", "All O'one Data Structure.", "Design Skiplist.", "Design In-Memory File System."],
    },
    codeExamples: {
      python: "from collections import OrderedDict\nclass LRUCache:\n    def __init__(self, cap):\n        self.cap = cap\n        self.d = OrderedDict()\n    def get(self, key):\n        if key not in self.d: return -1\n        self.d.move_to_end(key)\n        return self.d[key]\n    def put(self, key, value):\n        if key in self.d: self.d.move_to_end(key)\n        self.d[key] = value\n        if len(self.d) > self.cap:\n            self.d.popitem(last=False)",
      cpp: "class LRUCache {\n    int cap;\n    list<pair<int,int>> lru;\n    unordered_map<int, list<pair<int,int>>::iterator> mp;\npublic:\n    LRUCache(int c) : cap(c) {}\n    int get(int key) {\n        if (!mp.count(key)) return -1;\n        lru.splice(lru.begin(), lru, mp[key]);\n        return mp[key]->second;\n    }\n    void put(int key, int val) {\n        if (mp.count(key)) { lru.splice(lru.begin(), lru, mp[key]); mp[key]->second = val; return; }\n        if (lru.size() == cap) { mp.erase(lru.back().first); lru.pop_back(); }\n        lru.push_front({key, val});\n        mp[key] = lru.begin();\n    }\n};",
      java: "class LRUCache extends LinkedHashMap<Integer, Integer> {\n    int cap;\n    LRUCache(int c) { super(c, 0.75f, true); cap = c; }\n    protected boolean removeEldestEntry(Map.Entry<Integer, Integer> e) { return size() > cap; }\n    int get(int key) { return super.getOrDefault(key, -1); }\n    void put(int key, int val) { super.put(key, val); }\n}",
      js: "class LRUCache {\n  constructor(cap) { this.cap = cap; this.map = new Map(); }\n  get(key) {\n    if (!this.map.has(key)) return -1;\n    const val = this.map.get(key);\n    this.map.delete(key); this.map.set(key, val);\n    return val;\n  }\n  put(key, value) {\n    if (this.map.has(key)) this.map.delete(key);\n    this.map.set(key, value);\n    if (this.map.size > this.cap) this.map.delete(this.map.keys().next().value);\n  }\n}",
    },
    interviewPoints: ["LRU: HashMap + Doubly Linked List gives O(1).", "LFU: track min frequency for eviction.", "Design problems test data structure combination.", "Always clarify operation complexity requirements first."],
  }
];