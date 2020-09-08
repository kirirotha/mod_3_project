# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)game1 = Game.new()


## Type dictates the class. 1 is Fighter, 2 is Archer, 3 is Mage,
## 4 is Leader Fighter, 5 is Leader Archer, 6 is Leader Mage.

# Fighter Class
chuck = Minion.create(name: 'Chuck', leader: false, type: 1, hp: 75, atk: 8, atk_range: 1, move_range: 4)
jarz = Minion.create(name: 'Jarz', leader: false, type: 1, hp: 50, atk: 12, atk_range: 1, move_range: 4)
teek = Minion.create(name: 'Teek', leader: false, type: 1, hp: 65, atk: 9, atk_range: 1, move_range: 4)
mae = Minion.create(name: 'Mae', leader: false, type: 1, hp: 55, atk: 10, atk_range: 1, move_range: 4)

# Archer Class
ghost = Minion.create(name: 'Ghost', leader: false, type: 2, hp: 65, atk: 9, atk_range: 3, move_range: 3)
yinzo = Minion.create(name: 'Yinzo', leader: false, type: 2, hp: 45, atk: 12, atk_range: 3, move_range: 3)
neena = Minion.create(name: 'Neena', leader: false, type: 2, hp: 50, atk: 11, atk_range: 3, move_range: 3)
udyr = Minion.create(name: 'Udyr', leader: false, type: 2, hp: 55, atk: 10, atk_range: 3, move_range: 3)

# Mage Class
pearl = Minion.create(name: 'Pearl', leader: false, type: 3, hp: 35, atk: 20, atk_range: 2, move_range: 3)
claudette = Minion.create(name: 'Claudette', leader: false, type: 3, hp: 50, atk: 15, atk_range: 2, move_range: 3)
gyler = Minion.create(name: 'Gyler', leader: false, type: 3, hp: 45, atk: 17, atk_range: 2, move_range: 3)
lynette = Minion.create(name: 'Lynette', leader: false, type: 3, hp: 40, atk: 18, atk_range: 2, move_range: 3)

# Leader Fighter Class
leader_fighter = Minion.create(name: '', leader: true, type: 4, hp: 145, atk: 13, atk_range: 1, move_range: 5)

# Leader Archer Class
leader_archer = Minion.create(name: '', leader: true, type: 5, hp: 125, atk: 12, atk_range: 3, move_range: 5)

# Leader Mage Class
leader_mage = Minion.create(name: '', leader: true, type: 6, hp: 90, atk: 20, atk_range: 2, move_range: 5)

