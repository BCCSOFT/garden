<?php include("../asset/head/_all/xin_all_front.php"); ?>
<?php include("../asset/head/product/xin_head_product_retail_pos_t80.php"); ?>
<?php include("../asset/head/_all/xin_all_link.php"); ?>
<link rel="stylesheet" type="text/css" href="../asset/style/page-css/restaurant-solution.css">
<link rel="stylesheet" type="text/css" href="../asset/style/page-css/retail-solution.css">
<?php include("../asset/head/_all/xin_all_script.php"); ?>

<body id="retail_pos_t80" class="gx xin retail-solution">

    <!-- HEADER -->
	<?php include("../asset/include/xin_header.php"); ?>
    <!-- MWNU -->
	<?php include("../asset/include/xin_menu.php"); ?>
    <!-- SUB-MWNU -->
	<?php include("xin_nav_id=retail-solution.php"); ?>

    <main>

      <!-- ARTICLE -->
      <article>

        <section class="header_banner retail-solution_counter_banner">
          <article>
            <hgroup>
              <h1>櫃檯收銀機</h1>
              <span><img alt="" src="../asset/image/img.png"></span>
              <h5>輕鬆的經營，從高效的收銀開始</h5>
            </hgroup>
            <ol>
              <li>
                <figure>
                  <span><img alt="" src="../asset/image/img.png"></span>
                  <h6>安全穩定</h6>
                </figure>
              </li>
              <li>
                <figure>
                  <span><img alt="" src="../asset/image/img.png"></span>
                  <h6>彈性擴充</h6>
                </figure>
              </li>
              <li>
                <figure>
                  <span><img alt="" src="../asset/image/img.png"></span>
                  <h6>直覺操作</h6>
                </figure>
              </li>
            </ol>
            <nav class="product-nav-img">
              <article>
                <ol>
                  <li>
                    <span><img alt="" src="../asset/image/img.png"></span>
                    <a href="xin_product_retail_pos_t1.php" data-type="button"></a>
                  </li>
                  <li>
                    <span><img alt="" src="../asset/image/img.png"></span>
                    <a href="xin_product_retail_pos_t80-cloud.php" data-type="button"></a>
                  </li>
                  <li>
                    <span><img alt="" src="../asset/image/img.png"></span>
                    <a href="xin_product_retail_pos_t80.php" data-type="button" class="active"></a>
                  </li>
                </ol>
              </article>
            </nav>
          </article>
        </section>

        <nav class="product-nav counter-nav">
          <article>
            <ol>
              <li>
                <a href="xin_product_retail_pos_t1.php" data-type="button">雲端基本版</a>
              </li>
              <li>
                <a href="xin_product_retail_pos_t80-cloud.php" data-type="button">雲端專業版</a>
              </li>
              <li>
                <a href="xin_product_retail_pos_t80.php" data-type="button" class="active">單機專業版</a>
              </li>
            </ol>
          </article>
        </nav>

        <nav class="sub-nav-2">
          <article>
            <h1>單機專業版</h1>
            <?php include("xin_tab_id=sub-nav.php"); ?>
          </article>
        </nav>
        <article>

          <!-- 概觀 -->
          <section data-tab-content="?id=overview" class="active">
			<?php include("xin_product_pos_t80_id=overview.php"); ?>
		  </section>

          <!-- 軟體介紹 -->
          <section data-tab-content="?id=software" data-standby-html="../software/xin_software_id=b1pos.php">
			<?php include("../software/xin_software_id=b1pos.php"); ?>
		  </section>

          <!-- 硬體介紹 -->
          <section data-tab-content="?id=hardware" data-standby-html="../hardware/xin_hardware_id=t80.php">
			<?php include("../hardware/xin_hardware_id=t80.php"); ?>
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