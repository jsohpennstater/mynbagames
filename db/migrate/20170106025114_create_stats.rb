class CreateStats < ActiveRecord::Migration[5.0]
  def change
    create_table :stats do |t|
      t.string :gamecode, null: false
      t.string :position, null: false
      t.string :min, null: false
      t.string :fgm, null: false
      t.string :fga, null: false
      t.string :ftm, null: false
      t.string :fta, null: false
      t.string :threepm, null: false
      t.string :threepa, null: false
      t.string :plus_minus, null: false
      t.string :offensive_rebound, null: false
      t.string :total_rebound, null: false
      t.string :assist, null: false
      t.string :block, null: false
      t.string :steal, null: false
      t.string :turnover, null: false
      t.string :personal_foul, null: false
      t.string :points, null: false
      t.belongs_to :player, null: false
      t.timestamps
    end
  end
end
