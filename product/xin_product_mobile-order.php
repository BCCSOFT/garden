<?php include("../asset/head/_all/xin_all_front.php"); ?>
<?php include("../asset/head/product/xin_head_product_mobile-order.php"); ?>
<?php include("../asset/head/_all/xin_all_link.php"); ?>
<link rel="stylesheet" type="text/css" href="../asset/style/page-css/case.css">
<link rel="stylesheet" type="text/css" href="../asset/style/page-css/jabezpos.css">
<link rel="stylesheet" type="text/css" href="../asset/style/page-css/restaurant-solution.css">
<link rel="stylesheet" type="text/css" href="../asset/style/page-css/mobile-order.css">
<?php include("../asset/head/_all/xin_all_script.php"); ?>

 <body id="mobile-order-overview" class="gx xin">

    <!-- HEADER -->
	  <?php include("../asset/include/xin_header.php"); ?>
    <!-- MWNU -->
	  <?php include("../asset/include/xin_menu.php"); ?>
    <!-- SUB-MWNU -->
	  <?php include("xin_nav_id=restaurant-solution.php"); ?>

    <main>

      <!-- ARTICLE -->
      <article>

        <section class="header_banner webmenu_banner">
          <article>
            <hgroup>
              <h1>消費者自助點餐</h1>
              <span><img alt="" src="../asset/image/img.png"></span>
              <h5>免下載APP，<br class="mobile">掃描 QRcode 立即點餐，<br class="mobile">不用等店員</h5>
            </hgroup>
            <ol>
              <li>
                <figure>
                  <span><img alt="" src="../asset/image/img.png"></span>
                  <h6>掃描點餐</h6>
                </figure>
              </li>
              <li>
                <figure>
                  <span><img alt="" src="../asset/image/img.png"></span>
                  <h6>遠端點餐</h6>
                </figure>
              </li>
              <li>
                <figure>
                  <span><img alt="" src="../asset/image/img.png"></span>
                  <h6>多元支付</h6>
                </figure>
              </li>
              <li>
                <figure>
                  <span><img alt="" src="../asset/image/img.png"></span>
                  <h6>進度查詢</h6>
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
              <h1>雲端後台</h1>
              <ol>
                <li><a href="?id=overview" data-tab-nav="?id=overview" class="active">概觀</a></li>
                <li><a href="?id=software" data-tab-nav="?id=software">軟體介紹</a></li>
              </ol>
            </article>
          </nav>

          <!-- 概觀 -->
          <section data-tab-content="?id=overview" class="active">
    			  <?php include("xin_product_mobile-order_id=overview.php"); ?>	
    		  </section>

          <!-- 軟體介紹 -->
          <section data-tab-content="?id=software">
    			  <?php include("../software/xin_software_id=webmenu.php"); ?>	
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