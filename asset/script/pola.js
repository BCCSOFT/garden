function mobileMenu() {
  var isLateralNavAnimating = false;
  //打開或關閉 menu
  setTimeout(function() {
    $('.cd-nav-trigger').on('click', function(event) {
      event.preventDefault();
      //若動畫正在進行，則停止
      if (!isLateralNavAnimating) {
        if ($(this).parents('.csstransitions').length > 0)
          isLateralNavAnimating = true;

        $('body').toggleClass('navigation-is-open');
        $('.cd-navigation-wrapper').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function() {
          //動畫结束
          isLateralNavAnimating = false;
        });
      }
    });
  }, 1500)
}

function jMenu() {
  // menu content
  var currentHeader = "",
    idShow = null;
  var menu = {
    retial_menu: [{
        title: '<a href="../solution/xin_retail-solution.php">智能零售解決方案</a>',
        // subtitle: "智能零售",
        cells: [
          '<div><a href="../solution/xin_retail-solution.php" class="prod-feature first-title restaurant-solution"><div class="img-icon kds-icon"></div><div class="f-content"><h4>產品概觀</h4></div></a></div>',
          '<div class="sub-group">解決方案</div>',
          '<div><a href="../product/xin_product_retail_mobile-pos.php" class="prod-feature restaurant-solution"><div class="f-icon bcc-payment"></div><div class="f-content"><h4>行動結帳收銀 </h4></div></a></div>',
          '<div><a href="../product/xin_product_retail_pos.php" class="prod-feature restaurant-solution"><div class="f-icon bcc-pos"></div><div class="f-content"><h4>櫃台結帳收銀 </h4></div></a></div>',
          '<div><a href="../product/xin_product_retail_jabezpos.php" class="prod-feature restaurant-solution"><div class="f-icon bcc-cloud"></div><div class="f-content"><h4>雲端後台管理 </h4></div></a></div>'
        ],
        photo: [
          '<div><div class="prod-img"><img src="../asset/image/jmenu/retail-solution.jpg" alt=""></div><h4>智能零售解決方案</h4><p>最完整的 IT 零售解決方案</p><a href="../solution/xin_retail-solution.php" title="">了解更多</a></div>'
        ]
      },
      '<li class="category">行動套裝產品</li>',
      {
        title: '<a href="../product/xin_product_retail_mobile-pos_v1.php">簡易掃碼版</a>',
        // subtitle: "行動 POS 收銀機",
        cells: [
          '<div><a href="../product/xin_product_retail_mobile-pos_v1.php" class="prod-feature first-title"><div class="img-icon v1-icon"></div><div class="f-content"><h4>產品概觀</h4></div></a></div>',
          '<div class="sub-group">功能模組</div>',
          '<div><a href="../feature/xin_feature_point-of-sale.php" class="prod-feature"><div class="f-icon bcc-pos"></div><div class="f-content"><h4>門市收銀</h4></div></a></div>',
          '<div><a href="../feature/xin_feature_analysis-report.php" class="prod-feature"><div class="f-icon bcc-report"></div><div class="f-content"><h4>營運報表</h4></div></a></div>',
          '<div><a href="../feature/xin_feature_payment.php" class="prod-feature"><div class="f-icon bcc-payment"></div><div class="f-content"><h4>多元支付 <i class="bcc-new new"></i></h4></div></a></div>',
          '<div><a href="../feature/xin_feature_invoice.php" class="prod-feature"><div class="f-icon bcc-invoice"></div><div class="f-content"><h4>電子發票 <i class="bcc-new new"></i></h4></div></a></div>'
        ],
        photo: [
          '<div><div class="prod-img"><img src="../asset/image/jmenu/mobile_pos.jpg" alt=""></div><h4>簡易掃碼版</h4><p>微店攤商開店必備工具，結合多元支付及電子發票功能；內建高速出單機、大容量電池，收銀機帶著走，接訂單更便利。</p><a href="../product/xin_product_retail_mobile-pos_v1.php" title="">了解更多</a></div>'
        ]
      }, {
        title: '<a href="../product/xin_product_retail_mobile-pos_x990.php">進階感應版</a>',
        // subtitle: "行動電子發票機",
        cells: [
          '<div><a href="../product/xin_product_retail_mobile-pos_x990.php" class="prod-feature first-title"><div class="img-icon v1-icon"></div><div class="f-content"><h4>產品概觀</h4></div></a></div>',
          '<div class="sub-group">功能模組</div>',
          '<div><a href="../feature/xin_feature_point-of-sale.php" class="prod-feature"><div class="f-icon bcc-pos"></div><div class="f-content"><h4>門市收銀</h4></div></a></div>',
          '<div><a href="../feature/xin_feature_analysis-report.php" class="prod-feature"><div class="f-icon bcc-report"></div><div class="f-content"><h4>營運報表</h4></div></a></div>',
          '<div><a href="../feature/xin_feature_payment.php" class="prod-feature"><div class="f-icon bcc-payment"></div><div class="f-content"><h4>多元支付 <i class="bcc-new new"></i></h4></div></a></div>',
          '<div><a href="../feature/xin_feature_invoice.php" class="prod-feature"><div class="f-icon bcc-invoice"></div><div class="f-content"><h4>電子發票 <i class="bcc-new new"></i></h4></div></a></div>'
        ],
        photo: [
          '<div><div class="prod-img"><img src="../asset/image/jmenu/prod_invoice.jpg" alt=""></div><h4>進階感應版</h4><p>行動電子發票即時輕鬆開立，省去稅務申報麻煩，省去列印保存問題；不怕發票遺失損毀，至少省下50%用紙量，調閱及儲存全面自動化，帶動企業流程電子化。</p><a href="../product/xin_product_retail_mobile-pos_x990.php" title="">了解更多</a></div>'
        ]
      }, 
      '<li class="category">櫃台套裝產品</li>',
      {
        title: '<a href="../product/xin_product_retail_pos_t1.php">雲端基本版</a>',
        // subtitle: "流通大師 BPOS",
        cells: [
          '<div><a href="../product/xin_product_retail_pos_t1.php" class="prod-feature first-title"><div class="img-icon t1-icon"></div><div class="f-content"><h4>產品概觀</h4></div></a></div>',
          '<div class="sub-group">功能模組</div>',
          '<div><a href="../feature/xin_feature_point-of-sale.php" class="prod-feature"><div class="f-icon bcc-pos"></div><div class="f-content"><h4>門市收銀</h4></div></a></div>',
          '<div><a href="../feature/xin_feature_purchase.php" class="prod-feature"><div class="f-icon bcc-purchase"></div><div class="f-content"><h4>採購進貨</h4></div></a></div>',
          '<div><a href="../feature/xin_feature_inventory.php" class="prod-feature"><div class="f-icon bcc-inventory"></div><div class="f-content"><h4>庫存管理</h4></div></a></div>',
          '<div><a href="../feature/xin_feature_crm.php" class="prod-feature"><div class="f-icon bcc-member"></div><div class="f-content"><h4>會員管理</h4></div></a></div>',
          '<div><a href="../feature/xin_feature_analysis-report.php" class="prod-feature"><div class="f-icon bcc-report"></div><div class="f-content"><h4>營運報表</h4></div></a></div>',
          '<div><a href="../feature/xin_feature_payment.php" class="prod-feature"><div class="f-icon bcc-payment"></div><div class="f-content"><h4>多元支付 <i class="bcc-new new"></i></h4></div></a></div>',
          '<div><a href="../feature/xin_feature_invoice.php" class="prod-feature"><div class="f-icon bcc-invoice"></div><div class="f-content"><h4>電子發票 <i class="bcc-new new"></i></h4></div></a></div>'
        ],
        photo: [
          '<div><div class="prod-img"><img src="../asset/image/jmenu/retail_prod_02.jpg" alt=""></div><h4>雲端基本版</h4><p>流通大師 BPOS 跨平台，即裝即用；建構於 AWS 雲端服務:安全穩定、即時更新及查詢、支援離線作業。</p><a href="../product/xin_product_retail_pos_t1.php" title="">了解更多</a></div>'
        ]
      }, {
        title: '<a href="../product/xin_product_retail_pos_t80-cloud.php">雲端專業版</a>',
        // subtitle: "流通大師 B1POS",
        cells: [
          '<div><a href="../product/xin_product_retail_pos_t80-cloud.php" class="prod-feature first-title"><div class="img-icon t80-icon"></div><div class="f-content"><h4>產品概觀</h4></div></a></div>',
          '<div class="sub-group">功能模組</div>',
          '<div><a href="../feature/xin_feature_point-of-sale.php" class="prod-feature"><div class="f-icon bcc-pos"></div><div class="f-content"><h4>門市收銀</h4></div></a></div>',
          '<div><a href="../feature/xin_feature_purchase.php" class="prod-feature"><div class="f-icon bcc-purchase"></div><div class="f-content"><h4>採購進貨</h4></div></a></div>',
          '<div><a href="../feature/xin_feature_inventory.php" class="prod-feature"><div class="f-icon bcc-inventory"></div><div class="f-content"><h4>庫存管理</h4></div></a></div>',
          // '<div><a href="promotion.php" class="prod-feature"><div class="f-icon bcc-coupon"></div><div class="f-content"><h4>促銷管理</h4></div></a></div>',
          '<div><a href="../feature/xin_feature_crm.php" class="prod-feature"><div class="f-icon bcc-member"></div><div class="f-content"><h4>會員管理</h4></div></a></div>',
          '<div><a href="../feature/xin_feature_analysis-report.php" class="prod-feature"><div class="f-icon bcc-report"></div><div class="f-content"><h4>營運報表</h4></div></a></div>',
          '<div><a href="../feature/xin_feature_payment.php" class="prod-feature"><div class="f-icon bcc-payment"></div><div class="f-content"><h4>多元支付 <i class="bcc-new new"></i></h4></div></a></div>',
          '<div><a href="../feature/xin_feature_invoice.php" class="prod-feature"><div class="f-icon bcc-invoice"></div><div class="f-content"><h4>電子發票 <i class="bcc-new new"></i></h4></div></a></div>'
        ],
        photo: [
          '<div><div class="prod-img"><img src="../asset/image/jmenu/retail_prod_01.jpg" alt=""></div><h4>雲端專業版</h4><p>流通大師B1POS 簡單、穩定、輕鬆開店；結帳更順暢:快速查詢與輸入商品、輕鬆查找會員、快速功能鍵設定。</p><a href="../product/xin_product_retail_pos_t80-cloud.php" title="">了解更多</a></div>'
        ]
      }, {
        title: '<a href="../product/xin_product_retail_pos_t80.php">單機專業版</a>',
        // subtitle: "流通大師 B1POS",
        cells: [
          '<div><a href="../product/xin_product_retail_pos_t80.php" class="prod-feature first-title"><div class="img-icon t80-icon"></div><div class="f-content"><h4>產品概觀</h4></div></a></div>',
          '<div class="sub-group">功能模組</div>',
          '<div><a href="../feature/xin_feature_point-of-sale.php" class="prod-feature"><div class="f-icon bcc-pos"></div><div class="f-content"><h4>門市收銀</h4></div></a></div>',
          '<div><a href="../feature/xin_feature_purchase.php" class="prod-feature"><div class="f-icon bcc-purchase"></div><div class="f-content"><h4>採購進貨</h4></div></a></div>',
          '<div><a href="../feature/xin_feature_inventory.php" class="prod-feature"><div class="f-icon bcc-inventory"></div><div class="f-content"><h4>庫存管理</h4></div></a></div>',
          // '<div><a href="promotion.php" class="prod-feature"><div class="f-icon bcc-coupon"></div><div class="f-content"><h4>促銷管理</h4></div></a></div>',
          '<div><a href="../feature/xin_feature_crm.php" class="prod-feature"><div class="f-icon bcc-member"></div><div class="f-content"><h4>會員管理</h4></div></a></div>',
          '<div><a href="../feature/xin_feature_analysis-report.php" class="prod-feature"><div class="f-icon bcc-report"></div><div class="f-content"><h4>營運報表</h4></div></a></div>',
          '<div><a href="../feature/xin_feature_payment.php" class="prod-feature"><div class="f-icon bcc-payment"></div><div class="f-content"><h4>多元支付 <i class="bcc-new new"></i></h4></div></a></div>',
          '<div><a href="../feature/xin_feature_invoice.php" class="prod-feature"><div class="f-icon bcc-invoice"></div><div class="f-content"><h4>電子發票 <i class="bcc-new new"></i></h4></div></a></div>'
        ],
        photo: [
          '<div><div class="prod-img"><img src="../asset/image/jmenu/retail_prod_01.jpg" alt=""></div><h4>單機專業版</h4><p>流通大師B1POS 簡單、穩定、輕鬆開店；結帳更順暢:快速查詢與輸入商品、輕鬆查找會員、快速功能鍵設定。</p><a href="../product/xin_product_retail_pos_t80.php" title="">了解更多</a></div>'
        ]
      },
      '<li class="category">零售多店套裝產品</li>',
      {
        title: '<a href="../product/xin_product_retail_multi-store_overview.php">流通大師 - 連鎖多店版</a>',
        // subtitle: "流通大師 BSMS",
        cells: [
          '<div><a href="../product/xin_product_retail_multi-store_overview.php" class="prod-feature first-title"><div class="img-icon t80-icon"></div><div class="f-content"><h4>產品概觀</h4></div></a></div>',
          '<div class="sub-group">功能模組</div>',
          '<div><a href="../feature/xin_feature_point-of-sale.php" class="prod-feature"><div class="f-icon bcc-pos"></div><div class="f-content"><h4>門市收銀</h4></div></a></div>',
          '<div><a href="../feature/xin_feature_purchase.php" class="prod-feature"><div class="f-icon bcc-purchase"></div><div class="f-content"><h4>採購進貨</h4></div></a></div>',
          '<div><a href="../feature/xin_feature_inventory.php" class="prod-feature"><div class="f-icon bcc-inventory"></div><div class="f-content"><h4>庫存管理</h4></div></a></div>',
          '<div><a href="../feature/xin_feature_promotion.php" class="prod-feature"><div class="f-icon bcc-coupon"></div><div class="f-content"><h4>促銷管理</h4></div></a></div>',
          '<div><a href="../feature/xin_feature_crm.php" class="prod-feature"><div class="f-icon bcc-member"></div><div class="f-content"><h4>會員管理</h4></div></a></div>',
          '<div><a href="../feature/xin_feature_analysis-report.php" class="prod-feature"><div class="f-icon bcc-report"></div><div class="f-content"><h4>營運報表</h4></div></a></div>',
          // '<div><a class="prod-feature"><div class="f-icon bcc-chain"></div><div class="f-content"><h4>連鎖加盟</h4></div></a></div>',
          //'<div><a class="prod-feature"><div class="f-icon bcc-wholesale"></div><div class="f-content"><h4>批發銷售</h4></div></a></div>',
          '<div><a href="../feature/xin_feature_payment.php" class="prod-feature"><div class="f-icon bcc-payment"></div><div class="f-content"><h4>多元支付 <i class="bcc-new new"></i></h4></div></a></div>',
          '<div><a href="../feature/xin_feature_invoice.php" class="prod-feature"><div class="f-icon bcc-invoice"></div><div class="f-content"><h4>電子發票 <i class="bcc-new new"></i></h4></div></a></div>'
        ],
        photo: [
          '<div><div class="prod-img"><img src="../asset/image/jmenu/bsms.jpg" alt=""></div><h4>連鎖多店版</h4><p>流通大師 BSMS 打造企業總部的核心競爭力，搭配硬體:超敏銳觸控螢幕、內建出單機、超大雙螢幕顯示。</p><a href="../product/xin_product_retail_multi-store_overview.php" title="">了解更多</a></div>'
        ]
      }
    ],
    restaurant_menu: [{
        title: '<a href="../solution/xin_restaurant-solution.php">智能餐飲解決方案</a>',
        // subtitle: "智能餐飲",
        cells: [
          '<div><a href="../solution/xin_restaurant-solution.php" class="prod-feature first-title restaurant-solution"><div class="img-icon kds-icon"></div><div class="f-content"><h4>產品概觀</h4></div></a></div>',
          '<div class="sub-group">解決方案</div>',
          '<div><a href="../product/xin_product_mobile-order.php" class="prod-feature restaurant-solution"><div class="f-icon bcc-payment"></div><div class="f-content"><h4>手機雲端點餐 </h4></div></a></div>',
          '<div><a href="../product/xin_product_kiosk.php" class="prod-feature restaurant-solution"><div class="f-icon "></div><div class="f-content"><h4>Kiosk 自助點餐 </h4></div></a></div>',
          '<div><a href="../product/xin_product_restaurant_mobile-pos.php" class="prod-feature restaurant-solution"><div class="f-icon bcc-payment"></div><div class="f-content"><h4>行動收銀 </h4></div></a></div>',
          '<div><a href="../product/xin_product_restaurant_pos.php" class="prod-feature restaurant-solution"><div class="f-icon bcc-pos"></div><div class="f-content"><h4>櫃台收銀 </h4></div></a></div>',
          '<div><a href="../product/xin_product_kitchen-display-system.php" class="prod-feature restaurant-solution"><div class="f-icon bcc-webmenu"></div><div class="f-content"><h4>廚房控管 </h4></div></a></div>',
          '<div><a href="../product/xin_product_lightning-delivery.php" class="prod-feature restaurant-solution"><div class="f-icon"></div><div class="f-content"><h4>自動送餐 </h4></div></a></div>',
          '<div><a href="../product/xin_product_restaurant_jabezpos.php" class="prod-feature restaurant-solution"><div class="f-icon bcc-cloud"></div><div class="f-content"><h4>雲端後台管理 </h4></div></a></div>',
          '<div><a href="../product/xin_product_member.php" class="prod-feature restaurant-solution"><div class="f-icon bcc-member"></div><div class="f-content"><h4>會員APP </h4></div></a></div>'
        ],
        photo: [
          '<div><div class="prod-img"><img src="../asset/image/jmenu/restaurant-solution.jpg" alt=""></div><h4>智能餐飲解決方案</h4><p>最完整的 IT 餐飲解決方案</p><a href="../solution/xin_restaurant-solution.php" title="">了解更多</a></div>'
        ]
      },
      '<li class="category">行動套裝產品</li>',
      {
        title: '<a href="../product/xin_product_restaurant_mobile-pos_v1.php">簡易掃碼版</a>',
        // subtitle: "行動 POS 收銀機",
        cells: [
          '<div><a href="../product/xin_product_restaurant_mobile-pos_v1.php" class="prod-feature first-title"><div class="img-icon v1-icon"></div><div class="f-content"><h4>產品概觀</h4></div></a></div>',
          '<div class="sub-group">功能模組</div>',
          '<div><a href="../feature/xin_feature_point-of-sale.php" class="prod-feature"><div class="f-icon bcc-pos"></div><div class="f-content"><h4>門市收銀</h4></div></a></div>',
          // '<div><a href="promotion.php" class="prod-feature"><div class="f-icon bcc-coupon"></div><div class="f-content"><h4>促銷管理</h4></div></a></div>',
          '<div><a href="../feature/xin_feature_analysis-report.php" class="prod-feature"><div class="f-icon bcc-report"></div><div class="f-content"><h4>營運報表</h4></div></a></div>',
          '<div><a href="../feature/xin_feature_payment.php" class="prod-feature"><div class="f-icon bcc-payment"></div><div class="f-content"><h4>多元支付 <i class="bcc-new new"></i></h4></div></a></div>',
          '<div><a href="../feature/xin_feature_invoice.php" class="prod-feature"><div class="f-icon bcc-invoice"></div><div class="f-content"><h4>電子發票 <i class="bcc-new new"></i></h4></div></a></div>'
        ],
        photo: [
          '<div><div class="prod-img"><img src="../asset/image/jmenu/mobile_pos.jpg" alt=""></div><h4>簡易掃碼版</h4><p>微店攤商開店必備工具，結合多元支付及電子發票功能；內建高速出單機、大容量電池，收銀機帶著走，接訂單更便利。</p><a href="../product/xin_product_restaurant_mobile-pos_v1.php" title="">了解更多</a></div>'
        ]
      }, {
        title: '<a href="../product/xin_product_restaurant_mobile-pos_x990.php">進階感應版</a>',
        // subtitle: "行動電子發票機",
        cells: [
          '<div><a href="../product/xin_product_restaurant_mobile-pos_x990.php" class="prod-feature first-title"><div class="img-icon v1-icon"></div><div class="f-content"><h4>產品概觀</h4></div></a></div>',
          '<div class="sub-group">功能模組</div>',
          '<div><a href="../feature/xin_feature_point-of-sale.php" class="prod-feature"><div class="f-icon bcc-pos"></div><div class="f-content"><h4>門市收銀</h4></div></a></div>',
          // '<div><a href="promotion.php" class="prod-feature"><div class="f-icon bcc-coupon"></div><div class="f-content"><h4>促銷管理</h4></div></a></div>',
          '<div><a href="../feature/xin_feature_analysis-report.php" class="prod-feature"><div class="f-icon bcc-report"></div><div class="f-content"><h4>營運報表</h4></div></a></div>',
          '<div><a href="../feature/xin_feature_payment.php" class="prod-feature"><div class="f-icon bcc-payment"></div><div class="f-content"><h4>多元支付 <i class="bcc-new new"></i></h4></div></a></div>',
          '<div><a href="../feature/xin_feature_invoice.php" class="prod-feature"><div class="f-icon bcc-invoice"></div><div class="f-content"><h4>電子發票 <i class="bcc-new new"></i></h4></div></a></div>'
        ],
        photo: [
          '<div><div class="prod-img"><img src="../asset/image/jmenu/prod_invoice.jpg" alt=""></div><h4>進階感應版</h4><p>行動電子發票即時輕鬆開立，省去稅務申報麻煩，省去列印保存問題；不怕發票遺失損毀，至少省下50%用紙量，調閱及儲存全面自動化，帶動企業流程電子化。</p><a href="../product/xin_product_restaurant_mobile-pos_x990.php" title="">了解更多</a></div>'
        ]
      },
      '<li class="category">櫃台套裝產品</li>',
       {
        title: '<a href="../product/xin_product_restaurant_pos_t1.php">雲端基本版</a>',
        // subtitle: "流通大師 BPOS",
        cells: [
          '<div><a href="../product/xin_product_restaurant_pos_t1.php" class="prod-feature first-title"><div class="img-icon t1-icon"></div><div class="f-content"><h4>產品概觀</h4></div></a></div>',
          '<div class="sub-group">功能模組</div>',
          '<div><a href="../feature/xin_feature_point-of-sale.php" class="prod-feature"><div class="f-icon bcc-pos"></div><div class="f-content"><h4>門市收銀</h4></div></a></div>',
          '<div><a href="../feature/xin_feature_purchase.php" class="prod-feature"><div class="f-icon bcc-purchase"></div><div class="f-content"><h4>採購進貨</h4></div></a></div>',
          '<div><a href="../feature/xin_feature_inventory.php" class="prod-feature"><div class="f-icon bcc-inventory"></div><div class="f-content"><h4>庫存管理</h4></div></a></div>',
          // '<div><a href="promotion.php" class="prod-feature"><div class="f-icon bcc-coupon"></div><div class="f-content"><h4>促銷管理</h4></div></a></div>',
          '<div><a href="../feature/xin_feature_crm.php" class="prod-feature"><div class="f-icon bcc-member"></div><div class="f-content"><h4>會員管理</h4></div></a></div>',
          '<div><a href="../feature/xin_feature_analysis-report.php" class="prod-feature"><div class="f-icon bcc-report"></div><div class="f-content"><h4>營運報表</h4></div></a></div>',
          '<div><a href="../feature/xin_feature_payment.php" class="prod-feature"><div class="f-icon bcc-payment"></div><div class="f-content"><h4>多元支付 <i class="bcc-new new"></i></h4></div></a></div>',
          '<div><a href="../feature/xin_feature_invoice.php" class="prod-feature"><div class="f-icon bcc-invoice"></div><div class="f-content"><h4>電子發票 <i class="bcc-new new"></i></h4></div></a></div>',
          '<div><a href="../feature/xin_feature_mobile-order.php" class="prod-feature"><div class="f-icon bcc-webmenu"></div><div class="f-content"><h4>雲端點餐 <i class="bcc-new new"></i></h4></div></a></div>'
        ],
        photo: [
          '<div><div class="prod-img"><img src="../asset/image/jmenu/retail_prod_02.jpg" alt=""></div><h4>雲端基本版</h4><p>流通大師 BPOS 跨平台，即裝即用；建構於 AWS 雲端服務:安全穩定、即時更新及查詢、支援離線作業。</p><a href="../product/xin_product_restaurant_pos_t1.php" title="">了解更多</a></div>'
        ]
      }, {
        title: '<a href="../product/xin_product_restaurant_pos_t80-cloud.php">雲端專業版</a>',
        // subtitle: "流通大師 B1POS",
        cells: [
          '<div><a href="../product/xin_product_restaurant_pos_t80-cloud.php" class="prod-feature first-title"><div class="img-icon t80-icon"></div><div class="f-content"><h4>產品概觀</h4></div></a></div>',
          '<div class="sub-group">功能模組</div>',
          '<div><a href="../feature/xin_feature_point-of-sale.php" class="prod-feature"><div class="f-icon bcc-pos"></div><div class="f-content"><h4>門市收銀</h4></div></a></div>',
          '<div><a href="../feature/xin_feature_purchase.php" class="prod-feature"><div class="f-icon bcc-purchase"></div><div class="f-content"><h4>採購進貨</h4></div></a></div>',
          '<div><a href="../feature/xin_feature_inventory.php" class="prod-feature"><div class="f-icon bcc-inventory"></div><div class="f-content"><h4>庫存管理</h4></div></a></div>',
          // '<div><a href="promotion.php" class="prod-feature"><div class="f-icon bcc-coupon"></div><div class="f-content"><h4>促銷管理</h4></div></a></div>',
          '<div><a href="../feature/xin_feature_crm.php" class="prod-feature"><div class="f-icon bcc-member"></div><div class="f-content"><h4>會員管理</h4></div></a></div>',
          '<div><a href="../feature/xin_feature_analysis-report.php" class="prod-feature"><div class="f-icon bcc-report"></div><div class="f-content"><h4>營運報表</h4></div></a></div>',
          '<div><a href="../feature/xin_feature_payment.php" class="prod-feature"><div class="f-icon bcc-payment"></div><div class="f-content"><h4>多元支付 <i class="bcc-new new"></i></h4></div></a></div>',
          '<div><a href="../feature/xin_feature_invoice.php" class="prod-feature"><div class="f-icon bcc-invoice"></div><div class="f-content"><h4>電子發票 <i class="bcc-new new"></i></h4></div></a></div>',
          '<div><a href="../feature/xin_feature_mobile-order.php" class="prod-feature"><div class="f-icon bcc-webmenu"></div><div class="f-content"><h4>雲端點餐 <i class="bcc-new new"></i></h4></div></a></div>'
        ],
        photo: [
          '<div><div class="prod-img"><img src="../asset/image/jmenu/restaurant_prod_01.jpg" alt=""></div><h4>雲端專業版</h4><p>流通大師B1POS 簡單、穩定、輕鬆開店；結帳更順暢:快速查詢與輸入商品、輕鬆查找會員、快速功能鍵設定。</p><a href="../product/xin_product_restaurant_pos_t80-cloud.php" title="">了解更多</a></div>'
        ]
      }, {
        title: '<a href="../product/xin_product_restaurant_pos_t80.php">單機專業版</a>',
        // subtitle: "流通大師 B1POS",
        cells: [
          '<div><a href="../product/xin_product_restaurant_pos_t80.php" class="prod-feature first-title"><div class="img-icon t80-icon"></div><div class="f-content"><h4>產品概觀</h4></div></a></div>',
          '<div class="sub-group">功能模組</div>',
          '<div><a href="../feature/xin_feature_point-of-sale.php" class="prod-feature"><div class="f-icon bcc-pos"></div><div class="f-content"><h4>門市收銀</h4></div></a></div>',
          '<div><a href="../feature/xin_feature_purchase.php" class="prod-feature"><div class="f-icon bcc-purchase"></div><div class="f-content"><h4>採購進貨</h4></div></a></div>',
          '<div><a href="../feature/xin_feature_inventory.php" class="prod-feature"><div class="f-icon bcc-inventory"></div><div class="f-content"><h4>庫存管理</h4></div></a></div>',
          // '<div><a href="promotion.php" class="prod-feature"><div class="f-icon bcc-coupon"></div><div class="f-content"><h4>促銷管理</h4></div></a></div>',
          '<div><a href="../feature/xin_feature_crm.php" class="prod-feature"><div class="f-icon bcc-member"></div><div class="f-content"><h4>會員管理</h4></div></a></div>',
          '<div><a href="../feature/xin_feature_analysis-report.php" class="prod-feature"><div class="f-icon bcc-report"></div><div class="f-content"><h4>營運報表</h4></div></a></div>',
          '<div><a href="../feature/xin_feature_payment.php" class="prod-feature"><div class="f-icon bcc-payment"></div><div class="f-content"><h4>多元支付 <i class="bcc-new new"></i></h4></div></a></div>',
          '<div><a href="../feature/xin_feature_invoice.php" class="prod-feature"><div class="f-icon bcc-invoice"></div><div class="f-content"><h4>電子發票 <i class="bcc-new new"></i></h4></div></a></div>',
          '<div><a href="../feature/xin_feature_mobile-order.php" class="prod-feature"><div class="f-icon bcc-webmenu"></div><div class="f-content"><h4>雲端點餐 <i class="bcc-new new"></i></h4></div></a></div>'
        ],
        photo: [
          '<div><div class="prod-img"><img src="../asset/image/jmenu/restaurant_prod_01.jpg" alt=""></div><h4>單機專業版</h4><p>流通大師B1POS 簡單、穩定、輕鬆開店；結帳更順暢:快速查詢與輸入商品、輕鬆查找會員、快速功能鍵設定。</p><a href="../product/xin_product_restaurant_pos_t80.php" title="">了解更多</a></div>'
        ]
      }, 
      '<li class="category">廚房套裝產品</li>',
      {
        title: '<a href="../product/xin_product_kitchen-display-system.php">廚房接單機</a>',
        // subtitle: "雲端點餐機",
        cells: [
          '<div><a href="../product/xin_product_kitchen-display-system.php" class="prod-feature first-title"><div class="img-icon kds-icon"></div><div class="f-content"><h4>產品概觀</h4></div></a></div>',
          '<div class="sub-group">功能模組</div>',
          '<div><a href="../feature/xin_feature_payment.php" class="prod-feature"><div class="f-icon bcc-payment"></div><div class="f-content"><h4>多元支付 <i class="bcc-new new"></i></h4></div></a></div>',
          '<div><a href="../feature/xin_feature_invoice.php" class="prod-feature"><div class="f-icon bcc-invoice"></div><div class="f-content"><h4>電子發票 <i class="bcc-new new"></i></h4></div></a></div>',
          '<div><a href="../feature/xin_feature_mobile-order.php" class="prod-feature"><div class="f-icon bcc-webmenu"></div><div class="f-content"><h4>雲端點餐 <i class="bcc-new new"></i></h4></div></a></div>'
        ],
        photo: [
          '<div><div class="prod-img"><img src="../asset/image/jmenu/prod_webmenu.jpg" alt=""></div><h4>廚房接單機</h4><p>雲端點餐機 打造你的智慧餐廳，開店原來這麼簡單，免下載APP立即點餐 不用等店員。只要掃瞄QRCODE就可以立刻點餐！節省你排隊的時間！</p><a href="../product/xin_product_kitchen-display-system.php" title="">了解更多</a></div>'
        ]
      },
      '<li class="category">餐飲多店套裝產品</li>',
      {
        title: '<a href="../product/xin_product_restaurant_multi-store_overview.php">餐飲大師 - 連鎖多店版</a>',
        // subtitle: "餐飲大師 BSMS",
        cells: [
          '<div><a href="../product/xin_product_restaurant_multi-store_overview.php" class="prod-feature first-title"><div class="img-icon t80-icon"></div><div class="f-content"><h4>產品概觀</h4></div></a></div>',
          '<div class="sub-group">功能模組</div>',
          '<div><a href="../feature/xin_feature_point-of-sale.php" class="prod-feature"><div class="f-icon bcc-pos"></div><div class="f-content"><h4>門市收銀</h4></div></a></div>',
          '<div><a href="../feature/xin_feature_purchase.php" class="prod-feature"><div class="f-icon bcc-purchase"></div><div class="f-content"><h4>採購進貨</h4></div></a></div>',
          '<div><a href="../feature/xin_feature_inventory.php" class="prod-feature"><div class="f-icon bcc-inventory"></div><div class="f-content"><h4>庫存管理</h4></div></a></div>',
          '<div><a href="../feature/xin_feature_promotion.php" class="prod-feature"><div class="f-icon bcc-coupon"></div><div class="f-content"><h4>促銷管理</h4></div></a></div>',
          '<div><a href="../feature/xin_feature_crm.php" class="prod-feature"><div class="f-icon bcc-member"></div><div class="f-content"><h4>會員管理</h4></div></a></div>',
          '<div><a href="../feature/xin_feature_analysis-report.php" class="prod-feature"><div class="f-icon bcc-report"></div><div class="f-content"><h4>營運報表</h4></div></a></div>',
          // '<div><a class="prod-feature"><div class="f-icon bcc-chain"></div><div class="f-content"><h4>連鎖加盟</h4></div></a></div>',
          //'<div><a class="prod-feature"><div class="f-icon bcc-wholesale"></div><div class="f-content"><h4>批發銷售</h4></div></a></div>',
          '<div><a href="../feature/xin_feature_payment.php" class="prod-feature"><div class="f-icon bcc-payment"></div><div class="f-content"><h4>多元支付 <i class="bcc-new new"></i></h4></div></a></div>',
          '<div><a href="../feature/xin_feature_invoice.php" class="prod-feature"><div class="f-icon bcc-invoice"></div><div class="f-content"><h4>電子發票 <i class="bcc-new new"></i></h4></div></a></div>',
          '<div><a href="../feature/xin_feature_mobile-order.php" class="prod-feature"><div class="f-icon bcc-webmenu"></div><div class="f-content"><h4>雲端點餐 <i class="bcc-new new"></i></h4></div></a></div>'
        ],
        photo: [
          '<div><div class="prod-img"><img src="../asset/image/jmenu/bsms.jpg" alt=""></div><h4>連鎖多店版</h4><p>餐飲大師 BSMS 打造企業總部的核心競爭力，搭配硬體:超敏銳觸控螢幕、內建出單機、超大雙螢幕顯示。</p><a href="../product/xin_product_restaurant_multi-store_overview.php" title="">了解更多</a></div>'
        ]
      }

    ],
    software_menu: [
      '<li class="category">雲端軟體</li>',
      {
        title: '<a href="../software/xin_software_mecr.php">行動收銀 mECR</a>',
        cells: [
          '<div><a href="../software/xin_software_mecr.php" class="prod-feature first-title"><div class="img-icon jabezpos-icon"></div><div class="f-content"><h4>軟體概觀</h4></div></a></div>',
          '<div class="sub-group">功能模組</div>',
          '<div><a href="../feature/xin_feature_point-of-sale.php" class="prod-feature"><div class="f-icon bcc-pos"></div><div class="f-content"><h4>門市收銀</h4></div></a></div>',
          '<div><a href="../feature/xin_feature_analysis-report.php" class="prod-feature"><div class="f-icon bcc-report"></div><div class="f-content"><h4>營運報表</h4></div></a></div>',
          '<div><a href="../feature/xin_feature_payment.php" class="prod-feature"><div class="f-icon bcc-payment"></div><div class="f-content"><h4>多元支付 <i class="bcc-new new"></i></h4></div></a></div>',
          '<div><a href="../feature/xin_feature_invoice.php" class="prod-feature"><div class="f-icon bcc-invoice"></div><div class="f-content"><h4>電子發票 <i class="bcc-new new"></i></h4></div></a></div>'
        ],
        photo: [
          '<div><div class="prod-img"><img src="../asset/image/jmenu/mECR-icon.jpg" alt=""></div><h4>行動收銀 mECR</h4><p></p><a href="../software/xin_software_mecr.php" title="">了解更多</a></div>'
        ]
      },
      {
        title: '<a href="../software/xin_software_bpos.php">櫃檯收銀 BPOS</a>',
        cells: [
          '<div><a href="../software/xin_software_bpos.php" class="prod-feature first-title"><div class="img-icon bpos-icon"></div><div class="f-content"><h4>軟體概觀</h4></div></a></div>',
          '<div class="sub-group">功能模組</div>',
          '<div><a href="../feature/xin_feature_point-of-sale.php" class="prod-feature"><div class="f-icon bcc-pos"></div><div class="f-content"><h4>門市收銀</h4></div></a></div>',
          '<div><a href="../feature/xin_feature_purchase.php" class="prod-feature"><div class="f-icon bcc-purchase"></div><div class="f-content"><h4>採購進貨</h4></div></a></div>',
          '<div><a href="../feature/xin_feature_inventory.php" class="prod-feature"><div class="f-icon bcc-inventory"></div><div class="f-content"><h4>庫存管理</h4></div></a></div>',
          // '<div><a href="../feature/xin_feature_promotion.php" class="prod-feature"><div class="f-icon bcc-coupon"></div><div class="f-content"><h4>促銷管理</h4></div></a></div>',
          '<div><a href="../feature/xin_feature_crm.php" class="prod-feature"><div class="f-icon bcc-member"></div><div class="f-content"><h4>會員管理</h4></div></a></div>',
          '<div><a href="../feature/xin_feature_analysis-report.php" class="prod-feature"><div class="f-icon bcc-report"></div><div class="f-content"><h4>營運報表</h4></div></a></div>',
          '<div><a href="../feature/xin_feature_payment.php" class="prod-feature"><div class="f-icon bcc-payment"></div><div class="f-content"><h4>多元支付 <i class="bcc-new new"></i></h4></div></a></div>',
          '<div><a href="../feature/xin_feature_invoice.php" class="prod-feature"><div class="f-icon bcc-invoice"></div><div class="f-content"><h4>電子發票 <i class="bcc-new new"></i></h4></div></a></div>',
          '<div><a href="../feature/xin_feature_mobile-order.php" class="prod-feature"><div class="f-icon bcc-webmenu"></div><div class="f-content"><h4>雲端點餐 <i class="bcc-new new"></i></h4></div></a></div>'
        ],
        photo: [
          '<div><div class="prod-img"><img src="../asset/image/jmenu/bpos-icon.jpg" alt=""></div><h4>櫃檯收銀 BPOS</h4><p></p><a href="../software/xin_software_bpos.php" title="">了解更多</a></div>'
        ]
      },
      {
        title: '<a href="../software/xin_software_b1pos.php">櫃檯收銀 B1POS</a>',
        cells: [
          '<div><a href="../software/xin_software_b1pos.php" class="prod-feature first-title"><div class="img-icon jabezpos-icon"></div><div class="f-content"><h4>軟體概觀</h4></div></a></div>',
          '<div class="sub-group">功能模組</div>',
          '<div><a href="../feature/xin_feature_point-of-sale.php" class="prod-feature"><div class="f-icon bcc-pos"></div><div class="f-content"><h4>門市收銀</h4></div></a></div>',
          '<div><a href="../feature/xin_feature_purchase.php" class="prod-feature"><div class="f-icon bcc-purchase"></div><div class="f-content"><h4>採購進貨</h4></div></a></div>',
          '<div><a href="../feature/xin_feature_inventory.php" class="prod-feature"><div class="f-icon bcc-inventory"></div><div class="f-content"><h4>庫存管理</h4></div></a></div>',
          // '<div><a href="../feature/xin_feature_promotion.php" class="prod-feature"><div class="f-icon bcc-coupon"></div><div class="f-content"><h4>促銷管理</h4></div></a></div>',
          '<div><a href="../feature/xin_feature_crm.php" class="prod-feature"><div class="f-icon bcc-member"></div><div class="f-content"><h4>會員管理</h4></div></a></div>',
          '<div><a href="../feature/xin_feature_analysis-report.php" class="prod-feature"><div class="f-icon bcc-report"></div><div class="f-content"><h4>營運報表</h4></div></a></div>',
          '<div><a href="../feature/xin_feature_payment.php" class="prod-feature"><div class="f-icon bcc-payment"></div><div class="f-content"><h4>多元支付 <i class="bcc-new new"></i></h4></div></a></div>',
          '<div><a href="../feature/xin_feature_invoice.php" class="prod-feature"><div class="f-icon bcc-invoice"></div><div class="f-content"><h4>電子發票 <i class="bcc-new new"></i></h4></div></a></div>',
          '<div><a href="../feature/xin_feature_mobile-order.php" class="prod-feature"><div class="f-icon bcc-webmenu"></div><div class="f-content"><h4>雲端點餐 <i class="bcc-new new"></i></h4></div></a></div>'
        ],
        photo: [
          '<div><div class="prod-img"><img src="../asset/image/jmenu/b1pos-icon.jpg" alt=""></div><h4>櫃檯收銀 B1POS</h4><p></p><a href="../software/xin_software_b1pos.php" title="">了解更多</a></div>'
        ]
      },
      {
        title: '<a href="../software/xin_software_webmenu.php">雲端點餐 webmenu</a>',
        cells: [
          '<div><a href="../software/xin_software_webmenu.php" class="prod-feature first-title"><div class="img-icon jabezpos-icon"></div><div class="f-content"><h4>軟體概觀</h4></div></a></div>',
          '<div class="sub-group">功能模組</div>',
          '<div><a href="../feature/xin_feature_payment.php" class="prod-feature"><div class="f-icon bcc-payment"></div><div class="f-content"><h4>多元支付 <i class="bcc-new new"></i></h4></div></a></div>',
          '<div><a href="../feature/xin_feature_invoice.php" class="prod-feature"><div class="f-icon bcc-invoice"></div><div class="f-content"><h4>電子發票 <i class="bcc-new new"></i></h4></div></a></div>',
          '<div><a href="../feature/xin_feature_mobile-order.php" class="prod-feature"><div class="f-icon bcc-webmenu"></div><div class="f-content"><h4>雲端點餐 <i class="bcc-new new"></i></h4></div></a></div>'
        ],
        photo: [
          '<div><div class="prod-img"><img src="../asset/image/jmenu/webmenu_icon.jpg" alt=""></div><h4>雲端點餐 webmenu</h4><p></p><a href="../software/xin_software_webmenu.php" title="">了解更多</a></div>'
        ]
      },
      {
        title: '<a href="../software/xin_software_kds.php">雲端廚房 KDS</a>',
        cells: [
          '<div><a href="../software/xin_software_kds.php" class="prod-feature first-title"><div class="img-icon jabezpos-icon"></div><div class="f-content"><h4>軟體概觀</h4></div></a></div>',
          '<div class="sub-group">功能模組</div>',
          '<div><a href="../feature/xin_feature_mobile-order.php" class="prod-feature"><div class="f-icon bcc-webmenu"></div><div class="f-content"><h4>雲端點餐 <i class="bcc-new new"></i></h4></div></a></div>'
        ],
        photo: [
          '<div><div class="prod-img"><img src="../asset/image/jmenu/kds_icon.jpg" alt=""></div><h4>雲端廚房 KDS</h4><p></p><a href="../software/xin_software_kds.php" title="">了解更多</a></div>'
        ]
      },
      {
        title: '<a href="../software/xin_software_jabezpos_overview.php">雲端後台 JabezPOS</a>',
        cells: [
          '<div><a href="../software/xin_software_jabezpos_overview.php" class="prod-feature first-title"><div class="img-icon jabezpos-icon"></div><div class="f-content"><h4>軟體概觀</h4></div></a></div>',
        ],
        photo: [
          '<div><div class="prod-img"><img src="../asset/image/jmenu/jabezpos-icon.jpg" alt=""></div><h4>雲端後台 JabezPOS</h4><p></p><a href="../software/xin_software_jabezpos_overview.php" title="">了解更多</a></div>'
        ]
      },
      // {
      //   title: '<a href="javascript:;">Cloud2ERP</a>',
      //   cells: [
      //     '<div><a href="javascript:;" class="prod-feature first-title"><div class="img-icon jabezpos-icon"></div><div class="f-content"><h4>軟體概觀</h4></div></a></div>',
      //   ],
      //   photo: [
      //     '<div><div class="prod-img"><img src="../asset/image/jmenu/cloud2erp-icon.jpg" alt=""></div><h4>Cloud2ERP</h4><p></p><a href="javascript:;" title="">了解更多</a></div>'
      //   ]
      // }
    ],
    hardware_menu: [{
        title: '<a href="javascript:;">行動設備</a>',
        // subtitle: "POS 設備",
        cells: [
          //'<div class="sub-group">行動設備</div>',
          '<div><a data-target="#v1" class="prod-feature" href="../hardware/xin_hardware_v1.php"><div class="f-content pl-20"><h4>行動收銀機 V1</h4></div></a></div>',
          '<div><a data-target="#x990" class="prod-feature" href="../hardware/xin_hardware_x990.php"><div class="f-content pl-20"><h4>行動收銀機 X990</h4></div></a></div>',
          '<div><a data-target="#aposA8" class="prod-feature" href="../hardware/xin_hardware_apos-a8.php"><div class="f-content pl-20"><h4>行動收銀機 APOS A8</h4></div></a></div>'
          
        ],
        photo: [
          '<div id="v1" class="datatarget"><div class="prod-img"><img src="../asset/image/jmenu/mobile_pos.jpg" alt=""></div><h4>行動收銀機 V1</h4><p>5.5 寸超大螢幕，不怕老花眼看不清楚，同時開啟 10 個應用程式依然流暢。大容量電池連續工作長達 48 小時，待機高達 30 天以上。</p><a href="../hardware/xin_hardware_v1.php" title="">了解更多</a></div>',
          '<div id="x990" class="datatarget"><div class="prod-img"><img src="../asset/image/jmenu/prod_invoice.jpg" alt=""></div><h4>行動收銀機 X990</h4><p>5.5 寸超大螢幕，不怕老花眼看不清楚，同時開啟 10 個應用程式依然流暢。大容量電池連續工作長達 48 小時，待機高達 30 天以上。</p><a href="../hardware/xin_hardware_v1.php" title="">了解更多</a></div>',
          '<div id="aposA8" class="datatarget"><div class="prod-img"><img src="../asset/image/jmenu/APOS_A8.jpg" alt=""></div><h4>行動收銀機 APOS A8</h4><p>5.5吋大螢幕，四核心高速處理器，支援多種支付模式，大容量鋰電池，續航能力強，內建高速出單機，可印電子發票。</p><a href="../hardware/xin_hardware_apos-a8.php" title="">了解更多</a></div>',
          '<div id="hardware_menu_10" class="datatarget active"><div class="prod-img"><img src="../asset/image/jmenu/hardware.jpg" alt=""></div><h4>行動設備</h4><p>機身輕巧簡潔，大電量電池，<br>在移動場景中更加突顯它的功能性和實用性。</p></div>'
        ]
      },
      {
        title: '<a href="javascript:;">櫃檯設備</a>',
        // subtitle: "POS 設備",
        cells: [
          //'<div class="sub-group">櫃檯設備</div>',
          '<div><a data-target="#t80" class="prod-feature" href="../hardware/xin_hardware_t80.php"><div class="f-content pl-20"><h4>櫃檯收銀機 T80</h4></div></a></div>',
          '<div><a data-target="#t1" class="prod-feature" href="../hardware/xin_hardware_t1.php"><div class="f-content pl-20"><h4>櫃檯收銀機 T1</h4></div></a></div>',
          '<div><a data-target="#h10" class="prod-feature" href="../hardware/xin_hardware_h10.php"><div class="f-content pl-20"><h4>櫃檯收銀機 H10</h4></div></a></div>',
          '<div><a data-target="#v8" class="prod-feature" href="../hardware/xin_hardware_v8.php"><div class="f-content pl-20"><h4>櫃檯收銀機 V8</h4></div></a></div>'
          
        ],
        photo: [
          '<div id="t80" class="datatarget"><div class="prod-img"><img src="../asset/image/jmenu/restaurant_prod_01.jpg" alt=""></div><h4>櫃檯收銀機 T80</h4><p>15.6吋超大雙螢幕，內建高速出單機，超强擴展，高效兼容。</p><a href="../hardware/xin_hardware_t80.php" title="">了解更多</a></div>',
          '<div id="t1" class="datatarget"><div class="prod-img"><img src="../asset/image/jmenu/retail_prod_02.jpg" alt=""></div><h4>櫃檯收銀機 T1</h4><p>高通驍龍， 8 核處理器，業界首創，雙螢幕雙系統，貼心的一體式配置。</p><a href="../hardware/xin_hardware_t1.php" title="">了解更多</a></div>',
          '<div id="h10" class="datatarget"><div class="prod-img"><img src="../asset/image/jmenu/h10.jpg" alt=""></div><h4>櫃檯收銀機 H10</h4><p>獨特的電源開關模式設計，內建高速出單機，帶有自動切刀的 80mm 高速熱感列印，可快速列印並切出多張票據。</p><a href="../hardware/xin_hardware_h10.php" title="">了解更多</a></div>',
          '<div id="v8" class="datatarget"><div class="prod-img"><img src="../asset/image/jmenu/v8.jpg" alt=""></div><h4>櫃檯收銀機 V8</h4><p>垂直電容式不占空間小巧的機身，獨特的垂直電容式液晶顯示螢幕，讓商品顯示的筆數更多，更符合查看的便利性。</p><a href="../hardware/xin_hardware_v8.php" title="">了解更多</a></div>',
          '<div id="hardware_menu_10" class="datatarget active"><div class="prod-img"><img src="../asset/image/jmenu/hardware.jpg" alt=""></div><h4>櫃檯設備</h4><p>一體成型的專業收銀設備，可自由組合搭配，滿足不同行業需求。</p></div>'
        ]
      },
      {
        title: '<a href="../hardware/xin_hardware_peripheral.php">周邊設備</a>',
        // subtitle: "周邊設備",
        cells: [
          '<div><a data-target="#peripherals_1" class="prod-feature phs" href="../hardware/xin_hardware_peripheral.php#receipt-printer"><div class="f-content pl-20"><h4>熱感式出單機</h4></div></a></div>',
          '<div><a data-target="#peripherals_2" class="prod-feature phs" href="../hardware/xin_hardware_peripheral.php#label-printer"><div class="f-content pl-20"><h4>熱感條碼標籤機</h4></div></a></div>',
          '<div><a data-target="#peripherals_3" class="prod-feature phs" href="../hardware/xin_hardware_peripheral.php#invoice-printer"><div class="f-content pl-20"><h4>熱感式電子發票機</h4></div></a></div>',
          '<div><a data-target="#peripherals_4" class="prod-feature phs" href="../hardware/xin_hardware_peripheral.php#barcode-scanner"><div class="f-content pl-20"><h4>條碼掃描器</h4></div></a></div>',
          '<div><a data-target="#peripherals_5" class="prod-feature phs" href="../hardware/xin_hardware_peripheral.php#cash-drawer"><div class="f-content pl-20"><h4>錢櫃</h4></div></a></div>'
        ],
        photo: [
          '<div id="peripherals_1" class="datatarget"><div class="prod-img"><img src="../asset/image/jmenu/bp-t3bh.jpg" alt=""></div><h4>熱感式出單機</h4><p>TP-260 是一台輕鬆高速列印的熱感式出單機，具有高達 260 毫米打印速度。</p><a href="../hardware/xin_hardware_peripheral.php#receipt-printer" title="">了解更多</a></div>',
          '<div id="peripherals_2" class="datatarget"><div class="prod-img"><img src="../asset/image/jmenu/godex-dt2.jpg" alt=""></div><h4>熱感條碼標籤機</h4><p>熱感條碼標籤機:列印效能全面升級 解析度 203 dpi (8 dots / mm)。</p><a href="../hardware/xin_hardware_peripheral.php#label-printer" title="">了解更多</a></div>',
          '<div id="peripherals_3" class="datatarget"><div class="prod-img"><img src="../asset/image/jmenu/invoice-printer.jpg" alt=""></div><h4>熱感式電子發票機</h4><p>熱感式電子發票機:快速列印，畫質清晰 列印速度 Max 170 mm / sec。</p><a href="../hardware/xin_hardware_peripheral.php#invoice-printer" title="">了解更多</a></div>',
          '<div id="peripherals_4" class="datatarget"><div class="prod-img"><img src="../asset/image/jmenu/scanner.jpg" alt=""></div><h4>條碼掃描器</h4><p>條碼掃描器:隨插即用，無須安裝 解碼能力 識讀所有標準一維碼。</p><a href="../hardware/xin_hardware_peripheral.php#barcode-scanner" title="">了解更多</a></div>',
          '<div id="peripherals_5" class="datatarget"><div class="prod-img"><img src="../asset/image/jmenu/cashbox.jpg" alt=""></div><h4>錢櫃</h4><p>錢櫃:經濟簡約造型 尺寸 340 x 380 x 100 mm。</p><a href="../hardware/xin_hardware_peripheral.php#cash-drawer" title="">了解更多</a></div>',
          '<div id="hardware_menu_11" class="datatarget active"><div class="prod-img"><img src="../asset/image/jmenu/peripherals.jpg" alt=""></div><h4>周邊設備</h4><p>周邊設備:熱感式出單機、熱感條碼標籤機、熱感式電子發票機、條碼掃描器、錢櫃。</p></div>'
        ]
      }
    ]
  }

  // 首頁 menu 路徑
  //function menuSrc() {
      // alert(1);
       // 首頁 menu 路徑
      //if ($('body').is('#index')) {
        // 圖片路徑
        // $('#menu img').each(function() {
        //   var $this = $(this);
        //   $(this).attr('src', $this.attr('src').replace('../asset/image/', 'asset/image/'));
        // });
        // 連結路徑
        // $('#menu a').each(function() {
        //   var $this = $(this);
        //   $(this).attr('href', $this.attr('href').replace('../', ''));
        // });
        // $('#header a').each(function() {
        //   var $this = $(this);
        //   $(this).attr('href', $this.attr('href').replace('', '../'));
        // });
      //}
      // 內頁 menu 路徑
      //if (!$('body').is('#index')) {
        // $('body').find('#menu img').attr('src').replace('image/', '../image/');
      //}
    
  //}


  // 滑出主選單
  $(document).on("mouseover", '#header nav.desktop ul > li > a', function() {
    currentHeader = this.id;
    if (typeof menu[this.id] == "object") {
      renderLeft(this.id);
      $(".menu").addClass("show");
      $(this).addClass('active').parent().siblings().children().removeClass('active').removeClass('at');
      //$(".menu").css({"z-index": "9999"});
      // var t = $('header').height();
      // $('.menu').css({'top':t});
      clearTime();
    }
    //menuSrc();
  });


  $(document).on("mouseout", '#header nav.desktop ul > li > a', function() {
    OnHashChange();
  });
  // 第一欄位選單
  $(document).on("mouseover", 'ul.prod-nav > li > a, ul.feature-nav > li > a', function() {
    //clearTime();
    $('ul.prod-nav > li > a.active').removeClass("active");
    $(this).addClass("active");
    var arr = this.id.split("_");
    var id = null;
    if (arr.length > 0){
      id = arr[arr.length - 1];
	}
    if (typeof id == "string") {
      renderRight(parseInt(id, 10));
    }
    //menuSrc();
  });
  // 第二欄位選單
  $(document).on("mouseover", '.prod-nav li a, .feature-nav a', function() {
    $($(this).attr("data-target")).addClass('active').siblings().removeClass('active');
    //$($(this).attr("data-target")).fadeIn(200).siblings().fadeOut(0);
  });
  $(document).on("mouseover", '.menu', function() {
    $('#header nav.desktop ul > li > a').removeClass('at');
    clearTime();
    //menuSrc();
  });
  $(document).on("mouseout", '.menu, #header nav.desktop ul > li > a', function() {
    clearTime();
    idShowme();
  });
  // ipad 選單右上角 關閉按鈕
  $(document).on("click", '#btn_closemenu', function() {
    clearTime();
    idShowme();
  });
	
  // emily
  //$("#restaurant_menu").attr("href","#product_restaurant");// #showPagesA是一个a标签  #accountListDiv是要跳到位置的id值
  //document.getElementById("restaurant_menu").click();// a标签实现点击然后跳转到指定位置

  function idShowme() {
    idShow = setTimeout(function() {
      $(".menu").removeClass("show");
      OnHashChange();
      setTimeout(function() {
        $('#header nav.desktop ul > li > a').removeClass('active');
      }, 500);
      // setTimeout(function(){
      // 	$(".menu").css({"z-index": "9999"})
      // 	var t = $('header').height();
      // 	$('.menu').css({'top':t});
      // }, 500);
    }, 300);
  }

  function clearTime() {
    if (idShow != null) {
      clearTimeout(idShow);
      idShow = null;
    }
  }

  function renderLeft(id) {
    $(".prod-nav").html("");
    var arr = menu[id];
    var first = -1;
    for (var i = 0; i < arr.length; i++) {
      if (typeof arr[i] == "string") {
        $(".prod-nav").append(arr[i]);
      } else {
        var props = (first == -1 ? "class='active'" : "") + " id='" + id + "_" + i + "' " +
          (typeof arr[i].href == "string" && arr[i].href.length > 0 ? "href='" + arr[i].href + "' " : "");
        if (i == 2) console.log(props)
        var props2 = (first == -1 ? "class='active'" : "") + " data-target='" + "#" + id + "_" + (i + 10) + "' " +
          (typeof arr[i].href == "string" && arr[i].href.length > 0 ? "href='" + arr[i].href + "' " : "");
        if (i == 2) console.log(props2)

        var a = (arr[i].title.indexOf("<a") == -1 && arr[i].title.indexOf("</a>") == -1) ?
          "<a " + props + props2 + ">" + arr[i].title + "</a>" :
          arr[i].title.replace("<a", "<a " + props + props2 + "active");
        var li = $("<li >" + a + "</li>").appendTo(".prod-nav");
        if (i == 2) console.log($(li).html())
        if (first == -1) first = i;
      }
    }
    renderRight(first);
  }

  function renderRight(index) {
    $(".display-area > .feature-nav").html("");
    $(".display-area > .title").html("");
    $(".display-area > .prod-info").html("");
    if (typeof menu[currentHeader] == "object") {
      $(".display-area > .title").html(menu[currentHeader][index].subtitle);
      if (typeof menu[currentHeader][index].html == "string") {
        $(".display-area > .feature-nav").html(menu[currentHeader][index].html);
      } else if (Array.isArray(menu[currentHeader][index].cells)) {
        var arr = menu[currentHeader][index].cells;
        var photo = menu[currentHeader][index].photo;
        for (var i = 0; i < arr.length; i++) {
          $(".display-area > .feature-nav").append(arr[i]);
        }
        for (var i = 0; i < photo.length; i++) {
          $(".display-area > .prod-info").append(photo[i]);
        }
      }
    }
    $(".display-area > .title").css({
      display: $(".display-area > .title").html().length == 0 ? "none" : "block"
    });

  }


  $("div.menu").css({
    dispaly: "none",
    height: "0px",
  });


  $(document).on("click", 'a.prod-feature', function() {
    $('#btn_closemenu').trigger("click");
  });

  // 硬體-周邊設備 #連結
  $(document).on("click", 'a.phs h4', function() {
    $('#btn_closemenu').trigger("click");
  });

  $(document).on("click", '.menu a', function() {
    $('#btn_closemenu').trigger("click");
  });



  // 如果選單是show的狀態, 就先停止flexslider的動畫, 當選單收起來時, 再開始flexslider
  // $('.flex-slider').flexslider('pause');
  // $('.flex-slider').flexslider('play');
}

