class ActionsController < ApplicationController
    before_action :find_action, only:[:show, :edit, :update]

    def index
        @actions = Action.all

        render :json => @actions
    end 

    def show
        
        render :json => @action

    end 

    def edit
    end

    def update
    end

    private

    def action_params
        params.require(:action).permit(:move, :attack, :wait, :status, :turn, :atk_target, :game_id, :player_id, :minion_id)
    end

    def find_action
        @action = Action.find(params[:id])
    end
end
