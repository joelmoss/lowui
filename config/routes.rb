Rails.application.routes.draw do
  mount Proscenium::Railtie, at: '/proscenium' if Rails.env.development?
  mount Proscenium::Stage::Engine, at: '/'
end
