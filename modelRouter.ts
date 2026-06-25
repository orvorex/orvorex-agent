export function routeModel(task: string) {

  if (task.includes("code")) {
    return "Claude";
  }

  if (task.includes("wallet")) {
    return "GPT";
  }

  return "Gemini";
}
