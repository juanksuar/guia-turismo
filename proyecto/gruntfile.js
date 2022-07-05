const { getJSDocReturnType } = require("typescript");
    require('time-grunt');
    module_exports= function(grunt){
    require('jit-grunt') (grunt{
        useminPrepare: 'grunt-usemin'
    })
    grunt.initConfig({
        sass:{
            dist:{
                files:[{
                    expand:true,
                    cwd:'css',
                    src:['*.scss'],
                    dest:'css',
                    ext:'.css'
                }]
                
            }
            
        },
        
        imagemin:{
        }
        dynamic:[{
            expand: true,
            cwd: './',
            src:'images/*(png.gif,jpg, jpge)',
            dest: 'dist/'
        }],
        watch:{
            files: ['css /*.sass'],
            tasks:['css']
        }
    })
    
},    
        browserSync:{
                dev:{
                    bsfiles:{ //browser files
                        src:[
                        'css/*.css,
                        '*.html',
                    '   js/*.js'
                ]

            },
            option:{
                watchTask:true,
                server{
                    baseDir:'./' //Directorio base para nuestr servidor
                }
            }
        
    };


grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-contrib-sass');
grunt.loadNpmTasks('grunt-contrib-imagemin');
grunt.loadNpmTasks('grunt-browser-sync');
grunt.regularTask('css',['sass']);
grunt.registerTask('default', ['browserSync','watch']);
grunt.registerTask('img:compress',['imagemin'];
};