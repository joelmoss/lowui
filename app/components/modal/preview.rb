# frozen_string_literal: true

module Components
  class Modal::Preview < Lookbook::Preview
    def default
      render Modal::Default::Component.new
    end
  end
end
