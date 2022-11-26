# frozen_string_literal: true

module Views
  class ApplicationView < Proscenium::Phlex
    include Rails.application.routes.url_helpers
    # include Phlex::Translation
    include Proscenium::Phlex::ResolveCssModules

    private

    def head(title:)
      super do
        meta name: 'viewport', content: 'width=device-width,initial-scale=1'
        title { title }
        csp_meta_tag
        csrf_meta_tags
        comment { '[SIDE_LOAD_STYLESHEETS]' }
      end
    end

    def body
      super do
        yield

        side_load_javascripts defer: true, type: :module
        Rails.env.development? && proscenium_dev
      end
    end

    def html
      super do
        yield

        @_target.gsub!('<!-- [SIDE_LOAD_STYLESHEETS] -->', capture { side_load_stylesheets })
      end
    end
  end
end
