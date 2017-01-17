require 'open-uri'
require 'nokogiri'
require 'pry'
require 'rubygems'
require 'json'

index = 10
while index <= 12
  Dir.foreach("../public/boxscore/#{index}") do |file|
    next if file == "." or file == ".."
    game_data = File.read("../public/boxscore/#{index}/" + file)
    gamecode = file.chomp('.json')
    sorted_game_data = JSON.parse(game_data)
    sorted_game_data.each do |game|
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
        savepalyer.playername = c[2].children[1].children[2].text
        saveplayer.team = c[5].children.children[1].children.text
        saveplayer.height = c[5].children.children[3].text
        saveplayer.born = c[5].children.children[5].text
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
