# frozen_string_literal: true

require 'lowui/version'

module Lowui
  # This Rails engine is only intended to help with using LowUI during development. Mainly because
  # we don't compile or bundle anything in development - no need to.
  class Engine < ::Rails::Engine
  end
end
