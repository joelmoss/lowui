# This file is used by Rack-based servers to start the application.

require 'debug/open_nonstop' if ENV['PWD'].include?('.puma-dev')
require_relative 'config/environment'

run Rails.application
Rails.application.load_server
