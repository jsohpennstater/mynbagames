class Api::V1::NamesController < ApiController
  def index
    unless params[:name].nil?
      @names = []
      names = params[:name].split(" ")
      names.each do |name|
        if Player.find_by(first_name: names[0].to_s.capitalize, last_name: names[1].to_s.capitalize)
          @names << Player.find_by(first_name: names[0].to_s.capitalize, last_name: names[1].to_s.capitalize)
        elsif Player.find_by(first_name: names[1].to_s.capitalize, last_name: names[0].to_s.capitalize)
          @names << Player.find_by(first_name: names[1].to_s.capitalize, last_name: names[0].to_s.capitalize)
        else
          @names << Player.where("first_name ilike ? or last_name ilike ?", "#{name}%", "#{name}%" )
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
