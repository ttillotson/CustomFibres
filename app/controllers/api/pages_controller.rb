class Api::PagesController < ApplicationController
    def index
        @pages = Page.all.includes(:fields)
        @fields = @pages.map(&:fields)
    end

    def show
        @page = Page.includes(:fields).find_by(name: params[:name])
        @fields = @page.fields
    end
end
