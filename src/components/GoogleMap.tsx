"use client";

export default function GoogleMap() {
  return (
    <section className="w-full bg-white" style={{ width: "100%" }}>
      <div
        className="w-full overflow-hidden shadow-lg"
        style={{ width: "100%", height: "500px" }}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2887.6390840531067!2d-79.62292649999999!3d43.634870299999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b389739eaaaab%3A0x9c88b16f61affb07!2s1325%20Eglinton%20Ave%20E%20Unit%20230%2C%20Mississauga%2C%20ON%20L4W%204L9%2C%20Canada!5e0!3m2!1sen!2s!4v1762096664151!5m2!1sen!2s"
          width="100%"
          height="500"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Location Map"
        />
      </div>
    </section>
  );
}