function bannerBgswop() {
  var time = 350;
  $('body').find('.banner-solution-food-content').animate({
    'opacity': 1,
    'z-index': 1
  }, time);
  $(document).on('mouseover', 'a.solution-food-nav', function(e) {
    e.preventDefault();
    $('body').find('.banner-solution-retail-content').animate({
      'opacity': 0,
      'z-index': 0
    }, time + 30);
    $('body').find('.banner-solution-food-content').animate({
      'opacity': 1,
      'z-index': 1
    }, time);
    $('body').find('.solution-retail-nav').removeClass('active');
    $(this).addClass('active');
  });
  $(document).on('mouseover', 'a.solution-retail-nav', function(e) {
    e.preventDefault();
    $('body').find('.banner-solution-food-content').animate({
      'opacity': 0,
      'z-index': 0
    }, time + 30);
    $('body').find('.banner-solution-retail-content').animate({
      'opacity': 1,
      'z-index': 1
    }, time);
    $('body').find('.solution-food-nav').removeClass('active');
    $(this).addClass('active');
  });
  // 自動切換

}

function OnHashChange() {
  $(window).bind('hashchange', function() {
    var location = window.location;
    var hash = location.hash;
    //var target = hash.replace('#', '');
    var lastItem = location.href.substr(location.href.lastIndexOf('?') + 1); // 取得網址 最後一個項目
    var target = '?' + lastItem;

    if ($('body').find('[data-tab-nav="' + target + '"]').parents().hasClass('header')) {
      window.location == $(this).attr('[data-tab-nav]');
    }

    //setTimeout(function() {
    $('body').find('[data-tab-nav="' + target + '"]').parents().siblings().children().removeClass('active');
    $('body').find('[data-tab-nav="' + target + '"]').addClass('active');
    $('body').find('[data-tab-content="' + target + '"]').siblings('[data-tab-content]').removeClass('active');
    $('body').find('[data-tab-content="' + target + '"]').addClass('active');
	//$('body').find('[data-tab="' + target + '"]').siblings('[data-tab]').removeClass('active'); // emily test
	//$('body').find('[data-tab="' + target + '"]').addClass('active');
    if ($('[data-tab-content="' + target + '"]').hasClass('active')) {
      var content = $('[data-tab-content="' + target + '"]').attr('data-standby-html');
      $('[data-tab-content="' + target + '"]').attr('w3-include-html', content);
    }

    var hasParent = $('body').find('[data-tab-nav="' + target + '"]').closest('[data-tab-content]').attr('data-tab-content');
    $('body').find('[data-tab-nav="' + hasParent + '"]').parents().siblings().children().removeClass('active');
    $('body').find('[data-tab-nav="' + hasParent + '"]').addClass('active');
    $('body').find('[data-tab-content="' + hasParent + '"]').siblings('[data-tab-content]').removeClass('active');
    $('body').find('[data-tab-content="' + hasParent + '"]').addClass('active');
    if ($('[data-tab-content="' + hasParent + '"]').hasClass('active')) {
      var hasParent_content = $('[data-tab-content="' + hasParent + '"]').attr('data-standby-html');
      $('[data-tab-content="' + hasParent + '"]').attr('w3-include-html', hasParent_content);
    }

    var Parent = $('body').find('[data-tab-nav="' + target + '"]').closest('[data-tab-content]').parents('[data-tab-content]').attr('data-tab-content');
    $('body').find('[data-tab-nav="' + Parent + '"]').addClass('active');
    if ($('[data-tab-content="' + Parent + '"]').hasClass('active')) {
      var Parent_content = $('[data-tab-content="' + Parent + '"]').attr('data-standby-html');
      $('[data-tab-content="' + Parent + '"]').attr('w3-include-html', Parent_content);
    }
    //}, 50);


    // 網址與頁面對應的 選單狀態 (.header .nav a.at)  (第一層)
    if (window.location.toString().indexOf("xin_retail-solution") != -1) {
      $('#header nav ul li a[id="retial_menu"]').addClass('at').siblings().children().removeClass('at');
    }
    if (window.location.toString().indexOf("xin_restaurant-solution") != -1) {
      $('#header nav ul li a[id="restaurant_menu"]').addClass('at').siblings().children().removeClass('at');
    }
    if (window.location.toString().indexOf("software_") != -1) {
      $('#header nav ul li a[id="software_menu"]').addClass('at').siblings().children().removeClass('at');
    }
    if (window.location.toString().indexOf("hardware_") != -1 || window.location.toString().indexOf("xin_hardware_peripheral.html") != -1) {
      $('#header nav ul li a[id="hardware_menu"]').addClass('at').siblings().children().removeClass('at');
    }
    if (window.location.toString().indexOf("case") != -1) {
      $('#header nav ul li a[href="../case/xin_case.php"]').addClass('at').siblings().children().removeClass('at');
    }
    if (window.location.toString().indexOf("about-us") != -1) {
      $('#header nav ul li a[href="../about-us/xin_about-us.php"]').addClass('at').siblings().children().removeClass('at');
    }
    if (window.location.toString().indexOf("news") != -1) {
      $('#header nav ul li a[href="../news/xin_news_list.php"]').addClass('at').siblings().children().removeClass('at');
    }
    if (window.location.toString().indexOf("support") != -1) {
      $('#header nav ul li a[href="../support/xin_support.php"]').addClass('at').siblings().children().removeClass('at');
    }
    //  智能餐飲 & 智能零售 (第二層)
    if (window.location.toString().indexOf("restaurant-solution") != -1) {
      $('#main-nav ol li a[href="../solution/xin_restaurant-solution.php"]').addClass('active').siblings().children().removeClass('active');
    }
    if (window.location.toString().indexOf("retail-solution") != -1) {
      $('#main-nav ol li a[href="../solution/xin_retail-solution.php"]').addClass('active').siblings().children().removeClass('active');
    }
    if (window.location.toString().indexOf("mobile-order") != -1) {
      $('#main-nav ol li a[href="../product/xin_product_mobile-order.php"]').addClass('active').siblings().children().removeClass('active');
    }
    if (window.location.toString().indexOf("kiosk") != -1) {
      $('#main-nav ol li a[href="../product/xin_product_kiosk.php"]').addClass('active').siblings().children().removeClass('active');
    }
    if (window.location.toString().indexOf("mobile-pos") != -1) {
      $('#main-nav ol li a[href="../product/xin_product_restaurant_mobile-pos.php"]').addClass('active').siblings().children().removeClass('active');
      $('#main-nav ol li a[href="../product/xin_product_retail_mobile-pos.php"]').addClass('active').siblings().children().removeClass('active');
    }
    if (window.location.toString().indexOf("restaurant_pos") != -1) {
      $('#main-nav ol li a[href="../product/xin_product_restaurant_pos.php"]').addClass('active').siblings().children().removeClass('active');
    }
    if (window.location.toString().indexOf("retail_pos") != -1) {
      $('#main-nav ol li a[href="../product/xin_product_retail_pos.php"]').addClass('active').siblings().children().removeClass('active');
    }
    if (window.location.toString().indexOf("kitchen") != -1) {
      $('#main-nav ol li a[href="../product/xin_product_kitchen-display-system.php"]').addClass('active').siblings().children().removeClass('active');
    }
    if (window.location.toString().indexOf("lightning-delivery") != -1) {
      $('#main-nav ol li a[href="../product/xin_product_lightning-delivery.php"]').addClass('active').siblings().children().removeClass('active');
    }
    if (window.location.toString().indexOf("jabezpos") != -1) {
      $('#main-nav ol li a[href="../product/xin_product_restaurant_jabezpos.php"]').addClass('active').siblings().children().removeClass('active');
      $('#main-nav ol li a[href="../product/xin_product_retail_jabezpos.php"]').addClass('active').siblings().children().removeClass('active');
    }
    if (window.location.toString().indexOf("member") != -1) {
      $('#main-nav ol li a[href="../product/xin_product_member.php"]').addClass('active').siblings().children().removeClass('active');
    }
    // 軟體 - 雲端後台 JabezPOS (第二層)
    if (window.location.toString().indexOf("jabezpos_overview") != -1) {
      $('#main-nav ol li a[href="../software/xin_software_jabezpos_overview.php"]').addClass('active').siblings().children().removeClass('active');
    }
    if (window.location.toString().indexOf("jabezpos_feature") != -1) {
      $('#main-nav ol li a[href="../software/xin_software_jabezpos_feature.php"]').addClass('active').siblings().children().removeClass('active');
    }
    if (window.location.toString().indexOf("jabezpos_price") != -1) {
      $('#main-nav ol li a[href="../software/xin_software_jabezpos_price.php"]').addClass('active').siblings().children().removeClass('active');
    }
    if (window.location.toString().indexOf("jabezpos_video") != -1) {
      $('#main-nav ol li a[href="../software/xin_software_jabezpos_video.php"]').addClass('active').siblings().children().removeClass('active');
    }
    if (window.location.toString().indexOf("jabezpos_related-introduction") != -1) {
      $('#main-nav ol li a[href="../software/xin_software_jabezpos_related-introduction.php"]').addClass('active').siblings().children().removeClass('active');
    }


  });
  $(window).trigger('hashchange');
}

