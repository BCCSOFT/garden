<?php include("../asset/head/_all/xin_all_front.php"); ?>
<?php include("../asset/head/about-us/xin_head_about-us.php"); ?>
<?php include("../asset/head/_all/xin_all_link.php"); ?>
<link rel="stylesheet" type="text/css" href="../asset/style/page-css/about-us.css">
<?php include("../asset/head/_all/xin_all_script.php"); ?>

<body id="about-us" class="gx xin">

    <!-- HEADER -->
	<?php include("../asset/include/xin_header.php"); ?>
    <!-- MWNU -->
	<?php include("../asset/include/xin_menu.php"); ?>

    <main>
      <article>

        <?php include("xin_about-us_id=banner.php"); ?>
		<?php include("xin_about-us_id=nav.php"); ?>

          <!-- 公司簡介 -->
		  <section data-tab-content="?id=overview" class="active">
			<?php include("xin_about-us_id=overview.php"); ?>
		  </section>
		  
		  <!-- 歷史沿革 -->
		  <section data-tab-content="?id=history">
			<?php include("xin_about-us_id=history.php"); ?>
		  </section>
		  
		  <!-- 專利獎項 -->
		  <section data-tab-content="?id=award">
			<?php include("xin_about-us_id=award.php"); ?>
		  </section>

      </article>
      <aside></aside>

    </main>

     <!-- FOOTER -->
	<?php include("../asset/include/xin_footer.php"); ?>

</body>
<?php include("../asset/include/xin_foot.php"); ?>