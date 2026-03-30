# Icons

SVG icons live in `projects/ui/src/lib/icons/svgs/` and are compiled into a typed icon store at `projects/ui/src/lib/icons/svgIconStore.ts`.

## Adding an icon

1. Export the icon as an SVG and drop it into `projects/ui/src/lib/icons/svgs/`.
2. If the SVG uses strokes or compound/grouped paths, pre-process it with Inkscape first (see below).
3. Run the asset build to generate the updated icon store.

## Pre-processing with Inkscape

Raw SVGs that contain strokes or complex path structures need to be flattened before the build can use them. The `build/process-icons.sh` script automates this using Inkscape's CLI.

**Requires:** [Inkscape](https://inkscape.org/) to be installed.

```bash
# Single file
./build/process-icons.sh path/to/icon.svg

# Whole directory
./build/process-icons.sh projects/ui/src/lib/icons/svgs/

# Glob
./build/process-icons.sh projects/ui/src/lib/icons/svgs/*.svg
```

## Building the icon store

```bash
npm run assets:build
```

This runs `projects/ui/src/build/runBuild.ts`, which:

1. Reads all `.svg` files from `projects/ui/src/lib/icons/svgs/`.
2. Skips the build if no source files have changed since the store was last generated.
3. Optimizes each SVG with SVGO (multipass, removes `fill`/`data-name`/`style` attributes, converts shapes to paths, strips dimensions).
4. Writes the optimized SVGs back to the `svgs/` directory.
5. Generates `svgIconStore.ts` with typed exports ready for use in the UI library.
