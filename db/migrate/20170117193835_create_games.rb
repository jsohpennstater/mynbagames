class CreateGames < ActiveRecord::Migration[5.0]
  def change
    create_table :games do |t|
      t.string :gamecode, null: false
      t.string :away, null: false
      t.string :away_pic, null: false
      t.string :away_final_score, null: false
      t.string :home, null: false
      t.string :home_pic, null: false
      t.string :home_final_score, null: false
      t.timestamps
    end
  end
end
