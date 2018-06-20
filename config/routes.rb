Rails.application.routes.draw do
  get 'page/index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: { format: :json } do 
    resources :users, only: %i(create destroy)
    resource :session, only: %i(create destroy)
    resources :pages, only: %i(index) do 
      resources :fields, only: :index
    end
    resources :fields, only: %i(show create update destroy)
  end

  root to: 'static_pages#root'
end