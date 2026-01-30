# Typography Usage Guide

Complete guide for using the semantic typography system in the luxury rental car application.

Typography System Implementation Guide
For Claude Agents Building Luxury Car Rental UI Components

Context & Purpose
You are implementing a typography system for a luxury car rental web application built with React and Chakra UI. This guide defines the semantic text styles that maintain visual consistency across all components.
The design language conveys premium, sophisticated, trustworthy — think high-end automotive brands like Mercedes-Benz or Porsche dealership websites.

Font Stack
Two fonts only. No exceptions.
RoleFont FamilyFallbackUsageDisplay/HeadingsPlayfair DisplayGeorgia, serifHeadlines, titles, pricesBody/UIIntersystem-ui, sans-serifEverything else
Loading: Import both from Google Fonts in the app's <head> or via @fontsource packages.

Semantic Text Styles Reference
Use these text styles via Chakra's textStyle prop. Never create ad-hoc font sizes when a semantic style exists.
Eyebrow
Purpose: Small label above section titles, category tags
Font: Inter
Size: xs (12px)
Weight: Semibold (600)
Transform: Uppercase
Letter-spacing: Widest (0.1em)
Color: brand.primary (gold accent)
When to use: Section pre-labels, breadcrumb-style indicators, category badges
Example context: "PREMIUM FLEET" appearing above "Our Vehicles" heading

Hero Title
Purpose: Primary headline in hero/landing sections
Font: Playfair Display
Size: 4xl → 5xl → 6xl → 7xl (responsive: base/sm/md/lg)
Weight: Bold (700)
Letter-spacing: Tighter (-0.025em)
Color: Contextual (text.primary on light, text.inverse on dark)
When to use: Main hero section headline only. One per page maximum.

Hero Subtitle
Purpose: Supporting text directly below hero title
Font: Inter
Size: xl → 2xl → 3xl (responsive)
Weight: Normal (400)
Color: text.secondary or text.inverse depending on background
When to use: Tagline or value proposition beneath hero headline

Section Title
Purpose: Primary heading for content sections
Font: Playfair Display
Size: 3xl → 4xl → 5xl (responsive)
Weight: Bold (700)
Color: text.primary
When to use: Main heading for any content section (Fleet, About, FAQ, etc.)

Section Subtitle
Purpose: Explanatory text below section title
Font: Inter
Size: lg → xl (responsive)
Weight: Normal (400)
Color: text.secondary
Line-height: Relaxed (1.625)
When to use: One to two sentences elaborating on section purpose

Card Title
Purpose: Heading within card components
Font: Playfair Display
Size: xl → 2xl (responsive)
Weight: Semibold (600)
Color: text.primary
When to use: Vehicle names, service titles, feature card headings

Card Subtitle
Purpose: Secondary label within cards
Font: Inter
Size: sm (14px)
Weight: Normal (400)
Color: text.secondary
When to use: Vehicle category, service type, metadata below card title

Feature Title
Purpose: Heading for feature/benefit items
Font: Playfair Display
Size: lg (18px)
Weight: Bold (700)
Color: text.primary
When to use: Individual feature headings in a grid or list

Feature Description
Purpose: Body text explaining a feature
Font: Inter
Size: md (16px)
Weight: Normal (400)
Color: text.secondary
Line-height: Relaxed (1.625)
When to use: Description text beneath feature titles

Body
Purpose: Standard paragraph text
Font: Inter
Size: md (16px)
Weight: Normal (400)
Color: text.primary
Line-height: Relaxed (1.625)
When to use: General content, descriptions, paragraphs

Body Large
Purpose: Emphasized introductory paragraphs
Font: Inter
Size: lg (18px)
Weight: Normal (400)
Line-height: Relaxed (1.625)
When to use: Lead paragraphs, important callouts

Body Small
Purpose: Secondary information, fine print
Font: Inter
Size: sm (14px)
Weight: Normal (400)
Color: text.secondary
When to use: Helper text, terms, disclaimers, metadata

