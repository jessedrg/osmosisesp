import { ImageResponse } from "next/og"

export const runtime = "edge"

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "80px",
          backgroundColor: "#f5f4f0",
          fontFamily: "Georgia, serif",
        }}
      >
        {/* Decorative lines */}
        <div style={{ display: "flex", alignItems: "center", gap: "24px", marginBottom: "40px" }}>
          <div style={{ width: "60px", height: "1px", backgroundColor: "#1a1a1840" }} />
          <div style={{ fontSize: 12, color: "#1a1a1860", fontFamily: "system-ui, sans-serif", letterSpacing: "4px", textTransform: "uppercase" }}>
            Sistemas de Purificacion
          </div>
          <div style={{ width: "60px", height: "1px", backgroundColor: "#1a1a1840" }} />
        </div>
        
        {/* Main title */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <div style={{ fontSize: 14, color: "#1a1a18", letterSpacing: "8px", textTransform: "uppercase", fontFamily: "system-ui, sans-serif", fontWeight: 500 }}>
            OSMOSIS ESP
          </div>
          <div style={{ fontSize: 80, color: "#1a1a18", fontStyle: "italic", letterSpacing: "-2px", marginTop: "24px", lineHeight: 0.9, textAlign: "center" }}>
            Agua pura,
          </div>
          <div style={{ fontSize: 80, color: "#1a1a1860", fontStyle: "italic", fontWeight: 300, letterSpacing: "-2px", lineHeight: 0.9, textAlign: "center" }}>
            diseño impecable
          </div>
        </div>
        
        {/* Bottom text */}
        <div style={{ fontSize: 16, color: "#1a1a1850", marginTop: "60px", fontFamily: "system-ui, sans-serif" }}>
          Osmosis inversa premium · Envio gratuito · Garantia 2 años
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  )
}
