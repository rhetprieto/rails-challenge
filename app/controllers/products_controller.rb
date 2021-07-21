class ProductsController < ApplicationController
    def show
        products = Product.all.order('price_cents ASC')
        render json: products
    end
end
