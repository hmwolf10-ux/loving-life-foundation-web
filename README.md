# The Loving Life Foundation — Website

Public website for the Loving Life Foundation of Zach Matla, Inc. A single-page React application featuring information about the foundation's annual golf tournament and scholarship program.

## Overview

**6th Annual Golf Tournament**  
Saturday, August 1, 2026 · 10:00 AM Shotgun Start  
Shamrock Hills Golf Club, Holland, NY

**Scholarship Program**  
2026 Recipients: Josh Pfeiffer, Vincent Vaillancourt

**Contact**  
Angela Terhart · (716) 983-2392  
Marc Matla · (716) 818-0282

## Running Locally

### Prerequisites
- Node.js (runtime server)
- PowerShell (for the included server script)

### Start the Development Server

```bash
cd loving-life-foundation-web
./server.ps1
```

The site will be available at `http://localhost:3000`.

**Note:** The application uses React 18 with Babel JSX compilation at runtime (not pre-built). Changes to `.jsx` files are compiled live by the browser; refreshing the page will display updates.

## Project Structure

```
src/
├── index.html              # Main app entry point; contains DATES constant
├── components/
│   ├── SiteHeader.jsx      # Navigation header
│   └── SiteFooter.jsx      # Footer
└── pages/
    ├── HomeScreen.jsx      # Landing page
    ├── TournamentScreen.jsx # Golf tournament details & registration
    ├── ScholarshipScreen.jsx # Scholarship program & recipients
    ├── StoryScreen.jsx     # Foundation story & impact
    └── DonateScreen.jsx    # Donation section

design-system/
├── tokens/
│   ├── colors.css          # Brand color tokens
│   ├── typography.css      # Font & type scale
│   ├── spacing.css         # Spacing system
│   └── layout.css          # Layout utilities
└── README.md               # Design system documentation

config/
└── (configuration files)

docs/
└── (generated documentation)
```

## Key Configuration

**DATES constant** (`src/index.html`, line 30)  
Hardcoded dates that override component defaults across the entire site:
- Tournament edition, date, time
- Application deadlines
- Scholarship year

Update this object to reflect current year information.

## Design System

The site uses a custom design system with CSS tokens defined in `design-system/tokens/`.

**Brand Colors:**
- Primary Navy: `#1a2a49`
- Accent Orange: `#F26B1F`
- Highlight Green: `#5DD90A`

**Typography:**
- Display: Playfair Display
- Condensed: Oswald
- Body: Inter
- Monospace: JetBrains Mono

See `design-system/README.md` for full token documentation.

## Deployment

The site is deployed to GitHub Pages at:  
https://hmwolf10-ux.github.io/loving-life-foundation-web

Changes merged to `main` are automatically deployed via GitHub Actions.

## About the Foundation

The Loving Life Foundation was founded in 2018 to keep Zach Matla's story alive through scholarships and community events. Since then, we've awarded 27 scholarships and hosted six golf tournaments.

For more information, visit the foundation's website or contact Angela or Marc using the phone numbers above.
