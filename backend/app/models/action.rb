class Action < ApplicationRecord
  belongs_to :game
  belongs_to :player
  belongs_to :minion
end
