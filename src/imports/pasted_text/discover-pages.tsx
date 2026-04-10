Build a new set of pages for an existing React web app called Preferred Deals — a local business directory and deals platform. These pages power a personalized local discovery experience: a user lands on a page, answers a few quick questions about what they are looking for, and is matched with relevant local businesses, deals, and services.

The design system — colors, fonts, and component styles — already exists in the project. Match and extend the existing styles exactly. Do not introduce new colors or font families.

---

PAGES TO BUILD

1. CATEGORY SELECTION PAGE — route: /discover/:propertyId

This is the first page a user sees. Get them moving immediately — no intro screen, no friction. Drop them straight into the choice.

This page supports two modes driven by a prop:
  - Preferred Deals branded mode: show the Preferred Deals logo at the top. Always displays the default 6 categories.
  - White label mode: show the partner's logo at the top. Displays only the categories the admin has configured for this partner (fetched from API — see API-ready section below).

Content:
  - Logo at the top (Preferred Deals or white label partner logo)
  - Headline: "What are you looking for?"
  - 2-column grid of large tappable category cards

Default categories (used in Preferred Deals mode and as the base set in white label mode):
  - Home Products (icon: house/home)
  - Food & Dining (icon: fork and knife)
  - Entertainment (icon: ticket or star)
  - Pet Care (icon: paw print)
  - Transportation (icon: car)
  - Self Care (icon: leaf or spa symbol)

Design specs:
  - Each card: icon (large, centered), category label below
  - On hover/tap: card highlights with a bold border and slight scale up
  - On category select, navigate to the Survey page passing the selected category as a param

---

2. SURVEY PAGE — route: /discover/:propertyId/survey/:category

Displays 2–3 follow-up questions based on the selected category. Each question is multiple choice. Questions must be driven by a data structure (not hardcoded conditionals) so the backend team can swap in API-sourced questions later.

Use this placeholder question data for all 6 default categories:

Food & Dining:
  Q1: "What kind of experience?" — options: Quick Bite, Sit-Down Dinner, Drinks & Nightlife, Coffee & Cafe
  Q2: "Any dietary preferences?" — options: No Preference, Vegetarian, Vegan, Gluten-Free

Home Products:
  Q1: "What do you need?" — options: Furniture, Cleaning Services, Repairs & Handyman, Decor & Accessories
  Q2: "How soon do you need it?" — options: Today, This Week, Just Browsing

Entertainment:
  Q1: "What sounds fun?" — options: Live Music, Movies, Outdoor Activities, Arts & Culture
  Q2: "Who are you with?" — options: Solo, Partner, Friends, Family with Kids

Pet Care:
  Q1: "What type of pet?" — options: Dog, Cat, Bird, Other
  Q2: "What do you need?" — options: Grooming, Vet / Health, Boarding, Supplies

Transportation:
  Q1: "What do you need?" — options: Rideshare / Taxi, Car Rental, Bike or Scooter, Airport Transfer
  Q2: "When?" — options: Right Now, Today, This Week

Self Care:
  Q1: "What are you looking for?" — options: Haircut / Salon, Massage / Spa, Gym / Fitness, Nails
  Q2: "Any preference?" — options: Closest to Me, Highest Rated, Best Deal

For custom categories added by a white label admin, the questions will be fetched from the API. The component must handle both hardcoded default questions and dynamically loaded questions using the same rendering logic.

Design specs:
  - One question shown at a time with an animated slide transition between questions
  - Answer options displayed as large pill buttons in a 2-column grid
  - On option select: pill highlights, then auto-advances to next question after 400ms
  - Progress bar at top showing current step (e.g. Step 1 of 2)
  - Back button (top left) to return to previous question or back to category selection
  - After the final question, navigate to the Results page

---

3. RESULTS PAGE — route: /discover/:propertyId/results

Shows matched local businesses and deals based on the user's survey answers.

For now, render a placeholder state with 4 mock business cards. Real data will come from a Rails API — structure the component to accept a results prop array with this shape:
  { id, name, category, tagline, rating, reviewCount, dealLabel, dealDescription, logoUrl, listingUrl }

Design specs:
  - Header: "Here are your matches"
  - Staggered card reveal animation on load
  - Each business shown as a card:
      - Business logo / placeholder image (left)
      - Business name + category badge
      - Star rating + review count
      - Deal label (e.g. "Exclusive: 10% off") in a highlighted pill
      - "View Deal →" button linking to their listing page
  - Below the cards: "Browse all listings →" link that goes to /all-listings
  - At the bottom: "Start over" text button that resets the flow back to /discover/:propertyId

---

4. ADMIN — CATEGORY MANAGER — route: /admin/:propertyId/categories

This page is only accessible to white label admin users. It allows them to fully control the categories that appear in their partner's discovery flow.

Functionality:
  - Display the 6 default Preferred Deals categories as a base list
  - Each default category has a toggle (on/off) — toggling off hides it from their discovery flow
  - Below the default categories: a section titled "Custom Categories" showing any categories the admin has already added
  - An "Add Category" button that opens an inline form (no modal) with:
      - Text input: Category Name
      - Icon picker: a grid of icon options the admin can select from (use a set of ~16 common icons covering lifestyle, services, and local business types)
      - Below the icon picker: an "Add Questions" section where the admin can add 1–3 multiple choice questions for this category:
          - Each question has a text input for the question itself
          - Below each question: inputs to add answer options (minimum 2, maximum 6)
          - An "Add another question" link to add up to 3 questions total
      - A "Save Category" button that saves and adds the new category to their list
  - Each custom category in the list shows:
      - Icon + category name
      - An "Edit" button to modify it
      - A "Delete" button to remove it
  - A "Save Changes" button at the bottom that commits all toggle changes and custom category updates

This page should feel like a clean, professional settings/dashboard UI — not a consumer-facing page. Use a simple single-column layout with clear section headings.

---

GLOBAL REQUIREMENTS

Routing:
  - Use React Router for all routes
  - The :propertyId param must be accessible throughout the entire flow and passed forward between pages
  - Store survey answers in a React context (not URL params) — the backend dev will wire up API calls later
  - The /admin route must be protected — render a "Not authorized" state if the user is not an authenticated white label admin (auth logic will be wired up by the backend dev, leave a TODO)

Animations:
  - Page transitions: smooth fade or slide between each step
  - Category card selection: scale + border highlight
  - Survey answer selection: instant highlight then auto-advance
  - Results page: staggered card reveal on load

Mobile-first:
  - The discovery flow (/discover) is designed for mobile — all tap targets minimum 48px, max width 480px centered on desktop
  - The admin dashboard (/admin) is designed for desktop — full width layout, standard click interactions

API-ready:
  - Category page accepts a partner config prop: { propertyId, partnerName, logoUrl, isWhiteLabel }
  - In white label mode, categories are loaded from the API — leave a TODO: fetch /api/partners/:propertyId/categories
  - Results page accepts a results array prop
  - Admin category manager saves to API — leave a TODO: PUT /api/partners/:propertyId/categories
  - Leave clear TODO comments wherever the backend dev will plug in API calls

File structure:
  /pages/discover/Categories.jsx
  /pages/discover/Survey.jsx
  /pages/discover/Results.jsx
  /pages/admin/CategoryManager.jsx
  /data/surveyQuestions.js
  /context/SurveyContext.jsx