export const TOPICS_7 = [
  {
    id: "string-algorithms",
    title: "44. String Algorithms",
    category: "Advanced",
    difficulty: "Hard",
    icon: "🔤",
    shortDesc: "KMP, Z-algorithm, Rabin-Karp, Manacher.",
    tutorialLink: "https://www.geeksforgeeks.org/string-algorithms/",
    theory: `### 1. Core Concepts
- KMP (Knuth-Morris-Pratt): pattern matching in O(N + M) using LPS array.
- Z-Algorithm: Z-array for prefix matching.
- Rabin-Karp: rolling hash for substring search.
- Manacher's Algorithm: longest palindromic substring in O(N).
- Suffix arrays / suffix automaton (conceptual).

### 2. Code Implementation (KMP)
\`\`\`python
def kmp_search(text, pattern):
    # Build LPS (longest proper prefix which is also suffix)
    lps = [0] * len(pattern)
    j = 0
    for i in range(1, len(pattern)):
        while j > 0 and pattern[i] != pattern[j]:
            j = lps[j - 1]
        if pattern[i] == pattern[j]:
            j += 1
            lps[i] = j

    # Search
    result = []
    j = 0
    for i in range(len(text)):
        while j > 0 and text[i] != pattern[j]:
            j = lps[j - 1]
        if text[i] == pattern[j]:
            j += 1
        if j == len(pattern):
            result.append(i - j + 1)
            j = lps[j - 1]
    return result
\`\`\`

### 3. Manacher (Longest Palindromic Substring)
\`\`\`python
def longest_palindrome(s):
    t = '#' + '#'.join(s) + '#'
    n = len(t)
    p = [0] * n
    c = r = 0
    for i in range(n):
        mirror = 2 * c - i
        if i < r:
            p[i] = min(r - i, p[mirror])
        while i + p[i] + 1 < n and i - p[i] - 1 >= 0 and t[i + p[i] + 1] == t[i - p[i] - 1]:
            p[i] += 1
        if i + p[i] > r:
            c, r = i, i + p[i]
    max_len = max(p)
    center = p.index(max_len)
    start = (center - max_len) // 2
    return s[start:start + max_len]
\`\`\``,
    complexity: [
      { op: "KMP", time: "O(N + M)", space: "O(M)" },
      { op: "Z-Algorithm", time: "O(N + M)", space: "O(N + M)" },
      { op: "Rabin-Karp", time: "O(N + M) avg", space: "O(1)" },
      { op: "Manacher", time: "O(N)", space: "O(N)" },
    ],
    problems: {
      Easy: ["Implement strStr().", "Repeated Substring Pattern."],
      Medium: ["Longest Palindromic Substring.", "Shortest Palindrome.", "Repeated DNA Sequences."],
      Hard: ["Shortest Palindrome (KMP).", "Longest Duplicate Substring (Rabin-Karp + BS).", "Palindrome Pairs."],
    },
    codeExamples: {
      python: "def str_str(haystack, needle):\n    if not needle: return 0\n    lps = [0] * len(needle)\n    j = 0\n    for i in range(1, len(needle)):\n        while j and needle[i] != needle[j]: j = lps[j-1]\n        if needle[i] == needle[j]: j += 1; lps[i] = j\n    j = 0\n    for i in range(len(haystack)):\n        while j and haystack[i] != needle[j]: j = lps[j-1]\n        if haystack[i] == needle[j]: j += 1\n        if j == len(needle): return i - j + 1\n    return -1",
      cpp: "int strStr(string h, string n) {\n    if (n.empty()) return 0;\n    vector<int> lps(n.size(), 0);\n    for (int i = 1, j = 0; i < n.size(); i++) {\n        while (j && n[i] != n[j]) j = lps[j-1];\n        if (n[i] == n[j]) lps[i] = ++j;\n    }\n    for (int i = 0, j = 0; i < h.size(); i++) {\n        while (j && h[i] != n[j]) j = lps[j-1];\n        if (h[i] == n[j]) j++;\n        if (j == n.size()) return i - j + 1;\n    }\n    return -1;\n}",
      java: "int strStr(String h, String n) {\n    if (n.isEmpty()) return 0;\n    int[] lps = new int[n.length()];\n    for (int i = 1, j = 0; i < n.length(); i++) {\n        while (j > 0 && n.charAt(i) != n.charAt(j)) j = lps[j-1];\n        if (n.charAt(i) == n.charAt(j)) lps[i] = ++j;\n    }\n    for (int i = 0, j = 0; i < h.length(); i++) {\n        while (j > 0 && h.charAt(i) != n.charAt(j)) j = lps[j-1];\n        if (h.charAt(i) == n.charAt(j)) j++;\n        if (j == n.length()) return i - j + 1;\n    }\n    return -1;\n}",
      js: "function strStr(h, n) {\n  if (!n) return 0;\n  const lps = new Array(n.length).fill(0);\n  for (let i = 1, j = 0; i < n.length; i++) {\n    while (j && n[i] !== n[j]) j = lps[j-1];\n    if (n[i] === n[j]) lps[i] = ++j;\n  }\n  for (let i = 0, j = 0; i < h.length; i++) {\n    while (j && h[i] !== n[j]) j = lps[j-1];\n    if (h[i] === n[j]) j++;\n    if (j === n.length) return i - j + 1;\n  }\n  return -1;\n}",
    },
    interviewPoints: ["LPS array powers KMP.", "Manacher handles palindromes in O(N).", "Rabin-Karp uses rolling hash with collision checks.", "Z-array: z[i] = length of longest substring starting at i matching prefix."],
  },
  {
    id: "game-theory",
    title: "45. Game Theory & Miscellaneous",
    category: "Advanced",
    difficulty: "Hard",
    icon: "🎮",
    shortDesc: "Nim, minimax, Sprague-Grundy, combinatorial games.",
    tutorialLink: "https://www.geeksforgeeks.org/game-theory/",
    theory: `### 1. Core Concepts
- Nim Game: XOR of pile sizes; nonzero XOR = first player wins.
- Sprague-Grundy theorem: every impartial game maps to a Nim heap.
- Minimax with alpha-beta pruning for two-player games.
- Combinatorial game patterns: subtraction games, Wythoff's game.
- Predict the Winner, Stone Game series.

### 2. Code Implementation (Nim + Minimax)
\`\`\`python
def can_win_nim(piles):
    xor = 0
    for p in piles:
        xor ^= p
    return xor != 0

def predict_the_winner(nums):
    n = len(nums)
    dp = [[0] * n for _ in range(n)]
    for i in range(n):
        dp[i][i] = nums[i]
    for length in range(2, n + 1):
        for i in range(n - length + 1):
            j = i + length - 1
            dp[i][j] = max(nums[i] - dp[i+1][j], nums[j] - dp[i][j-1])
    return dp[0][n-1] >= 0
\`\`\``,
    complexity: [
      { op: "Nim", time: "O(N)", space: "O(1)" },
      { op: "Minimax DP", time: "O(N²)", space: "O(N²)" },
      { op: "Sprague-Grundy", time: "O(states × moves)", space: "O(states)" },
    ],
    problems: {
      Easy: ["Nim Game.", "Divisor Game.", "Stone Game."],
      Medium: ["Predict the Winner.", "Stone Game II.", "Stone Game III.", "Can I Win."],
      Hard: ["Stone Game IV.", "Cherry Pickup.", "Cat and Mouse II.", "Sprague-Grundy on Graphs."],
    },
    codeExamples: {
      python: "def can_win_nim(n):\n    return n % 4 != 0\n\ndef stone_game(piles):\n    n = len(piles)\n    dp = piles[:]\n    for length in range(2, n + 1):\n        for i in range(n - length + 1):\n            dp[i] = max(piles[i] - dp[i+1], piles[i+length-1] - dp[i])\n    return dp[0] > 0",
      cpp: "bool canWinNim(int n) {\n    return n % 4 != 0;\n}\nbool stoneGame(vector<int>& piles) {\n    return true;  // first player always wins in even-sized Stone Game\n}",
      java: "boolean canWinNim(int n) {\n    return n % 4 != 0;\n}\nboolean stoneGame(int[] piles) {\n    return true;\n}",
      js: "function canWinNim(n) {\n  return n % 4 !== 0;\n}\nfunction stoneGame(piles) {\n  return true;\n}",
    },
    interviewPoints: ["Nim: XOR of pile sizes decides winner.", "Minimax DP: dp[i][j] = best score difference.", "Sprague-Grundy reduces impartial games to Nim.", "Alpha-beta pruning speeds up minimax."],
  }
];