Price
Purpose: Primary price display
Font: Playfair Display
Size: 2xl → 3xl (responsive)
Weight: Bold (700)
Color: brand.primary (gold accent)
When to use: Main pricing on cards, booking summaries

Price Small
Purpose: Secondary or inline pricing
Font: Playfair Display
Size: xl (20px)
Weight: Semibold (600)
Color: brand.primary
When to use: Smaller price displays, price per unit indicators

Label
Purpose: Form field labels
Font: Inter
Size: sm (14px)
Weight: Medium (500)
Color: text.primary
When to use: All form input labels

Nav Link
Purpose: Navigation menu items
Font: Inter
Size: md (16px)
Weight: Medium (500)
Color: text.primary
Hover: brand.primary
When to use: Header navigation, footer links

Caption
Purpose: Image captions, credits, subtle annotations
Font: Inter
Size: xs (12px)
Weight: Normal (400)
Style: Italic
Color: text.muted
When to use: Photo credits, timestamps, auxiliary notes

Text Component Variants
When using the <Text> component, these variants are available:
VariantPurposeeyebrowSection pre-labelsbodyStandard paragraphsbodyLargeEmphasized paragraphsbodySmallSecondary textmutedDe-emphasized contentaccentGold-colored emphasisinverseWhite text for dark backgroundscaptionItalic captionslabelForm labelspriceLarge pricingpriceSmallSmaller pricing

Link Variants
VariantBehaviordefaultStandard link with underline on hoverprimaryGold colored, brand emphasisnavNavigation style, no underlineinverseWhite for dark backgroundsunstyledInherits parent styling

Implementation Patterns
Section Header Pattern
Every major section follows this structure:
[Eyebrow] — small uppercase label
[Section Title] — main heading
[Section Subtitle] — optional supporting text
Apply consistent spacing: eyebrow has mb={3}, title has mt={0}, subtitle has mt={4}.

Card Content Pattern
Vehicle and feature cards follow:
[Card Subtitle] — category/type (optional, above title)
[Card Title] — primary name
[Body or Feature Description] — details
[Price] — if applicable

Form Field Pattern
[Label] — field name
[Input] — form control
[Body Small] — helper text (optional)

Decision Rules
When deciding which text style to use:

Is it a pre-label above a heading? → eyebrow
Is it the main page headline in a hero? → heroTitle
Is it a section's primary heading? → sectionTitle
Is it inside a card? → cardTitle or cardSubtitle
Is it describing a feature/benefit? → featureTitle or featureDescription
Is it standard paragraph content? → body
Is it pricing? → price or priceSmall
Is it a form label? → label
Is it navigation? → navLink
Is it auxiliary/caption text? → caption or bodySmall

Constraints

Never use arbitrary font sizes. If none of the semantic styles fit, reconsider the design decision.
Never introduce a third font family.
Never use font weights outside the defined set (400, 500, 600, 700).
Always pair text styles with semantic colors (text.primary, text.secondary, text.muted, text.inverse, text.accent).
Respect responsive scaling. Do not override responsive sizes with fixed values unless explicitly required.

Color Pairing Quick Reference
Text StyleDefault ColorOn Dark Backgroundeyebrowbrand.primarybrand.primaryheroTitletext.primarytext.inverseheroSubtitletext.secondarytext.inverse (with opacity)sectionTitletext.primarytext.inversesectionSubtitletext.secondarytext.inverse (with opacity)bodytext.primarytext.inversepricebrand.primarybrand.primarycaptiontext.mutedtext.inverse (with opacity)

Validation Checklist
Before completing any component, verify:

All text uses a defined textStyle or variant
No hardcoded font sizes, weights, or families
Headings use Playfair Display, body uses Inter
Colors use semantic tokens, not raw values
Responsive sizing works at all breakpoints
Text is readable (contrast ratio meets WCAG AA)
