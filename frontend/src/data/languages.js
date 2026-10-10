export const LANGUAGES = [
  {
    id: "python",
    label: "Python 3",
    version: "3.10.0",
    monaco: "python",
    defaultCode: `# Write your code here
print("Hello, DSA!")

nums = [3, 1, 4, 1, 5, 9, 2, 6]
print("Max:", max(nums))
print("Sorted:", sorted(nums))
`,
  },
  {
    id: "cpp",
    label: "C++ 17",
    version: "10.2.0",
    monaco: "cpp",
    defaultCode: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main() {
    vector<int> nums = {3, 1, 4, 1, 5, 9, 2, 6};
    sort(nums.begin(), nums.end());
    cout << "Sorted: ";
    for (int n : nums) cout << n << " ";
    cout << endl;
    return 0;
}
`,
  },
  {
    id: "java",
    label: "Java 15",
    version: "15.0.2",
    monaco: "java",
    defaultCode: `import java.util.*;

public class Main {
    public static void main(String[] args) {
        int[] nums = {3, 1, 4, 1, 5, 9, 2, 6};
        Arrays.sort(nums);
        System.out.println("Sorted: " + Arrays.toString(nums));
    }
}
`,
  },
  {
    id: "javascript",
    label: "JavaScript",
    version: "18.15.0",
    monaco: "javascript",
    defaultCode: `const nums = [3, 1, 4, 1, 5, 9, 2, 6];
console.log("Max:", Math.max(...nums));
console.log("Sorted:", [...nums].sort((a, b) => a - b));
`,
  },
  {
    id: "c",
    label: "C",
    version: "10.2.0",
    monaco: "c",
    defaultCode: `#include <stdio.h>

int main() {
    printf("Hello, DSA!\\n");
    return 0;
}
`,
  },
  {
    id: "go",
    label: "Go",
    version: "1.16.2",
    monaco: "go",
    defaultCode: `package main

import "fmt"

func main() {
    fmt.Println("Hello, DSA!")
}
`,
  },
  {
    id: "rust",
    label: "Rust",
    version: "1.68.2",
    monaco: "rust",
    defaultCode: `fn main() {
    println!("Hello, DSA!");
}
`,
  },
];
