class Api::SessionsController < ApplicationController

    def create
        @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
        if @user
            login(@user)
            #redirect to index
            render template: "api/users/show"
        else
            #redirect to signup/login
            render :json => {:error => "#{@user.errors.full_messages}"}, :status => 404
        end
    end

    def destroy
        # debugger
        if current_user
            logout
            render json: {}
        else   
            #redirect to signup/login
            render :json => {:error => "no current user"}, :status => 404
        end
    end
end