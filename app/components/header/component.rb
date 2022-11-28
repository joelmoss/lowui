class Header::Component < Proscenium::Phlex::Component
  include Proscenium::Phlex::ResolveCssModules
  include Rails.application.routes.url_helpers

  def initialize(component_path = nil)
    @component_path = component_path
  end

  def template
    header do
      div class: '@logo' do
        a href: root_path do
          span { '_low' }
          span { 'UI' }
        end
      end

      div(class: '@select') do
        a(href: _component_path(@component_path), target: '_blank') { 'Open in new tab' } if @component_path

        unsafe_raw helpers.select_tag 'components', options_for_component_select,
                                      prompt: 'Select component...',
                                      id: 'componentSelect'
      end
    end
  end

  private

  def options_for_component_select
    helpers.options_for_select [
      %w[Modal modal],
      %w[Sheet sheet]
    ], @component_path
  end
end
