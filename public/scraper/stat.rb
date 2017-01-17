require 'open-uri'
require 'nokogiri'
require 'pry'
require 'rubygems'
require 'json'

gameday = 20170101
while gameday <= 20170116
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
    c.each do |gamestat|
      begin
        if gamestat.attributes["class"].value.slice(0,6) == "shsRow"
          stat = Hash.new

          doc = Nokogiri::HTML(open("http://scores.nbcsports.com#{gamestat.children[1].children[0].attributes["href"].value}"))
          name = doc.css('tr')
          playername = name[2].children[1].children[2].text
          namesplit = playername.split(" ")
          stat["first_name"] = namesplit[0]
          stat["last_name"] = namesplit[1]

          stat["gamecode"] = gamecode
          stat["position"] = gamestat.children[3].text
          stat["min"] = gamestat.children[5].text
          stat["fgm_fga"] = gamestat.children[7].text
          stat["ftm_fta"] = gamestat.children[9].text
          stat["threepm_threepa"] = gamestat.children[11].text
          stat["plus_minus"] = gamestat.children[13].text
          stat["offensive_rebound"] = gamestat.children[15].text
          stat["total_rebound"] = gamestat.children[17].text
          stat["assist"] = gamestat.children[19].text
          stat["block"] = gamestat.children[21].text
          stat["steal"] = gamestat.children[23].text
          stat["turnover"] = gamestat.children[25].text
          stat["personal_foul"] = gamestat.children[27].text
          stat["points"] = gamestat.children[29].text
          stat["player_link"] = gamestat.children[1].children[0].attributes["href"].value
          game << stat
        elsif gamestat.attributes["class"].value == "shsColTtlRow"
          stat = Hash.new
          stat["total"] = "away"
          stat["gamecode"] = gamecode
          stat["min"] = gamestat.children[5].children.text
          stat["fgm_fga"] = gamestat.children[7].children.text
          stat["ftm_fta"] = gamestat.children[9].children.text
          stat["threepm_threepa"] = gamestat.children[11].children.text
          stat["plus_minus"] = gamestat.children[13].children.text
          stat["offensive_rebound"] = gamestat.children[15].children.text
          stat["total_rebound"] = gamestat.children[17].children.text
          stat["assist"] = gamestat.children[19].children.text
          stat["block"] = gamestat.children[21].children.text
          stat["steal"] = gamestat.children[23].children.text
          stat["turnover"] = gamestat.children[25].children.text
          stat["personal_foul"] = gamestat.children[27].children.text
          stat["points"] = gamestat.children[29].children.text
          game << stat
        end
      rescue Exception => e
        next
     end
   end

   game.delete_at(0)
   home = game.pop
   home["total"] = "home"
   game << home
   File.open("#{gamecode}.json","w") do |f|
     f.write(game.to_json)
   end
end
gameday += 1
end
