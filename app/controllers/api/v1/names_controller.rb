class Api::V1::NamesController < ApiController
  def index
    unless params[:name].nil?
      @names = []
      names = params[:name].split(" ")
      names.each do |name|
        if Player.find_by(first_name: names[0], last_name: names[1])
          @names << Player.find_by(first_name: names[0], last_name: names[1])
        elsif Player.find_by(first_name: names[1], last_name: names[0])
          @names << Player.find_by(first_name: names[1], last_name: names[0])
        else
          @names << Player.where("first_name ilike ? or last_name ilike ?", "%#{name}%", "%#{name}%" )
        end
      end
      @names.flatten!
      @names.uniq!
    end

    render json: {
    matchingname: @names,
    }, status: :ok
  end

end
