# Image Mapping Documentation

This document maps the placeholder images from the Figma export to the actual image files in `/public/`.

## Image Mappings

### Hero Section
- **Hero Background** (1817x1014)
  - Placeholder: `https://via.placeholder.com/1817x1014`
  - Actual File: `/99ecdfc1ca19abce9e30036f40aabc08fa126871.png`
  - Description: Heavenly pillars, clouds, and divine pathway background
  - Location: HeroSection component, main background image

### Automation Suite Section

#### Athena - The Hot Leads Strategist
- **Agent Image** (569x569)
  - Placeholder: `https://via.placeholder.com/569x569`
  - Actual File: `/fd36440db01cbba87d25446db3251733b3e469b8.png`
  - Description: Athena AI agent portrait
  - Location: AutomationSuiteSection component, first agent card

#### Apollo - The Oracle of New Talent & Trends
- **Agent Image** (569x569)
  - Placeholder: `https://via.placeholder.com/569x569`
  - Actual File: `/99ecdfc1ca19abce9e30036f40aabc08fa126871.png`
  - Description: Apollo AI agent portrait
  - Location: AutomationSuiteSection component, second agent card

#### Aphrodites - The Muse of Storytelling & Spotlight
- **Agent Image** (569x569)
  - Placeholder: `https://via.placeholder.com/569x569`
  - Actual File: `/fd36440db01cbba87d25446db3251733b3e469b8.png`
  - Description: Aphrodites AI agent portrait
  - Location: AutomationSuiteSection component, third agent card

#### Artemis - The Architect of Data-Driven Insight
- **Agent Image** (569x569)
  - Placeholder: `https://via.placeholder.com/569x569`
  - Actual File: `/99ecdfc1ca19abce9e30036f40aabc08fa126871.png`
  - Description: Artemis AI agent portrait
  - Location: AutomationSuiteSection component, fourth agent card

### Partnership Section
- **Background Image** (569x569)
  - Placeholder: `https://via.placeholder.com/569x569`
  - Actual File: `/fd36440db01cbba87d25446db3251733b3e469b8.png`
  - Description: Majestic palace interior with cloudscape
  - Location: PartnershipSection component, background image with opacity

### Logo and Icons
- **Elysium Logo**
  - Actual File: `/3a11b6572afa89cba912b80b99a894f4364b1ef9.svg`
  - Location: HeroSection (top left), FooterSection

- **Decorative Wings Icon**
  - Actual File: `/3a79222fe987d2adacd450469e4248f871ab9251.svg`
  - Location: HeroSection (below tagline)

## Notes

1. **Image Alternation**: Due to limited unique images available, the two PNG files (`99ecdfc1ca19abce9e30036f40aabc08fa126871.png` and `fd36440db01cbba87d25446db3251733b3e469b8.png`) are alternated across the four agent cards and other sections.

2. **SVG Files**: The remaining 33 SVG files in `/public/` appear to be decorative elements, icons, or vector graphics that may be used for:
   - Logo variations
   - Decorative elements
   - Icons and symbols
   - UI embellishments

3. **Recommendations**: 
   - Replace the alternating agent images with actual unique portraits for each AI agent (Athena, Apollo, Aphrodites, Artemis)
   - Ensure the hero background image matches the "heavenly pillars and clouds" theme
   - Consider using the SVG files for decorative elements throughout the design

4. **Image Optimization**: All images should be optimized for web delivery. Consider:
   - Converting large PNGs to WebP format
   - Using Next.js Image component for automatic optimization
   - Implementing lazy loading for below-the-fold images

