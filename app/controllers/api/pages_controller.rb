class Api::PagesController < ApplicationController
    def index
        @pages = Page.all.includes(:fields, :attached_images, :attached_mast_image)
        @fields = Field.all.includes(:attached_images)
    end

    def show
        @page = Page.includes(:fields).find_by(name: params[:name])
        @fields = Field.with_attached_images
            .where(page_id: @page.id)
            .order(:created_at)
    end

    def update
        @page = Page.find(params[:page_id])

        if @page.update_attributes(images: params[:images], mast_image: params[:mast_image])
            render :show
        else
            render json: @page.errors.full_messages, status: 422
        end
    end
end
