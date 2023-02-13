class HomeView extends AbstractView {
	constructor(params) {
		super(params);
		this.setTitle("Home");
        this.setHeading("Home");
	}

	async getHtml() {
		return `
        <section class="main-padded">
            <p class="header-1">Gold Arts Award</p>
            <p>
                This is some text explaining what the Gold Arts Award is and what I hope to get out of it
            </p>
        </section>

    <hr>

    <section>
        <img src="./static/images/etc_gio_large.jpg" alt="ETC GIO console">
    </section>

    <hr>

    <section class="main-padded">
        <p class="header-1">Header 1</p>
        <p class="header-2">Header 2</p>
        <p class="header-3">Header 3</p>
        <p class="content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus saepe, ducimus officia
            aspernatur, est debitis quibusdam delectus amet fugit dolores dolorem sed. Vel cum at qui sapiente,
            veniam aspernatur aut saepe quis eveniet accusamus doloremque soluta a maiores, necessitatibus, totam
            eligendi excepturi enim nostrum sed obcaecati provident asperiores porro nobis possimus. Tempore, sint
            quibusdam sapiente officia cum, consectetur reprehenderit necessitatibus saepe autem quis asperiores
            minus fuga dolorum enim deserunt nobis! Debitis a quam voluptates blanditiis unde eius illum repellat
            repudiandae reprehenderit iure enim commodi accusantium quaerat eum suscipit deleniti doloribus nemo,
            quibusdam totam ipsum magnam sapiente? Repellat ea dicta consequatur.</p>
    </section>
        `;
	}
}
