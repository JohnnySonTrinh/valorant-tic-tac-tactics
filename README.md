## UX

### Colors Scheme

I used [coolors.co](https://coolors.co/c1272d-ff7f00-ffd700-b8ebd0-009b3a-c9a66b) to generate my colour palette.

![screenshot](documentation/ux/color-pattern.png)

I've used CSS ':root' variables to easily update the global colour scheme by changing only one value instead of everywhere in the CSS file.

```css
:root {
  /* Valorant Theme Colors */
  --clr-primary-1: #c1272d;
  --clr-primary-2: #009b3a;
  --clr-secondary-1: #ffd700;
  --clr-secondary-2: #ff7f00;
  --clr-secondary-3: #c9a66b;
  --clr-secondary-4: #b8ebd0;
  /* Base Colors */
  --clr-black: #000000;
  --clr-white: #ffffff;
  /* Gray shades */
  --clr-grey-1: hsl(207, 11%, 20%);
  --clr-grey-2: hsl(210, 22%, 49%);
  /* Primary and secondary font families */
  --ff-primary: "Roboto", sans-serif;
  --ff-secondary: "Open Sans", sans-serif;
  /* Commonly used CSS properties for consistency */
  --transition: all 0.3s linear;
  --spacing: 0.25rem;
  --radius: 0.5rem;
  --light-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  --max-width: 1170px;
}
```

### Typography

- [Roboto](https://fonts.google.com/specimen/Roboto) was used for the primary headers and titles.

- [Open Sans](https://fonts.google.com/specimen/Open+Sans?query=open+sans) was used for all other secondary text.

- [Font Awesome](https://fontawesome.com) icons were used throughout the site, such as the social media icons in the footer.

## User Experience

### User Goals

- Visually appealing, including images.
- Easily navigated around.
- Quality and valuable content.
- Easily found contact details.

### Site Owner's Goals

- Showcase professional gaming credentials and coaching services to attract clients seeking personal coaching in Valorant.
- Provide detailed information about coaching methods, success stories, and available sessions.
- Establish credibility through sharing testimonials and experiences from previous clients.
- Improve online visibility and attract traffic from potential clients and gaming enthusiasts.

### Requirements

- Responsive design for a seamless experience on desktop, tablet, and mobile devices.
- Upfront and clear information about the services and value proposition of the gaming portfolio.
- A straightforward method for users to reach out via contact forms or social media.
- A design that captures the dynamic and immersive world of gaming and Valorant!

### Expectations

- All external links, especially to social media channels, open in new tabs to facilitate easy return navigation.
- Every internal link, from navigation menus to call-to-action buttons, functions correctly guiding users without error.
- the quality and performance of the website should be consistent across all devices and screen sizes.
- All content, from biographical details to service offerings, should be current, precise and accurate.
