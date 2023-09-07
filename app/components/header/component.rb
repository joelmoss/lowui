# frozen_string_literal: true

module Components
  class Header::Component < Proscenium::Phlex
    include Phlex::Rails::Helpers::Routes

    def template
      header do
        div class: :@logo do
          a(href: root_path) { 'lowUI' }
        end

        div(class: :@select) do
          if selected_path
            a(href: unframed_preview_path(selected_path), target: '_blank') do
              'Open in new tab'
            end
          end

          select name: 'previews', id: 'previewSelect' do
            option { 'Select preview...' } unless selected_path

            previews.each do |path|
              option value: "previews/#{path}", selected: path == selected_path do
                path
              end
            end
          end
        end
      end
    end

    private

    def selected_path = helpers.params[:path]

    def previews
      previews_path.glob('**/*.jsx').map do |path|
        path.relative_path_from(previews_path).sub_ext('').to_s
      end
    end

    def previews_path
      @previews_path ||= Rails.root.join('app/previews')
    end
  end
end
