class PlayersController < ApplicationController
    before_action :find_player, only:[:show, :edit, :update]

    def index
        @players = Player.all

        render :json => @players, :include => [:minions, :actions]

    end

    def show

        render :json => @player, :include => [:minions, :actions]

    end

    def new
        @player = Player.new
    end

    def create 
    end

    def edit
    end

    def update
    end

    def delete
    end

    private

    def player_params
        params.require(:player).permit(:leader_name, :game_id, :user_id)
    end

    def find_player
        @player = Player.find(params[:id])
    end
end