function dataTab() { // <div class="Controller-tab">[data-tab-nav="el"] [data-tab-content="el"]</div>
  $(document).on('click', '[data-tab-nav]', function(e) {
    e.preventDefault();
    var target = $(this).attr('data-tab-nav');
    //window.location.hash = target; // 網址加上頁面標籤
    history.replaceState({}, document.title, target);
    var content = $('[data-tab-content="' + target + '"]').attr('data-standby-html');
    // removeClass
    $(this).parents().siblings().children().removeClass('active');
    $('body').find('[data-tab-content="' + target + '"]').siblings('[data-tab-default-content]').removeClass('active');
    $('body').find('[data-tab-content="' + target + '"]').siblings('[data-tab-content]').removeClass('active');
    // addClass
    $(this).addClass('active');
    $('body').find('[data-tab-content="' + target + '"]').addClass('active').attr('w3-include-html', content); // 當點了才載入 html (不要全部載入隱藏的 content)
    // 不是主選單的連結按鈕
    if ($(this).hasClass('target-active')) {
      $(this).parents().find('nav a').removeClass('active');
      $(this).parents().find('nav a[href="#' + target + '"]').addClass('active');
    }
//     show default content
//     if ($(this).hasClass('default-nav')) {
//       $('body').find('[data-tab-default-content="' + target + '"]').siblings('[data-tab-content]').removeClass('active');
//       $('body').find('[data-tab-default-content="' + target + '"]').addClass('active');
//       $('body').find('.product-nav ol li').removeClass('active');
//	  $('body').find('ol li').addClass('active');
//     }
//     header nav
    if ($(this).parents().hasClass('header') || $(this).parents().hasClass('menu')) {
      window.location.hash = ' ';
      window.location.hash = target;
      $('#menu').removeClass('show');
    }
    //paginationBottom_aside();
    setTimeout(function() {
      w3.includeHTML();
    }, 10);
  });
}

