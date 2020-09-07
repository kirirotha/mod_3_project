Rails.application.routes.draw do
  resources :actions
  resources :players
  resources :boards
  resources :games
  resources :minions
  resources :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
