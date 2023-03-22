Rails.application.routes.draw do
  get '/previews/_/*path' => 'previews#unframed', as: :unframed_preview
  get '/previews/*path' => 'previews#framed', as: :preview

  root to: 'previews#index'
end
