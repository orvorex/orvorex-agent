export interface Context {
  workspace: string;
  wallet: string;
  model: string;
}

export function getContext(): Context {
  return {
    workspace: "Personal Workspace",
    wallet: "Connected",
    model: "GPT-4.1"
  };
}
