Rails.application.routes.draw do
  root "players#index"
  resources :players, only: [:index, :show]

  namespace :api do
   namespace :v1 do
     resources :players, only: [:index, :show]
     resources :names, only: [:index]
   end
  end
end
