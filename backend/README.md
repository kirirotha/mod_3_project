# README

# Hero Tactics
____________________________________________________________________________________________________________

# Summary

Tactical Strategy Game - Two Users will start by picking a “Leader” for their team. The Leaders consist of 3 classes. A Fighter, an Archer, and a Mage. Each class has their strengths and weaknesses. Taking a look at their “stats” will be important in choosing your team. After a Leader is chosen, you are then tasked with building out the rest of your team, with the same classes but with lesser stats than a Leader. Teams consist of 4 units total. Any combination will create different playstyles. Once both users have picked their teams and given a ready check, the game will start. At the beginning of the game, a coin gets tossed to see who goes first. When the round starts, you have access to move, attack, or wait with each individual on your team. You can only act one time per unit per turn. Conditions on attacking will be displayed in the stat sheet of the character. Once all of the units from one team are defeated, the standing team wins.

# User Stories

* MVP

- User can pick a Leader and Team
- User can set Leader's name
- User can check Ready to start the game
- User can set Minion locations at start of the game
- User can control individual Minions through turns
- Both users can affect one another's "stats" (HP)
- A game will end when one team is left standing

* Stretch Goals

- Add "Items" that heal HP
- Dynamic Board / Terrain affects / Damage affected by Terrain
- Persisting "Teams" to use in future battles. (Accout setup)
- Create Custom 2D Models for Leaders & Minions
- Additional Costume types for Character Models

# Model Relationships

* Game

- has_one :board
- has_many :actions
- has_many :players
- has_many :users, through: :players


* User

- has_many :players
- has_many :games, through: :players


* Board

- belongs_to :game


* Actions (Move, Attack, Wait, Stats)

- belongs_to :game
- belongs_to :player
- belongs_to :minion


* Player

- belongs_to :game
- belongs_to :user
- has_many :minions
- has_many :actions, through: :minions


* Minion

- belongs_to :player
- has_many :actions

____________________________________________________________________________________________________________

# Rule Set

* Each User selects a Leader to lead their team in the battle. Each available Leader to choose from is a stronger version of the Minion classes. The classes are Fighter, Archer, and Mage. (More information on classes below) A team will consist of 4 units total, 1 Leader and 3 Minions. Once both Users have chosen their team, they can drag their team anywhere on the highlighted part of the board to set their locations for the start of the battle. When both sides are ready, they will hit a Ready Check button and the game will start. Players take turns moving and acting with their team to defeat the opposing team. A turn consist of one User moving and acting with all of their units. Once every unit has been moved or acted once in the turn, they become unable to move until the next turn and the opposing team's turn starts. 

* Strategy will be key in this game, as there will be several different tactics you can use, both in choosing your team and the way you play your team in the battle. Taking the time to understand the classes will help in this area.

# Classes

Stats marked with a * are rolled randomly between the two values when a minion is chosen at the beginning of the battle. Leader stats are fixed.

* Fighter - A Melee class that fights with a 2h Axe that needs to be within 1 space of an enemy unit to attack. A Fighter will have more HP than an Archer or Mage class. They are a rounded warrior that doesn't attack with big numbers, but will survive longer than the other two classes.

Example Stats: (HP, ATK, ATK Range, and Movement are the only ones implemented at the moment, but DEF and AGI will be added for different functions later)

- HP (Health Points) 50 - 75 *
- ATK 8 - 12 *
- ATK Range 1 Space
- Movement 4 Spaces


* Archer - A Ranged class that fights with a Bow and arrow. The attack range is 3 spaces outward from the unit. An Archer has advantage of ranged attack and a balance of HP and ATK. They take advantage from the backlines and can put pressure for your frontline to advance. 

Example Stats:

- HP 45 - 65 *
- ATK 9 - 11 *
- ATK Range 3 Spaces
- Movement 3 Spaces


* Mage - A Ranged Caster class that fights with spells. (To accomplish basic functions of the base game, Mages will be set to rudimentary functions until further development is made to add things such as "Magic Dmg", "MP (Magic Points)", and "Area of Effect Dmg") The attack range is 2 spaces outward from the unit and the targetting is single target, until further development. In the base game, the ATK will be boosted to adhere to disadvantages that come without specific class functions. Since base functions are only implemented, ATK will reflect this. 

