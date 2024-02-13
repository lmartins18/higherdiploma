Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get "up" => "rails/health#show", as: :rails_health_check
  get "/sum" => "calculator#sum"
  get "/division" => "calculator#division"
  get "/subtraction" => "calculator#subtraction"
  get "/multiplication" => "calculator#multiplication"
  post "/sum" => "calculator#sum"
  post "/division" => "calculator#division"
  post "/subtraction" => "calculator#subtraction"
  post "/multiplication" => "calculator#multiplication"
  # Defines the root path route ("/")
  root "calculator#main"
end
