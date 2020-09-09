class GamesController < ApplicationController
    before_action :find_game, only:[:show, :update]

    def index
        @games = Game.all

        render :json => @games, :include => [:board, :players, :users, :actions]
    end 

    def show

        render :json => @game, :include => [:board, :players, :users, :actions]
        
    end

    def new
        @game = Game.new
    end

    def create
    end

    def edit
        @game = Game.find(params[:id])
    end

    def update
    end

    def delete
    end

    private

    def game_params
        params.require(:game).permit(:team_selection, :ready_check, :coin_toss, :map_positioning)
    end

    def find_game
        @game = Game.find(params[:id])
    end

end
