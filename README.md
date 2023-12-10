# [VALORANT TIC TAC TACTICS](https://johnnysontrinh.github.io/valorant-tic-tac-tactics)

Tic Tac Tactics is an interactive web-based game that combines the classic strategy of tic-tac-toe with the dynamic world of Valorant. Players take on the roles of the characters Raze and Cypher, using their unique abilities to conquer the game board.
![screen](documentation/readme/mockup.png)

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
  /* Font Family Variables */
  --ff-primary: Roboto Slab, sans-serif;
  --ff-secondary: Montserrat, sans-serif;
  /* Commonly used CSS properties for consistency */
  --transition: all 0.3s linear;
  --spacing: 0.2rem;
  --radius: 0.5rem;
  --light-shadow: 0 5px 15px rgba(201, 166, 107, 0.395);
}
```

### Typography

For Tic Tac Tactics, I've chosen a combination of Roboto Slab and Montserrat fonts to create an engaging and readable user interface. These fonts were selected for their clarity, legibility, and aesthetic appeal, complementing the overall design of the game.

#### Roboto Slab
Roboto Slab is used for headings and areas requiring emphasis. With its semi-rounded details and sturdy serifs, this font adds a touch of elegance and formality, contrasting well with the more straightforward style of Montserrat.

#### Montserrat
Montserrat is the secondary font used throughout the game. Its clean, modern sans-serif design makes it ideal for body text, providing excellent readability and a contemporary look that aligns with the game's visual style.

#### Implementation in CSS
The fonts are included at the beginning of our main CSS file using the `@import` rule from Google Fonts. This method ensures that the fonts are available as soon as the CSS is loaded, maintaining a consistent typographic experience throughout the game.

```css
/* Importing Google Fonts */
@import url("https://fonts.googleapis.com/css2?family=Montserrat&family=Roboto+Slab:wght@700&display=swap");
```

## User Experience

### User Goals

The primary goals for users who visit and play Tic Tac Tactics include:

- Enjoy a fun and engaging game that can be played with friends.
- Experience a familiar game with a unique twist that increases the strategic depth.
- Navigate the site easily with intuitive controls and clear instructions.
- Access the game from various devices with consistent quality and performance.

### Site Owner's Goals

The goals for the site owner are:

- Provide an entertaining and engaging game that encourages repeated play.
- Establish an online presence for users to associate with the [Game or Theme] brand.
- Collect user feedback to continuously improve the gameplay and user experience.
- Monetize the game effectively while maintaining a balance between user satisfaction and revenue generation.

### Requirements

To meet the user and site owner's goals, the following requirements have been identified:

- The game must be fully playable with interactive elements like maps and character abilities.
- A responsive design that adapts to different screen sizes and devices.
- High-quality visuals and sounds that enhance the gameplay experience.
- Clear user instructions and easy navigation throughout the site.


### Expectations

When visiting Tic Tac Tactics, users can expect:

- A visually appealing interface with thematic elements from Valorant.
- Smooth and error-free gameplay with clear outcomes and feedback.
- A secure and reliable website that maintains user privacy and data protection.
- Regular updates and new features to keep the game fresh and exciting.
