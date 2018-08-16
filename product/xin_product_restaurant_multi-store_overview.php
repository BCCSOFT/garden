<?php include("../asset/head/_all/xin_all_front.php"); ?>
<?php include("../asset/head/product/xin_head_product_restaurant_multi-store_overview.php"); ?>
<?php include("../asset/head/_all/xin_all_link.php"); ?>
<link rel="stylesheet" type="text/css" href="../asset/style/page-css/restaurant-solution.css">
<link rel="stylesheet" type="text/css" href="../asset/style/page-css/bsms.css">
<?php include("../asset/head/_all/xin_all_script.php"); ?>

<body id="restaurant-solution_bsms-overview">

    <!-- HEADER -->
	<?php include("../asset/include/xin_header.php"); ?>
    <!-- MWNU -->
	<?php include("../asset/include/xin_menu.php"); ?>
    <!-- SUB-MWNU -->
    <nav id="main-nav" class="effect_fixed">
      <article>
        <h1>餐飲大師 - 連鎖多店版</h1>
        <a href="#" data-toggle-nav="product-nav" class="toggle-nav-main"><span>導覽</span></a>
        <ol data-toggle-content="product-nav">
          <li><a href="../product/xin_product_restaurant_multi-store_overview.php" class="active">概觀介紹</a></li>
          <li><a href="../product/xin_product_restaurant_multi-store_hardware.php">硬體規格</a></li>
        </ol>
      </article>
    </nav>
    <main>
		
      <!-- ARTICLE -->
      <article>
        <?php include("../product/xin_product_multi-store_id=overview.php"); ?>
      </article>
      <!-- ASIDE -->
      <aside></aside>

    </main>
	<!-- FOOTER -->
	<?php include("../asset/include/xin_footer.php"); ?>

</body>
<?php include("../asset/include/xin_foot.php"); ?>