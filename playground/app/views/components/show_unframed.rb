module Views
  class Components::ShowUnframed < ApplicationView
    def initialize(component_path)
      @component_class = "Previews::#{component_path.classify}::Component".constantize
    end

    def template
      render Views::Layouts::Application.new do
        main do
          render @component_class.new
        end
      end
    end
  end
end
