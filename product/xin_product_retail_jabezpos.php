<?php include("../asset/head/_all/xin_all_front.php"); ?>
<?php include("../asset/head/product/xin_head_product_retail_jabezpos.php"); ?>
<?php include("../asset/head/_all/xin_all_link.php"); ?>
<link rel="stylesheet" type="text/css" href="../asset/style/page-css/restaurant-solution.css">
<link rel="stylesheet" type="text/css" href="../asset/style/page-css/jabezpos.css">
<?php include("../asset/head/_all/xin_all_script.php"); ?>

<body id="gx jabezpos" class="xin">

    <!-- HEADER -->
	<?php include("../asset/include/xin_header.php"); ?>
    <!-- MWNU -->
	<?php include("../asset/include/xin_menu.php"); ?>
    <!-- SUB-MWNU -->
	<?php include("xin_nav_id=retail-solution.php"); ?>
    <main>

      <!-- ARTICLE -->
      <article>

        <section class="header_banner jabezpos_banner">
          <article>
            <hgroup>
              <h1>老闆</h1>
              <span><img alt="" src="../asset/image/img.png"></span>
              <h5>隨時隨地，申請帳號即可開始使用</h5>
            </hgroup>
            <ol>
              <li>
                <figure>
                  <span><img alt="" src="../asset/image/img.png"></span>
                  <h6>銷售分析</h6>
                </figure>
              </li>
              <li>
                <figure>
                  <span><img alt="" src="../asset/image/img.png"></span>
                  <h6>會員管理</h6>
                </figure>
              </li>
              <li>
                <figure>
                  <span><img alt="" src="../asset/image/img.png"></span>
                  <h6>庫存盤點</h6>
                </figure>
              </li>
              <li>
                <figure>
                  <span><img alt="" src="../asset/image/img.png"></span>
                  <h6>帳務管理</h6>
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
              <h1>老闆</h1>
              <ol>
                <li><a href="?id=overview" data-tab-nav="?id=overview" class="active">概觀</a></li>
                <li><a href="?id=feature" data-tab-nav="?id=feature" id="jabezpos_feature">功能</a></li>
                <li><a href="?id=price" data-tab-nav="?id=price">價格表</a></li>
                <li><a href="?id=video" data-tab-nav="?id=video">影音專區</a></li>
                <li><a href="?id=related-introduction" data-tab-nav="?id=related-introduction">相關介紹</a></li>
              </ol>
            </article>
          </nav>

          <!-- 概觀 -->
          <section data-tab-content="?id=overview" class="active">
		  	<?php include("../software/xin_software_jabezpos_id=overview.php"); ?>
		  </section>

          <!-- 功能 -->
          <section data-tab-content="?id=feature">
			<?php include("../software/xin_software_jabezpos_id=feature.php"); ?>	
		  </section>

          <!-- 價格表 -->
          <section data-tab-content="?id=price">
			<?php include("../software/xin_software_jabezpos_id=price.php"); ?>	
		  </section>

          <!-- 影音專區 -->
          <section data-tab-content="?id=video">
			<?php include("../software/xin_software_jabezpos_id=video.php"); ?>	
		  </section>

          <!-- 相關介紹 -->
          <section data-tab-content="?id=related-introduction">
			<?php include("../software/xin_software_jabezpos_id=related-introduction.php"); ?>
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