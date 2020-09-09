class MinionsController < ApplicationController
    before_action :find_minion, only:[:show, :edit, :update]

    def index
        @minions = Minion.all

        render :json => @minions, :include => :actions

    end

    def show

        render :json => @minion, :include => :actions

    end

    def new
        @minion = Minion.new
    end

    def create
    end

    def edit
    end

    def update
        @minion.update(minion_params)
        @minion.save
        render :json => @minion, :status => :accepted
    end

    def delete
    end

    private

    def minion_params
        params.require(:minion).permit(:leader, :type, :hp, :atk, :atk_range, :move_range, :cell)
    end

    def find_minion
        @minion = Minion.find(params[:id])
    end

end
