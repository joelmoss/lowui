# frozen_string_literal: true

module Views
  module Previews
    class Index < Layouts::Application
      def template
        super do
          render Components::Header::Component.new

          main do
            div(class: :unselected) { 'No preview currently selected 👀' }
          end
        end
      end
    end
  end
end
