class CreateOrders < ActiveRecord::Migration[6.1]
  def change
    create_table :orders do |t|
      t.integer :price
      t.string :customer_name

      t.timestamps
    end
  end
end
