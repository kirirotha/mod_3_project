class CreateMinions < ActiveRecord::Migration[6.0]
  def change
    create_table :minions do |t|
      t.string :name
      t.boolean :leader
      t.integer :type
      t.integer :hp
      t.integer :atk
      t.integer :atk_range
      t.integer :move_range

      t.timestamps
    end
  end
end
