var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    onDeviceReady: function() {
        // Fix for iOS status bar overlap
        if (typeof StatusBar != "undefined") {
             StatusBar.overlaysWebView(false);
             StatusBar.styleDefault();
        }
        var opts = {'apikey': 'adq9-chv4D1y2VhI7'}; // TODO: insert your API key here
        var b6 = Bit6.init(opts);
        initApp(b6);
    }
};

app.initialize();
