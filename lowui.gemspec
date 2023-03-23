# frozen_string_literal: true

require_relative 'lib/lowui/version'

Gem::Specification.new do |spec|
  spec.name        = 'lowui'
  spec.version     = Lowui::VERSION
  spec.authors     = ['Joel Moss']
  spec.email       = ['joel@developwithstyle.com']
  spec.homepage    = 'https://github.com/joelmoss/lowui'
  spec.summary     = 'Low level primitive React components'
  spec.description = 'Low level primitive React components'
  spec.license = 'MIT'
  spec.required_ruby_version = '>= 3.2'

  # Prevent pushing this gem to RubyGems.org. To allow pushes either set the "allowed_push_host"
  # to allow pushing to a single host or delete this section to allow pushing to any host.
  spec.metadata['allowed_push_host'] = "TODO: Set to 'http://mygemserver.com'"

  spec.metadata['homepage_uri'] = spec.homepage
  spec.metadata['source_code_uri'] = 'https://github.com/joelmoss/lowui'
  spec.metadata['changelog_uri'] = 'https://github.com/joelmoss/lowui'
  spec.metadata['rubygems_mfa_required'] = 'true'

  spec.files = Dir.chdir(File.expand_path(__dir__)) do
    Dir['{app,config,db,lib}/**/*', 'MIT-LICENSE', 'Rakefile', 'README.md']
  end
end
