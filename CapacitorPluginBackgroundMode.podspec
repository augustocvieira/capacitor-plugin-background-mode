
  Pod::Spec.new do |s|
    s.name = 'CapacitorPluginBackgroundMode'
    s.version = '0.0.1'
    s.summary = 'Port of cordova-plugin-background-mode to capacitor'
    s.license = 'Apache License 2.0'
    s.homepage = 'https://github.com/augustocvieira/capacitor-plugin-background-mode.git'
    s.author = 'Augusto Vieira'
    s.source = { :git => 'https://github.com/augustocvieira/capacitor-plugin-background-mode.git', :tag => s.version.to_s }
    s.source_files = 'ios/Plugin/**/*.{swift,h,m,c,cc,mm,cpp}'
    s.ios.deployment_target  = '11.0'
    s.dependency 'Capacitor'
  end