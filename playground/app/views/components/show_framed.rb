module Views
  class Components::ShowFramed < ApplicationView
    def initialize(component_path)
      @component_path = component_path
    end

    def template
      render Views::Layouts::Application.new do
        render Header::Component.new
        main do
          iframe src: _component_path(@component_path), width: '100%', height: '100%'
        end
      end
    end
  end
end
