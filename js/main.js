import { partnerLogos, productList, partnerLogoBasePath } from "./data.js";

/* =================
 * Nav
 ====================*/
$(function () {
	$(".navbar").hidescroll();

    // Mobile dropdown
    const toggleBtn = $("#toggle_btn")
    const dropdownMenu = $(".dropdown-menu")

    toggleBtn.click(() => {
        dropdownMenu.toggleClass("open");
    })
});

/* =================
 * PARTNER LOGOS
 ====================*/
$(function () {
	const container = document.getElementById("partner-logo-list");

	partnerLogos.forEach((logo) => {
		const img = document.createElement("img");

		img.src = partnerLogoBasePath + logo.fileName;
		img.alt = logo.alt;
		img.classList.add("logo-ticker-image");
		container.appendChild(img);
	});
});

/* =================
 * PRODUCTS
 ====================*/
$(function () {
	// Active tab
	$("li:first").addClass("activeTab");

	// Change color active tab
	$("li").on("click", function () {
		$("li").removeClass("activeTab");
		$('div[id="products-tabs"] ul .r-tabs-state-active').addClass("activeTab");
	});

	$("#products-tabs").responsiveTabs({
		animation: "slide",
	});
});

/* =================
 * Best Sellers
 ====================*/
 $(function(){
	$(".slider").slick({
		autoplay: true,
		dots: true,
	})
 })
