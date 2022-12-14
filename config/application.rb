require_relative 'boot'

require 'rails'
# Pick the frameworks you want:
require 'active_model/railtie'
# require "active_job/railtie"
# require "active_record/railtie"
# require "active_storage/engine"
require 'action_controller/railtie'
# require "action_mailer/railtie"
# require "action_mailbox/engine"
# require "action_text/engine"
require 'action_view/railtie'
# require "action_cable/engine"
# require "rails/test_unit/railtie"

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module LowUI
  class Application < Rails::Application
    # Initialize configuration defaults for originally generated Rails version.
    config.load_defaults 7.0

    # Configuration for the application, engines, and railties goes here.
    #
    # These settings can be overridden in specific environments using the files
    # in config/environments, which are processed later.
    #
    # config.time_zone = "Central Time (US & Canada)"
    # config.eager_load_paths << Rails.root.join("extras")

    # autoloaders.main.push_dir(root.join('app', 'components', 'stage'), namespace: Components::Stage)
    # ActiveSupport::Dependencies.autoload_paths << "#{root}/app"

    # paths.add 'app/components', eager_load: true
    # config.autoload_paths << "#{root}/app/components"

    config.eager_load_paths.delete("#{root}/app/components")
    config.eager_load_paths.unshift("#{root}/app")

    config.proscenium.include_paths += ['app/components', 'packages']

    config.add_autoload_paths_to_load_path = false

    # Don't generate system test files.
    config.generators.system_tests = nil
  end
end
