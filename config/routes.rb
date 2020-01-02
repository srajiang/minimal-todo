Rails.application.routes.draw do

  namespace :api, defaults: { format: :json } do
    resources :todos, except: [:new, :edit]
    resources :steps, only: [:index, :create, :destroy, :update]
  end

  root to: 'static_pages#root'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
