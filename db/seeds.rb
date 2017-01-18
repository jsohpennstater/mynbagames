require 'open-uri'
require 'nokogiri'
require 'pry'
require 'rubygems'
require 'json'

# STAT_INFO
index = 1
while index < 2
  Dir.foreach("./public/boxscore/#{index}") do |file|
    next if file == "." or file == ".."
      game_data = File.read("./public/boxscore/#{index}/" + file)
      gamecode = file.chomp('.json')
      sorted_game_data = JSON.parse(game_data)
      sorted_game_data.each do |game|
      current_player = Player.find_by(first_name: game["first_name"], last_name: game["last_name"])
      stats = Stat.new
      stats.player = current_player
      stats.gamecode = game["gamecode"]
      stats.position = game["position"]
      stats.min = game["min"]
      stats.fgm = game["fgm_fga"].split("-")[0]
      stats.fga = game["fgm_fga"].split("-")[1]
      stats.ftm = game["ftm_fta"].split("-")[0]
      stats.fta = game["ftm_fta"].split("-")[1]
      stats.threepm = game["threepm_threepa"].split("-")[0]
      stats.threepa = game["threepm_threepa"].split("-")[1]
      stats.plus_minus = game["plus_minus"]
      stats.offensive_rebound = game["offensive_rebound"]
      stats.total_rebound = game["total_rebound"]
      stats.assist = game["assist"]
      stats.block = game["block"]
      stats.steal = game["steal"]
      stats.turnover = game["turnover"]
      stats.personal_foul = game["personal_foul"]
      stats.points = game["points"]
      stats.save
    end
  end
  index += 1
end

# PLAYER_INFO
index = 1
while index < 2
  Dir.foreach("./public/boxscore/#{index}") do |file|
    next if file == "." or file == ".."
    game_data = File.read("./public/boxscore/#{index}/" + file)
    gamecode = file.chomp('.json')
    sorted_game_data = JSON.parse(game_data)
    sorted_game_data.each do |game|
      if game["player_link"] != nil
        doc = Nokogiri::HTML(open("http://scores.nbcsports.com#{game["player_link"]}"))
        c = doc.css('tr')
        playername = c[2].children[1].children[2].text
        namesplit = playername.split(" ")
        unless Player.find_by(last_name: namesplit[1], first_name: namesplit[0] )
          saveplayer = Player.new
          saveplayer.first_name = namesplit[0]
          saveplayer.last_name = namesplit[1]
          saveplayer.image = c[1].children[1].children[0].attributes["src"].value
          saveplayer.number = c[2].children[1].children[0].text
          saveplayer.team = c[5].children.children[1].children.text
          saveplayer.height = c[5].children.children[3].text
          saveplayer.born = c[5].children.children[5].text.strip
          saveplayer.position = c[6].children[1].children.last.text
          saveplayer.weight = c[6].children[2].children.last.text
          saveplayer.birthplace = c[6].children[4].children.last.text
          saveplayer.college = c[7].children[1].children.last.text
          saveplayer.draft = c[7].children[2].children.last.text
          saveplayer.save
        end
      end
    end
  end
  index += 1
end

# GAME_INFO
# index = 10
# while index < 13
#   Dir.foreach("./public/games/#{index}") do |file|
#     next if file == "." or file == ".."
#       game_info = File.read("./public/games/#{index}/" + file)
#       sorted_game_info = JSON.parse(game_info)
#       sorted_game_info.each do |game|
#         new_game = Game.new
#         new_game.gamecode = game["gamecode"]
#         new_game.away = game["away"]
#         new_game.away_pic = game["away_picture"]
#         new_game.away_final_score = game["away_final_score"]
#         new_game.home = game["home"]
#         new_game.home_pic = game["home_picture"]
#         new_game.home_final_score = game["home_final_score"]
#         new_game.save
#     end
#   end
#   index += 1
# end
