class Unit1 extends AbstractView {
    constructor(params) {
        super(params);
        this.part = params.u1part;
        this.setTitle("Viewing Project");
    }

    async getHtml() {
        if(this.part == 1) {

        }

        return `
            <h1>List of Parts</h1>
            <ol>
                <li> <a data-params='[["u1part", 1]]' data-link="unit1" > Part 1 </a> </li>
            </ol>
        `;
    }
}