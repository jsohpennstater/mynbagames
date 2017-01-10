class PlayersController < ApplicationController
  def show
    @player = Player.find_by(id: params[:id])
    @stats = @player.stats
    @season_average = Hash.new
    @season_average["ppg"] = @player.points_per_game
    @season_average["rpg"] = @player.rebounds_per_game
    @season_average["apg"] = @player.assits_per_game
    @season_average["spg"] = @player.steals_per_game
    @season_average["bpg"] = @player.blocks_per_game
    @season_average["mpg"] = @player.minutes_per_game
    @season_average["fgp"] = @player.fg_percentage
    @season_average["ftp"] = @player.ft_percentage
    @season_average["threep"] = @player.three_percentage
    render json: {
    player: @player,
    stats: @stats,
    season_average: @season_average
    }, status: :ok
  end
end
