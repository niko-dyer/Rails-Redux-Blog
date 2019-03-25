Rails.application.routes.draw do
  namespace :api do
    resources :blogs
  end
end
