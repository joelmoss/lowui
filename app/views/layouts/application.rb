module Views
  class Layouts::Application < ApplicationView
    include Phlex::Rails::Layout

    def initialize(component_path = nil)
      @component_path = component_path
    end

    def template(&block)
      doctype
      html do
        head title: [@component_path, '_lowUI Playground'].compact.join(' | ')

        body(&block)
      end
    end
  end
end
