<template>
	<div>
		<div class="item">
			<h1>Simple Implementation</h1>
			<pimg src="https://res.cloudinary.com/stackpie/image/upload/v1514275012/assassins_creed_revelations_concept_art-wallpaper-1366x768_qdl9vo.jpg"
				placeholder="https://res.cloudinary.com/stackpie/image/upload/c_thumb,w_20/v1514275012/assassins_creed_revelations_concept_art-wallpaper-1366x768_qdl9vo.jpg"
			/>
		</div>
		<div class="item">
			<h1>DataSaver Mode</h1>
		<pimg data-saver src="https://res.cloudinary.com/stackpie/image/upload/v1513979515/-895520106_m1whb3.jpg"/>
		</div>
		<div class="item">
			<h1>FetchOnDemand Mode</h1>
			<pimg fetch-on-demand src="https://res.cloudinary.com/stackpie/image/upload/v1513965940/1_znfymp.jpg"/>
		</div>
		</div>
</template>

<style>
.pimg {
	width: 500px;
}

.pimg__placeholder {
	filter: blur(2vw);
	transform: scale(1.05);
}

.pimg__wrapper {
	display: inline-block !important;
	position: relative;
}

.pimg__btn {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	border: 2px solid #fff;
	border-radius: 20px;
	font-size: 14px;
	padding: 0px 8px 2px;
	cursor: pointer;
	background: #333;
	color: #fdfdfd;
}

.item {
	margin: 10rem;
}
</style>
