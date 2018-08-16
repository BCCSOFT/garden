<?php include("../asset/head/_all/xin_all_front.php"); ?>
<?php include("../asset/head/product/xin_head_product_member.php"); ?>
<?php include("../asset/head/_all/xin_all_link.php"); ?>
<link rel="stylesheet" type="text/css" href="../asset/style/page-css/feature.css">
<link rel="stylesheet" type="text/css" href="../asset/style/page-css/case.css">
<link rel="stylesheet" type="text/css" href="../asset/style/page-css/jabezpos.css">
<link rel="stylesheet" type="text/css" href="../asset/style/page-css/restaurant-solution.css">
<?php include("../asset/head/_all/xin_all_script.php"); ?>

 <body id="mobile-order overview" class="gx xin">


    <!-- HEADER -->
	<?php include("../asset/include/xin_header.php"); ?>
    <!-- MWNU -->
	<?php include("../asset/include/xin_menu.php"); ?>
    <!-- SUB-MWNU -->
	<?php include("xin_nav_id=restaurant-solution.php"); ?>

    <main>

      <!-- ARTICLE -->
      <article>

        <!-- <section class="header_banner webmenu_banner">
          <article>
            <hgroup>
              <h1>消費者自助點餐</h1>
              <span><img alt="" src="../asset/image/img.png"></span>
              <h5>不用下載APP，<br class="mobile">掃描 QRcode 直接點餐</h5>
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
                  <h6>客製口味</h6>
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
        </section> -->

        <?php include("../product/xin_product_member_id=overview_banner.php"); ?>
        <?php include("../feature/xin_feature_id=member.php"); ?> 

        <!-- 適用餐飲類別 -->
        <?php include("xin_product_id=restaurant_type.php"); ?>
        <!-- 成功案例 -->
        <?php include("../case/xin_case_id=restaurant-picitem.php"); ?>
        <!-- 智能餐飲流程圖 -->
        <?php include("../solution/xin_solution_id=restaurant_flow.php"); ?>

        <!-- 功能模組 -->
        <?php include("../feature/xin_feature_id=reataurant-list.php"); ?>
        <?php include("../feature/xin_feature_id=reataurant-purchase-list.php"); ?>

        <!-- 硬體推薦 -->
        <?php include("../hardware/xin_hardware_id=restaurant.php"); ?>

        <!-- 後台管理 -->
        <?php include("../software/xin_software_jabezpos_id=restaurant_fearure.php"); ?>

        <!-- 影音介紹 -->

        <!-- 售後服務 -->
        <?php include("xin_product_id=service.php"); ?>
        <!-- 型錄下載 -->
        <?php include("xin_product_id=download.php"); ?>

      </article>
      <!-- ASIDE -->
      <aside></aside>


    </main>
     <!-- FOOTER -->
	<?php include("../asset/include/xin_footer.php"); ?>

</body>
<?php include("../asset/include/xin_foot.php"); ?>