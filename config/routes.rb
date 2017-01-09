Rails.application.routes.draw do
  root "games#index"
  resources :games, only: [:index]

  namespace :api do
   namespace :v1 do
     resources :players, only: [:index, :show]
     resources :names, only: [:index]
   end
  end
end
