class Api::V1::PlayersController < ApiController
  def index
    @player = Player.find_by(first_name: params["firstname"], last_name: params["lastname"])
    render json: {
    player: @player,
    }, status: :ok
  end

end
