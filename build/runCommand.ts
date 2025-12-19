import { spawn, type SpawnOptions } from 'child_process';

export function runCommand(
  command: string,
  args: string[] = [],
  options: SpawnOptions = {
    cwd: process.cwd(),
    shell: true,
    stdio: 'inherit',
  }
) {
  return new Promise<string>((resolve, reject) => {
    const child = spawn(command, args, options);

    let output = '';

    child.stdout?.on('data', (data) => {
      output += data.toString();
    });

    child.stderr?.on('data', (data) => {
      process.stderr.write(data);
    });

    child.on('error', reject);

    child.on('close', (code) => {
      if (code === 0) {
        resolve(output.trim());
      } else {
        reject(
          new Error(`${command} ${args.join(' ')} exited with code ${code}`)
        );
      }
    });
  });
}
