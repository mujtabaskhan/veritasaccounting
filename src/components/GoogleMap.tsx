"use client";

export default function GoogleMap() {
  const businessName = "Veritas Accounting";
  const address =
    "1290 Eglinton Ave E, Suite 4, Mississauga ON L4W 1K8, Canada";
  const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2887.69511285689!2d-79.6223306!3d43.6337043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b38975529d0fd%3A0x54445ba7828719!2s1290%20Eglinton%20Ave%20E%20%234%2C%20Mississauga%2C%20ON%20L4W%201K8%2C%20Canada!5e0!3m2!1sen!2s!4v1764702158695!5m2!1sen!2s";

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