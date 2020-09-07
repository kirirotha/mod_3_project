class Minion < ApplicationRecord
    belongs_to :player
    has_many :actions
end
