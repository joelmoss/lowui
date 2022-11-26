Rails.application.routes.draw do
  mount Proscenium::Railtie, at: '/proscenium' if Rails.env.development?

  # Framed components
  get '/components/*component' => 'components#show_framed', as: :component

  # Unframed components
  get '/_components/*component' => 'components#show_unframed', as: :_component

  root 'components#index'
end
