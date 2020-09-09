# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_09_04_201017) do

  create_table "actions", force: :cascade do |t|
    t.integer "move"
    t.integer "attack"
    t.integer "wait"
    t.integer "status"
    t.integer "turn"
    t.integer "atk_target"
    t.integer "game_id", null: false
    t.integer "player_id", null: false
    t.integer "minion_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["game_id"], name: "index_actions_on_game_id"
    t.index ["minion_id"], name: "index_actions_on_minion_id"
    t.index ["player_id"], name: "index_actions_on_player_id"
  end

  create_table "boards", force: :cascade do |t|
    t.integer "game_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["game_id"], name: "index_boards_on_game_id"
  end

  create_table "games", force: :cascade do |t|
    t.integer "team_selection"
    t.boolean "ready_check"
    t.integer "coin_toss"
    t.integer "map_positioning"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "minions", force: :cascade do |t|
    t.string "name"
    t.boolean "leader"
    t.integer "class_type"
    t.string "cell"
    t.integer "hp"
    t.integer "hp_max"
    t.integer "atk"
    t.integer "atk_range"
    t.integer "move_range"
    t.integer "player_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["player_id"], name: "index_minions_on_player_id"
  end

  create_table "players", force: :cascade do |t|
    t.string "leader_name"
    t.integer "game_id", null: false
    t.integer "user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["game_id"], name: "index_players_on_game_id"
    t.index ["user_id"], name: "index_players_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.string "password"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "actions", "games"
  add_foreign_key "actions", "minions"
  add_foreign_key "actions", "players"
  add_foreign_key "boards", "games"
  add_foreign_key "minions", "players"
  add_foreign_key "players", "games"
  add_foreign_key "players", "users"
end
