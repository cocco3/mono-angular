---
applyTo: '**/*.ts,**/*.tsx'
---

# Project coding standards for TypeScript

Apply the [general coding guidelines](./general.instructions.md) to all code.

## TypeScript Guidelines

- Use TypeScript for all new code
- Follow functional programming principles where possible
- Use types over interfaces for data structures and type definitions
- Prefer immutable data (const, readonly)
- Use optional chaining (?.) and nullish coalescing (??) operators
- Use strict type checking
- Prefer type inference when the type is obvious
- Avoid the `any` type; use `unknown` when type is uncertain
- When importing a type, use the `type` keyword (e.g. `import { type MyType } from './my-module';`)
