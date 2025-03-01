## Usage

in the root directory run:

```bash
pnpm install
pnpm dev
```

## Adding components

To add components to your app, run the following command at the root of your `web` app:

```bash
pnpm dlx shadcn@canary add button -c apps/web
```

This will place the ui components in the `packages/ui/src/components` directory.

## Tailwind

Your `globals.css` are already set up to use the components from the `ui` package which is imported in the `web` app.

## Using components

To use the components in your app, import them from the `ui` package.

```tsx
import { Button } from '@workspace/ui/components/ui/button';
```