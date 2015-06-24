module.exports = {
    entry: {
        app: "./app/app.js"
    },
    output: {
        path: './dist',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            { test: /\.json$/,   loader: "json-loader" },
            { test: /\.coffee$/, loader: "coffee-loader" },
            { test: /\.css$/,    loader: "style-loader!css-loader" },
            { test: /\.less$/,   loader: "style-loader!css-loader!less-loader" },
            { test: /\.jade$/,   loader: "jade-loader?self" },
            { test: /\.png$/,    loader: "url-loader?prefix=img/&limit=5000" },
            { test: /\.jpg$/,    loader: "url-loader?prefix=img/&limit=5000" },
            { test: /\.gif$/,    loader: "url-loader?prefix=img/&limit=5000" },
            { test: /\.eot$/,    loader: "file-loader?prefix=font/" },
            { test: /\.jsx$/,    loader: "jsx-loader?insertPragma=React.DOM&harmony" },
            { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&minetype=application/font-woff" },
            { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" }
        ]
    },
    externals: {
        //don't bundle the 'react' npm package with our bundle.js
        //but get it from a global 'React' variable
        'react': 'React'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    }
};