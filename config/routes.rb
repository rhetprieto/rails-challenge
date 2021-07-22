Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  get "home/index"
  root to: "home#index"

  get '/orders/get_all', to: 'orders#get_all'

  resources :orders
  resources :products
end