class Api::FieldsController < ApplicationController
    def index
        @field = Field.all.with_attached_images
    end

    def create
        # @field = Field.new(field_params)
        @field = Field.new
        @field.title = params[:title]
        @field.body = params[:body]
        @field.page_id = params[:page_id]
        
        @field.images.attach(params[:images]) if params[:images]

        if @field.save 
            render :show
        else 
            render json: @field.errors.full_messages, status: 422
        end
    end

    def update
        @field = Field.find(params[:field_id])

        @field.title = params[:title]
        @field.body = params[:body]
        @field.page_id = params[:page_id]

        if params[:images]
            debugger
            if @field.update_attributes(images: params[:images]) && @field.save!
                render :show
            else
                render json: @field.errors.full_messages, status: 422
            end
        else 
            if @field.save
                render :show
            else
                render json: @field.errors.full_messages, status: 422
            end
        end
    end

    def destroy
        @field = Field.find(params[:id])

        unless @field.destroy 
            render json: @field.errors.full_messages, status: 422
        end
    end

    def destroy_attached_image
        @image = ActiveStorage::Blob.find_signed(params[:imageId])
        @image.purge
        @field = Field.find(params[:fieldId])
        debugger;

        render :show
    end

    private

    def field_params
        params.require(:field).permit(:title, :body, :page_id, images: [])
    end
end
