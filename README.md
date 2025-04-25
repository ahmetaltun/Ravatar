# Ravatar 🎭

A customizable React avatar placeholder component with multiple stylish avatar sets.

## Features

- 📦 Multiple avatar sets (3D, Bluey, Memo, Notion, Teams, Toon, Upstream, Vibrent)
- 🎲 Random avatar selection from any category
- 🎨 Fully customizable sizing and styling
- 🔄 Custom fallback support
- 🛡️ Error handling
- 📱 Responsive design

## Installation

```bash
npm install ravatar
# or
yarn add ravatar
```

## Usage

```jsx
import { Ravatar } from 'ravatar';

function App() {
  return (
    <div>
      {/* Basic usage */}
      <Ravatar name="3d" number={1} />
      
      {/* Custom sizing */}
      <Ravatar name="notion" number={5} width={64} height={64} />
      
      {/* With custom styles */}
      <Ravatar 
        name="toon" 
        number={3} 
        className="custom-avatar" 
        style={{ borderRadius: '50%' }} 
      />
      
      {/* With fallback */}
      <Ravatar
        name="teams"
        number={2}
        fallback={<span>Avatar failed to load</span>}
      />

      {/* Random avatar from any category */}
      <Ravatar random={true} />

      {/* Random avatar from selected category */}
      <Ravatar name="3d" random={true} />
    </div>
  );
}
```

## ⚠️ Performance Warning

Please note that when importing the main `Ravatar` component directly, all avatar images are loaded at once, which increases your bundle size, loading time and bandwidth usage by approximately 1.4 MB.

### Optimized Imports

To minimize bundle size, loading time and bandwidth usage, you can import individual avatar components directly:

```jsx
// Import only a specific avatar component
import { RavatarTeams } from 'ravatar';
import { Ravatar3D } from 'ravatar';
import { RavatarToon } from 'ravatar';
// ... and so on

function App() {
  return (
    <div>
      {/* Teams style avatar */}
      <RavatarTeams number={2} />
      
      {/* 3D style avatar */}
      <Ravatar3D number={3} />
      
      {/* Toon style avatar */}
      <RavatarToon random={true} />
    </div>
  );
}
```

This approach only loads the specific avatar set you need, significantly reducing the bundle size. All avatar sets have dedicated components that can be imported individually.

## Avatar Sets

Ravatar includes the following avatar sets:

| Name | Description | Count | Component |
|------|-------------|-------|----------|
| 3d | 3D style avatars | 5 | `Ravatar3D` |
| bluey | Blue-themed avatars | 10 | `RavatarBluey` |
| memo | Memo-style avatars | 10 | `RavatarMemo` |
| notion | Notion-inspired avatars | 10 | `RavatarNotion` |
| teams | Teams-style avatars | 9 | `RavatarTeams` |
| toon | Cartoon avatars | 10 | `RavatarToon` |
| upstream | Upstream collection | 10 | `RavatarUpstream` |
| vibrent | Vibrant/colorful avatars | 10 | `RavatarVibrent` |

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| name | string | undefined | Avatar set name (one of: '3d', 'bluey', 'memo', 'notion', 'teams', 'toon', 'upstream', 'vibrent'). If not provided, a random category will be selected |
| number | number | undefined | Avatar number within the selected set (1-based index). If not provided, a random number will be selected within the category |
| random | boolean | false | If true, selects a random avatar from any category, ignoring name and number props |
| alt | string | 'React Avatar' | Alternative text for the avatar image |
| width | number \| 'auto' | 'auto' | Width of the avatar |
| height | number \| 'auto' | 'auto' | Height of the avatar |
| className | string | '' | Additional CSS class names |
| style | CSSProperties | {} | Additional inline styles |
| customSrc | string | undefined | Optional custom image path to override the generated path |
| fallback | ReactNode | undefined | Fallback content to display if the image fails to load |

## Development

```bash
# Install dependencies
npm install

# Run development mode
npm run dev

# Build for production
npm run build
```

## Credits

Special thanks to [Alohe](https://github.com/alohe) for providing the beautiful avatar images used in this package. The avatars are sourced from the [Alohe Avatars repository](https://github.com/alohe/avatars).