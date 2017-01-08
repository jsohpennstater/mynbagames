class Api::V1::PlayersController < ApiController

  def index
    binding.pry
  end

  def show
    binding.pry
    @player = Player.find_by(first_name: params["firstname"], last_name: params["lastname"])
    render json: {
    player: @player,
    }, status: :ok
  end
end
