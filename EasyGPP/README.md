## Intro

This app is supposed to encourage effortless logging
of general physical preparation (GPP) exercises.

Throughout the week, I want to be able to hit a certain target number of exercises to keep my body fresh and generally prepared for hard exercise.

This is based off of the concept of "greasing the groove" in calisthenics where you accumulate a large volume of exercise (e.g. pull-ups, push-ups) throughout the day by doing many sets of low reps. This typically translates into high work capacity, lower injury prevention, and accelerated strength and muscle gains.

## Implementation

This is how it will work:

1. Set up desired exercises + weekly target reps
    - you can set set rep limits (min, max)
2. On app open, randomly select an exercise + target reps
    - two buttons
        - next exercise / skip
        - completed
    - +/- button next to reps to update the true number of reps completed
    - notes?
        - for injury?
3. On exercise completion (complete)
    - upload log to the database and decrease remaining exercise count

### UI

-   Simple interface with:
    -   Exercise name
    -   2 buttons
    -   +/- button
    -   Settings
-   View history
    -   Show progression over time
        -   Total number of reps completed per exercise
        -   Growth over week
-   Settings
    -   Add / remove exercise
    -   Update weekly targets

### Database

-   Google sheets? (Google Drive API)

## Tech Stack

-   React Native / Expo
-   Plotting?
-   Google Drive API (SSO)
