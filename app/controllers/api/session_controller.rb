class Api::SessionsController < ApplicationController
    def create
        @user = User.find_by_credentials(user_params)

        if @user 
            sign_in(@user)
            render
        else 
            render json: ['Invalid Credentials'], status: 422
        end
    end

    def destroy 
        @user = current_user 

        if @user 
            sign_out
        else
            render json: ['Nobody is currently signed in.'], status: 404
        end
    end

    private 

    def user_params
        params.require(:user).permit(:username, :password)
    end
end
