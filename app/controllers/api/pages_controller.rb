class Api::PagesController < ApplicationController
    def index
        @pages = Page.all.includes(:fields)
        @fields = Field.all.with_attached_images
    end

    def show
        @page = Page.includes(:fields).find_by(name: params[:name])
        @fields = @page.fields.with_eager_loaded_images
    end
end
