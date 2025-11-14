import React, { useEffect, useState } from "react";
import {
  loadTime,
  saveTime,
  loadHistory,
  saveHistory,
  clearHistory,
  deleteHistoryItem
} from "./storage";
import "./App.css";

type Screen = "main" | "history";

function App() {
  const [screen, setScreen] = useState<Screen>("main");
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(false);
  const [history, setHistory] = useState<string[]>([]);
  const [intervalId, setIntervalId] = useState<NodeJS.Timer | null>(null);

  const [showConfirm, setShowConfirm] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      const saved = await loadTime();
      setSeconds(saved);

      const his = await loadHistory();
      setHistory(his);
    };
    loadData();
  }, []);

  useEffect(() => {
    saveTime(seconds);
  }, [seconds]);

  const startTimer = () => {
    if (running) return;
    setRunning(true);

    const id = setInterval(() => {
      setSeconds((s) => s + 1);
    }, 1000);

    setIntervalId(id);
  };

  const pauseTimer = () => {
    setRunning(false);
    if (intervalId) clearInterval(intervalId);
  };

  const resetTimer = async () => {
    const timestamp = new Date().toLocaleString();
    const newItem = `Reset lúc ${timestamp} — ${seconds}s`;

    const updated = [...history, newItem];
    setHistory(updated);
    await saveHistory(updated);

    setSeconds(0);
    pauseTimer();
  };

  const confirmDeleteAll = async () => {
    await clearHistory();
    setHistory([]);
    setShowConfirm(false);
  };

  const deleteOne = async (index: number) => {
    const updated = await deleteHistoryItem(index, history);
    setHistory(updated);
  };

  if (screen === "history") {
    return (
      <div className="container">
        <h1 className="title">Lịch sử Reset</h1>

        {history.length === 0 ? (
          <p className="no-history">Chưa có lịch sử</p>
        ) : (
          history.map((item, i) => (
            <div className="history-item" key={i}>
              <span>{item}</span>

              {/* NÚT XOÁ 1 ITEM */}
              <span
                className="material-icons delete-icon"
                onClick={() => deleteOne(i)}
              >
                delete
              </span>
            </div>
          ))
        )}

        {/* Nút XÓA TẤT CẢ */}
        <button className="btn delete-btn" onClick={() => setShowConfirm(true)}>
          🗑 Xóa toàn bộ
        </button>

        <button className="btn back-btn" onClick={() => setScreen("main")}>
          ← Quay lại
        </button>

        {/* POPUP XÁC NHẬN */}
        {showConfirm && (
          <div className="popup-overlay">
            <div className="popup-box">
              <h3>Bạn có chắc muốn xoá toàn bộ lịch sử?</h3>

              <button className="popup-btn confirm" onClick={confirmDeleteAll}>
                Xóa
              </button>

              <button className="popup-btn cancel" onClick={() => setShowConfirm(false)}>
                Hủy
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="container">
      <h1 className="title">Simple Timer</h1>

      <div className="timer-circle animate">
        <span className="timer-number">{seconds}s</span>
      </div>

      <button className="btn start" onClick={startTimer}>▶ Bắt đầu</button>
      <button className="btn pause" onClick={pauseTimer}>⏸ Tạm dừng</button>
      <button className="btn reset" onClick={resetTimer}>🔁 Đặt lại</button>

      <button className="btn history-btn" onClick={() => setScreen("history")}>
        📜 Xem lịch sử
      </button>
    </div>
  );
}

export default App;
