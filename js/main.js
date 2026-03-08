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
			<div data-filterable data-filter-category=${product.category} class="group relative col-span-3 overflow-hidden hover:shadow-md">
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
    $.fn.filterjitsu();

    // Active tab
    function getAllUrlParam(url) {
        url = url || window.location.href;
        const param = {};

        const queryString = url.split('?')[1];

        if (!queryString) {
            return param;
        }

        const [key, value] = queryString.split('=');

        if (key) {
            param[key] = value ? value : '';
        }

        return param;
    }

    const urlParam = getAllUrlParam();

    $('#allProduct-filters a').removeClass('activeFilter');

    const category = urlParam['filter-category'];

    switch (category) {
        case 'whitetea':
            $('#f-whitetea').addClass('activeFilter');
            break;
        case 'blacktea':
            $('#f-blacktea').addClass('activeFilter');
            break;
        case 'oolong':
            $('#f-oolong').addClass('activeFilter');
            break;
        case 'matcha':
            $('#f-matcha').addClass('activeFilter');
            break;
        default:
            $('#f-all').addClass('activeFilter');
            break;
    }
});

/* =================
 * Initialize AOS animation
 ====================*/
$(function () {
    AOS.init();

    // You can also pass an optional settings object
    // below listed default settings
    AOS.init({
        // Global settings:
        disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
        startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
        initClassName: 'aos-init', // class applied after initialization
        animatedClassName: 'aos-animate', // class applied on animation
        useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
        disableMutationObserver: false, // disables automatic mutations' detections (advanced)
        debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
        throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

        // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
        offset: 100, // offset (in px) from the original trigger point
        delay: 0, // values from 0 to 3000, with step 50ms
        duration: 700, // values from 0 to 3000, with step 50ms
        easing: 'ease-in-out', // default easing for AOS animations
        once: false, // whether animation should happen only once - while scrolling down
        mirror: true, // whether elements should animate out while scrolling past them
        anchorPlacement: 'center-bottom', // defines which position of the element regarding to window should trigger the animation
    });
});
