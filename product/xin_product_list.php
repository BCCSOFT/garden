<?php include("../asset/head/_all/xin_all_front.php"); ?>
<?php include("../asset/head/product/xin_head_product_list.php"); ?>
<?php include("../asset/head/_all/xin_all_link.php"); ?>
<link rel="stylesheet" type="text/css" href="../asset/style/page-css/product-list.css">
<?php include("../asset/head/_all/xin_all_script.php"); ?>

<body>
	<!-- HEADER -->
	<?php include("../asset/include/xin_header.php"); ?>
	<!-- MWNU -->
	<?php include("../asset/include/xin_menu.php"); ?>

	<!-- SUB-MWNU -->
	<nav id="main-nav" class="effect_fixed">
	  <article>
		<h1>所有產品列表</h1>
	  </article>
	</nav>

	<main>

		<article>

			<!-- RETAIL -->
			<?php include("xin_product_list_id=retail.php"); ?>


			<!-- RESTAURANT -->
			<?php include("xin_product_list_id=restaurant.php"); ?>


			<!-- SOFTWARE -->
			<?php include("xin_product_list_id=software.php"); ?>


			<!-- HARDWARE -->
			<?php include("xin_product_list_id=hardware.php"); ?>


		</article>

	</main>

     <!-- FOOTER -->
	<?php include("../asset/include/xin_footer.php"); ?>

</body>
<?php include("../asset/include/xin_foot.php"); ?>