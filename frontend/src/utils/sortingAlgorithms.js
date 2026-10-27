/**
 * Each step is an object: { array, comparing: [i, j], swapped: [i, j] }
 * We record every comparison and swap so the UI can animate them.
 */

export function generateBubbleSortSteps(input) {
  const arr = [...input];
  const steps = [{ array: [...arr], comparing: null, swapped: null }];
  const n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      steps.push({ array: [...arr], comparing: [j, j + 1], swapped: null });
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        steps.push({ array: [...arr], comparing: null, swapped: [j, j + 1] });
      }
    }
  }
  steps.push({ array: [...arr], comparing: null, swapped: null, done: true });
  return steps;
}

export function generateSelectionSortSteps(input) {
  const arr = [...input];
  const steps = [{ array: [...arr], comparing: null, swapped: null }];
  const n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    let minIdx = i;
    for (let j = i + 1; j < n; j++) {
      steps.push({ array: [...arr], comparing: [minIdx, j], swapped: null });
      if (arr[j] < arr[minIdx]) minIdx = j;
    }
    if (minIdx !== i) {
      [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
      steps.push({ array: [...arr], comparing: null, swapped: [i, minIdx] });
    }
  }
  steps.push({ array: [...arr], comparing: null, swapped: null, done: true });
  return steps;
}

export function generateInsertionSortSteps(input) {
  const arr = [...input];
  const steps = [{ array: [...arr], comparing: null, swapped: null }];
  const n = arr.length;

  for (let i = 1; i < n; i++) {
    const key = arr[i];
    let j = i - 1;

    while (j >= 0) {
      steps.push({ array: [...arr], comparing: [j, j + 1], swapped: null });
      if (arr[j] > key) {
        arr[j + 1] = arr[j];
        steps.push({ array: [...arr], comparing: null, swapped: [j, j + 1] });
        j--;
      } else break;
    }
    arr[j + 1] = key;
    steps.push({ array: [...arr], comparing: null, swapped: [j + 1, j + 1] });
  }
  steps.push({ array: [...arr], comparing: null, swapped: null, done: true });
  return steps;
}

export const ALGORITHMS = {
  bubble: {
    name: "Bubble Sort",
    generator: generateBubbleSortSteps,
    complexity: "O(n²)",
  },
  selection: {
    name: "Selection Sort",
    generator: generateSelectionSortSteps,
    complexity: "O(n²)",
  },
  insertion: {
    name: "Insertion Sort",
    generator: generateInsertionSortSteps,
    complexity: "O(n²)",
  },
};