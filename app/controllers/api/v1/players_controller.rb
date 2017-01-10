class Api::V1::PlayersController < ApiController
  def index
    @players = Player.all.order(:last_name).order(:first_name)
    render json: {
    players: @players,
    }, status: :ok
  end

  def show
    @player = Player.find_by(first_name: params["firstname"], last_name: params["lastname"])
    @stats = @player.stats
    render json: {
    player: @player,
    stats: @stats
    }, status: :ok
  end
end
