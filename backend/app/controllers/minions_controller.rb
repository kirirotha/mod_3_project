class MinionsController < ApplicationController
    before_action :find_minion, only:[:show, :edit, :update, :destroy]

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
        # params[:minions].each do |minion|
        #     new_minion = Minion.create(minion_params_each(minion))
        #     new_minion.hp_max = @minion.hp
        #     new_minion.active = true
        #     new_minion.attack_active = true
        #     new_minion.move_active = true
        #     new_minion.save
        # end
    end

    def edit
    end

    def update
        @minion.update(minion_params)
        @minion.save
        render :json => @minion, :status => :accepted
    end

    def destroy
        @minion.destroy
        if @minion
            @minion.destroy
            render :json => { "message": "The item was destroyed.." }
        end
    end

    private

    def minion_params
        params.require(:minion).permit(:leader, :type, :hp, :atk, :atk_range, :move_range, :cell, :src, :player1or2, :scalarH, :class_type, :name, :attack_active, :move_active, :hp_max )
    end

    def minion_params_each(minion)
        minion.permit(:leader, :type, :hp, :atk, :atk_range, :move_range, :cell, :src, :player1or2, :scalarH, :class_type, :name, :attack_active, :move_active, :hp_max )
    end

    def find_minion
        @minion = Minion.find_by(id: params[:id])
    end

end
