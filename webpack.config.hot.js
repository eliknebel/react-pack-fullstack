module.exports = {
    debug: true,
    devtool: 'inline-source-map',
    entry: [
        "./client/app.jsx"
    ],
    output: {
        path: './assets/app',
        filename: 'bundle.js',
        publicPath: 'http://localhost:8080/app/'
    },
    module: {
        loaders: [
            { test: /\.js$/,     loaders: ["react-hot", "babel?plugins=jsx-control-statements/babel"], exclude: /node_modules/ },
            { test: /\.jsx$/,    loaders: ["react-hot", "babel?plugins=jsx-control-statements/babel"], exclude: /node_modules/ },
            { test: /\.json$/,   loader: "babel?plugins=jsx-control-statements/babel" },
            { test: /\.coffee$/, loader: "coffee" },
            { test: /\.css$/,    loader: "style!css" },
            { test: /\.scss$/,   loader: "style!css!sass" },
            { test: /\.jade$/,   loader: "jade?self" },
            { test: /\.png$/,    loader: "url?prefix=img/&limit=5000" },
            { test: /\.jpg$/,    loader: "url?prefix=img/&limit=5000" },
            { test: /\.gif$/,    loader: "url?prefix=img/&limit=5000" },
            { test: /\.eot$/,    loader: "file?prefix=font/" },
            { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url?limit=10000&minetype=application/font-woff" },
            { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file" }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx'],
        alias: {
            "app": __dirname + "/client",
            "components": __dirname + "/client/components",
            "pages": __dirname + "/client/pages"
        }
    }
};