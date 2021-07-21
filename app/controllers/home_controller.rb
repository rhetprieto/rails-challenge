class HomeController < ApplicationController
    def index
        render component: 'Home', prerender: false
    end
end
