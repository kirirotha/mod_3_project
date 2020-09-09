class BoardsController < ApplicationController
    before_action :find_board, only:[:show, :edit, :update]
    # before_action :board_params, only:[:update]

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
        @board.update(board_params)
        @board.save
        render :json => @board, :status => :accepted
    end

    private

    def board_params
        params.require(:board).permit(:cell, :lat, :long, :piece_placement, :game_id)
    end

    def find_board
        @board = Board.find(params[:id])
    end

end
