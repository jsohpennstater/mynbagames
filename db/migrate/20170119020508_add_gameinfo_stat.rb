class AddGameinfoStat < ActiveRecord::Migration[5.0]
  def change
    add_column :stats, :away, :string, null: false
    add_column :stats, :away_pic, :string, null: false
    add_column :stats, :away_final_score, :string, null: false
    add_column :stats, :home, :string, null: false
    add_column :stats, :home_pic, :string, null: false
    add_column :stats, :home_final_score, :string, null: false
  end
end
