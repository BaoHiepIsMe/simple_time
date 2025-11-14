import React, { useEffect, useState } from "react";
import { loadTime, saveTime, loadHistory, saveHistory } from "./storage";
import "./App.css";

type Screen = "main" | "history";

function App() {
  const [screen, setScreen] = useState<Screen>("main");
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(false);
  const [history, setHistory] = useState<string[]>([]);
  const [intervalId, setIntervalId] = useState<NodeJS.Timer | null>(null);

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
    // Lưu thời gian mỗi khi đổi
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
    const updated = [...history, `Reset lúc: ${timestamp} (tại ${seconds}s)`];
    setHistory(updated);
    await saveHistory(updated);

    setSeconds(0);
    pauseTimer();
  };

  if (screen === "history") {
    return (
      <div className="container">
        <h1>Lịch sử Reset</h1>

        {history.length === 0 ? (
          <p>Chưa có lịch sử.</p>
        ) : (
          history.map((h, i) => (
            <div className="history-item" key={i}>
              {h}
            </div>
          ))
        )}

        <button className="back-btn" onClick={() => setScreen("main")}>
          Quay lại
        </button>
      </div>
    );
  }

  return (
    <div className="container">
      <h1>Simple Timer</h1>

      <div className="timer-box">{seconds} s</div>

      <button className="btn" onClick={startTimer}>▶ Bắt đầu</button>
      <button className="btn" onClick={pauseTimer}>⏸ Tạm dừng</button>
      <button className="btn" onClick={resetTimer}>🔁 Đặt lại</button>

      <button className="history-btn" onClick={() => setScreen("history")}>
        Xem lịch sử
      </button>
    </div>
  );
}

export default App;
