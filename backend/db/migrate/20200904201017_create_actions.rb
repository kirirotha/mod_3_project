class CreateActions < ActiveRecord::Migration[6.0]
  def change
    create_table :actions do |t|
      t.integer :move
      t.integer :attack
      t.integer :wait
      t.integer :status
      t.integer :turn
      t.integer :atk_target
      t.references :game, null: false, foreign_key: true
      t.references :player, null: false, foreign_key: true
      t.references :minion, null: false, foreign_key: true

      t.timestamps
    end
  end
end
