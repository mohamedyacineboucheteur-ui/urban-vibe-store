* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, sans-serif;
}

body {
    background-color: #f5f5f7;
    color: #222;
}

/* الشريط العلوي */
.top-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    padding: 10px 20px;
    font-size: 13px;
    border-bottom: 1px solid #e5e5e5;
}

.left-nav, .right-nav {
    display: flex;
    gap: 20px;
    align-items: center;
    color: #555;
    cursor: pointer;
}

.left-nav span.active {
    color: #ff5722;
    font-weight: bold;
}

/* مسار التنقل */
.breadcrumb {
    padding: 15px 20px;
    font-size: 13px;
    color: #666;
    background-color: #fff;
    border-bottom: 1px solid #eee;
}

.breadcrumb span {
    margin: 0 5px;
    color: #999;
}

/* الحاوية الرئيسية */
.product-page-container {
    display: flex;
    max-width: 1250px;
    margin: 20px auto;
    background: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.05);
    overflow: hidden;
    gap: 30px;
    padding: 25px;
}

/* قسم الوسائط والفيديو */
.product-media-section {
    flex: 1.1;
    position: relative;
}

.badge-top {
    background: linear-gradient(90deg, #ff7043, #ff5722);
    color: #fff;
    display: inline-block;
    padding: 6px 15px;
    border-radius: 4px;
    font-size: 12px;
    font-weight: bold;
    margin-bottom: 15px;
}

.video-container {
    width: 100%;
    height: 420px;
    background: url('https://images.unsplash.com/photo-1603313040187-575510626b9a?q=80&w=1000&auto=format&fit=crop') no-repeat center center/cover;
    border-radius: 6px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
}

.video-overlay-content {
    font-size: 50px;
    color: rgba(255,255,255,0.8);
    cursor: pointer;
}

.media-actions {
    position: absolute;
    top: 15px;
    right: 15px;
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.media-actions button {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    border: none;
    background: rgba(255, 255, 255, 0.9);
    cursor: pointer;
    box-shadow: 0 2px 5px rgba(0,0,0,0.2);
    font-size: 14px;
    color: #333;
    display: flex;
    align-items: center;
    justify-content: center;
}

.video-controls {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    background: rgba(0, 0, 0, 0.6);
    color: #fff;
    display: flex;
    align-items: center;
    padding: 8px 15px;
    gap: 15px;
    font-size: 12px;
}

.video-controls .right-controls {
    margin-left: auto;
    display: flex;
    gap: 15px;
    align-items: center;
}

/* قسم التفاصيل والأسعار */
.product-details-section {
    flex: 1.2;
}

.secured-trading-tag {
    color: #2e7d32;
    font-size: 13px;
    font-weight: bold;
    margin-bottom: 10px;
}

.product-title {
    font-size: 18px;
    font-weight: bold;
    line-height: 1.4;
    color: #111;
    margin-bottom: 20px;
}

/* جدول الأسعار */
.pricing-tiers {
    display: flex;
    background: #fafafa;
    border: 1px solid #eee;
    border-radius: 6px;
    margin-bottom: 20px;
}

.tier {
    flex: 1;
    padding: 12px;
    text-align: center;
    border-right: 1px solid #eee;
}

.tier:last-child {
    border-right: none;
}

.tier .price {
    display: block;
    font-size: 18px;
    font-weight: bold;
    color: #111;
    margin-bottom: 4px;
}

.tier .pcs {
    font-size: 11px;
    color: #777;
}

/* الأزرار */
.action-buttons {
    display: flex;
    gap: 10px;
    margin-bottom: 15px;
}

.btn-buy-now {
    flex: 1.2;
    background-color: #ea4335;
    color: white;
    border: none;
    padding: 12px;
    border-radius: 25px;
    font-weight: bold;
    font-size: 15px;
    cursor: pointer;
    transition: 0.2s;
}

.btn-buy-now:hover {
    background-color: #d33426;
}

.btn-send-inquiry {
    flex: 1.2;
    background-color: transparent;
    color: #333;
    border: 1px solid #ccc;
    padding: 12px;
    border-radius: 25px;
    font-weight: bold;
    font-size: 14px;
    cursor: pointer;
}

.btn-chat-now {
    flex: 1;
    background-color: transparent;
    color: #0d6efd;
    border: 1px solid #0d6efd;
    padding: 12px;
    border-radius: 25px;
    font-weight: bold;
    font-size: 14px;
    cursor: pointer;
}

.sample-note {
    font-size: 12px;
    color: #555;
    margin-bottom: 20px;
}

.divider {
    border: none;
    border-top: 1px solid #eee;
    margin: 20px 0;
}

/* المواصفات */
.product-specs h3 {
    font-size: 15px;
    margin-bottom: 12px;
    color: #111;
}

.spec-row {
    display: flex;
    font-size: 13px;
    margin-bottom: 8px;
}

.spec-row .label {
    width: 150px;
    color: #777;
}

.spec-row .value {
    color: #222;
}

.spec-row .select-highlight {
    color: #ea4335;
    font-weight: bold;
}

/* نافذة الاستمارة المنبثقة */
.modal {
    display: none;
    position: fixed;
    z-index: 1000;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.5);
    justify-content: center;
    align-items: center;
}

.modal-content {
    background-color: #fff;
    padding: 25px;
    border-radius: 8px;
    width: 90%;
    max-width: 400px;
    position: relative;
    box-shadow: 0 5px 15px rgba(0,0,0,0.3);
}

.close-btn {
    position: absolute;
    top: 10px;
    right: 15px;
    font-size: 24px;
    cursor: pointer;
    color: #aaa;
}

.modal-content h2 {
    font-size: 18px;
    margin-bottom: 5px;
    color: #111;
}

.form-group {
    margin-bottom: 12px;
    text-align: left;
}

.form-group label {
    display: block;
    font-size: 12px;
    margin-bottom: 4px;
    color: #444;
}

.form-group input, .form-group select, .form-group textarea {
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 13px;
}

.submit-order-btn {
    width: 100%;
    background-color: #25d366;
    color: white;
    border: none;
    padding: 10px;
    border-radius: 4px;
    font-weight: bold;
    cursor: pointer;
    margin-top: 10px;
}

.submit-order-btn:hover {
    background-color: #1ebe5d;
}
