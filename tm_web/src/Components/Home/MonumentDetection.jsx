function MonumentDetection() {
  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Monument Detection</h2>
      <iframe
        src="https://KananThakkar-indian-monuments.hf.space"
        allow="camera; microphone"
        style={{ border:"none", width:"100%", height:"100vh" }}
        title="Monument Detection"
      />
    </div>
  );
}

export default MonumentDetection;
