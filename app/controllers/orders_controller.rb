class OrdersController < ApplicationController
  def new
    render component: 'Home', prerender: false
  end

  def show
    render component: 'Home', prerender: false
  end
end
