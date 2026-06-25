export function generateReasoning(
  prompt: string
) {

  return {
    input: prompt,
    reasoning: [
      "Analyze request",
      "Retrieve context",
      "Generate response",
      "Return output"
    ]
  };

}
