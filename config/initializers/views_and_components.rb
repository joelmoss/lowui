# frozen_string_literal: true

module Views; end
module Components; end

root = Rails.root
loader = Rails.autoloaders.main

# Phlex views
loader.push_dir("#{root}/app/views", namespace: Views)
ActiveSupport::Dependencies.autoload_paths.delete("#{root}/app/components")

# Components
loader.push_dir("#{root}/app/components", namespace: Components)

# Enables reloading in engine
ActiveSupport::Dependencies.autoload_paths << "#{root}/app"
