var current_page;

function createPage() {

	var page = document.createElement('div');
	page.addEventListener('click', toggleMenu);
	page.className = 'page';
	page.contentEditable = true;
	return page;

}

function newDocument() {

	var first_page = createPage();
	document.body.appendChild(first_page);

	current_page = first_page;

}

function styleSelection(styles) {

	var new_range;
	var range = window.getSelection().getRangeAt(0);
	var selection = window.getSelection();
	var span = document.createElement('span');
	range.surroundContents(span);

	for (var style in styles) {

		span.style[style] = styles[style];
		
	}

	toggleMenu();

	current_page.focus();

}

function toggleMenu(menu_name) {

	var menus = {
		background_color: document.getElementById('background-color-menu'),
		font_color: document.getElementById('font-color-menu'),
		font_family: document.getElementById('font-family-menu'),
		font_size: document.getElementById('font-size-menu')
	};

	for (var menu in menus) console.log(menus[menu].style.display);

	for (var menu in menus)

		if (menu != menu_name || menus[menu].style.display == 'inline-block')

			menus[menu].style.display = 'none';

		else menus[menu].style.display = 'inline-block';

}