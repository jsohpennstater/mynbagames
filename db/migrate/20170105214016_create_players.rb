class CreatePlayers < ActiveRecord::Migration[5.0]
  def change
    create_table :players do |t|
      t.string :first_name, null: false, default: ""
      t.string :last_name, default: ""
      t.string :image, null: false
      t.string :number, null: false
      t.string :team, null: false
      t.string :height, null: false
      t.string :born, null: false
      t.string :position, null: false
      t.string :weight, null: false
      t.string :birthplace, null: false
      t.string :college, null: false
      t.string :draft, null: false
      t.timestamps
    end
  end
end
