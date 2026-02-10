// فتح نافذة الحجز
function openModal() {
    document.getElementById('bookingModal').style.display = 'flex';
}

// إغلاق نافذة الحجز
function closeModal() {
    document.getElementById('bookingModal').style.display = 'none';
}

// تأكيد الحجز
function confirmBooking() {
    const name = document.getElementById('patientName').value;
    if(name) {
        alert(`تم حجز موعدك بنجاح يا ${name}! سنتواصل معك قريباً.`);
        closeModal();
    } else {
        alert("يرجى إدخال اسمك أولاً.");
    }
}
document.getElementById('contactForm').addEventListener('submit', function(event) {
    // 1. منع الصفحة من إعادة التحميل عند الضغط على الزر
    event.preventDefault();

    // 2. جلب القيم التي كتبها المستخدم
    const name = document.getElementById('userName').value;
    const email = document.getElementById('userEmail').value;
    const message = document.getElementById('userMessage').value;

    // 3. محاكاة عملية الإرسال (يمكنك مستقبلاً ربطها ببريد إلكتروني حقيقي)
    if (name && email && message) {
        // إظهار تنبيه بنجاح العملية
        alert(`شكراً لك يا ${name}! تم إرسال رسالتك بنجاح. سنرد عليك على البريد: ${email}`);
        
        // 4. تفريغ الحقول بعد الإرسال
        this.reset();
    } else {
        alert("يرجى ملء جميع الحقول المطلوبة.");
    }
});