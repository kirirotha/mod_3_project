class CreateMinions < ActiveRecord::Migration[6.0]
  def change
    create_table :minions do |t|
      t.string :name
      t.string :type
      t.integer :hp
      t.integer :dmg
      t.integer :move

      t.timestamps
    end
  end
end