function imgSrcHeaderFooter() {
  if ($('body').is('#index')) {
    // 首頁 header 連結路徑
    $('#header a').each(function() {
      var $this = $(this);
      $(this).attr('href', $this.attr('href').replace('../', ''));
    });
    // 首頁 footer 連結路徑
    $('#footer .link a').each(function() {
      var $this = $(this);
      $(this).attr('href', $this.attr('href').replace('../', ''));
    });
  }
}

function fixedHeader() {
  var header = $('#header');
  var main_nav = $('#main-nav');
  var sub_nav_1 = $('nav.sub-nav-1');
  var sub_nav_2 = $('nav.sub-nav-2');
  var product_nav = $('nav.product-nav');
  var header_banner = $('.header_banner');
  var header_height = header.height();
  var main_nav_height = main_nav.height();
  var header_banner_height = header_banner.height();
  var sub_nav_1_height = sub_nav_1.height();
  var sub_nav_1_next = sub_nav_1.siblings('[data-tab-content]');
  var sub_nav_2_height = sub_nav_2.height();
  var sub_nav_2_next = sub_nav_2.next().find('[data-tab-content]');
  var product_nav_heigh = product_nav.height();
  var banner_height = header_height + main_nav_height + header_banner_height

  if ($('main').find('nav').hasClass('sub-nav-1')) {
    $(window).scroll(function() {
      // header & main-nav
      if ($(this).scrollTop() > (banner_height / 2)) {
        header.fadeOut(200).stop().animate({
          'top': -(header_height + 5)
        }, 0);
        main_nav.fadeOut(200).stop().animate({
          'top': -(main_nav_height + 5)
        }, 0);
      } else if ($(this).scrollTop() < (banner_height / 2)) {
        header.stop().animate({
          'top': 0
        }, 0).fadeIn(350);
        main_nav.animate({
          'top': header_height
        }, 0).fadeIn(350);
      }
      // .sub-nav-1
      if ($(this).scrollTop() >= banner_height) {
        sub_nav_1.addClass('effect_fixed');
        sub_nav_1_next.css({
          'padding-top': sub_nav_1_height
        });
      } else if ($(this).scrollTop() < banner_height) {
        sub_nav_1.removeClass('effect_fixed');
        sub_nav_1_next.css({
          'padding-top': 0
        });
      }
    });
  }
  if ($('main').find('nav').hasClass('sub-nav-2')) {
    $(window).scroll(function() {
      // header & main-nav
      if ($(this).scrollTop() > (banner_height / 2.5)) {
        header.fadeOut(200).stop().animate({
          'top': -(header_height + 5)
        }, 0);
        main_nav.fadeOut(200).stop().animate({
          'top': -(main_nav_height + 5)
        }, 0);
      } else if ($(this).scrollTop() < (banner_height / 2.5)) {
        header.stop().animate({
          'top': 0
        }, 0).fadeIn(350);
        main_nav.stop().animate({
          'top': header_height
        }, 0).fadeIn(350);
      }
      // product-nav & .sub-nav-2
      if ($(this).scrollTop() >= banner_height) {
        product_nav.addClass('effect_fixed');
        sub_nav_2.addClass('effect_fixed').css({
          'top': product_nav_heigh
        });
        sub_nav_2_next.css({
          'padding-top': (product_nav_heigh + sub_nav_2_height)
        });

      } else if ($(this).scrollTop() < banner_height) {
        product_nav.removeClass('effect_fixed');
        sub_nav_2.removeClass('effect_fixed').css({
          'top': 0
        });
        sub_nav_2_next.css({
          'padding-top': 0
        });
      }
    });
  }
}

