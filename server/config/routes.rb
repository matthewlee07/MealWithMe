Rails.application.routes.draw do
  resources :interests
  get 'home/index'
  resources :categories, only: [:index]
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "home#index"
end
