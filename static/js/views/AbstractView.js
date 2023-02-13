class AbstractView {
    constructor(params) {
        this.params = params;
    }

    setTitle(title) {
        document.title = title;
    }

    setHeading(heading) {
        document.getElementById("sub-header").innerText = heading
    }

    async getHtml() {
        return "";
    }
}