const CharacterData = [
     {src: "images/Fighter_2.png", name: 'Chuck', leader: false, class_type: 1, hp: 75, hp_max: 75, atk: 8, atk_range: 1, move_range: 4, cell: "99_99"},
     {src: "images/Archer_1.png", name: 'Ghost', leader: false, class_type: 2, hp: 65, hp_max: 65, atk: 9, atk_range: 3, move_range: 3, cell: "99_99"}, 
     {src: "images/Mage_4.png", name: 'Pearl', leader: false, class_type: 3, hp: 35, hp_max: 35, atk: 20, atk_range: 2, move_range: 3, cell: "99_99"}, 
     {src: "images/Fighter_3.png", name: 'Jarz', leader: false, class_type: 1, hp: 50, hp_max: 50, atk: 12, atk_range: 1, move_range: 4, cell: "99_99"}, 
     {src: "images/Archer_3.png", name: 'Yinzo', leader: false, class_type: 2, hp: 45, hp_max: 45, atk: 12, atk_range: 3, move_range: 3, cell: "99_99"}, 
     {src: "images/Mage_1.png", name: 'Gyler', leader: false, class_type: 3, hp: 45, hp_max: 45, atk: 17, atk_range: 2, move_range: 3, cell: "99_99"}, 
     {src: "images/Fighter_4_W.png", name: 'Teek', leader: false, class_type: 1, hp: 65, hp_max: 65, atk: 9, atk_range: 1, move_range: 4, cell: "99_99"}, 
     {src: "images/Archer_2_W.png", name: 'Neena', leader: false, class_type: 2, hp: 50, hp_max: 50, atk: 11, atk_range: 3, move_range: 3, cell: "99_99"}, 
     {src: "images/Mage_2.png", name: 'Lynette', leader: false, class_type: 3, hp: 40, hp_max: 45, atk: 18, atk_range: 2, move_range: 3, cell: "99_99"} 
     ]

const charsNotUsed = [
    {id:4, src: "images/Archer2_W.png", name: 'Mae', leader: false, class_type: 1, hp: 55, hp_max: 55, atk: 10, atk_range: 1, move_range: 4, cell: "99_99"}, 
    {id:8, src: "", name: 'Udyr', leader: false, class_type: 2, hp: 55, atk: 10, atk_range: 3, move_range: 3, cell: "99_99"}, 
    {id:10, src: "", name: 'Claudette', leader: false, class_type: 3, hp: 50, hp_max: 50, atk: 15, atk_range: 2, move_range: 3, cell: "99_99"}
]

const leaderChars = [
    {id:13, src: "images/Leader_Fighter.png", name: '', leader: true, class_type: 4, hp: 145, hp_max: 145, atk: 13, atk_range: 1, move_range: 5, cell: "99_99"}, 
    {id:14, src: "images/Leader_Archer.png", name: '', leader: true, class_type: 5, hp: 125, hp_max: 125, atk: 12, atk_range: 3, move_range: 5, cell: "99_99"}, 
    {id:15, src: "images/Leader_Mage.png", name: '', leader: true, class_type: 6, hp: 90, atk: 20, atk_range: 2, move_range: 5, cell: "99_99"}
]