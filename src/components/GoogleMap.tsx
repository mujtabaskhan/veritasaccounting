"use client";

export default function GoogleMap() {
  const businessName = "Veritas Accounting";
  const address =
    "1325 Eglinton Ave E Unit 230, Mississauga, ON L4W 4L9, Canada";
  const mapEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(
    `${businessName}, ${address}`,
  )}&output=embed&z=19&hl=en&iwloc=near`;

  return (
    <section
      className="w-full bg-white relative z-10"
      style={{ width: "100%" }}
    >
      <div className="relative w-full">
        <div className="absolute top-4 left-4 z-20 bg-white rounded-lg shadow-xl p-4 max-w-sm border-2 border-[#232061]">
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0 mt-1">
              <div className="w-3 h-3 bg-red-600 rounded-full animate-pulse"></div>
            </div>
            <div>
              <h3 className="font-bold text-lg text-[#232061] mb-1">
                {businessName}
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">{address}</p>
            </div>
          </div>
        </div>

        <div
          className="w-full overflow-hidden shadow-lg rounded-lg"
          style={{ width: "100%", height: "500px" }}
        >
          <iframe
            src={mapEmbedUrl}
            width="100%"
            height="500"
            style={{ border: 0, borderRadius: "8px" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Veritas Accounting Location Map"
          />
        </div>
      </div>
    </section>
  );
}
