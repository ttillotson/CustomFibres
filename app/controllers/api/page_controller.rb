class Api::PageController < ApplicationController
    def index
        @pages = Pages.all.includes(:fields)
        @fields = @pages.map(&:fields)
    end

    def show
        debugger;
        @page = Pages.find(params[:page][:pageId]).includes(:fields)
        @fields = @page.fields
    end
end