function subNavClick() {
  $(document).on('click', 'nav.sub-nav-1 a, nav.sub-nav-2 a', function() {
    //e.preventDefault();
    var here;
    if ($('nav.sub-nav-1').hasClass('effect_fixed') || $('nav.sub-nav-2').hasClass('effect_fixed')) {
      if ($('nav.sub-nav-1').length || $('nav.sub-nav-2').length) {
        here = $('#header').height() + $('#main-nav').height() + $('.header_banner').height();
      }
    } else {
      if ($('nav.sub-nav-1').length || $('nav.sub-nav-2').length) {
        here = $(this).offset().top;
      }
    }
    $("html, body").stop().animate({
      scrollTop: here
    }, 250);
  });
}

function productImgHover() {
  $(document).on('mouseover', '.product-nav-img a, .product-nav a', function() {
    var index = $(this).parent().index() + 1;
    $('.product-nav a').removeClass('active');
    $('body').find('.product-nav li:nth-child(' + index + ') a').addClass('active');
  });
  $(document).on('mouseout', '.product-nav-img a, .product-nav a', function() {
    var active = $('.product-nav-img a.active').parent().index() + 1;
    $('.product-nav a').removeClass('active');
    $('body').find('.product-nav li:nth-child(' + active + ') a').addClass('active');
  });
}

