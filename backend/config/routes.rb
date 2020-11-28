Rails.application.routes.draw do
  resources :actions
  resources :players
  resources :boards
  resources :games
  resources :minions, except: [:patch]
  resources :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  patch 'minions', to: 'minions#update'
end
