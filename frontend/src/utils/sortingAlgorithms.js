export function bubbleSortSteps(input) {
  const arr = [...input];
  const steps = [];
  const n = arr.length;

  // Initial state
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

export function selectionSortSteps(input) {
  const arr = [...input];
  const steps = [];
  const n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    let minIdx = i;
    steps.push({
      array: [...arr],
      comparing: null,
      swapped: null,
      codeLine: 3,
      variables: { i, minIdx, n },
      description: `Find minimum from index ${i}`,
    });

    for (let j = i + 1; j < n; j++) {
      steps.push({
        array: [...arr],
        comparing: [minIdx, j],
        swapped: null,
        codeLine: 4,
        variables: { i, j, minIdx },
        description: `Compare a[${j}]=${arr[j]} with min=${arr[minIdx]}`,
      });

      if (arr[j] < arr[minIdx]) {
        minIdx = j;
        steps.push({
          array: [...arr],
          comparing: null,
          swapped: null,
          codeLine: 5,
          variables: { i, j, minIdx },
          description: `New minimum found: ${arr[j]}`,
        });
      }
    }

    if (minIdx !== i) {
      [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
      steps.push({
        array: [...arr],
        comparing: null,
        swapped: [i, minIdx],
        codeLine: 6,
        variables: { i, minIdx },
        description: `Swap a[${i}] and a[${minIdx}]`,
      });
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

export function insertionSortSteps(input) {
  const arr = [...input];
  const steps = [];
  const n = arr.length;

  for (let i = 1; i < n; i++) {
    let key = arr[i];
    let j = i - 1;

    steps.push({
      array: [...arr],
      comparing: null,
      swapped: null,
      codeLine: 2,
      variables: { i, j, key },
      description: `Pick a[${i}]=${key}`,
    });

    while (j >= 0 && arr[j] > key) {
      steps.push({
        array: [...arr],
        comparing: [j, i],
        swapped: null,
        codeLine: 4,
        variables: { i, j, key, "a[j]": arr[j] },
        description: `a[${j}]=${arr[j]} > key=${key} → shift`,
      });

      arr[j + 1] = arr[j];
      steps.push({
        array: [...arr],
        comparing: null,
        swapped: [j, j + 1],
        codeLine: 5,
        variables: { i, j, key },
        description: `Shift a[${j}] to the right`,
      });
      j = j - 1;
    }

    arr[j + 1] = key;
    steps.push({
      array: [...arr],
      comparing: null,
      swapped: [j + 1, j + 1],
      codeLine: 7,
      variables: { i, j, key },
      description: `Insert key=${key} at index ${j + 1}`,
    });
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
  selection: {
    name: "Selection Sort",
    generator: selectionSortSteps,
    timeComplexity: "O(N²)",
    spaceComplexity: "O(1)",
    bestCase: "O(N²)",
    worstCase: "O(N²)",
    stable: false,
  },
  insertion: {
    name: "Insertion Sort",
    generator: insertionSortSteps,
    timeComplexity: "O(N²)",
    spaceComplexity: "O(1)",
    bestCase: "O(N) (already sorted)",
    worstCase: "O(N²)",
    stable: true,
  },
};