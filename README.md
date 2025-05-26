# infinite-ui-library

A flexible, customizable, and accessible React button component built with TypeScript and CSS modules.

## Installation

```bash
npm install infinite-ui-library
```

```bash
yarn add infinite-ui-library
```

```bash
pnpm add infinite-ui-library
```

## Prerequisites

This package requires the following peer dependencies:

```bash
npm install react
npm install --save-dev @types/react
```

## Quick Start

```tsx
import React from 'react';
import Button from 'infinite-ui-library';

function App() {
  return (
    <Button onClick={() => alert('Hello!')}>
      Click me!
    </Button>
  );
}
```

## API Reference

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `React.ReactNode` | - | Button content (optional) |
| `variant` | `'primary' \| 'secondary' \| 'danger' \| 'outline'` | `'primary'` | Button style variant |
| `size` | `'small' \| 'medium' \| 'large'` | `'medium'` | Button size |
| `disabled` | `boolean` | `false` | Disable the button |
| `onClick` | `(event: React.MouseEvent<HTMLButtonElement>) => void` | - | Click handler |
| `type` | `'button' \| 'submit' \| 'reset'` | `'button'` | HTML button type |
| `className` | `string` | - | Additional CSS classes |

## Examples

### Basic Usage

```tsx
import Button from 'infinite-ui-library';

// Simple button
<Button onClick={() => console.log('Clicked!')}>
  Click me
</Button>
```

### Variants

```tsx
// Primary button (default)
<Button variant="primary">
  Primary
</Button>

// Secondary button
<Button variant="secondary">
  Secondary
</Button>

// Danger button
<Button variant="danger">
  Delete
</Button>

// Outline button
<Button variant="outline">
  Outline
</Button>
```

### Sizes

```tsx
// Small button
<Button size="small">
  Small
</Button>

// Medium button (default)
<Button size="medium">
  Medium
</Button>

// Large button
<Button size="large">
  Large
</Button>
```

### Form Usage

```tsx
// Submit button
<Button type="submit" variant="primary">
  Submit Form
</Button>

// Reset button
<Button type="reset" variant="secondary">
  Reset
</Button>
```

### Disabled State

```tsx
<Button disabled>
  Disabled Button
</Button>

<Button disabled variant="danger">
  Disabled Danger
</Button>
```

### Custom Styling

```tsx
// With custom className
<Button className="my-custom-class">
  Custom Styled
</Button>

// Override styles with CSS
.my-custom-class {
  margin: 1rem;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}

// Override button variants
.btn--primary.my-custom-primary {
  background-color: #28a745;
  border-color: #28a745;
}
```

### Real-world Examples

```tsx
import React, { useState } from 'react';
import Button from 'infinite-ui-library';

function LoginForm() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    // API call
    await login();
    setLoading(false);
  };

  return (
    <form>
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      
      <Button 
        type="submit" 
        variant="primary" 
        size="large"
        disabled={loading}
        onClick={handleSubmit}
      >
        {loading ? 'Logging in...' : 'Login'}
      </Button>
      
      <Button variant="outline" size="medium">
        Cancel
      </Button>
    </form>
  );
}

function AlertDialog() {
  return (
    <div>
      <p>Are you sure you want to delete this item?</p>
      <Button variant="danger" size="small">
        Delete
      </Button>
      <Button variant="secondary" size="small">
        Cancel
      </Button>
    </div>
  );
}
```

## Styling

The component uses CSS classes with BEM methodology for easy customization:

### CSS Class Structure

```css
.btn                 /* Base button styles */
.btn--primary        /* Primary variant */
.btn--secondary      /* Secondary variant */
.btn--danger         /* Danger variant */
.btn--outline        /* Outline variant */
.btn--small         /* Small size */
.btn--medium        /* Medium size */
.btn--large         /* Large size */
```

### Customization

You can override styles by targeting the CSS classes:

```css
/* Custom primary button */
.btn--primary {
  background-color: #28a745;
  border-color: #28a745;
}

/* Custom hover state */
.btn--primary:hover:not(:disabled) {
  background-color: #218838;
  border-color: #218838;
}

/* Custom size */
.btn--extra-large {
  padding: 1rem 2rem;
  font-size: 1.25rem;
  border-radius: 0.75rem;
}
```

### Default Color Palette

- **Primary**: Blue (`#007bff`)
- **Secondary**: Gray (`#6c757d`)
- **Danger**: Red (`#dc3545`)
- **Outline**: Transparent with blue border

### Size Specifications

- **Small**: `padding: 0.25rem 0.5rem`, `font-size: 0.875rem`
- **Medium**: `padding: 0.5rem 1rem`, `font-size: 1rem`
- **Large**: `padding: 0.75rem 1.5rem`, `font-size: 1.125rem`

### Accessibility Features

- Proper focus states with visible focus rings
- Disabled state with reduced opacity
- Semantic HTML button element
- Keyboard navigation support
- Screen reader friendly

## TypeScript Support

This package is built with TypeScript and includes full type definitions:

```tsx
import Button, { ButtonProps } from 'infinite-ui-library';

const MyButton: React.FC<{ customProp: string }> = ({ customProp }) => {
  const buttonProps: ButtonProps = {
    variant: 'primary',
    size: 'large',
    onClick: () => console.log(customProp)
  };

  return <Button {...buttonProps}>Click me</Button>;
};
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Development

```bash
# Clone the repository
git clone https://github.com/shibilbasith/infinite-ui.git

# Install dependencies
npm install

# Start development server
npm run dev

# Run tests
npm test

# Build for production
npm run build
```

## License

MIT © [Shibil Basith](https://github.com/shibilbasith)

## Changelog

### v1.0.0
- Initial release
- Basic button variants (primary, secondary, danger, outline)
- Size options (small, medium, large)
- TypeScript support
- Accessibility features

---

**Keywords**: react, button, component, typescript, styled-components, ui, accessibility, npm