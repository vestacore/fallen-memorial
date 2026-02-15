# The Games They’ll Never Play

*A memorial website honoring Ukrainian athletes and coaches killed since February 2022.*

## Purpose

This repository contains a memorial website dedicated to Ukrainian athletes and coaches whose lives were taken during Russia’s full-scale invasion of Ukraine. The site exists to preserve memory, acknowledge stolen futures, and offer a place to say: **they should have been here**.

## Context

This project was created in the context of a recent Olympic controversy: Ukrainian skeleton racer **Vladyslav Heraskevych** was disqualified after insisting on using a “helmet of memory” featuring portraits of Ukrainian athletes killed in the war, with the decision later upheld on appeal. ([Reuters][1])
This memorial is not “a statement” about sport. It is a statement about **remembrance**.

## How this site was created (AI / Lovable)

The initial version of the website was generated with AI using **Lovable**.

**Original Lovable prompt (English site requested):**

```text
Let’s create an English-language memorial website for Ukrainian athletes killed in the war, who will never be able to participate in the Olympics again. The site should have an appropriate, Olympic-themed look in black-and-white tones.
```

After generation, the site was reviewed and iterated manually (copy edits, layout adjustments, content structure, etc.). Future improvements should be made through normal pull requests.

## Open source & contributions

This project is intended to be **open source** so it can be extended and maintained by the community.

Ways to contribute:

* Add / verify names, sports, ages, and sources
* Improve accessibility (contrast, keyboard navigation, screen reader labels)
* Add translations (Ukrainian, etc.)
* Improve performance, SEO, and hosting instructions
* Create mirrors or deployments on additional domains

If you contribute data, please include a reliable source link for each change.

## Data integrity note

This site is a memorial. Please treat it accordingly:

* Prefer primary or reputable sources
* Avoid speculation
* Be careful with names/transliterations
* Flag uncertain items clearly (and keep them out of “confirmed” lists until verified)

## Credits

* Built with **Lovable** (AI-assisted generation).
* Thanks to everyone who contributes to verification, translation, and maintenance.

## Disclaimer

This is an independent memorial project. It is **not affiliated with the IOC, the Olympic Movement, or any sports federation**. Olympic-related names and symbols may be trademarks of their respective owners; this project uses an Olympic theme for contextual reference and should not be interpreted as endorsement.


*Development*


**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