Example Stats:

- HP 35-50 *
- ATK 15-20 *
- ATK Range 2 Spaces
- Movement 3 Spaces

____________________________________________________________________________________________________________

# Leaders

* There is a predetermined list of names for the Leaders, but there should be an option for them to change the "nickname" of the Leader when they choose one.

* Unloden Pendragon (Fighter Class) - A knight that risen through the ranks and now leads and commands the Royal Mercenary Allegiance. Unloden is a Fighter class and wields an Obsidian Carved Great Axe. A fierce and brash Fighter that stands toe to toe with his foes. Fixed stats are shown below.

Stats:

- HP 145
- ATK 13
- ATK Range 1 Space
- Movement 5 Spaces


* Valwren (Archer Class) - A wiery commoner that has made a name for himself. His bow and his quick witted retorts are what make this Archer a sizable leader. Leaving this one to the shadows will have its consequences. Fixed stats are shown below.

Stats: 

- HP 125
- ATK 12
- ATK Range 3 Spaces
- Movement 5 Spaces


* Agitha Stormbrower (Mage Class) - An unseamingly ageless sage that only appears among the common in times of war. She devestates battlefields with her love for the Wind Affinity. Fixed stats are shown below.

Stat:

- HP 90
- ATK 20
- ATK Range 2 Spaces
- Movement 5 Spaces

____________________________________________________________________________________________________________

# Deliverables

* Seed the DB with premade Leaders and Minions w/ stat range on instantiation.

* Render objects in the "Dugouts" and on the "Board"

* Create a Selection screen when picking your leader and minions at the beginning of the game.

* Leader should be the first thing chosen, followed by the following 3 units to complete the team. When the condition of 4 units being chosen has been met, a "Ready Check" button should be available to push and the game will initiate the "Map Poisitioning" when both Users have given a "Ready Check". 

* Two Rows of highlighted cells on the respective team's side will appear after both Users have hit the "Ready Check" from the Select screen. The User can click, drag, and drop from the Team's Dugout to choose the location of the units on the map. Once all of the units have been placed on the map, another "Ready Check" will appear and need to be pressed. When both "Ready Check"s have been submitted then the "Randomizing Round" will start.

* To decide who goes first, a random 1 out of 2 should be done. The two values are assigned to both teams and which ever number is selected at the "Randomizing Round" will be the first to go. The "Turn Rounds" will initiate after the "Randomizing Round" and the picked number will be the one to start.

* Create a form for Action [Move, Attack, Wait, Status] for each Leader/Minion to use when you are moving that piece.

* When the Move option is chosen in the Action form, spaces on the board should light up blue to indicate the spaces that can be traveled (based off the value in the Movement stat) The piece moving should only be allowed to move their piece to the highlighted spots indicated and no where else.

* When the Attack option is chosen in the Action form, spaces on the board should light up red to indicate the spaces that can be attacked (based off the value in the Attack Range stat) The piece attacking should only be able to attack the highlighted spaces and only if a target is in the selected space. Friendly fire is on in this game and you are able to damage your own team.

* When the Wait option is chosen in the Action form, the movement and attack function for this unit will be disabled for the rest of this turn.

* Create a form that holds "Stat" values for each Minion and Leader on the board. A form should pop up with the values 
when the User picks "Status" on the Action form.

* When a Minion/Leader attacks another Minion/Leader, the receiving unit's health should be decremented by the amount attacked for (Damage is based on the ATK stat that is established at the beginning of the battle - Leaders have fixed stats and Minions ATK stat is randomized between two values depicted at the beginning of the battle).

* When a Minion/Leader's HP has reached 0, the piece should be removed from the board and sent to the respective "Dugout" as well as deactivated and depicted by greying the piece out in the "Dugout". (By deactivating I mean not able to take actions in the respective's turn)

* A window should pop up when the battle has ended and it should say "VICTORY ${Leader.nickname}" for the team that won. 

* Will need to create a function to restart the game at the end of the game, and probably during the game too. Kind of like a reset button on a console. We can figure out a different functionality after we have implemented the Persisting Sessions through accounts.

____________________________________________________________________________________________________________