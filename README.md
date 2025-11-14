# ⏱ Simple Timer App

Ứng dụng đếm thời gian đơn giản được xây dựng bằng **ReactJS + CapacitorJS**.  
Ứng dụng hỗ trợ đếm thời gian theo giây, tạm dừng, đặt lại và lưu lại lịch sử reset bằng **Capacitor Preferences**.  
Dữ liệu vẫn được giữ lại khi bạn đóng ứng dụng hoặc mở lại trên Android.
<img width="481" height="873" alt="image" src="https://github.com/user-attachments/assets/ab3e0375-1c6b-46d5-987f-3db5bcb3c7b7" />  
<img width="481" height="873" alt="image" src="https://github.com/user-attachments/assets/92791aac-4fc6-4fce-8deb-69f7e80b5ed5" />  
<img width="481" height="873" alt="image" src="https://github.com/user-attachments/assets/9e418cfc-d02e-4499-85aa-243706d84c57" />

---

## 🚀 Tính năng chính

### ✔ 1. Bộ đếm thời gian (Timer)
- Hiển thị số giây.
- Chạy bằng `setInterval()`.
- Đồng hồ chạy mượt, chính xác từng giây.

### ✔ 2. Điều khiển Timer
- **▶ Bắt đầu** – bắt đầu đếm.
- **⏸ Tạm dừng** – dừng không mất dữ liệu.
- **🔁 Đặt lại** – đưa về 0 giây.

### ✔ 3. Lịch sử Reset (History)
- Lưu lại thời điểm bạn bấm “Reset”.
- Hiển thị danh sách lịch sử theo timestamp.
- Lưu bằng `Capacitor Preferences`.

### ✔ 4. Lưu dữ liệu cục bộ
- Timer sẽ không bị mất khi bạn tắt app.
- Lịch sử reset cũng được lưu vĩnh viễn.

### ✔ 5. Ngoài ra
- Có thể xóa từng lịch sử hoặc xóa hết khi bấm vào biểu tượng thùng rác hoặc xóa tất cả ở trang lịch sử
---

## 🛠 Công nghệ sử dụng

- **ReactJS + TypeScript**
- **Capacitor Core**
- **@capacitor/preferences**
- CSS thuần
- Android Studio (AVD) / Android device

---

## 📦 Cấu trúc thư mục


simple-timer/  
├─ src/  
│ ├─ App.tsx # UI + Logic 2 màn hình  
│ ├─ App.css # Giao diện đẹp  
│ ├─ storage.ts # Lưu dữ liệu bằng Preferences  
│ ├─ index.tsx  
├─ public/  
├─ android/ # Native Android project  
├─ capacitor.config.ts  
├─ package.json  


---

## 🔧 Cách cài đặt & chạy ứng dụng

1️⃣ Cài dependencies  
npm install  
2️⃣ Cài Capacitor Plugins  
npm install @capacitor/core @capacitor/cli  
npm install @capacitor/preferences  
3️⃣ Build ứng dụng React  
npm run build  
4️⃣ Copy sang Capacitor  
npx cap copy  
5️⃣ Thêm Android platform  
npm install @capacitor/android  
npx cap add android  
6️⃣ Chạy ứng dụng trên Android  
npx cap run android  

Tên: Nguyễn Đức Bảo Hiệp

Mã sinh viên: 22IT084

Môn:Phát triển ứng dụng di dộng đa nền tảng(2)

Ứng dụng: Simple Timer

Công nghệ: React + Capacitor

Thi Giữa Kì
