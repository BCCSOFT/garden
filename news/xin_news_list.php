<?php include("../asset/head/_all/xin_all_front.php"); ?>
<?php include("../asset/head/news/xin_head_news.php"); ?>
<?php include("../asset/head/_all/xin_all_link.php"); ?>
<link rel="stylesheet" type="text/css" href="../asset/style/page-css/news.css">
<?php include("../asset/head/_all/xin_all_script.php"); ?>

<body id="news" class="gx xin">

    <!-- HEADER -->
	  <?php include("../asset/include/xin_header.php"); ?>
    <!-- MWNU -->
	  <?php include("../asset/include/xin_menu.php"); ?>

    <main>

      <article>

        <section class="news_banner">
          <article>
            <hgroup>
              <h2>最新消息</h2>
            </hgroup>
          </article>
        </section>

         <nav class="news_years-nav">
          <article>
            <h3><i class="bcc-date"></i>年份</h3>
            <ol>
              <li><a href="?id=2018" data-tab-nav="?id=2018" class="active">2018</a></li>
              <li><a href="?id=2017" data-tab-nav="?id=2017">2017</a></li>
              <li><a href="?id=2016" data-tab-nav="?id=2016">2016</a></li>
              <li><a href="?id=2015" data-tab-nav="?id=2015">2015</a></li>
            </ol>
          </article>
        </nav>

         <!-- 2018 -->
        <section data-tab-content="?id=2018" class="active">
          <?php include("xin_news_list_id=2018.php"); ?>
        </section>

        <!-- 2017 -->
        <section data-tab-content="?id=2017">
		  <?php include("xin_news_list_id=2017.php"); ?>
		</section>

         <!-- 2016 -->
        <section data-tab-content="?id=2016">
		  <?php include("xin_news_list_id=2016.php"); ?>
		</section>

         <!-- 2015 -->
        <section data-tab-content="?id=2015">
		  <?php include("xin_news_list_id=2015.php"); ?>
		</section>

      </article>
      <aside></aside>

    </main>
    <!-- FOOTER -->
	<?php include("../asset/include/xin_footer.php"); ?>

  </body>

<?php include("../asset/include/xin_foot.php"); ?>
