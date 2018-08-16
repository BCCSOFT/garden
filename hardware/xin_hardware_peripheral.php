<?php include("../asset/head/_all/xin_all_front.php"); ?>
<?php include("../asset/head/hardware/xin_head_hardware_peripheral.php"); ?>
<?php include("../asset/head/_all/xin_all_link.php"); ?>
<link rel="stylesheet" type="text/css" href="../asset/style/page-css/hardware.css">
<?php include("../asset/head/_all/xin_all_script.php"); ?>

<body id="page-peripherals" class="gx xin body-class">

    <!-- HEADER -->
	<?php include("../asset/include/xin_header.php"); ?>
    <!-- MWNU -->
	<?php include("../asset/include/xin_menu.php"); ?>
    <!-- SUB-MWNU -->
    <nav id="main-nav" class="effect_fixed">
      <article>
        <h1>周邊設備</h1>
      </article>
    </nav>
    <main>

      <article>

        <section class="peripherals_banner">
          <article>
            <hgroup>
              <h2>周邊設備</h2>
            </hgroup>
          </article>
        </section>

        <!-- 熱感式出單機 -->
		  <?php include("xin_hardware_id=receipt-printer.php"); ?>

        <!-- 熱感條碼標籤機 -->
		  <?php include("xin_hardware_id=label-printer.php"); ?>

        <!-- 熱感式電子發票機 -->
		  <?php include("xin_hardware_id=invoice-printer.php"); ?>


        <!-- 條碼掃描器 -->
		  <?php include("xin_hardware_id=barcode-scanner.php"); ?>

        <!-- 錢櫃 -->
		  <?php include("xin_hardware_id=cash-drawer.php"); ?>

      </article>
      <aside></aside>

    </main>
     <!-- FOOTER -->
	<?php include("../asset/include/xin_footer.php"); ?>

</body>
<?php include("../asset/include/xin_foot.php"); ?>