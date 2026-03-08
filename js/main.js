import { partnerLogos, productList, partnerLogoBasePath } from './data.js';

/* =================
 * Nav
 ====================*/
$(function () {
    $('.navbar').hidescroll();

    // Mobile dropdown
    const toggleBtn = $('#toggle_btn');
    const dropdownMenu = $('.dropdown-menu');

    toggleBtn.click(() => {
        dropdownMenu.toggleClass('open');
    });
});

/* =================
 * PARTNER LOGOS
 ====================*/
$(function () {
    const container = document.getElementById('partner-logo-list');

    partnerLogos.forEach((logo) => {
        const img = document.createElement('img');

        img.src = partnerLogoBasePath + logo.fileName;
        img.alt = logo.alt;
        img.classList.add('logo-ticker-image');
        container.appendChild(img);
    });
});

/* =================
 * PRODUCTS
 ====================*/
$(function () {
    // Active tab
    $('li:first').addClass('activeTab');

    // Change color active tab
    $('li').on('click', function () {
        $('li').removeClass('activeTab');
        $('div[id="products-tabs"] ul .r-tabs-state-active').addClass('activeTab');
    });

    $('#products-tabs').responsiveTabs({
        animation: 'slide',
    });
});

/* =================
 * Best Sellers
 ====================*/
$(function () {
    $('.slider').slick({
        autoplay: true,
        dots: true,
    });
});

/* =================
 * Stats 
 ====================*/

$(function () {
    const counterUp = window.counterUp.default;

    const callback = (entries) => {
        entries.forEach((entry) => {
            const el = entry.target;
            if (entry.isIntersecting && !el.classList.contains('is-visible')) {
                counterUp(el, {
                    duration: 2000,
                    delay: 16,
                });
                el.classList.add('is-visible');
            }
        });
    };

    const IO = new IntersectionObserver(callback, { threshold: 1 });

    const el = document.querySelectorAll('.counter').forEach((node) => IO.observe(node));
});

/* =================
 * All products
 ====================*/
$(function () {
    productList.map((product) => {
        $('#product-items--container').append(`
			<div class="group relative col-span-3 overflow-hidden hover:shadow-md">
				<div class="portfolio-item">
					<div>
						<img src="${product.img}" alt="product-img" />

						<div class="product-item-overlay">
							<div class="product-details">
								<h3>${product.name}</h3>
								<p>${product.description}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		`);
    });
});
