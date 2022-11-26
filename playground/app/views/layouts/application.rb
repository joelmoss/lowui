module Views
  class Layouts::Application < ApplicationView
    include Phlex::Rails::Layout

    def template(&block)
      doctype
      html do
        head title: '_lowUI Playground'

        body(&block)
      end
    end
  end
end
