class AddProductPriceToOrderProduct < ActiveRecord::Migration[6.1]
  def change
    add_column :order_products, :price, :integer
  end
end
