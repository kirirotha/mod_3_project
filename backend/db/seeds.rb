# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)game1 = Game.new()
Action.destroy_all
Minion.destroy_all
Board.destroy_all
Player.destroy_all
User.destroy_all
Game.destroy_all


g1 = Game.create(team_selection: 4, ready_check: true, coin_toss:1, map_positioning: 2)
bob = User.create(name: 'Bob', password: 'pw1')
mary = User.create(name: 'Mary', password: 'pw2')
p1 = Player.create(leader_name: '', game_id: g1.id, user_id: bob.id)
p2 = Player.create(leader_name: '', game_id: g1.id, user_id: mary.id)
# pos1 = Board.create(game_id: g1.id, piece_placement: 1, cell: "7_1", lat: 8, long: 8)
# pos2 = Board.create(game_id: g1.id, piece_placement: 2, cell: "8_1", lat: 8, long: 16)
# pos3 = Board.create(game_id: g1.id, piece_placement: 3, cell: "9_1", lat: 8, long: 1)
# pos4 = Board.create(game_id: g1.id, piece_placement: 1, cell: "10_1", lat: 8, long: 8)
# pos5 = Board.create(game_id: g1.id, piece_placement: 2, cell: "7_16", lat: 8, long: 16)
# pos6 = Board.create(game_id: g1.id, piece_placement: 3, cell: "8_16", lat: 8, long: 1)
# pos7 = Board.create(game_id: g1.id, piece_placement: 1, cell: "9_16", lat: 8, long: 8)
# pos8 = Board.create(game_id: g1.id, piece_placement: 2, cell: "10_16", lat: 8, long: 16)


## Type dictates the class. 1 is Fighter, 2 is Archer, 3 is Mage,
## 4 is Leader Fighter, 5 is Leader Archer, 6 is Leader Mage.

# Fighter Class
#chuck = Minion.create(name: 'Chuck', leader: false, class_type: 1, hp: 75, atk: 8, atk_range: 1, move_range: 4)
jarz = Minion.create(name: 'Jarz', leader: false, class_type: 1, cell: "7_16", hp: 50, hp_max: 50, atk: 12, atk_range: 1, move_range: 4, player_id: p2.id)
#teek = Minion.create(name: 'Teek', leader: false, class_type: 1, hp: 65, atk: 9, atk_range: 1, move_range: 4)
mae = Minion.create(name: 'Mae', leader: false, class_type: 1, cell: "7_1", hp: 55, hp_max: 55, atk: 10, atk_range: 1, move_range: 4, player_id: p1.id)

# Archer Class
ghost = Minion.create(name: 'Ghost', leader: false, class_type: 2, cell: "8_16", hp: 65, hp_max: 65, atk: 9, atk_range: 3, move_range: 3, player_id: p2.id)
yinzo = Minion.create(name: 'Yinzo', leader: false, class_type: 2, cell: "8_1", hp: 45, hp_max: 45, atk: 12, atk_range: 3, move_range: 3, player_id: p1.id)
#neena = Minion.create(name: 'Neena', leader: false, class_type: 2, hp: 50, atk: 11, atk_range: 3, move_range: 3)
#udyr = Minion.create(name: 'Udyr', leader: false, class_type: 2, hp: 55, atk: 10, atk_range: 3, move_range: 3)

# Mage Class
#pearl = Minion.create(name: 'Pearl', leader: false, class_type: 3, hp: 35, atk: 20, atk_range: 2, move_range: 3)
claudette = Minion.create(name: 'Claudette', leader: false, class_type: 3, cell: "9_16", hp: 50, hp_max: 50, atk: 15, atk_range: 2, move_range: 3, player_id: p2.id)
gyler = Minion.create(name: 'Gyler', leader: false, class_type: 3, cell: "9_1", hp: 45, hp_max: 45, atk: 17, atk_range: 2, move_range: 3, player_id: p1.id)
#lynette = Minion.create(name: 'Lynette', leader: false, class_type: 3, hp: 40, atk: 18, atk_range: 2, move_range: 3)

# Leader Fighter Class
leader_fighter = Minion.create(name: '', leader: true, class_type: 4, cell: "10_16", hp: 145, hp_max: 145, atk: 13, atk_range: 1, move_range: 5, player_id: p2.id)

# Leader Archer Class
leader_archer = Minion.create(name: '', leader: true, class_type: 5, cell: "10_1", hp: 125, hp_max: 125, atk: 12, atk_range: 3, move_range: 5, player_id: p1.id)

# Leader Mage Class
#leader_mage = Minion.create(name: '', leader: true, class_type: 6, hp: 90, atk: 20, atk_range: 2, move_range: 5)

