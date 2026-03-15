# @neighborhood/ui

Where every component knows its neighbors. A design system with warmth, motion, and personality baked into every token.

18 components. 6 token categories. Built with React and CSS custom properties.

## Install

```bash
npm install @neighborhood/ui
```

## Setup

Import the token stylesheet in your app's entry point:

```tsx
import '@neighborhood/ui/tokens.css'
```

Load the required fonts (Space Grotesk + DM Sans). With Next.js:

```tsx
import { Space_Grotesk, DM_Sans } from 'next/font/google'

const spaceGrotesk = Space_Grotesk({ variable: '--font-space-grotesk', subsets: ['latin'] })
const dmSans = DM_Sans({ variable: '--font-dm-sans', subsets: ['latin'] })

// In your layout:
<body className={`${spaceGrotesk.variable} ${dmSans.variable}`}>
```

Or via Google Fonts CDN:

```html
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=DM+Sans:wght@400;500&display=swap" rel="stylesheet">
```

## Usage

```tsx
import { Toggle, Badge, ContentSection, SettingRow } from '@neighborhood/ui'

function Settings() {
  const [darkMode, setDarkMode] = useState(false)
  return (
    <ContentSection title="Appearance" description="Customize the look.">
      <SettingRow
        label="Dark mode"
        description="Use dark theme"
        control={<Toggle checked={darkMode} onChange={setDarkMode} />}
      />
    </ContentSection>
  )
}
```

## Components

### Atomic (11)
Avatar, Badge, Button, Checkbox, Divider, Input, SegmentedControl, Select, Tabs, Toggle, Tooltip

### Compositional (7)
Banner, ContentSection, DataTable, EmptyState, FormSection, Menu, PropertyRow, SettingRow

## Tokens

All components use CSS custom properties from `tokens.css`:

- **Typography:** `--font-display`, `--font-body`, `--text-xs` through `--text-display`
- **Colors:** `--neutral-50` through `--neutral-950`, `--primary-*`, `--berry-*`, `--terracotta-*`, `--amber-*`, `--sky-*`, `--plum-*`, `--sage-*`
- **Semantic:** `--success`, `--warning`, `--error`, `--info`
- **Spacing:** `--space-1` through `--space-16` (4px base)
- **Radius:** `--radius-control`, `--radius-surface`, `--radius-pill`
- **Shadows:** `--shadow-subtle`, `--shadow-raised`, `--shadow-overlay`
- **Motion:** `--ease-default`, `--ease-spring`, `--ease-pop`, `--duration-fast`/`base`/`slow`

## Peer Dependencies

- `react` >= 18
- `react-dom` >= 18
- `@heroicons/react` >= 2.0.0 (used by Banner, Input, Select)

## License

MIT