function scroll_top() {
  $(document).on('click', 'a.scroll-to-top', function() {
    $("html, body").animate({
      scrollTop: 0
    }, "slow");
    $('body').find($($.attr(this, 'href'))).trigger('click');

  });
}

function at_top() {
  $(document).on('click', 'a.at-top', function() {
    $(window).scrollTop(0);
  });
}

function btn_active() {
  $(document).on('click', '#counter_bpos-btn', function() {
    $('body').find('[data-tab-nav="counter_bpos"]').addClass('active');
  });
}

function dataTriggerClick() {
  $(document).on('click', '[data-trigger-click]', function(e) {
    e.preventDefault();
    var target = $(this).attr('data-trigger-click');
    $(target).trigger('click');
  });
}

function dataToggleNav() {
  // <div class="Toggle-nav">[data-toggle-nav="el"] [data-toggle-content="el"]</div>
  $(document).on('click', '[data-toggle-nav]', function(e) {
    e.preventDefault();
    var target_nav = $(this).attr('data-toggle-nav');
    // toggleClass
    $(this).toggleClass('active');
    $('body').find('[data-toggle-content]').not('[data-toggle-content="' + target_nav + '"]').removeClass('active'); // 除了自身區塊以外的 data-toggle 都要關閉
    $('body').find('[data-toggle-content="' + target_nav + '"]').toggleClass('active');
  });
  // 子項目 當click 要關閉 其 下拉選單
  $(document).on('click', '[data-toggle-content] li a', function() {
    //e.preventDefault();
    if ($(window).width() <= 990) {
      $(this).parents('[data-toggle-content]').removeClass('active');
    }
  });
}

