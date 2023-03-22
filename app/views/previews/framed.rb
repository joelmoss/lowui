# frozen_string_literal: true

module Views
  class Previews::Framed < Layouts::Application
    def template
      super do
        render Components::Header::Component.new

        main do
          iframe src: unframed_preview_path(helpers.params[:path]), width: '100%', height: '100%'
        end
      end
    end
  end
end
