module Views
  class Components::ShowUnframed < ApplicationView
    def initialize(component_path)
      @component_path = component_path
    end

    def template
      render Views::Layouts::Application.new do
        main do
          @component_path
        end
      end
    end
  end
end
