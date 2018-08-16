<?php include("../asset/head/_all/xin_all_front.php"); ?>
<?php include("../asset/head/product/xin_head_product_kiosk.php"); ?>
<?php include("../asset/head/_all/xin_all_link.php"); ?>
<link rel="stylesheet" type="text/css" href="../asset/style/page-css/case.css">
<link rel="stylesheet" type="text/css" href="../asset/style/page-css/abezpos.css">
<link rel="stylesheet" type="text/css" href="../asset/style/page-css/restaurant-solution.css">
<link rel="stylesheet" type="text/css" href="../asset/style/page-css/kiosk.css">
<?php include("../asset/head/_all/xin_all_script.php"); ?>

 <body id="kiosk overview" class="gx xin">


    <!-- HEADER -->
	<?php include("../asset/include/xin_header.php"); ?>
    <!-- MWNU -->
	<?php include("../asset/include/xin_menu.php"); ?>
    <!-- SUB-MWNU -->
	<?php include("xin_nav_id=restaurant-solution.php"); ?>

    <main>

      <!-- ARTICLE -->
      <article>

        <section class="header_banner kiosk_banner">
          <article>
            <hgroup>
              <h1>門口速結快點機</h1>
              <span><img alt="速結快點機" src="../asset/image/img.png"></span>
              <h5>點餐結帳無影手 老闆心頭好幫手</h5>
              <h3>月省 <em>3</em> 萬 <em>3</em>，一年省下 <em>39</em> 萬 <em>6</em> 千元</h3>
            </hgroup>
            <figure>
              <span><img alt="" src="../asset/image/img.png"></span>
            </figure>
          </article>
        </section>

        <article>
          <nav class="sub-nav-1">
            <article>
              <h1>門口點餐機</h1>
              <ol>
                <li><a href="?id=overview" data-tab-nav="?id=overview" class="active">概觀</a></li>
                <!-- <li><a href="?id=software" data-tab-nav="?id=software">軟體介紹</a></li> -->
              </ol>
            </article>
          </nav>

          <!-- 概觀 -->
          <section data-tab-content="?id=overview" class="active">
    			   <?php include("xin_product_kiosk_id=overview.php"); ?>	
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