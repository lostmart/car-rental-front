# Button Component Specification

Button Component Implementation Guide
For Claude Agents Building Luxury Car Rental UI Components

Context & Purpose
You are implementing button components for a luxury car rental web application built with React and Chakra UI. This guide defines all button variants, states, and usage patterns.
The button system supports the brand's premium, sophisticated, trustworthy aesthetic while ensuring excellent usability and accessibility.

Button Variants
Six variants are available. Choose based on action hierarchy, not visual preference.

Solid (Default)
Purpose: Primary actions, main CTAs
Background: brand.primary (gold)
Text: white
Hover: Lift 2px with enhanced shadow
Active: Return to base position
When to use: The most important action in a given context. One solid button per section maximum.
Example contexts: "Book Now", "Reserve Vehicle", "Get Started"

Navy
Purpose: Secondary prominent actions
Background: brand.secondary (navy)
Text: white
Hover: Lift 2px with enhanced shadow
Active: Return to base position
When to use: Important actions that shouldn't compete with the primary CTA. Alternative visual weight to solid.
Example contexts: "Learn More", "View Fleet", "Contact Us"

Outline
Purpose: Tertiary actions, alternatives to primary
Background: transparent
Border: brand.primary (gold)
Text: brand.primary (gold)
Hover: Light gold background fill
Active: Slightly darker fill
When to use: Secondary options alongside a primary button. "Cancel" paired with "Submit". Alternative paths.
Example contexts: "Cancel", "View Details", "Compare Options"

Ghost
Purpose: Subtle actions, minimal visual weight
Background: transparent
Border: none
Text: brand.primary (gold)
Hover: Subtle background tint
Active: Slightly darker tint
When to use: Actions that should be available but not prominent. Tertiary options. Inline actions within content.
Example contexts: "Skip", "Maybe Later", "Dismiss"

Link
Purpose: Text-style button for inline navigation
Background: transparent
Border: none
Text: link color (blue)
Hover: Underline
Active: Darker shade
When to use: When the action feels more like navigation than a button. Inline with text content.
Example contexts: "View all vehicles", "Read more", "Terms and conditions"

Submit
Purpose: Form submission buttons specifically
Background: brand.primary (gold)
Text: white
Width: Full on mobile (base), auto on desktop (md+)
Hover: Lift 2px with enhanced shadow
Loading: Spinner with custom text
Disabled: Reduced opacity, no hover effects
When to use: Always use for form submit buttons. Provides built-in responsive width and optimized loading states.
Example contexts: "Reserve Now", "Submit Booking", "Send Message", "Complete Reservation"

Button Sizes
SizeHeightHorizontal PaddingFont SizeUse Casexs24px12pxxsCompact UIs, inline tagssm32px16pxsmSecondary actions, tight spacesmd40px24pxmdDefault, general uselg48px32pxlgPrimary CTAs, form submissionsxl56px40pxxlHero sections, maximum emphasis
Decision rule: Use lg for primary actions and form submissions. Use md for secondary actions. Use sm or xs only when space is constrained.

Button States
Loading
Behavior:

- Displays spinner (start position by default)
- Shows loadingText if provided
- Automatically disables interaction
- Removes hover effects
- Maintains button dimensions
  Required props:

isLoading={true} — triggers loading state
loadingText="..." — optional, replaces button text

Spinner placement: Default is start. Use spinnerPlacement="end" if needed.

Disabled
Behavior:

- Opacity reduced to 0.5
- Cursor changes to not-allowed
- No hover or active effects
- Click events prevented
  Required props:

isDisabled={true} — triggers disabled state

When to disable:

Form is invalid
Required data is missing
Action is temporarily unavailable
During submission (handled automatically by isLoading)

Focus
Behavior:

- Visible outline for keyboard navigation
- Uses Chakra's focus ring system
- Maintains accessibility compliance
  Do not remove focus styles. They are required for accessibility.

Icons in Buttons
Icons can be placed before or after button text.
Left icon: Use for actions where the icon reinforces the verb. "✓ Confirm", "← Back"
Right icon: Use for directional actions. "Next →", "Download ↓"
Props:

