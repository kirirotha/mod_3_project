class CreateGames < ActiveRecord::Migration[6.0]
  def change
    create_table :games do |t|
      t.integer :team_selection
      t.boolean :ready_check
      t.integer :coin_toss
      t.integer :map_positioning

      t.timestamps
    end
  end
end
