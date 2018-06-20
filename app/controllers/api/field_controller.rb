class Api::FieldController < ApplicationController
    def index
        @info = Field.all
    end

    def create
        @info = Field.new(info_params)

        if @info.save 
            render :show
        else 
            render json: @info.errors.full_messages, status: 422
        end
    end

    def update
        @info = Field.find_by(params[:id])

        if @info.update_attributes(info_params)
            render :show
        else
            render json: @info.errors.full_messages, status: 422
        end
    end

    def destroy
        @info = Field.find_by(params[:id])

        unless @info.destroy 
            render json: @info.errors.full_messages, status: 422
        end
    end

    private

    def info_params
        params.require(:info).permit(:title, :body, :images [])
    end
end
