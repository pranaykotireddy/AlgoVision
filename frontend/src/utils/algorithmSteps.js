export function bubbleSortSteps(input) {
  const arr = [...input];
  const steps = [];
  const n = arr.length;

  steps.push({
    array: [...arr],
    comparing: null,
    swapped: null,
    codeLine: 1,
    variables: { n },
    description: "Initialize array",
  });

  for (let i = 0; i < n - 1; i++) {
    steps.push({
      array: [...arr],
      comparing: null,
      swapped: null,
      codeLine: 2,
      variables: { i, n },
      description: `Outer loop iteration i = ${i}`,
    });

    for (let j = 0; j < n - i - 1; j++) {
      steps.push({
        array: [...arr],
        comparing: [j, j + 1],
        swapped: null,
        codeLine: 4,
        variables: { i, j, n, "a[j]": arr[j], "a[j+1]": arr[j + 1] },
        description: `Compare a[${j}]=${arr[j]} vs a[${j + 1}]=${arr[j + 1]}`,
      });

      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        steps.push({
          array: [...arr],
          comparing: null,
          swapped: [j, j + 1],
          codeLine: 5,
          variables: { i, j, n },
          description: `Swap: ${arr[j + 1]} <-> ${arr[j]}`,
        });
      }
    }
  }

  steps.push({
    array: [...arr],
    comparing: null,
    swapped: null,
    codeLine: 0,
    variables: {},
    description: "Sorted ✅",
    done: true,
  });

  return steps;
}

// 🔥 Add Selection and Insertion similarly if needed, or keep bubble for now.

export const ALGORITHMS = {
  bubble: {
    name: "Bubble Sort",
    generator: bubbleSortSteps,
    timeComplexity: "O(N²)",
    spaceComplexity: "O(1)",
    bestCase: "O(N) (already sorted)",
    worstCase: "O(N²)",
    stable: true,
  },
};