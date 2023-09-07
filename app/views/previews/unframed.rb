# frozen_string_literal: true

module Views
  class Previews::Unframed < Layouts::Application
    def template
      super do
        div do
          Proscenium::Importer.import resolve: '@proscenium/react-manager/index.jsx'
          Proscenium::Importer.import react_component_path, lazy: true

          div data: { proscenium_component_path: react_component_path,
                      proscenium_component_props: react_component_props }
        end
      end
    end

    private

    def react_component_path
      @react_component_path ||= "/app/previews/#{path}.jsx"
    end

    def react_component_props = {}.to_json

    def path
      @path ||= helpers.params[:path]
    end
  end
end
