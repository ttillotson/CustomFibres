class Api::FieldsController < ApplicationController
    def index
        @field = Field.all
    end

    def create
        @field = Field.new(field_params)

        if @field.save 
            render :show
        else 
            render json: @field.errors.full_messages, status: 422
        end
    end

    def update
        @field = Field.find(params[:id])

        if @field.update_attributes(field_params)
            render :show
        else
            render json: @field.errors.full_messages, status: 422
        end
    end

    def destroy
        @field = Field.find_by(params[:id])

        unless @field.destroy 
            render json: @field.errors.full_messages, status: 422
        end
    end

    private

    def field_params
        params.require(:field).permit(:title, :body, :page_id)
    end
end
