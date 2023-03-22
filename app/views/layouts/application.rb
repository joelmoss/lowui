# frozen_string_literal: true

module Views
  module Layouts
    class Application < Proscenium::Phlex
      include Proscenium::Phlex::Page
      include Phlex::Rails::Helpers::Routes

      def head
        super do
          meta name: 'viewport', content: 'width=device-width,initial-scale=1'
          meta name: 'root-path', content: root_path
        end
      end
    end
  end
end
