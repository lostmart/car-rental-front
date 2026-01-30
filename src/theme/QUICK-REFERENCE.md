# Theme Quick Reference

Fast reference for colors, typography, and components.

## Colors

### Brand
```tsx
bg="brand.primary"      // Gold #D4AF37
bg="brand.secondary"    // Navy #1A1A2E
bg="brand.accent"       // Light gold (hover)
```

### Surface (Backgrounds)
```tsx
bg="surface.light"      // White
bg="surface.offWhite"   // Cream
bg="surface.muted"      // Beige
bg="surface.dark"       // Navy
bg="surface.overlay"    // Navy transparent
```

### Text
```tsx
color="text.primary"    // Near-black
color="text.secondary"  // Gray
color="text.muted"      // Light gray
color="text.inverse"    // White
color="text.accent"     // Gold
color="text.link"       // Link blue
```

## Typography

### Text Styles (Use with textStyle prop)
```tsx
<Text textStyle="eyebrow">LABEL</Text>
<Heading textStyle="sectionTitle">Heading</Heading>
<Text textStyle="sectionSubtitle">Subtitle</Text>
<Heading textStyle="heroTitle">Big Hero</Heading>
<Text textStyle="body">Paragraph</Text>
<Text textStyle="cardTitle">Card Name</Text>
<Text textStyle="price">$199</Text>
<Text textStyle="caption">Caption text</Text>
<Text textStyle="label">Form Label</Text>
```

### Text Variants
```tsx
<Text variant="eyebrow">LABEL</Text>
<Text variant="body">Standard</Text>
<Text variant="bodyLarge">Large</Text>
<Text variant="bodySmall">Small</Text>
<Text variant="muted">Muted</Text>
<Text variant="accent">Gold</Text>
<Text variant="price">$199</Text>
```

## Components

### Button
```tsx
<Button variant="solid">Primary</Button>
<Button variant="navy">Navy</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button size="sm|md|lg">Sized</Button>
```

### Heading
```tsx
<Heading variant="default">Standard</Heading>
<Heading variant="accent">Gold</Heading>
<Heading variant="inverse">White</Heading>
<Heading variant="gradient">Gradient</Heading>
<Heading size="xs|sm|md|lg|xl|2xl|3xl">Sized</Heading>
```

### Input
```tsx
<Input variant="outline" />    {/* Default */}
<Input variant="filled" />
<Input variant="flushed" />
<Input size="sm|md|lg" />
```

### Link
```tsx
<Link variant="default">Link</Link>
<Link variant="primary">Gold Link</Link>
<Link variant="nav">Nav Link</Link>
<Link variant="inverse">White Link</Link>
```

## Common Patterns

### Hero Section
```tsx
<Box bg="surface.dark" py={20}>
  <Text textStyle="eyebrow" color="text.accent">LABEL</Text>
  <Heading textStyle="heroTitle" color="text.inverse">Title</Heading>
  <Text textStyle="heroSubtitle" color="text.inverse">Subtitle</Text>
  <Button size="lg">CTA</Button>
</Box>
```

### Content Section
```tsx
<Box bg="surface.light" py={16}>
  <Text textStyle="eyebrow">LABEL</Text>
  <Heading textStyle="sectionTitle">Section Heading</Heading>
  <Text textStyle="sectionSubtitle">Description</Text>
</Box>
```

### Card
```tsx
<Box bg="white" p={6} borderRadius="lg" boxShadow="md">
  <Heading textStyle="cardTitle">Title</Heading>
  <Text textStyle="cardSubtitle">Subtitle</Text>
  <Text textStyle="body" mt={3}>Description</Text>
  <Text textStyle="price" mt={4}>$199</Text>
</Box>
```

### Feature
```tsx
<Box textAlign="center" p={6}>
  <Icon boxSize={12} color="brand.primary" />
  <Heading textStyle="featureTitle">Feature</Heading>
  <Text textStyle="featureDescription">Description</Text>
</Box>
```

## Font Families
```tsx
fontFamily="heading"  // Playfair Display (serif)
fontFamily="body"     // Inter (sans-serif)
```

## Spacing
```tsx
p={4}        // 1rem
m={8}        // 2rem
gap={6}      // 1.5rem
py={16}      // 4rem (sections)
px={{ base: 4, md: 6, lg: 8 }}  // Responsive
```

## Common Combinations

### Dark Section + Light Text
```tsx
bg="surface.dark"
color="text.inverse"
```

### Light Section + Dark Text
```tsx
bg="surface.light"
color="text.primary"
```

### Alternating Section
```tsx
bg="surface.muted"
color="text.primary"
```

### Accent Highlight
```tsx
color="text.accent"
fontWeight="bold"
```

## Breakpoints
```tsx
{ base: "mobile", md: "tablet", lg: "desktop", xl: "wide" }
```

## Status Colors
```tsx
color="status.success"  // Green
color="status.warning"  // Amber
color="status.error"    // Red
color="status.info"     // Blue
```
