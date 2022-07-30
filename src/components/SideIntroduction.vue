<template>
	<aside class="sidebar" data-sidebar>
		<div class="sidebar-info">
			<figure class="avatar-box">
				<img src="../assets/avatar.png" alt="Megan Ma" width="80" />
			</figure>

			<div class="info-content">
				<h1 class="name">Megan Ma</h1>
				<p class="title">Software Engineering Student</p>
			</div>
		</div>

		<div class="sidebar-info_more">
			<div class="separator"></div>

			<ul class="contacts-list">
				<li class="contact-item">
					<div class="icon-box">
						<font-awesome-icon icon="fa-solid fa-school-flag" />
					</div>

					<div class="contact-info">
						<p class="contact-title">Pursuing</p>
						<a class="contact-link">UBC MEng in Software Engineering</a>
					</div>
				</li>

				<li class="contact-item">
					<div class="icon-box">
						<font-awesome-icon icon="fa-solid fa-graduation-cap" />
					</div>

					<div class="contact-info">
						<p class="contact-title">Earned</p>
						<a class="contact-link">UBC BASc in Mechanical Engineering</a>
					</div>
				</li>

				<li class="contact-item">
					<div class="icon-box">
						<font-awesome-icon icon="fa-solid fa-envelope" />
					</div>

					<div class="contact-info">
						<p class="contact-title">Email</p>
						<a href="mailto:menghanma@gmail.com" class="contact-link"
							>menghanma@gmail.com</a
						>
					</div>
				</li>

				<li class="contact-item">
					<div class="icon-box">
						<font-awesome-icon icon="fa-solid fa-mobile" />
					</div>

					<div class="contact-info">
						<p class="contact-title">Phone</p>
						<a class="contact-link">+1 (778) 683-2223</a>
					</div>
				</li>

				<li class="contact-item">
					<div class="icon-box">
						<font-awesome-icon icon="fa-solid fa-location-pin" />
					</div>

					<div class="contact-info">
						<p class="contact-title">Location</p>

						<address>Vancouver, BC CA</address>
					</div>
				</li>
			</ul>

			<div class="separator"></div>

			<ul class="social-list">
				<li class="social-item">
					<a
						href="https://github.com/meganm38"
						class="social-link"
						target="_blank"
					>
						<font-awesome-icon icon="fa-brands fa-github" />
					</a>
				</li>

				<li class="social-item">
					<a
						href="https://www.linkedin.com/in/megan-ma-88ba42233/"
						class="social-link"
						target="_blank"
					>
						<font-awesome-icon icon="fa-brands fa-linkedin" />
					</a>
				</li>
			</ul>
		</div>
	</aside>
</template>

<script>
export default {

}
</script>

<style>
	.sidebar {
		overflow: hidden;
		transition: var(--transition-2);
		position: sticky;
		max-height: max-content;
		height: 100%;
		margin-bottom: 0;
		z-index: 1;
		padding: 40px;
		min-width: 310px;
	}

	.sidebar-info {
		position: relative;
		justify-content: center;
		align-items: center;
		gap: 15px;
		flex-direction: column;
		padding: 30px;
	}

	.avatar-box {
		background: var(--bg-gradient-onyx);
		border-radius: 20px;
		padding-bottom: 10px;
		margin-bottom: 30px;
	}

  	.avatar-box img { 
		width: 150px;
		margin: auto;
	}

	.info-content .name {
		color: var(--white-2);
		font-size: var(--fs-3);
		font-weight: var(--fw-500);
		letter-spacing: -0.25px;
		margin-bottom: 10px;
		white-space: nowrap;
    	text-align: center;
	}

	.info-content .title {
		color: var(--white-1);
		background: var(--onyx);
		font-size: var(--fs-8);
		font-weight: var(--fw-300);
		width: max-content;
		padding: 3px 12px;
		border-radius: 8px;
		margin: auto;
	}

	.sidebar-info_more {
		opacity: 1;
    	visibility: visible;
		transition: var(--transition-2);
	}

	.contacts-list {
		display: grid;
		grid-template-columns: 1fr;
		gap: 30px;
	}

	.contact-info :is(.contact-link) {
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
    }

	.contact-info :is(.contact-link, time, address) {
		--fs-7: 14px;
		font-weight: var(--fw-300);
	}
	.contact-item {
		min-width: 100%;
		display: flex;
		align-items: center;
		gap: 16px;
	}

	.separator:last-of-type {
		margin: 15px 0;
		opacity: 0;
	}

	.contact-info {
		max-width: calc(100% - 46px);
		width: calc(100% - 46px);
	}

	.contact-title {
		color: var(--light-gray-70);
		font-size: var(--fs-8);
		text-transform: uppercase;
		margin-bottom: 2px;
	}

	.contact-info :is(.contact-link, time, address) {
		color: var(--white-2);
		font-size: var(--fs-9);
	}

	.contact-info address {
		font-style: normal;
	}

	.social-list {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 15px;
		padding-bottom: 4px;
		padding-left: 7px;
	}

	.social-item .social-link {
		color: var(--light-gray-70);
		font-size: 18px;
	}

	.social-item .social-link:hover {
		color: var(--light-gray);
	}

	 @media (max-width: 1024px) {
		.sidebar-info_more {
			display: none;
			transition: var(--transition-2);
		}
		.sidebar {
			height: min-content;
			width: max-content;
		}
		.sidebar-info {
			justify-content: left;
			align-items: left;
			gap: 0px;
			flex-direction: column;
		}

		.avatar-box {
			margin-bottom: 10px;
			width: 100px;
			float: left;
		}

		.avatar-box img { 
			width: 100%;
			margin: auto;
		}
	}
</style>