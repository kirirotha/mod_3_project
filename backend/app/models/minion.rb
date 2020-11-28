class Minion < ApplicationRecord
    has_many :actions
    belongs_to :game
end
