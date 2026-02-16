* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Segoe UI', sans-serif;
}

body {
  min-height: 100vh;
  background: linear-gradient(135deg, #0f172a, #1e293b, #0f172a);
  color: #f1f5f9;
  overflow-x: hidden;
}

.background {
  position: fixed;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at 20% 30%, rgba(56,189,248,0.2), transparent 40%),
              radial-gradient(circle at 80% 70%, rgba(59,130,246,0.15), transparent 40%);
  z-index: -1;
}

header {
  text-align: center;
  padding: 80px 20px;
  margin: 40px auto;
  max-width: 900px;
}

.glass {
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
  border-radius: 15px;
  border: 1px solid rgba(255, 255, 255, 0.15);
  padding: 50px;
  margin: 40px auto;
  max-width: 900px;
  box-shadow: 0 8px 32px rgba(0,0,0,0.4);
}

.profile-img {
  width: 170px;
  height: 170px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid rgba(56,189,248,0.8);
  margin-bottom: 20px;
}

h1 {
  font-size: 2.5rem;
  color: #38bdf8;
  margin-bottom: 10px;
}

.typing {
  color: #cbd5e1;
  min-height: 30px;
}

h2 {
  color: #38bdf8;
  margin-bottom: 25px;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 15px;
}

.card {
  background: rgba(255,255,255,0.05);
  padding: 15px;
  border-radius: 10px;
  text-align: center;
  transition: 0.3s;
  border: 1px solid rgba(255,255,255,0.1);
}

.card:hover {
  transform: translateY(-5px);
  background: rgba(56,189,248,0.15);
}

footer {
  text-align: center;
  padding: 30px;
  color: #94a3b8;
}
