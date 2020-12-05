const Generator = require('yeoman-generator')

module.exports = class extends Generator{
    prompting(){
        return this.prompt([
            {
                type: "input",
                name: "name",
                message: "your project name",
                default: this.appname
            }
        ])
        .then(answers=>{
            this.answers = answers
        })
    }

    writing(){
        //这里数组中的文件是templates文件下的每一个文件路径
        const templates = [
            '.gitignore',
            'yarn.lock', 
            'README.md',
            'package.json',
            'babel.config.js',
            'src/assets/logo.png',
            'src/components/HelloWorld.vue',
            'src/store/index.js',
            'src/router/index.js',
            'src/views/About.vue',
            'src/views/Home.vue',
            'src/App.vue',
            'src/main.js',
            'public/favicon.ico',
            'public/index.html',
            'public/redirect.html'
        ]
        templates.forEach(item=>{
            this.fs.copyTpl(
                this.templatePath(item),
                this.destinationPath(item),
                this.answers
            )
        })
    }
}