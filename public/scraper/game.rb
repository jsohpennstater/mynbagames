require 'open-uri'
require 'nokogiri'
require 'pry'
require 'rubygems'
require 'json'

game = File.read("../scraper/team_logos.json")
sorted_game = JSON.parse(game)

gameday = 20180201
while gameday <= 20180223
  doc = Nokogiri::HTML(open("http://scores.nbcsports.com/nba/scoreboard.asp?day=#{gameday}"))
  a = doc.css('a')
  array = []
  a.each do |thing|
    if thing.text == "Box"
      array << thing
    end
  end

  gamecodes = []
  array.each do |href|
    b = href.attributes["href"].value.split("=")[1].split("&").first
    gamecodes << b
  end

  gamecodes.each do |gamecode|
    game = []
    gameday_uri = "http://scores.nbcsports.com/nba/boxscore.asp?gamecode=#{gamecode}"
    gamestat = Nokogiri::HTML(open(gameday_uri))
    c = gamestat.css('tr')
    gameinfo = Hash.new
    gameinfo["gamecode"] = gamecode
    gameinfo["away"] = c[4].children[1].children.last.children[0].text
    gameinfo["away_picture"] = sorted_game[c[4].children[1].children.last.children[0].text]
    gameinfo["away_final_score"] = c[4].children[11].children[0].text
    gameinfo["home"] = c[5].children[1].children.last.children[0].text
    gameinfo["home_picture"] = sorted_game[c[5].children[1].children.last.children[0].text]
    gameinfo["home_final_score"] = c[5].children[11].children[0].text
    game << gameinfo

    File.open("../2017-2018/games/2/#{gamecode}.json","w") do |f|
      f.write(game.to_json)
    end
   end

gameday += 1
end
