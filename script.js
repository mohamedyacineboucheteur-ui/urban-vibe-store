/* تصميم نافذة الاستمارة المنبثقة */
.modal {
    display: none;
    position: fixed;
    z-index: 2000;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.8);
    backdrop-filter: blur(5px);
    justify-content: center;
    align-items: center;
}

.modal-content {
    background-color: #1a1a1a;
    padding: 30px;
    border-radius: 12px;
    width: 90%;
    max-width: 450px;
    box-shadow: 0 10px 25px rgba(0,0,0,0.5);
    position: relative;
    border: 1px solid #333;
}

.close-btn {
    position: absolute;
    top: 15px;
    left: 20px;
    font-size: 28px;
    color: #aaa;
    cursor: pointer;
    transition: 0.3s;
}

.close-btn:hover {
    color: #ffb703;
}

.modal-content h2 {
    color: #fff;
    margin-bottom: 10px;
    font-size: 22px;
}

.form-group {
    margin-bottom: 15px;
    text-align: right;
}

.form-group label {
    display: block;
    margin-bottom: 5px;
    color: #ccc;
    font-size: 14px;
}

.form-group input, .form-group textarea {
    width: 100%;
    padding: 10px;
    background-color: #252525;
    border: 1px solid #444;
    border-radius: 8px;
    color: #fff;
    font-family: 'Cairo', sans-serif;
}

.form-group input:focus, .form-group textarea:focus {
    outline: none;
    border-color: #ffb703;
}

.submit-order-btn {
    width: 100%;
    background-color: #ffb703;
    color: #121212;
    padding: 12px;
    border: none;
    border-radius: 8px;
    font-weight: bold;
    font-size: 16px;
    cursor: pointer;
    transition: 0.3s;
    margin-top: 10px;
}

.submit-order-btn:hover {
    background-color: #fb8500;
}
