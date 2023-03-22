# frozen_string_literal: true

module Views
  class Previews::Unframed < Layouts::Application
    def template
      super do
        div class: 'componentManagedByProscenium', data: { component: component_data } do
          div { 'loading...' }
        end
      end
    end

    private

    def component_data
      { path: "/app/previews/#{helpers.params[:path]}" }.to_json
    end
  end
end
