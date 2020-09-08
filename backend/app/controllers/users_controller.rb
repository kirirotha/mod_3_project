class UsersController < ApplicationController
    before_action :find_user, only:[:show, :edit, :update]

    def index
        @users = User.all

        render :json => @users, :include => [:players, :games]

    end

    def show

        render :json => @user, :include => [:players, :games]

    end

    def new
        @user = User.new
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

    def user_params
        params.require(:user).permit(:name, :password)
    end

    def find_player
        @user = User.find(params[:id])
    end
end
