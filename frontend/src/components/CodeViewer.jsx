import { useMonaco } from "@monaco-editor/react";
import Editor from "@monaco-editor/react";
import { useEffect, useRef } from "react";

const SNIPPETS = {
  bubble: `function bubbleSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
}`,
  selection: `function selectionSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let minIdx = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIdx]) minIdx = j;
    }
    if (minIdx !== i) {
      [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
    }
  }
}`,
  insertion: `function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = key;
  }
}`,
};

export default function CodeViewer({ algorithm, activeLine }) {
  const monaco = useMonaco();
  const editorRef = useRef(null);
  const decorationsRef = useRef([]);

  useEffect(() => {
    if (editorRef.current && monaco && activeLine) {
      const decorations = [
        {
          range: new monaco.Range(activeLine, 1, activeLine, 1),
          options: {
            isWholeLine: true,
            className: "myLineDecoration",
            glyphMarginClassName: "myGlyphMarginClass",
          },
        },
      ];
      decorationsRef.current = editorRef.current.deltaDecorations(
        decorationsRef.current,
        decorations
      );
    } else if (editorRef.current && monaco) {
      decorationsRef.current = editorRef.current.deltaDecorations(
        decorationsRef.current,
        []
      );
    }
  }, [activeLine, monaco]);

  return (
    <Editor
      height="100%"
      language="javascript"
      value={SNIPPETS[algorithm]}
      theme="vs-dark"
      onMount={(editor) => {
        editorRef.current = editor;
      }}
      options={{
        readOnly: true,
        minimap: { enabled: false },
        fontSize: 13,
        scrollBeyondLastLine: false,
        lineNumbers: "on",
      }}
    />
  );
}