leftIcon={<IconComponent />}
rightIcon={<IconComponent />}

Sizing: Icons automatically scale with button size. Do not manually size icons within buttons.

Responsive Patterns
Full Width Mobile, Auto Desktop
The submit variant handles this automatically. For other variants:
Width: base="full", md="auto"
When to use: Any button that serves as a section's primary action on mobile.

Stacked Buttons
When multiple buttons appear together:
Mobile: Stack vertically, full width each
Desktop: Horizontal row, auto width each
Stack direction: base="column", md="row"
Button width: base="full", md="auto"
Spacing: 4 (16px)
Order convention: Primary action last (rightmost on desktop, bottom on mobile stacked).

Form Submit Button Specification
This is the most common button pattern in the application.
Required Configuration
Variant: submit
Type: submit (HTML attribute)
Size: lg
Props:

- isLoading: bound to form submission state
- loadingText: descriptive text ("Reserving...", "Sending...")
- isDisabled: bound to form validity state (optional if validation is inline)
  Built-in Behaviors
  The submit variant includes:

Full width on mobile, auto width on desktop
Optimized loading state presentation
Enhanced disabled styling
Primary brand color
Hover lift animation
Focus accessibility

Loading Text Conventions
Form TypeLoading TextBooking/Reservation"Reserving..."Contact/Message"Sending..."General submission"Submitting..."Payment"Processing..."Search"Searching..."

Variant Selection Decision Tree

Is this a form submit button? → submit
Is this the primary action in the section? → solid
Is this a prominent secondary action? → navy
Is this an alternative to the primary action? → outline
Is this a subtle/dismissive action? → ghost
Is this inline navigation within text? → link

Hierarchy Rules
Within a single section or card:

Maximum one solid or submit button
outline or ghost for secondary actions
Never place two buttons of equal visual weight side by side

Button pairing examples:

"Submit" (submit) + "Cancel" (ghost)
"Reserve Now" (solid) + "View Details" (outline)
"Confirm" (solid) + "Go Back" (ghost)

Animation Specifications
All buttons include these transitions:
PropertyDurationEasingBackground color200mseaseTransform (hover lift)200mseaseBox shadow200mseaseOpacity (disabled)200msease
Hover lift: translateY(-2px) with increased shadow
Active press: Return to translateY(0) with base shadow

Accessibility Requirements
All buttons must have:

Visible focus indicator (do not remove)
Sufficient color contrast (WCAG AA minimum)
Disabled state prevents keyboard activation
Loading state announced to screen readers
Descriptive text (avoid "Click here")

Icon-only buttons: Must include aria-label with descriptive text.

Constraints

Never use more than one solid button per section.
Never remove or override focus styles.
Never use arbitrary colors. All colors come from variant definitions.
Always use type="submit" on form submission buttons.
Always provide loadingText when using isLoading.
Never use xs size for primary actions.
Never disable buttons without clear reason — prefer inline validation messaging.

Anti-Patterns
Do not:

Place multiple primary buttons competing for attention
Use solid variant for cancel/back actions
Omit loading state feedback on async operations
Use link variant for buttons that don't navigate
Override responsive width on submit variant without reason
Use icon-only buttons without aria-label

Validation Checklist
Before completing any component with buttons, verify:

Correct variant selected based on action hierarchy
Size appropriate for context (lg for primary, md for secondary)
type="submit" present on form buttons
Loading state implemented for async actions
Disabled state tied to form validity if applicable
Only one primary button per section
Responsive width behavior is correct
Focus states are visible and functional

Quick Reference
Standard Submit Button:
Variant: submit
Type: submit
Size: lg
isLoading: {submissionState}
loadingText: "Reserving..."
isDisabled: {!formValidity} (optional)
Primary CTA:
Variant: solid
Size: lg
Secondary Action:
Variant: outline
Size: md
Cancel/Dismiss:
Variant: ghost
Size: md

This guide is your single source of truth for button implementation decisions. When uncertain, default to the variant that matches the action's importance in the user flow, not its desired appearance.
