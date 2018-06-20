class Api::PageController < ApplicationController
    def index
        @pages = Pages.all.includes(fields)
        @fields = @pages.map(&:fields)
    end
end