function menuActive() {
  var p = window.location.pathname;
  if (p.length === 0 || p === "/" || p.match(/^\/?index/)) {
    $('#nav_jabez li a').removeClass('active');
    $('#nav_jabez li:first-child a').addClass('active');
  } else {
    //$('#nav_jabez li a[href*="' + location.pathname.split("/")[1] + '"]').addClass('active');
    $('#nav_jabez li a[href*="' + location.pathname.split("/")[2] + '"]').addClass('active');
  }
}

// 彈出視窗
function modalBox() {
  $(document).on('click', '[data-modal-btn]', function(e) {
    e.preventDefault();
    var target_btn = $(this).attr('data-modal-btn');
    $(this).parents('body').children().find('[data-modal-content]').css({
      'display': 'none'
    });
    $('[data-modal-content="' + target_btn + '"]').css({
      'display': 'block'
    });
  });
  $(document).on('click', '.modal-content .close', function(e) {
    e.preventDefault();
    $(this).parents('[data-modal-content]').css({
      'display': 'none'
    });
  });
  $(document).on('click', '.forget-password-modal', function(e) {
    e.preventDefault();
    $(this).parents('[data-modal-content]').css({
      'display': 'none'
    });
  });
}

function dataTooltip() {
  $(document).on('click', '*[data-tooltip]:not([data-tooltip=""])', function(e) {
    e.preventDefault();
    if ($(window).width() <= 990) {
      $('*[data-tooltip].active').not(this).removeClass('active');
      $(this).toggleClass('active');
    }
  });
}

