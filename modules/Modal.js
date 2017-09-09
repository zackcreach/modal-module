class ModalEmail {
	constructor() {
		this.modal = document.getElementById('modal');
		this.modalOuter = document.querySelector('.modal-email__outer');
		this.modalAreaContent = document.querySelector('.modal-email__content');
		this.closeModalButton = document.querySelector('.modal-email__close-button');
    this.closeModalSubmit = document.querySelector('.modal-email__submit');
		this.events();
	}

	events() {
		// open modal after delay
		setTimeout(this.openModal.bind(this), 3000);

		// clicking the x close modal button
		this.closeModalButton.addEventListener('click', this.closeModal.bind(this));

		// clicking the x close modal button
		this.closeModalSubmit.addEventListener('click', this.closeModal.bind(this));

		// clicking anywhere outside the modal closes modal
		this.modal.addEventListener('click', this.clickOutside.bind(this));

    // close modal when user pushes esc key
    document.addEventListener('keyup', this.keyPressHandler.bind(this));
	}

	clickOutside(e) {
		if (e.target === this.modalOuter) {
			// console.log('We\'re outside.');
			this.closeModal();
		}
		// else {
		// 	console.log('We\'re inside!!');
		// }
	}

	keyPressHandler(e) {
		if (e.keyCode == 27) {
			this.closeModal();
		}
	}

	openModal() {
		this.modal.removeAttribute('style');
		this.modal.classList.add('modal-email--is-visible');
	}

	closeModal() {
		this.modal.classList.remove('modal-email--is-visible');
	}
}

export default ModalEmail;
