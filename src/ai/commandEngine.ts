export interface CommandResult {
  success: boolean;
  command: string;
  response: string;
  timestamp: string;
}

export async function executeCommand(
  command: string
): Promise<CommandResult> {
  return {
    success: true,
    command,
    response: `Executed: ${command}`,
    timestamp: new Date().toISOString()
  };
}
