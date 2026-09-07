const COLORS = {
  black: "#0c0c0c",
  yellow: "#ffd400",
  cream: "#f4f1e8",
  dim: "#8a8a82",
};

// ---------- icons ----------
function SnatchIcon() {
  return (
    <svg className="row-icon" viewBox="0 0 24 24" fill="none">
      <path d="M2 12h2M20 12h2M4 12h1.5M18.5 12H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <rect x="5" y="9" width="2.4" height="6" rx="0.6" fill="currentColor" />
      <rect x="16.6" y="9" width="2.4" height="6" rx="0.6" fill="currentColor" />
      <rect x="7.4" y="11.2" width="9.2" height="1.6" rx="0.8" fill="currentColor" />
      <path d="M12 3v4.5M9.3 5.2 12 7.5l2.7-2.3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function OhsIcon() {
  return (
    <svg className="row-icon" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="4.4" r="1.7" fill="currentColor" />
      <rect x="6" y="7" width="12" height="1.8" rx="0.9" fill="currentColor" />
      <rect x="4.3" y="6.4" width="2" height="3" rx="0.5" fill="currentColor" />
      <rect x="17.7" y="6.4" width="2" height="3" rx="0.5" fill="currentColor" />
      <path d="M12 8.8v3.4M12 12.2 8.3 20M12 12.2 15.7 20M9.6 15h4.8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function RowIcon() {
  return (
    <svg className="row-icon" viewBox="0 0 24 24" fill="none">
      <path d="M3 19h6l3-9 6 3 3-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="12" cy="6" r="1.6" fill="currentColor" />
      <path d="M9 19h9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}
function BikeIcon() {
  return (
    <svg className="row-icon" viewBox="0 0 24 24" fill="none">
      <circle cx="6" cy="17" r="3" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="18" cy="17" r="3" stroke="currentColor" strokeWidth="1.8" />
      <path d="M6 17 10 8h4M10 8l4 9M14 17h4M9 5.2h2.4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="10.2" cy="4.6" r="1.2" fill="currentColor" />
    </svg>
  );
}
function SkiIcon() {
  return (
    <svg className="row-icon" viewBox="0 0 24 24" fill="none">
      <rect x="11" y="3" width="2" height="17" rx="1" fill="currentColor" />
      <path d="M7 6h3M14 6h3M6 10h4M14 10h4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

const ICONS: any = { snatch: SnatchIcon, ohs: OhsIcon, row: RowIcon, bike: BikeIcon, ski: SkiIcon };

// ---------- pyramid data (apex -> base) ----------
const STATIONS = [
  { type: "snatch", reps: "10", move: "SNATCH", kind: "lift", width: 24 },
  { type: "row", reps: "2000M", move: "ROW", kind: "cardio", width: 30 },
  { type: "ohs", reps: "20", move: "OHS", kind: "lift", width: 36 },
  { type: "bike", reps: "2000M", move: "BIKE", kind: "cardio", width: 42 },
  { type: "snatch", reps: "30", move: "SNATCH", kind: "lift", width: 48 },
  { type: "ski", reps: "2000M", move: "SKI", kind: "cardio", width: 54 },
  { type: "ohs", reps: "40", move: "OHS", kind: "lift", width: 60 },
  { type: "ski", reps: "2000M", move: "SKI", kind: "cardio", width: 66 },
  { type: "snatch", reps: "50", move: "SNATCH", kind: "lift", width: 72 },
  { type: "bike", reps: "2000M", move: "BIKE", kind: "cardio", width: 78 },
  { type: "ohs", reps: "60", move: "OHS", kind: "lift", width: 84 },
  { type: "row", reps: "2000M", move: "ROW", kind: "cardio", width: 90 },
  { type: "snatch", reps: "70", move: "SNATCH OR OHS", kind: "lift", width: 96, final: true },
];

const STATS = [
  { num: "13", lbl: "STATIONS" },
  { num: "280", lbl: "REPS" },
  { num: "12KM", lbl: "MONOSTRUCTURAL" },
  { num: "1", lbl: "BARBELL, DUMBBELL, OR KETTLEBELL – NO BREAKS" },
];

function HazardStripe() {
  return (
    <div
      style={{
        height: 16,
        background: `repeating-linear-gradient(-45deg, ${COLORS.yellow} 0 18px, ${COLORS.black} 18px 36px)`,
      }}
    />
  );
}

// Design Palette matching the dark industrial Snatchathon flyer aesthetic
// const COLORS = {
//   black: "#0c0c0c",
//   yellow: "#ffd400",
//   cream: "#f4f1e8",
//   dim: "#8a8a82",
//   rowBgHover: "#141412"
// };

const WEIGHT_CLASSES = [
  { weight: 10,  colorName: "Pink",   hex: "#ff69b4" },
  { weight: 20,  colorName: "White",  hex: "#ffffff" },
  { weight: 35,  colorName: "Tan",    hex: "#d2b48c" },
  { weight: 50,  colorName: "Maroon", hex: "#800000" },
  { weight: 65,  colorName: "Orange", hex: "#ff8c00" },
  { weight: 80,  colorName: "Teal",   hex: "#008080" },
  { weight: 95,  colorName: "Green",  hex: "#228b22" },
  { weight: 115, colorName: "Yellow", hex: "#ffd400" },
  { weight: 135, colorName: "Blue",   hex: "#1e90ff" },
  { weight: 160, colorName: "Red",    hex: "#ff0000" },
  { weight: 190, colorName: "Brown",  hex: "#8b4513" },
  { weight: 225, colorName: "Black",  hex: "#333333" },
  { weight: 265, colorName: "Steel",  hex: "#a9a9a9" },
  { weight: 315, colorName: "Gold",   hex: "#d4af37" },
];

export function WeightClassTable() {
  return (
    <div style={{ 
      background: COLORS.black, 
      padding: "24px", 
      fontFamily: "'Archivo', sans-serif",
      color: COLORS.cream,
      maxWidth: "760px",
      margin: "0 auto",
      border: "1px solid #2a2a26",
    }}>
      {/* Table Header Section */}
      <div style={{ marginBottom: "20px" }}>
        <h2 style={{ 
          fontFamily: "'Anton', sans-serif", 
          color: COLORS.yellow, 
          fontSize: "28px", 
          letterSpacing: "0.04em",
          margin: "0 0 4px 0",
          textTransform: "uppercase"
        }}>
          Weight Class Color Coding
        </h2>
        <p style={{ color: COLORS.dim, fontSize: "14px", margin: "1rem" }}>
          Each weight class will have a winner and runner up for each gender category, scored by fastest times.
        </p>
      </div>

      {/* Responsive Table Wrapper */}
      <div style={{ overflowX: "auto", display: "flex", justifyContent: "center" }}>
        <table style={{ 
          width: "90%", 
          alignItems: "center",
          borderCollapse: "collapse", 
          textAlign: "center",
          fontSize: "14px"
        }}>
          <thead>
            <tr style={{ borderBottom: `2px solid ${COLORS.yellow}` }}>
              <th style={{ padding: "12px 16px", fontWeight: "800", color: COLORS.yellow, width: "120px" }}>LBS</th>
              <th style={{ padding: "12px 16px", fontWeight: "800", color: COLORS.yellow, width: "120px" }}>KG</th>
              <th style={{ padding: "12px 16px", fontWeight: "800", color: COLORS.yellow, width: "120px", textAlign: "center"}}>COLOR CODING</th>
            </tr>
          </thead>
          <tbody>
            {WEIGHT_CLASSES.map((item, index) => (
              <tr 
                key={index} 
                style={{ 
                  borderBottom: "1px solid #2a2a26",
                  transition: "background 0.2s"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = COLORS.cream;
                  e.currentTarget.style.color = COLORS.dim;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                  e.currentTarget.style.color = COLORS.cream;
                }}
              >
                {/* LBS Cell */}
                <td style={{ padding: "14px 16px", fontWeight: "700", fontFamily: "'Anton', sans-serif", fontSize: "18px", letterSpacing: "0.02em", maxWidth: "20px" }}>
                  {item.weight} <span style={{ fontSize: "11px", fontFamily: "'Archivo', sans-serif", color: COLORS.dim, fontWeight: "500" }}>LBS</span>
                </td>

                {/* KG Cell */}
                <td style={{ padding: "14px 16px", fontWeight: "700", fontFamily: "'Anton', sans-serif", fontSize: "18px", letterSpacing: "0.02em" }}>
                  {(item.weight * 0.453592).toFixed(1)} <span style={{ fontSize: "11px", fontFamily: "'Archivo', sans-serif", color: COLORS.dim, fontWeight: "500" }}>KG</span>
                </td>
                
                {/* Color Dot + Name Cell */}
                <td style={{fontWeight: "600", padding: "0 1rem 0 5rem"}}>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px"}}>
                    <span style={{ 
                      width: "14px", 
                      height: "14px", 
                      borderRadius: "50%", 
                      background: item.hex,
                      border: item.colorName === "White" ? "1px solid #555" : "none",
                      boxShadow: item.colorName === "Black" ? "0 0 0 1px #444" : "none"
                    }} />
                    {item.colorName}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export function TrainingAndSponsors() {
  return (
    <div
      style={{
        background: COLORS.black,
        padding: "32px 24px",
        fontFamily: "'Archivo', sans-serif",
        color: COLORS.cream,
        maxWidth: "760px",
        margin: "0 auto",
        border: "1px solid #2a2a26",
        borderTop: "none",
      }}
    >
      {/* Scaled Training Section */}
      <div style={{ textAlign: "center", marginBottom: "32px" }}>
        <h2
          style={{
            fontFamily: "'Anton', sans-serif",
            color: COLORS.yellow,
            fontSize: "24px",
            letterSpacing: "0.03em",
            margin: "0 0 8px 0",
            textTransform: "uppercase",
            lineHeight: 1.2,
          }}
        >
          Don't have time to do a full Snatchathon?
        </h2>
        <p style={{ color: COLORS.cream, fontSize: "14px", margin: "0 auto", maxWidth: "540px" }}>
          Try these scaled down versions for training!
        </p>

        {/* Scaled Cards Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "16px",
            marginTop: "24px",
            textAlign: "left",
          }}
        >
          {/* Snatchathon Half */}
          <div
            style={{
              border: "1px solid #2a2a26",
              background: "#121210",
              padding: "20px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
                <h3
                  style={{
                    fontFamily: "'Anton', sans-serif",
                    fontSize: "20px",
                    color: COLORS.yellow,
                    margin: 0,
                    letterSpacing: "0.03em",
                  }}
                >
                  SNATCHATHON HALF
                </h3>
                <span
                  style={{
                    fontSize: "10px",
                    padding: "3px 8px",
                    background: COLORS.yellow,
                    color: COLORS.black,
                    fontWeight: "800",
                    letterSpacing: "0.05em",
                  }}
                >
                  50% VOLUME
                </span>
              </div>
              <p style={{ fontSize: "13px", color: COLORS.cream, margin: "0 0 16px 0", lineHeight: "1.5" }}>
                Cut all reps and monostructural distances in half (1,000m erg efforts). Excellent for mid-week threshold conditioning and pacing practice.
              </p>
            </div>
            <div style={{ fontSize: "11px", color: COLORS.dim, fontWeight: "700", letterSpacing: "0.06em" }}>
              • 140 TOTAL REPS • 6KM MONOSTRUCTURAL
            </div>
          </div>

          {/* Snatchathon Quarter */}
          <div
            style={{
              border: "1px solid #2a2a26",
              background: "#121210",
              padding: "20px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
                <h3
                  style={{
                    fontFamily: "'Anton', sans-serif",
                    fontSize: "20px",
                    color: COLORS.yellow,
                    margin: 0,
                    letterSpacing: "0.03em",
                  }}
                >
                  SNATCHATHON QUARTER
                </h3>
                <span
                  style={{
                    fontSize: "10px",
                    padding: "3px 8px",
                    background: COLORS.yellow,
                    color: COLORS.black,
                    fontWeight: "800",
                    letterSpacing: "0.05em",
                  }}
                >
                  25% VOLUME
                </span>
              </div>
              <p style={{ fontSize: "13px", color: COLORS.cream, margin: "0 0 16px 0", lineHeight: "1.5" }}>
                A sprint-style workout with 500m erg efforts and reps cut by one fourth (do a snatch pull for the half reps). Perfect for a quick engine builder, high-intensity interval day, or pre-event primer.
              </p>
            </div>
            <div style={{ fontSize: "11px", color: COLORS.dim, fontWeight: "700", letterSpacing: "0.06em" }}>
              • 70 TOTAL REPS • 3KM MONOSTRUCTURAL
            </div>
          </div>
        </div>
      </div>

      <div style={{ height: "1px", background: "#2a2a26", margin: "32px 0" }} />

      {/* Corporate Sponsors & Partners Section */}
      <div style={{ textAlign: "center" }}>
        <h3
          style={{
            fontFamily: "'Anton', sans-serif",
            color: COLORS.yellow,
            fontSize: "22px",
            letterSpacing: "0.04em",
            margin: "0 0 16px 0",
            textTransform: "uppercase",
          }}
        >
          Sponsors & Partners
        </h3>
        
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
            gap: "12px",
            alignItems: "center",
          }}
        >
          {["Equipment Partner", "Nutrition & Hydration", "Apparel Partner", "Recovery & Wellness"].map((partner, index) => (
            <div
              key={index}
              style={{
                border: "1px dashed #2a2a26",
                padding: "18px 12px",
                background: "#0a0a09",
                color: COLORS.dim,
                fontSize: "11px",
                fontWeight: "700",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
              }}
            >
              {partner}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


export default function SnatchathonFlyer() {
  return (
    <div
      style={{
        background: COLORS.black,
        display: "flex",
        justifyContent: "center",
        padding: "28px 12px",
        fontFamily: "'Archivo', sans-serif",
        minHeight: "100%",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Anton&family=Archivo:wght@500;600;700;800;900&display=swap');
        .flyer * { box-sizing: border-box; }
      `}</style>

      <div
        className="flyer"
        style={{
          width: "100%",
          maxWidth: 760,
          background: COLORS.black,
          position: "relative",
          overflow: "hidden",
          border: "1px solid #2a2a26",
          color: COLORS.cream,
        }}
      >
        <HazardStripe />

        {/* Header */}
        <header style={{ padding: "38px 28px 26px", textAlign: "center" }}>
          <div
            style={{
              fontWeight: 700,
              fontSize: 11,
              letterSpacing: ".14em",
              color: COLORS.yellow,
              marginBottom: 10,
              maxWidth: 420,
              marginLeft: "auto",
              marginRight: "auto",
              lineHeight: 1.5,
            }}
          >
            A FUN NEW TEST OF FITNESS, STRENGTH, AND ENDURANCE
          </div>
          <h1
            style={{
              fontFamily: "'Anton', sans-serif",
              fontWeight: 400,
              fontSize: "clamp(52px, 13vw, 88px)",
              lineHeight: 0.88,
              color: COLORS.yellow,
              letterSpacing: ".01em",
              margin: 0,
              WebkitTextStroke: `2px ${COLORS.black}`,
              textShadow: `5px 5px 0 ${COLORS.black}`,
            }}
          >
            SNATCHATHON
          </h1>
          <p
            style={{
              marginTop: 14,
              fontSize: 15,
              fontWeight: 600,
              color: COLORS.cream,
              fontStyle: "italic",
            }}
          >
            A race you can do{" "}
            <span style={{ color: COLORS.yellow, fontStyle: "normal" }}>
              in your oly shoes.
            </span>
          </p>
        </header>

        {/* Stats */}
        <div style={{ display: "flex", justifyContent: "center", background: COLORS.yellow }}>
          {STATS.map((s, i) => (
            <div
              key={i}
              style={{
                flex: 1,
                textAlign: "center",
                padding: "14px 6px",
                borderRight: i < STATS.length - 1 ? "1px solid rgba(0,0,0,.18)" : "none",
              }}
            >
              <div style={{ fontFamily: "'Anton', sans-serif", fontSize: 26, color: COLORS.black, lineHeight: 1 }}>
                {s.num}
              </div>
              <div
                style={{
                  fontSize: 8.6,
                  fontWeight: 700,
                  letterSpacing: ".06em",
                  color: "#3a3300",
                  marginTop: 4,
                  lineHeight: 1.35,
                }}
              >
                {s.lbl}
              </div>
            </div>
          ))}
        </div>

        {/* Pyramid */}
        <div
          style={{
            padding: "34px 20px 10px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 4,
          }}
        >
          <div
            style={{
              fontSize: 11,
              letterSpacing: ".24em",
              fontWeight: 700,
              color: COLORS.dim,
              margin: "2px 0 10px",
            }}
          >
            ▼ START HERE
          </div>

          {STATIONS.map((station, i) => {
            const Icon = ICONS[station.type];
            const isLift = station.kind === "lift";
            return (
              <div
                key={i}
                style={{
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  height: 42,
                  padding: "0 16px",
                  width: `${station.width}%`,
                  clipPath: "polygon(4% 0, 96% 0, 100% 100%, 0% 100%)",
                  background: isLift ? COLORS.yellow : COLORS.black,
                  color: isLift ? COLORS.black : COLORS.yellow,
                  borderTop: isLift ? "none" : "1px solid #2a2a26",
                  borderBottom: isLift ? "none" : "1px solid #2a2a26",
                  outline: station.final ? `2px solid ${COLORS.yellow}` : "none",
                  outlineOffset: station.final ? -2 : 0,
                }}
              >
                <span style={{ flex: "0 0 auto", width: 24, height: 24 }}>
                  <Icon />
                </span>
                <div
                  style={{
                    display: "flex",
                    alignItems: "baseline",
                    gap: 7,
                    whiteSpace: "nowrap",
                    fontFamily: "'Anton', sans-serif",
                    fontWeight: 400,
                  }}
                >
                  <span style={{ fontSize: 19 }}>{station.reps}</span>
                  <span
                    style={{
                      fontSize: 14,
                      fontFamily: "'Archivo', sans-serif",
                      fontWeight: isLift ? 800 : 700,
                      letterSpacing: ".06em",
                    }}
                  >
                    {station.move}
                  </span>
                </div>
              </div>
            );
          })}

          <div
            style={{
              fontSize: 11,
              letterSpacing: ".24em",
              fontWeight: 700,
              color: COLORS.dim,
              margin: "1rem 0",
            }}
          >
            ▼ CROSS THE FINISH LINE
          </div>
        </div>

        {/* Legend */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 24,
            // padding: "22px 20px 6px",
            fontSize: 10.5,
            fontWeight: 700,
            letterSpacing: ".1em",
            color: COLORS.dim,
            marginBottom: "2rem"
          }}
        >
          <span>
            <i style={{ display: "inline-block", width: 9, height: 9, marginRight: 6, verticalAlign: "middle", background: COLORS.yellow }} />
            BARBELL
          </span>
          <span>
            <i style={{ display: "inline-block", width: 9, height: 9, marginRight: 6, verticalAlign: "middle", background: COLORS.black, border: `1px solid ${COLORS.yellow}` }} />
            MACHINE
          </span>
        </div>

        <WeightClassTable />

        <TrainingAndSponsors />

        <HazardStripe />

        {/* Footer */}
        <footer style={{ padding: "26px 28px 32px", textAlign: "center" }}>
          <div style={{ fontFamily: "'Anton', sans-serif", fontSize: 22, color: COLORS.yellow, letterSpacing: ".02em" }}>
            GET IN!
          </div>
          <div style={{ border: `2px solid ${COLORS.yellow}`, padding: "18px 16px", marginTop: 6 }}>
            <div style={{ fontSize: 12.5, color: COLORS.cream, lineHeight: 1.5 }}>
              Race dates, entries, and the full list of{" "}
              <b style={{ color: COLORS.yellow }}>partner gyms where you can train</b> for
              Snatchathon coming soon...
            </div>
            <div style={{height: "0.75rem"}}></div>
            <div style={{ fontSize: 12.5, color: COLORS.cream, lineHeight: 1.5 }}>
              Sign up for our newsletter at:&nbsp;
              <a href="https://forms.gle/vPBxJAnBvCfXigvb6">https://forms.gle/vPBxJAnBvCfXigvb6</a>
            </div>
          </div>
          <div style={{ marginTop: 16, fontSize: 9.5, color: COLORS.dim, letterSpacing: ".06em" }}>
            ONE BARBELL, DUMBBELL, OR KETTLEBELL · THREE ERG MACHINES · ZERO EXCUSES
          </div>
        </footer>
      </div>
    </div>
  );
}

