class Api::V1::PlayersController < ApiController
  def index
    binding.pry
    @player = Player.find_by(firstname: params["firstname"], lastname: params["lastname"])
    render json: {
    player: @player,
    }, status: :ok
  end

end
