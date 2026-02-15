import { partnerLogos, productList, partnerLogoBasePath } from "./data.js";

/**
 * PARTNER LOGOS
 */
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
