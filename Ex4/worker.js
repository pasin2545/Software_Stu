self.addEventListener("message", function (e) {
    if (e.data === "start") {
        var date_current = new Date();
        // Send result back to main
        self.postMessage(date_current);
        intervalShow = setInterval(function () {
            var date_current = new Date();
            //   send data 1 s
            self.postMessage(date_current);
        }, 1000);
    } else if (e.data === "stop") {
        this.self.clearInterval(intervalShow);
    }
});
