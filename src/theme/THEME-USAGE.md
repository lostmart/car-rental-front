# Theme Usage Guide

This guide explains how to use the semantic color system in the luxury rental car application.

## Color System Overview

The theme uses a semantic color system with three main categories:

### 1. Brand Colors
Primary brand colors for identity and key interactions:

```tsx
// In components
<Box bg="brand.primary">     // Gold (#D4AF37)
<Box bg="brand.secondary">   // Navy (#1A1A2E)
<Box bg="brand.accent">      // Light gold (#C5A572) for hovers
```

**Usage:**
- `brand.primary` - Main gold color for CTAs, highlights
- `brand.secondary` - Dark navy for contrast sections, headers
- `brand.accent` - Lighter gold for hover states, interactions
- `brand.burgundy` - Legacy burgundy accent

### 2. Surface Colors
Background colors for different sections:

```tsx
<Box bg="surface.light">     // White (#FFFFFF)
<Box bg="surface.offWhite">  // Cream (#FAF9F6)
<Box bg="surface.muted">     // Light beige (#F5F5DC)
<Box bg="surface.dark">      // Navy (#1A1A2E)
<Box bg="surface.darkAlt">   // Charcoal (#2C2C2C)
<Box bg="surface.overlay">   // Navy with 80% opacity
```

**Usage:**
- `surface.light` - Main content areas
- `surface.offWhite` - Body background, subtle sections
- `surface.muted` - Alternating sections, cards
- `surface.dark` - Hero sections, footers
- `surface.overlay` - Modal backgrounds, image overlays

### 3. Text Colors
Consistent text colors for readability:

```tsx
<Text color="text.primary">    // Near-black (#1F1F1F)
<Text color="text.secondary">  // Gray (#A5A58D)
<Text color="text.muted">      // Light gray (#696969)
<Text color="text.inverse">    // White for dark backgrounds
<Text color="text.accent">     // Gold for highlights
<Link color="text.link">       // Dark gold for links
```

**Usage:**
- `text.primary` - Body text, main content
- `text.secondary` - Subheadings, captions
- `text.muted` - Placeholder text, less important info
- `text.inverse` - Text on dark backgrounds
- `text.accent` - Highlighted text, prices, special info
- `text.link` / `text.linkHover` - Link states

## Component Usage Examples

### Buttons

```tsx
// Primary gold button
<Button variant="solid">Book Now</Button>

// Navy button
<Button variant="navy">Learn More</Button>

// Outline button
<Button variant="outline">View Details</Button>

// Ghost button
<Button variant="ghost">Cancel</Button>
```

### Headings

```tsx
// Default heading (dark text)
<Heading>Luxury Fleet</Heading>

// Accent heading (gold)
<Heading variant="accent">Special Offer</Heading>

// Inverse heading (white for dark backgrounds)
<Heading variant="inverse">Premium Experience</Heading>

// Gradient heading
<Heading variant="gradient">Stand Out</Heading>
```

### Sections with Semantic Colors

```tsx
// Light section
<Box bg="surface.light" color="text.primary">
  <Heading>Our Services</Heading>
  <Text>Quality rental experience...</Text>
</Box>

// Dark section
<Box bg="surface.dark" color="text.inverse">
  <Heading variant="inverse">Contact Us</Heading>
  <Text>Get in touch today...</Text>
</Box>

// Muted section (alternating)
<Box bg="surface.muted" color="text.primary">
  <Heading>Why Choose Us</Heading>
  <Text>Premium vehicles...</Text>
</Box>
```

### Cards with Surface Colors

```tsx
// Light card
<Box
  bg="surface.light"
  borderRadius="lg"
  p={6}
  boxShadow="md"
>
  <Heading size="md">Vehicle Name</Heading>
  <Text color="text.secondary">Description</Text>
  <Text color="text.accent" fontWeight="bold">$199/day</Text>
</Box>
```

## Direct Color Scale Access

You can still access the full color scales when needed:

```tsx
// Gold scale
<Box bg="gold.500">   // Main gold
<Box bg="gold.100">   // Very light gold
<Box bg="gold.900">   // Very dark gold

// Navy scale
<Box bg="navy.900">   // Dark navy
<Box bg="navy.500">   // Mid navy
<Box bg="navy.100">   // Light navy

// Neutral scale
<Box bg="neutral.100"> // Cream
<Box bg="neutral.500"> // Mid beige

// Gray scale
<Box bg="gray.700">   // Dark charcoal
<Box bg="gray.300">   // Light gray
```

## Status Colors

For UI states and feedback:

```tsx
<Alert status="success" /> // Uses status.success
<Alert status="warning" /> // Uses status.warning
<Alert status="error" />   // Uses status.error
<Alert status="info" />    // Uses status.info
```

## Best Practices

1. **Always use semantic tokens first** - Use `brand.primary` instead of `gold.500` for consistency
2. **Text on dark backgrounds** - Always use `text.inverse` or white
3. **Interactive elements** - Use `brand.primary` with `brand.accent` for hover states
4. **Section alternation** - Alternate between `surface.light`, `surface.muted`, and `surface.dark`
5. **Maintain contrast** - Ensure sufficient contrast ratios for accessibility
6. **Link colors** - Use `text.link` and `text.linkHover` for consistent link styling

## Migration from Old System

If you're updating existing code:

| Old Color | New Semantic Token |
|-----------|-------------------|
| `primary.500` | `brand.primary` |
| `primary.600` | `brand.accent` |
| `secondary.600` | `brand.burgundy` |
| `neutral.100` | `surface.offWhite` |
| `neutral.50` | `surface.light` |
| `accent.700` | `text.primary` |
| `neutral.600` | `text.secondary` |

## Dark Mode Support

The theme includes semantic tokens that automatically adjust for dark mode:

```tsx
// Automatically switches in dark mode
<Box bg="bg-surface">      // light → surface.light, dark → surface.dark
<Text color="text-body">   // light → text.primary, dark → text.inverse
<Box bg="bg-muted">        // light → surface.muted, dark → gray.800
```
