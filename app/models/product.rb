class Product < ApplicationRecord
    has_many :order_products
    has_many :order, through: :order_products
end
