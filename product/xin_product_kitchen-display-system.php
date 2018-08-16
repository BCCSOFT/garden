<?php include("../asset/head/_all/xin_all_front.php"); ?>
<?php include("../asset/head/product/xin_head_product_kitchen-display-system.php"); ?>
<?php include("../asset/head/_all/xin_all_link.php"); ?>
<link rel="stylesheet" type="text/css" href="../asset/style/page-css/case.css">
<link rel="stylesheet" type="text/css" href="../asset/style/page-css/jabezpos.css">
<link rel="stylesheet" type="text/css" href="../asset/style/page-css/restaurant-solution.css">
<link rel="stylesheet" type="text/css" href="../asset/style/page-css/kds.css">
<?php include("../asset/head/_all/xin_all_script.php"); ?>

 <body id="kitchen-display-system" class="gx xin">

    <!-- HEADER -->
	<?php include("../asset/include/xin_header.php"); ?>
    <!-- MWNU -->
	<?php include("../asset/include/xin_menu.php"); ?>
    <!-- SUB-MWNU -->
	<?php include("xin_nav_id=restaurant-solution.php"); ?>

    <main>

      <!-- ARTICLE -->
      <article>

        <section class="header_banner kds_banner">
          <article>
            <hgroup>
              <h1>雲端廚房</h1>
              <span><img alt="" src="../asset/image/img.png"></span>
              <h5>接單無時差，餐點確認不忙亂</h5>
            </hgroup>
            <ol>
              <li>
                <figure>
                  <span><img alt="" src="../asset/image/img.png"></span>
                  <h6>即時接單</h6>
                </figure>
              </li>
              <li>
                <figure>
                  <span><img alt="" src="../asset/image/img.png"></span>
                  <h6>智慧排序</h6>
                </figure>
              </li>
              <li>
                <figure>
                  <span><img alt="" src="../asset/image/img.png"></span>
                  <h6>出菜確認</h6>
                </figure>
              </li>
              <li>
                <figure>
                  <span><img alt="" src="../asset/image/img.png"></span>
                  <h6>鈴聲通知</h6>
                </figure>
              </li>
            </ol>
            <figure>
              <span><img alt="" src="../asset/image/img.png"></span>
            </figure>
          </article>
        </section>

        <article>
          <nav class="sub-nav-1">
            <article>
              <h1>雲端廚房</h1>
              <ol>
                <li><a href="?id=overview" data-tab-nav="?id=verview" class="active">概觀</a></li>
                <li><a href="?id=software" data-tab-nav="?id=software">軟體介紹</a></li>
              </ol>
            </article>
          </nav>

          <!-- 概觀 -->
          <section data-tab-content="?id=overview" class="active">
			<?php include("xin_product_kitchen-display-system_id=overview.php"); ?>
		  </section>

          <!-- 軟體介紹 -->
          <section data-tab-content="?id=software">
			<?php include("../software/xin_software_id=kds.php"); ?>
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