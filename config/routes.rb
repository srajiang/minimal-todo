Rails.application.routes.draw do

  namespace :api do
  end
  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :todos, except: [:new, :edit]
    resources :steps, only: [:index, :create, :destroy, :update]
  end

  root to: 'static_pages#root'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
