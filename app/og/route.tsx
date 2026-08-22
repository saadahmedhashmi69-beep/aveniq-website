import { ImageResponse } from "next/og";

/**
 * One shared, code-generated Open Graph image for every page — text
 * only, using the site's real palette. No fabricated logos, metrics, or
 * client names; just the brand name and the page title.
 */
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const title = (searchParams.get("title") || "Aveniq").slice(0, 120);

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          backgroundColor: "#08080a",
          color: "#e2e8f0",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            fontSize: 32,
            fontWeight: 600,
            color: "#00e5ff",
          }}
        >
          <div
            style={{
              display: "flex",
              width: 14,
              height: 14,
              borderRadius: "9999px",
              backgroundColor: "#00e5ff",
            }}
          />
          Aveniq
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 40,
            fontSize: 64,
            fontWeight: 700,
            lineHeight: 1.15,
            maxWidth: 950,
          }}
        >
          {title}
        </div>
      </div>
    ),
    { width: 1200, height: 630 },
  );
}
