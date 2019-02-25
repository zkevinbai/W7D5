class Api::UsersController < ApplicationController

    def create
        @user = User.new(user_params)
        if @user.save
            login(@user)
            # redirect to index
            render :show
        else
            #redirect to signup
        end
    end

    private

    def user_params
        params.require(:user).permit(:username, :password)
    end
end

# $.ajax({
#     type: "POST",
#     url: "/api/session",
#     data: {
#         user: {
#             username: "kevin"
#             password: "password"
#         }
#     }
# }).then((res) => console.log(res))
