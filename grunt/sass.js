module.exports = {
    // Настройки для разработки
    dev: {
      options: {
        outputStyle: 'nested',
        sourceMap: true
      },
      files: [{
        expand: true,
        cwd: 'src/styles',
        src: ['*.scss'],
        dest: 'dist/styles',
        ext: '.css'
      }]
    },
    // Настройки для продакшна
    prod: {
      options: {
        outputStyle: 'compressed',
        sourceMap: false
      },
      files: [{
        expand: true,
        cwd: 'src/styles',
        src: ['*.scss'],
        dest: 'dist/styles',
        ext: '.css'
      }]
    }
  };