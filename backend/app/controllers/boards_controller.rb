class BoardsController < ApplicationController
    before_action :find_board, only:[:show, :edit, :update]


    def index
        @boards = Board.all

        render :json => @boards
    end

    def show

        render :json => @boards

    end

    def new
        @board = Board.new
    end

    def create 
    end

    def edit 
    end 

    def update
    end

    private

    def board_params
        params.require(:action).permit(:cell, :lat, :long, :game_id)
    end

    def find_board
        @board = Board.find(params[:id])
    end

end
