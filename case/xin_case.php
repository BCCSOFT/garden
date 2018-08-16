<?php include("../asset/head/_all/xin_all_front.php"); ?>
<?php include("../asset/head/case/xin_head_case.php"); ?>
<?php include("../asset/head/_all/xin_all_link.php"); ?>
<link rel="stylesheet" type="text/css" href="../asset/style/page-css/case.css">
<?php include("../asset/head/_all/xin_all_script.php"); ?>

<body id="case" class="gx xin">

	<!-- HEADER -->
	<?php include("../asset/include/xin_header.php"); ?>
    <!-- MWNU -->
	<?php include("../asset/include/xin_menu.php"); ?>

	<main>

	  <article>

		<?php include("xin_case_id=banner.php"); ?>
		<?php include("xin_case_id=nav.php"); ?>


		<!-- 商圈發展 -->
		 <section data-tab-content="?id=business-circle" class="active">
			<?php include("xin_case_id=business-circle.php"); ?>
		 </section>
		 
		 <!-- 餐飲業 --> 
		 <section data-tab-content="?id=restaurant">
			<?php include("xin_case_id=restaurant.php"); ?>
		 </section>
		  
		 <!-- 零售業 --> 
		 <section data-tab-content="?id=retail">
			<?php include("xin_case_id=retail.php"); ?>
		 </section>
		  
		 <!-- 藥妝業 --> 
		 <section data-tab-content="?id=pharmacy">
			<?php include("xin_case_id=pharmacy.php"); ?>
		 </section>
		  
		 <!-- 寵物業 --> 
		 <section data-tab-content="?id=pet">
			<?php include("xin_case_id=pet.php"); ?>
		 </section>
		
	  </article>
	  <aside></aside>

	</main>

	 <!-- FOOTER -->
	<?php include("../asset/include/xin_footer.php"); ?>

</body>
<?php include("../asset/include/xin_foot.php"); ?>