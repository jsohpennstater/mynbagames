# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170119020508) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "games", force: :cascade do |t|
    t.string   "gamecode",         null: false
    t.string   "away",             null: false
    t.string   "away_pic",         null: false
    t.string   "away_final_score", null: false
    t.string   "home",             null: false
    t.string   "home_pic",         null: false
    t.string   "home_final_score", null: false
    t.datetime "created_at",       null: false
    t.datetime "updated_at",       null: false
  end

  create_table "players", force: :cascade do |t|
    t.string   "first_name", default: "", null: false
    t.string   "last_name",  default: ""
    t.string   "image",                   null: false
    t.string   "number",                  null: false
    t.string   "team",                    null: false
    t.string   "height",                  null: false
    t.string   "born",                    null: false
    t.string   "position",                null: false
    t.string   "weight",                  null: false
    t.string   "birthplace",              null: false
    t.string   "college",                 null: false
    t.string   "draft",                   null: false
    t.datetime "created_at",              null: false
    t.datetime "updated_at",              null: false
  end

  create_table "stats", force: :cascade do |t|
    t.string   "gamecode",          null: false
    t.string   "position",          null: false
    t.string   "min",               null: false
    t.string   "fgm",               null: false
    t.string   "fga",               null: false
    t.string   "ftm",               null: false
    t.string   "fta",               null: false
    t.string   "threepm",           null: false
    t.string   "threepa",           null: false
    t.string   "plus_minus",        null: false
    t.string   "offensive_rebound", null: false
    t.string   "total_rebound",     null: false
    t.string   "assist",            null: false
    t.string   "block",             null: false
    t.string   "steal",             null: false
    t.string   "turnover",          null: false
    t.string   "personal_foul",     null: false
    t.string   "points",            null: false
    t.integer  "player_id",         null: false
    t.datetime "created_at",        null: false
    t.datetime "updated_at",        null: false
    t.string   "away",              null: false
    t.string   "away_pic",          null: false
    t.string   "away_final_score",  null: false
    t.string   "home",              null: false
    t.string   "home_pic",          null: false
    t.string   "home_final_score",  null: false
    t.index ["player_id"], name: "index_stats_on_player_id", using: :btree
  end

end