function priceTable() {
  // JabezPOS雲端後台 - 價格表 (版面)
  if ($(window).width() >= 990) {
    $('#jabezpos_pricing .style-table thead tr th').attr('colspan', 1);
  } else if ($(window).width() <= 990) {
    $('#jabezpos_pricing .style-table thead tr th').attr('colspan', 2);
  }
  // 價格表 (手機板tab-nav)
  $(document).on('click', '.price-tab-nav ul li a', function(e) {
    e.preventDefault();
    $(window).trigger('resize');
    var target = $(this).attr('href');
    $('.price-tab-nav ul li a').removeClass('active');
    $(this).addClass('active');

    $('.style-table thead tr th').removeClass('active');
    $('#side_nav').addClass('active');
    $(target).addClass('active');
    // 對應的target區塊
    var re = /#/g;
    var result = target.replace(re, "");
    $('.style-table tbody td').removeClass('active');
    $('.style-table tbody td[data-title="side_nav"]').addClass('active');
    $('.style-table tbody td[data-title="' + result + '"]').addClass('active');
    // 注意事項
    if (result == 'version_free') {
      $('.style-table tfoot td[data-title="notice_list_a"]').addClass('active');
      $('.style-table tfoot td[data-title="notice_list_b"]').removeClass('active');
    } else {
      $('.style-table tfoot td[data-title="notice_list_a"]').removeClass('active');
      $('.style-table tfoot td[data-title="notice_list_b"]').addClass('active');
    }
  });
  // 價格表 (下載價格表)
  $(document).on('click', '#myBtn_price', function() {
    $('#canvas_box').css('visibility', 'visible');
    $('main#gotop').hide();
  });
  $(document).on('click', '.close', function() {
    $('#canvas_box').css('visibility', 'hidden');
    $('main#gotop').show();
  });
}

function footerAside() {
  $(window).scroll(function() {
    if ($(this).scrollTop() > $(window).height() + 200) {
      $('footer > aside').fadeIn(350);
    } else {
      $('footer > aside').fadeOut(350);
    }
  });
}

function ad() {
  // 清除 adbox Cookies
  //Cookies.remove('ADCookie');
  //
  var ADCookie = Cookies.get("ADCookie");

  // if (ADCookie == null) {
  //   setTimeout(function() {
  //     $('body#index').addClass('ADanimate');
  //   }, 800);
  // }

  $(document).on('click', '#ad_area .close, #ad_area a', function() {
    //e.preventDefault();
    Cookies.set('ADCookie', 'AD-show', {
      expires: 1
    });
    $(this).remove();
    setTimeout(function() {
      $('body#index').removeClass('ADanimate');
    }, 500, function() {
      $('#ad_area').remove();
    });
  });
  // 印出 Cookies
  //console.log(document.cookie);
}

function contactForm() {
  // 聯絡我們 快捷按鈕
   $(document).on('click', '#contact-hotkey', function(e) {
     e.preventDefault();
     $('html, body').stop().animate({
       scrollTop: $('#contact').offset().top - $('#header').height()
     }, 250);
   });
  // focus 效果
  $(document).on('focus', '#contactUs input', function(e) {
    e.preventDefault();
    var val = $(this).attr('placeholder');
    //var title = $(this).attr('title');
    if (!$(this).prev().hasClass('placeholder-title')) {
      $(this).before('<h4 class="placeholder-title">' + val + '</h4>');
    }
    if ($(window).width() >= 993) {
      $('.placeholder-title').animate({
        'fontSize': '15px',
        'top': '20px'
      }, 150);
    } else if ($(window).width() < 993) {
      $('.placeholder-title').animate({
        'fontSize': '15px',
        'top': '9px'
      }, 150);
    }
  });
  $(document).on('focusout', '#contactUs input', function(e) {
    e.preventDefault();
    if ($(this).val().length === 0) {
      $(this).prev().remove();
    }
  });
  $(document).on('change', '#contactUs select', function(e) {
    e.preventDefault();
    $(this).css({
      'color': '#36c'
    });
  });
  setTimeout(function() {
    $('body').find('#txtMail').next().addClass('sss');
  });
}

function mobileIcon() {
  $(document).on('click', '.cd-primary-nav a', function() {
    $('.cd-nav-trigger').trigger('click');
  });
}

function callback() {
  OnHashChange();

  // 概觀 flexslider + 文字動畫
  $('#page-jabezpos .flexslider').flexslider({
    animation: "slide",
    start: function(slider) {
      slider.slides.eq(slider.currentSlide).addClass('flex-active-transition');
    },
    before: function(slider) {
      slider.slides.eq(slider.currentSlide).removeClass('flex-active-transition');
    },
    after: function(slider) {
      slider.slides.eq(slider.currentSlide).addClass('flex-active-transition');
    }
  });

  $('[data-tab-content="jabezpos_overview"] .flexslider').flexslider({
    animation: "slide",
    start: function(slider) {
      slider.slides.eq(slider.currentSlide).addClass('flex-active-transition');
    },
    before: function(slider) {
      slider.slides.eq(slider.currentSlide).removeClass('flex-active-transition');
    },
    after: function(slider) {
      slider.slides.eq(slider.currentSlide).addClass('flex-active-transition');
    }
  });
}

function solutionSrc() {
      // alert(1);
       // 首頁 解決方案 banner 路徑
      if ($('body').is('#index')) {
        // $('.solution-banner img').each(function() {
        //   var $this = $(this);
        //   $(this).attr('src', $this.attr('src').replace('../', ''));
        // });
        // 連結路徑
        // $('.solution-banner a').each(function() {
        //   var $this = $(this);
        //   $(this).attr('href', $this.attr('href').replace('../', ''));
        // });
      }
      // 流程圖
      if (!$('body').is('.restaurant-solution')) {
        // 連結路徑
        $('.restaurant_solution_flow a').each(function() {
          var $this = $(this);
          $(this).attr('href', $this.attr('href').replace('../product/', ''));
        });
      }
  }


$(document).ready(function() {
  //w3.includeHTML(callback);

  OnHashChange(); // 網址與內容 綁定 事件

  dataTab(); // tab 效果
  dataToggleNav(); // toggle下拉選單效果
  dataTriggerClick(); // 觸發點擊事件
  dataTooltip(); // hover詳細說明 tooltip效果

  scroll_top(); // .scroll-to-top (滑動效果 至頂)
  at_top(); // .at-top (直接 至頂)

  jMenu(); // 網頁版 - jim大哥寫的 json menu
  mobileIcon(); // 手機版 - 選單 icon效果
  mobileMenu(); // 手機版 - menu (nav.js)

  imgSrcHeaderFooter(); // 首頁 header & footer 路徑指向
  menuActive(); // 主選單按鈕 active狀態
  subNavClick(); // 子選單 效果
  productImgHover(); // 產品圖片 hover效果
  fixedHeader(); // 固定選單效果

  ad(); // 首頁 最上方廣告區塊
  footerAside(); // 右下角快捷 (至頂 & 聯絡我們)

  FunSetContactUsForm(); // 聯絡我們表單 (連結外部js)
  contactForm(); // 聯絡我們表單 focus效果
 

  bannerBgswop(); // 首頁 hover(餐飲/零售) banner
  solutionSrc();
  priceTable(); // JabezPOS雲端後台 - 價格表
  modalBox(); // 彈出視窗 框架


  // $('#scrollspy').scrollSpy(); // 側邊導覽監聽



  //---------------------------------------------------------------------------
  // 最新消息 跑馬燈
  var $marqueeUl = $('#abgne_marquee ol'),
    $marqueeli = $marqueeUl.append($marqueeUl.html()).children(),
    _height = $('#abgne_marquee').height() * -1,
    scrollSpeed = 600,
    timer,
    speed = 7000 + scrollSpeed;

  // 幫左邊 $marqueeli 加上 hover 事件
  // 當滑鼠移入時停止計時器；反之則啟動
  $marqueeli.hover(function() {
    clearTimeout(timer);
  }, function() {
    timer = setTimeout(showad, speed);
  });

  // 控制跑馬燈移動的處理函式
  function showad() {
    var _now = $marqueeUl.position().top / _height;
    _now = (_now + 1) % $marqueeli.length;

    //  // $marqueeUl 移動
    $marqueeUl.animate({
      top: _now * _height
    }, scrollSpeed, function() {
      // 如果已經移動到第二組時...則馬上把 top 設 0 來回到第一組
      // 藉此產生不間斷的輪播
      if (_now == $marqueeli.length / 2) {
        $marqueeUl.css('top', 0);
      }
    });

    // 再啟動計時器
    timer = setTimeout(showad, speed);
  }

  // 啟動計時器
  timer = setTimeout(showad, speed);
  //---------------------------------------------------------------------------

  // 彈出影片
  $('.js-modal-btn').modalVideo();

  // 首頁 輪播
  $('#index_main-carouse').owlCarousel({
    center: true,
    loop: true,
    nav: true,
    dots: true,
    autoplay: true,
    autoplayTimeout: 6000,
    paginationSpeed: 6000,
    // autoplayHoverPause: true,
    items: 1
  })

  // jabezpos 概觀 輪播
  $('#jabezpos_overview-slider').owlCarousel({
    center: true,
    loop: true,
    nav: true,
    dots: true,
    autoplay: true,
    autoplayTimeout: 8000,
    paginationSpeed: 8000,
    autoplayHoverPause: true,
    items: 1
  })

  //---------------------------------------------------------------------------
  // 首頁 套裝產品
  $('.index_products .owl-carousel').owlCarousel({
    center: true,
    loop: false,
    nav: true,
    dots: true,
    margin: 10,
    responsiveClass: true,
    responsive: {
      0: {
        items: 2
      },
      760: {
        items: 6,
        margin: 20
      },
      1200: {
        items: 7,
        margin: 20
      }
    }
  })


  //-----------------------------------------------------------------------------
  // 側邊快捷
  $(window).scroll(function() {
    if ($(this).scrollTop() >= 600) {
      $('#aside_link').fadeIn(100);
    } else {
      $('#aside_link').stop().fadeOut(100);
    }
  });

  


});
////////////////////////////////////////////////////////////////////////////////
$(window).load(function() {});
////////////////////////////////////////////////////////////////////////////////
$(window).resize(function() {
  fixedHeader();
});

////////////////////////////////////////////////////////////////////////////////
