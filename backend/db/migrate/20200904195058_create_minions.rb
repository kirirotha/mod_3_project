class CreateMinions < ActiveRecord::Migration[6.0]
  def change
    create_table :minions do |t|
      t.string :name
      t.boolean :leader
      t.integer :class_type
      t.string :cell
      t.integer :hp
      t.integer :hp_max
      t.integer :atk
      t.integer :atk_range
      t.integer :move_range
      t.references :player, null: false, foreign_key: true

      t.timestamps
    end
  end
end
