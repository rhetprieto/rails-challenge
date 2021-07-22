class OrdersController < ApplicationController
  skip_before_action :verify_authenticity_token
  def new
    render component: 'Home', prerender: false
  end

  def show
    render component: 'Home', prerender: false
  end

  def get_all
    orders = Order.all
    render json: orders.to_json(include: { products: {only: :name}})
  end

  def create
    products = Product.find(params[:products].map { |p| p[:id]})
    price = products.inject(0) { |acc, p| acc += p.price_cents }
    order = Order.new(products: products, price: price)
    order.save
    render json: order
  end
end
