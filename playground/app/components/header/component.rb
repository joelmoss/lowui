class Header::Component < ApplicationComponent
  def template
    header do
      div class: '@logo' do
        span { '_low' }
        span { 'UI' }
      end
    end
  end
end
