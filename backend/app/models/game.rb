class Game < ApplicationRecord
    has_one :board
    has_many :players
    has_many :users, through: :players
    has_many :actions
    has_many :minions


end
