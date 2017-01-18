class Player < ActiveRecord::Base
  has_many :stats

  def full_name
    first_name + " " + last_name
  end

  def points_per_game
    total = 0
    stats.each do |stat|
      total += stat.points.to_i
    end
    (total.to_f / stats.length.to_f).round(2)
  end

  def assits_per_game
    total = 0
    stats.each do |stat|
      total += stat.assist.to_i
    end
    (total.to_f / stats.length.to_f).round(2)
  end

  def rebounds_per_game
    total = 0
    stats.each do |stat|
      total += stat.total_rebound.to_i
    end
    (total.to_f / stats.length.to_f).round(2)
  end

  def blocks_per_game
    total = 0
    stats.each do |stat|
      total += stat.block.to_i
    end
    (total.to_f / stats.length.to_f).round(2)
  end

  def steals_per_game
    total = 0
    stats.each do |stat|
      total += stat.steal.to_i
    end
    (total.to_f / stats.length.to_f).round(2)
  end

  def minutes_per_game
    total_min = 0
    total_sec = 0
    stats.each do |stat|
      conversion = stat.min.split(":")
      total_sec += conversion[1].to_i / stats.length.to_i
      total_min += conversion[0].to_i / stats.length.to_i
      if total_sec >= 60
        total_min += (total_sec.to_i / 60)
        total_sec = (conversion[1].to_i % 60)
      end
    end
    "#{total_min}:#{total_sec}"
  end

  def fg_percentage
    total_fgm = 0
    total_fga = 0
    stats.each do |stat|
      total_fgm += stat.fgm.to_i
      total_fga += stat.fga.to_i
    end

    if (total_fgm == 0 && total_fga == 0)
      return "-"
    else
      return "#{((total_fgm.to_f / total_fga.to_f) * 100).round(2)}" + "%"
    end
  end

  def ft_percentage
    total_ftm = 0
    total_fta = 0
    stats.each do |stat|
      total_ftm += stat.ftm.to_i
      total_fta += stat.fta.to_i
    end

    if (total_ftm == 0 && total_fta == 0)
      return "-"
    else
      return "#{((total_ftm.to_f / total_fta.to_f) * 100).round(2)}" + "%"
    end
  end

  def three_percentage
    total_threepm = 0
    total_threepa = 0
    stats.each do |stat|
      total_threepm += stat.threepm.to_i
      total_threepa += stat.threepa.to_i
    end

    if (total_threepm == 0 && total_threepa == 0)
      return "-"
    else
      return "#{((total_threepm.to_f / total_threepa.to_f) * 100).round(2)}" + "%"
    end
  end
end
