class CreateBoards < ActiveRecord::Migration[6.0]
  def change
    create_table :boards do |t|
      t.references :game, null: false, foreign_key: true
      t.integer :lat
      t.integer :long
      t.timestamps
    end
  end
end
