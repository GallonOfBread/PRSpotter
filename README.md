# PR Spotter
The greatest spotting tool since the development of the arm.
## v0.0.1.0
- [x] Entry box labeled “Desired weight”
- [x] Button that says something like “Calculate Plates”
- [x] Blank text output element
- [x] Function that takes the desired weight, subtracts the weight of “bar weight”, assumed for now to be 45 lbs, then calculates the max amounts of 45s, 35s, 25s, 10s, 5s, 2.5s, and replaces the contents of the output with neatly formatted results
## v0.0.2.0
- [x] Have a drop down for bars, with some values pre-entered
- [x] Add drop down for lists of weights like “Planet Fitness” which could have 45s, 25s, 10s, 5s, 2.5s and “Iron Dungeon” with 45s, 35s, 25s, 10s, 5s, 2.5s, 1.5s, 0.5s
## v0.0.3.0 (assuming option 3)
- [x] Add bar button
- [x] Rename bar button
- [x] Change bar weight button
- [x] Delete bar button
- [x] Add list of plates button
- [x] Rename list of plates button
- [x] Change list of plates button
- [x] Delete list of plates button
- [x] Add prompt when creating new bar/list of plates and changing weights to ask for weights. Specify in the prompt for list of plates to separate values by commas
- [ ] Validate that bar/plate weights are an integer followed by “lb”, “lbs”, “ lb”, “ lbs”, “kg” “kgs”, “ kg”, “ kgs”
- [ ] Have calculate desired weight function be able to tell if we are talking “kg” or “lbs”
## v0.0.3½.0
- [ ] Make custom implementation of the alert box
- [ ] Make custom implementation of the confirm box
- [ ] Make custom implementation of the prompt box
- [ ] Make a custom implementation of a prompt box that takes a message, two lables, two default values and returns two values
## v0.0.4.0
- [ ] Use the multivalue prompt for add and edit buttons
- [ ] Change some red text spans to be our new alerts for consistancy
- [ ] Change other alerts, confirms, and prompts to use custom standards
- [ ] Allow for max numbers of plates (like for instance 2 45s total, then you have to move on to lighter plates when calculating)
- [ ] Give option to add multiple desired weights at once and it will find the least amount of plate movement for switching and display results for each person
- [ ] Add rename button for desired weights
- [ ] Add delete button for desired weight
## v0.0.5.0
- [ ] Add pictures of bar with colored plates for quicker compression:
    - [ ] 55s are red
    - [ ] 45s are blue
    - [ ] 35s are yellow
    - [ ] 25s are green
    - [ ] 10s are gray
    - [ ] 5s are purple?
    - [ ] 2.5s are orange?
    - [ ] 1.5s are white
    - [ ] 0.5s are blue
- [ ] Allow for asymetrical distribution of plates
## v0.0.6.0
- [ ] Optimize css
- [ ] Use icons that make sense for buttons
- [ ] Have add person button, delete person buttons, add bar/list of weights buttons, change bar/list of weights buttons, and delete bar/list of weights buttons only showing when a box is checked for edit mode
- [ ] Add second tab which has has a name, their picture and text of their bar and plates, maybe a unique accent color, and you can cycle through them
- [ ] Add day mode and night mode, accent color
- [ ] Customizable plate colors
## Release v0.1.0.0 - Initial release
## v0.1.1.0
- [ ] Server asks for a passphrase, and then sends back a code that will be used to show they are a legitimate connection
- [ ] Database with list of people and weights that can be seen and changed from any authentic user, and then updates what used to be multiple desired weights
## v0.1.2.0
- [ ] Add multiple lifts as another thingy to the database which can have a list of users
- [ ] Make possible to only rotate through selected people (for when we split up)
## v0.1.3.0
- [ ] Add multiple sets that can each have a number of reps to the database
- [ ] Make data exportable in helpful copyable format
## v0.1.4.0
- [ ] Add multiple days
- [ ] Add graphs
## v0.1.5.0
- [ ] Add end of day report with things like
    - [ ] Calculated 1RMs
    - [ ] Most improved lifts since joining
    - [ ] Most improved lifts from last week
    - [ ] Attendance streaks
## Release v0.2.0.0 - Database Update

## Further ideas
- [ ] Add accountability group functionality that is opt-outable
- [ ] Add push up competition group functionality that is also opt-outable
- [ ] I guess add opt-outability for workout group
- [ ] Add account page
    - [ ] Pic
    - [ ] Nickname
    - [ ] Quote
    - [ ] Badges
    - [ ] Maxes
- [ ] Add quick way of adding new person
- [ ] Add the option of having multiple groups
- [ ] Add message channels???
