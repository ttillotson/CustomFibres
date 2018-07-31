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
        @page = Page.includes(:fields).find(params[:page_id])
        @fields = Field.with_attached_images
            .where(page_id: @page.id)
            .order(:created_at)

        if params[:mast_image] 
            @page.mast_image.purge 
            @page.mast_image.attach(params[:mast_image])
            render :show
        elsif params[:images]
            if @page.update_attributes(images: params[:images])
                render :show
            else
                render json: @page.errors.full_messages, status: 422
            end
        end
    end

    def destroy_attached_image
        # Pull Blob && Attachment
        @image = ActiveStorage::Blob.find_signed(params[:imageId])
        @attachment = ActiveStorage::Attachment.find_by(blob_id: @image.id)
        
        # Destroy them
        @image.purge
        @attachment.destroy

        # Eager load content 
        @page = Page.find(params[:page_id])
        @fields = Field.with_attached_images
            .where(page_id: @page.id)
            .order(:created_at)

        render :show
    end
end
