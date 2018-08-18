<?php include("../asset/head/_all/xin_all_front.php"); ?>
<?php include("../asset/head/product/xin_head_product_restaurant_mobile-pos_v1.php"); ?>
<?php include("../asset/head/_all/xin_all_link.php"); ?>
<link rel="stylesheet" type="text/css" href="../asset/style/page-css/restaurant-solution.css">
<link rel="stylesheet" type="text/css" href="../asset/style/page-css/mobile-pos.css">
<?php include("../asset/head/_all/xin_all_script.php"); ?>

 <body id="restaurant_mobile-pos_v1" class="gx xin">

    <!-- HEADER -->
	<?php include("../asset/include/xin_header.php"); ?>
    <!-- MWNU -->
	<?php include("../asset/include/xin_menu.php"); ?>
    <!-- SUB-MWNU -->
	<?php include("xin_nav_id=restaurant-solution.php"); ?>

    <main>

      <!-- ARTICLE -->
      <article>

        <?php include("xin_product_restsurant_mobile-pos_id=banner.php"); ?>
		  
        <nav class="sub-nav-2">
          <article>
            <h1>簡易掃碼版</h1>
            <?php include("xin_tab_id=sub-nav.php"); ?>
          </article>
        </nav>
        <article>

          <!-- 概觀 -->
          <section data-tab-content="?id=overview" class="active">
    			 <?php include("xin_product_mobile-pos_v1_id=overview.php"); ?>
    		  </section>

          <!-- 軟體介紹 -->
          <section data-tab-content="?id=software">
		  	<?php include("../software/xin_software_id=mecr.php"); ?>
		  </section>

          <!-- 硬體介紹 -->
          <section data-tab-content="?id=hardware" data-standby-html="../hardware/xin_hardware_id=v1.php">
			<?php include("../hardware/xin_hardware_id=v1.php"); ?>
		  </section>

        </article>

      </article>
      <!-- ASIDE -->
      <aside></aside>


    </main>
     <!-- FOOTER -->
	<?php include("../asset/include/xin_footer.php"); ?>

</body>
<?php include("../asset/include/xin_foot.php"); ?>