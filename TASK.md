# Player Archive

The goal of this project is to create a simple player archive.

* push your updates to this repository. This repo is yours, feel free to change anything
* the [README.md](README.md) of the project should describe the general architecture

## The Tasks

* Render a search form with an input field. The input field should be used to search the players by name.
* In order to determine if the player in available in the archive use the **data api** `https://web-sandbox.onefootball.com/assignments/player/data/<player-name>.json`. (example https://web-sandbox.onefootball.com/assignments/player/data/fabio.json)
* Use the **profile api** to display additional data `https://web-sandbox.onefootball.com/assignments/player/profile/<profileid>`, the profile id can be retrieved from the previous call in the data api.
* The archive should display only players with the `active` field set to true.

## Technical requirements

* create relevant tests
* use TypeScript (ideally with the strictest possible rules)
* use semantic HTML
* create a responsive ui
* create custom CSS or use external libraries (both approaches are totally fine)

## Acceptance criteria

* type `fabio` in the form, the player with id `fabio` and its profile (`profile-111.json`) are displayed
* type `giorgio` in the form, a message saying the player is not available is displayed
* type `francesco` in the form, a message saying the player is not available is displayed

```
// screen 1, search
+---------------------------------------------+
|                                             |
|   # Player Archive #                        |
|                                             |
|   ## Search ##                              |
|                                             |
|    Enter player's id:                       |
|   +----------------------+ +-------+        |
|   | some player id...    | |  Go   |        |
|   +----------------------+ +-------+        |
|                                             |
+---------------------------------------------+

// screen 2, player found
+--------------------------------------------+
|                                            |
|   # Player Archive #                       |
|                                            |
|   +--------------------+                   |
|                                            |
|   ## Search ##                             |
|                                            |
|    Enter player's id:                      |
|   +----------------------+ +-------+       |
|   | fabio                | |  Go   |       |
|   +----------------------+ +-------+       |
|                                            |
|   +--------------------+                   |
|                                            |
|   ## Player Details ##                     |
|                                            |
|   Id: fabio                                |
|   Active: true                             |
|                                            |
|   Age: 33                                  |
|   Role: centre-back                        |
|   Team: Juventus                           |
|                                            |
+--------------------------------------------+
```

## Bonus

* API responses should be treated as `unknown` and validated at run-time (it is totally fine to do it with existing libraries like [Superstruct](https://github.com/ianstormtaylor/superstruct) or [Typed Contracts](https://github.com/bigslycat/typed-contracts#readme))

## FAQ

**Q:** Should I use a specific framework or library?

**A:** You are free to choose the tools you are the most comfortable with.
