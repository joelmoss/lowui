module Views
  class Components::Index < ApplicationView
    def initialize(component_path)
      @component_path = component_path
    end

    def template
      render Views::Layouts::Application.new do
        render Header::Component.new
        main do
          h2 { 'Select a component...' }
        end
      end
    end
  end
end
