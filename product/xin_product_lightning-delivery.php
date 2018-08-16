<?php include("../asset/head/_all/xin_all_front.php"); ?>
<?php include("../asset/head/product/xin_head_product_lds.php"); ?>
<?php include("../asset/head/_all/xin_all_link.php"); ?>
<link rel="stylesheet" type="text/css" href="../asset/style/page-css/case.css">
<link rel="stylesheet" type="text/css" href="../asset/style/page-css/jabezpos.css">
<link rel="stylesheet" type="text/css" href="../asset/style/page-css/restaurant-solution.css">
<link rel="stylesheet" type="text/css" href="../asset/style/page-css/delivery.css">
<?php include("../asset/head/_all/xin_all_script.php"); ?>

 <body id="lds overview" class="gx xin">


    <!-- HEADER -->
	<?php include("../asset/include/xin_header.php"); ?>
    <!-- MWNU -->
	<?php include("../asset/include/xin_menu.php"); ?>
    <!-- SUB-MWNU -->
	<?php include("xin_nav_id=restaurant-solution.php"); ?>

    <main>

      <!-- ARTICLE -->
      <article>

      	<!-- <section class="lds_overview">
      		<article>
      			<figure>
      				<picture>
      					<img src="../asset/image/temp/LDS.jpg" alt="">
      				</picture>
      			</figure>
      		</article>
      	</section> -->
        <section class="header_banner delivery_banner">
          <article>
            <hgroup>
              <h1>自動送餐</h1>
              <span><img alt="" src="../asset/image/img.png"></span>
              <h5>節省人力成本，提升顧客滿意度</h5>
            </hgroup>
            <ol>
              <li>
                <figure>
                  <span><img alt="" src="../asset/image/img.png"></span>
                  <h6>節省成本</h6>
                </figure>
              </li>
              <li>
                <figure>
                  <span><img alt="" src="../asset/image/img.png"></span>
                  <h6>手機點餐</h6>
                </figure>
              </li>
              <li>
                <figure>
                  <span><img alt="" src="../asset/image/img.png"></span>
                  <h6>十秒送餐</h6>
                </figure>
              </li>
              <li>
                <figure>
                  <span><img alt="" src="../asset/image/img.png"></span>
                  <h6>高翻桌率</h6>
                </figure>
              </li>
            </ol>
          </article>
        </section>

         <article>
            <nav class="sub-nav-1">
              <article>
                <h1>自動送餐</h1>
                <ol>
                  <li><a href="?id=overview" data-tab-nav="?id=verview" class="active">概觀</a></li>
                  <!-- <li><a href="?id=software" data-tab-nav="?id=software">軟體介紹</a></li> -->
                </ol>
              </article>
            </nav>

            <!-- 概觀 -->
            <section data-tab-content="?id=overview" class="active">
              <?php include("xin_product_lightning-delivery_id=overview.php"); ?>
            </section>

            <!-- 軟體介紹 -->
           <!--  <section data-tab-content="?id=software">
              <?php include("../software/xin_software_id=webmenu.php"); ?>
            </section> -->
        </article>

      </article>
       <!-- ASIDE -->
      <aside></aside>


    </main>
     <!-- FOOTER -->
	<?php include("../asset/include/xin_footer.php"); ?>

</body>
<?php include("../asset/include/xin_foot.php"); ?>