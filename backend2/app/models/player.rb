class Player < ApplicationRecord
  belongs_to :game
  belongs_to :user
  has_many :minions
  has_many :actions, through: :minions

end
