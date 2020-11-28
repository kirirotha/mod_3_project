class GamesController < ApplicationController
    before_action :find_game, only:[:show, :update]

    def index
        @games = Game.all

        render :json => @games, :include => [:board, :players, :users, :actions, :minions]
    end 

    def show

        render :json => @game, :include => [:board, :players, :users, :actions, :minions]
        
    end

    def new
        @game = Game.new
    end

    def create
        byebug
        @game = Game.new(game_params)
        @game.save
        render :json => @game, :status => :accepted
    end

    def edit
        @game = Game.find(params[:id])
    end

    def update
        @game.update(game_params)
        @game.save
        render :json => @game, :status => :accepted
    end

    def delete
    end

    private

    def game_params
        params.require(:game).permit(:id, :team_selection, :ready_check, :coin_toss, :map_positioning, minions: [:id, :name, :src, :scalarH, :leader, :class_type, :hp, :hp_max, :atk, :atk_range, :move_range, :cell, :player1or2])
    end


    def find_game
        @game = Game.find(params[:id])
    end

end
