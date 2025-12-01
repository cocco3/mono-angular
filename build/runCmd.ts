import { spawn, type SpawnOptions } from 'child_process';

export function runCmd(
  command: string,
  args: string[] = [],
  options: SpawnOptions = {
    cwd: process.cwd(),
    shell: true,
    stdio: 'inherit',
  }
) {
  return new Promise<void>((resolve, reject) => {
    const child = spawn(command, args, options);

    child.on('error', reject);

    child.on('close', (code) => {
      if (code === 0) {
        resolve();
      } else {
        reject(
          new Error(`${command} ${args.join(' ')} exited with code ${code}`)
        );
      }
    });
  });
}
