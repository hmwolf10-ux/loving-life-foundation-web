# The Loving Life Foundation — Website

Public website for the Loving Life Foundation of Zach Matla, Inc. A single-page React application featuring information about the foundation's annual golf tournament and scholarship program.

## Live Website

[Open the Loving Life Foundation website](https://hmwolf10-ux.github.io/loving-life-foundation-web/)

## Overview

This website is updated every year with the current golf tournament details,
scholarship application dates, scholarship recipients, and contact information.
The current year's editable content is stored in `src/content.js`.

**Annual Golf Tournament**  
The tournament date, start time, location, pricing, and registration details
change from year to year.

**Scholarship Program**  
Application deadlines, award year, and recipient information change from year to
year.

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
index.html                  # Canonical browser entry point
server.ps1                  # Repository-relative local static server
src/
├── App.jsx                 # React app composition and navigation state
├── content.js              # Shared event and contact content
├── components/             # Site header and footer
├── pages/                  # Home, scholarship, tournament, story, donate
└── styles/                 # Website styles and design-system imports
public/assets/              # Website images and logos
design-system/
├── components/             # Reusable brand primitives
├── guidelines/             # Brand and usage specimens
└── tokens/                 # CSS custom-property tokens
docs/                       # Project and design-system documentation
config/                     # Design-system tooling metadata
```

There is one website entry point: the root `index.html`. Application code
belongs in `src/`; do not add another HTML application shell there.

## Content Configuration

All public, year-changing content lives in `src/content.js`: the current
tournament record, scholarship dates and recipients, donation instructions, and
contact information. At the end of a year, copy the current record into
`archive`, add the next year's record, and change its `status` from `upcoming`
to `completed` after the event. Leave dates or prices blank until they are
confirmed; the site will display “to be announced” rather than inventing
details.

## Design System

The site uses CSS tokens defined in `design-system/tokens/`. Website styles
import those tokens through `src/styles/styles.css`. Reusable design-system
components are maintained under `design-system/components/`.

## Deployment

The site is a static application. Publish the root `index.html` and
`public/assets/` directory together. The included PowerShell server serves the
repository root so local paths match deployment paths.

## About the Foundation

The Loving Life Foundation was founded in 2018 to keep Zach Matla's story alive
through scholarships and community events. Since then, we've awarded 27
scholarships and hosted six golf tournaments.

For more information, contact Angela or Marc using the phone numbers above.
