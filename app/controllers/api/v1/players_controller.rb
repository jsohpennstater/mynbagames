class Api::V1::PlayersController < ApiController
  def index
    @players = Player.all
    render json: {
    players: @players,
    }, status: :ok
  end

  def show
    @player = Player.find_by(first_name: params["firstname"], last_name: params["lastname"])
    render json: {
    player: @player,
    }, status: :ok
  end
end
